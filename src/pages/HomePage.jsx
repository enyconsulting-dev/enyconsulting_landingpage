import { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel'
import WhoWeAre from '../components/WhoWeAre/WhoWeAre'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import Footer from '../components/Footer/Footer'
import './HomePage.css'

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="home-page">
            <Navbar />
            <main className="main-content">
                <HeroCarousel />
                <WhoWeAre />
                <ServicesSection />

                {/* CTA Section */}
                <section className="cta-section">
                    <div className="container cta-container">
                        <h2 className="cta-title">Ready to Transform Your Business?</h2>
                        <p className="cta-description">
                            Join hundreds of leading organizations that have achieved measurable success with Eny.
                        </p>
                        <button className="btn btn-primary cta-button">
                            Start Your Journey →
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default HomePage
