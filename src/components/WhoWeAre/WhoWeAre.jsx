import { useState, useEffect, useRef } from 'react'
import './WhoWeAre.css'

const WhoWeAre = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [counts, setCounts] = useState({ clients: 0, countries: 0, years: 0, satisfaction: 0 })
    const sectionRef = useRef(null)

    const metrics = [
        {
            icon: '/icon2209-qu7g.svg',
            value: 500,
            suffix: '+',
            label: 'Clients Served',
            key: 'clients'
        },
        {
            icon: '/icon2210-yqzl.svg',
            value: 25,
            suffix: '+',
            label: 'Countries',
            key: 'countries'
        },
        {
            icon: '/icon2211-ty48.svg',
            value: 15,
            suffix: '+',
            label: 'Years Experience',
            key: 'years'
        },
        {
            icon: '/icon2212-xxvo.svg',
            value: 98,
            suffix: '%',
            label: 'Client Satisfaction',
            key: 'satisfaction'
        },
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.3 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [isVisible])

    useEffect(() => {
        if (!isVisible) return

        const duration = 2000
        const steps = 60
        const stepDuration = duration / steps

        metrics.forEach((metric) => {
            let currentCount = 0
            const increment = metric.value / steps

            const counter = setInterval(() => {
                currentCount += increment
                if (currentCount >= metric.value) {
                    setCounts(prev => ({ ...prev, [metric.key]: metric.value }))
                    clearInterval(counter)
                } else {
                    setCounts(prev => ({ ...prev, [metric.key]: Math.floor(currentCount) }))
                }
            }, stepDuration)
        })
    }, [isVisible])

    return (
        <section ref={sectionRef} className="who-we-are section">
            <div className="container">
                <div className="who-we-are-content">
                    <div className="section-header">
                        <span className="badge">Who We Are</span>
                        <h2 className="section-title">Transforming Businesses Through Excellence</h2>
                        <p className="section-description">
                            Eny is a premier consulting firm dedicated to empowering organizations with the insights,
                            strategies, and capabilities needed to thrive in today's dynamic business landscape. Through
                            our three specialized schools—Business Analysis, Business Consulting, and Thought Leadership—we
                            deliver comprehensive solutions that drive measurable impact. Our team of seasoned professionals
                            brings deep industry expertise and a commitment to excellence in every engagement. We partner
                            with organizations across industries to solve complex challenges, unlock new opportunities, and
                            build sustainable competitive advantages through data-driven insights and proven methodologies.
                        </p>
                    </div>

                    <div className="metrics-grid">
                        {metrics.map((metric, index) => (
                            <div key={index} className="metric-card">
                                <div className="metric-icon">
                                    <img src={metric.icon} alt="" />
                                </div>
                                <div className="metric-value">
                                    {counts[metric.key]}{metric.suffix}
                                </div>
                                <div className="metric-label">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre
