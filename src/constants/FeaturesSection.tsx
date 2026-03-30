import useInView from "../hooks/useInView"

const features = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
        ),
        title: 'Trình đọc tùy chỉnh',
        desc: 'Tự do chọn font, cỡ chữ, màu nền, chế độ sáng/tối để đọc thoải mái nhất.',
        color: 'bg-purple-50 text-purple-600',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
        ),
        title: 'AI Text-to-Speech',
        desc: 'Nghe truyện với giọng đọc tự nhiên từ F5-TTS, Valtec offline và System TTS.',
        color: 'bg-blue-50 text-blue-600',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
        ),
        title: 'Đọc Offline',
        desc: 'Lưu truyện vào thiết bị với SQLite & FileSystem, đọc bất cứ lúc nào.',
        color: 'bg-green-50 text-green-600',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        ),
        title: 'Tìm kiếm nâng cao',
        desc: 'Full-text search, lọc theo thể loại, tác giả để tìm truyện phù hợp.',
        color: 'bg-orange-50 text-orange-600',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
        ),
        title: 'Cộng đồng Real-time',
        desc: 'Chat, bình luận, thảo luận trực tiếp với Socket.IO realtime.',
        color: 'bg-pink-50 text-pink-600',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
        ),
        title: 'Dark Mode',
        desc: 'Chế độ tối bảo vệ mắt, đọc thoải mái vào ban đêm.',
        color: 'bg-slate-100 text-slate-600',
    },
]

export default function FeaturesSection() {
    const { ref, isVisible } = useInView()
    return (
        <section id="features" ref={ref} className="py-20 lg:py-28 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/5 px-4 py-1.5           rounded-full mb-4 uppercase tracking-wider">Tính năng</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main mb-4">Trải nghiệm đọc truyện toàn diện</h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">Mọi thứ bạn cần để tận hưởng thế giới truyện, từ đọc đến nghe, từ online đến offline.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className={`group bg-white rounded-2xl p-6 border border-border-light hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div className={`w-12 h-12 ${f.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                {f.icon}
                            </div>
                            <h3 className="text-lg font-bold text-text-main mb-2">{f.title}</h3>
                            <p className="text-sm text-text-muted leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}