import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { GHL_BOOKING_URL } from '../config/site'
import { SERVICES_FULL, SERVICES_HERO } from '../data/servicesCopy'
import './spec-pages.css'
import './ServicesPage.css'

const contactHref = (prefill) => `/contact${prefill ? `?topic=${encodeURIComponent(prefill)}` : ''}`

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Consulting Services | ENY Consulting'
    }, [])

    return (
        <PageShell className="services-page">
            <section className="page-hero-spec">
                <div className="page-hero-inner">
                    <p className="page-hero-eyebrow">{SERVICES_HERO.eyebrow}</p>
                    <h1>
                        Strategic Consulting That Drives <em>Revenue, Efficiency, and Growth</em>
                    </h1>
                    <p className="page-hero-sub">{SERVICES_HERO.body}</p>
                </div>
            </section>

            <section className="page-section-block services-detail-section">
                <div className="container services-detail-list">
                    {SERVICES_FULL.map((s) => (
                        <article key={s.id} id={s.id} className="service-detail-card">
                            <h2 className="service-detail-title">{s.title}</h2>
                            <p className="service-detail-body">{s.body}</p>
                            <h3 className="service-detail-subhead">What&apos;s Included</h3>
                            <ul className="service-detail-items">
                                {s.included.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            {s.extraBody ? <p className="service-detail-body service-detail-extra">{s.extraBody}</p> : null}
                            {s.caseReference ? (
                                <p className="service-case-ref">
                                    <strong>Case reference:</strong> {s.caseReference}
                                </p>
                            ) : null}
                            <Link to={contactHref(s.prefill)} className="btn btn-primary service-detail-cta">
                                {s.cta}
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            <section className="page-section-block alt services-not-sure">
                <div className="container services-not-sure-inner">
                    <h2 className="services-not-sure-title">Not Sure What You Need?</h2>
                    <p className="services-not-sure-body">
                        That&apos;s completely normal. Most of our clients come to us with a challenge, not a shopping
                        list. Book a free 30-minute discovery call with our consulting team. We&apos;ll listen to what
                        you&apos;re facing, ask the right questions, and recommend the approach that makes the most sense
                        for your business. No pitch. No pressure. Just strategy.
                    </p>
                    <a href={GHL_BOOKING_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        Book a Free Discovery Call
                    </a>
                </div>
            </section>

            <section className="page-section-block services-brochure">
                <div className="container">
                    <div className="lead-capture lead-capture--services">
                        <h3>Download Our Full Services Brochure</h3>
                        <p>
                            Get a detailed overview of all our consulting services, methodologies, and engagement models.
                            Perfect for sharing with your leadership team or procurement department.
                        </p>
                        <form className="lead-capture-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your work email" required aria-label="Work email" />
                            <button type="submit" className="btn btn-primary">
                                Download Brochure
                            </button>
                        </form>
                        <p className="lead-capture-note">
                            Email capture → PDF via GHL. Tag as brochure-download for follow-up.
                        </p>
                    </div>
                </div>
            </section>
        </PageShell>
    )
}

export default ServicesPage
