import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const links = [
  ['/', 'home'],
  ['/collections', 'collections'],
  ['/services', 'services'],
  ['/about', 'about'],
  ['/stories', 'Stories'],
  ['/booking', 'booking'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const goTo = () => setOpen(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[rgba(198,164,106,0.18)] bg-[#F7F1E6]/80 backdrop-blur-xl">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-3 lg:py-4 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-8">
            <Link to="/" onClick={goTo} className="text-[22px] tracking-[-0.02em] min-h-[44px] flex items-center" style={{ color: 'var(--text)' }}>
              LUMEAHAIRGH
            </Link>
            <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
              {links.map(([to, label]) => {
                const active = location.pathname === to
                return (
                  <Link key={to} to={to} className="relative text-[12px] uppercase tracking-[0.18em] py-2 min-h-[44px] flex items-center" style={{ color: active ? 'var(--gold)' : 'var(--muted)' }}>
                    {label}
                    {active && <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[var(--gold)] rounded-full" />}
                  </Link>
                )
              })}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/booking" onClick={goTo} className="btn-3d hidden md:flex px-6 py-3 rounded-full text-[11px] tracking-[0.16em] uppercase text-white min-h-[44px] items-center gold-glow" style={{ background: 'var(--gold)' }}>
              Book Appointment
            </Link>
            <button type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} className="md:hidden w-11 h-11 rounded-full glass flex flex-col items-center justify-center gap-1.5">
              <span className="w-5 h-[2px] bg-[var(--text)] rounded-full transition-all" style={{ transform: open ? 'translateY(8px) rotate(45deg)' : 'none' }} />
              <span className="w-5 h-[2px] bg-[var(--text)] rounded-full transition-all" style={{ opacity: open ? 0 : 1 }} />
              <span className="w-5 h-[2px] bg-[var(--text)] rounded-full transition-all" style={{ transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>
      </header>
      <div className={`fixed inset-0 z-40 md:hidden transition ${open ? 'visible' : 'invisible'}`} aria-hidden={!open}>
        <button type="button" className="absolute inset-0 bg-black/30 backdrop-blur-[6px]" onClick={goTo} aria-label="Close menu backdrop" />
        <nav aria-label="Mobile navigation" className="absolute right-0 top-0 bottom-0 w-[84%] max-w-[340px] border-l border-[rgba(198,164,106,0.2)] p-6 pt-24 flex flex-col gap-2 transition-transform duration-300" style={{ transform: open ? 'translateX(0)' : 'translateX(100%)', background: 'var(--bg)' }}>
          {links.map(([to, label]) => (
            <Link key={to} to={to} onClick={goTo} className="w-full text-left px-5 py-4 rounded-[16px] text-[14px] tracking-[0.14em] uppercase flex items-center justify-between min-h-[52px]" style={{ background: location.pathname === to ? 'var(--gold)' : 'var(--card)', color: location.pathname === to ? 'white' : 'var(--text)' }}>
              {label === 'Stories' ? 'Stories' : label}
              <span className="opacity-60">→</span>
            </Link>
          ))}
          <div className="mt-6 pt-6 border-t border-[rgba(198,164,106,0.15)] flex flex-col gap-4">
            <Link to="/booking" onClick={goTo} className="w-full py-4 rounded-full text-white text-[12px] tracking-[0.16em] uppercase gold-glow text-center" style={{ background: 'var(--gold)' }}>
              Book Appointment
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
