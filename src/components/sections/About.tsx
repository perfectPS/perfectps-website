import { ScrollReveal } from '../ui/ScrollReveal'

const stats = [
  { value: '2019', label: 'Founded' },
  { value: '5+',   label: 'Core Team' },
  { value: '15+',  label: 'Products Shipped' },
  { value: '8+',   label: 'Countries' },
]

const badges = ['React', 'WireGuard', 'TypeScript', 'Oracle Cloud', 'Expo', 'Node.js']

export function About() {
  return (
    <section className="section" style={{ background: 'var(--surface)', overflow: 'hidden' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }} className="about-grid">

          {/* Left */}
          <ScrollReveal>
            <div>
              <div className="section-label">About the Studio</div>
              <h2 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 800,
                color: 'var(--text-1)',
                marginBottom: '20px',
                lineHeight: 1.15,
              }}>
                We Are<br />
                <span className="gradient-text--dark">perfectPS</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.8, marginBottom: '16px' }}>
                perfectPS is a boutique digital studio based in the Middle East, specializing in secure, high-performance digital products.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.8, marginBottom: '16px' }}>
                We built <strong style={{ color: 'var(--text-1)' }}>PS Secure</strong> — a zero-log VPN platform trusted by users across the region — and partner with businesses to design, build, and ship products that make an impact.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.8, marginBottom: '36px' }}>
                We believe in clean code, beautiful interfaces, and infrastructure that actually works.
              </p>

              {/* Tech badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
                {badges.map(b => (
                  <span key={b} style={{
                    padding: '5px 14px',
                    background: 'var(--surface-alt)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--r-xs)',
                    fontSize: '12px', fontWeight: 600,
                    color: 'var(--text-2)',
                  }}>
                    {b}
                  </span>
                ))}
              </div>

              <a href="/#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px',
                background: 'var(--navy)',
                color: '#fff',
                borderRadius: 'var(--r-sm)',
                fontSize: '14px', fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
                transition: 'opacity 200ms',
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
              >
                Start a Project →
              </a>
            </div>
          </ScrollReveal>

          {/* Right: stat grid */}
          <ScrollReveal delay={150}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{
                  padding: '32px 24px',
                  background: i % 2 === 0 ? 'var(--navy)' : 'var(--surface-alt)',
                  borderRadius: 'var(--r-lg)',
                  border: `1px solid ${i % 2 === 0 ? 'rgba(0,174,239,0.15)' : 'var(--border)'}`,
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {i % 2 === 0 && (
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                      background: 'linear-gradient(90deg, var(--cyan), transparent)',
                    }} />
                  )}
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '38px', fontWeight: 800,
                    color: i % 2 === 0 ? '#fff' : 'var(--navy)',
                    lineHeight: 1, marginBottom: '8px',
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontSize: '13px', fontWeight: 500,
                    color: i % 2 === 0 ? 'rgba(255,255,255,0.6)' : 'var(--text-2)',
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
