import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './AboutUsPage.css'

const AboutUsPage = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0)

        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 700
    const parallaxOffset = scrollY < heroHeight ? Math.min(scrollY * 0.5, 400) : 400

    return (
        <div className="about-us-page">
            <Navbar />
            <main className="main-content">
                {/* Hero Section with Parallax */}
                <section className="hero-section">
                    <div 
                        className="hero-slide-bg" 
                        style={{ 
                            backgroundImage: 'url(/Eno_b.jpg)',
                            opacity: scrollY < heroHeight ? 1 : 0,
                            visibility: scrollY < heroHeight ? 'visible' : 'hidden'
                        }}
                    >
                        <div className="hero-gradient"></div>
                    </div>
                    <div className="scroll-indicator">
                        <span className="scroll-text">SCROLL</span>
                        <div className="scroll-line"></div>
                    </div>
                    <div className="container">
                        <div 
                            className="hero-content" 
                            style={{ 
                                transform: `translate(-50%, calc(-50% + ${parallaxOffset}px))`,
                                opacity: Math.max(1 - scrollY / 500, 0)
                            }}
                        >
                            <p className="hero-tagline">
                                We partner with clients to simplify, strengthen, and transform their businesses.
                            </p>
                            <p className="hero-about-text">
                                ABOUT US
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className="mission-vision-section">
                    <div className="container">
                        <h2 className="section-title">Our Mission & Vision</h2>
                        <div className="mission-vision-grid">
                            <div className="mission-card">
                                <div className="card-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                    </svg>
                                </div>
                                <h3>Our Mission</h3>
                                <p>
                                    To empower organizations and professionals with the strategic insights, analytical rigor, and innovative solutions needed to excel in an ever-evolving business landscape.
                                </p>
                            </div>
                            <div className="vision-card">
                                <div className="card-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"/>
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                                        <path d="M12 17h.01"/>
                                    </svg>
                                </div>
                                <h3>Our Vision</h3>
                                <p>
                                    To be the global leader in transformative consulting and professional development, recognized for creating lasting impact through expertise, innovation, and unwavering commitment to excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Founder Section */}
                <section className="founder-section">
                    <div className="container">
                        <h2 className="section-title text-center">Meet Our Founder</h2>
                        <div className="founder-content">
                            <div className="founder-image">
                                <img
                                    src="/Eno.jpg"
                                    alt="Eno Eka"
                                />
                            </div>
                            <div className="founder-info">
                                <h3>Eno Eka</h3>
                                <p className="founder-title">Founder & CEO</p>
                                <p className="founder-credentials">CBAP, PROSCI, SMC, AAC, SPOC, SCC, ITIL</p>
                                <div className="founder-description">
                                    <p>
                                        My name is Eno Eka, I am a Business Analyst and Change Manager based in Calgary, Alberta.
                                    </p>
                                    <p>
                                        I am the CEO of Eny Consulting Inc, an IT Business Consulting Company where we help businesses leverage technology to improve business processes & increase revenue, recruit and train employees in the latest technology systems and certification.
                                    </p>
                                    <p>
                                        I am the Founder of Business Analysis School where we help professionals leverage their experience to transition into tech and increase their income using Business Analysis skills.
                                    </p>
                                    <p>
                                        I am an award-winning career coach and speaker who has been recognized for helping more than 20,000 professionals around the world kick start their professional careers.
                                    </p>
                                    <p>
                                        I am a business analysis content developer and course instructor at the University of Manitoba.
                                    </p>
                                    <p>
                                        Since arriving in Canada in 2018, I have been passionate about impacting the lives of thousands of immigrants to Canada and helping them get decent professional jobs that increase their incomes significantly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default AboutUsPage