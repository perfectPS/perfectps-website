import { CheckCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Section } from '../components/layout/Section'
import { SectionLabel } from '../components/ui/SectionLabel'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { useLang } from '../hooks/useLang'
import { usePageSeo } from '../hooks/usePageSeo'

const BASE = 'https://perfectps.com'

const PAYMENT_METHODS = ['Visa', 'Mastercard', 'Mada', 'Apple Pay', 'Google Pay']

export function PSSecurePricing() {
  const lang = useLang()
  const { t } = useTranslation()

  usePageSeo({
    title: 'PS Secure Pricing — Free & Pro Plans | perfectPS',
    description: t('pssecure.pricing_page_body'),
    canonical: `${BASE}/${lang}/ps-secure/pricing`,
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

  const faqs = [
    { q: t('pssecure.pricing_faq_1_q'), a: t('pssecure.pricing_faq_1_a') },
    { q: t('pssecure.pricing_faq_2_q'), a: t('pssecure.pricing_faq_2_a') },
    { q: t('pssecure.pricing_faq_3_q'), a: t('pssecure.pricing_faq_3_a') },
    { q: t('pssecure.pricing_faq_4_q'), a: t('pssecure.pricing_faq_4_a') },
    { q: t('pssecure.pricing_faq_5_q'), a: t('pssecure.pricing_faq_5_a') },
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
          <SectionLabel>{t('pssecure.pricing_page_label')}</SectionLabel>
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
            {t('pssecure.pricing_page_h2')}
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '520px',
              margin: '0 auto 24px',
            }}
          >
            {t('pssecure.pricing_page_body')}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: '13px',
                color: '#FACC15',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
              }}
            >
              ✓ {t('pssecure.pricing_guarantee')}
            </span>
            <span
              style={{
                fontSize: '13px',
                color: '#8fa3bc',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {t('pssecure.pricing_no_card')}
            </span>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <Section bg="white">
        <div className="container">
          <div
            className="grid-2"
            style={{ maxWidth: '860px', margin: '0 auto', alignItems: 'stretch' }}
          >
            {/* Free card */}
            <ScrollReveal>
              <div
                style={{
                  background: '#112240',
                  border: '1px solid rgba(250,204,21,0.18)',
                  borderRadius: '14px',
                  padding: '32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 200ms',
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(250,204,21,0.35)'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(250,204,21,0.18)'
                }}
              >
                <div style={{ marginBottom: '8px' }}>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#8fa3bc',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                    }}
                  >
                    Free
                  </span>
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '40px',
                      fontWeight: 800,
                      color: '#fff',
                    }}
                  >
                    $0
                  </span>
                  <span
                    style={{
                      fontSize: '15px',
                      color: '#8fa3bc',
                      marginLeft: '6px',
                    }}
                  >
                    forever
                  </span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                  {freeFeatures.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle size={16} color="#FACC15" strokeWidth={2} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '14px', color: '#8fa3bc', lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/${lang}/ps-secure/download`}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '13px 24px',
                    background: 'transparent',
                    color: '#FACC15',
                    border: '1.5px solid rgba(250,204,21,0.45)',
                    borderRadius: '8px',
                    fontSize: '15px',
                    fontWeight: 700,
                    fontFamily: "'DM Sans', sans-serif",
                    textDecoration: 'none',
                    transition: 'background 200ms, color 200ms',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'rgba(250,204,21,0.1)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'transparent'
                  }}
                >
                  Download Free
                </Link>
              </div>
            </ScrollReveal>

            {/* Pro card */}
            <ScrollReveal delay={100}>
              <div
                style={{
                  background: '#112240',
                  border: '1px solid rgba(250,204,21,0.45)',
                  borderRadius: '14px',
                  padding: '32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 0 40px rgba(250,204,21,0.15)',
                  position: 'relative',
                  transition: 'box-shadow 200ms',
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 56px rgba(250,204,21,0.25)'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(250,204,21,0.15)'
                }}
              >
                {/* Most popular badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-13px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#FACC15',
                    color: '#0d1b2e',
                    padding: '4px 14px',
                    borderRadius: '100px',
                    fontSize: '11px',
                    fontWeight: 800,
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  MOST POPULAR
                </div>
                <div style={{ marginBottom: '8px', marginTop: '4px' }}>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#FACC15',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                    }}
                  >
                    Pro
                  </span>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '40px',
                      fontWeight: 800,
                      color: '#fff',
                    }}
                  >
                    $4.99
                  </span>
                  <span
                    style={{
                      fontSize: '15px',
                      color: '#8fa3bc',
                      marginLeft: '6px',
                    }}
                  >
                    /month
                  </span>
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    color: '#FACC15',
                    marginBottom: '24px',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {t('pssecure.pricing_yearly_note')}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                  {proFeatures.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle size={16} color="#FACC15" strokeWidth={2} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '14px', color: '#8fa3bc', lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/${lang}/ps-secure/download`}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '13px 24px',
                    background: '#FACC15',
                    color: '#0d1b2e',
                    borderRadius: '8px',
                    fontSize: '15px',
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
                  Start Pro
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Guarantee / no card note */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '24px',
              display: 'flex',
              gap: '24px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ fontSize: '13px', color: '#FACC15', fontFamily: "'DM Sans'" }}>
              ✓ {t('pssecure.pricing_guarantee')}
            </span>
            <span style={{ fontSize: '13px', color: '#8fa3bc', fontFamily: "'DM Sans'" }}>
              {t('pssecure.pricing_no_card')}
            </span>
          </div>
        </div>
      </Section>

      {/* Payment methods */}
      <Section bg="alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                fontWeight: 700,
                color: '#8fa3bc',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Accepted Payment Methods
            </p>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              {PAYMENT_METHODS.map(method => (
                <span
                  key={method}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '8px 18px',
                    borderRadius: '100px',
                    fontSize: '13px',
                    fontWeight: 600,
                    fontFamily: "'DM Sans', sans-serif",
                    background: '#112240',
                    border: '1px solid rgba(250,204,21,0.18)',
                    color: '#fff',
                    transition: 'border-color 200ms',
                  }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(250,204,21,0.45)'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(250,204,21,0.18)'
                  }}
                >
                  {method}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="dark">
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: '48px' }}>
              <SectionLabel>{t('pssecure.pricing_faq_label')}</SectionLabel>
              <h2
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: 800,
                  color: '#fff',
                  marginBottom: '0',
                  marginTop: '16px',
                  lineHeight: 1.15,
                }}
              >
                {t('pssecure.pricing_faq_h2')}
              </h2>
            </div>
          </ScrollReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '760px' }}>
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div
                  style={{
                    background: '#112240',
                    border: '1px solid rgba(250,204,21,0.18)',
                    borderLeft: '3px solid #FACC15',
                    borderRadius: '12px',
                    padding: '24px 28px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#fff',
                      marginBottom: '10px',
                    }}
                  >
                    {faq.q}
                  </p>
                  <p style={{ fontSize: '14px', color: '#8fa3bc', lineHeight: 1.7, margin: 0 }}>
                    {faq.a}
                  </p>
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
