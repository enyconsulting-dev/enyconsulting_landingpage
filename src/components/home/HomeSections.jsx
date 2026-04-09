import { Link } from 'react-router-dom'
import { GHL_BOOKING_URL } from '../../config/site'
import './HomeSections.css'

const Arrow = () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" />
    </svg>
)

export const AsFeaturedBar = () => (
    <section className="as-featured section-compact" aria-label="As featured in">
        <div className="container as-featured-inner">
            <span className="as-featured-label">As Featured In</span>
            <div className="as-featured-logos" role="list">
                {['Forbes', 'CTV', 'CBC', 'The Guardian', 'RBC', 'Women of Influence', 'The Nation'].map((name) => (
                    <span key={name} className="as-featured-logo" role="listitem">
                        {name}
                    </span>
                ))}
            </div>
        </div>
    </section>
)

const IconChart = () => (
    <svg className="what-we-do-icon" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 19h16M7 15v-4M12 15V9M17 15v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
)
const IconGov = () => (
    <svg className="what-we-do-icon" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-4h6v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
)
const IconGrad = () => (
    <svg className="what-we-do-icon" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3L2 8l10 5 10-5-10-5zM2 13l10 5 10-5M2 18l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
)

export const WhatWeDoSection = () => (
    <section className="section home-what-we-do">
        <div className="container">
            <div className="section-header home-section-header">
                <p className="section-eyebrow">What We Do</p>
                <h2 className="section-title-display">
                    End-to-End Business &amp; Technology Consulting for Organizations Ready to Scale
                </h2>
                <p className="section-lead">
                    We specialize in consulting, education, digital products, and technology-driven solutions with a
                    strong focus on AI, automation, and digital transformation.
                </p>
            </div>
            <div className="what-we-do-grid">
                <article className="what-we-do-card">
                    <div className="what-we-do-icon-wrap">
                        <IconChart />
                    </div>
                    <h3>B2B Consulting</h3>
                    <p>
                        We partner with mid-market and enterprise organizations to audit business processes, implement
                        cutting-edge technology, and drive measurable revenue growth. From AI readiness assessments to
                        full-scale digital transformation programs, we deliver solutions that move the needle on your
                        bottom line.
                    </p>
                    <Link to="/services" className="what-we-do-link">
                        See Our B2B Services <Arrow />
                    </Link>
                </article>
                <article className="what-we-do-card">
                    <div className="what-we-do-icon-wrap">
                        <IconGov />
                    </div>
                    <h3>B2G / Government Partnerships</h3>
                    <p>
                        We work with federal and state government agencies to design and implement workforce development
                        programs, digital transformation roadmaps, and AI-readiness strategies. Our solutions strengthen
                        institutions, build capacity, and deliver measurable impact for citizens.
                    </p>
                    <Link to="/government" className="what-we-do-link">
                        Explore Government Solutions <Arrow />
                    </Link>
                </article>
                <article className="what-we-do-card">
                    <div className="what-we-do-icon-wrap">
                        <IconGrad />
                    </div>
                    <h3>B2C / Professional Development</h3>
                    <p>
                        Through our education brands — Business Analysis School, Business Consulting School, and Thought
                        Leadership Business School — we equip professionals with the skills to land six-figure roles,
                        earn globally recognized certifications, and build thriving consulting practices.
                    </p>
                    <Link to="/brands" className="what-we-do-link">
                        Visit Our Schools <Arrow />
                    </Link>
                </article>
            </div>
        </div>
    </section>
)

const INDUSTRIES = [
    'Financial Services & Banking',
    'Government & Public Sector',
    'Healthcare',
    'Telecommunications',
    'Oil & Gas / Energy',
    'Retail & E-Commerce',
    'Technology & SaaS',
    'Education & EdTech',
    'Manufacturing',
    'Professional Services',
]

