import { Zap, Lock, HeartHandshake, type LucideIcon } from 'lucide-react'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '../ui/ScrollReveal'
import { BackgroundOrbs } from '../ui/BackgroundOrbs'
import { useTilt } from '../../hooks/useTilt'

type PillarItem = { icon: LucideIcon; title: string; desc: string; stat: string; statLabel: string }

function PillarCard({ p, delay }: { p: PillarItem; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useTilt(ref, 9)
  return (
    <ScrollReveal delay={delay}>
      <div
        ref={ref}
        style={{
          border: '1px solid rgba(200,168,75,0.18)',
          borderRadius: '14px',
          overflow: 'hidden',
          height: '100%',
          background: '#0d1b2e',
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
          el.style.borderColor = 'rgba(200,168,75,0.18)'
          el.style.boxShadow = 'none'
        }}
      >
        <div style={{
          background: 'rgba(200,168,75,0.06)',
          borderBottom: '1px solid rgba(200,168,75,0.12)',
          padding: '24px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{
            width: 48, height: 48,
            borderRadius: '12px',
            background: 'rgba(200,168,75,0.1)',
            border: '1px solid rgba(200,168,75,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <p.icon size={22} color="#c8a84b" strokeWidth={1.75} />
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '36px', fontWeight: 800, color: '#fff', fontFamily: "'DM Sans', sans-serif", lineHeight: 1 }}>{p.stat}</div>
            <div style={{ fontSize: '11px', color: '#c8a84b', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '2px' }}>{p.statLabel}</div>
          </div>
        </div>

        <div style={{ padding: '28px' }}>
          <h3 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '18px', fontWeight: 700,
            color: '#ffffff',
            marginBottom: '12px',
          }}>
            {p.title}
          </h3>
          <p style={{ fontSize: '14px', color: '#8fa3bc', lineHeight: 1.75 }}>
            {p.desc}
          </p>
        </div>
      </div>
    </ScrollReveal>
  )
}

export function WhyUs() {
  const { t } = useTranslation()

  const pillars = [
    {
      icon: Zap,
      title: t('whyus.card1_title'),
      desc: t('whyus.card1_desc'),
      stat: '100%',
      statLabel: t('whyus.stat1_label'),
    },
    {
      icon: Lock,
      title: t('whyus.card2_title'),
      desc: t('whyus.card2_desc'),
      stat: '0',
      statLabel: t('whyus.stat2_label'),
    },
    {
      icon: HeartHandshake,
      title: t('whyus.card3_title'),
      desc: t('whyus.card3_desc'),
      stat: '8+',
      statLabel: t('whyus.stat3_label'),
    },
  ]

  return (
    <section
      className="section"
      style={{
        background: '#112240',
        overflow: 'hidden',
        position: 'relative',
        backgroundImage: `url('/bg/whyus-bg.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <BackgroundOrbs goldTop="-100px" goldRight="-60px" blueBottom="-120px" blueLeft="-40px" />
      <div aria-hidden style={{
        position: 'absolute',
        top: '10%', right: '0', bottom: '10%',
        width: '45%',
        backgroundImage: "url('/sections/whyus-metrics.svg')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center right',
        opacity: 0.45,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 64px' }}>
            <div className="section-label">{t('whyus.label')}</div>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '16px',
            }}>
              {t('whyus.h2_line1')}<br />
              <span className="gradient-text">{t('whyus.h2_line2')}</span>
            </h2>
            <p style={{ fontSize: '17px', color: '#8fa3bc', lineHeight: 1.7 }}>
              {t('whyus.body')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid-3" style={{ gap: 28 }}>
          {pillars.map((p, i) => (
            <PillarCard key={p.title} p={p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
