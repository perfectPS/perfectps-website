import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Portfolio } from '../components/sections/Portfolio'

export function Work() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '72px', background: 'var(--navy)' }}>
        <div className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <p style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'var(--cyan)',
            marginBottom: '16px',
          }}>
            ── Portfolio
          </p>
          <h1 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-1px',
            marginBottom: '16px',
          }}>
            Our Work
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '500px' }}>
            Digital products built for clients across industries. Quality over quantity, always.
          </p>
        </div>
      </div>
      <Portfolio showCta={false} />
      <Footer />
    </>
  )
}
