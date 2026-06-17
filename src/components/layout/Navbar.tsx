import { useState } from 'react'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { X, Menu } from 'lucide-react'

const navLinks = [
  { label: 'Work',      href: '/work' },
  { label: 'Services',  href: '/#services' },
  { label: 'PS Secure', href: '/ps-secure' },
  { label: 'About',     href: '/#about' },
  { label: 'Contact',   href: '/#contact' },
]

export function Navbar() {
  const scrollY = useScrollPosition()
  const [open, setOpen] = useState(false)
  const scrolled = scrollY > 60

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '72px',
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 300ms ease',
        boxShadow: scrolled ? 'var(--shadow-xs)' : 'none',
      }}>
        <div className="container" style={{
          height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="/" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '21px', fontWeight: 800,
            color: scrolled ? 'var(--navy)' : '#fff',
            letterSpacing: '-0.5px',
          }}>
            perfect<span style={{ color: 'var(--cyan)' }}>PS</span>
          </a>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} style={{
                fontSize: '14px', fontWeight: 500,
                color: scrolled ? 'var(--text-2)' : 'rgba(255,255,255,0.75)',
                transition: 'color 200ms',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = scrolled ? 'var(--navy)' : '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.color = scrolled ? 'var(--text-2)' : 'rgba(255,255,255,0.75)' }}
              >
                {l.label}
              </a>
            ))}
            <a href="/#contact" style={{
              padding: '9px 22px',
              background: 'var(--cyan)',
              color: '#fff',
              borderRadius: 'var(--r-sm)',
              fontSize: '14px', fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              boxShadow: scrolled ? 'none' : 'var(--glow-sm)',
              transition: 'opacity 200ms',
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              Get in Touch →
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-btn"
            onClick={() => setOpen(!open)}
            style={{
              display: 'none',
              padding: '8px',
              color: scrolled ? 'var(--navy)' : '#fff',
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: '72px', left: 0, right: 0, bottom: 0, zIndex: 99,
          background: 'var(--navy)',
          display: 'flex', flexDirection: 'column', padding: '32px 24px',
          gap: '4px',
        }}>
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              padding: '16px 0',
              fontSize: '20px', fontWeight: 600,
              color: 'rgba(255,255,255,0.85)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {l.label}
            </a>
          ))}
          <a href="/#contact" onClick={() => setOpen(false)} style={{
            marginTop: '24px',
            padding: '16px',
            background: 'var(--cyan)',
            color: '#fff',
            borderRadius: 'var(--r-sm)',
            textAlign: 'center',
            fontSize: '16px', fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Get in Touch →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
