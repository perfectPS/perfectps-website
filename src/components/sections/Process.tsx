import { Search, Layers, Code2, Rocket } from 'lucide-react'
import { ScrollReveal } from '../ui/ScrollReveal'

const steps = [
  {
    n: '01',
    icon: Search,
    title: 'Discover',
    desc: 'We start by understanding your business goals, users, and constraints — not jumping straight to code. A clear brief saves weeks of rework.',
    color: '#00AEEF',
  },
  {
    n: '02',
    icon: Layers,
    title: 'Design',
    desc: 'Architecture decisions, UI systems, and prototypes. We align on the plan before writing a single production line, so you can see it before we build it.',
    color: '#7C3AED',
  },
  {
    n: '03',
    icon: Code2,
    title: 'Build',
    desc: 'Iterative development in tight sprints. Regular check-ins, live previews, and test coverage at every stage. No black-box development.',
    color: '#10B981',
  },
  {
    n: '04',
    icon: Rocket,
    title: 'Launch',
    desc: 'Production deploy, monitoring setup, and post-launch support. We don\'t hand you a zip file — we ship it, measure it, and stay on until it\'s stable.',
    color: '#F59E0B',
  },
]

export function Process() {
  return (
    <section
      className="section section--dark"
      style={{ overflow: 'hidden', position: 'relative' }}
    >
      {/* Grid overlay */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(0,174,239,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,174,239,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 64px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>How We Work</div>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '16px',
            }}>
              From Idea to<br />
              <span className="gradient-text">Shipped Product</span>
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--text-inv-dim)', lineHeight: 1.7 }}>
              A proven 4-step process that keeps every project on track, on budget, and on time.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px' }} className="process-grid">
          {steps.map((step, i) => (
            <ScrollReveal key={step.n} delay={i * 100}>
              <div style={{
                padding: '36px 28px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 'var(--r-lg)',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 200ms, border-color 200ms',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = `${step.color}40` }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}
              >
                {/* Top accent */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${step.color}, transparent)` }} />

                {/* Step number */}
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '48px', fontWeight: 800,
                  color: 'rgba(255,255,255,0.06)',
                  lineHeight: 1,
                  position: 'absolute', top: 16, right: 20,
                }}>
                  {step.n}
                </div>

                {/* Icon */}
                <div style={{
                  width: 48, height: 48,
                  borderRadius: 'var(--r-md)',
                  background: `${step.color}20`,
                  border: `1px solid ${step.color}35`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  <step.icon size={22} color={step.color} strokeWidth={1.75} />
                </div>

                <h3 style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '19px', fontWeight: 700,
                  color: '#fff', marginBottom: '12px',
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-inv-dim)', lineHeight: 1.75 }}>
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .process-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px)  { .process-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
