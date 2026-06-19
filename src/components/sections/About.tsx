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
  useTilt(identityRef, 6)

  const stats = [
    { value: '2019', label: t('about.stat_founded') },
    { value: '5+',   label: t('about.stat_team') },
    { value: '15+',  label: t('about.stat_shipped') },
    { value: '8+',   label: t('about.stat_countries') },
  ]

  return (
    <section id="about" className="section" style={{ background: '#ffffff', overflow: 'hidden', position: 'relative' }}>

      <div aria-hidden style={{
        position: 'absolute',
        top: '0', left: '0', bottom: '0',
        width: '50%',
        backgroundImage: "url('/sections/about-studio.svg')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center left',
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label">{t('about.label')}</div>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              color: '#0d1b2e',
              lineHeight: 1.15,
            }}>
              {t('about.h2_pre')} <span className="gradient-text--gold">perfectPS</span>
            </h2>
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '380px 1fr',
          gap: '56px',
          alignItems: 'start',
        }} className="about-grid">

          <ScrollReveal>
            <div>
              <div ref={identityRef} style={{
                background: '#f8f9fa',
                border: '1px solid rgba(200,168,75,0.22)',
                borderRadius: '16px',
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                transformStyle: 'preserve-3d',
              }}>
                <div style={{
                  width: 64, height: 64,
                  borderRadius: '16px',
                  background: 'rgba(200,168,75,0.1)',
                  border: '1px solid rgba(200,168,75,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Shield size={30} color="#c8a84b" strokeWidth={1.5} />
                </div>

                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '22px', fontWeight: 700,
                }}>
                  <span style={{ color: '#0d1b2e' }}>perfect</span>
                  <span style={{ color: '#c8a84b' }}>PS</span>
                </div>

                <div style={{
                  fontSize: '13px',
                  color: '#4a5568',
                  lineHeight: 1.65,
                  fontStyle: 'italic',
                  borderLeft: '2px solid rgba(200,168,75,0.35)',
                  paddingLeft: '12px',
                }}>
                  {t('about.quote')}
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  background: 'rgba(0,0,0,0.04)',
                  border: '1px solid rgba(200,168,75,0.1)',
                  borderRadius: '10px',
                  padding: '18px',
                }}>
                  {stats.map(s => (
                    <div key={s.label}>
                      <div style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '24px', fontWeight: 800,
                        color: '#0d1b2e', lineHeight: 1,
                      }}>
                        {s.value}
                      </div>
                      <div style={{
                        fontSize: '11px', fontWeight: 500,
                        color: '#8fa3bc', textTransform: 'uppercase',
                        letterSpacing: '0.05em', marginTop: '4px',
                      }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <a href={`/${lang}/#contact`} style={{
                  display: 'block',
                  padding: '13px',
                  background: '#c8a84b',
                  color: '#0d1b2e',
                  borderRadius: '8px',
                  fontSize: '14px', fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  textAlign: 'center',
                  transition: 'background 200ms',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e0c068' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#c8a84b' }}
                >
                  {t('about.cta')}
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div style={{ paddingTop: '8px' }}>
              <p style={{
                fontSize: '18px', fontWeight: 500,
                color: '#0d1b2e', lineHeight: 1.75,
                marginBottom: '16px',
              }}>
                {t('about.p1')}
              </p>
              <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: 1.8, marginBottom: '16px' }}>
                {t('about.p2')}
              </p>
              <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: 1.8, marginBottom: '32px' }}>
                {t('about.p3')}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {badges.map(b => (
                  <span key={b} style={{
                    padding: '5px 14px',
                    background: 'rgba(200,168,75,0.07)',
                    border: '1px solid rgba(200,168,75,0.22)',
                    borderRadius: '6px',
                    fontSize: '12px', fontWeight: 600,
                    color: '#c8a84b',
                  }}>
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