export const IndustriesPreview = () => (
    <section className="section section-dark home-industries">
        <div className="container">
            <div className="section-header home-section-header">
                <p className="section-eyebrow section-eyebrow-on-dark">Industries</p>
                <h2 className="section-title-display light">Expertise Across the Sectors That Matter Most</h2>
                <p className="section-lead on-dark">
                    We bring specialized consulting frameworks and deep domain knowledge to every engagement. Our team
                    has a combined 50+ years of experience across 20+ industries.
                </p>
            </div>
            <div className="industries-tiles">
                {INDUSTRIES.map((name) => (
                    <Link key={name} to="/industries" className="industry-tile">
                        <h4>{name}</h4>
                    </Link>
                ))}
            </div>
            <div className="industries-cta-wrap">
                <Link to="/industries" className="btn btn-primary">
                    See All Industries
                </Link>
            </div>
        </div>
    </section>
)

export const FounderSpotlight = () => (
    <section className="section section-light home-founder">
        <div className="container">
            <div className="founder-spotlight-grid">
                <div className="founder-spotlight-image">
                    <img src="/Eno.jpg" alt="Eno Eka, CEO and Founder of ENY Consulting" />
                    <div className="founder-spotlight-badge">
                        <p>
                            <strong>Eno Eka</strong> — CEO &amp; Founder, ENY Consulting Inc.
                        </p>
                    </div>
                </div>
                <div>
                    <p className="section-eyebrow">Meet the Founder</p>
                    <h2 className="section-title-display">From Immigrant to Industry Leader in Record Time</h2>
                    <p className="founder-copy">
                        Award-winning global business consultant. The first Black woman to lead a $6B+ core banking
                        digital transformation in Canada&apos;s financial sector. Named one of Canada&apos;s Top 100 Most
                        Powerful Women. Trained over 100,000 professionals across 90+ countries. Featured in Forbes,
                        CTV, CBC, and The Guardian.
                    </p>
                    <p className="founder-copy">
                        From arriving in Canada in 2018 with nothing but a vision and relentless discipline, to landing a
                        six-figure consulting role in six months, to building a multi-seven-figure global business
                        within two years — Eno Eka&apos;s journey is living proof that the right strategy, executed with
                        focus, beats everything.
                    </p>
                    <div className="founder-mini-stats">
                        <div>
                            <strong>6 months</strong>
                            <span>From arrival in Canada to six-figure consulting role</span>
                        </div>
                        <div>
                            <strong>9 months</strong>
                            <span>From arrival to launching ENY Consulting</span>
                        </div>
                        <div>
                            <strong>$1M+</strong>
                            <span>Annual revenue within two years of founding</span>
                        </div>
                        <div>
                            <strong>90+</strong>
                            <span>Countries impacted through training and consulting</span>
                        </div>
                    </div>
                    <Link to="/founder" className="btn btn-ghost founder-bio-btn">
                        Read Full Bio <Arrow />
                    </Link>
                </div>
            </div>
        </div>
    </section>
)

