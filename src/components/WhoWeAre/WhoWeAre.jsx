import './WhoWeAre.css'

const WhoWeAre = () => {
    const metrics = [
        {
            icon: '/icon2209-qu7g.svg',
            value: '500+',
            label: 'Clients Served',
        },
        {
            icon: '/icon2210-yqzl.svg',
            value: '25+',
            label: 'Countries',
        },
        {
            icon: '/icon2211-ty48.svg',
            value: '15+',
            label: 'Years Experience',
        },
        {
            icon: '/icon2212-xxvo.svg',
            value: '98%',
            label: 'Client Satisfaction',
        },
    ]

    return (
        <section className="who-we-are section">
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
                                <div className="metric-value">{metric.value}</div>
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
