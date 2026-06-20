import { Globe, Smartphone, Shield, Server, Palette, Gamepad2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useLang } from '../../hooks/useLang'
import { ScrollReveal } from '../ui/ScrollReveal'

const domainsEn = [
  { icon: Globe,       count: '80+',  title: 'Web Applications',  sub: 'SaaS · FinTech · E-Commerce' },
  { icon: Smartphone,  count: '60+',  title: 'Mobile Apps',       sub: 'iOS · Android · React Native' },
  { icon: Server,      count: '40+',  title: 'Backend & Server',  sub: 'Node.js · APIs · Cloud Infra' },
  { icon: Gamepad2,    count: '10+',  title: 'Game Development',  sub: 'Unity · WebGL · Casual & Hyper' },
  { icon: Shield,      count: '20+',  title: 'VPN & Security',    sub: 'WireGuard · Privacy · B2B' },
  { icon: Palette,     count: '50+',  title: 'UI/UX Design',      sub: 'Figma · Motion · Branding' },
]

const domainsAr = [
  { icon: Globe,       count: '80+',  title: 'تطبيقات الويب',     sub: 'SaaS · التقنية المالية · التجارة الإلكترونية' },
  { icon: Smartphone,  count: '60+',  title: 'تطبيقات الجوال',    sub: 'iOS · Android · React Native' },
  { icon: Server,      count: '40+',  title: 'الخلفية والخوادم',  sub: 'Node.js · APIs · البنية السحابية' },
  { icon: Gamepad2,    count: '10+',  title: 'تطوير الألعاب',     sub: 'Unity · WebGL · كاجوال وهايبر' },
  { icon: Shield,      count: '20+',  title: 'VPN والأمن',        sub: 'WireGuard · الخصوصية · B2B' },
  { icon: Palette,     count: '50+',  title: 'تصميم UI/UX',      sub: 'فيغما · الحركة · الهوية البصرية' },
]

const industriesEn = ['FinTech', 'HealthTech', 'EdTech', 'E-Commerce', 'SaaS', 'Gov Tech', 'Real Estate', 'Media']
const industriesAr = ['التقنية المالية', 'التقنية الصحية', 'التعليم الإلكتروني', 'التجارة الإلكترونية', 'SaaS', 'القطاع الحكومي', 'العقارات', 'الإعلام']

