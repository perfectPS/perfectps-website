import { ArrowLeft } from 'lucide-react'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'

export function NotFound() {
  return (
    <>
      <Navbar />
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
          <a href="/" style={{
            padding: '12px 28px',
            background: 'var(--navy)',
            color: '#fff',
            borderRadius: '8px',
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><ArrowLeft size={14} /> Back Home</span>
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}
