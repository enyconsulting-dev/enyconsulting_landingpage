import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import CapabilitiesPage from './pages/CapabilitiesPage'
import ResourcesPage from './pages/ResourcesPage'
import PlatformsPage from './pages/PlatformsPage'

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
                <Route path="/capabilities" element={<CapabilitiesPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/platforms" element={<PlatformsPage />} />
            </Routes>
        </>
    )
}

export default App
