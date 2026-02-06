import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './PlatformsPage.css'

const PlatformsPage = () => {
    const [visibleCards, setVisibleCards] = useState([])
    const cardsRef = useRef([])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = cardsRef.current.indexOf(entry.target)
                        setVisibleCards((prev) => [...new Set([...prev, index])])
                    }
                })
            },
            { threshold: 0.2 }
        )

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card)
        })

        return () => observer.disconnect()
    }, [])

    const platforms = [
        {
            title: 'Business Analysis Platform',
            description: 'Advanced analytics and business intelligence tools for data-driven decision making',
            features: ['Real-time dashboards', 'Predictive analytics', 'Custom reporting', 'Data visualization'],
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v18h18"/>
                    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                </svg>
            )
        },
        {
            title: 'Consulting Management Suite',
            description: 'Comprehensive project management and client relationship tools for consulting firms',
            features: ['Project tracking', 'Time management', 'Client portals', 'Resource allocation'],
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v6m0 6v6"/>
                    <path d="M1 12h6m6 0h6"/>
                </svg>
            )
        },
        {
            title: 'Digital Transformation Hub',
            description: 'Integrated platform for managing digital transformation initiatives and change management',
            features: ['Change management', 'Process automation', 'Technology assessment', 'ROI tracking'],
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
            )
        },
        {
            title: 'Learning Management System',
            description: 'Custom learning platform for professional development and certification programs',
            features: ['Online courses', 'Certification tracking', 'Progress monitoring', 'Assessment tools'],
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                </svg>
            )
        }
    ]

    return (
        <div className="platforms-page">
            <Navbar />
            <main className="main-content">
                {/* Hero Section */}
                <section className="platforms-hero">
                    <div className="container">
                        <h1>Our Platforms</h1>
                        <p className="hero-description">
                            Cutting-edge technology platforms designed to empower businesses and drive transformative results across all industries.
                        </p>
                    </div>
                </section>

                {/* Platforms Grid */}
                <section className="platforms-section">
                    <div className="container">
                        <h2 className="section-title">Comprehensive Business Solutions</h2>
                        <div className="platforms-grid">
                            {platforms.map((platform, index) => (
                                <div
                                    key={index}
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className={`platform-card ${visibleCards.includes(index) ? 'visible' : ''}`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="platform-icon">
                                        {platform.icon}
                                    </div>
                                    <div className="platform-content">
                                        <h3>{platform.title}</h3>
                                        <p className="platform-description">{platform.description}</p>
                                        <div className="platform-features">
                                            <h4>Key Features:</h4>
                                            <ul>
                                                {platform.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <button className="btn btn-outline platform-cta">
                                            Learn More →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="platforms-cta">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Ready to Transform Your Business?</h2>
                            <p>Discover how our platforms can drive your success</p>
                            <button className="btn btn-primary cta-button">
                                Get Started Today →
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default PlatformsPage