import {
  Eye,
  Shield,
  Lock,
  KeyRound,
  Zap,
  RefreshCw,
  Server,
  EyeOff,
  Wifi,
  Globe,
  Smartphone,
  Layers,
  Moon,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Section } from '../components/layout/Section'
import { SectionLabel } from '../components/ui/SectionLabel'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { useLang } from '../hooks/useLang'
import { usePageSeo } from '../hooks/usePageSeo'

const BASE = 'https://perfectps.com'

interface FeatureCardProps {
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>
  title: string
  desc: string
}

function FeatureCard({ icon: Icon, title, desc }: FeatureCardProps) {
  return (
    <div
      style={{
        background: '#112240',
        border: '1px solid rgba(250,204,21,0.18)',
        borderRadius: '14px',
        padding: '32px',
        height: '100%',
        transition: 'border-color 200ms, box-shadow 200ms',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'rgba(250,204,21,0.45)'
        el.style.boxShadow = '0 8px 32px rgba(250,204,21,0.08)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'rgba(250,204,21,0.18)'
        el.style.boxShadow = 'none'
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          background: 'rgba(250,204,21,0.1)',
          border: '1px solid rgba(250,204,21,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '18px',
        }}
      >
        <Icon size={22} color="#FACC15" strokeWidth={1.75} />
      </div>
      <h3
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '17px',
          fontWeight: 700,
          marginBottom: '10px',
          color: '#fff',
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: '14px', color: '#8fa3bc', lineHeight: 1.65 }}>{desc}</p>
    </div>
  )
}

export function PSSecureFeatures() {
  const lang = useLang()
  const { t } = useTranslation()

  usePageSeo({
    title: 'PS Secure Features — Privacy, Speed & Censorship Bypass | PerfectPS',
    description: t('pssecure.features_page_body'),
    canonical: `${BASE}/${lang}/ps-secure/features`,
    lang,
  })

  const privacyFeatures = [
    { icon: Eye,      title: t('pssecure.feat_nologs_title'), desc: t('pssecure.feat_nologs_desc') },
    { icon: Shield,   title: t('pssecure.feat_ks_title'),     desc: t('pssecure.feat_ks_desc') },
    { icon: Lock,     title: t('pssecure.feat_dns_title'),    desc: t('pssecure.feat_dns_desc') },
    { icon: KeyRound, title: t('pssecure.feat_aes_title'),    desc: t('pssecure.feat_aes_desc') },
  ]

  const speedFeatures = [
    { icon: Zap,       title: t('pssecure.feat_speed_title'), desc: t('pssecure.feat_speed_desc') },
    { icon: RefreshCw, title: t('pssecure.feat_auto_title'),  desc: t('pssecure.feat_auto_desc') },
    { icon: Server,    title: t('pssecure.feat_lb_title'),    desc: t('pssecure.feat_lb_desc') },
  ]

  const bypassFeatures = [
    { icon: EyeOff, title: t('pssecure.feat_stealth_title'),      desc: t('pssecure.feat_stealth_desc') },
    { icon: Wifi,   title: t('pssecure.feat_auto_bypass_title'),  desc: t('pssecure.feat_auto_bypass_desc') },
    { icon: Globe,  title: t('pssecure.feat_region_title'),       desc: t('pssecure.feat_region_desc') },
  ]

  const uxFeatures = [
    { icon: Smartphone, title: t('pssecure.feat_1tap_title'),      desc: t('pssecure.feat_1tap_desc') },
    { icon: Layers,     title: t('pssecure.feat_multidev_title'),  desc: t('pssecure.feat_multidev_desc') },
    { icon: RefreshCw,  title: t('pssecure.feat_reconnect_title'), desc: t('pssecure.feat_reconnect_desc') },
    { icon: Moon,       title: t('pssecure.feat_dark_title'),      desc: t('pssecure.feat_dark_desc') },
  ]

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: '#0d1b2e',
          paddingTop: 'calc(72px + 80px)',
          paddingBottom: '96px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(250,204,21,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <SectionLabel>{t('pssecure.features_page_label')}</SectionLabel>
          <h1
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              marginBottom: '20px',
              marginTop: '16px',
            }}
          >
            {t('pssecure.features_page_h2_line1')}
            <br />
            <span className="gradient-text">{t('pssecure.features_page_h2_line2')}</span>
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            {t('pssecure.features_page_body')}
          </p>
        </div>
      </section>

      {/* Privacy & Security */}
      <Section bg="white">
        <div className="container">
          <ScrollReveal>
            <SectionLabel>{t('pssecure.features_cat1')}</SectionLabel>
          </ScrollReveal>
          <div className="grid-2" style={{ marginTop: '32px' }}>
            {privacyFeatures.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 70}>
                <FeatureCard icon={f.icon} title={f.title} desc={f.desc} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Speed & Performance */}
      <Section bg="alt">
        <div className="container">
          <ScrollReveal>
            <SectionLabel>{t('pssecure.features_cat2')}</SectionLabel>
          </ScrollReveal>
          <div className="grid-3" style={{ marginTop: '32px' }}>
            {speedFeatures.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 70}>
                <FeatureCard icon={f.icon} title={f.title} desc={f.desc} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Censorship Bypass */}
      <Section bg="dark">
        <div className="container">
          <ScrollReveal>
            <SectionLabel>{t('pssecure.features_cat3')}</SectionLabel>
          </ScrollReveal>
          <div className="grid-3" style={{ marginTop: '32px' }}>
            {bypassFeatures.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 70}>
                <FeatureCard icon={f.icon} title={f.title} desc={f.desc} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* User Experience */}
      <Section bg="white">
        <div className="container">
          <ScrollReveal>
            <SectionLabel>{t('pssecure.features_cat4')}</SectionLabel>
          </ScrollReveal>
          <div className="grid-2" style={{ marginTop: '32px' }}>
            {uxFeatures.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 70}>
                <FeatureCard icon={f.icon} title={f.title} desc={f.desc} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <Link
              to={`/${lang}/ps-secure/download`}
              style={{
                display: 'inline-block',
                padding: '16px 40px',
                background: '#FACC15',
                color: '#0d1b2e',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
                textDecoration: 'none',
                transition: 'background 200ms',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.background = '#FDE047'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.background = '#FACC15'
              }}
            >
              {t('pssecure.download_cta')}
            </Link>
          </ScrollReveal>
        </div>
      </Section>
    </>
  )
}
