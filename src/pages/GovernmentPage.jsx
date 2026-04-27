import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import ResourceOptInModal from '../components/ResourceOptInModal/ResourceOptInModal'
import { GHL_BOOKING_URL } from '../config/site'
import { sendResourceDownloadToWebhook } from '../services/webhookService'
import './spec-pages.css'
import './GovernmentPage.css'

const PROOF_POINTS = [
    'Led a $6B+ core banking transformation — one of Canada’s largest and most complex digital transformation projects, demonstrating our ability to deliver at enterprise scale.',
    'Trained over 100,000 professionals across 90+ countries — proving our capacity to design and deliver workforce development programs at national and international scale.',
    'IIBA Endorsed Education Provider and ScrumStudy Authorized Training Partner — our training programs meet the highest global standards for professional development.',
    'Active operations in Canada, the USA, Nigeria, and Ghana — with deep understanding of government procurement, regulatory environments, and cultural contexts across these markets.',
    'Recognized by Forbes, RBC, and the United Nations — our credibility has been validated by the institutions that matter most.',
]

const CAPABILITIES = [
    {
        title: 'Workforce Development & Capacity Building',
        body: 'We design scalable training programs that upskill government employees and citizens in the skills that drive economic growth: business analysis, data analytics, AI literacy, product management, project management, and digital skills. Our programs are built for practical application, delivered by working professionals, and measured against real-world outcomes.',
        extra:
            'Our education ecosystem has already demonstrated this capability at scale — 100,000+ professionals trained across 90+ countries, with graduates landing roles at major corporations, government agencies, and international organizations worldwide.',
    },
    {
        title: 'Digital Transformation Advisory',
        body: 'We help government agencies modernize legacy systems, digitize citizen-facing services, and implement technology platforms that improve efficiency, transparency, and public service delivery. Our approach accounts for the unique constraints of government — procurement cycles, multi-stakeholder governance, data sovereignty requirements, and the critical importance of service continuity.',
    },
    {
        title: 'AI Readiness & Strategy',
        body: 'AI adoption in government requires a responsible, phased approach. We assess government agencies’ readiness for AI adoption, develop responsible AI frameworks that address ethics and citizen trust, and design pilot programs that demonstrate measurable impact before committing to full-scale deployment. Our goal is to help governments harness AI for better citizen outcomes — not deploy technology for its own sake.',
    },
    {
        title: 'Data Governance & Analytics',
        body: 'Good governance starts with good data. We help government agencies build data infrastructure, implement governance frameworks that ensure data quality and security, and use analytics to drive evidence-based policy decisions. From citizen data management to inter-ministry data sharing protocols, we build the foundation for data-driven government.',
    },
    {
        title: 'Public-Private Partnerships',
        body: 'Some of the most impactful government initiatives are delivered through structured partnerships with the private sector. We help government agencies design, negotiate, and manage public-private partnerships that deliver technology solutions, training programs, and innovation hubs — sharing risk, pooling expertise, and accelerating outcomes.',
    },
]

