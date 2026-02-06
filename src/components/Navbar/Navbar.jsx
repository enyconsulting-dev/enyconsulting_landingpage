import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
        { name: 'Platforms', path: '/platforms' },
        { name: 'Capabilities', path: '/capabilities' },
        { name: 'About Us', path: '/about' },
        { name: 'Resources', path: '/resources' },
    ]

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
                        <img src="/image1i220-tps-200h.png" alt="Eny Consulting" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="navbar-links">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <button className="btn btn-primary navbar-cta">
                        Contact Us
                    </button>

                    {/* Mobile Menu Button */}
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

            {/* Mobile Sidebar */}
            <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="sidebar-overlay" onClick={closeMobileMenu}></div>
                <div className="sidebar-content">
                    <div className="sidebar-header">
                        <Link to="/" className="sidebar-logo" onClick={closeMobileMenu}>
                            <img src="/image1i220-tps-200h.png" alt="Eny Consulting" />
                        </Link>
                        <button
                            className="sidebar-close"
                            onClick={closeMobileMenu}
                            aria-label="Close sidebar"
                        >
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
                                className={`sidebar-link ${location.pathname === link.path ? 'active' : ''}`}
                                onClick={closeMobileMenu}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="sidebar-footer">
                        <button className="btn btn-primary sidebar-cta" onClick={closeMobileMenu}>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
