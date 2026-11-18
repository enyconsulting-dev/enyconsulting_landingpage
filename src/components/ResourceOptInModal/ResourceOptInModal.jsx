import { useState } from 'react'
import TurnstileWidget from '../TurnstileWidget'
import './ResourceOptInModal.css'

const ResourceOptInModal = ({ isOpen, resourceName, onClose, onSubmit }) => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phone: '',
    })

    const [isLoading, setIsLoading] = useState(false)
    const [turnstileToken, setTurnstileToken] = useState('')
    const [turnstileResetSignal, setTurnstileResetSignal] = useState(0)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!turnstileToken) return
        setIsLoading(true)

        try {
            const success = await onSubmit({ ...form, turnstileToken })

            if (success) {
                setForm({ fullName: '', email: '', phone: '' })
                onClose()
                return
            }
        } finally {
            setIsLoading(false)
            setTurnstileToken('')
            setTurnstileResetSignal((signal) => signal + 1)
        }
    }

    if (!isOpen) return null

    return (
        <>
            <div className="resource-modal-overlay" onClick={onClose} />
            <div className="resource-modal">
                <button className="resource-modal-close" onClick={onClose} aria-label="Close modal">
                    ✕
                </button>

                <h2>Download Resource</h2>
                <p className="resource-modal-subtitle">
                    To access <strong>{resourceName}</strong>, please provide your information below.
                </p>

                <form onSubmit={handleSubmit} className="resource-modal-form">
                    <div className="form-group">
                        <label htmlFor="modal-fullName">Full Name</label>
                        <input
                            id="modal-fullName"
                            name="fullName"
                            type="text"
                            autoComplete="name"
                            required
                            placeholder="Your full name"
                            value={form.fullName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="modal-email">Email</label>
                        <input
                            id="modal-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="your@email.com"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="modal-phone">Phone (Optional)</label>
                        <input
                            id="modal-phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="+1 (555) 000-0000"
                            value={form.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <TurnstileWidget
                        action="resource"
                        onTokenChange={setTurnstileToken}
                        resetSignal={turnstileResetSignal}
                    />
                    <button type="submit" className="btn btn-primary" disabled={isLoading || !turnstileToken}>
                        {isLoading ? 'Processing...' : 'Download Resource'}
                    </button>
                </form>

                <p className="resource-modal-privacy">
                    We respect your privacy. Your information will only be used to process your download request.
                </p>
            </div>
        </>
    )
}

export default ResourceOptInModal
