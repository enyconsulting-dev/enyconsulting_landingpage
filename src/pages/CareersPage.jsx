import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import './spec-pages.css'
import './CareersPage.css'

const CareersPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Careers | ENY Consulting'
    }, [])

    return (
        <PageShell>
            <section className="careers-page page-section-block">
                <div className="container careers-inner">
                    <h1 className="careers-title">Careers</h1>
                    <p className="careers-body">
                        We&apos;re building a global team of consultants, analysts, and educators who want to do work
                        that matters. Opportunities are posted here as they open — or reach out through our contact form
                        with your background and the role you&apos;re seeking.
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                        Express Interest
                    </Link>
                </div>
            </section>
        </PageShell>
    )
}

export default CareersPage
