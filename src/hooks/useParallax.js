import { useEffect, useRef, useState } from 'react'

export const useParallax = (speed = 0.5) => {
    const ref = useRef(null)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect()
                const scrollY = window.scrollY
                const elementTop = rect.top + scrollY
                const windowHeight = window.innerHeight
                const elementHeight = rect.height
                
                // Calculate parallax offset only when element is in viewport
                if (rect.bottom >= 0 && rect.top <= windowHeight) {
                    const scrolled = scrollY - elementTop + windowHeight
                    const parallaxOffset = scrolled * speed
                    setOffset(parallaxOffset)
                }
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Initial call

        return () => window.removeEventListener('scroll', handleScroll)
    }, [speed])

    return { ref, offset }
}
