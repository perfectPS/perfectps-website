import { useState } from 'react'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { X, Menu } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useLang } from '../../hooks/useLang'

export function Navbar() {
  const scrollY = useScrollPosition()
  const [open, setOpen] = useState(false)
  const scrolled = scrollY > 60
  const { t } = useTranslation()
  const lang = useLang()
  const navigate = useNavigate()
  const isArabic = lang === 'ar'

  const navLinks = [
    { label: t('nav.work'),     href: `/${lang}/work` },
    { label: t('nav.services'), href: `/${lang}/#services` },
    { label: t('nav.psSecure'), href: `/${lang}/ps-secure` },
    { label: t('nav.about'),    href: `/${lang}/#about` },
    { label: t('nav.contact'),  href: `/${lang}/#contact` },
  ]

  function toggleLanguage() {
    const nextLang = isArabic ? 'en' : 'ar'
    localStorage.setItem('lang', nextLang)
    const newPath = window.location.pathname.replace(/^\/(en|ar)/, `/${nextLang}`)
    navigate(newPath + window.location.search + window.location.hash)
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '68px',
        background: scrolled ? 'rgba(7,15,26,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,168,75,0.12)' : '1px solid transparent',
        transition: 'background 300ms ease, border-bottom 300ms ease',
      }}>
        <div className="container" style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}>

          {/* Logo */}
          <a href={`/${lang}`} dir="ltr" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '9px',
            textDecoration: 'none',
            flexShrink: 0,
          }}>
            <svg width="26" height="30" viewBox="0 0 28 32" fill="none">
              <path d="M14 1L2 6v10c0 7.18 5.16 13.9 12 15.92C20.84 29.9 26 23.18 26 16V6L14 1z"
                fill="rgba(200,168,75,0.15)" stroke="#c8a84b" strokeWidth="1.5"/>
              <text x="14" y="21" textAnchor="middle" fontFamily="'DM Sans', sans-serif"
                fontSize="11" fontWeight="800" fill="#c8a84b">PS</text>
            </svg>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '18px',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.3px',
            }}>
              perfect<span style={{ color: '#c8a84b' }}>PS</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            flex: 1,
            justifyContent: 'center',
          }} className="desktop-nav-links">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className="ps-nav-link" style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.65)',
                textDecoration: 'none',
                transition: 'color 200ms',
                whiteSpace: 'nowrap',
              }}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexShrink: 0,
          }} className="desktop-nav-controls">

            <button
              onClick={toggleLanguage}
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: 'rgba(200,168,75,0.9)',
                background: 'transparent',
                border: '1px solid rgba(200,168,75,0.22)',
                borderRadius: '6px',
                cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: '0.8px',
                padding: '5px 11px',
                transition: 'border-color 200ms, background 200ms',
                lineHeight: 1.4,
              }}
              className="ps-lang-btn"
              aria-label={isArabic ? 'Switch to English' : 'Switch to Arabic'}
            >
              {isArabic ? 'EN' : 'AR'}
            </button>

            <a href={`/${lang}/#contact`} style={{
              padding: '8px 20px',
              background: '#c8a84b',
              color: '#0d1b2e',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              textDecoration: 'none',
              transition: 'background 200ms',
              whiteSpace: 'nowrap',
            }}
              className="ps-cta-btn"
            >
              {t('nav.cta')}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="ps-hamburger"
            style={{
              display: 'none',
              padding: '8px',
              color: '#c8a84b',
              background: open ? 'rgba(200,168,75,0.08)' : 'none',
              border: open ? '1px solid rgba(200,168,75,0.2)' : '1px solid transparent',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background 200ms',
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div style={{
          position: 'fixed',
          top: '68px',
          left: 0, right: 0, bottom: 0,
          zIndex: 99,
          background: 'rgba(7,15,26,0.98)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderTop: '1px solid rgba(200,168,75,0.1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 24px 40px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
            {navLinks.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  padding: '15px 4px',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.8)',
                  borderBottom: '1px solid rgba(200,168,75,0.08)',
                  fontFamily: "'DM Sans', sans-serif",
                  textDecoration: 'none',
                  animation: 'psMobileIn 260ms cubic-bezier(0.4,0,0.2,1) both',
                  animationDelay: `${i * 45}ms`,
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '20px' }}>
            <button
              onClick={() => { toggleLanguage(); setOpen(false) }}
              style={{
                padding: '13px',
                background: 'rgba(200,168,75,0.06)',
                border: '1px solid rgba(200,168,75,0.18)',
                borderRadius: '8px',
                color: '#c8a84b',
                fontSize: '14px',
                fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
                cursor: 'pointer',
                animation: 'psMobileIn 260ms cubic-bezier(0.4,0,0.2,1) both',
                animationDelay: `${navLinks.length * 45}ms`,
              }}
            >
              {isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
            </button>
            <a
              href={`/${lang}/#contact`}
              onClick={() => setOpen(false)}
              style={{
                padding: '15px',
                background: '#c8a84b',
                color: '#0d1b2e',
                borderRadius: '8px',
                textAlign: 'center',
                fontSize: '15px',
                fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
                textDecoration: 'none',
                animation: 'psMobileIn 260ms cubic-bezier(0.4,0,0.2,1) both',
                animationDelay: `${(navLinks.length + 1) * 45}ms`,
              }}
            >
              {t('nav.cta')}
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav-links  { display: none !important; }
          .desktop-nav-controls { display: none !important; }
          .ps-hamburger { display: flex !important; }
        }
        .ps-nav-link:hover { color: #fff !important; }
        .ps-lang-btn:hover {
          border-color: rgba(200,168,75,0.5) !important;
          background: rgba(200,168,75,0.08) !important;
        }
        .ps-cta-btn:hover { background: #e0c068 !important; }
        @keyframes psMobileIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
