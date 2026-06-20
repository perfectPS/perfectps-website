import { Search, Layers, Code2, Rocket, type LucideIcon } from 'lucide-react'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '../ui/ScrollReveal'
import { BackgroundOrbs } from '../ui/BackgroundOrbs'
import { useTilt } from '../../hooks/useTilt'

type StepItem = { n: string; icon: LucideIcon; title: string; desc: string }

function StepCard({ step, delay }: { step: StepItem; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useTilt(ref, 8)
  return (
    <ScrollReveal delay={delay}>
      <div
        ref={ref}
        style={{
          padding: '36px 28px',
          background: '#f8fafc',
          border: '1px solid rgba(200,168,75,0.18)',
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
          color: 'rgba(200,168,75,0.15)',
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
          color: '#0d1b2e', marginBottom: '12px',
        }}>
          {step.title}
        </h3>
        <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.75 }}>
          {step.desc}
        </p>
      </div>
    </ScrollReveal>
  )
}

export function Process() {
  const { t } = useTranslation()

  const steps: StepItem[] = [
    {
      n: '01', icon: Search, title: t('process.step1_title'),
      desc: t('process.step1_desc'),
    },
    {
      n: '02', icon: Layers, title: t('process.step2_title'),
      desc: t('process.step2_desc'),
    },
    {
      n: '03', icon: Code2, title: t('process.step3_title'),
      desc: t('process.step3_desc'),
    },
    {
      n: '04', icon: Rocket, title: t('process.step4_title'),
      desc: t('process.step4_desc'),
    },
  ]

  return (
    <section
      className="section"
      style={{
        background: '#ffffff',
        overflow: 'hidden',
        position: 'relative',
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
            <div className="section-label">{t('process.label')}</div>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              color: '#0d1b2e',
              marginBottom: '16px',
            }}>
              {t('process.h2_line1')}<br />
              <span className="gradient-text--gold">{t('process.h2_line2')}</span>
            </h2>
            <p style={{ fontSize: '17px', color: '#64748b', lineHeight: 1.7 }}>
              {t('process.body')}
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
