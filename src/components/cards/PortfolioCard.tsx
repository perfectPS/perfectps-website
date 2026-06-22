import { Lock } from 'lucide-react'
import type { PortfolioItem } from '../../types'

interface PortfolioCardProps {
  item: PortfolioItem
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  const isSvg = item.image.endsWith('.svg')

  return (
    <div
      className="portfolio-card"
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #0d2247 0%, #091729 100%)',
        border: '1px solid rgba(250,204,21,0.15)',
        transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
        cursor: 'default',
        position: 'relative',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(-6px)'
        el.style.boxShadow = '0 24px 64px rgba(0,0,0,0.5)'
        el.style.borderColor = 'rgba(250,204,21,0.4)'
        const overlay = el.querySelector('.pc-overlay') as HTMLElement
        if (overlay) overlay.style.opacity = '1'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
        el.style.borderColor = 'rgba(250,204,21,0.15)'
        const overlay = el.querySelector('.pc-overlay') as HTMLElement
        if (overlay) overlay.style.opacity = '0'
      }}
    >
      {/* Device frame bar */}
      {item.type === 'web' ? (
        <div style={{
          background: '#0e1828',
          padding: '9px 14px',
          display: 'flex', alignItems: 'center', gap: '6px',
          borderBottom: '1px solid rgba(250,204,21,0.1)',
        }}>
          {['#FF5F57', '#FFBD2E', '#28CA41'].map(c => (
            <span key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, display: 'block' }} />
          ))}
          <div style={{
            marginInlineStart: '8px', flex: 1,
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '4px',
            padding: '3px 10px',
            fontSize: '11px',
            color: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            client-project.app
          </div>
        </div>
      ) : (
        <div style={{
          background: '#0e1828',
          padding: '8px 16px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '1px solid rgba(250,204,21,0.08)',
        }}>
          <div style={{ width: 40, height: 3, background: 'rgba(255,255,255,0.1)', borderRadius: 2 }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.15)' }} />
          <div style={{ width: 40, height: 3 }} />
        </div>
      )}

      {/* Screenshot */}
      <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: '#0a1628', position: 'relative' }}>
        <img
          src={item.image}
          alt={`${item.sector} ${item.type === 'mobile' ? 'mobile app' : 'web app'} — client confidential`}
          loading="lazy"
          style={{
            width: '100%', height: '100%',
            objectFit: isSvg ? 'contain' : 'cover',
            padding: isSvg ? '16px' : '0',
            display: 'block',
            transition: 'transform 400ms ease',
          }}
        />

        {/* Hover overlay — shows description */}
        <div className="pc-overlay" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(7,15,26,0.96) 0%, rgba(7,15,26,0.6) 55%, transparent 100%)',
          opacity: 0,
          transition: 'opacity 250ms ease',
          display: 'flex', alignItems: 'flex-end',
          padding: '20px',
        }}>
          <p style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.65,
            margin: 0,
          }}>
            {item.desc}
          </p>
        </div>

        {/* NDA badge — always visible, top-right corner */}
        <div style={{
          position: 'absolute', top: '10px', right: '10px',
          display: 'flex', alignItems: 'center', gap: '5px',
          background: 'rgba(7,15,26,0.82)',
          border: '1px solid rgba(250,204,21,0.3)',
          borderRadius: '100px',
          padding: '4px 10px',
          backdropFilter: 'blur(8px)',
        }}>
          <Lock size={10} color="#FACC15" strokeWidth={2.5} aria-hidden />
          <span style={{
            fontSize: '10px', fontWeight: 700,
            color: '#FACC15',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}>
            NDA
          </span>
        </div>
      </div>

      {/* Footer strip */}
      <div style={{
        padding: '14px 18px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '8px',
        borderTop: '1px solid rgba(250,204,21,0.08)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            padding: '3px 10px',
            background: 'rgba(250,204,21,0.08)',
            border: '1px solid rgba(250,204,21,0.2)',
            borderRadius: '4px',
            fontSize: '11px', fontWeight: 700,
            color: '#FACC15',
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}>
            {item.sector}
          </span>
        </div>
        <span style={{
          padding: '3px 10px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '4px',
          fontSize: '11px', fontWeight: 500,
          color: 'rgba(255,255,255,0.35)',
          whiteSpace: 'nowrap',
        }}>
          {item.type === 'mobile' ? 'Mobile App' : 'Web App'}
        </span>
      </div>
    </div>
  )
}
