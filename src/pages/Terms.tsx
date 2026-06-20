import { useTranslation } from 'react-i18next'
import { useLang } from '../hooks/useLang'

const sections = [
  {
    heading: 'Acceptance of Terms',
    body: 'By accessing or using perfectps.com or any service provided by perfectPS ("we", "us", "our"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.',
  },
  {
    heading: 'Services',
    body: 'perfectPS provides digital product development services including web applications, mobile apps, VPN infrastructure, UI/UX design, backend engineering, and DevOps. We also operate PS Secure, a VPN and privacy product available on iOS and Android.',
  },
  {
    heading: 'Intellectual Property',
    body: 'Unless otherwise agreed in a signed contract, all work product created by perfectPS for clients remains the intellectual property of perfectPS until full payment is received, at which point ownership transfers to the client as specified in the project agreement. The perfectPS brand, logo, and the PS Secure product are the sole property of perfectPS.',
  },
  {
    heading: 'Client Responsibilities',
    body: 'Clients are responsible for providing accurate requirements, timely feedback, and any assets or credentials necessary to complete the agreed work. Delays caused by the client may affect project timelines and costs.',
  },
  {
    heading: 'Payment Terms',
    body: 'Project pricing and payment schedules are defined in individual project agreements. All payments are due within the timeframes specified therein. Late payments may result in work suspension and interest charges as permitted by applicable law.',
  },
  {
    heading: 'Confidentiality',
    body: 'perfectPS treats all client project information as confidential by default. We do not disclose client identities or project details to third parties without explicit written consent. Clients may request additional NDA coverage for any engagement.',
  },
  {
    heading: 'Limitation of Liability',
    body: 'To the maximum extent permitted by law, perfectPS shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from the use of our services. Our total liability shall not exceed the fees paid by the client in the three months preceding the claim.',
  },
  {
    heading: 'PS Secure VPN Terms',
    body: 'PS Secure is provided for lawful personal use only. Users may not use PS Secure to violate any applicable laws, infringe intellectual property rights, transmit malware, or engage in any activity that disrupts network infrastructure. We reserve the right to terminate accounts that violate these terms.',
  },
  {
    heading: 'Governing Law',
    body: 'These Terms are governed by the laws applicable in the Hashemite Kingdom of Jordan. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of courts in Amman, Jordan.',
  },
  {
    heading: 'Changes to Terms',
    body: 'We reserve the right to update these Terms at any time. Continued use of our services following notice of changes constitutes your acceptance of the updated Terms. Material changes will be announced via email to known clients.',
  },
  {
    heading: 'Contact',
    body: 'Questions about these Terms may be directed to hello@perfectps.com.',
  },
]

export function Terms() {
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

        <div className="section-label">{t('terms.last_updated')}</div>
        <h1 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 800,
          color: '#fff',
          lineHeight: 1.1,
          marginBottom: '48px',
        }}>
          {t('terms.title')}
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
