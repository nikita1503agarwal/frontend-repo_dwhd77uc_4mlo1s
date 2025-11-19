import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Partners', href: '#partners' },
  { label: 'Team', href: '#team' },
  { label: 'FAQs', href: '#faqs' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b1520]/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#447D9B] to-[#273F4F] grid place-items-center shadow-lg shadow-[#447D9B]/30">
              <span className="text-white font-black">M</span>
            </div>
            <div className="leading-tight">
              <div className="text-white font-semibold tracking-wide">MALLOULINOVA</div>
              <div className="text-xs text-white/60">IoT Consulting</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {isHome && navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-white/80 hover:text-white transition-colors text-sm">
                {item.label}
              </a>
            ))}
            <Link to="/contact" className="inline-flex items-center rounded-full bg-[#FE7743] text-white px-4 py-2 text-sm font-medium shadow-[0_8px_30px_rgba(254,119,67,0.35)] hover:brightness-110 transition">
              Contact
            </Link>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/90 p-2">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b1520]/95">
          <div className="px-6 py-4 flex flex-col gap-3">
            {isHome && navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-white/90">
                {item.label}
              </a>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="inline-flex items-center rounded-full bg-[#FE7743] text-white px-4 py-2 text-sm font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
