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
        background: scrolled ? 'rgba(13,27,46,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,168,75,0.15)' : '1px solid transparent',
        transition: 'all 300ms ease',
      }}>
        <div className="container" style={{
          height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <a href="/" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '21px', fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.5px',
          }}>
            perfect<span style={{ color: '#c8a84b' }}>PS</span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} style={{
                fontSize: '14px', fontWeight: 500,
                color: '#8fa3bc',
                transition: 'color 200ms',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#8fa3bc' }}
              >
                {l.label}
              </a>
            ))}
            <a href="/#contact" style={{
              padding: '9px 22px',
              background: '#c8a84b',
              color: '#0d1b2e',
              borderRadius: '8px',
              fontSize: '14px', fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              transition: 'background 200ms',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e0c068' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#c8a84b' }}
            >
              Get in Touch →
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            style={{
              display: 'none',
              padding: '8px',
              color: '#c8a84b',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            className="mobile-btn"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div style={{
          position: 'fixed', top: '72px', left: 0, right: 0, bottom: 0, zIndex: 99,
          background: '#0d1b2e',
          borderTop: '1px solid rgba(200,168,75,0.15)',
          display: 'flex', flexDirection: 'column', padding: '32px 24px',
          gap: '4px',
        }}>
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              padding: '16px 0',
              fontSize: '20px', fontWeight: 600,
              color: 'rgba(255,255,255,0.85)',
              borderBottom: '1px solid rgba(200,168,75,0.1)',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {l.label}
            </a>
          ))}
          <a href="/#contact" onClick={() => setOpen(false)} style={{
            marginTop: '24px',
            padding: '16px',
            background: '#c8a84b',
            color: '#0d1b2e',
            borderRadius: '8px',
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