const GovernmentPage = () => {
    const [modalState, setModalState] = useState({
        isOpen: false,
        resourceName: null,
        downloadUrl: null,
    })

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Government Solutions | ENY Consulting'
    }, [])

    const handleResourceDownload = (resourceName, downloadUrl) => {
        setModalState({
            isOpen: true,
            resourceName,
            downloadUrl,
        })
    }

    const handleModalClose = () => {
        setModalState({
            isOpen: false,
            resourceName: null,
            downloadUrl: null,
        })
    }

    const handleModalSubmit = async (formData) => {
        // Send data to webhook
        const success = await sendResourceDownloadToWebhook({
            ...formData,
            resourceName: modalState.resourceName,
        })

        if (success) {
            // Trigger the download
            const link = document.createElement('a')
            link.href = modalState.downloadUrl
            link.download = `${modalState.resourceName}.pdf`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)

            // Close modal
            handleModalClose()
            return true
        }

        return false
    }

    return (
        <PageShell>
            <section className="page-hero-spec">
                <div className="page-hero-inner">
                    <p className="page-hero-eyebrow">Government Solutions</p>
                    <h1>Partnering With Government to Build Smarter, AI-Ready Institutions</h1>
                    <p className="page-hero-sub">
                        ENY Consulting designs and delivers workforce development, digital transformation, and AI
                        readiness programs for government agencies at the federal, state, and local level. We help
                        governments build institutional capacity, modernize public services, and prepare their workforce
                        for an AI-driven future.
                    </p>
                    <div className="page-hero-ctas">
                        <Link to="/contact" className="btn btn-primary">
                            Request a Capability Presentation
                        </Link>
                        <button 
                            className="btn btn-outline-light"
                            onClick={() => handleResourceDownload('Government Capabilities Brochure', '/ENY_Government_Capabilities_Brochure.pdf')}
                        >
                            Download Government Capabilities Brochure
                        </button>
                    </div>
                </div>
            </section>

            <section className="page-section-block alt">
                <div className="container gov-why">
                    <p className="section-eyebrow">Why ENY</p>
                    <h2 className="gov-section-title">Proven Credibility. Deep Expertise. Global Reach.</h2>
                    <p className="gov-why-intro">
                        Government partnerships require a different kind of consulting firm — one with the credibility to
                        earn trust, the expertise to deliver at scale, and the cultural fluency to navigate complex
                        institutional landscapes. ENY Consulting brings all three.
                    </p>
                    <ol className="gov-proof-list">
                        {PROOF_POINTS.map((p, i) => (
                            <li key={i}>{p}</li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="page-section-block">
                <div className="container">
                    <header className="gov-section-header">
                        <p className="gov-eyebrow">Capabilities</p>
                        <h2 className="gov-section-title">Building Government Capacity Through Technology, AI, and Skills</h2>
                    </header>
                    <div className="gov-long-form">
                        {CAPABILITIES.map((c) => (
                            <article key={c.title} className="gov-long-card">
                                <h3>{c.title}</h3>
                                <p>{c.body}</p>
                                {c.extra ? <p>{c.extra}</p> : null}
                            </article>
                        ))}
                    </div>
                    <article className="gov-cap-card gov-cap-card--highlight gov-lagos">
                        <p className="section-eyebrow">Current Partnership</p>
                        <h3>Lagos State Ministry of Tertiary Education</h3>
                        <p>
                            ENY Consulting was selected to partner with the Lagos State Ministry of Tertiary Education on
                            a pioneering AI and digital skills workforce development initiative. The engagement includes
                            designing AI-integrated curricula for tertiary institutions, training instructors on AI
                            pedagogical approaches, and delivering student-facing workshops that prepare Lagos&apos;s next
                            generation for an AI-driven economy. This partnership reflects our commitment to building
                            institutional capacity at the state level and demonstrates our ability to design programs
                            that serve government policy objectives while delivering world-class training.
                        </p>
                    </article>
                </div>
            </section>

            <section className="page-section-block gov-resources">
                <div className="container">
                    <header className="gov-section-header">
                        <p className="gov-eyebrow">Downloadable Resources</p>
                        <h2 className="gov-section-title">Toolkits & Resources for Government Leaders</h2>
                    </header>
                    <div className="gov-resources-grid">
                        <article className="gov-resource-card">
                            <h3>Government Capabilities Brochure</h3>
                            <p>
                                Comprehensive overview of ENY Consulting's government solutions, services, and proven expertise 
                                in workforce development, digital transformation, and AI readiness. Perfect for sharing with 
                                procurement, leadership, and decision-makers.
                            </p>
                            <button 
                                className="btn btn-primary"
                                onClick={() => handleResourceDownload('Government Capabilities Brochure', '/ENY_Government_Capabilities_Brochure.pdf')}
                            >
                                Download Brochure
                            </button>
                        </article>
                        <article className="gov-resource-card">
                            <h3>AI Readiness Assessment Toolkit</h3>
                            <p>
                                A practical framework for evaluating your institution's readiness for AI adoption. Includes 
                                assessment tools, implementation roadmaps, and governance considerations for government agencies 
                                planning AI initiatives.
                            </p>
                            <button 
                                className="btn btn-primary"
                                onClick={() => handleResourceDownload('AI Readiness Assessment Toolkit', '/ENY_AI_Readiness_Assessment_Toolkit.pdf')}
                            >
                                Download Toolkit
                            </button>
                        </article>
                    </div>
                </div>
            </section>

            <section className="page-section-block alt gov-final-cta">
                <div className="container gov-final-inner">
                    <h2>Ready to Explore a Partnership?</h2>
                    <p>
                        We&apos;d welcome the opportunity to present our capabilities and discuss how ENY Consulting can
                        support your agency&apos;s objectives. We&apos;re available for capability presentations, proposal
                        submissions, or exploratory conversations.
                    </p>
                    <div className="gov-final-btns">
                        <Link to="/contact" className="btn btn-primary">
                            Request a Capability Presentation
                        </Link>
                        <button 
                            className="btn btn-secondary"
                            onClick={() => handleResourceDownload('Government Capabilities Brochure', '/ENY_Government_Capabilities_Brochure.pdf')}
                        >
                            Download Government Capabilities Brochure
                        </button>
                        <a href={GHL_BOOKING_URL} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                            Schedule a Partnership Discussion
                        </a>
                    </div>
                </div>
            </section>

            <ResourceOptInModal
                isOpen={modalState.isOpen}
                resourceName={modalState.resourceName}
                onClose={handleModalClose}
                onSubmit={handleModalSubmit}
            />
        </PageShell>
    )
}

export default GovernmentPage
