import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageShell from '../components/PageShell'
import './spec-pages.css'
import './ContactPage.css'

const INQUIRY_TYPES = [
    'B2B Consulting',
    'Government Partnership',
    'Corporate Training',
    'Speaking Inquiry',
    'Media / Press',
    'General Inquiry',
]

const ContactPage = () => {
    const [searchParams] = useSearchParams()

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: '',
    })

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Contact ENY Consulting | Book a Discovery Call'
    }, [])

    useEffect(() => {
        const topicHint = searchParams.get('topic')
        if (topicHint) {
            setForm((prev) => ({
                ...prev,
                message: `I’d like to discuss: ${topicHint}\n\n`,
            }))
        }
    }, [searchParams])

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.info('Contact form', form)
    }

    return (
        <PageShell>
            <section className="contact-page section">
                <div className="container">
                    <header className="contact-page-header">
                        <p className="contact-eyebrow">Get in Touch</p>
                        <h1 className="contact-title">Let&apos;s Talk Strategy</h1>
                        <p className="contact-desc">
                            Whether you&apos;re exploring consulting, evaluating a partnership, considering corporate
                            training, or looking to book Eno for a speaking engagement — we&apos;d love to hear from you.
                            Fill out the form below and a member of our team will respond within 24 hours.
                        </p>
                    </header>

                    <div className="contact-grid">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="contact-form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        autoComplete="given-name"
                                        required
                                        placeholder="Eno"
                                        value={form.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        autoComplete="family-name"
                                        required
                                        placeholder="Eka"
                                        value={form.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Work Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="eno@company.com"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone (Optional)</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    placeholder="+234 …"
                                    value={form.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inquiryType">Inquiry Type</label>
                                <select
                                    id="inquiryType"
                                    name="inquiryType"
                                    required
                                    value={form.inquiryType}
                                    onChange={handleChange}
                                >
                                    <option value="">Select an option…</option>
                                    {INQUIRY_TYPES.map((t) => (
                                        <option key={t} value={t}>
                                            {t}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">How can we help?</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    minLength={20}
                                    rows={5}
                                    placeholder="Tell us about your project, challenge, or inquiry…"
                                    value={form.message}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary contact-submit">
                                Send Message
                            </button>
                            <p className="contact-form-micro">We respond to all inquiries within 24 business hours.</p>
                            <p className="contact-form-note">
                                Routes to GoHighLevel by inquiry type — configure API / webhook in production.
                            </p>
                        </form>

                        <aside className="contact-info-card">
                            <h2>Direct Contact</h2>
                            <dl className="contact-dl">
                                <div>
                                    <dt>General</dt>
                                    <dd>
                                        <a href="mailto:info@enyconsulting.ca">info@enyconsulting.ca</a>
                                    </dd>
                                </div>
                                <div>
                                    <dt>Executive Office</dt>
                                    <dd>
                                        <a href="mailto:assistant@enoeka.com">assistant@enoeka.com</a>
                                    </dd>
                                </div>
                                <div>
                                    <dt>Student Support</dt>
                                    <dd>
                                        <a href="mailto:support@businessanalysisschool.com">
                                            support@businessanalysisschool.com
                                        </a>
                                    </dd>
                                </div>
                                <div>
                                    <dt>Canada</dt>
                                    <dd>
                                        <a href="tel:+15873288469">+1-587-328-8469</a>
                                    </dd>
                                </div>
                                <div>
                                    <dt>Nigeria</dt>
                                    <dd>
                                        <a href="tel:+2349085515969">+234-908-551-5969</a>
                                    </dd>
                                </div>
                                <div>
                                    <dt>WhatsApp</dt>
                                    <dd>
                                        <a href="https://wa.me/message/3AIHXB6TNAJ7L1" target="_blank" rel="noopener noreferrer">
                                            wa.me/message/3AIHXB6TNAJ7L1
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                            <div className="contact-offices">
                                <h3>Our Offices</h3>
                                <p>
                                    Calgary, Alberta, Canada (Headquarters)
                                    <br />
                                    Lagos, Nigeria
                                    <br />
                                    Abuja, Nigeria
                                    <br />
                                    Accra, Ghana
                                </p>
                            </div>
                            <div className="contact-follow">
                                <h3>Follow Us</h3>
                                <ul className="contact-follow-list">
                                    <li>
                                        <a
                                            href="https://linkedin.com/company/enyconsultinginc"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            LinkedIn — company/enyconsultinginc
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com/enyconsulting" target="_blank" rel="noopener noreferrer">
                                            Instagram — @enyconsulting
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://facebook.com/enyconsult" target="_blank" rel="noopener noreferrer">
                                            Facebook — facebook.com/enyconsult
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                            YouTube — Eno Eka
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </PageShell>
    )
}

export default ContactPage
