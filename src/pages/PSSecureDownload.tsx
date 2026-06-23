import { CheckCircle, Smartphone, ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Section } from '../components/layout/Section'
import { SectionLabel } from '../components/ui/SectionLabel'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { Badge } from '../components/ui/Badge'
import { useLang } from '../hooks/useLang'
import { usePageSeo } from '../hooks/usePageSeo'

const BASE = 'https://perfectps.com'

export function PSSecureDownload() {
  const lang = useLang()
  const { t } = useTranslation()

  usePageSeo({
    title: 'Download PS Secure VPN — iOS & Android | PerfectPS',
    description: t('pssecure.download_page_body'),
    canonical: `${BASE}/${lang}/ps-secure/download`,
    lang,
  })

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
          <SectionLabel>{t('pssecure.download_page_label')}</SectionLabel>
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
            {t('pssecure.download_page_h2_line1')}
            <br />
            <span className="gradient-text">{t('pssecure.download_page_h2_line2')}</span>
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '520px',
              margin: '0 auto 32px',
            }}
          >
            {t('pssecure.download_page_body')}
          </p>

          {/* Info pills */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '8px',
            }}
          >
            {[
              t('pssecure.download_version'),
              t('pssecure.download_size_ios'),
              t('pssecure.download_size_android'),
            ].map(pill => (
              <span
                key={pill}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '5px 14px',
                  borderRadius: '100px',
                  fontSize: '12px',
                  fontWeight: 600,
                  fontFamily: "'DM Sans', sans-serif",
                  background: 'rgba(250,204,21,0.1)',
                  border: '1px solid rgba(250,204,21,0.25)',
                  color: '#FACC15',
                }}
              >
                {pill}
              </span>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {[
              t('pssecure.download_req_ios'),
              t('pssecure.download_req_android'),
            ].map(req => (
              <span
                key={req}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '5px 14px',
                  borderRadius: '100px',
                  fontSize: '12px',
                  fontFamily: "'DM Sans', sans-serif",
                  background: 'rgba(143,163,188,0.08)',
                  border: '1px solid rgba(143,163,188,0.2)',
                  color: 'rgba(143,163,188,0.9)',
                }}
              >
                {req}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Download buttons */}
      <Section bg="white">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            {/* Coming soon notice */}
            <div style={{ marginBottom: '32px' }}>
              <Badge variant="accent">{t('pssecure.download_coming_soon')}</Badge>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              {/* App Store button */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <button
                  aria-label={t('pssecure.download_ios')}
                  disabled
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '18px 32px',
                    background: '#1a1a1a',
                    border: '1.5px solid rgba(255,255,255,0.15)',
                    borderRadius: '14px',
                    color: '#fff',
                    cursor: 'not-allowed',
                    opacity: 0.7,
                    minWidth: '220px',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <span style={{ fontSize: '28px', lineHeight: 1 }}>🍎</span>
                  <div style={{ textAlign: 'left' }}>
                    <div
                      style={{
                        fontSize: '11px',
                        color: 'rgba(255,255,255,0.6)',
                        letterSpacing: '0.5px',
                        marginBottom: '2px',
                      }}
                    >
                      Download on the
                    </div>
                    <div
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#fff',
                        lineHeight: 1,
                      }}
                    >
                      {t('pssecure.download_ios')}
                    </div>
                  </div>
                </button>
                <span style={{ fontSize: '12px', color: 'rgba(143,163,188,0.6)' }}>
                  {t('pssecure.download_coming_soon')}
                </span>
              </div>

              {/* Google Play button */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <button
                  aria-label={t('pssecure.download_android')}
                  disabled
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '18px 32px',
                    background: '#0d2e1a',
                    border: '1.5px solid rgba(52,211,153,0.2)',
                    borderRadius: '14px',
                    color: '#fff',
                    cursor: 'not-allowed',
                    opacity: 0.7,
                    minWidth: '220px',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <Smartphone size={28} color="#34D399" strokeWidth={1.5} />
                  <div style={{ textAlign: 'left' }}>
                    <div
                      style={{
                        fontSize: '11px',
                        color: 'rgba(255,255,255,0.6)',
                        letterSpacing: '0.5px',
                        marginBottom: '2px',
                      }}
                    >
                      Get it on
                    </div>
                    <div
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#fff',
                        lineHeight: 1,
                      }}
                    >
                      {t('pssecure.download_android')}
                    </div>
                  </div>
                </button>
                <span style={{ fontSize: '12px', color: 'rgba(143,163,188,0.6)' }}>
                  {t('pssecure.download_coming_soon')}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* What's included */}
      <Section bg="alt">
        <div className="container">
          <div
            className="grid-2"
            style={{ maxWidth: '860px', margin: '0 auto', alignItems: 'start' }}
          >
            {/* Free includes */}
            <ScrollReveal>
              <div
                style={{
                  background: '#112240',
                  border: '1px solid rgba(250,204,21,0.18)',
                  borderRadius: '14px',
                  padding: '32px',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '18px',
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: '20px',
                  }}
                >
                  {t('pssecure.download_free_includes')}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {freeFeatures.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle size={16} color="#FACC15" strokeWidth={2} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '14px', color: '#8fa3bc', lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Pro includes */}
            <ScrollReveal delay={100}>
              <div
                style={{
                  background: '#112240',
                  border: '1px solid rgba(250,204,21,0.35)',
                  borderRadius: '14px',
                  padding: '32px',
                  boxShadow: '0 0 32px rgba(250,204,21,0.1)',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '18px',
                    fontWeight: 800,
                    color: '#FACC15',
                    marginBottom: '20px',
                  }}
                >
                  {t('pssecure.download_pro_includes')}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {proFeatures.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle size={16} color="#FACC15" strokeWidth={2} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '14px', color: '#8fa3bc', lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/${lang}/ps-secure/pricing`}
                  style={{
                    fontSize: '13px',
                    color: '#FACC15',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(250,204,21,0.35)',
                    paddingBottom: '1px',
                  }}
                >
                  View pricing →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Web subscription */}
      <Section bg="dark">
        <div className="container">
          <ScrollReveal>
            <div
              style={{
                background: '#112240',
                border: '1px solid rgba(250,204,21,0.18)',
                borderRadius: '14px',
                padding: '40px 48px',
                maxWidth: '680px',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              <h2
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 'clamp(22px, 3vw, 30px)',
                  fontWeight: 800,
                  color: '#fff',
                  marginBottom: '14px',
                  lineHeight: 1.2,
                }}
              >
                {t('pssecure.download_web_sub')}
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: '#8fa3bc',
                  lineHeight: 1.7,
                  marginBottom: '28px',
                }}
              >
                {t('pssecure.download_web_sub_desc')}
              </p>
              <Link
                to={`/${lang}/ps-secure/pricing`}
                style={{
                  display: 'inline-block',
                  padding: '13px 32px',
                  background: 'transparent',
                  color: '#FACC15',
                  border: '1.5px solid rgba(250,204,21,0.45)',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  textDecoration: 'none',
                  transition: 'background 200ms',
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLElement).style.background = 'rgba(250,204,21,0.1)'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                }}
              >
                View Pricing Plans
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Back to PS Secure */}
      <Section bg="white">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <Link
              to={`/${lang}/ps-secure`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '15px',
                fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif",
                color: '#8fa3bc',
                textDecoration: 'none',
                transition: 'color 200ms',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.color = '#FACC15'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.color = '#8fa3bc'
              }}
            >
              <ArrowLeft size={16} />
              Back to PS Secure
            </Link>
          </ScrollReveal>
        </div>
      </Section>
    </>
  )
}
