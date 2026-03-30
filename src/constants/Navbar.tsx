import { useState, useEffect } from "react"
import { GOOGLE_PLAY_URL, APP_STORE_URL } from "../App"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="#" className="flex items-center gap-2.5 no-underline">
                        <div className="w-8 h-8 bg-primary rounded-lg shadow-sm flex items-center justify-center">
                            <span className="text-white font-bold text-sm">N</span>
                        </div>
                        <span className="text-lg font-bold text-text-main">E-Novel</span>
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-sm font-medium text-text-muted hover:text-primary             transition-colors">Tính năng</a>
                        <a href="#download" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">Tải app</a>
                        <a href="#contact" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">Liên hệ</a>
                        <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="bg-primary text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg">
                            Tải ngay
                        </a>
                    </div>

                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6 text-text-main" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {menuOpen
                                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            }
                        </svg>
                    </button>
                </div>

                {menuOpen && (
                    <div className="md:hidden bg-white rounded-2xl shadow-xl mt-2 p-4 border border-border-light">
                        <a href="#features" onClick={() => setMenuOpen(false)} className="block py-3 px-4 text-sm font-medium text-text-main hover:bg-bg-section rounded-lg             transition-colors">Tính năng</a>
                        <a href="#download" onClick={() => setMenuOpen(false)} className="block py-3 px-4 text-sm font-medium text-text-main hover:bg-bg-section rounded-lg transition-colors">Tải app</a>
                        <a href="#contact" onClick={() => setMenuOpen(false)} className="block py-3 px-4 text-sm font-medium text-text-main hover:bg-bg-section rounded-lg transition-colors">Liên hệ</a>
                        <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="block mt-2 bg-primary text-white text-sm font-semibold px-5 py-3 rounded-xl text-center hover:bg-primary-dark transition-colors">
                            Tải ngay
                        </a>
                    </div>
                )}
            </div>
        </nav>
    )
}