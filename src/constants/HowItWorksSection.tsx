import useInView from "../hooks/useInView"

const steps = [
    {
        step: '01',
        title: 'Tải app',
        desc: 'Tải E-Novel miễn phí từ Google Play hoặc App Store.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
        ),
    },
    {
        step: '02',
        title: 'Khám phá',
        desc: 'Tìm kiếm và khám phá kho truyện đa dạng theo thể loại.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        ),
    },
    {
        step: '03',
        title: 'Đọc & Nghe',
        desc: 'Đọc hoặc nghe truyện với AI TTS, bất cứ lúc nào, bất cứ nơi đâu.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        ),
    },
]

export default function HowItWorksSection() {
    const { ref, isVisible } = useInView()
    return (
        <section ref={ref} className="py-20 lg:py-28 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/5 px-4 py-1.5 rounded-full mb-4           uppercase tracking-wider">Bắt đầu</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main mb-4">Chỉ 3 bước đơn giản</h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">Bắt đầu hành trình đọc truyện chưa bao giờ dễ đến thế.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((s, i) => (
                        <div
                            key={i}
                            className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                            style={{ animationDelay: `${i * 0.2}s` }}
                        >
                            <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/25">
                                {s.icon}
                                <span className="absolute -top-2 -right-2 w-7 h-7 bg-white text-primary text-xs font-bold rounded-full flex items-center justify-center shadow-md border border-primary/10">{s.step}</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-main mb-2">{s.title}</h3>
                            <p className="text-text-muted leading-relaxed">{s.desc}</p>
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-10 right-0 translate-x-1/2">
                                    <svg className="w-8 h-8 text-primary/20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}