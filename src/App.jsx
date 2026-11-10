import { Routes, Route, useLocation, Navigate, Link } from 'react-router-dom'
import { useEffect } from 'react'
import PageShell from './components/PageShell'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import ServicesPage from './pages/ServicesPage'
import IndustriesPage from './pages/IndustriesPage'
import GovernmentPage from './pages/GovernmentPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import FounderPage from './pages/FounderPage'
import BrandsPage from './pages/BrandsPage'
import MediaPage from './pages/MediaPage'
import ContactPage from './pages/ContactPage'
import CareersPage from './pages/CareersPage'
import { SITE_NAME } from './config/site'
import { PAGE_METADATA } from './config/pageMetadata'

function updateMetaTag(selector, attribute, key, content) {
    let element = document.head.querySelector(selector)

    if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.appendChild(element)
    }

    element.setAttribute('content', content)
}

function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

function App() {
    const { pathname } = useLocation()

    useEffect(() => {
        const normalizedPath = pathname.replace(/\/+$/, '') || '/'
        const metadata = PAGE_METADATA[normalizedPath]
        const title = metadata?.title ?? `Page Not Found | ${SITE_NAME}`
        const description =
            metadata?.description ?? 'The requested page could not be found on the ENY Consulting website.'
        const canonicalUrl = `${window.location.origin}${normalizedPath}`

        document.title = title
        updateMetaTag('meta[name="description"]', 'name', 'description', description)
        updateMetaTag(
            'meta[name="robots"]',
            'name',
            'robots',
            metadata ? 'index,follow' : 'noindex,follow',
        )
        updateMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website')
        updateMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME)
        updateMetaTag('meta[property="og:title"]', 'property', 'og:title', title)
        updateMetaTag('meta[property="og:description"]', 'property', 'og:description', description)
        updateMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
        updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary')
        updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title)
        updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description)

        let canonical = document.head.querySelector('link[rel="canonical"]')
        if (!canonical) {
            canonical = document.createElement('link')
            canonical.setAttribute('rel', 'canonical')
            document.head.appendChild(canonical)
        }
        canonical.setAttribute('href', canonicalUrl)
    }, [pathname])

    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/industries" element={<IndustriesPage />} />
                <Route path="/government" element={<GovernmentPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/founder" element={<FounderPage />} />
                <Route path="/brands" element={<BrandsPage />} />
                <Route path="/media" element={<MediaPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/careers" element={<CareersPage />} />

                <Route path="/capabilities" element={<Navigate to="/services" replace />} />
                <Route path="/resources" element={<Navigate to="/media" replace />} />
                <Route path="/platforms" element={<Navigate to="/brands" replace />} />
                <Route
                    path="*"
                    element={
                        <PageShell>
                            <section className="page-section-block">
                                <div className="container">
                                    <h1>Page Not Found</h1>
                                    <p>The page you’re looking for may have moved or no longer exists.</p>
                                    <Link className="btn btn-primary" to="/">
                                        Return Home
                                    </Link>
                                </div>
                            </section>
                        </PageShell>
                    }
                />
            </Routes>
        </>
    )
}

export default App
