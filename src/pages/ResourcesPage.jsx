import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './ResourcesPage.css'

const ResourcesPage = () => {
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

    const resources = [
        {
            title: 'Business Analysis Framework',
            description: 'Complete guide to modern business analysis techniques',
            type: 'PDF',
            ctaText: 'Download PDF'
        },
        {
            title: 'Strategic Planning Templates',
            description: 'Essential templates for strategic planning',
            type: 'Templates',
            ctaText: 'Download Templates'
        },
        {
            title: 'Digital Transformation Masterclass',
            description: 'Expert webinar on digital transformation',
            type: 'Webinar',
            ctaText: 'Watch Webinar'
        }
    ]

    return (
        <div className="resources-page">
            <Navbar />
            <main className="main-content">
                {/* Hero Section */}
                <section className="resources-hero">
                    <div className="container">
                        <h1>Resources</h1>
                        <p className="hero-description">
                            Access our comprehensive collection of guides, templates, webinars, and tools designed to accelerate your success in business analysis and consulting.
                        </p>
                    </div>
                </section>

                {/* Featured Resources */}
                <section className="resources-section">
                    <div className="container">
                        <h2 className="section-title">Featured Resources</h2>
                        <div className="resources-grid">
                            {resources.map((resource, index) => (
                                <div
                                    key={index}
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className={`resource-card ${visibleCards.includes(index) ? 'visible' : ''}`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="resource-image">
                                        <div
                                            className="resource-gradient"
                                            style={{
                                                background: index === 0
                                                    ? 'linear-gradient(135deg, #96088E 0%, #475569 100%)'
                                                    : index === 1
                                                    ? 'linear-gradient(135deg, #073B6A 0%, #96088E 100%)'
                                                    : 'linear-gradient(135deg, #073B6A 0%, #96088E 100%)',
                                                width: '100%',
                                                height: '100%'
                                            }}
                                        ></div>
                                        <div className="resource-overlay"></div>
                                    </div>
                                    <div className="resource-content">
                                        <h3>{resource.title}</h3>
                                        <p className="resource-description">{resource.description}</p>
                                        <button className="btn btn-primary resource-cta">
                                            {resource.ctaText}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="newsletter-section">
                    <div className="container">
                        <div className="newsletter-content">
                            <h2>Stay Updated</h2>
                            <p>Subscribe to our newsletter for new resources and exclusive content</p>
                            <div className="newsletter-form">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="newsletter-input"
                                />
                                <button className="btn btn-primary newsletter-btn">
                                    Subscribe →
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default ResourcesPage