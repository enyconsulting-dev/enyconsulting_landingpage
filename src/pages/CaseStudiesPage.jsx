import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import './spec-pages.css'
import './CaseStudiesPage.css'

const CASES = [
    {
        industry: 'Financial Services',
        title: '$6B+ Core Banking Digital Transformation — Canada’s Largest Credit Union Merger',
        challenge:
            'Multiple credit unions were merging into a single entity — requiring the consolidation of disparate core banking systems, alignment of business processes across organizations with different cultures and operating models, migration of sensitive financial data for 125,000+ members, and strict regulatory compliance throughout.',
        approach:
            'ENY Consulting led the end-to-end business analysis and transformation management for this program. We conducted comprehensive stakeholder analysis across all merging entities, facilitated requirements elicitation workshops to define the target operating model, managed the requirements traceability from business needs through to system configuration, led UAT strategy and execution, and implemented a change management program that prepared 125,000+ members and hundreds of staff for the transition.',
        results: [
            '$6B+ in assets successfully migrated and consolidated',
            '125,000+ members transitioned with zero service interruption',
            'Multi-entity merger completed on schedule',
            'Full regulatory compliance maintained throughout',
        ],
        quote:
            'This was one of the most complex transformation programs in Canada’s financial services sector. ENY Consulting’s ability to manage stakeholder complexity, drive requirements clarity, and keep the program on track was critical to its success.',
    },
    {
        industry: 'Government / Education',
        title: 'Lagos State Ministry of Tertiary Education — AI Workforce Development Initiative',
        challenge:
            'Lagos State recognized the urgent need to prepare its tertiary education system for an AI-driven economy. Institutions lacked AI-integrated curricula, instructors lacked AI pedagogical training, and students had limited access to practical AI skills development. The Ministry sought a partner with global credibility and local understanding to design and deliver a comprehensive program.',
        approach:
            'ENY Consulting was selected through a competitive process to design the initiative. Our approach includes: developing AI-integrated curriculum modules aligned with global standards, conducting train-the-trainer programs for tertiary institution instructors, delivering student-facing AI workshops with practical, hands-on components, and creating assessment frameworks that measure real-world AI competency.',
        results: [
            'State-level government partnership secured',
            'AI curriculum designed for tertiary institutions',
            'Instructor capacity building program developed',
            'Pipeline for student AI skills development established',
        ],
    },
    {
        industry: 'Professional Development / EdTech',
        title: 'Building the World’s Largest Business Analysis Training Ecosystem',
        challenge:
            'Millions of professionals worldwide possess transferable skills but lack the specific training, certifications, and career guidance to transition into high-paying tech roles. Existing training providers offered theoretical content disconnected from real-world practice. There was a gap for a globally accessible, practically oriented, certification-aligned training platform led by working professionals.',
        approach:
            'ENY Consulting’s founder, Eno Eka, built Business Analysis School from the ground up — starting with free masterclasses that attracted thousands, then developing structured accelerator programs, certification preparation courses, and corporate training offerings. The ecosystem was designed with conversion in mind: free training at the top of funnel, progressively deeper engagement through coaching programs, and certification pathways that deliver measurable career outcomes. Strategic partnerships with IIBA (Endorsed Education Provider) and ScrumStudy (Authorized Training Partner) ensured global credential recognition.',
        results: [
            '100,000+ professionals trained globally',
            '90+ countries reached',
            'IIBA Endorsed Education Provider status achieved',
            'Multi-seven-figure revenue generated',
            'Thousands of students landed six-figure roles',
        ],
    },
    {
        industry: 'Higher Education',
        title: 'University of Manitoba — Business Analysis Curriculum Development',
        challenge:
            'The University of Manitoba needed to develop a business analysis curriculum that bridged academic theory with industry practice — preparing students not just for examinations but for the real demands of working as a business analyst in corporate environments.',
        approach:
            'Eno Eka was engaged as a business analysis content developer and course instructor, bringing real-world consulting experience directly into the academic environment. The curriculum was designed to include practical case studies, industry-standard tools and techniques, and assessment methods that mirror real project deliverables.',
        results: [
            'University of Manitoba partnership established',
            'Practice-oriented BA curriculum developed',
            'Students exposed to real-world consulting methodology',
        ],
    },
]

const CaseStudiesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Case Studies | ENY Consulting'
    }, [])

    return (
        <PageShell>
            <section className="case-studies-page case-studies-intro section-dark">
                <div className="container">
                    <header className="case-studies-header">
                        <p className="case-studies-eyebrow">Case Studies</p>
                        <h1 className="case-studies-title">Real Projects. Real Impact. Measurable Results.</h1>
                        <p className="case-studies-lead">
                            We let our work speak for itself. Explore how ENY Consulting has delivered transformative
                            results for organizations across industries and continents.
                        </p>
                    </header>
                </div>
            </section>

            <section className="page-section-block case-studies-body">
                <div className="container case-studies-detail-list">
                    {CASES.map((c) => (
                        <article key={c.title} className="case-detail">
                            <span className="case-detail-industry">{c.industry}</span>
                            <h2 className="case-detail-title">{c.title}</h2>
                            <h3 className="case-detail-label">Challenge</h3>
                            <p>{c.challenge}</p>
                            <h3 className="case-detail-label">Approach</h3>
                            <p>{c.approach}</p>
                            <h3 className="case-detail-label">Results</h3>
                            <ul className="case-detail-results">
                                {c.results.map((r) => (
                                    <li key={r}>{r}</li>
                                ))}
                            </ul>
                            {c.quote ? (
                                <blockquote className="case-detail-quote">&ldquo;{c.quote}&rdquo;</blockquote>
                            ) : null}
                            <Link to="/contact" className="btn btn-primary case-download">
                                Download Full Case Study
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </PageShell>
    )
}

export default CaseStudiesPage
