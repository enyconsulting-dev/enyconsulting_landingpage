import { useState, useEffect, useCallback, useRef } from 'react'
import './HeroCarousel.css'

const SLIDE_DURATION_MS = 5000

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0) // Start with "Welcome to Eny Consulting"
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const autoPlayRef = useRef(null)

    const slides = [
        {
            id: 0,
            title: 'Welcome to Eny Consulting',
            description: 'Transform your business with expert consulting services and strategic guidance',
            buttonText: 'Start Your Journey',
            backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=600&fit=crop'
        },
        {
            id: 1,
            title: 'Business Analysis School',
            description: 'Master data-driven insights and analytical frameworks to transform business performance',
            buttonText: 'Choose Your Path',
            backgroundImage: 'https://images.unsplash.com/photo-1658317705991-cb398ae81043?w=1920&h=600&fit=crop'
        },
        {
            id: 2,
            title: 'Business Consulting School',
            description: 'Deliver strategic solutions and drive organizational excellence with proven methodologies',
            buttonText: 'Choose Your Path',
            backgroundImage: 'https://images.unsplash.com/photo-1716703432455-3045789de738?w=1920&h=600&fit=crop'
        },
        {
            id: 3,
            title: 'Thought Leadership School',
            description: 'Shape the future of business through innovation, insights, and cutting-edge perspectives',
            buttonText: 'Choose Your Path',
            backgroundImage: 'https://images.unsplash.com/photo-1623715537851-8bc15aa8c145?w=1920&h=600&fit=crop'
        },
    ]

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, [slides.length])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }, [slides.length])

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    // Infinite auto-play: advance to next slide every N ms, loop back to 0 after last
    useEffect(() => {
        if (!isAutoPlaying) {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current)
                autoPlayRef.current = null
            }
            return
        }

        autoPlayRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, SLIDE_DURATION_MS)

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current)
                autoPlayRef.current = null
            }
        }
    }, [isAutoPlaying, slides.length])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowLeft') prevSlide()
            if (e.key === 'ArrowRight') nextSlide()
        }

        window.addEventListener('keydown', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [prevSlide, nextSlide])

    // Touch/Swipe handling for mobile
    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX)
    }

    const handleTouchMove = (e) => {
        setTouchEnd(e.touches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return

        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > 50
        const isRightSwipe = distance < -50

        if (isLeftSwipe) nextSlide()
        if (isRightSwipe) prevSlide()

        setTouchStart(0)
        setTouchEnd(0)
    }

    return (
        <section
            className="hero-carousel"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            aria-label="Hero Carousel"
        >
            <div
                className="carousel-track"
                style={{
                    width: `${slides.length * 100}%`,
                    transform: `translateX(-${currentSlide * (100 / slides.length)}%)`
                }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="carousel-slide"
                        style={{
                            width: `${100 / slides.length}%`,
                            flex: `0 0 ${100 / slides.length}%`,
                            backgroundImage: `url(${slide.backgroundImage})`
                        }}
                    >
                        <div className="slide-overlay"></div>
                        <div className="slide-content">
                            <h1 className="slide-title">{slide.title}</h1>
                            <p className="slide-description">{slide.description}</p>
                            <button className="btn btn-primary slide-cta">
                                {slide.buttonText}
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                                    <path d="M8.5 1L15.5 8.5L8.5 16M15 8.5H1" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                className="carousel-nav carousel-nav-prev"
                onClick={prevSlide}
                aria-label="Previous slide"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <button
                className="carousel-nav carousel-nav-next"
                onClick={nextSlide}
                aria-label="Next slide"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Dot Indicators */}
            <div className="carousel-indicators">
                {slides.map((slide) => (
                    <button
                        key={slide.id}
                        className={`indicator-dot ${currentSlide === slide.id ? 'active' : ''}`}
                        onClick={() => goToSlide(slide.id)}
                        aria-label={`Go to slide ${slide.id + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}

export default HeroCarousel
