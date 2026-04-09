import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const PageShell = ({ children, className = '' }) => (
    <div className={`page-shell ${className}`.trim()}>
        <Navbar />
        <main className="main-content">{children}</main>
        <Footer />
    </div>
)

export default PageShell
