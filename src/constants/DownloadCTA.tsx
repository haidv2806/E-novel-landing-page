import { GOOGLE_PLAY_URL, APP_STORE_URL } from "../App"

export default function DownloadCTA() {
    return (
        <section id="download" className="py-20 lg:py-28">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 sm:p-16 text-center text-white overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full"></div>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Sẵn sàng khám phá thế giới truyện?</h2>
                        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Tải E-Novel ngay hôm nay và bắt đầu hành trình đọc truyện tuyệt vời của bạn.</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-white text-text-main px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.394 12l2.304-2.492zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" /></svg>
                                Google Play
                            </a>
                            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all hover:-translate-y-0.5">
                                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                                App Store
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}