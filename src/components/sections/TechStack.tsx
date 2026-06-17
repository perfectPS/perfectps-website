import { techStack } from '../../data/tech'
import { ScrollReveal } from '../ui/ScrollReveal'

export function TechStack() {
  const doubled = [...techStack, ...techStack]

  return (
    <section style={{
      background: 'linear-gradient(160deg, #0B1D3A 0%, #091526 100%)',
      padding: '96px 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Subtle glow */}
      <div aria-hidden style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '600px', height: '200px',
        background: 'radial-gradient(ellipse, rgba(0,174,239,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 56px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Technology</div>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(26px, 4vw, 38px)',
              fontWeight: 800, color: '#fff',
              marginBottom: '12px',
            }}>
              We Choose the Right Tool<br />
              <span className="gradient-text">for Every Job</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-inv-dim)', lineHeight: 1.7 }}>
              Modern stack, battle-tested choices — built for performance and long-term maintainability.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee row 1 */}
      <div style={{ overflow: 'hidden', marginBottom: '12px' }}>
        <div style={{
          display: 'flex', gap: '12px',
          animation: 'marquee-ltr 28s linear infinite',
          width: 'max-content',
        }}>
          {doubled.map((t, i) => (
            <div key={i} style={{
              padding: '10px 22px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 'var(--r-sm)',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '13px', fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              whiteSpace: 'nowrap',
              letterSpacing: '0.3px',
            }}>
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 — reversed */}
      <div style={{ overflow: 'hidden' }}>
        <div style={{
          display: 'flex', gap: '12px',
          animation: 'marquee-rtl 32s linear infinite',
          width: 'max-content',
        }}>
          {[...doubled].reverse().map((t, i) => (
            <div key={i} style={{
              padding: '10px 22px',
              background: 'rgba(0,174,239,0.06)',
              border: '1px solid rgba(0,174,239,0.12)',
              borderRadius: 'var(--r-sm)',
              color: 'rgba(0,174,239,0.75)',
              fontSize: '13px', fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              whiteSpace: 'nowrap',
            }}>
              {t}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-ltr { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-rtl { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>
    </section>
  )
}
