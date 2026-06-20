import { useTranslation } from 'react-i18next'
import { useLang } from '../hooks/useLang'

const sections = [
  {
    heading: 'Information We Collect',
    body: 'When you use our website or contact us, we may collect your name, email address, and the content of your messages. For PS Secure (our VPN product), we operate a strict zero-log policy: we do not collect, store, or share your browsing activity, DNS queries, IP addresses, or connection timestamps.',
  },
  {
    heading: 'How We Use Your Information',
    body: 'Contact information is used solely to respond to your inquiry and provide the services you requested. We do not sell, rent, or share your personal information with third parties for marketing purposes.',
  },
  {
    heading: 'Cookies',
    body: 'Our website uses essential cookies only — required for basic functionality such as language preferences. We do not use tracking cookies, analytics cookies, or third-party advertising cookies.',
  },
  {
    heading: 'Data Retention',
    body: 'We retain contact form submissions for up to 12 months for business correspondence purposes. You may request deletion of your data at any time by emailing us at hello@perfectps.com.',
  },
  {
    heading: 'Third-Party Services',
    body: 'Our website may link to third-party services such as the Apple App Store or Google Play Store. We are not responsible for the privacy practices of these external services.',
  },
  {
    heading: 'Security',
    body: 'All data transmitted to and from perfectps.com is protected by TLS encryption. Our servers are hosted on Oracle Cloud Infrastructure and DigitalOcean with access controls and firewall rules in place.',
  },
  {
    heading: 'Your Rights',
    body: 'You have the right to access, correct, or delete any personal data we hold about you. To exercise these rights, contact us at hello@perfectps.com and we will respond within 5 business days.',
  },
  {
    heading: 'Changes to This Policy',
    body: 'We may update this Privacy Policy periodically. Material changes will be indicated by an updated date at the top of this page. Continued use of our services after changes constitutes acceptance of the updated policy.',
  },
  {
    heading: 'Contact',
    body: 'For privacy-related questions or requests, please email hello@perfectps.com.',
  },
]

export function Privacy() {
  const { t } = useTranslation()
  const lang = useLang()

  return (
    <div style={{ background: '#070f1a', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container" style={{ maxWidth: '720px' }}>

        <a href={`/${lang}`} style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontSize: '13px', fontWeight: 600,
          color: 'rgba(200,168,75,0.7)',
          textDecoration: 'none',
          marginBottom: '40px',
          transition: 'color 200ms',
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#c8a84b' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(200,168,75,0.7)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M11 7H3M7 11L3 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Home
        </a>

        <div className="section-label">{t('privacy.last_updated')}</div>
        <h1 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 800,
          color: '#fff',
          lineHeight: 1.1,
          marginBottom: '48px',
        }}>
          {t('privacy.title')}
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {sections.map(s => (
            <div key={s.heading} style={{
              borderLeft: '2px solid rgba(200,168,75,0.2)',
              paddingLeft: '24px',
            }}>
              <h2 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '18px',
                fontWeight: 700,
                color: '#c8a84b',
                marginBottom: '10px',
              }}>
                {s.heading}
              </h2>
              <p style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.85,
              }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
