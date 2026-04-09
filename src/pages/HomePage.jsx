import { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HomeHero from '../components/home/HomeHero'
import StatsBar from '../components/home/StatsBar'
import {
    AsFeaturedBar,
    WhatWeDoSection,
    IndustriesPreview,
    FounderSpotlight,
    BrandsPreview,
    CaseStudiesPreview,
    TestimonialsSection,
    LeadCapture,
    HomeCtaBanner,
} from '../components/home/HomeSections'
import './HomePage.css'
import '../components/home/HomeSections.css'

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'ENY Consulting | Global Business Technology & Digital Transformation'
    }, [])

    return (
        <div className="home-page">
            <Navbar />
            <main className="main-content">
                <HomeHero />
                <StatsBar />
                <AsFeaturedBar />
                <WhatWeDoSection />
                <IndustriesPreview />
                <FounderSpotlight />
                <BrandsPreview />
                <CaseStudiesPreview />
                <TestimonialsSection />
                <LeadCapture />
                <HomeCtaBanner />
            </main>
            <Footer />
        </div>
    )
}

export default HomePage
