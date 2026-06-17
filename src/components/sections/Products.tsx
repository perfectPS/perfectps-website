import { Shield, Wifi, Eye, Zap, Smartphone, Globe } from 'lucide-react'
import { Section } from '../layout/Section'
import { SectionLabel } from '../ui/SectionLabel'
import { Badge } from '../ui/Badge'
import { ScrollReveal } from '../ui/ScrollReveal'

const features = [
  { icon: Wifi, label: 'WireGuard Protocol' },
  { icon: Eye, label: 'Zero-Log Policy' },
  { icon: Shield, label: 'Kill Switch' },
  { icon: Zap, label: 'AdGuard DNS' },
  { icon: Smartphone, label: 'iOS & Android' },
  { icon: Globe, label: 'Regional Servers' },
]

const tags = ['WireGuard', 'Zero-Log', 'AdGuard DNS', 'Kill Switch', 'ChaCha20']

export function Products() {
  return (
    <Section id="products" bg="white">
      <div className="container">
        <ScrollReveal>
          <SectionLabel>Our Products</SectionLabel>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: 'var(--text-1)',
            marginBottom: '48px',
            lineHeight: 1.15,
          }}>
            Built for the Real World
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div
            className="product-card"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '24px',
              padding: 'clamp(32px, 4vw, 56px)',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '48px',
              alignItems: 'center',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            {/* Left: content */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--navy)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Shield size={22} color="#fff" strokeWidth={1.75} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '22px',
                      fontWeight: 800,
                      color: 'var(--text-1)',
                    }}>
                      PS Secure
                    </span>
                    <Badge variant="gold">Flagship Product</Badge>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-3)', marginTop: '2px' }}>
                    VPN & Privacy Platform
                  </p>
                </div>
              </div>

              <p style={{
                fontSize: '16px',
                color: 'var(--text-2)',
                lineHeight: 1.7,
                marginBottom: '28px',
                maxWidth: '520px',
              }}>
                Enterprise-grade VPN powered by WireGuard. PS Secure delivers zero-log privacy,
                AdGuard DNS filtering, a hardware kill switch, and native iOS & Android apps —
                all under perfectPS infrastructure.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                {tags.map((tag) => (
                  <Badge key={tag} variant="accent">{tag}</Badge>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href="/ps-secure"
                  style={{
                    padding: '11px 24px',
                    background: 'var(--navy)',
                    color: '#fff',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: "'DM Sans', sans-serif",
                    transition: 'opacity 200ms',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
                >
                  Learn More →
                </a>
                <a
                  href="/#contact"
                  style={{
                    padding: '11px 24px',
                    background: 'transparent',
                    color: 'var(--navy)',
                    border: '1.5px solid var(--navy)',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: "'DM Sans', sans-serif",
                    transition: 'background 200ms',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--surface-alt)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
                >
                  Get Early Access
                </a>
              </div>
            </div>

            {/* Right: features grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                minWidth: '240px',
              }}
              className="product-features"
            >
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  style={{
                    padding: '16px',
                    background: 'var(--surface-alt)',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    textAlign: 'center',
                  }}
                >
                  <Icon size={20} color="var(--cyan)" strokeWidth={1.75} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-2)', lineHeight: 1.3 }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <style>{`
          @media (max-width: 900px) {
            .product-card { grid-template-columns: 1fr !important; }
            .product-features { display: none !important; }
          }
        `}</style>
      </div>
    </Section>
  )
}
