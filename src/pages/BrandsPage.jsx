import { useEffect } from 'react'
import PageShell from '../components/PageShell'
import { BrandsPreview } from '../components/home/HomeSections'
import '../components/home/HomeSections.css'

const BrandsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Our Education Brands | ENY Consulting'
    }, [])

    return (
        <PageShell className="brands-page">
            <div style={{ paddingTop: '1rem' }}>
                <BrandsPreview />
            </div>
        </PageShell>
    )
}

export default BrandsPage
