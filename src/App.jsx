import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
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

function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

function App() {
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
            </Routes>
        </>
    )
}

export default App
