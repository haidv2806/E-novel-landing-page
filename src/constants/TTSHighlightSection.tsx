import useInView from "../hooks/useInView"

const ttsLevels = [
    {
        level: 'Online',
        engine: 'F5-TTS',
        desc: 'Giọng nói AI chất lượng cao, tự nhiên nhất. Cần kết nối internet.',
        icon: '🌐',
        features: ['Giọng đọc tự nhiên, cảm xúc', 'Hỗ trợ nhiều giọng nói', 'Chất lượng studio'],
        color: 'from-purple-500 to-blue-500',
        badge: 'Chất lượng tốt nhất',
    },
    {
        level: 'Offline',
        engine: 'Valtec',
        desc: 'Neural TTS chạy ngay trên thiết bị, không cần mạng.',
        icon: '📱',
        features: ['Không cần internet', 'Neural network trên máy', 'Tốc độ nhanh'],
        color: 'from-blue-500 to-teal-500',
        badge: 'Không cần mạng',
    },
    {
        level: 'System',
        engine: 'System TTS',
        desc: 'Sử dụng TTS có sẵn của thiết bị, luôn sẵn sàng.',
        icon: '⚙️',
        features: ['Có sẵn trên mọi thiết bị', 'Tiết kiệm tài nguyên', 'Hoạt động mọi lúc'],
        color: 'from-teal-500 to-green-500',
        badge: 'Luôn sẵn sàng',
    },
]

export default function TTSHighlightSection() {
    const { ref, isVisible } = useInView()
    return (
        <section ref={ref} className="py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, #f8f4ff 0%, #ffffff 100%)' }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/5 px-4 py-1.5 rounded-full mb-4           uppercase tracking-wider">Text-to-Speech</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main mb-4">3 cấp độ nghe truyện</h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">Từ AI cao cấp đến TTS hệ thống, luôn có giải pháp phù hợp mọi hoàn cảnh.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {ttsLevels.map((t, i) => (
                        <div
                            key={i}
                            className={`relative bg-white rounded-2xl p-6 border border-border-light overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.color}`}></div>
                            <div className="text-4xl mb-4">{t.icon}</div>
                            <div className="inline-block text-xs font-semibold text-primary bg-primary/5 px-3 py-1 rounded-full mb-3">{t.badge}</div>
                            <h3 className="text-xl font-bold text-text-main mb-1">{t.engine}</h3>
                            <p className="text-xs text-text-muted uppercase tracking-wider mb-3">{t.level}</p>
                            <p className="text-sm text-text-muted mb-4 leading-relaxed">{t.desc}</p>
                            <ul className="space-y-2">
                                {t.features.map((feat, j) => (
                                    <li key={j} className="flex items-center gap-2 text-sm text-text-main">
                                        <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}