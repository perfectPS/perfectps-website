import { Shield, Wifi, Eye, Zap, Smartphone, Globe, Lock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '../ui/ScrollReveal'
import { useLang } from '../../hooks/useLang'

const features = [
  { icon: Wifi,       label: 'WireGuard Protocol' },
  { icon: Eye,        label: 'Zero-Log Policy' },
  { icon: Shield,     label: 'Kill Switch' },
  { icon: Zap,        label: 'AdGuard DNS' },
  { icon: Smartphone, label: 'iOS & Android' },
  { icon: Globe,      label: 'Regional Servers' },
]

const techTags = ['WireGuard', 'Zero-Log', 'AdGuard DNS', 'Kill Switch', 'ChaCha20']

export function Products() {
  const { t } = useTranslation()
  const lang = useLang()

  return (
    <section
      id="products"
      className="section"
      style={{ background: '#070f1a', overflow: 'hidden', position: 'relative' }}
    >
      {/* Dot grid */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'radial-gradient(circle, rgba(200,168,75,0.22) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        opacity: 0.45,
      }} />

      {/* Large shield watermark — right side */}
      <div aria-hidden style={{
        position: 'absolute',
        top: '50%', right: '-4%',
        transform: 'translateY(-50%)',
        width: '58%',
        height: '140%',
        backgroundImage: "url('/sections/hero-shield.svg')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center right',
        opacity: 0.055,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Primary gold radial glow — top center */}
      <div aria-hidden style={{
        position: 'absolute', top: '-100px', left: '50%',
        transform: 'translateX(-50%)',
        width: 1200, height: 700,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(200,168,75,0.20) 0%, rgba(200,168,75,0.07) 35%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Secondary glow — upper left accent */}
      <div aria-hidden style={{
        position: 'absolute', top: '15%', left: '-8%',
        width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 60%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Horizontal light beam — center */}
      <div aria-hidden style={{
        position: 'absolute', top: '22%', left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(200,168,75,0.18) 20%, rgba(200,168,75,0.35) 50%, rgba(200,168,75,0.18) 80%, transparent 100%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Gradient fade at bottom */}
      <div aria-hidden style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '220px',
        background: 'linear-gradient(to bottom, transparent, rgba(7,15,26,0.7))',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Heading ── */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 64px' }}>
            <div className="section-label">{t('products.label')}</div>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.1,
            }}>
              {t('products.h2_line1')}<br />
              <span className="gradient-text--dark">{t('products.h2_line2')}</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* ── VIP product card ── */}
        <ScrollReveal delay={100}>
          <div
            className="product-split"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.4fr',
              background: 'linear-gradient(145deg, #0d2247 0%, #091729 100%)',
              border: '1px solid rgba(200,168,75,0.2)',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 40px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(200,168,75,0.12)',
            }}
          >
            {/* ── Left: visual panel ── */}
            <div style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '28px',
              padding: '56px 36px',
              borderInlineEnd: '1px solid rgba(200,168,75,0.1)',
              background: 'linear-gradient(180deg, rgba(200,168,75,0.04) 0%, transparent 100%)',
              overflow: 'hidden',
              minHeight: '460px',
            }}>
              {/* Corner glow */}
              <div aria-hidden style={{
                position: 'absolute', top: -60, right: -60,
                width: 240, height: 240, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(200,168,75,0.1) 0%, transparent 65%)',
                pointerEvents: 'none',
              }} />
              <div aria-hidden style={{
                position: 'absolute', bottom: -40, left: -40,
                width: 180, height: 180, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 65%)',
                pointerEvents: 'none',
              }} />

              {/* Shield icon */}
              <div className="shield-glow" style={{
                width: 96, height: 96,
                borderRadius: '26px',
                background: 'rgba(200,168,75,0.1)',
                border: '1px solid rgba(200,168,75,0.28)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
              }}>
                <Shield size={44} color="#c8a84b" strokeWidth={1.4} />
              </div>

              {/* Brand */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '28px', fontWeight: 800,
                }}>
                  <span style={{ color: '#fff' }}>PS </span>
                  <span style={{ color: '#c8a84b' }}>Secure</span>
                </div>
                <div style={{
                  fontSize: '12px', color: 'rgba(255,255,255,0.35)',
                  letterSpacing: '0.08em', marginTop: '4px',
                }}>
                  VPN · Privacy · Security
                </div>
              </div>

              {/* Tech tags */}
              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: '8px',
                justifyContent: 'center', maxWidth: '260px',
              }}>
                {techTags.map(tag => (
                  <span key={tag} style={{
                    background: 'rgba(200,168,75,0.07)',
                    border: '1px solid rgba(200,168,75,0.2)',
                    color: 'rgba(200,168,75,0.85)',
                    fontSize: '10px', fontWeight: 700,
                    borderRadius: '100px',
                    padding: '4px 12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Live badge */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '7px',
                background: 'rgba(34,197,94,0.08)',
                border: '1px solid rgba(34,197,94,0.2)',
                borderRadius: '100px',
                padding: '6px 16px',
                fontSize: '12px', fontWeight: 600,
                color: '#22c55e',
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#22c55e',
                  display: 'block',
                  animation: 'live-ping 1.8s ease-in-out infinite',
                }} />
                Live on App Stores
              </div>
            </div>

            {/* ── Right: info panel ── */}
            <div style={{ padding: '52px 48px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Badge + heading */}
              <div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  background: 'rgba(200,168,75,0.1)',
                  border: '1px solid rgba(200,168,75,0.25)',
                  color: '#c8a84b',
                  fontSize: '11px', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                  borderRadius: '100px',
                  padding: '5px 14px',
                  marginBottom: '16px',
                }}>
                  <Lock size={10} strokeWidth={2.5} />
                  {t('products.badge')}
                </div>
                <h3 style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 'clamp(22px, 2.5vw, 30px)',
                  fontWeight: 800,
                  color: '#fff',
                  margin: '0 0 6px',
                  lineHeight: 1.15,
                }}>
                  {t('products.name')}
                </h3>
                <p style={{ fontSize: '14px', color: '#c8a84b', fontWeight: 500, margin: 0 }}>
                  {t('products.subtitle')}
                </p>
              </div>

              {/* Description */}
              <p style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.8,
                margin: 0,
              }}>
                {t('products.desc')}
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(200,168,75,0.1)' }} />

              {/* Features */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
              }}>
                {features.map(({ icon: Icon, label }) => (
                  <div key={label} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '10px 14px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '8px',
                  }}>
                    <div style={{
                      width: 28, height: 28,
                      borderRadius: '7px',
                      background: 'rgba(200,168,75,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={14} color="#c8a84b" strokeWidth={2} />
                    </div>
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '4px' }}>
                <a
                  href={`/${lang}/ps-secure`}
                  style={{
                    padding: '13px 28px',
                    background: 'linear-gradient(135deg, #c8a84b 0%, #a07830 100%)',
                    color: '#070f1a',
                    borderRadius: '10px',
                    fontSize: '14px', fontWeight: 700,
                    fontFamily: "'DM Sans', sans-serif",
                    textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: '7px',
                    transition: 'filter 200ms',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = 'brightness(1.12)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = 'brightness(1)' }}
                >
                  <Shield size={14} strokeWidth={2.5} />
                  {t('products.cta_learn')}
                </a>
                <a
                  href={`/${lang}/#contact`}
                  style={{
                    padding: '13px 28px',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    fontSize: '14px', fontWeight: 600,
                    fontFamily: "'DM Sans', sans-serif",
                    textDecoration: 'none',
                    transition: 'border-color 200ms, color 200ms, background 200ms',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(200,168,75,0.4)'
                    el.style.color = '#c8a84b'
                    el.style.background = 'rgba(200,168,75,0.05)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(255,255,255,0.1)'
                    el.style.color = 'rgba(255,255,255,0.7)'
                    el.style.background = 'rgba(255,255,255,0.05)'
                  }}
                >
                  {t('products.cta_access')}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @keyframes shield-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%       { transform: translateY(-10px) rotate(1deg); }
        }
        .shield-glow {
          animation: shield-float 4s ease-in-out infinite, glow-pulse-product 3s ease-in-out infinite;
        }
        @keyframes glow-pulse-product {
          0%, 100% { box-shadow: 0 0 24px rgba(200,168,75,0.15); }
          50%       { box-shadow: 0 0 50px rgba(200,168,75,0.4), 0 0 90px rgba(200,168,75,0.12); }
        }
        @keyframes live-ping {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.4); }
        }
        @media (max-width: 860px) {
          .product-split { grid-template-columns: 1fr !important; }
          .product-split > div:first-child { border-inline-end: none !important; border-bottom: 1px solid rgba(200,168,75,0.1); min-height: 320px !important; }
        }
      `}</style>
    </section>
  )
}
