import assert from 'node:assert/strict'
import { afterEach, test } from 'node:test'
import handler from '../api/submit-form.js'

const originalFetch = globalThis.fetch
const originalSecret = process.env.TURNSTILE_SECRET_KEY

afterEach(() => {
    globalThis.fetch = originalFetch
    if (originalSecret === undefined) delete process.env.TURNSTILE_SECRET_KEY
    else process.env.TURNSTILE_SECRET_KEY = originalSecret
})

function createRequest(overrides = {}) {
    return {
        method: 'POST',
        headers: {
            host: 'example.com',
            origin: 'https://example.com',
            'content-type': 'application/json',
        },
        body: {
            fullName: 'Ada Lovelace',
            email: 'ada@example.com',
            phone: '',
            inquiryType: 'B2B Consulting',
            message: 'I would like to discuss a consulting engagement.',
            type: 'contact',
            turnstileToken: 'valid-token',
        },
        ...overrides,
    }
}

function createResponse() {
    return {
        headers: {},
        setHeader(name, value) {
            this.headers[name] = value
        },
        end(body) {
            this.body = JSON.parse(body)
        },
    }
}

test('rejects a cross-origin request without contacting Turnstile or the CRM', async () => {
    process.env.TURNSTILE_SECRET_KEY = 'test-secret'
    let fetchCalled = false
    globalThis.fetch = async () => {
        fetchCalled = true
        throw new Error('fetch should not be called')
    }

    const res = createResponse()
    const req = createRequest()
    req.headers.origin = 'https://attacker.example'
    await handler(req, res)

    assert.equal(res.statusCode, 403)
    assert.equal(fetchCalled, false)
})

test('does not forward a submission when Turnstile rejects its token', async () => {
    process.env.TURNSTILE_SECRET_KEY = 'test-secret'
    let fetchCallCount = 0
    globalThis.fetch = async (url) => {
        fetchCallCount += 1
        assert.match(url, /turnstile\/v0\/siteverify$/)
        return { ok: true, json: async () => ({ success: false }) }
    }

    const res = createResponse()
    await handler(createRequest(), res)

    assert.equal(res.statusCode, 403)
    assert.deepEqual(res.body, { error: 'Security verification failed' })
    assert.equal(fetchCallCount, 1)
})

test('forwards the existing CRM payload only after Turnstile verification', async () => {
    process.env.TURNSTILE_SECRET_KEY = 'test-secret'
    const calls = []
    globalThis.fetch = async (url, options) => {
        calls.push({ url, options })
        if (url.includes('siteverify')) {
            return {
                ok: true,
                json: async () => ({ success: true, action: 'contact', hostname: 'example.com' }),
            }
        }
        return { ok: true }
    }

    const res = createResponse()
    await handler(createRequest(), res)

    assert.equal(res.statusCode, 200)
    assert.deepEqual(res.body, { success: true })
    assert.equal(calls.length, 2)
    assert.match(calls[0].url, /turnstile\/v0\/siteverify$/)
    assert.equal(calls[0].options.body.get('secret'), 'test-secret')
    assert.equal(calls[0].options.body.get('response'), 'valid-token')
    assert.equal(
        calls[1].url,
        'https://services.leadconnectorhq.com/hooks/Qum6zwDsfvHsbXiehFQR/webhook-trigger/14RPfHTryn7zig9j9LWq',
    )

    const forwarded = JSON.parse(calls[1].options.body)
    assert.equal(forwarded.fullName, 'Ada Lovelace')
    assert.equal(forwarded.email, 'ada@example.com')
    assert.equal(forwarded.inquiryType, 'B2B Consulting')
    assert.equal(forwarded.type, 'contact')
    assert.equal(forwarded.tag, 'B2B Consulting')
    assert.equal(forwarded.source, 'ENY_SITE')
    assert.equal('turnstileToken' in forwarded, false)
})

test('forwards resource opt-ins with the existing resource fields', async () => {
    process.env.TURNSTILE_SECRET_KEY = 'test-secret'
    const calls = []
    globalThis.fetch = async (url, options) => {
        calls.push({ url, options })
        if (url.includes('siteverify')) {
            return {
                ok: true,
                json: async () => ({ success: true, action: 'resource', hostname: 'example.com' }),
            }
        }
        return { ok: true }
    }

    const req = createRequest()
    req.body = {
        fullName: 'Ada Lovelace',
        email: 'ada@example.com',
        phone: '',
        resource: 'Services Brochure',
        type: 'resource',
        turnstileToken: 'valid-token',
    }
    const res = createResponse()
    await handler(req, res)

    assert.equal(res.statusCode, 200)
    const forwarded = JSON.parse(calls[1].options.body)
    assert.deepEqual(Object.keys(forwarded).sort(), [
        'email',
        'fullName',
        'phone',
        'resource',
        'source',
        'submittedAt',
        'tag',
        'type',
    ])
    assert.equal(forwarded.resource, 'Services Brochure')
    assert.equal(forwarded.tag, 'Services Brochure')
    assert.equal(forwarded.type, 'resource')
})
