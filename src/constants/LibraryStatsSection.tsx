import useInView from "../hooks/useInView"

const stats = [
    {
        icon: (
            <svg className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        value: '1.000+',
        label: 'Đầu truyện',
        desc: 'Kho tàng truyện phong phú đa dạng thể loại.',
    },
    {
        icon: (
            <svg className="w-8 h-8 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
        value: '50+',
        label: 'Thể loại',
        desc: 'Đầy đủ từ Ngôn tình, Tiên hiệp đến Trinh thám.',
    },
    {
        icon: (
            <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        value: '1M+',
        label: 'Chương truyện',
        desc: 'Nội dung khổng lồ, cập nhật liên tục mỗi ngày.',
    }
]

export default function LibraryStatsSection() {
    const { ref, isVisible } = useInView()

    return (
        <section ref={ref} className="py-20 bg-bg-section overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/5 px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">Hệ sinh thái E-Novels</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main mb-4">Mọi thứ bạn cần cho đam mê đọc truyện</h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">Khám phá kho tàng nội dung khổng lồ và cộng đồng độc giả nhiệt huyết tại E-Novels.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className={`flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-border-light shadow-sm hover:shadow-md transition-all duration-500 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-sm ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {stat.icon}
                            </div>
                            <div className="text-3xl sm:text-4xl font-extrabold text-text-main mb-2 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
                                {stat.label}
                            </div>
                            <p className="text-sm text-text-muted leading-relaxed px-2">
                                {stat.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