export const BrandsPreview = () => (
    <section className="section home-brands">
        <div className="container">
            <div className="section-header home-section-header">
                <p className="section-eyebrow">Our Education Ecosystem</p>
                <h2 className="section-title-display">Three Schools. One Mission. Global Impact.</h2>
                <p className="section-lead">
                    Our education brands form a career progression ladder — from breaking into tech, to launching a
                    consulting practice, to building a seven-figure thought leadership brand.
                </p>
            </div>
            <div className="brands-preview-grid">
                <article className="brand-preview bas">
                    <p className="brand-preview-tag">Career Entry &amp; Growth</p>
                    <h3>Business Analysis School</h3>
                    <p>
                        The global leader in business analysis education. We help professionals leverage their existing
                        experience to break into tech, earn six-figure incomes, and build rewarding careers in business
                        analysis, product management, and data analysis. IIBA Endorsed Education Provider. ScrumStudy
                        Authorized Training Partner. Over 100,000 professionals trained across 90+ countries.
                    </p>
                    <a href="https://businessanalysisschool.com" className="brand-preview-link" target="_blank" rel="noopener noreferrer">
                        Visit businessanalysisschool.com <Arrow />
                    </a>
                </article>
                <article className="brand-preview bcs">
                    <p className="brand-preview-tag">Consulting Launch</p>
                    <h3>Business Consulting School</h3>
                    <p>
                        For experienced professionals ready to stop trading hours for a salary and start commanding premium
                        consulting fees. Learn how to package your expertise into high-value consulting offers, land your
                        first five-figure and six-figure contracts, build a sustainable pipeline of clients, and scale
                        from solo consultant to firm owner.
                    </p>
                    <a href="https://businessconsultingschool.com" className="brand-preview-link" target="_blank" rel="noopener noreferrer">
                        Visit businessconsultingschool.com <Arrow />
                    </a>
                </article>
                <article className="brand-preview tlbs">
                    <p className="brand-preview-tag">Thought Leadership &amp; Scale</p>
                    <h3>Thought Leadership Business School</h3>
                    <p>
                        The elite program for accomplished professionals who want to monetize their expertise at the
                        highest level. Build a personal brand that commands authority. Get paid for speaking, advising,
                        coaching, and media appearances. Learn the exact system Eno used to build a multi-seven-figure
                        brand from scratch.
                    </p>
                    <a href="https://thoughtleadershipbusinessschool.com" className="brand-preview-link" target="_blank" rel="noopener noreferrer">
                        Visit Thought Leadership Business School <Arrow />
                    </a>
                </article>
            </div>
        </div>
    </section>
)

export const CaseStudiesPreview = () => (
    <section className="section section-dark home-cases">
        <div className="container">
            <div className="section-header home-section-header">
                <p className="section-eyebrow section-eyebrow-on-dark">Proven Results</p>
                <h2 className="section-title-display light">Real Projects. Real Impact. Measurable Outcomes.</h2>
            </div>
            <div className="case-preview-grid">
                <article className="case-preview-card">
                    <span className="case-preview-tag">Financial Services</span>
                    <h3>$6B+ Core Banking Digital Transformation</h3>
                    <p>
                        Led one of the largest credit union mergers in Canadian history. End-to-end core banking system
                        transformation involving multi-entity merger, stakeholder alignment across organizations,
                        regulatory and operational complexity navigation, and large-scale system migration — all delivered
                        on time with zero data loss.
                    </p>
                    <p className="case-preview-stat">
                        $6B+ in assets &nbsp;|&nbsp; 125,000+ members impacted &nbsp;|&nbsp; Multi-entity merger
                    </p>
                </article>
                <article className="case-preview-card">
                    <span className="case-preview-tag">Government / Education</span>
                    <h3>Lagos State Ministry AI Workforce Development</h3>
                    <p>
                        Selected by the Lagos State Ministry of Tertiary Education to design and deliver an AI and digital
                        skills workforce development initiative targeting tertiary institutions across Lagos State. The
                        engagement includes AI curriculum design, instructor capacity building, and student-facing
                        workshops preparing the next generation for an AI-driven economy.
                    </p>
                    <p className="case-preview-stat">
                        State-level partnership &nbsp;|&nbsp; AI curriculum design &nbsp;|&nbsp; Tertiary institution reach
                    </p>
                </article>
                <article className="case-preview-card">
                    <span className="case-preview-tag">Professional Development</span>
                    <h3>Building the World&apos;s Largest BA Training Ecosystem</h3>
                    <p>
                        Built and scaled Business Analysis School from a one-person training operation to a globally
                        recognized education platform — IIBA Endorsed Education Provider, ScrumStudy Authorized Training
                        Partner — reaching over 100,000 professionals across 90+ countries with certification programs,
                        accelerators, and career coaching.
                    </p>
                    <p className="case-preview-stat">
                        100,000+ professionals &nbsp;|&nbsp; 90+ countries &nbsp;|&nbsp; IIBA endorsed
                    </p>
                </article>
            </div>
            <div className="industries-cta-wrap">
                <Link to="/case-studies" className="btn btn-primary">
                    View All Case Studies
                </Link>
            </div>
        </div>
    </section>
)

