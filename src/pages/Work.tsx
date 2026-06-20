import { Lock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Portfolio } from '../components/sections/Portfolio'

export function Work() {
  const { t } = useTranslation()

  return (
    <>
      {/* Hero */}
      <div style={{
        paddingTop: '68px',
        background: '#070f1a',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Dot grid */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
            radial-gradient(circle, rgba(200,168,75,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          opacity: 0.3,
        }} />
        {/* Glow */}
        <div aria-hidden style={{
          position: 'absolute', top: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: 800, height: 400,
          background: 'radial-gradient(ellipse, rgba(200,168,75,0.07) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '80px 32px 72px' }}>
          <div className="section-label">{t('work.page_label')}</div>
          <h1 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.08,
            marginBottom: '16px',
          }}>
            {t('work.page_h1')}{' '}
            <span className="gradient-text--dark">({t('work.view_all')})</span>
          </h1>
          <p style={{
            fontSize: '17px',
            color: 'rgba(255,255,255,0.55)',
            maxWidth: '500px',
            lineHeight: 1.75,
            marginBottom: '40px',
          }}>
            {t('work.page_body')}
          </p>

          {/* NDA Confidentiality notice */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'flex-start',
            gap: '14px',
            background: 'rgba(200,168,75,0.07)',
            border: '1px solid rgba(200,168,75,0.22)',
            borderRadius: '12px',
            padding: '16px 20px',
            maxWidth: '560px',
          }}>
            <div style={{
              width: 34, height: 34, borderRadius: '8px',
              background: 'rgba(200,168,75,0.12)',
              border: '1px solid rgba(200,168,75,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, marginTop: '1px',
            }}>
              <Lock size={15} color="#c8a84b" strokeWidth={2} />
            </div>
            <div>
              <div style={{
                fontSize: '13px', fontWeight: 700,
                color: '#c8a84b',
                marginBottom: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}>
                Client Confidentiality Policy
              </div>
              <p style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.7,
                margin: 0,
              }}>
                All projects shown here are protected under NDA. Client names, brand identities, and sensitive product details are withheld by agreement. Screenshots represent the UI and quality of our work.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Portfolio />
    </>
  )
}
