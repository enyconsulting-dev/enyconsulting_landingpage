import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './CapabilitiesPage.css'

const CapabilitiesPage = () => {
    const [visibleItems, setVisibleItems] = useState([])
    const itemsRef = useRef([])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = itemsRef.current.indexOf(entry.target)
                        setVisibleItems((prev) => [...new Set([...prev, index])])
                    }
                })
            },
            { threshold: 0.2 }
        )

        itemsRef.current.forEach((item) => {
            if (item) observer.observe(item)
        })

        return () => observer.disconnect()
    }, [])

    const capabilities = [
        {
            title: 'Software Development',
            description: 'We design and develop custom software applications, frameworks, and tools that help you solve problems, increase your customer base and grow your revenue.',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
            ctaText: 'Learn More →'
        },
        {
            title: 'Digital Transformation',
            description: 'We provide 360-degree consulting for businesses by auditing their systems and helping them implement cutting-edge technology solutions.',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
            ctaText: 'Learn More →'
        },
        {
            title: 'Human Resource Management',
            description: 'We recruit, place and manage top global Tech talents across various industries through our network of experienced HR Professionals.',
            image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
            ctaText: 'Learn More →'
        },
        {
            title: 'Career Coaching & Training',
            description: 'We coach professionals on how to leverage their skills to get six-figure jobs in Tech through our Business Analysis School.',
            image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
            ctaText: 'Register Now →'
        }
    ]

    return (
        <div className="capabilities-page">
            <Navbar />
            <main className="main-content">
                {/* Hero Section */}
                <section className="capabilities-hero">
                    <div className="container">
                        <h1>Capabilities</h1>
                        <p className="hero-description">
                            From software development to professional certifications, we provide comprehensive solutions that drive business growth, operational excellence, and career advancement.
                        </p>
                    </div>
                </section>

                {/* Capabilities Grid */}
                <section className="capabilities-section">
                    <div className="container">
                        <h2 className="section-title">Our Capabilities</h2>
                        <div className="capabilities-grid">
                            {capabilities.map((capability, index) => (
                                <div
                                    key={index}
                                    ref={(el) => (itemsRef.current[index] = el)}
                                    className={`capability-item ${visibleItems.includes(index) ? 'visible' : ''}`}
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    <div className="capability-image">
                                        <img src={capability.image} alt={capability.title} />
                                    </div>
                                    <div className="capability-content">
                                        <h3>{capability.title}</h3>
                                        <p>{capability.description}</p>
                                        <button className="btn btn-outline capability-cta">
                                            {capability.ctaText}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default CapabilitiesPage