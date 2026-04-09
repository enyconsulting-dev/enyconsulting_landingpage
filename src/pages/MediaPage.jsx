import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import './spec-pages.css'
import './MediaPage.css'

const OUTLETS = [
    { name: 'Forbes', desc: "Feature profile on Eno Eka's journey and impact" },
    { name: 'CTV News', desc: 'National television coverage' },
    { name: 'CBC', desc: 'Canadian Broadcasting Corporation feature' },
    { name: 'The Guardian', desc: 'International press coverage' },
    { name: 'Women of Influence', desc: 'RBC Canadian Women Entrepreneur Awards spotlight' },
    { name: 'CanvasRebel', desc: 'In-depth founder interview and profile' },
    { name: 'The Nation', desc: 'Nigerian national press feature' },
    { name: 'The Startup Impact', desc: 'Podcast and video interview feature' },
]

const MediaPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Media & Press | ENY Consulting'
    }, [])

    return (
        <PageShell>
            <section className="media-page section">
                <div className="container">
                    <header className="media-page-header">
                        <p className="media-eyebrow">Media &amp; Press</p>
                        <h1 className="media-title">In the Press</h1>
                        <p className="media-desc">
                            Eno Eka and ENY Consulting have been featured in leading media outlets across Canada, the
                            United States, Nigeria, and the United Kingdom. Our work and our story have been covered by
                            Forbes, CTV, CBC, The Guardian, Women of Influence, and many more.
                        </p>
                    </header>
                    <div className="media-grid">
                        {OUTLETS.map((o) => (
                            <article key={o.name} className="media-card">
                                <h2>{o.name}</h2>
                                <p>{o.desc}</p>
                            </article>
                        ))}
                        <article className="media-card media-card-cta">
                            <h2>Media Inquiries</h2>
                            <p>
                                For interview requests, press inquiries, and media partnerships, contact our communications
                                team at{' '}
                                <a href="mailto:press@enyconsulting.ca" className="media-email-link">
                                    press@enyconsulting.ca
                                </a>
                                . A press kit with professional photography, approved bios, and key facts is available for
                                download.
                            </p>
                            <Link to="/contact" className="btn btn-ghost">
                                Download Press Kit
                            </Link>
                            <p className="media-micro">
                                Kit includes: professional headshots (3 options), approved bios (short and long), company
                                fact sheet, key statistics, media mention highlights.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
        </PageShell>
    )
}

export default MediaPage
