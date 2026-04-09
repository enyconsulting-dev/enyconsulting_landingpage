import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GHL_BOOKING_URL } from '../../config/site'
import './Navbar.css'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Industries', path: '/industries' },
        { name: 'Government', path: '/government' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Founder', path: '/founder' },
        { name: 'Contact', path: '/contact' },
    ]

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/'
        return location.pathname === path || location.pathname.startsWith(`${path}/`)
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo">
                        <img src="/image1i220-tps-200h.png" alt="ENY Consulting" />
                    </Link>

                    <div className="navbar-links">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <a
                        href={GHL_BOOKING_URL}
                        className="btn btn-primary navbar-cta"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Book a Call
                    </a>

                    <button
                        className="mobile-menu-toggle"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="sidebar-overlay" onClick={closeMobileMenu} role="presentation"></div>
                <div className="sidebar-content">
                    <div className="sidebar-header">
                        <Link to="/" className="sidebar-logo" onClick={closeMobileMenu}>
                            <img src="/image1i220-tps-200h.png" alt="ENY Consulting" />
                        </Link>
                        <button className="sidebar-close" onClick={closeMobileMenu} aria-label="Close sidebar">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="sidebar-links">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`sidebar-link ${isActive(link.path) ? 'active' : ''}`}
                                onClick={closeMobileMenu}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/brands" className="sidebar-link" onClick={closeMobileMenu}>
                            Our Brands
                        </Link>
                        <Link to="/media" className="sidebar-link" onClick={closeMobileMenu}>
                            Media
                        </Link>
                    </div>

                    <div className="sidebar-footer">
                        <a
                            href={GHL_BOOKING_URL}
                            className="btn btn-primary sidebar-cta"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMobileMenu}
                        >
                            Book a Call
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
