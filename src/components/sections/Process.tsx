import { Search, Layers, Code2, Rocket } from 'lucide-react'
import { useRef } from 'react'
import { ScrollReveal } from '../ui/ScrollReveal'
import { BackgroundOrbs } from '../ui/BackgroundOrbs'
import { useTilt } from '../../hooks/useTilt'

const steps = [
  {
    n: '01', icon: Search, title: 'Discover',
    desc: 'We start by understanding your business goals, users, and constraints — not jumping straight to code. A clear brief saves weeks of rework.',
  },
  {
    n: '02', icon: Layers, title: 'Design',
    desc: 'Architecture decisions, UI systems, and prototypes. We align on the plan before writing a single production line, so you can see it before we build it.',
  },
  {
    n: '03', icon: Code2, title: 'Build',
    desc: 'Iterative development in tight sprints. Regular check-ins, live previews, and test coverage at every stage. No black-box development.',
  },
  {
    n: '04', icon: Rocket, title: 'Launch',
    desc: "Production deploy, monitoring setup, and post-launch support. We don't hand you a zip file — we ship it, measure it, and stay on until it's stable.",
  },
]

function StepCard({ step, delay }: { step: typeof steps[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useTilt(ref, 8)
  return (
    <ScrollReveal delay={delay}>
      <div
        ref={ref}
        style={{
          padding: '36px 28px',
          background: '#0d1b2e',
          border: '1px solid rgba(200,168,75,0.15)',
          borderRadius: '14px',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          transition: 'border-color 200ms, box-shadow 200ms',
          transformStyle: 'preserve-3d',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = 'rgba(200,168,75,0.45)'
          el.style.boxShadow = '0 8px 32px rgba(200,168,75,0.08)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = 'rgba(200,168,75,0.15)'
          el.style.boxShadow = 'none'
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #c8a84b, transparent)' }} />

        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '52px', fontWeight: 800,
          color: 'rgba(200,168,75,0.12)',
          lineHeight: 1,
          position: 'absolute', top: 14, right: 18,
          userSelect: 'none',
        }}>
          {step.n}
        </div>

        <div style={{
          width: 48, height: 48,
          borderRadius: '12px',
          background: 'rgba(200,168,75,0.1)',
          border: '1px solid rgba(200,168,75,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '20px',
        }}>
          <step.icon size={22} color="#c8a84b" strokeWidth={1.75} />
        </div>

        <h3 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '19px', fontWeight: 700,
          color: '#fff', marginBottom: '12px',
        }}>
          {step.title}
        </h3>
        <p style={{ fontSize: '14px', color: '#8fa3bc', lineHeight: 1.75 }}>
          {step.desc}
        </p>
      </div>
    </ScrollReveal>
  )
}

export function Process() {
  return (
    <section
      className="section"
      style={{
        background: '#112240',
        overflow: 'hidden',
        position: 'relative',
        backgroundImage: `url('/bg/process-bg.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div aria-hidden style={{
        position: 'absolute',
        bottom: '0', left: '0', right: '0',
        height: '60%',
        backgroundImage: "url('/sections/process-flow.svg')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <BackgroundOrbs goldTop="-80px" goldRight="-100px" blueBottom="-80px" blueLeft="-100px" />

      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(200,168,75,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,168,75,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 56px' }}>
            <div className="section-label">How We Work</div>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '16px',
            }}>
              From Idea to<br />
              <span className="gradient-text">Shipped Product</span>
            </h2>
            <p style={{ fontSize: '17px', color: '#8fa3bc', lineHeight: 1.7 }}>
              A proven 4-step process that keeps every project on track, on budget, and on time.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }} className="process-grid">
          {steps.map((step, i) => (
            <StepCard key={step.n} step={step} delay={i * 90} />
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
