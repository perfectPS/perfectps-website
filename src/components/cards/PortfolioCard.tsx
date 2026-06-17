import type { PortfolioItem } from '../../types'

interface PortfolioCardProps {
  item: PortfolioItem
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  const isSvg = item.image.endsWith('.svg')

  return (
    <div
      style={{
        borderRadius: 'var(--r-lg)',
        overflow: 'hidden',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-xs)',
        transition: 'transform 220ms ease, box-shadow 220ms ease',
        cursor: 'default',
        position: 'relative',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
        const overlay = e.currentTarget.querySelector('.card-overlay') as HTMLElement
        if (overlay) overlay.style.opacity = '1'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'var(--shadow-xs)'
        const overlay = e.currentTarget.querySelector('.card-overlay') as HTMLElement
        if (overlay) overlay.style.opacity = '0'
      }}
    >
      {/* Browser / phone frame bar */}
      {item.type === 'web' ? (
        <div style={{
          background: '#F0F2F5',
          padding: '9px 14px',
          display: 'flex', alignItems: 'center', gap: '6px',
          borderBottom: '1px solid var(--border)',
        }}>
          {['#FF5F57','#FFBD2E','#28CA41'].map(c => (
            <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, display: 'block' }} />
          ))}
          <div style={{
            marginLeft: '8px', flex: 1,
            background: '#fff', borderRadius: 4,
            padding: '3px 10px',
            fontSize: '11px', color: '#AAB0BA',
            border: '1px solid #E5E7EB',
          }}>
            perfectps.com
          </div>
        </div>
      ) : (
        <div style={{
          background: '#1A1A2E',
          padding: '8px 16px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ width: 40, height: 3, background: 'rgba(255,255,255,0.15)', borderRadius: 2 }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.2)' }} />
          <div style={{ width: 40, height: 3 }} />
        </div>
      )}

      {/* Screenshot */}
      <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: '#EFF6FF', position: 'relative' }}>
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          style={{
            width: '100%', height: '100%',
            objectFit: isSvg ? 'contain' : 'cover',
            padding: isSvg ? '16px' : '0',
            display: 'block',
            transition: 'transform 400ms ease',
          }}
        />

        {/* Hover overlay */}
        <div className="card-overlay" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(11,29,58,0.92) 0%, rgba(11,29,58,0.4) 60%, transparent 100%)',
          opacity: 0,
          transition: 'opacity 250ms ease',
          display: 'flex', alignItems: 'flex-end',
          padding: '20px',
        }}>
          <div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '16px', fontWeight: 700, color: '#fff',
              marginBottom: '4px',
            }}>
              {item.name}
            </div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>{item.desc}</div>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div style={{
        padding: '14px 18px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '8px',
        borderTop: '1px solid var(--border)',
      }}>
        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 700, color: 'var(--text-1)' }}>
            {item.name}
          </div>
        </div>
        <span style={{
          padding: '3px 10px',
          background: 'var(--surface-alt)',
          border: '1px solid var(--border)',
          borderRadius: 4,
          fontSize: '11px', fontWeight: 600,
          color: 'var(--text-2)',
          whiteSpace: 'nowrap',
        }}>
          {item.sector}
        </span>
      </div>
    </div>
  )
}
