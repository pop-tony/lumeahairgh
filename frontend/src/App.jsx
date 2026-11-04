import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Collections from './pages/Collections.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Stories from './pages/Stories.jsx'
import Booking from './pages/Booking.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

const quickLinks = [
  ['/','Home'],
  ['/collections','Wigs'],
  ['/services','Services'],
  ['/booking','Book'],
  ['/stories','Stories'],
]

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen w-full overflow-x-clip relative" style={{ background: 'radial-gradient(120% 120% at 50% 0%, #FFFEFA 0%, var(--bg) 58%, #EFE2CC 100%)', color: 'var(--text)', boxSizing: 'border-box' }}>
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute w-[420px] h-[420px] rounded-full blur-[100px] opacity-25" style={{ background: 'var(--gold)', top: '4%', right: '2%' }} />
        <div className="absolute w-[340px] h-[340px] rounded-full blur-[80px] opacity-20" style={{ background: 'var(--goldDeep)', bottom: '10%', left: '2%' }} />
        <div className="absolute w-[180px] h-[180px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle at 30% 30%, #FFF8E8, #C6A46A)', top: '18%', left: '6%', animation: 'floatA 6s ease-in-out infinite' }} />
        <div className="absolute w-[90px] h-[90px] rounded-full opacity-25" style={{ background: 'radial-gradient(circle at 30% 30%, #FFF8E8, #C6A46A)', top: '62%', right: '9%', animation: 'floatB 5s ease-in-out infinite' }} />
        <div className="absolute w-[14px] h-[14px] rounded-full bg-[var(--gold)] opacity-30" style={{ top: '22%', left: '48%', animation: 'floatB 4s ease-in-out infinite' }} />
        <div className="absolute w-[10px] h-[10px] rounded-full bg-[var(--goldDeep)] opacity-30" style={{ top: '55%', left: '18%', animation: 'floatA 5s ease-in-out infinite' }} />
        <div className="absolute w-[8px] h-[8px] rounded-full bg-[var(--gold)] opacity-30" style={{ top: '78%', right: '22%', animation: 'floatB 6s ease-in-out infinite' }} />
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:productId" element={<ProductDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
      <nav aria-label="Quick navigation" className="md:hidden fixed bottom-0 left-0 right-0 z-30 p-3" style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom, 12px))' }}>
        <div className="mx-auto max-w-[380px] rounded-full px-2 py-2 flex items-center justify-between" style={{ background: 'rgba(26, 26, 24, 0.92)', backdropFilter: 'blur(24px)', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.25)' }}>
          {quickLinks.map(([to, label]) => {
            const active = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] px-2 py-1 rounded-full transition-all"
                style={{ background: active ? 'var(--gold)' : 'transparent', color: active ? 'white' : 'rgba(247, 241, 230, 0.6)' }}
              >
                <span className="text-[10px] tracking-[0.12em] uppercase">{label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
