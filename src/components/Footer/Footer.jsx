import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    const company = [
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Industries', path: '/industries' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Media & Press', path: '/media' },
        { name: 'Careers', path: '/careers' },
    ]

    const brands = [
        { name: 'Business Analysis School', href: 'https://businessanalysisschool.com' },
        { name: 'Business Consulting School', href: 'https://businessconsultingschool.com' },
        { name: 'Thought Leadership Business School', href: 'https://thoughtleadershipbusinessschool.com' },
        { name: 'Eno Eka (Personal Brand)', href: 'https://enoeka.com' },
    ]

    const social = [
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com/company/enyconsultinginc',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com/enyconsulting',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
            ),
        },
    ]

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid-main">
                    <div className="footer-col footer-brand-col">
                        <div className="footer-brand-title">ENY. CONSULTING</div>
                        <p className="footer-brand-desc">
                            Award-winning global business technology and consulting firm. Delivering high-impact solutions
                            across industries. Offices in Canada, USA, and Nigeria.
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-col-title">Company</h4>
                        <nav className="footer-nav">
                            {company.map((item) => (
                                <Link key={item.path} to={item.path} className="footer-nav-link">
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-col-title">Our Brands</h4>
                        <nav className="footer-nav">
                            {brands.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="footer-nav-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-col-title">Contact</h4>
                        <div className="footer-contact">
                            <a href="mailto:info@enyconsulting.ca">info@enyconsulting.ca</a>
                            <a href="tel:+15873288469">+1-587-328-8469</a>
                            <a href="tel:+2349085515969">+234-908-551-5969</a>
                            <a href="https://wa.me/message/3AIHXB6TNAJ7L1" target="_blank" rel="noopener noreferrer">
                                WhatsApp
                            </a>
                            {social.map((s) => (
                                <a key={s.name} href={s.href} className="footer-social-inline" target="_blank" rel="noopener noreferrer">
                                    {s.icon}
                                    <span>{s.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-logo">
                        <img src="/image1i220-tps-200h.png" alt="ENY Consulting" />
                    </div>

                    <div className="footer-legal">
                        <span className="footer-copy">
                            &copy; {new Date().getFullYear()} ENY Consulting Inc. All rights reserved.
                        </span>
                        <a href="#privacy" className="footer-legal-link">
                            Privacy Policy
                        </a>
                        <span className="footer-legal-sep">·</span>
                        <a href="#terms" className="footer-legal-link">
                            Terms of Service
                        </a>
                        <span className="footer-legal-sep">·</span>
                        <a href="#cookies" className="footer-legal-link">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