export function Capabilities() {
  const { t } = useTranslation()
  const lang = useLang()
  const industries = lang === 'ar' ? industriesAr : industriesEn
  const domains = lang === 'ar' ? domainsAr : domainsEn

  return (
    <section
      className="section"
      style={{ background: '#ffffff', overflow: 'hidden', position: 'relative' }}
    >
      {/* Subtle grid */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(200,168,75,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,168,75,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Frameless SVG illustration — right side */}
      <div aria-hidden style={{
        position: 'absolute',
        top: '5%', right: '-2%', bottom: '5%',
        width: '50%',
        backgroundImage: "url('/sections/whyus-metrics.svg')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center right',
        opacity: 0.12,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 56px' }}>
            <div className="section-label">{t('capabilities.label')}</div>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 800,
              color: '#0d1b2e',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}>
              {t('capabilities.h2_line1')}<br />
              <span className="gradient-text--gold">{t('capabilities.h2_line2')}</span>
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.75 }}>
              {t('capabilities.body')}
            </p>
          </div>
        </ScrollReveal>

        {/* ── Scale stat strip ── */}
        <ScrollReveal delay={60}>
          <div className="cap-stats" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            border: '1px solid rgba(200,168,75,0.2)',
            borderRadius: '16px',
            background: 'rgba(200,168,75,0.04)',
            marginBottom: '48px',
            overflow: 'hidden',
          }}>
            {[
              { num: '200+', label: t('capabilities.stat_products') },
              { num: '8',    label: t('capabilities.stat_verticals') },
              { num: '8+',   label: t('capabilities.stat_countries') },
            ].map((s, i) => (
              <div key={s.label} style={{
                padding: '28px 24px',
                textAlign: 'center',
                borderRight: i < 2 ? '1px solid rgba(200,168,75,0.14)' : 'none',
              }}>
                <div style={{
                  fontFamily: "'Chakra Petch', sans-serif",
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  fontWeight: 700,
                  color: '#c8a84b',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}>
                  {s.num}
                </div>
                <div style={{
                  fontSize: '13px',
                  color: '#64748b',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Domain capabilities grid ── */}
        <ScrollReveal delay={80}>
          <div style={{
            fontSize: '11px', fontWeight: 700,
            color: '#c8a84b',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '16px',
            textAlign: 'center',
          }}>
            {t('capabilities.domains_heading')}
          </div>
        </ScrollReveal>

        <div className="cap-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          marginBottom: '40px',
        }}>
          {domains.map(({ icon: Icon, count, title, sub }, i) => (
            <ScrollReveal key={title} delay={80 + i * 40}>
              <div
                className="cap-domain-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '20px 22px',
                  background: '#f8fafc',
                  border: '1px solid rgba(200,168,75,0.18)',
                  borderRadius: '12px',
                  transition: 'border-color 200ms, background 200ms, box-shadow 200ms',
                }}
              >
                <div style={{
                  width: 44, height: 44,
                  borderRadius: '11px',
                  background: 'rgba(200,168,75,0.1)',
                  border: '1px solid rgba(200,168,75,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={20} color="#c8a84b" strokeWidth={1.75} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{
                      fontFamily: "'Chakra Petch', sans-serif",
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#c8a84b',
                      lineHeight: 1,
                    }}>
                      {count}
                    </span>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#0d1b2e',
                    }}>
                      {title}
                    </span>
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#94a3b8',
                    marginTop: '3px',
                  }}>
                    {sub}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Industry verticals ── */}
        <ScrollReveal delay={120}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{
              fontSize: '11px', fontWeight: 700,
              color: '#c8a84b',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}>
              {t('capabilities.industries_heading')}
            </div>
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '8px',
              justifyContent: 'center',
            }}>
              {industries.map(ind => (
                <span key={ind} style={{
                  padding: '6px 16px',
                  background: 'rgba(200,168,75,0.05)',
                  border: '1px solid rgba(200,168,75,0.18)',
                  borderRadius: '100px',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#64748b',
                }}>
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── CTAs ── */}
        <ScrollReveal delay={140}>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`/${lang}/#contact`}
              style={{
                padding: '14px 32px',
                background: 'linear-gradient(135deg, #c8a84b 0%, #a07830 100%)',
                color: '#070f1a',
                borderRadius: '10px',
                fontSize: '14px', fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
                textDecoration: 'none',
                transition: 'filter 200ms',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = 'brightness(1.12)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = 'brightness(1)' }}
            >
              {t('capabilities.cta_project')}
            </a>
            <a
              href={`/${lang}/ps-secure`}
              style={{
                padding: '14px 32px',
                background: 'rgba(13,27,46,0.05)',
                color: '#4a5568',
                border: '1px solid rgba(13,27,46,0.15)',
                borderRadius: '10px',
                fontSize: '14px', fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif",
                textDecoration: 'none',
                transition: 'border-color 200ms, color 200ms, background 200ms',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(200,168,75,0.5)'
                el.style.color = '#c8a84b'
                el.style.background = 'rgba(200,168,75,0.06)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(13,27,46,0.15)'
                el.style.color = '#4a5568'
                el.style.background = 'rgba(13,27,46,0.05)'
              }}
            >
              {t('capabilities.cta_work')}
            </a>
          </div>
        </ScrollReveal>

      </div>

      <style>{`
        .cap-domain-card:hover {
          border-color: rgba(200,168,75,0.45) !important;
          background: rgba(200,168,75,0.05) !important;
          box-shadow: 0 4px 20px rgba(200,168,75,0.08) !important;
        }
        @media (max-width: 760px) {
          .cap-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .cap-stats { grid-template-columns: 1fr !important; }
          .cap-stats > div { border-right: none !important; border-bottom: 1px solid rgba(200,168,75,0.1); }
          .cap-stats > div:last-child { border-bottom: none; }
        }
        @media (max-width: 480px) {
          .cap-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
