import { useState, useEffect, useRef } from 'react'
import './App.css'

const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.haidv2806.ENovel'

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, isVisible }
}

/* ─── Navbar ─── */
function Navbar() {
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

/* ─── Hero Section ─── */
function HeroSection() {
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

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-main leading-tight mb-6">
                            Đọc truyện mọi lúc,{' '}
                            <span className="gradient-text">nghe truyện mọi nơi</span>
            </h1>

            <p className="text-lg text-text-muted leading-relaxed mb-8 max-w-lg">
              Trải nghiệm đọc và nghe truyện tuyệt vời với AI Text-to-Speech, đọc offline, và cộng đồng độc giả sôi động.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-text-main text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.394 12l2.304-2.492zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z"/></svg>
                Google Play
              </a>
              <a href="#" className="inline-flex items-center gap-3 bg-white text-text-main px-6 py-3.5 rounded-xl font-semibold border border-border-light hover:border-primary/30 hover:shadow-lg transition-all hover:-translate-y-0.5">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
              </a>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <div className="flex items-center gap-1 text-xs font-medium text-text-muted">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
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

/* ─── Features Section ─── */
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

function FeaturesSection() {
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

/* ─── TTS Highlight Section ─── */
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

function TTSHighlightSection() {
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

/* ─── How It Works ─── */
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

function HowItWorksSection() {
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

/* ─── Screenshots Carousel ─── */
function ScreenshotsSection() {
  const [active, setActive] = useState(0)
  const screenshots = [
        { label: 'Trang chủ', color: 'from-purple-400 to-blue-400' },
        { label: 'Đọc truyện', color: 'from-blue-400 to-teal-400' },
        { label: 'Nghe truyện', color: 'from-teal-400 to-green-400' },
        { label: 'Tìm kiếm', color: 'from-green-400 to-yellow-400' },
        { label: 'Cá nhân', color: 'from-yellow-400 to-orange-400' },
  ]

  return (
    <section className="py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8f4ff 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-primary bg-primary/5 px-4 py-1.5 rounded-full mb-4           uppercase tracking-wider">Giao diện</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main mb-4">Thiết kế tinh tế, dễ sử dụng</h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">Giao diện thân thiện, tối ưu cho trải nghiệm đọc trên điện thoại.</p>
        </div>

        <div className="flex justify-center gap-6 overflow-x-auto pb-8">
          {screenshots.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`shrink-0 transition-all duration-500 ${active === i ? 'scale-105' : 'scale-95 opacity-60'}`}
            >
              <div className={`w-48 h-80 sm:w-56 sm:h-96 bg-gradient-to-b ${s.color} rounded-3xl flex flex-col items-center justify-center text-white shadow-xl`}>
                <img src="/icon.png" alt="E-Novel" className="w-12 h-12 mb-3 opacity-90" />
                <span className="text-sm font-semibold">{s.label}</span>
                <span className="text-xs opacity-70 mt-1">Screenshot placeholder</span>
              </div>
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

/* ─── Download CTA ─── */
function DownloadCTA() {
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
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.394 12l2.304-2.492zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z"/></svg>
                Google Play
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all hover:-translate-y-0.5">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  const [activePolicy, setActivePolicy] = useState<string | null>(null)

  const disclaimerContent = `E-Novels không phải là nhà sản xuất (sơ cấp hay thứ cấp) của bất kỳ nội dung nào trên trang web này. Vui lòng gửi yêu cầu trực tiếp đến nguồn nơi nội dung được xuất bản hoặc tạo ra ban đầu.

Chúng tôi là nền tảng chia sẻ nội dung cho phép người dùng đăng tải và chia sẻ tiểu thuyết, truyện dài tập, truyện ngắn và các nội dung văn học khác. Mặc dù chúng tôi nỗ lực kiểm duyệt và xác minh tính tuân thủ, thông tin và nội dung hiển thị có thể không hoàn toàn chính xác hoặc đầy đủ.`

  const termsContent = `1. ĐỘ TUỔI VÀ ĐIỀU KIỆN TRUY CẬP
- Bạn phải từ 13 tuổi trở lên (hoặc đủ tuổi theo quy định pháp luật tại nơi cư trú) để sử dụng dịch vụ.
- Nếu bạn dưới độ tuổi trưởng thành hợp pháp, việc sử dụng phải có sự đồng ý của người giám hộ.

2. NỘI DUNG VÀ TRÁCH NHIỆM
- Nền tảng cung cấp tiểu thuyết, truyện dài tập, truyện ngắn và nội dung văn học do người dùng đăng tải.
- Người dùng chịu trách nhiệm về việc lựa chọn, đọc và sử dụng nội dung.

3. HÀNH VI BỊ NGHIÊM CẤM
- Đăng tải nội dung vi phạm pháp luật, bản quyền hoặc quyền sở hữu trí tuệ.
- Phát tán nội dung kích động thù hận, bạo lực, quấy rối hoặc gây hại cho cộng đồng.`

  const privacyContent = `E-Novels cam kết bảo vệ quyền riêng tư của người dùng. Chúng tôi chỉ thu thập lượng thông tin tối thiểu cần thiết để vận hành dịch vụ và cải thiện trải nghiệm sử dụng.

THÔNG TIN CHÚNG TÔI THU THẬP:
- Địa chỉ IP: Sử dụng để ngăn chặn spam, tấn công DDoS và hành vi lạm dụng hệ thống.
- Cookies & dữ liệu truy cập: Ghi nhớ phiên đăng nhập và tùy chọn người dùng.
- Dữ liệu tài khoản (nếu người dùng đăng ký): Có thể bao gồm email hoặc tên hiển thị để xác thực.`

  const policies: Record<string, { title: string; content: string }> = {
    disclaimer: { title: 'Disclaimer', content: disclaimerContent },
        terms: { title: 'Điều khoản Sử dụng', content: termsContent },
        privacy: { title: 'Chính sách Bảo mật', content: privacyContent },
  }

  return (
    <>
      {activePolicy && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setActivePolicy(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-text-main">{policies[activePolicy].title}</h3>
              <button onClick={() => setActivePolicy(null)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="text-sm text-text-muted leading-relaxed whitespace-pre-line">{policies[activePolicy].content}</div>
          </div>
        </div>
      )}

      <footer id="contact" className="bg-text-main text-white pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="text-lg font-bold">E-Novel</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">Nền tảng đọc và nghe truyện hàng đầu với công nghệ AI Text-to-Speech tiên tiến. Đọc truyện mọi lúc, nghe truyện mọi nơi.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Pháp lý</h4>
              <ul className="space-y-3">
                <li><button onClick={() => setActivePolicy('disclaimer')} className="text-sm text-gray-400 hover:text-white transition-colors">Disclaimer</button></li>
                <li><button onClick={() => setActivePolicy('terms')} className="text-sm text-gray-400 hover:text-white                 transition-colors">Điều khoản Sử dụng</button></li>
                                <li><button onClick={() => setActivePolicy('privacy')} className="text-sm text-gray-400 hover:text-white transition-colors">Chính sách Bảo mật</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Liên hệ</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  haidvxls@gmail.com
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                  e-books.info.vn
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} E-Novel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

/* ─── App ─── */
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TTSHighlightSection />
      <HowItWorksSection />
      <ScreenshotsSection />
      <DownloadCTA />
      <Footer />
    </div>
  )
}

export default App
