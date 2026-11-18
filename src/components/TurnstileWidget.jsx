import { useEffect, useRef, useState } from 'react'

const SCRIPT_URL = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
let scriptPromise

function loadTurnstile() {
    if (window.turnstile) return Promise.resolve(window.turnstile)

    if (!scriptPromise) {
        scriptPromise = new Promise((resolve, reject) => {
            const script = document.createElement('script')
            script.src = SCRIPT_URL
            script.async = true
            script.defer = true
            script.onload = () => {
                if (window.turnstile) resolve(window.turnstile)
                else reject(new Error('Turnstile did not initialize'))
            }
            script.onerror = () => reject(new Error('Turnstile failed to load'))
            document.head.appendChild(script)
        }).catch((error) => {
            scriptPromise = null
            throw error
        })
    }

    return scriptPromise
}

const TurnstileWidget = ({ action, onTokenChange, resetSignal }) => {
    const containerRef = useRef(null)
    const widgetIdRef = useRef(null)
    const onTokenChangeRef = useRef(onTokenChange)
    const [loadError, setLoadError] = useState('')
    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim()

    onTokenChangeRef.current = onTokenChange

    useEffect(() => {
        if (!siteKey || !containerRef.current) return undefined

        let isMounted = true

        loadTurnstile()
            .then((turnstile) => {
                if (!isMounted || !containerRef.current) return

                widgetIdRef.current = turnstile.render(containerRef.current, {
                    sitekey: siteKey,
                    action,
                    callback: (token) => onTokenChangeRef.current(token),
                    'expired-callback': () => onTokenChangeRef.current(''),
                    'error-callback': () => onTokenChangeRef.current(''),
                })
            })
            .catch((error) => {
                if (!isMounted) return
                console.error('Turnstile could not be initialized:', error)
                setLoadError('Security verification could not load. Please refresh and try again.')
            })

        return () => {
            isMounted = false
            if (widgetIdRef.current !== null && window.turnstile) {
                window.turnstile.remove(widgetIdRef.current)
                widgetIdRef.current = null
            }
        }
    }, [action, siteKey])

    useEffect(() => {
        if (resetSignal === 0) return
        onTokenChangeRef.current('')
        if (widgetIdRef.current !== null && window.turnstile) {
            window.turnstile.reset(widgetIdRef.current)
        }
    }, [resetSignal])

    if (!siteKey) {
        return <p role="alert">Security verification is not configured. Please contact us directly.</p>
    }

    return (
        <div>
            <div ref={containerRef} />
            {loadError && <p role="alert">{loadError}</p>}
        </div>
    )
}

export default TurnstileWidget
