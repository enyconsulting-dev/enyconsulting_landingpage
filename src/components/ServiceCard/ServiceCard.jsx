import './ServiceCard.css'

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="service-card">
            <div className="service-card-header">
                <div className="service-icon">
                    <img src={icon} alt="" />
                </div>
                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description}</p>
            </div>
            <button className="service-explore-btn">
                Explore
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    )
}

export default ServiceCard
