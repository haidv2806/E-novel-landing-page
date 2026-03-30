import { useState, useEffect, useRef } from "react"

export default function ScreenshotsSection() {
    const [active, setActive] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const screenshots = [
        { src: '/promoteImage/promoteImage-1.jpg', alt: 'Screenshot 1' },
        { src: '/promoteImage/promoteImage-2.jpg', alt: 'Screenshot 2' },
        { src: '/promoteImage/promoteImage-3.jpg', alt: 'Screenshot 3' },
        { src: '/promoteImage/promoteImage-4.jpg', alt: 'Screenshot 4' },
        { src: '/promoteImage/promoteImage-5.jpg', alt: 'Screenshot 5' },
        { src: '/promoteImage/promoteImage-6.jpg', alt: 'Screenshot 6' },
        { src: '/promoteImage/promoteImage-7.jpg', alt: 'Screenshot 7' },
    ]

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % screenshots.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [screenshots.length])

    // Scroll to active screenshot
    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current
            const activeChild = container.children[active] as HTMLElement

            if (activeChild) {
                const offset =
                    activeChild.offsetLeft -
                    container.offsetWidth / 2 +
                    activeChild.offsetWidth / 2

                container.scrollTo({
                    left: offset,
                    behavior: 'smooth'
                })
            }
        }
    }, [active])

    return (
        <section className="py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, #f8f4ff 0%, #ffffff 100%)' }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/5 px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">Giao diện</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main mb-4">Thiết kế tinh tế, dễ sử dụng</h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">Giao diện thân thiện, tối ưu cho trải nghiệm đọc trên điện thoại.</p>
                </div>

                <div
                    ref={containerRef}
                    className="flex justify-start md:justify-center gap-4 overflow-x-auto pb-10 snap-x scroll-smooth px-8 no-scrollbar"
                >
                    {screenshots.map((s, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`shrink-0 transition-all duration-500 rounded-[2.5rem] overflow-hidden snap-center outline-none border-4 ${active === i ? 'scale-105 border-primary shadow-2xl z-10' : 'scale-90 opacity-40 border-transparent hover:opacity-100 hover:scale-95'}`}
                        >
                            <img
                                src={s.src}
                                alt={s.alt}
                                className="w-[180px] sm:w-[240px] h-auto object-cover"
                            />
                        </button>
                    ))}
                </div>

                <div className="flex justify-center gap-2 mt-6">
                    {screenshots.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${active === i ? 'bg-primary w-8' : 'bg-primary/20'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}