import { techStack } from '../../data/tech'
import { ScrollReveal } from '../ui/ScrollReveal'

export function TechStack() {
  const doubled = [...techStack, ...techStack]

  return (
    <section style={{
      background: '#112240',
      padding: '96px 0',
      overflow: 'hidden',
      position: 'relative',
      backgroundImage: `url('/bg/techstack-bg.svg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div aria-hidden style={{
        position: 'absolute',
        top: '0', left: '0', right: '0', bottom: '0',
        backgroundImage: "url('/sections/techstack-constellation.svg')",
        backgroundSize: '70%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        opacity: 0.18,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div aria-hidden style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '600px', height: '200px',
        background: 'radial-gradient(ellipse, rgba(200,168,75,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 56px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Technology</div>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(26px, 4vw, 42px)',
              fontWeight: 800, color: '#fff',
              marginBottom: '12px',
            }}>
              We Choose the Right Tool<br />
              <span className="gradient-text">for Every Job</span>
            </h2>
            <p style={{ fontSize: '16px', color: '#8fa3bc', lineHeight: 1.7 }}>
              Modern stack, battle-tested choices — built for performance and long-term maintainability.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div style={{ overflow: 'hidden', marginBottom: '12px', position: 'relative', perspective: '800px' }}>
        <div aria-hidden style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, #112240, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div aria-hidden style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, #112240, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{
          display: 'flex', gap: '12px',
          animation: 'marquee-ltr 28s linear infinite',
          width: 'max-content',
          transform: 'rotateX(3deg)',
        }}>
          {doubled.map((t, i) => (
            <div key={i} style={{
              padding: '10px 22px',
              background: '#0d1b2e',
              border: '1px solid rgba(200,168,75,0.18)',
              borderRadius: '8px',
              color: 'rgba(255,255,255,0.75)',
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

      <div style={{ overflow: 'hidden', position: 'relative', perspective: '800px' }}>
        <div aria-hidden style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, #112240, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div aria-hidden style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, #112240, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{
          display: 'flex', gap: '12px',
          animation: 'marquee-rtl 32s linear infinite',
          width: 'max-content',
          transform: 'rotateX(-3deg)',
        }}>
          {[...doubled].reverse().map((t, i) => (
            <div key={i} style={{
              padding: '10px 22px',
              background: 'rgba(200,168,75,0.06)',
              border: '1px solid rgba(200,168,75,0.2)',
              borderRadius: '8px',
              color: '#c8a84b',
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
