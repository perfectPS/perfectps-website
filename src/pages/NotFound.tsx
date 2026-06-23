import { useLang } from '../hooks/useLang'
import { usePageSeo } from '../hooks/usePageSeo'

export function NotFound() {
  const lang = useLang()
  usePageSeo({
    title: '404 Not Found | PerfectPS',
    description: 'The page you are looking for does not exist. Return to PerfectPS.',
    canonical: `https://perfectps.com/${lang}/`,
    lang,
  })
  return (
    <>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg)',
        textAlign: 'center',
        padding: '72px 24px',
      }}>
        <div>
          <div style={{
            fontSize: '80px',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 800,
            color: 'var(--border)',
            lineHeight: 1,
            marginBottom: '16px',
          }}>
            404
          </div>
          <h1 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '28px',
            fontWeight: 700,
            color: 'var(--text-1)',
            marginBottom: '12px',
          }}>
            Page Not Found
          </h1>
          <p style={{ color: 'var(--text-2)', marginBottom: '32px' }}>
            The page you're looking for doesn't exist.
          </p>
          <a href={`/${lang}`} style={{
            padding: '12px 28px',
            background: 'var(--navy)',
            color: '#fff',
            borderRadius: '8px',
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Back Home
          </a>
        </div>
      </div>
    </>
  )
}
