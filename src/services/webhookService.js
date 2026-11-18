/**
 * Webhook Service — Send form data to GoHighLevel
 */

const SUBMISSION_URL = '/api/submit-form'

export const sendContactFormToWebhook = async (formData) => {
    try {
        const payload = {
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone || '',
            inquiryType: formData.inquiryType,
            message: formData.message,
            source: 'ENY_SITE',
            type: 'contact',
            tag: formData.inquiryType, // The inquiry type serves as the tag
            submittedAt: new Date().toISOString(),
            turnstileToken: formData.turnstileToken,
        }

        const response = await fetch(SUBMISSION_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })

        if (!response.ok) {
            console.error('Webhook response error:', response.status, response.statusText)
        }

        return response.ok
    } catch (error) {
        console.error('Error sending data to webhook:', error)
        return false
    }
}

export const sendResourceDownloadToWebhook = async (downloadData) => {
    try {
        const payload = {
            fullName: downloadData.fullName,
            email: downloadData.email,
            phone: downloadData.phone || '',
            resource: downloadData.resourceName,
            source: 'ENY_SITE',
            type: 'resource',
            tag: downloadData.resourceName, // The resource name serves as the tag
            submittedAt: new Date().toISOString(),
            turnstileToken: downloadData.turnstileToken,
        }

        const response = await fetch(SUBMISSION_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })

        if (!response.ok) {
            console.error('Webhook response error:', response.status, response.statusText)
        }

        return response.ok
    } catch (error) {
        console.error('Error sending data to webhook:', error)
        return false
    }
}
