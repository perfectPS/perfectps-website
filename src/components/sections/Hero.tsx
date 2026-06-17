import { CountUp } from '../ui/CountUp'

const stats = [
  { value: '15+', num: 15, suffix: '+', label: 'Projects Delivered', change: '+4 this year' },
  { value: '8+',  num: 8,  suffix: '+', label: 'Clients Served',     change: 'Growing' },
  { value: '5+',  num: 5,  suffix: '+', label: 'Years Building',      change: 'Since 2019' },
  { value: '100%',num: 100,suffix: '%', label: 'On-Time Delivery',    change: 'Every project' },
]

export function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: `
          radial-gradient(ellipse 80% 60% at 10% 20%, rgba(0,174,239,0.18) 0%, transparent 55%),
          radial-gradient(ellipse 60% 80% at 90% 80%, rgba(30,52,96,0.8) 0%, transparent 60%),
          linear-gradient(160deg, #0B1D3A 0%, #091526 60%, #0B1D3A 100%)
        `,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '72px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Subtle grid lines */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(0,174,239,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,174,239,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
      }} />

      {/* Glow orb */}
      <div aria-hidden style={{
        position: 'absolute', top: '20%', left: '60%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(0,174,239,0.12) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '80px', paddingBottom: '80px' }}>
        {/* Badge */}
        <div style={{ marginBottom: '28px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '7px 16px',
            background: 'rgba(0,174,239,0.12)',
            border: '1px solid rgba(0,174,239,0.28)',
            borderRadius: '100px',
            fontSize: '12px', fontWeight: 700, letterSpacing: '2px',
            textTransform: 'uppercase', color: 'var(--cyan)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan)', display: 'block', boxShadow: '0 0 6px var(--cyan)' }} />
            Digital Studio · Est. 2019
          </span>
        </div>

        {/* Headline */}
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

        {/* Sub */}
        <p style={{
          fontSize: 'clamp(16px, 2vw, 19px)',
          color: 'var(--text-inv-dim)',
          lineHeight: 1.7,
          maxWidth: '520px',
          marginBottom: '44px',
        }}>
          From secure VPN infrastructure to market-ready web and mobile
          applications — we ship products that are fast, beautiful, and built to last.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '80px' }}>
          <a href="/work" style={{
            padding: '14px 32px',
            background: 'var(--cyan)',
            color: '#fff',
            borderRadius: 'var(--r-sm)',
            fontSize: '15px', fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            boxShadow: 'var(--glow-sm)',
            transition: 'opacity 200ms, transform 200ms',
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            View Our Work →
          </a>
          <a href="/ps-secure" style={{
            padding: '14px 32px',
            background: 'rgba(255,255,255,0.06)',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.18)',
            borderRadius: 'var(--r-sm)',
            fontSize: '15px', fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backdropFilter: 'blur(8px)',
            transition: 'background 200ms, border-color 200ms',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)' }}
          >
            PS Secure ↗
          </a>
        </div>

        {/* KPI stat cards */}
        <div className="hero-stats">
          {stats.map(s => (
            <div key={s.label} style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: 'var(--r-lg)',
              padding: '28px 24px',
              backdropFilter: 'blur(16px)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'background 200ms, border-color 200ms',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(0,174,239,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)' }}
            >
              {/* Top accent line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--cyan), transparent)' }} />
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(30px, 3.5vw, 44px)',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1,
                marginBottom: '6px',
              }}>
                <CountUp target={s.num} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>{s.label}</div>
              <div style={{ fontSize: '11px', color: 'var(--cyan)', fontWeight: 600 }}>↑ {s.change}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        @media (max-width: 900px) { .hero-stats { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .hero-stats { grid-template-columns: 1fr 1fr; gap: 12px; } }
      `}</style>
    </section>
  )
}
