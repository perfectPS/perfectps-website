import { useTranslation } from 'react-i18next'
import { useLang } from '../../hooks/useLang'

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l16 16M20 4L4 20"/>
  </svg>
)

const socials = [
  { label: 'X',        Icon: XIcon,        href: 'https://x.com/perfectps' },
  { label: 'LinkedIn', Icon: LinkedinIcon, href: 'https://linkedin.com/company/perfectps' },
  { label: 'GitHub',   Icon: GithubIcon,   href: 'https://github.com/perfectps' },
]

export function Footer() {
  const lang = useLang()
  const { t } = useTranslation()

  const cols = [
    {
      title: t('footer.col_products'),
      links: [
        { label: t('footer.link_pssecure'),    href: `/${lang}/ps-secure` },
        { label: t('footer.link_early_access'), href: `/${lang}/#contact` },
      ],
    },
    {
      title: t('footer.col_company'),
      links: [
        { label: t('footer.link_about'),   href: `/${lang}/#about` },
        { label: t('footer.link_work'),    href: `/${lang}/work` },
        { label: t('footer.link_contact'), href: `/${lang}/#contact` },
      ],
    },
    {
      title: t('footer.col_legal'),
      links: [
        { label: t('footer.link_privacy'), href: '/privacy' },
        { label: t('footer.link_terms'),   href: '/terms' },
      ],
    },
  ]

  return (
    <footer style={{
      background: '#070f1a',
      borderTop: '1px solid rgba(200,168,75,0.18)',
    }}>
      <div className="container" style={{ padding: '64px 32px 48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
          gap: '48px',
          marginBottom: '48px',
        }} className="footer-grid">

          <div>
            <a href={`/${lang}`} dir="ltr" style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '20px', fontWeight: 800,
              color: '#fff',
              display: 'inline-flex', alignItems: 'center', gap: '9px',
              marginBottom: '14px',
              textDecoration: 'none',
            }}>
              <svg width="22" height="26" viewBox="0 0 28 32" fill="none">
                <path d="M14 1L2 6v10c0 7.18 5.16 13.9 12 15.92C20.84 29.9 26 23.18 26 16V6L14 1z"
                  fill="rgba(200,168,75,0.15)" stroke="#c8a84b" strokeWidth="1.5"/>
                <text x="14" y="21" textAnchor="middle" fontFamily="'DM Sans', sans-serif"
                  fontSize="11" fontWeight="800" fill="#c8a84b">PS</text>
              </svg>
              perfect<span style={{ color: '#c8a84b' }}>PS</span>
            </a>
            <p style={{
              fontSize: '14px',
              color: 'rgba(143,163,188,0.7)',
              lineHeight: 1.75,
              maxWidth: '240px',
              marginBottom: '24px',
            }}>
              {t('footer.tagline')}
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label} style={{
                  width: 36, height: 36,
                  borderRadius: 8,
                  border: '1px solid rgba(200,168,75,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(143,163,188,0.5)',
                  transition: 'border-color 200ms, color 200ms',
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#c8a84b'; el.style.color = '#c8a84b' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(200,168,75,0.15)'; el.style.color = 'rgba(143,163,188,0.5)' }}
                >
                  <s.Icon />
                </a>
              ))}
            </div>
          </div>

          {cols.map(col => (
            <div key={col.title}>
              <h4 style={{
                fontSize: '11px', fontWeight: 700,
                letterSpacing: '2px', textTransform: 'uppercase',
                color: '#c8a84b',
                marginBottom: '20px',
              }}>
                {col.title}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map(l => (
                  <a key={l.label} href={l.href} style={{
                    fontSize: '14px', color: '#8fa3bc',
                    transition: 'color 200ms',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#8fa3bc' }}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <span style={{ fontSize: '13px', color: 'rgba(143,163,188,0.4)' }}>
            {t('footer.copyright')}
          </span>
          <span style={{
            fontSize: '12px', color: '#22c55e',
            display: 'flex', alignItems: 'center', gap: '7px',
            fontWeight: 500,
          }}>
            <span className="status-dot" />
            {t('footer.status')}
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
