import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLang } from '../../hooks/useLang'
import { portfolioItems } from '../../data/portfolio'
import { PortfolioCard } from '../cards/PortfolioCard'
import { ScrollReveal } from '../ui/ScrollReveal'

type Filter = 'all' | 'web' | 'mobile'

interface PortfolioProps {
  limit?: number
}

const demandFeatures = [
  { emoji: '⚡', text: 'Fast turnaround' },
  { emoji: '🔒', text: 'NDA protected' },
  { emoji: '🌍', text: '8+ countries' },
  { emoji: '💬', text: '24h response' },
]

export function Portfolio({ limit }: PortfolioProps) {
  const [active, setActive] = useState<Filter>('all')
  const { t } = useTranslation()
  const lang = useLang()

  const filters: { label: string; value: Filter }[] = [
    { label: t('work.filter_all'), value: 'all' },
    { label: t('work.filter_web'), value: 'web' },
    { label: t('work.filter_mobile'), value: 'mobile' },
  ]

  const filtered = portfolioItems.filter(item => active === 'all' || item.type === active)
  const displayed = limit ? filtered.slice(0, limit) : filtered

  return (
    <section id="work" className="section" style={{ background: '#0a1628', overflow: 'hidden', position: 'relative' }}>

      {/* Background glow */}
      <div aria-hidden style={{
        position: 'absolute', top: '10%', left: '50%',
        transform: 'translateX(-50%)',
        width: 900, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(250,204,21,0.05) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <ScrollReveal>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '16px',
            flexWrap: 'wrap',
            gap: '16px',
          }}>
            <div>
              <div className="section-label">{t('work.label')}</div>
              <h2 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 800,
                color: '#fff',
                marginBottom: 0,
                lineHeight: 1.1,
              }}>
                {t('work.h2_line1')}{' '}
                <span className="gradient-text--dark">{t('work.h2_line2')}</span>
              </h2>
            </div>
            <a
              href={`/${lang}/work`}
              style={{
                fontSize: '13px', fontWeight: 600, color: '#FACC15',
                textDecoration: 'none', whiteSpace: 'nowrap',
                display: 'flex', alignItems: 'center', gap: '5px',
                opacity: 0.85, transition: 'opacity 150ms',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85' }}
            >
              {t('work.view_all')}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M3 7h8M7 3l4 4-4 4" stroke="#FACC15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </ScrollReveal>

        {/* ── 200+ social-proof strip ── */}
        <ScrollReveal delay={80}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'center',
            gap: '32px',
            background: 'linear-gradient(135deg, rgba(250,204,21,0.08) 0%, rgba(250,204,21,0.03) 100%)',
            border: '1px solid rgba(250,204,21,0.16)',
            borderRadius: '16px',
            padding: '24px 32px',
            marginBottom: '48px',
          }} className="portfolio-proof-strip">
            <div>
              <div style={{
                fontFamily: "'Chakra Petch', sans-serif",
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 700,
                color: '#FACC15',
                lineHeight: 1,
                marginBottom: '6px',
              }}>
                200+
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.7)',
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {t('work.portfolio_desc')}
              </div>
            </div>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'flex-end',
            }} className="portfolio-demand-features">
              {demandFeatures.map(f => (
                <div key={f.text} style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  padding: '7px 14px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '100px',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.65)',
                  whiteSpace: 'nowrap',
                }}>
                  <span>{f.emoji}</span>
                  {f.text}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── Filter tabs ── */}
        <ScrollReveal delay={120}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', flexWrap: 'wrap' }}>
            {filters.map(f => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                style={{
                  padding: '9px 22px',
                  borderRadius: '100px',
                  fontSize: '13px', fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  border: active === f.value
                    ? '1.5px solid rgba(250,204,21,0.6)'
                    : '1.5px solid rgba(255,255,255,0.1)',
                  background: active === f.value ? 'rgba(250,204,21,0.12)' : 'transparent',
                  color: active === f.value ? '#FACC15' : 'rgba(255,255,255,0.45)',
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Grid ── */}
        <div className="grid-3" style={{ marginBottom: '48px' }}>
          {displayed.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 50}>
              <PortfolioCard item={item} />
            </ScrollReveal>
          ))}
        </div>

        {/* ── Dev on demand callout ── */}
        <ScrollReveal delay={100}>
          <div style={{
            background: 'linear-gradient(135deg, #0d2247 0%, #091729 100%)',
            border: '1px solid rgba(250,204,21,0.2)',
            borderRadius: '16px',
            padding: '32px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
            boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
          }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(250,204,21,0.1)',
                border: '1px solid rgba(250,204,21,0.25)',
                borderRadius: '100px',
                padding: '4px 14px',
                fontSize: '11px', fontWeight: 700,
                color: '#FACC15', letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'block', flexShrink: 0 }} />
                Development on Demand
              </div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(18px, 2vw, 22px)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '6px',
              }}>
                Need a custom product built fast?
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', maxWidth: '480px' }}>
                We ship web apps, mobile apps, and VPN infrastructure on your timeline. Fixed price, no surprises.
              </div>
            </div>
            <a
              href={`/${lang}/#contact`}
              style={{
                display: 'inline-block',
                padding: '13px 28px',
                background: 'linear-gradient(135deg, #FACC15 0%, #a07830 100%)',
                color: '#070f1a',
                borderRadius: '10px',
                fontSize: '14px', fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'filter 200ms',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = 'brightness(1.12)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = 'brightness(1)' }}
            >
              Start a Project
            </a>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .portfolio-proof-strip { grid-template-columns: 1fr !important; }
          .portfolio-demand-features { justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  )
}
