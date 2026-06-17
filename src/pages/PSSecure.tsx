import { Shield, Eye, Zap, Smartphone, Globe, Lock } from 'lucide-react'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Section } from '../components/layout/Section'
import { SectionLabel } from '../components/ui/SectionLabel'
import { Badge } from '../components/ui/Badge'
import { ScrollReveal } from '../components/ui/ScrollReveal'

const features = [
  { icon: Zap, title: 'WireGuard Protocol', desc: 'The fastest and most modern VPN protocol — significantly faster than OpenVPN or IPSec.' },
  { icon: Eye, title: 'Zero-Log Policy', desc: 'We never store, sell, or share your data. No traffic logs, no connection logs, ever.' },
  { icon: Shield, title: 'AdGuard DNS', desc: 'Built-in ad and tracker blocking at the DNS level — browse cleaner and faster.' },
  { icon: Lock, title: 'Kill Switch', desc: 'Automatically disconnects internet if the VPN drops — your real IP is never exposed.' },
  { icon: Smartphone, title: 'Multi-Device', desc: 'iOS, Android, and desktop support from one account. All devices, one subscription.' },
  { icon: Globe, title: 'Regional Servers', desc: 'Optimized servers across the Middle East and beyond for low-latency connections.' },
]

const steps = [
  { n: '1', title: 'Download PS Secure', desc: 'Available on iOS and Android. Free to download, instant setup.' },
  { n: '2', title: 'Connect in One Tap', desc: 'No configuration, no complexity. Tap once to connect to the best server.' },
  { n: '3', title: 'Browse Freely', desc: 'Full privacy, full speed. Your data is encrypted, your identity is protected.' },
]

export function PSSecure() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{
        background: 'var(--navy)',
        paddingTop: 'calc(72px + 80px)',
        paddingBottom: '96px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,174,239,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ marginBottom: '20px' }}>
            <Badge variant="accent">VPN Platform</Badge>
          </div>
          <h1 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-1.5px',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}>
            Privacy Without<br />Compromise
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: '0 auto 40px' }}>
            Enterprise-grade WireGuard VPN. Zero logs. Lightning fast. Available on iOS & Android.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/#contact" style={{
              padding: '14px 32px',
              background: 'var(--cyan)',
              color: '#fff',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Get Early Access
            </a>
            <a href="/#contact" style={{
              padding: '14px 32px',
              background: 'transparent',
              color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.3)',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <Section bg="white">
        <div className="container">
          <ScrollReveal>
            <SectionLabel>Features</SectionLabel>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800,
              color: 'var(--text-1)',
              marginBottom: '48px',
              lineHeight: 1.15,
            }}>
              Built for Privacy. Built to Last.
            </h2>
          </ScrollReveal>
          <div className="grid-3">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 70}>
                <div style={{
                  padding: '32px',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  height: '100%',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(0,174,239,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                  }}>
                    <f.icon size={22} color="var(--cyan)" strokeWidth={1.75} />
                  </div>
                  <h3 style={{ fontFamily: "'DM Sans'", fontSize: '17px', fontWeight: 700, marginBottom: '10px', color: 'var(--text-1)' }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section bg="alt">
        <div className="container">
          <ScrollReveal>
            <SectionLabel>How It Works</SectionLabel>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800,
              color: 'var(--text-1)',
              marginBottom: '56px',
              lineHeight: 1.15,
            }}>
              Get Protected in 3 Steps
            </h2>
          </ScrollReveal>
          <div className="grid-3">
            {steps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 100}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'var(--navy)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'DM Sans'",
                    fontSize: '18px',
                    fontWeight: 800,
                    flexShrink: 0,
                  }}>
                    {step.n}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'DM Sans'", fontSize: '17px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-1)' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'DM Sans'", fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
            Ready to Protect Your Privacy?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', marginBottom: '40px' }}>
            Join the waitlist and be the first to get access.
          </p>
          <a href="/#contact" style={{
            padding: '16px 40px',
            background: 'var(--cyan)',
            color: '#fff',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 600,
            fontFamily: "'DM Sans'",
            display: 'inline-block',
          }}>
            Get Early Access →
          </a>
        </div>
      </Section>

      <Footer />
    </>
  )
}
