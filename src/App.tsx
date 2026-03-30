import Navbar from './constants/Navbar'
import HeroSection from './constants/HeroSection'
import FeaturesSection from './constants/FeaturesSection'
import TTSHighlightSection from './constants/TTSHighlightSection'
import HowItWorksSection from './constants/HowItWorksSection'
import ScreenshotsSection from './constants/ScreenshotsSection'
import DownloadCTA from './constants/DownloadCTA'
import Footer from './constants/Footer'
import './App.css'

export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.haidv2806.ENovel'
export const APP_STORE_URL = 'https://apps.apple.com/vn/app/e-novels/id6756305318'

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
