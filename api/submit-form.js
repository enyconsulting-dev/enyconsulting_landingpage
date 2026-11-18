const WEBHOOK_URL =
    'https://services.leadconnectorhq.com/hooks/Qum6zwDsfvHsbXiehFQR/webhook-trigger/14RPfHTryn7zig9j9LWq'
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const INQUIRY_TYPES = new Set([
    'B2B Consulting',
    'Government Partnership',
    'Corporate Training',
    'Speaking Inquiry',
    'Media / Press',
    'General Inquiry',
])
const RESOURCE_NAMES = new Set([
    'Government Capabilities Brochure',
    'AI Readiness Assessment Toolkit',
    'Services Brochure',
])

function sendJson(res, status, data) {
    res.statusCode = status
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.setHeader('Cache-Control', 'no-store')
    res.setHeader('X-Content-Type-Options', 'nosniff')
    res.end(JSON.stringify(data))
}

function isSameOriginRequest(req) {
    const requestOrigin = req.headers.origin
    const requestHost = req.headers.host

    if (!requestOrigin || !requestHost) return false

    try {
        const origin = new URL(requestOrigin)
        const isLocalDevelopment = origin.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(origin.hostname)

        return (
            origin.host === requestHost &&
            (origin.protocol === 'https:' || isLocalDevelopment) &&
            !origin.username &&
            !origin.password
        )
    } catch {
        return false
    }
}

function readString(value, maxLength, required = true) {
    if (typeof value !== 'string') return null

    const normalized = value.trim()
    if ((required && !normalized) || normalized.length > maxLength) return null
    return normalized
}

function buildPayload(body) {
    const fullName = readString(body.fullName, 120)
    const email = readString(body.email, 254)
    const phone = readString(body.phone ?? '', 40, false)

    if (!fullName || !email || phone === null || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null

    if (body.type === 'contact') {
        const inquiryType = readString(body.inquiryType, 80)
        const message = readString(body.message, 5000)

        if (!INQUIRY_TYPES.has(inquiryType) || !message || message.length < 20) return null

        return {
            fullName,
            email,
            phone,
            inquiryType,
            message,
            source: 'ENY_SITE',
            type: 'contact',
            tag: inquiryType,
            submittedAt: new Date().toISOString(),
        }
    }

    if (body.type === 'resource') {
        const resource = readString(body.resource, 120)
        if (!RESOURCE_NAMES.has(resource)) return null

        return {
            fullName,
            email,
            phone,
            resource,
            source: 'ENY_SITE',
            type: 'resource',
            tag: resource,
            submittedAt: new Date().toISOString(),
        }
    }

    return null
}

async function verifyTurnstile(token, expectedAction, hostname, secret) {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ secret, response: token }),
    })

    if (!response.ok) {
        console.error('Turnstile verification service returned:', response.status)
        return false
    }

    const result = await response.json()
    return result.success && result.action === expectedAction && result.hostname === hostname
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST')
        return sendJson(res, 405, { error: 'Method not allowed' })
    }

    if (!isSameOriginRequest(req)) {
        return sendJson(res, 403, { error: 'Forbidden' })
    }

    const contentType = req.headers['content-type'] || ''
    if (!contentType.toLowerCase().startsWith('application/json')) {
        return sendJson(res, 415, { error: 'Unsupported media type' })
    }

    const body = req.body
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
        return sendJson(res, 400, { error: 'Invalid form submission' })
    }

    const token = readString(body.turnstileToken, 2048)
    const payload = buildPayload(body)
    if (!token || !payload) {
        return sendJson(res, 400, { error: 'Invalid form submission' })
    }

    const secret = process.env.TURNSTILE_SECRET_KEY
    if (!secret) {
        console.error('TURNSTILE_SECRET_KEY is not configured')
        return sendJson(res, 503, { error: 'Form submission is temporarily unavailable' })
    }

    let origin
    try {
        origin = new URL(req.headers.origin)
    } catch {
        return sendJson(res, 403, { error: 'Forbidden' })
    }

    try {
        const verified = await verifyTurnstile(token, body.type, origin.hostname, secret)
        if (!verified) {
            return sendJson(res, 403, { error: 'Security verification failed' })
        }
    } catch (error) {
        console.error('Turnstile verification request failed:', error)
        return sendJson(res, 502, { error: 'Security verification is temporarily unavailable' })
    }

    try {
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        })

        if (!response.ok) {
            console.error('CRM webhook returned:', response.status)
            return sendJson(res, 502, { error: 'Form submission failed' })
        }
    } catch (error) {
        console.error('CRM webhook request failed:', error)
        return sendJson(res, 502, { error: 'Form submission failed' })
    }

    return sendJson(res, 200, { success: true })
}
