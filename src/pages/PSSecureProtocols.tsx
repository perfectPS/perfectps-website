import { Shield, Zap, Globe, Lock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Section } from '../components/layout/Section'
import { SectionLabel } from '../components/ui/SectionLabel'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { Badge } from '../components/ui/Badge'
import { useLang } from '../hooks/useLang'
import { usePageSeo } from '../hooks/usePageSeo'

const BASE = 'https://perfectps.com'

interface Protocol {
  id: string
  name: string
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>
  badge: string
  tag: string
  titleKey: string
  bodyKey: string
  useKey: string
  bg: 'white' | 'alt'
}

export function PSSecureProtocols() {
  const lang = useLang()
  const { t } = useTranslation()

  usePageSeo({
    title: 'VPN Protocols — WireGuard, Hysteria2, Trojan | PS Secure',
    description: t('pssecure.protocols_page_body'),
    canonical: `${BASE}/${lang}/ps-secure/protocols`,
    lang,
  })

  const protocols: Protocol[] = [
    {
      id: 'wg',
      name: 'WireGuard',
      icon: Zap,
      badge: 'Fast',
      tag: 'Default',
      titleKey: 'pssecure.proto_detail_wg_title',
      bodyKey: 'pssecure.proto_detail_wg_body',
      useKey: 'pssecure.proto_detail_wg_use',
      bg: 'white',
    },
    {
      id: 'amnezia',
      name: 'AmneziaWG',
      icon: Shield,
      badge: 'Obfuscated',
      tag: 'Stealth',
      titleKey: 'pssecure.proto_detail_amnezia_title',
      bodyKey: 'pssecure.proto_detail_amnezia_body',
      useKey: 'pssecure.proto_detail_amnezia_use',
      bg: 'alt',
    },
    {
      id: 'hysteria',
      name: 'Hysteria2',
      icon: Globe,
      badge: 'QUIC/UDP',
      tag: 'High Latency',
      titleKey: 'pssecure.proto_detail_hysteria_title',
      bodyKey: 'pssecure.proto_detail_hysteria_body',
      useKey: 'pssecure.proto_detail_hysteria_use',
      bg: 'white',
    },
    {
      id: 'trojan',
      name: 'Trojan',
      icon: Lock,
      badge: 'TLS',
      tag: 'Censorship',
      titleKey: 'pssecure.proto_detail_trojan_title',
      bodyKey: 'pssecure.proto_detail_trojan_body',
      useKey: 'pssecure.proto_detail_trojan_use',
      bg: 'alt',
    },
  ]

  const waterfallSteps = [
    { name: 'WireGuard',   badge: 'Fast' },
    { name: 'AmneziaWG',  badge: 'Obfuscated' },
    { name: 'Hysteria2',  badge: 'QUIC/UDP' },
    { name: 'Trojan',     badge: 'TLS' },
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
          <SectionLabel>{t('pssecure.protocols_page_label')}</SectionLabel>
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
            {t('pssecure.protocols_page_h2_line1')}
            <br />
            <span className="gradient-text">{t('pssecure.protocols_page_h2_line2')}</span>
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            {t('pssecure.protocols_page_body')}
          </p>
        </div>
      </section>

      {/* Protocol detail sections */}
      {protocols.map((proto) => {
        const Icon = proto.icon
        return (
          <Section key={proto.id} bg={proto.bg}>
            <div className="container">
              <ScrollReveal>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '280px 1fr',
                    gap: '48px',
                    alignItems: 'center',
                  }}
                >
                  {/* Left side */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '18px',
                        background: 'rgba(250,204,21,0.1)',
                        border: '1px solid rgba(250,204,21,0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={32} color="#FACC15" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '24px',
                          fontWeight: 800,
                          color: '#fff',
                          marginBottom: '10px',
                        }}
                      >
                        {proto.name}
                      </p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <Badge variant="gold">{proto.badge}</Badge>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '3px 10px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: 600,
                            background: 'rgba(34,211,238,0.1)',
                            color: '#22D3EE',
                            border: '1px solid rgba(34,211,238,0.25)',
                          }}
                        >
                          {proto.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right side */}
                  <div>
                    <h2
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 'clamp(22px, 3vw, 32px)',
                        fontWeight: 800,
                        color: '#fff',
                        marginBottom: '16px',
                        lineHeight: 1.2,
                      }}
                    >
                      {t(proto.titleKey)}
                    </h2>
                    <p
                      style={{
                        fontSize: '16px',
                        color: '#8fa3bc',
                        lineHeight: 1.7,
                        marginBottom: '24px',
                      }}
                    >
                      {t(proto.bodyKey)}
                    </p>
                    <div
                      style={{
                        padding: '20px 24px',
                        borderRadius: '12px',
                        border: '1px solid rgba(250,204,21,0.18)',
                        background: 'rgba(250,204,21,0.05)',
                        borderLeft: '3px solid #FACC15',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '11px',
                          color: '#FACC15',
                          fontWeight: 600,
                          fontFamily: "'DM Sans', sans-serif",
                          marginBottom: '4px',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                        }}
                      >
                        Best for
                      </p>
                      <p style={{ fontSize: '15px', color: '#fff', lineHeight: 1.6 }}>
                        {t(proto.useKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Section>
        )
      })}

      {/* Auto-selection waterfall */}
      <Section bg="dark">
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <SectionLabel>{t('pssecure.proto_waterfall_label')}</SectionLabel>
              <h2
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: 800,
                  color: '#fff',
                  marginBottom: '16px',
                  marginTop: '16px',
                  lineHeight: 1.15,
                }}
              >
                {t('pssecure.proto_waterfall_title')}
              </h2>
              <p
                style={{
                  fontSize: '17px',
                  color: '#8fa3bc',
                  maxWidth: '560px',
                  margin: '0 auto',
                }}
              >
                {t('pssecure.proto_waterfall_body')}
              </p>
            </div>
          </ScrollReveal>

          {/* Waterfall visual */}
          <div
            style={{
              maxWidth: '420px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0',
            }}
          >
            {waterfallSteps.map((step, i) => (
              <ScrollReveal key={step.name} delay={i * 100} style={{ width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {/* Step row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      width: '100%',
                      padding: '16px 24px',
                      background: '#112240',
                      border: '1px solid rgba(250,204,21,0.18)',
                      borderRadius: '12px',
                    }}
                  >
                    {/* Number circle */}
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: i === 0 ? '#FACC15' : 'rgba(250,204,21,0.15)',
                        border: i === 0 ? 'none' : '1px solid rgba(250,204,21,0.35)',
                        color: i === 0 ? '#0d1b2e' : '#FACC15',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '16px',
                        fontWeight: 800,
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </div>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '17px',
                        fontWeight: 700,
                        color: '#fff',
                        flex: 1,
                      }}
                    >
                      {step.name}
                    </span>
                    <Badge variant="gold">{step.badge}</Badge>
                  </div>

                  {/* Dashed connector */}
                  {i < waterfallSteps.length - 1 && (
                    <div
                      style={{
                        width: '2px',
                        height: '32px',
                        borderLeft: '2px dashed rgba(250,204,21,0.35)',
                      }}
                    />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="white">
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
