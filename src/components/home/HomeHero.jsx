import { Link } from 'react-router-dom'
import { GHL_BOOKING_URL } from '../../config/site'
import './HomeHero.css'

const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" />
    </svg>
)

const HomeHero = () => {
    return (
        <section className="home-hero" aria-label="Hero">
            <div className="home-hero-grid" aria-hidden />
            <div className="home-hero-glow" aria-hidden />
            <div className="home-hero-content">
                <p className="home-hero-eyebrow">Award-Winning Global Consulting</p>
                <h1 className="home-hero-title">
                    We Turn Complex Business Challenges Into{' '}
                    <em className="home-hero-em">Scalable, Revenue-Generating</em> Systems.
                </h1>
                <p className="home-hero-sub">
                    ENY Consulting is an award-winning global business technology and consulting firm. We partner with
                    corporations, governments, and professionals across North America and Africa to drive digital
                    transformation, implement AI strategy, and build high-performing teams.
                </p>
                <div className="home-hero-ctas">
                    <a href={GHL_BOOKING_URL} className="btn btn-primary home-hero-btn-primary" target="_blank" rel="noopener noreferrer">
                        Book a Discovery Call <ArrowIcon />
                    </a>
                    <Link to="/services" className="btn btn-outline home-hero-btn-secondary">
                        Explore Our Services
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HomeHero
