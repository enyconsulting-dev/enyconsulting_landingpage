import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import './spec-pages.css'
import './FounderPage.css'

const AWARDS = [
    'Canada’s Top 100 Most Powerful Women — RBC Future Launch Future Leaders Category',
    'RBC Canadian Women Entrepreneur Awards — Ones to Watch Winner',
    'Women of Inspiration Award for Mentorship',
    'Top 8 Female Business Analysis Influencers Globally — IIBA Recognition',
    'Forbes Feature',
    'CTV, CBC, The Guardian, The Nation — National and International Press Features',
    'LinkedIn Top Voice',
    'Top 10 Entrepreneurs You Must Follow — Hustle World',
    'Campaign Ambassador — United Nations & UNHCR',
]

const CERTS = [
    'CBAP — Certified Business Analysis Professional (IIBA)',
    'PROSCI — Change Management Practitioner',
    'SMC — Scrum Master Certified',
    'AAC — Agile Analyst Certified',
    'SPOC — Scrum Product Owner Certified',
    'SCC — Scrum Certified Coach',
    'ITIL — IT Infrastructure Library',
]

const TOPICS = [
    'Business Analysis & Strategy — How to leverage BA skills for organizational and career growth',
    'AI and the Future of Work — Practical AI strategy for leaders navigating the transition',
    'Career Transformation — How to pivot your career, increase your income, and build a personal brand',
    'Building Global Businesses — From immigrant to industry leader: the systems behind the scale',
    'Digital Transformation — Leading large-scale technology programs that actually deliver results',
    'Thought Leadership — How to monetize your expertise through speaking, consulting, and media',
]

const FounderPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Eno Eka | CEO ENY Consulting | Global Business Consultant & Speaker'
    }, [])

    return (
        <PageShell>
            <section className="page-hero-spec founder-hero">
                <div className="page-hero-inner founder-hero-inner">
                    <p className="page-hero-eyebrow">Meet the Founder</p>
                    <h1>Eno Eka</h1>
                    <p className="founder-hero-sub">
                        CEO, ENY Consulting Inc. · Founder, Business Analysis School · Global Business Consultant · Digital
                        Transformation Strategist · International Keynote Speaker
                    </p>
                </div>
            </section>

            <section className="page-section-block">
                <div className="container">
                    <div className="founder-prose">
                        <p className="founder-lead">
                            Eno Eka is a global business consultant, digital transformation strategist, and entrepreneur
                            who has built a multi-seven-figure business spanning three continents — all within six years of
                            relocating to Canada as an immigrant with no local connections and no playbook to follow.
                        </p>

                        <blockquote className="founder-pullquote">
                            She is the first Black woman to lead a $6B+ core banking digital transformation project in
                            Canada&apos;s financial sector — one of the largest credit union mergers in Canadian history.
                            The program involved consolidating multiple financial entities, migrating sensitive data for
                            125,000+ members, aligning stakeholders across organizations with different cultures and
                            operating models, and navigating complex regulatory requirements. It was delivered successfully,
                            on time, and without service disruption.
                        </blockquote>

                        <h2 className="founder-h2">The Origin Story</h2>
                        <p>
                            Eno&apos;s career began in Nigeria, where she worked as an accountant. She felt stuck —
                            talented, ambitious, but trapped in a role that didn&apos;t match her potential. She invested
                            heavily in learning new skills, pivoted into business analysis, and made the decision to
                            relocate to Canada in 2018 to pursue bigger opportunities.
                        </p>
                        <p>
                            When she arrived, she had no Canadian work experience, no local network, and no shortage of
                            people telling her it would take years to establish herself. She ignored them. Within two weeks,
                            she had her first job. Within six months, she had landed a six-figure consulting role. Within
                            nine months, she had founded ENY Consulting Inc. Within two years, her business was generating
                            over $1 million annually.
                        </p>
                        <p>
                            This wasn&apos;t luck. It was strategy. Before she even boarded the plane to Canada, Eno had
                            researched the job market, built a personal brand on LinkedIn, networked with professionals in
                            her target industry, and positioned herself as a credible expert. She volunteered as a business
                            analysis instructor, taught at IIBA chapter events, and created a body of thought leadership
                            content that established her authority before she had a single Canadian client.
                        </p>

                        <h2 className="founder-h2">What She Built</h2>
                        <p>Today, Eno runs a global business ecosystem that includes:</p>
                        <ul className="founder-built-list">
                            <li>
                                <strong>ENY Consulting Inc.</strong> — An award-winning global business technology and
                                consulting firm with offices in Canada, the USA, and Nigeria — digital transformation, AI
                                strategy, business analysis, change management, and corporate training.
                            </li>
                            <li>
                                <strong>Business Analysis School</strong> — The world&apos;s largest business analysis
                                training platform, 100,000+ professionals across 90+ countries. IIBA Endorsed Education
                                Provider and ScrumStudy Authorized Training Partner.
                            </li>
                            <li>
                                <strong>Business Consulting School</strong> — For experienced professionals who want to
                                package expertise, land consulting contracts, and build profitable consulting practices.
                            </li>
                            <li>
                                <strong>Thought Leadership Business School</strong> — For six-figure professionals who want
                                to build seven-figure personal brands through speaking, consulting, coaching, and media.
                            </li>
                        </ul>

                        <h2 className="founder-h2">Additional Roles</h2>
                        <p>
                            Beyond her companies, Eno serves as a business analysis content developer and course instructor
                            at the University of Manitoba, where she brings real-world consulting experience into academic
                            curriculum design.
                        </p>
                        <p>
                            She is a Campaign Ambassador for the United Nations and the Office of the United Nations High
                            Commissioner for Refugees (UNHCR), reflecting her commitment to global impact beyond commercial
                            success.
                        </p>
                        <p>
                            She hosts the <strong>Fireside Chat With Eno</strong> podcast — with over 51 episodes sharing
                            insights on career strategy, business building, personal branding, and leadership.
                        </p>

                        <h2 className="founder-h2">Awards &amp; Recognition</h2>
                        <div className="founder-awards">
                            {AWARDS.map((a) => (
                                <span key={a} className="founder-award-badge">
                                    {a}
                                </span>
                            ))}
                        </div>

                        <h2 className="founder-h2">Certifications &amp; Credentials</h2>
                        <ul className="founder-cert-list">
                            {CERTS.map((c) => (
                                <li key={c}>{c}</li>
                            ))}
                        </ul>

                        <h2 className="founder-h2">Speaking &amp; Thought Leadership</h2>
                        <p>
                            Eno is an international keynote speaker who has presented at conferences and corporate events
                            across the USA, Canada, Australia, Nigeria, Ghana, and the UK. Her topics include:
                        </p>
                        <ul className="founder-topic-list">
                            {TOPICS.map((t) => (
                                <li key={t}>{t}</li>
                            ))}
                        </ul>

                        <div className="founder-book-podcast">
                            <div>
                                <h3 className="founder-h3">The Six-Figure Business Analyst</h3>
                                <p className="founder-subtitle">12 Simple Steps to Kickstart Your Career Without a Tech Degree or Experience</p>
                                <p>
                                    The bestselling career guide that has helped thousands of professionals around the world
                                    transition into business analysis and land six-figure roles — written from Eno&apos;s
                                    personal experience of pivoting from accounting to a six-figure consulting career within
                                    months.
                                </p>
                                <a
                                    href="https://enoeka.com"
                                    className="btn btn-primary founder-inline-btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Get the Book
                                </a>
                            </div>
                            <div>
                                <h3 className="founder-h3">Fireside Chat With Eno</h3>
                                <p>
                                    Over 51 episodes of actionable insights on career strategy, job search tips, personal
                                    branding, business building, and leadership.
                                </p>
                                <a
                                    href="https://youtube.com"
                                    className="btn btn-secondary founder-inline-btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Listen to the Podcast
                                </a>
                            </div>
                        </div>

                        <h2 className="founder-h2">Connect With Eno</h2>
                        <ul className="founder-connect-list">
                            <li>Instagram: @misspragmatic</li>
                            <li>LinkedIn: Eno Eka</li>
                            <li>YouTube: Eno Eka</li>
                            <li>
                                Website:{' '}
                                <a href="https://enoeka.com" target="_blank" rel="noopener noreferrer">
                                    enoeka.com
                                </a>
                            </li>
                            <li>
                                Email:{' '}
                                <a href="mailto:assistant@enoeka.com">assistant@enoeka.com</a>
                            </li>
                        </ul>

                        <div className="founder-page-ctas">
                            <Link to="/contact?topic=Speaking%20Inquiry" className="btn btn-primary">
                                Book Eno for Speaking
                            </Link>
                            <Link to="/contact" className="btn btn-ghost">
                                Partner With ENY Consulting
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PageShell>
    )
}

export default FounderPage
