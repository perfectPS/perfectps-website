import { Shield, Wifi, Eye, Zap, Smartphone, Globe, Check, ArrowRight } from 'lucide-react'
import { ScrollReveal } from '../ui/ScrollReveal'

const features = [
  { icon: Wifi,       label: 'WireGuard Protocol' },
  { icon: Eye,        label: 'Zero-Log Policy' },
  { icon: Shield,     label: 'Kill Switch' },
  { icon: Zap,        label: 'AdGuard DNS' },
  { icon: Smartphone, label: 'iOS & Android' },
  { icon: Globe,      label: 'Regional Servers' },
]

const techTags = ['WireGuard', 'Zero-Log', 'AdGuard DNS', 'Kill Switch', 'ChaCha20']

export function Products() {
  return (
    <section id="products" className="section" style={{ background: '#ffffff', overflow: 'hidden', position: 'relative' }}>

      <div aria-hidden style={{
        position: 'absolute',
        top: '5%', left: '2%', bottom: '5%',
        width: '38%',
        backgroundImage: "url('/sections/products-device.svg')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center left',
        opacity: 0.13,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
            <div className="section-label">Our Products</div>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              color: '#0d1b2e',
              lineHeight: 1.15,
            }}>
              Built for the<br />
              <span className="gradient-text">Real World</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div style={{
            background: '#f8f9fa',
            border: '1px solid rgba(200,168,75,0.22)',
            borderRadius: '20px',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '420px 1fr',
          }} className="product-split">

            <div style={{
              background: '#f8f9fa',
              borderRight: '1px solid rgba(200,168,75,0.15)',
              padding: '56px 40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '28px',
              minHeight: '460px',
            }}>
              <div className="shield-glow" style={{
                width: 88, height: 88,
                borderRadius: '22px',
                background: 'rgba(200,168,75,0.1)',
                border: '1px solid rgba(200,168,75,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Shield size={40} color="#c8a84b" strokeWidth={1.5} />
              </div>

              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '26px', fontWeight: 800, textAlign: 'center',
              }}>
                <span style={{ color: '#4a5568' }}>PS </span>
                <span style={{ color: '#c8a84b' }}>Secure</span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', maxWidth: '280px' }}>
                {techTags.map(tag => (
                  <span key={tag} style={{
                    background: 'rgba(200,168,75,0.08)',
                    border: '1px solid rgba(200,168,75,0.25)',
                    color: '#c8a84b',
                    fontSize: '10px', fontWeight: 700,
                    borderRadius: '100px',
                    padding: '4px 12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            <div style={{ padding: '48px 44px' }}>
              <span style={{
                background: 'rgba(200,168,75,0.1)',
                color: '#c8a84b',
                fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                borderRadius: '100px',
                padding: '4px 12px',
                display: 'inline-block',
                marginBottom: '14px',
              }}>
                Flagship Product
              </span>

              <h3 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '28px', fontWeight: 800,
                color: '#0d1b2e',
                marginBottom: '6px',
              }}>
                PS Secure
              </h3>
              <p style={{ fontSize: '14px', color: '#c8a84b', fontWeight: 500, marginBottom: '18px' }}>
                VPN & Privacy Platform
              </p>
              <p style={{
                fontSize: '15px', color: '#4a5568', lineHeight: 1.75, marginBottom: '28px',
              }}>
                Enterprise-grade VPN powered by WireGuard. PS Secure delivers zero-log privacy,
                AdGuard DNS filtering, a hardware kill switch, and native iOS & Android apps —
                all under perfectPS infrastructure.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
                marginBottom: '32px',
              }}>
                {features.map(({ label }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: 20, height: 20,
                      borderRadius: '50%',
                      background: 'rgba(34,197,94,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Check size={12} color="#22c55e" strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: '13px', color: '#4a5568', fontWeight: 500 }}>{label}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="/ps-secure" style={{
                  padding: '11px 24px',
                  background: '#c8a84b',
                  color: '#0d1b2e',
                  borderRadius: '8px',
                  fontSize: '14px', fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  transition: 'background 200ms',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e0c068' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#c8a84b' }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>Learn More <ArrowRight size={14} /></span>
                </a>
                <a href="/#contact" style={{
                  padding: '11px 24px',
                  background: 'transparent',
                  color: '#0d1b2e',
                  border: '1px solid rgba(200,168,75,0.3)',
                  borderRadius: '8px',
                  fontSize: '14px', fontWeight: 600,
                  fontFamily: "'DM Sans', sans-serif",
                  transition: 'border-color 200ms, color 200ms',
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#c8a84b'; el.style.color = '#c8a84b' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(200,168,75,0.3)'; el.style.color = '#0d1b2e' }}
                >
                  Get Early Access
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @keyframes shield-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%       { transform: translateY(-10px) rotate(1deg); }
        }
        .shield-glow {
          animation: shield-float 4s ease-in-out infinite, glow-pulse-product 3s ease-in-out infinite;
        }
        @keyframes glow-pulse-product {
          0%, 100% { box-shadow: 0 0 20px rgba(200,168,75,0.18); }
          50%       { box-shadow: 0 0 40px rgba(200,168,75,0.45), 0 0 80px rgba(200,168,75,0.12); }
        }
        @media (max-width: 900px) {
          .product-split { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
