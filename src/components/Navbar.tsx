import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const LogoMark = () => (
  <svg width="28" height="28" viewBox="0 0 400 400" fill="none">
    <defs>
      <linearGradient id="nl1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00F0FF"/>
        <stop offset="100%" stopColor="#0072FF"/>
      </linearGradient>
      <linearGradient id="nl2" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#a855f7"/>
        <stop offset="100%" stopColor="#00F0FF"/>
      </linearGradient>
    </defs>
    <path d="M130 110 L170 110 A40 40 0 0 1 170 190 L130 190Z" fill="none" stroke="url(#nl1)" strokeWidth="18" strokeLinejoin="round" strokeLinecap="round"/>
    <path d="M130 110 L130 270" fill="none" stroke="url(#nl1)" strokeWidth="18" strokeLinejoin="round" strokeLinecap="round"/>
    <rect x="165" y="145" width="14" height="14" fill="#00F0FF"/>
    <rect x="123" y="261" width="16" height="16" fill="#00F0FF"/>
    <path d="M230 110 L270 110 A20 20 0 0 1 270 150 L230 150 A20 20 0 0 0 230 190 L270 190 A20 20 0 0 1 270 230 L230 230" fill="none" stroke="url(#nl2)" strokeWidth="18" strokeLinejoin="round" strokeLinecap="round"/>
    <rect x="224" y="100" width="16" height="16" fill="#a855f7"/>
    <rect x="262" y="223" width="16" height="16" fill="#00F0FF"/>
    <rect x="190" y="190" width="20" height="20" rx="4" fill="#fff"/>
  </svg>
)

const links = [
  { to: '/#work', label: 'Work' },
  { to: '/#projects', label: 'Projects' },
  { to: '/#about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  useLocation()

  return (
    <>
      <header className="nav">
        <div className="wrap">
          <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
            <LogoMark />
            Perfect<em>PS</em>
          </Link>

          <nav>
            <ul className="nav-links">
              {links.map(l => (
                <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          <div className="nav-right">
            <Link to="/contact" className="btn btn-ghost" style={{ padding: '9px 20px', fontSize: 13 }}>
              Sign in
            </Link>
            <Link to="/contact" className="btn btn-grad" style={{ padding: '9px 20px', fontSize: 13 }}>
              <Zap size={13} /> Get Early Access
            </Link>
            <button className="nav-menu" onClick={() => setOpen(v => !v)} aria-label="Menu">
              {open ? <X size={22} color="#fff" /> : <Menu size={22} color="#9ca3af" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', top: 64, left: 0, right: 0, zIndex: 190,
              background: 'rgba(2,8,23,0.97)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(0,240,255,0.1)',
              padding: '24px 28px 32px',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {links.map(l => (
                <Link
                  key={l.label} to={l.to}
                  onClick={() => setOpen(false)}
                  style={{ padding: '12px 0', fontSize: 16, fontWeight: 600, color: '#c2cad8', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn btn-grad"
                style={{ marginTop: 20, justifyContent: 'center', padding: '14px' }}
              >
                <Zap size={15} /> Get Early Access
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
