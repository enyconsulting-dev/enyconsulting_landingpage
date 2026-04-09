/**
 * Site configuration — ENY Consulting (enyconsulting.ca)
 * Set VITE_GHL_BOOKING_URL in .env for production GHL / Calendly links.
 */
export const GHL_BOOKING_URL =
    import.meta.env.VITE_GHL_BOOKING_URL || 'https://enyconsulting.ca'

export const SITE_NAME = 'ENY Consulting'
