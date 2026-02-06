import ServiceCard from '../ServiceCard/ServiceCard'
import './ServicesSection.css'

const ServicesSection = () => {
    const services = [
        {
            icon: '/icon2225-k8tc.svg',
            title: 'Strategy',
            description: 'Business strategy, growth planning, and market positioning',
        },
        {
            icon: '/icon2227-esll.svg',
            title: 'Operations',
            description: 'Process optimization, efficiency, and operational excellence',
        },
        {
            icon: '/icon2229-cui.svg',
            title: 'Digital',
            description: 'Digital transformation, technology integration, and innovation',
        },
        {
            icon: '/icon2231-vgv.svg',
            title: 'Human Development',
            description: 'Talent development, organizational culture, and leadership',
        },
        {
            icon: '/icon2232-m5pm.svg',
            title: 'Performance Management',
            description: 'KPIs, measurement systems, and performance tracking',
        },
        {
            icon: '/icon2234-557l.svg',
            title: 'Financial Advisory',
            description: 'Financial planning, analysis, and strategic investments',
        },
        {
            icon: '/icon2236-rwl6.svg',
            title: 'Business Development',
            description: 'Growth strategies, partnerships, and market expansion',
        },
        {
            icon: '/icon2237-0e13.svg',
            title: 'Innovation',
            description: 'Innovation strategy, R&D, and new product development',
        },
    ]

    return (
        <section className="services-section section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-description">
                        Comprehensive consulting solutions designed to drive transformation and deliver
                        measurable results across your organization
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
