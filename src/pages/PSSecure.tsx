import { Shield, Eye, Zap, Smartphone, Globe, Lock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Section } from '../components/layout/Section'
import { useLang } from '../hooks/useLang'
import { SectionLabel } from '../components/ui/SectionLabel'
import { Badge } from '../components/ui/Badge'
import { ScrollReveal } from '../components/ui/ScrollReveal'

export function PSSecure() {
  const lang = useLang()
  const { t } = useTranslation()

  const features = [
    { icon: Zap,        title: t('pssecure.f1_title'), desc: t('pssecure.f1_desc') },
    { icon: Eye,        title: t('pssecure.f2_title'), desc: t('pssecure.f2_desc') },
    { icon: Shield,     title: t('pssecure.f3_title'), desc: t('pssecure.f3_desc') },
    { icon: Lock,       title: t('pssecure.f4_title'), desc: t('pssecure.f4_desc') },
    { icon: Smartphone, title: t('pssecure.f5_title'), desc: t('pssecure.f5_desc') },
    { icon: Globe,      title: t('pssecure.f6_title'), desc: t('pssecure.f6_desc') },
  ]

  const steps = [
    { n: '1', title: t('pssecure.step1_title'), desc: t('pssecure.step1_desc') },
    { n: '2', title: t('pssecure.step2_title'), desc: t('pssecure.step2_desc') },
    { n: '3', title: t('pssecure.step3_title'), desc: t('pssecure.step3_desc') },
  ]

  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'var(--navy)',
        paddingTop: 'calc(72px + 80px)',
        paddingBottom: '96px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200,168,75,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ marginBottom: '20px' }}>
            <Badge variant="accent">{t('pssecure.hero_badge')}</Badge>
          </div>
          <h1 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-1.5px',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}>
            {t('pssecure.hero_h1_line1')}<br />
            <span className="gradient-text">{t('pssecure.hero_h1_line2')}</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: '0 auto 40px' }}>
            {t('pssecure.hero_body')}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`/${lang}/#contact`} style={{
              padding: '14px 32px',
              background: '#c8a84b',
              color: '#0d1b2e',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              transition: 'background 200ms',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e0c068' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#c8a84b' }}
            >
              {t('pssecure.hero_cta_primary')}
            </a>
            <a href={`/${lang}/#contact`} style={{
              padding: '14px 32px',
              background: 'transparent',
              color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.25)',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              transition: 'border-color 200ms',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#c8a84b' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)' }}
            >
              {t('pssecure.hero_cta_secondary')}
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <Section bg="white">
        <div className="container">
          <ScrollReveal>
            <SectionLabel>{t('pssecure.features_label')}</SectionLabel>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '48px',
              lineHeight: 1.15,
            }}>
              {t('pssecure.features_h2_line1')}<br />
              <span className="gradient-text--dark">{t('pssecure.features_h2_line2')}</span>
            </h2>
          </ScrollReveal>
          <div className="grid-3">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 70}>
                <div style={{
                  padding: '32px',
                  border: '1px solid rgba(200,168,75,0.18)',
                  borderRadius: '16px',
                  height: '100%',
                  background: '#f8f9fa',
                  transition: 'border-color 200ms, box-shadow 200ms',
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(200,168,75,0.45)'; el.style.boxShadow = '0 8px 32px rgba(200,168,75,0.08)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(200,168,75,0.18)'; el.style.boxShadow = 'none' }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(200,168,75,0.1)',
                    border: '1px solid rgba(200,168,75,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                  }}>
                    <f.icon size={22} color="#c8a84b" strokeWidth={1.75} />
                  </div>
                  <h3 style={{ fontFamily: "'DM Sans'", fontSize: '17px', fontWeight: 700, marginBottom: '10px', color: '#0d1b2e' }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#4a5568', lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section bg="alt">
        <div className="container">
          <ScrollReveal>
            <SectionLabel>{t('pssecure.steps_label')}</SectionLabel>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800,
              color: 'var(--text-1)',
              marginBottom: '56px',
              lineHeight: 1.15,
            }}>
              {t('pssecure.steps_h2')}
            </h2>
          </ScrollReveal>
          <div className="grid-3">
            {steps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 100}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: '#c8a84b',
                    color: '#0d1b2e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'DM Sans'",
                    fontSize: '18px',
                    fontWeight: 800,
                    flexShrink: 0,
                  }}>
                    {step.n}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'DM Sans'", fontSize: '17px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-1)' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'DM Sans'", fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
            {t('pssecure.cta_h2')}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', marginBottom: '40px' }}>
            {t('pssecure.cta_body')}
          </p>
          <a href={`/${lang}/#contact`} style={{
            padding: '16px 40px',
            background: '#c8a84b',
            color: '#0d1b2e',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 700,
            fontFamily: "'DM Sans'",
            display: 'inline-block',
            transition: 'background 200ms',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e0c068' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#c8a84b' }}
          >
            {t('pssecure.cta_btn')}
          </a>
        </div>
      </Section>
    </>
  )
}
