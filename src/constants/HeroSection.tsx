import { GOOGLE_PLAY_URL, APP_STORE_URL } from "../App"

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #fdf6f0 0%, #f8f4ff 50%, #eee8ff 100%)' }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute top-40 right-20 w-32 h-32 bg-primary-light/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-primary/10">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            <span className="text-xs font-medium text-text-muted">Miễn phí trên Google Play</span>
                        </div>

                        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-primary/10">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            <span className="text-xs font-medium text-text-muted">Miễn phí trên App Store</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-main leading-tight mb-6">
                            Đọc truyện mọi lúc,{' '}
                            <span className="gradient-text">nghe truyện mọi nơi</span>
                        </h1>

                        <p className="text-lg text-text-muted leading-relaxed mb-8 max-w-lg">
                            Trải nghiệm đọc và nghe truyện tuyệt vời với AI Text-to-Speech, đọc offline, và cộng đồng độc giả sôi động.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-text-main text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.394 12l2.304-2.492zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" /></svg>
                                Google Play
                            </a>
                            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-text-main px-6 py-3.5 rounded-xl font-semibold border border-border-light hover:border-primary/30 hover:shadow-lg transition-all hover:-translate-y-0.5">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                                App Store
                            </a>
                        </div>

                        <div className="flex items-center gap-3 mt-8">
                            <div className="flex items-center gap-1 text-xs font-medium text-text-muted">
                                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                            </div>
                            <span className="text-xs text-text-muted">Yêu thích bởi hàng ngàn độc giả</span>
                        </div>
                    </div>

                    <div className="relative flex justify-center animate-fade-in-up animation-delay-300">
                        <div className="relative">
                            <div className="w-64 h-[500px] bg-text-main rounded-[3rem] p-3 shadow-2xl animate-float">
                                <div className="w-full h-full bg-gradient-to-b from-bg-section to-white rounded-[2.2rem] flex flex-col items-center justify-center overflow-hidden relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-text-main rounded-b-2xl"></div>
                                    <img src="/icon.png" alt="E-Novel Logo" className="w-20 h-20 mb-4 opacity-80" />
                                    <span className="text-lg font-bold text-text-main">E-Novel</span>
                                    <span className="text-xs text-text-muted mt-1">Đọc & Nghe truyện</span>
                                    <div className="mt-6 space-y-2 w-4/5">
                                        <div className="h-3 bg-primary/10 rounded-full w-full"></div>
                                        <div className="h-3 bg-primary/10 rounded-full w-3/4"></div>
                                        <div className="h-3 bg-primary/10 rounded-full w-5/6"></div>
                                        <div className="h-3 bg-primary/10 rounded-full w-2/3"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -right-4 top-20 bg-white rounded-2xl shadow-lg p-3 border border-border-light">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold text-text-main">AI TTS</div>
                                        <div className="text-[10px] text-text-muted">Đang phát...</div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -left-6 bottom-32 bg-white rounded-2xl shadow-lg p-3 border border-border-light">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold text-text-main">Offline</div>
                                        <div className="text-[10px] text-text-muted">Đã lưu</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}