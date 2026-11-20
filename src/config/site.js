/**
 * Site configuration — ENY Consulting (enyconsulting.ca)
 * Set VITE_GHL_BOOKING_URL in .env for production GHL / Calendly links.
 */
const configuredBookingUrl = import.meta.env.VITE_GHL_BOOKING_URL

export const GHL_BOOKING_URL = configuredBookingUrl || '/contact?topic=Discovery%20Call'
export const GHL_BOOKING_TARGET = configuredBookingUrl ? '_blank' : undefined

export const SITE_NAME = 'ENY Consulting'
