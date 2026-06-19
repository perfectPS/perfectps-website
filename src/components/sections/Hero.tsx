import { useRef, lazy, Suspense } from 'react'
import { CountUp } from '../ui/CountUp'
import { Folder, Users, Calendar, CheckCircle, ArrowLeft, TrendingUp } from 'lucide-react'
import { useTilt } from '../../hooks/useTilt'

const Hero3DScene = lazy(() => import('../3d/Hero3DScene').then(m => ({ default: m.Hero3DScene })))

const stats = [
  { num: 15, suffix: '+', label: 'Projects Delivered', badge: '+4 this year',  Icon: Folder },
  { num: 8,  suffix: '+', label: 'Clients Served',     badge: 'Growing',       Icon: Users },
  { num: 5,  suffix: '+', label: 'Years Building',     badge: 'Since 2019',    Icon: Calendar },
  { num: 100,suffix: '%', label: 'On-Time Delivery',   badge: 'Every project', Icon: CheckCircle },
]

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  useTilt(ref, 10)
  return (
    <div ref={ref} style={{
      background: 'rgba(200,168,75,0.05)',
      border: '1px solid rgba(200,168,75,0.15)',
      borderRadius: '16px',
      padding: '24px 20px',
      backdropFilter: 'blur(16px)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 200ms, border-color 200ms',
      transformStyle: 'preserve-3d',
    }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.background = 'rgba(200,168,75,0.09)'
        el.style.borderColor = 'rgba(200,168,75,0.4)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.background = 'rgba(200,168,75,0.05)'
        el.style.borderColor = 'rgba(200,168,75,0.15)'
      }}
    >
      <div style={{
        width: 44, height: 44,
        borderRadius: '50%',
        background: 'rgba(200,168,75,0.12)',
        border: '1px solid rgba(200,168,75,0.25)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '14px',
      }}>
        <stat.Icon size={20} color="#c8a84b" strokeWidth={1.75} />
      </div>
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 'clamp(28px, 3.5vw, 40px)',
        fontWeight: 800,
        color: '#fff',
        lineHeight: 1,
        marginBottom: '6px',
      }}>
        <CountUp target={stat.num} suffix={stat.suffix} />
      </div>
      <div style={{ fontSize: '13px', fontWeight: 500, color: '#8fa3bc', marginBottom: '12px' }}>{stat.label}</div>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '4px',
        padding: '3px 10px',
        background: 'rgba(34,197,94,0.12)',
        border: '1px solid rgba(34,197,94,0.25)',
        borderRadius: '100px',
        fontSize: '11px', fontWeight: 600,
        color: '#22c55e',
      }}>
        <TrendingUp size={10} style={{ marginRight: '2px' }} /> {stat.badge}
      </div>
    </div>
  )
}

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  top: `${8 + Math.floor((i * 37 + 11) % 85)}%`,
  left: `${5 + Math.floor((i * 53 + 7) % 90)}%`,
  dur: `${7 + (i % 6)}s`,
  delay: `${-(i * 0.4)}s`,
  size: i % 3 === 0 ? 2.5 : 1.5,
}))

export function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: `
          radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200,168,75,0.08) 0%, transparent 60%),
          radial-gradient(ellipse 60% 80% at 90% 80%, rgba(17,34,64,0.9) 0%, transparent 60%),
          linear-gradient(160deg, #0d1b2e 0%, #091424 60%, #0d1b2e 100%)
        `,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '72px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(200,168,75,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,168,75,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
      }} />

      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {PARTICLES.map(p => (
          <div key={p.id} style={{
            position: 'absolute',
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: '#c8a84b',
            opacity: 0.3,
            animation: `hero-float ${p.dur} ease-in-out infinite ${p.delay}`,
          }} />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '64px',
        }} className="hero-grid">
          {/* LEFT: text content */}
          <div>
            <div style={{ marginBottom: '28px' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '7px 16px',
                background: 'rgba(200,168,75,0.08)',
                border: '1px solid rgba(200,168,75,0.28)',
                borderRadius: '100px',
                fontSize: '12px', fontWeight: 700, letterSpacing: '2px',
                textTransform: 'uppercase', color: '#c8a84b',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#c8a84b', display: 'block', boxShadow: '0 0 6px #c8a84b' }} />
                Digital Studio · Est. 2019
              </span>
            </div>

            <h1 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(44px, 6.5vw, 80px)',
              fontWeight: 800,
              letterSpacing: '-2px',
              lineHeight: 1.06,
              marginBottom: '28px',
              maxWidth: '780px',
              color: '#fff',
            }}>
              We Build<br />
              <span className="gradient-text">Digital Products</span><br />
              That Matter.
            </h1>

            <p style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              color: '#8fa3bc',
              lineHeight: 1.7,
              maxWidth: '520px',
              marginBottom: '44px',
            }}>
              From secure VPN infrastructure to market-ready web and mobile
              applications — we ship products that are fast, beautiful, and built to last.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="/work" style={{
                padding: '14px 32px',
                background: '#c8a84b',
                color: '#0d1b2e',
                borderRadius: '8px',
                fontSize: '15px', fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                boxShadow: '0 0 24px rgba(200,168,75,0.35)',
                transition: 'background 200ms, transform 200ms',
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#e0c068'; el.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#c8a84b'; el.style.transform = 'translateY(0)' }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><ArrowLeft size={14} /> View Our Work</span>
              </a>
              <a href="/ps-secure" style={{
                padding: '14px 32px',
                background: 'rgba(255,255,255,0.04)',
                color: '#fff',
                border: '1px solid rgba(200,168,75,0.2)',
                borderRadius: '8px',
                fontSize: '15px', fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif",
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backdropFilter: 'blur(8px)',
                transition: 'border-color 200ms, color 200ms, background 200ms',
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#c8a84b'; el.style.color = '#c8a84b'; el.style.background = 'rgba(200,168,75,0.06)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(200,168,75,0.2)'; el.style.color = '#fff'; el.style.background = 'rgba(255,255,255,0.04)' }}
              >
                Learn More ↗
              </a>
            </div>
          </div>

          {/* RIGHT: 3D Canvas */}
          <div style={{ height: '480px', position: 'relative' }} className="hero-3d-col">
            <Suspense fallback={
              <div style={{
                width: '100%', height: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: 0.3,
              }}>
                <div style={{ width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,168,75,0.3), transparent)', animation: 'hero-float 3s ease-in-out infinite' }} />
              </div>
            }>
              <Hero3DScene />
            </Suspense>
          </div>
        </div>

        {/* STAT CARDS: full width below the grid */}
        <div className="hero-stats">
          {stats.map(s => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>
      </div>

      <style>{`
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        @keyframes hero-float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          33%       { transform: translateY(-18px) translateX(6px); opacity: 0.5; }
          66%       { transform: translateY(-8px) translateX(-4px); opacity: 0.35; }
        }
        @media (max-width: 900px) {
          .hero-stats { grid-template-columns: repeat(2, 1fr); }
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-3d-col { height: 320px !important; }
        }
        @media (max-width: 480px) { .hero-stats { grid-template-columns: 1fr 1fr; gap: 12px; } }
      `}</style>
    </section>
  )
}
