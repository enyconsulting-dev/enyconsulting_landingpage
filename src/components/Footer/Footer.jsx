import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Platforms', path: '/platforms' },
        { name: 'Capabilities', path: '/capabilities' },
        { name: 'About Us', path: '/about' },
        { name: 'Resources', path: '/resources' },
    ]
    const socialIcons = [
        {
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
            ),
            name: 'Twitter'
        },
        {
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
            ),
            name: 'Facebook'
        },
        {
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                </svg>
            ),
            name: 'LinkedIn'
        },
    ]

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <p className="footer-tagline">
                        Empowering Leaders to Transform Business Through Expertise and Innovation
                    </p>

                    <div className="footer-links">
                        {navLinks.map((link) => (
                            <Link key={link.name} to={link.path} className="footer-link">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="footer-cta">
                        <h3 className="footer-cta-title">Ready to Elevate Your Business?</h3>
                        <p className="footer-cta-description">
                            Partner with Eny Consulting to unlock strategic insights, develop high-performing teams,
                            and drive sustainable growth. Our experts are ready to guide your transformation journey.
                        </p>
                        <button className="btn btn-primary">Contact Us</button>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-logo">
                        <img src="/image1i220-tps-200h.png" alt="Eny Consulting" />
                    </div>

                    <div className="footer-legal">
                        <a href="#privacy" className="footer-legal-link">Privacy Policy</a>
                        <a href="#terms" className="footer-legal-link">Terms of Use</a>
                    </div>

                    <div className="footer-social">
                        <span className="footer-social-label">FOLLOW US</span>
                        <div className="footer-social-icons">
                            {socialIcons.map((social) => (
                                <a key={social.name} href="#" className="footer-social-link" aria-label={social.name}>
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
