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
  { label: 'GitHub',   Icon: GithubIcon,   href: 'https://github.com/perfectps' },
  { label: 'LinkedIn', Icon: LinkedinIcon, href: 'https://linkedin.com/company/perfectps' },
  { label: 'X',        Icon: XIcon,        href: 'https://x.com/perfectps' },
]

const cols = [
  {
    title: 'Products',
    links: [{ label: 'PS Secure', href: '/ps-secure' }, { label: 'Get Early Access', href: '/#contact' }],
  },
  {
    title: 'Company',
    links: [{ label: 'About', href: '/#about' }, { label: 'Our Work', href: '/work' }, { label: 'Contact', href: '/#contact' }],
  },
  {
    title: 'Legal',
    links: [{ label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms of Service', href: '/terms' }],
  },
]

export function Footer() {
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
            <a href="/" style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '22px', fontWeight: 800,
              color: '#fff', display: 'block', marginBottom: '14px',
            }}>
              perfect<span style={{ color: '#c8a84b' }}>PS</span>
            </a>
            <p style={{ fontSize: '14px', color: 'rgba(143,163,188,0.7)', lineHeight: 1.75, maxWidth: '240px', marginBottom: '24px' }}>
              Building digital products that are fast, secure, and built to last.
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
            © 2026 perfectPS. All rights reserved.
          </span>
          <span style={{
            fontSize: '12px', color: '#22c55e',
            display: 'flex', alignItems: 'center', gap: '7px',
            fontWeight: 500,
          }}>
            <span className="status-dot" />
            All systems operational
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
