import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { portfolioItems } from '../../data/portfolio'
import { PortfolioCard } from '../cards/PortfolioCard'
import { ScrollReveal } from '../ui/ScrollReveal'

type Filter = 'all' | 'web' | 'mobile'

const filters: { label: string; value: Filter }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Web Apps', value: 'web' },
  { label: 'Mobile Apps', value: 'mobile' },
]

interface PortfolioProps {
  limit?: number
  showCta?: boolean
}

export function Portfolio({ limit, showCta = true }: PortfolioProps) {
  const [active, setActive] = useState<Filter>('all')

  const filtered = portfolioItems.filter(item => active === 'all' || item.type === active)
  const displayed = limit ? filtered.slice(0, limit) : filtered

  return (
    <section id="work" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-label">Selected Work</div>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: 'var(--text-1)',
            marginBottom: '14px',
          }}>
            Projects We're Proud Of
          </h2>
          <p style={{
            fontSize: '17px', color: 'var(--text-2)',
            maxWidth: '560px', lineHeight: 1.7,
            marginBottom: '36px',
          }}>
            A selection of products built for clients across industries.
            Client identities are kept confidential.
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
            <a href="/work" style={{
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
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>View All 15 Projects <ArrowRight size={14} /></span>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
