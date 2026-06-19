import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLang } from '../../hooks/useLang'
import { portfolioItems } from '../../data/portfolio'
import { PortfolioCard } from '../cards/PortfolioCard'
import { ScrollReveal } from '../ui/ScrollReveal'

type Filter = 'all' | 'web' | 'mobile'

interface PortfolioProps {
  limit?: number
  showCta?: boolean
}

export function Portfolio({ limit, showCta = true }: PortfolioProps) {
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
    <section id="work" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-label">{t('work.label')}</div>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: 'var(--text-1)',
            marginBottom: '14px',
          }}>
            {t('work.h2_line1')} <span className="gradient-text--gold">{t('work.h2_line2')}</span>
          </h2>
          <p style={{
            fontSize: '17px', color: 'var(--text-2)',
            maxWidth: '560px', lineHeight: 1.7,
            marginBottom: '36px',
          }}>
            {t('work.portfolio_desc')}
          </p>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={80}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {filters.map(f => (
              <button key={f.value} onClick={() => setActive(f.value)} style={{
                padding: '9px 22px',
                borderRadius: 'var(--r-sm)',
                fontSize: '13px', fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
                border: active === f.value ? 'none' : '1.5px solid var(--border)',
                background: active === f.value ? 'var(--navy)' : 'transparent',
                color: active === f.value ? '#fff' : 'var(--text-2)',
                cursor: 'pointer',
                transition: 'all 200ms ease',
              }}>
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid-3" style={{ marginBottom: '48px' }}>
          {displayed.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 50}>
              <PortfolioCard item={item} />
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        {showCta && limit && filtered.length > limit && (
          <div style={{ textAlign: 'center' }}>
            <a href={`/${lang}/work`} style={{
              padding: '13px 36px',
              background: 'transparent',
              color: 'var(--navy)',
              border: '2px solid var(--navy)',
              borderRadius: 'var(--r-sm)',
              fontSize: '14px', fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              display: 'inline-block',
              transition: 'background 200ms, color 200ms',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--navy)' }}
            >
              {t('work.view_all')}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
