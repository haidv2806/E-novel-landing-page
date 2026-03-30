import useInView from '../hooks/useInView'

const cards = [
  {
    color: 'bg-blue-50 text-blue-600',
    borderClass: '',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
    title: 'Đăng tải EPUB ngay trong app',
    desc: 'Chọn file EPUB từ thiết bị, điền thông tin cơ bản — hệ thống tự động tách chương và đăng tải. Không cần máy tính, không cần công cụ bên ngoài.',
    items: [
      'Tự động tách chương từ EPUB',
      'Tự động tạo volume (mỗi 100 chương)',
      'Hỗ trợ ảnh bìa, tác giả, thể loại',
    ],
  },
  {
    color: 'bg-pink-50 text-pink-600',
    borderClass: 'ring-2 ring-primary/60 shadow-2xl scale-[1.03]',
    badge: 'Nổi bật',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    title: 'Lồng âm từng nhân vật',
    desc: 'Tạo giọng mẫu cho mỗi nhân vật bằng một đoạn audio ngắn. Gán giọng cho từng đoạn văn — AI sẽ sinh audio với đúng giọng nhân vật đó.',
    items: [
      'Upload audio mẫu + ảnh nhân vật',
      'Gán giọng theo từng đoạn văn',
      'Điều chỉnh speed, pitch, volume',
      'Màu sắc riêng cho mỗi nhân vật',
    ],
  },
  {
    color: 'bg-green-50 text-green-600',
    borderClass: '',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Công cụ chuyên nghiệp',
    desc: 'Audio Editor trên web với giao diện kéo-thả trực quan. Từ điển phát âm riêng cho từng sách để xử lý tên riêng và thuật ngữ.',
    items: [
      'Audio Editor trực quan trên web',
      'Từ điển phát âm tùy chỉnh',
      'Sinh audio hàng loạt',
      '3 cấp TTS: Online, Offline, System',
    ],
  },
]

export default function CommunitySection() {
  const { ref, isVisible } = useInView()

  return (
    <section
      id="community"
      ref={ref}
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-primary bg-primary/5 px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Cộng đồng
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main mb-4">
            Ai cũng có thể đóng góp
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Không chỉ đọc truyện — bạn có thể đăng tải, lồng tiếng và biến mọi cuốn truyện
            thành audiobook với giọng nhân vật riêng.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl p-8 border border-border-light transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${card.borderClass} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {card.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full shadow">
                  {card.badge}
                </span>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 ${card.color} rounded-xl flex items-center justify-center mb-6`}>
                {card.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-text-main mb-3">{card.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-5">{card.desc}</p>

              {/* Checklist */}
              <ul className="space-y-2">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-text-muted">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-primary" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
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
