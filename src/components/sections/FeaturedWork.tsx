import { useState } from 'react'
import { portfolioItems } from '../../data/portfolio'
import { ArrowRight } from 'lucide-react'

const featured = portfolioItems.slice(0, 4)

export function FeaturedWork() {
  const [active, setActive] = useState(0)
  const item = featured[active]
  const isPhone = item.type === 'mobile'

  return (
    <section
      id="work"
      style={{
        background: 'linear-gradient(160deg, #0B1D3A 0%, #091526 60%, #0B1D3A 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid lines */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(0,174,239,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,174,239,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <div style={{ paddingTop: '80px', marginBottom: '56px' }}>
          <div className="section-label" style={{ color: 'var(--cyan)' }}>Selected Work</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.1,
            }}>
              Projects We're<br />Proud Of
            </h2>
            <a href="/work" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontSize: '14px', fontWeight: 600,
              color: 'rgba(255,255,255,0.5)',
              fontFamily: "'DM Sans', sans-serif",
              transition: 'color 200ms',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--cyan)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
            >
              View all 15 projects <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Featured project */}
        <div className="featured-work-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.15fr',
          gap: '64px',
          alignItems: 'center',
          marginBottom: '64px',
          minHeight: '380px',
        }}>
          {/* Left: info */}
          <div>
            <span style={{
              display: 'inline-block',
              padding: '4px 12px',
              background: 'rgba(0,174,239,0.12)',
              border: '1px solid rgba(0,174,239,0.25)',
              borderRadius: '4px',
              fontSize: '11px', fontWeight: 700,
              letterSpacing: '1.5px', textTransform: 'uppercase',
              color: 'var(--cyan)',
              marginBottom: '20px',
            }}>
              {item.sector}
            </span>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '16px',
            }}>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px', fontWeight: 700,
                color: 'rgba(0,174,239,0.5)',
                letterSpacing: '2px',
              }}>
                {String(active + 1).padStart(2, '0')}
              </span>
              <h3 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(22px, 3vw, 32px)',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1.2,
              }}>
                {item.name}
              </h3>
            </div>

            <p style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.75,
              marginBottom: '36px',
              maxWidth: '440px',
            }}>
              {item.desc}
            </p>

            <span style={{
              display: 'inline-block',
              padding: '5px 14px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '4px',
              fontSize: '11px', fontWeight: 600,
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '1px', textTransform: 'uppercase',
            }}>
              {item.type === 'mobile' ? 'Mobile App' : 'Web Application'}
            </span>
          </div>

          {/* Right: screenshot */}
          <div style={{ position: 'relative' }}>
            {/* Glow */}
            <div aria-hidden style={{
              position: 'absolute', top: '50%', left: '50%',
              width: '80%', height: '80%',
              background: 'radial-gradient(circle, rgba(0,174,239,0.1) 0%, transparent 70%)',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }} />

            {isPhone ? (
              /* Phone frame */
              <div style={{
                width: '220px',
                margin: '0 auto',
                background: '#1a2535',
                border: '2px solid rgba(255,255,255,0.12)',
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
                position: 'relative',
              }}>
                <div style={{
                  height: '28px',
                  background: '#111d2e',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                </div>
                <img
                  src={item.image} alt={item.name}
                  style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                />
              </div>
            ) : (
              /* Browser frame */
              <div style={{
                background: '#131e2e',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
              }}>
                {/* URL bar */}
                <div style={{
                  height: '36px',
                  background: '#0e1828',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex', alignItems: 'center',
                  padding: '0 12px', gap: '8px',
                }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
                      <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
                    ))}
                  </div>
                  <div style={{
                    flex: 1, maxWidth: '200px', margin: '0 auto',
                    height: '20px', background: 'rgba(255,255,255,0.06)',
                    borderRadius: '4px',
                  }} />
                </div>
                <img
                  src={item.image} alt={item.name}
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: item.image.endsWith('.svg') ? 'contain' : 'cover',
                    display: 'block',
                    background: item.image.endsWith('.svg') ? '#1a2535' : 'transparent',
                    padding: item.image.endsWith('.svg') ? '16px' : '0',
                  }}
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>

        {/* Tab navigation */}
        <div className="featured-tabs" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          {featured.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              style={{
                all: 'unset',
                cursor: 'pointer',
                padding: '24px 20px 28px',
                borderTop: `2px solid ${active === i ? 'var(--cyan)' : 'transparent'}`,
                marginTop: '-1px',
                transition: 'border-color 200ms',
                textAlign: 'left',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              <div style={{
                fontSize: '11px', fontWeight: 700,
                color: active === i ? 'var(--cyan)' : 'rgba(255,255,255,0.25)',
                letterSpacing: '2px',
                marginBottom: '8px',
                fontFamily: "'DM Sans', sans-serif",
                transition: 'color 200ms',
              }}>
                {String(i + 1).padStart(2, '0')}.
              </div>
              <div style={{
                fontSize: '14px', fontWeight: 700,
                color: active === i ? '#fff' : 'rgba(255,255,255,0.4)',
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.3,
                transition: 'color 200ms',
              }}>
                {p.name}
              </div>
              <div style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.2)',
                marginTop: '4px',
                fontFamily: "'DM Sans', sans-serif",
                transition: 'color 200ms',
              }}>
                {p.sector}
              </div>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .featured-work-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .featured-tabs { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .featured-tabs { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
