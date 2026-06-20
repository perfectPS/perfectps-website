import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Shield } from 'lucide-react'
import { ScrollReveal } from '../ui/ScrollReveal'
import { useTilt } from '../../hooks/useTilt'
import { useLang } from '../../hooks/useLang'

const badges = ['React', 'WireGuard', 'TypeScript', 'Oracle Cloud', 'Expo', 'Node.js']

export function About() {
  const { t } = useTranslation()
  const lang = useLang()
  const identityRef = useRef<HTMLDivElement>(null)
  useTilt(identityRef, 5)

  const stats = [
    { value: '2019', label: t('about.stat_founded') },
    { value: '5+',   label: t('about.stat_team') },
    { value: '15+',  label: t('about.stat_shipped') },
    { value: '8+',   label: t('about.stat_countries') },
  ]

  return (
    <section
      id="about"
      className="section"
      style={{ background: '#ffffff', overflow: 'hidden', position: 'relative' }}
    >
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(200,168,75,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,168,75,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Frameless SVG illustration — left side */}
      <div aria-hidden style={{
        position: 'absolute',
        top: '5%', left: '-3%', bottom: '5%',
        width: '45%',
        backgroundImage: "url('/sections/services-network.svg')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center left',
        opacity: 0.12,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Heading ── */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label">{t('about.label')}</div>

            {/* "We Are / نحن" — small gold label */}
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              fontWeight: 700,
              color: '#c8a84b',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}>
              {t('about.h2_pre')}
            </div>

            {/* Main wordmark */}
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(44px, 7vw, 80px)',
              fontWeight: 800,
              color: '#0d1b2e',
              lineHeight: 1.0,
              letterSpacing: '-2px',
              margin: 0,
            }}>
              perfect<span style={{ color: '#c8a84b' }}>PS</span>
            </h2>

            {/* Gold accent bar */}
            <div style={{
              width: 56, height: 3,
              background: 'linear-gradient(90deg, #c8a84b, #a07830)',
              borderRadius: '2px',
              margin: '16px auto 0',
            }} />
          </div>
        </ScrollReveal>

        {/* ── Stats strip ── */}
        <ScrollReveal delay={80}>
          <div
            className="about-stats-row"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              background: 'rgba(200,168,75,0.04)',
              border: '1px solid rgba(200,168,75,0.2)',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '64px',
            }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: '32px 20px',
                  textAlign: 'center',
                  borderRight: i < stats.length - 1
                    ? '1px solid rgba(200,168,75,0.1)'
                    : 'none',
                  background: i % 2 === 0
                    ? 'transparent'
                    : 'rgba(200,168,75,0.03)',
                }}
              >
                <div style={{
                  fontFamily: "'Chakra Petch', sans-serif",
                  fontSize: 'clamp(30px, 3.5vw, 44px)',
                  fontWeight: 700,
                  color: '#c8a84b',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#94a3b8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Two-column body ── */}
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 360px',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Text + badges */}
          <ScrollReveal delay={120}>
            <div>
              <p style={{
                fontSize: 'clamp(15px, 1.5vw, 18px)',
                fontWeight: 500,
                color: '#0d1b2e',
                lineHeight: 1.8,
                marginBottom: '18px',
              }}>
                {t('about.p1')}
              </p>
              <p style={{
                fontSize: '15px',
                color: '#4a5568',
                lineHeight: 1.85,
                marginBottom: '16px',
              }}>
                {t('about.p2')}
              </p>
              <p style={{
                fontSize: '15px',
                color: '#4a5568',
                lineHeight: 1.85,
                marginBottom: '40px',
              }}>
                {t('about.p3')}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {badges.map(b => (
                  <span
                    key={b}
                    style={{
                      padding: '6px 16px',
                      background: 'rgba(200,168,75,0.06)',
                      border: '1px solid rgba(200,168,75,0.18)',
                      borderRadius: '100px',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'rgba(200,168,75,0.8)',
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: '0.03em',
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Identity card */}
          <ScrollReveal delay={200}>
            <div
              ref={identityRef}
              style={{
                background: 'linear-gradient(145deg, #0d2247 0%, #091729 100%)',
                border: '1px solid rgba(200,168,75,0.22)',
                borderRadius: '20px',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '28px',
                transformStyle: 'preserve-3d',
                boxShadow: '0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(200,168,75,0.1)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Card glow */}
              <div aria-hidden style={{
                position: 'absolute', top: -60, right: -60,
                width: 200, height: 200, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(200,168,75,0.09) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* Logo row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: 50, height: 50,
                  borderRadius: '13px',
                  background: 'rgba(200,168,75,0.1)',
                  border: '1px solid rgba(200,168,75,0.28)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Shield size={22} color="#c8a84b" strokeWidth={1.5} />
                </div>
                <div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '19px',
                    fontWeight: 700,
                  }}>
                    <span style={{ color: '#fff' }}>perfect</span>
                    <span style={{ color: '#c8a84b' }}>PS</span>
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: 'rgba(255,255,255,0.3)',
                    marginTop: '2px',
                    letterSpacing: '0.04em',
                  }}>
                    {t('about.studio_label')}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.58)',
                lineHeight: 1.75,
                fontStyle: 'italic',
                borderInlineStart: '2px solid rgba(200,168,75,0.4)',
                paddingInlineStart: '14px',
              }}>
                {t('about.quote')}
              </div>

              {/* Divider */}
              <div style={{
                height: '1px',
                background: 'rgba(200,168,75,0.1)',
              }} />

              {/* CTA */}
              <a
                href={`/${lang}/#contact`}
                style={{
                  display: 'block',
                  padding: '14px',
                  background: 'linear-gradient(135deg, #c8a84b 0%, #a07830 100%)',
                  color: '#070f1a',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  textAlign: 'center',
                  textDecoration: 'none',
                  transition: 'filter 200ms',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = 'brightness(1.12)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = 'brightness(1)' }}
              >
                {t('about.cta')}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 600px) {
          .about-stats-row {
            grid-template-columns: 1fr 1fr !important;
          }
          .about-stats-row > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(200,168,75,0.1);
          }
        }
      `}</style>
    </section>
  )
}
