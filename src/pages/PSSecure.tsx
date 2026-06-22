import { useState } from 'react'
import { Shield, Zap, Eye, Lock, Smartphone, Globe, Wifi, CheckCircle, Download, Star, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Section } from '../components/layout/Section'
import { SectionLabel } from '../components/ui/SectionLabel'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { Badge } from '../components/ui/Badge'
import { useLang } from '../hooks/useLang'
import { usePageSeo } from '../hooks/usePageSeo'

const BASE = 'https://perfectps.com'

const SEO = {
  en: {
    title: 'PS Secure VPN — WireGuard VPN for iOS & Android | perfectPS',
    description:
      'PS Secure is a WireGuard-powered VPN for iOS and Android with a strict zero-log policy, AdGuard DNS filtering, and a kill switch. Fast, private, and built for the Middle East by perfectPS.',
  },
  ar: {
    title: 'PS Secure VPN — تطبيق VPN بـ WireGuard لـ iOS وAndroid | perfectPS',
    description:
      'PS Secure تطبيق VPN مبني على WireGuard لـ iOS وAndroid. سياسة صفرية السجلات وفلتر DNS من AdGuard ومفتاح إيقاع طارئ. سريع وخاص ومصمم للشرق الأوسط من perfectPS.',
  },
}

function HoverCard({
  children,
  style,
  hoverBorderColor = 'rgba(200,168,75,0.45)',
  hoverShadow = '0 8px 32px rgba(200,168,75,0.1)',
  baseBorderColor = 'rgba(200,168,75,0.18)',
}: {
  children: React.ReactNode
  style?: React.CSSProperties
  hoverBorderColor?: string
  hoverShadow?: string
  baseBorderColor?: string
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? hoverBorderColor : baseBorderColor}`,
        boxShadow: hovered ? hoverShadow : 'none',
        transition: 'border-color 220ms, box-shadow 220ms',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export function PSSecure() {
  const lang = useLang()
  const { t } = useTranslation()

  const seo = SEO[lang as 'en' | 'ar'] ?? SEO.en
  usePageSeo({
    title: seo.title,
    description: seo.description,
    canonical: `${BASE}/${lang}/ps-secure`,
    lang,
  })

  const features = [
    { icon: Zap,        title: t('pssecure.f1_title'), desc: t('pssecure.f1_desc') },
    { icon: Eye,        title: t('pssecure.f2_title'), desc: t('pssecure.f2_desc') },
    { icon: Shield,     title: t('pssecure.f3_title'), desc: t('pssecure.f3_desc') },
    { icon: Lock,       title: t('pssecure.f4_title'), desc: t('pssecure.f4_desc') },
    { icon: Smartphone, title: t('pssecure.f5_title'), desc: t('pssecure.f5_desc') },
    { icon: Globe,      title: t('pssecure.f6_title'), desc: t('pssecure.f6_desc') },
  ]

  const protocols = [
    {
      icon: Zap,
      name: t('pssecure.proto_wg_name'),
      badge: t('pssecure.proto_wg_badge'),
      tag: t('pssecure.proto_wg_tag'),
      desc: t('pssecure.proto_wg_desc'),
    },
    {
      icon: Shield,
      name: t('pssecure.proto_amnezia_name'),
      badge: t('pssecure.proto_amnezia_badge'),
      tag: t('pssecure.proto_amnezia_tag'),
      desc: t('pssecure.proto_amnezia_desc'),
    },
    {
      icon: Wifi,
      name: t('pssecure.proto_hysteria_name'),
      badge: t('pssecure.proto_hysteria_badge'),
      tag: t('pssecure.proto_hysteria_tag'),
      desc: t('pssecure.proto_hysteria_desc'),
    },
    {
      icon: Lock,
      name: t('pssecure.proto_trojan_name'),
      badge: t('pssecure.proto_trojan_badge'),
      tag: t('pssecure.proto_trojan_tag'),
      desc: t('pssecure.proto_trojan_desc'),
    },
  ]

  const stats = [
    { value: t('pssecure.stat_servers'),   label: t('pssecure.stat_servers_label') },
    { value: t('pssecure.stat_protocols'), label: t('pssecure.stat_protocols_label') },
    { value: t('pssecure.stat_devices'),   label: t('pssecure.stat_devices_label') },
    { value: t('pssecure.stat_uptime'),    label: t('pssecure.stat_uptime_label') },
  ]

  const freeFeatures = [
    t('pssecure.pricing_free_f1'),
    t('pssecure.pricing_free_f2'),
    t('pssecure.pricing_free_f3'),
    t('pssecure.pricing_free_f4'),
  ]

  const proFeatures = [
    t('pssecure.pricing_pro_f1'),
    t('pssecure.pricing_pro_f2'),
    t('pssecure.pricing_pro_f3'),
    t('pssecure.pricing_pro_f4'),
    t('pssecure.pricing_pro_f5'),
  ]

  const serverLocations = [
    { flag: '🇸🇦', name: 'Saudi Arabia', badge: 'Low latency' },
    { flag: '🇦🇪', name: 'UAE',          badge: 'Low latency' },
    { flag: '🇩🇪', name: 'Germany',      badge: 'Low latency' },
    { flag: '🇺🇸', name: 'United States', badge: 'Low latency' },
    { flag: '🇸🇬', name: 'Singapore',    badge: 'New' },
    { flag: '🇳🇱', name: 'Netherlands',  badge: 'Low latency' },
    { flag: '🇯🇵', name: 'Japan',        badge: 'New' },
    { flag: '🇬🇧', name: 'United Kingdom', badge: 'Low latency' },
  ]

  const steps = [
    { n: '1', title: t('pssecure.step1_title'), desc: t('pssecure.step1_desc') },
    { n: '2', title: t('pssecure.step2_title'), desc: t('pssecure.step2_desc') },
    { n: '3', title: t('pssecure.step3_title'), desc: t('pssecure.step3_desc') },
  ]

  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        background: '#0d1b2e',
        paddingTop: 'calc(72px + 80px)',
        paddingBottom: '96px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* radial gold gradient */}
        <div aria-hidden style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(200,168,75,0.09) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        {/* subtle grid texture */}
        <div aria-hidden style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(200,168,75,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,75,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <ScrollReveal>
            <div style={{ marginBottom: '20px' }}>
              <Badge variant="accent">{t('pssecure.hero_badge')}</Badge>
            </div>
            <h1 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(38px, 5.5vw, 68px)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-1.5px',
              lineHeight: 1.08,
              marginBottom: '22px',
            }}>
              {t('pssecure.hero_h1_line1')}<br />
              <span className="gradient-text">{t('pssecure.hero_h1_line2')}</span>
            </h1>
            <p style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.62)',
              maxWidth: '520px',
              margin: '0 auto 40px',
              lineHeight: 1.65,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {t('pssecure.hero_body')}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '56px' }}>
              <HeroCta to={`/${lang}/ps-secure/download`} primary>
                {t('pssecure.hero_cta_primary')}
              </HeroCta>
              <HeroCta to={`/${lang}/ps-secure/pricing`} primary={false}>
                {t('pssecure.hero_cta_secondary')}
              </HeroCta>
            </div>

            {/* Stat pills */}
            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              {stats.map((s) => (
                <StatPill key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Features ── */}
      <Section bg="white">
        <div className="container">
          <ScrollReveal>
            <SectionLabel>{t('pssecure.features_label')}</SectionLabel>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '56px',
              lineHeight: 1.12,
            }}>
              {t('pssecure.features_h2_line1')}<br />
              <span className="gradient-text--dark">{t('pssecure.features_h2_line2')}</span>
            </h2>
          </ScrollReveal>

          <div className="grid-3">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 70}>
                <HoverCard style={{
                  padding: '32px',
                  borderRadius: '16px',
                  background: 'rgba(17,34,64,0.6)',
                  height: '100%',
                  boxSizing: 'border-box',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(200,168,75,0.1)',
                    border: '1px solid rgba(200,168,75,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    flexShrink: 0,
                  }}>
                    <f.icon size={22} color="#c8a84b" strokeWidth={1.75} />
                  </div>
                  <h3 style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '17px',
                    fontWeight: 700,
                    marginBottom: '10px',
                    color: '#fff',
                  }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#8fa3bc', lineHeight: 1.65, margin: 0 }}>
                    {f.desc}
                  </p>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom link */}
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <GoldTextLink to={`/${lang}/ps-secure/features`}>
                {t('pssecure.view_features')}
              </GoldTextLink>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ── Protocols ── */}
      <Section bg="alt">
        <div className="container">
          <ScrollReveal>
            <SectionLabel>{t('pssecure.protocols_label')}</SectionLabel>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '16px',
              lineHeight: 1.12,
            }}>
              {t('pssecure.protocols_h2_line1')}<br />
              <span className="gradient-text">{t('pssecure.protocols_h2_line2')}</span>
            </h2>
            <p style={{
              fontSize: '17px',
              color: '#8fa3bc',
              maxWidth: '560px',
              lineHeight: 1.65,
              marginBottom: '56px',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {t('pssecure.protocols_body')}
            </p>
          </ScrollReveal>

          <div className="grid-2">
            {protocols.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 80}>
                <HoverCard style={{
                  padding: '28px 32px',
                  borderRadius: '16px',
                  background: '#0d1b2e',
                  height: '100%',
                  boxSizing: 'border-box',
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(200,168,75,0.1)',
                      border: '1px solid rgba(200,168,75,0.22)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <p.icon size={20} color="#c8a84b" strokeWidth={1.75} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                        <span style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#fff',
                        }}>
                          {p.name}
                        </span>
                        <span style={{
                          fontSize: '10px',
                          fontWeight: 700,
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                          color: '#c8a84b',
                          background: 'rgba(200,168,75,0.12)',
                          border: '1px solid rgba(200,168,75,0.28)',
                          borderRadius: '4px',
                          padding: '2px 7px',
                        }}>
                          {p.badge}
                        </span>
                      </div>
                      <span style={{
                        fontSize: '12px',
                        color: '#22D3EE',
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 600,
                      }}>
                        {p.tag}
                      </span>
                    </div>
                  </div>
                  <p style={{ fontSize: '14px', color: '#8fa3bc', lineHeight: 1.65, margin: 0 }}>
                    {p.desc}
                  </p>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <GoldTextLink to={`/${lang}/ps-secure/protocols`}>
                {t('pssecure.view_protocols')}
              </GoldTextLink>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ── Pricing Preview ── */}
      <Section bg="dark">
        <div className="container">
          <ScrollReveal>
            <SectionLabel>{t('pssecure.pricing_label')}</SectionLabel>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '16px',
              lineHeight: 1.12,
            }}>
              {t('pssecure.pricing_h2')}
            </h2>
            <p style={{
              fontSize: '17px',
              color: '#8fa3bc',
              maxWidth: '520px',
              lineHeight: 1.65,
              marginBottom: '56px',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {t('pssecure.pricing_body')}
            </p>
          </ScrollReveal>

          <div className="grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Free card */}
            <ScrollReveal delay={0}>
              <HoverCard
                baseBorderColor="rgba(143,163,188,0.2)"
                hoverBorderColor="rgba(143,163,188,0.45)"
                hoverShadow="0 8px 32px rgba(143,163,188,0.06)"
                style={{
                  padding: '36px',
                  borderRadius: '16px',
                  background: '#112240',
                  height: '100%',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ marginBottom: '24px' }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#8fa3bc', marginBottom: '10px' }}>
                    {t('pssecure.pricing_free_name')}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '44px', fontWeight: 800, color: '#fff', letterSpacing: '-1px' }}>
                      {t('pssecure.pricing_free_price')}
                    </span>
                    <span style={{ fontSize: '14px', color: '#8fa3bc', fontFamily: "'DM Sans', sans-serif" }}>
                      {t('pssecure.pricing_free_period')}
                    </span>
                  </div>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {freeFeatures.map((feat) => (
                    <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle size={16} color="#8fa3bc" strokeWidth={2} />
                      <span style={{ fontSize: '14px', color: '#8fa3bc', fontFamily: "'DM Sans', sans-serif" }}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </HoverCard>
            </ScrollReveal>

            {/* Pro card */}
            <ScrollReveal delay={100}>
              <HoverCard
                baseBorderColor="rgba(200,168,75,0.4)"
                hoverBorderColor="rgba(200,168,75,0.7)"
                hoverShadow="0 8px 48px rgba(200,168,75,0.18)"
                style={{
                  padding: '36px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #112240 0%, #162d4a 100%)',
                  boxShadow: '0 0 40px rgba(200,168,75,0.1)',
                  height: '100%',
                  boxSizing: 'border-box',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* glow accent */}
                <div aria-hidden style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(200,168,75,0.15) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />

                <div style={{ position: 'relative', zIndex: 1, marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#c8a84b', margin: 0 }}>
                      {t('pssecure.pricing_pro_name')}
                    </p>
                    <Star size={13} color="#c8a84b" fill="#c8a84b" />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '6px' }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '44px', fontWeight: 800, color: '#fff', letterSpacing: '-1px' }}>
                      {t('pssecure.pricing_pro_price')}
                    </span>
                    <span style={{ fontSize: '14px', color: '#8fa3bc', fontFamily: "'DM Sans', sans-serif" }}>
                      {t('pssecure.pricing_pro_period')}
                    </span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#c8a84b', fontFamily: "'DM Sans', sans-serif", margin: 0 }}>
                    {t('pssecure.pricing_yearly_note')}
                  </p>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative', zIndex: 1 }}>
                  {proFeatures.map((feat) => (
                    <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle size={16} color="#c8a84b" strokeWidth={2} />
                      <span style={{ fontSize: '14px', color: '#fff', fontFamily: "'DM Sans', sans-serif" }}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </HoverCard>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <GoldTextLink to={`/${lang}/ps-secure/pricing`}>
                {t('pssecure.view_pricing')}
              </GoldTextLink>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ── Server Locations ── */}
      <Section bg="white">
        <div className="container">
          <ScrollReveal>
            <SectionLabel>{t('pssecure.servers_label')}</SectionLabel>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '16px',
              lineHeight: 1.12,
            }}>
              {t('pssecure.servers_h2')}
            </h2>
            <p style={{
              fontSize: '17px',
              color: '#8fa3bc',
              maxWidth: '520px',
              lineHeight: 1.65,
              marginBottom: '48px',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {t('pssecure.servers_body')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
            }}>
              {serverLocations.map((loc, i) => (
                <ServerPill key={loc.name} flag={loc.flag} name={loc.name} badge={loc.badge} delay={i * 40} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ── Security Pillars ── */}
      <Section bg="alt">
        <div className="container">
          <ScrollReveal>
            <SectionLabel>{t('pssecure.security_label')}</SectionLabel>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '56px',
              lineHeight: 1.12,
            }}>
              {t('pssecure.security_h2_line1')}<br />
              <span className="gradient-text">{t('pssecure.security_h2_line2')}</span>
            </h2>
          </ScrollReveal>

          <div className="grid-3">
            {/* Zero-Log Policy */}
            <ScrollReveal delay={0}>
              <SecurityPillar
                icon={Eye}
                title={t('pssecure.security_nologs_title')}
                desc={t('pssecure.security_nologs_desc')}
              />
            </ScrollReveal>
            {/* Open Source */}
            <ScrollReveal delay={100}>
              <SecurityPillar
                icon={Shield}
                title={t('pssecure.security_open_title')}
                desc={t('pssecure.security_open_desc')}
              />
            </ScrollReveal>
            {/* AES-256 */}
            <ScrollReveal delay={200}>
              <SecurityPillar
                icon={Lock}
                title={t('pssecure.security_encrypt_title')}
                desc={t('pssecure.security_encrypt_desc')}
              />
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* ── How it Works ── */}
      <Section bg="dark">
        <div className="container">
          <ScrollReveal>
            <SectionLabel>{t('pssecure.steps_label')}</SectionLabel>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '56px',
              lineHeight: 1.12,
            }}>
              {t('pssecure.steps_h2')}
            </h2>
          </ScrollReveal>

          <div className="grid-3">
            {steps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 100}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: '#c8a84b',
                    color: '#0d1b2e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '20px',
                    fontWeight: 800,
                    flexShrink: 0,
                  }}>
                    {step.n}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '17px',
                      fontWeight: 700,
                      marginBottom: '10px',
                      color: '#fff',
                    }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#8fa3bc', lineHeight: 1.65, margin: 0 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Download CTA ── */}
      <Section bg="white">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <SectionLabel>{t('pssecure.download_label')}</SectionLabel>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '16px',
              lineHeight: 1.1,
            }}>
              {t('pssecure.download_h2')}
            </h2>
            <p style={{
              fontSize: '17px',
              color: '#8fa3bc',
              maxWidth: '480px',
              margin: '0 auto 40px',
              lineHeight: 1.65,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {t('pssecure.download_body')}
            </p>

            {/* Coming Soon pills */}
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
              <ComingSoonPill label={t('pssecure.download_ios')} />
              <ComingSoonPill label={t('pssecure.download_android')} />
            </div>

            <p style={{ fontSize: '13px', color: 'rgba(143,163,188,0.6)', marginBottom: '32px', fontFamily: "'DM Sans', sans-serif" }}>
              {t('pssecure.download_coming_soon')}
            </p>

            <GoldTextLink to={`/${lang}/ps-secure/download`}>
              {t('pssecure.view_download')}
            </GoldTextLink>
          </ScrollReveal>
        </div>
      </Section>
    </>
  )
}

/* ─── Sub-components ─────────────────────────────────────────── */

function HeroCta({ to, primary, children }: { to: string; primary: boolean; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false)

  if (primary) {
    return (
      <Link
        to={to}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding: '14px 32px',
          background: hovered ? '#e0c068' : '#c8a84b',
          color: '#0d1b2e',
          borderRadius: '8px',
          fontSize: '15px',
          fontWeight: 700,
          fontFamily: "'DM Sans', sans-serif",
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          transition: 'background 200ms',
        }}
      >
        {children}
        <Download size={15} strokeWidth={2.2} />
      </Link>
    )
  }

  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '14px 32px',
        background: 'transparent',
        color: '#fff',
        border: `1.5px solid ${hovered ? '#c8a84b' : 'rgba(255,255,255,0.22)'}`,
        borderRadius: '8px',
        fontSize: '15px',
        fontWeight: 600,
        fontFamily: "'DM Sans', sans-serif",
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        transition: 'border-color 200ms',
      }}
    >
      {children}
      <ChevronRight size={15} strokeWidth={2.2} />
    </Link>
  )
}

function StatPill({ value, label }: { value: string; label: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '12px 22px',
        background: 'rgba(200,168,75,0.07)',
        border: `1px solid ${hovered ? 'rgba(200,168,75,0.45)' : 'rgba(200,168,75,0.18)'}`,
        borderRadius: '100px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        transition: 'border-color 220ms',
        cursor: 'default',
      }}
    >
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '18px',
        fontWeight: 800,
        color: '#c8a84b',
        letterSpacing: '-0.5px',
      }}>
        {value}
      </span>
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '13px',
        color: '#8fa3bc',
        fontWeight: 600,
      }}>
        {label}
      </span>
    </div>
  )
}

function SecurityPillar({ icon: Icon, title, desc }: { icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>; title: string; desc: string }) {
  return (
    <div style={{ textAlign: 'center', padding: '8px 16px' }}>
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        background: 'rgba(200,168,75,0.12)',
        border: '1.5px solid rgba(200,168,75,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 20px',
      }}>
        <Icon size={26} color="#c8a84b" strokeWidth={1.75} />
      </div>
      <h3 style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '17px',
        fontWeight: 700,
        color: '#fff',
        marginBottom: '12px',
      }}>
        {title}
      </h3>
      <p style={{ fontSize: '14px', color: '#8fa3bc', lineHeight: 1.65, margin: 0 }}>
        {desc}
      </p>
    </div>
  )
}

function ServerPill({ flag, name, badge, delay }: { flag: string; name: string; badge: string; delay: number }) {
  const [hovered, setHovered] = useState(false)
  const isNew = badge === 'New'
  return (
    <ScrollReveal delay={delay} style={{ display: 'inline-block' }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 18px',
          borderRadius: '100px',
          background: hovered ? 'rgba(200,168,75,0.08)' : 'rgba(17,34,64,0.6)',
          border: `1px solid ${hovered ? 'rgba(200,168,75,0.45)' : 'rgba(200,168,75,0.18)'}`,
          transition: 'background 220ms, border-color 220ms',
          cursor: 'default',
        }}
      >
        <span style={{ fontSize: '18px', lineHeight: 1 }}>{flag}</span>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '14px',
          fontWeight: 600,
          color: '#fff',
        }}>
          {name}
        </span>
        <span style={{
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.8px',
          textTransform: 'uppercase',
          color: isNew ? '#22D3EE' : '#c8a84b',
          background: isNew ? 'rgba(34,211,238,0.1)' : 'rgba(200,168,75,0.1)',
          border: `1px solid ${isNew ? 'rgba(34,211,238,0.25)' : 'rgba(200,168,75,0.25)'}`,
          borderRadius: '4px',
          padding: '2px 6px',
        }}>
          {badge}
        </span>
      </div>
    </ScrollReveal>
  )
}

function GoldTextLink({ to, children }: { to: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '15px',
        fontWeight: 700,
        color: hovered ? '#e0c068' : '#c8a84b',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        transition: 'color 200ms',
      }}
    >
      {children}
    </Link>
  )
}

function ComingSoonPill({ label }: { label: string }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '12px 24px',
      borderRadius: '12px',
      background: 'rgba(17,34,64,0.8)',
      border: '1px solid rgba(200,168,75,0.18)',
      cursor: 'not-allowed',
      opacity: 0.7,
    }}>
      <Download size={16} color="#8fa3bc" strokeWidth={1.75} />
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '14px',
        fontWeight: 700,
        color: '#8fa3bc',
      }}>
        {label}
      </span>
    </div>
  )
}