export const TestimonialsSection = () => (
    <section className="section home-testimonials">
        <div className="container">
            <div className="section-header home-section-header">
                <p className="section-eyebrow">Client Testimonials</p>
                <h2 className="section-title-display">Trusted by Professionals and Organizations Worldwide</h2>
            </div>
            <div className="testimonial-grid testimonial-grid--five">
                <blockquote className="testimonial-card">
                    <p>
                        Eno is very diligent, thorough and dedicated to the work she does. She has demonstrated
                        excellence, determination and an exemplary resolve in getting things done and growing herself as
                        well as her business. She is formidable.
                    </p>
                    <footer>
                        <strong>Senior Executive</strong>
                        <span>Financial Services</span>
                    </footer>
                </blockquote>
                <blockquote className="testimonial-card">
                    <p>
                        If you want business analysis career advice, you HAVE to talk to Eno. She&apos;s an amazing coach
                        with incredible client results. She is full of knowledge and experience when it comes to getting
                        high-quality jobs that give you great satisfaction, as well as the financial rewards you deserve.
                    </p>
                    <footer>
                        <strong>Career Transition Client</strong>
                        <span>Technology Sector</span>
                    </footer>
                </blockquote>
                <blockquote className="testimonial-card">
                    <p>
                        Eno is a result-oriented individual who has a passion for her chosen career. She has solved
                        company problems at a critical time and remains one of the best hands I have ever worked with.
                    </p>
                    <footer>
                        <strong>Former Colleague</strong>
                        <span>Consulting</span>
                    </footer>
                </blockquote>
                <blockquote className="testimonial-card">
                    <p>
                        Eno Eka is a dedicated coach and mentor who passionately shares her skills and expertise to ensure
                        mentees achieve desired excellent career success. The continuous drive, support, and guidance she
                        constantly gives propelled me to achieve great success in my BA career.
                    </p>
                    <footer>
                        <strong>Business Analysis School Graduate</strong>
                        <span>Career Transition</span>
                    </footer>
                </blockquote>
                <blockquote className="testimonial-card">
                    <p>
                        Eno is a talented Business Analyst and dedicated coach. We collaborated on a project where she
                        demonstrated a deep knowledge of her field, a natural ability to share her expertise, and a
                        commitment to helping others succeed.
                    </p>
                    <footer>
                        <strong>Project Collaborator</strong>
                        <span>Technology Consulting</span>
                    </footer>
                </blockquote>
            </div>
        </div>
    </section>
)

export const LeadCapture = () => (
    <section className="section section-light home-lead">
        <div className="container">
            <div className="lead-capture">
                <h3>Get the Free AI Readiness Assessment Toolkit</h3>
                <p>
                    Discover where your organization stands on AI adoption. Our free toolkit includes a self-assessment
                    scorecard, a readiness gap analysis template, and a 30-day action plan to accelerate your digital
                    transformation journey. Used by 500+ organizations worldwide.
                </p>
                <form className="lead-capture-form" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="lead-email" className="visually-hidden">
                        Work email
                    </label>
                    <input id="lead-email" type="email" placeholder="Your work email" required />
                    <button type="submit" className="btn btn-primary">
                        Download Free
                    </button>
                </form>
                <p className="lead-capture-micro">Free instant download. No spam. Unsubscribe anytime.</p>
                <p className="lead-capture-note">
                    Primary homepage lead capture — connect to GHL B2B pipeline for PDF delivery and nurture sequence.
                </p>
            </div>
        </div>
    </section>
)

export const HomeCtaBanner = () => (
    <section className="home-cta-banner" aria-label="Call to action">
        <div className="home-cta-inner">
            <h2>Ready to Transform Your Business?</h2>
            <p>
                Schedule a discovery call with our consulting team. No commitment. No pitch. Just a strategic conversation
                about where your business is, where it could be, and what it would take to get there.
            </p>
            <a href={GHL_BOOKING_URL} className="btn home-cta-btn" target="_blank" rel="noopener noreferrer">
                Book Your Discovery Call <Arrow />
            </a>
        </div>
    </section>
)
