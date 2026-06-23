import { useState, useEffect, useRef } from 'react'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { X, Menu, ChevronDown, Shield } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useLang } from '../../hooks/useLang'

export function Navbar() {
  const scrollY = useScrollPosition()
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const scrolled = scrollY > 60
  const { t } = useTranslation()
  const lang = useLang()
  const navigate = useNavigate()
  const isArabic = lang === 'ar'
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const firstMenuLinkRef = useRef<HTMLButtonElement>(null)
  const productsDropdownRef = useRef<HTMLDivElement>(null)

  const navLinks = [
    { label: t('nav.services'), href: `/${lang}/#services` },
    { label: t('nav.about'),    href: `/${lang}/#about` },
    { label: t('nav.contact'),  href: `/${lang}/#contact` },
  ]

  const productItems = [
    { label: 'PS Secure', href: `/${lang}/ps-secure`, desc: t('products.subtitle'), icon: Shield },
  ]

  function toggleLanguage() {
    const nextLang = isArabic ? 'en' : 'ar'
    localStorage.setItem('lang', nextLang)
    const newPath = window.location.pathname.replace(/^\/(en|ar)/, `/${nextLang}`)
    navigate(newPath + window.location.search + window.location.hash)
  }

  function closeMenu() {
    setOpen(false)
    setMobileProductsOpen(false)
    hamburgerRef.current?.focus()
  }

  // Close products dropdown on outside click
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  // Trap focus inside mobile overlay when open
  useEffect(() => {
    if (!open) return
    firstMenuLinkRef.current?.focus()

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Skip to main content */}
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          top: '-100px',
          left: '16px',
          zIndex: 200,
          padding: '10px 18px',
          background: '#FACC15',
          color: '#070f1a',
          fontWeight: 700,
          fontSize: '14px',
          borderRadius: '8px',
          textDecoration: 'none',
          transition: 'top 150ms',
        }}
        onFocus={e => { e.currentTarget.style.top = '16px' }}
        onBlur={e => { e.currentTarget.style.top = '-100px' }}
      >
        Skip to main content
      </a>

      <nav
        aria-label="Main navigation"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          height: '68px',
          background: scrolled ? 'rgba(7,15,26,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(250,204,21,0.12)' : '1px solid transparent',
          transition: 'background 300ms ease, border-bottom 300ms ease',
        }}
      >
        <div className="container" style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}>

          {/* Logo */}
          <a href={`/${lang}`} aria-label="PerfectPS home" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '9px',
            textDecoration: 'none',
            flexShrink: 0,
          }}>
            <img
              src="/favicon.svg"
              width="30"
              height="30"
              alt=""
              aria-hidden="true"
              style={{ borderRadius: '7px', filter: 'drop-shadow(0 0 6px rgba(34,211,238,0.35))' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              {isArabic ? (
                <span style={{
                  fontFamily: "'Chakra Petch', monospace",
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1.2,
                  letterSpacing: '0.01em',
                }}>
                  {t('nav.logo_fullname')}
                </span>
              ) : (
                <>
                  <span style={{
                    fontFamily: "'Chakra Petch', monospace",
                    fontSize: '17px',
                    fontWeight: 700,
                    color: '#fff',
                    letterSpacing: '-0.2px',
                    lineHeight: 1.1,
                  }}>
                    Perfect<span style={{ color: '#FACC15' }}>PS</span>
                  </span>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '9px',
                    fontWeight: 500,
                    color: 'rgba(34,211,238,0.7)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                  }}>
                    {t('nav.logo_fullname')}
                  </span>
                </>
              )}
            </div>
          </a>

          {/* Desktop nav links */}
          <div
            role="list"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '28px',
              flex: 1,
              justifyContent: 'center',
            }}
            className="desktop-nav-links"
          >
            {/* Our Products dropdown — first item */}
            <div
              ref={productsDropdownRef}
              role="listitem"
              style={{ position: 'relative' }}
            >
              <button
                className="ps-nav-link ps-nav-dropdown-trigger"
                aria-haspopup="true"
                aria-expanded={productsOpen}
                onClick={() => setProductsOpen(v => !v)}
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.65)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 0',
                  fontFamily: "'DM Sans', sans-serif",
                  whiteSpace: 'nowrap',
                  transition: 'color 200ms',
                }}
              >
                {t('nav.psSecure')}
                <ChevronDown
                  size={13}
                  style={{
                    transition: 'transform 200ms',
                    transform: productsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    flexShrink: 0,
                  }}
                />
              </button>

              {/* Dropdown panel */}
              <div
                className="ps-products-dropdown"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  left: 0,
                  minWidth: '240px',
                  background: 'rgba(7,15,26,0.98)',
                  border: '1px solid rgba(250,204,21,0.18)',
                  borderRadius: '14px',
                  padding: '8px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.55)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  zIndex: 200,
                  opacity: productsOpen ? 1 : 0,
                  transform: productsOpen ? 'translateY(0)' : 'translateY(-6px)',
                  pointerEvents: productsOpen ? 'auto' : 'none',
                  transition: 'opacity 160ms ease, transform 160ms ease',
                }}
              >
                {productItems.map(item => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className="ps-dropdown-item"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '10px 12px',
                        borderRadius: '9px',
                        textDecoration: 'none',
                        transition: 'background 150ms',
                      }}
                      onClick={() => setProductsOpen(false)}
                    >
                      <div style={{
                        width: 34, height: 34,
                        borderRadius: '9px',
                        background: 'rgba(250,204,21,0.1)',
                        border: '1px solid rgba(250,204,21,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Icon size={15} color="#FACC15" strokeWidth={1.75} />
                      </div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>
                          {item.label}
                        </div>
                        <div style={{ fontSize: '11px', color: 'rgba(250,204,21,0.65)', marginTop: '2px' }}>
                          {item.desc}
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Regular nav links */}
            {navLinks.map(l => (
              <a
                key={l.label}
                href={l.href}
                role="listitem"
                className="ps-nav-link"
                dir={isArabic ? 'rtl' : 'ltr'}
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.65)',
                  textDecoration: 'none',
                  transition: 'color 200ms',
                  whiteSpace: 'nowrap',
                  padding: '4px 0',
                }}
              >
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
                color: 'rgba(250,204,21,0.9)',
                background: 'transparent',
                border: '1px solid rgba(250,204,21,0.22)',
                borderRadius: '6px',
                cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: '0.8px',
                padding: '5px 11px',
                transition: 'border-color 200ms, background 200ms',
                lineHeight: 1.4,
                minWidth: '44px',
                minHeight: '44px',
              }}
              className="ps-lang-btn"
              aria-label={isArabic ? 'Switch to English' : 'Switch to Arabic'}
            >
              {isArabic ? 'EN' : 'AR'}
            </button>

            <a
              href={`/${lang}/#contact`}
              style={{
                padding: '10px 20px',
                background: '#FACC15',
                color: '#0d1b2e',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
                textDecoration: 'none',
                transition: 'background 200ms',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '44px',
              }}
              className="ps-cta-btn"
            >
              {t('nav.cta')}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            onClick={() => setOpen(!open)}
            className="ps-hamburger"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            style={{
              display: 'none',
              padding: '10px',
              minWidth: '44px',
              minHeight: '44px',
              color: '#FACC15',
              background: open ? 'rgba(250,204,21,0.08)' : 'none',
              border: open ? '1px solid rgba(250,204,21,0.2)' : '1px solid transparent',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background 200ms',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        dir={isArabic ? 'rtl' : 'ltr'}
        style={{
          position: 'fixed',
          top: '68px',
          left: 0, right: 0, bottom: 0,
          zIndex: 99,
          background: 'rgba(7,15,26,0.98)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderTop: '1px solid rgba(250,204,21,0.1)',
          display: open ? 'flex' : 'none',
          flexDirection: 'column',
          padding: '24px 24px 40px',
        }}
      >
        <div role="list" style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>

          {/* Our Products — expandable */}
          <div role="listitem">
            <button
              ref={firstMenuLinkRef}
              onClick={() => setMobileProductsOpen(v => !v)}
              tabIndex={open ? 0 : -1}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '15px 4px',
                fontSize: '18px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.8)',
                fontFamily: "'DM Sans', sans-serif",
                background: 'none',
                border: 'none',
                borderBottom: mobileProductsOpen ? '1px solid transparent' : '1px solid rgba(250,204,21,0.08)',
                cursor: 'pointer',
                animation: 'psMobileIn 260ms cubic-bezier(0.4,0,0.2,1) both',
                animationDelay: '0ms',
                textAlign: isArabic ? 'right' : 'left',
              }}
            >
              {t('nav.psSecure')}
              <ChevronDown
                size={18}
                style={{
                  transition: 'transform 200ms',
                  transform: mobileProductsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  color: '#FACC15',
                  flexShrink: 0,
                }}
              />
            </button>

            {mobileProductsOpen && (
              <div style={{
                paddingBottom: '8px',
                borderBottom: '1px solid rgba(250,204,21,0.08)',
              }}>
                {productItems.map(item => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => closeMenu()}
                      tabIndex={open ? 0 : -1}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 8px',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        margin: '4px 0',
                      }}
                    >
                      <div style={{
                        width: 36, height: 36,
                        borderRadius: '9px',
                        background: 'rgba(250,204,21,0.1)',
                        border: '1px solid rgba(250,204,21,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Icon size={16} color="#FACC15" strokeWidth={1.75} />
                      </div>
                      <div>
                        <div style={{ fontSize: '16px', fontWeight: 600, color: '#fff' }}>{item.label}</div>
                        <div style={{ fontSize: '12px', color: 'rgba(250,204,21,0.65)', marginTop: '2px' }}>{item.desc}</div>
                      </div>
                    </a>
                  )
                })}
              </div>
            )}
          </div>

          {/* Regular links */}
          {navLinks.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              role="listitem"
              onClick={() => closeMenu()}
              tabIndex={open ? 0 : -1}
              style={{
                padding: '15px 4px',
                fontSize: '18px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.8)',
                borderBottom: '1px solid rgba(250,204,21,0.08)',
                fontFamily: "'DM Sans', sans-serif",
                textDecoration: 'none',
                animation: 'psMobileIn 260ms cubic-bezier(0.4,0,0.2,1) both',
                animationDelay: `${(i + 1) * 45}ms`,
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '20px' }}>
          <button
            onClick={() => { toggleLanguage(); closeMenu() }}
            tabIndex={open ? 0 : -1}
            style={{
              padding: '13px',
              minHeight: '48px',
              background: 'rgba(250,204,21,0.06)',
              border: '1px solid rgba(250,204,21,0.18)',
              borderRadius: '8px',
              color: '#FACC15',
              fontSize: '14px',
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              cursor: 'pointer',
              animation: 'psMobileIn 260ms cubic-bezier(0.4,0,0.2,1) both',
              animationDelay: `${(navLinks.length + 1) * 45}ms`,
            }}
          >
            {isArabic ? t('nav.switch_to_en') : t('nav.switch_to_ar')}
          </button>
          <a
            href={`/${lang}/#contact`}
            onClick={() => closeMenu()}
            tabIndex={open ? 0 : -1}
            style={{
              padding: '15px',
              minHeight: '48px',
              background: '#FACC15',
              color: '#0d1b2e',
              borderRadius: '8px',
              textAlign: 'center',
              fontSize: '15px',
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'psMobileIn 260ms cubic-bezier(0.4,0,0.2,1) both',
              animationDelay: `${(navLinks.length + 2) * 45}ms`,
            }}
          >
            {t('nav.cta')}
          </a>
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav-links  { display: none !important; }
          .desktop-nav-controls { display: none !important; }
          .ps-hamburger { display: flex !important; }
        }
        .ps-nav-link:hover { color: #fff !important; }
        .ps-nav-dropdown-trigger:hover { color: #fff !important; }
        .ps-nav-link:focus-visible {
          outline: 2px solid rgba(250,204,21,0.7) !important;
          outline-offset: 3px !important;
          border-radius: 3px !important;
        }
        .ps-dropdown-item:hover {
          background: rgba(250,204,21,0.08) !important;
        }
        .ps-lang-btn:hover {
          border-color: rgba(250,204,21,0.5) !important;
          background: rgba(250,204,21,0.08) !important;
        }
        .ps-lang-btn:focus-visible {
          outline: 2px solid rgba(250,204,21,0.7) !important;
          outline-offset: 3px !important;
        }
        .ps-cta-btn:hover { background: #FDE047 !important; }
        .ps-cta-btn:focus-visible {
          outline: 2px solid #fff !important;
          outline-offset: 3px !important;
        }
        .ps-hamburger:focus-visible {
          outline: 2px solid rgba(250,204,21,0.7) !important;
          outline-offset: 3px !important;
        }
        @keyframes psMobileIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
