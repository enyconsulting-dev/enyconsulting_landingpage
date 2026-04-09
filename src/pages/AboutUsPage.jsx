import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { GHL_BOOKING_URL } from '../config/site'
import './spec-pages.css'
import './AboutUsPage.css'

const VALUES = [
    'Excellence — We set the standard. Every deliverable, every engagement, every interaction reflects our commitment to being the best in the room.',
    'Innovation — We don’t follow trends. We leverage cutting-edge technology and fresh thinking to solve problems others can’t.',
    'Empowerment — We exist to make the people and organizations we work with stronger, smarter, and more capable than before.',
    'Integrity — We tell clients what they need to hear, not what they want to hear. Trust is earned through honesty and follow-through.',
    'Global Impact — We think beyond borders. Our work spans three continents because talent and ambition are everywhere.',
    'Collaboration — The best results come from working together. We partner with clients, not just consult for them.',
    'Resilience — We were built for complexity. When things get hard, we get sharper.',
    'Accountability — We own our commitments. Deadlines are real. Results are measurable. Excuses are unacceptable.',
    'Customer Success — Our success is measured by our clients’ outcomes. If you don’t win, we haven’t done our job.',
    'Continuous Learning — The world doesn’t stand still and neither do we. We invest in our own growth so we can invest in yours.',
]

const IMPACT_STATS = [
    '$6B+ — Assets managed in our signature core banking transformation',
    '125,000+ — Credit union members impacted across financial institutions',
    '100,000+ — Professionals trained through our education programs',
    '90+ — Countries reached with our training and consulting services',
    '50+ — Years of combined consulting expertise across our team',
    '20+ — Industries served with specialized domain knowledge',
    '3 — Continents with active operations (North America, Africa, Europe outreach)',
    '7+ — Years delivering high-impact solutions globally',
]

const AWARDS = [
    'Canada’s Top 100 Most Powerful Women — RBC Future Launch Future Leaders Category',
    'RBC Canadian Women Entrepreneur Awards — Ones to Watch Winner (2020)',
    'Women of Inspiration Award for Mentorship (2019)',
    'Top 8 Female Business Analysis Influencers Globally — IIBA Recognition',
    'Forbes Feature',
    'CTV National Television Feature',
    'CBC Feature',
    'The Guardian Feature',
    'The Nation (Nigeria) Feature',
    'LinkedIn Top Voice',
    'Top 10 Entrepreneurs You Must Follow — Hustle World',
    'Campaign Ambassador for the United Nations & UNHCR',
]

const AboutUsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'About ENY Consulting | Award-Winning Global Consulting Firm'
    }, [])

    return (
        <PageShell className="about-page">
            <section className="page-hero-spec">
                <div className="page-hero-inner">
                    <p className="page-hero-eyebrow">About ENY Consulting</p>
                    <h1>Award-Winning Business Technology Consulting. Delivered Globally.</h1>
                    <p className="page-hero-sub">
                        ENY Consulting is a multiple award-winning business technology and consulting firm with offices in
                        Canada, the USA, and Nigeria. With over seven years of proven expertise, we operate on a global
                        scale, delivering high-impact solutions to clients across industries.
                    </p>
                </div>
            </section>

            <section className="page-section-block">
                <div className="container about-prose">
                    <p className="section-eyebrow">Our Story</p>
                    <h2 className="about-h2">From One Woman&apos;s Vision to a Global Consulting Firm</h2>
                    <p>
                        ENY Consulting was founded by Eno Eka — a Nigerian-born accountant who made a bold career pivot
                        into business analysis, relocated to Canada in 2018, landed a six-figure consulting role within
                        six months, and launched her consulting company within nine months of arriving. No connections. No
                        local experience. Just strategy, skill, and an unshakeable commitment to execution.
                    </p>
                    <p>
                        What started as a one-woman consulting practice in Calgary has grown into a global firm serving
                        corporations, governments, and professionals across three continents. Along the way, Eno led one of
                        the largest credit union mergers in Canadian history — a $6B+ core banking digital transformation
                        impacting 125,000+ members — cementing ENY&apos;s reputation for delivering at the highest level.
                    </p>
                    <p>
                        Today, ENY Consulting operates at the intersection of strategy, technology, and human capital. We
                        lead digital transformation engagements for mid-market and enterprise clients. We advise governments
                        on AI readiness and workforce development. And through our education ecosystem — Business Analysis
                        School, Business Consulting School, and Thought Leadership Business School — we have trained over
                        100,000 professionals across 90+ countries.
                    </p>
                    <p>
                        Our philosophy is simple: the right strategy, executed with discipline, creates extraordinary
                        results. Every engagement we take on reflects that belief. We don&apos;t do generic. We don&apos;t
                        do cookie-cutter. We build custom solutions that drive measurable revenue growth, operational
                        efficiency, and lasting competitive advantage.
                    </p>
                </div>
            </section>

            <section className="page-section-block alt">
                <div className="container about-mission-grid">
                    <div>
                        <p className="section-eyebrow">Our Mission</p>
                        <p className="about-mission-text">
                            To equip professionals and organizations with the skills, strategies, and technology to lead
                            transformation, drive innovation, and achieve sustainable growth in an AI-driven world.
                        </p>
                    </div>
                    <div>
                        <p className="section-eyebrow">Our Vision</p>
                        <p className="about-mission-text">
                            To be the global leader in workforce transformation and business innovation — empowering
                            people and organizations to shape the future through strategic thinking, data-driven
                            decisions, and responsible technology adoption.
                        </p>
                    </div>
                </div>
            </section>

            <section className="page-section-block">
                <div className="container">
                    <p className="section-eyebrow">What We Stand For</p>
                    <h2 className="about-h2">Our Core Values</h2>
                    <ul className="about-values-list">
                        {VALUES.map((v) => (
                            <li key={v.slice(0, 24)}>{v}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="page-section-block alt">
                <div className="container">
                    <p className="section-eyebrow">Our Impact</p>
                    <h2 className="about-h2">The Numbers That Define Our Reach</h2>
                    <ul className="about-impact-list">
                        {IMPACT_STATS.map((s) => (
                            <li key={s}>{s}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="page-section-block">
                <div className="container">
                    <p className="section-eyebrow">Awards &amp; Recognition</p>
                    <h2 className="about-h2">Recognized Globally for Excellence</h2>
                    <p className="about-intro">
                        Our work and our founder have been recognized by some of the most respected institutions and media
                        outlets in the world.
                    </p>
                    <div className="about-awards">
                        {AWARDS.map((a) => (
                            <span key={a} className="about-award-badge">
                                {a}
                            </span>
                        ))}
                    </div>
                    <div className="about-cta-row">
                        <a href={GHL_BOOKING_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            Work With an Award-Winning Team — Book a Discovery Call
                        </a>
                    </div>
                </div>
            </section>

            <section className="page-section-block alt">
                <div className="container about-prose">
                    <p className="section-eyebrow">Our Team</p>
                    <h2 className="about-h2">A Global Team of Experts</h2>
                    <p>
                        ENY Consulting brings together a team of seasoned consultants, analysts, strategists, and
                        educators with a combined 50+ years of experience across 20+ industries. Our team members are
                        certified professionals (CBAP, PROSCI, PMP, ITIL, Six Sigma, Scrum) with hands-on experience
                        delivering complex transformation programs for Fortune 500 companies, government agencies, and
                        high-growth businesses.
                    </p>
                    <p>
                        We don&apos;t believe in generalists. Every consultant we deploy brings deep domain expertise and a
                        track record of results. When you work with ENY, you work with people who have been where you&apos;re
                        trying to go — and know exactly how to get you there.
                    </p>
                    <Link to="/founder" className="btn btn-ghost about-team-cta">
                        Meet Our Founder
                    </Link>
                </div>
            </section>
        </PageShell>
    )
}

export default AboutUsPage
