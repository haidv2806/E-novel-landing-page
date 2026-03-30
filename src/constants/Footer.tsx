import { useState } from "react"

export default function Footer() {
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
        disclaimer: { title: 'Miễn trừ Trách nhiệm', content: disclaimerContent },
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