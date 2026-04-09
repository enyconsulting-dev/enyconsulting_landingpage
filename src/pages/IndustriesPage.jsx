import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { INDUSTRIES_FULL, INDUSTRIES_HERO } from '../data/industriesCopy'
import './spec-pages.css'
import './IndustriesPage.css'

const IndustriesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Industries We Serve | ENY Consulting'
    }, [])

    return (
        <PageShell>
            <section className="industries-page-hero page-hero-spec">
                <div className="page-hero-inner">
                    <p className="page-hero-eyebrow">{INDUSTRIES_HERO.eyebrow}</p>
                    <h1>
                        Deep Industry Expertise. <em>Proven Results Across Sectors.</em>
                    </h1>
                    <p className="page-hero-sub">{INDUSTRIES_HERO.body}</p>
                </div>
            </section>

            <section className="page-section-block industries-detail-section">
                <div className="container industries-detail-list">
                    {INDUSTRIES_FULL.map((ind) => (
                        <article key={ind.id} id={ind.id} className="industry-detail-card">
                            <h2 className="industry-detail-title">{ind.title}</h2>
                            <p className="industry-detail-body">{ind.body}</p>
                            <p className="industry-detail-caps">
                                <strong>Capabilities:</strong> {ind.capabilities}
                            </p>
                            {ind.ctaPath ? (
                                <Link to={ind.ctaPath} className="btn btn-primary industry-detail-cta">
                                    {ind.cta}
                                </Link>
                            ) : (
                                <Link
                                    to={`/contact?topic=${encodeURIComponent(ind.title)}`}
                                    className="btn btn-primary industry-detail-cta"
                                >
                                    {ind.cta}
                                </Link>
                            )}
                        </article>
                    ))}
                </div>
            </section>
        </PageShell>
    )
}

export default IndustriesPage
