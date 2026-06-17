import { Zap, Lock, HeartHandshake } from 'lucide-react'
import { ScrollReveal } from '../ui/ScrollReveal'

const pillars = [
  {
    icon: Zap,
    title: 'Fast, Predictable Delivery',
    desc: 'We run tight sprints with clear milestones. You always know what\'s being built, when it ships, and what comes next. No surprises.',
    stat: '100%',
    statLabel: 'On-Time',
    gradient: 'linear-gradient(135deg, #0EA5E9, #0055A5)',
  },
  {
    icon: Lock,
    title: 'Security-First Engineering',
    desc: 'Every product we build starts with threat modeling. From zero-log VPN infrastructure to encrypted APIs — security is architecture, not an afterthought.',
    stat: '0',
    statLabel: 'Data Breaches',
    gradient: 'linear-gradient(135deg, #10B981, #059669)',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Partnership',
    desc: 'We\'re not a factory. We invest in understanding your business and act as a technical co-founder, not just an agency on a contract.',
    stat: '8+',
    statLabel: 'Returning Clients',
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
  },
]

export function WhyUs() {
  return (
    <section
      className="section dot-grid"
      style={{ background: 'var(--surface)', overflow: 'hidden' }}
    >
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 64px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Why perfectPS</div>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800,
              color: 'var(--text-1)',
              marginBottom: '16px',
            }}>
              What Makes Us Different
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--text-2)', lineHeight: 1.7 }}>
              We've built software products across industries, from fintech to security infrastructure. Here's what we bring to every engagement.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid-3" style={{ gap: 28 }}>
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 100}>
              <div style={{
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-xl)',
                overflow: 'hidden',
                height: '100%',
                background: 'var(--surface)',
                boxShadow: 'var(--shadow-xs)',
                transition: 'box-shadow 200ms, transform 200ms',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-xs)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {/* Gradient header */}
                <div style={{
                  background: p.gradient,
                  padding: '28px 32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <div style={{
                    width: 48, height: 48,
                    borderRadius: 'var(--r-md)',
                    background: 'rgba(255,255,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <p.icon size={22} color="#fff" strokeWidth={1.75} />
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '32px', fontWeight: 800, color: '#fff', fontFamily: "'DM Sans', sans-serif", lineHeight: 1 }}>{p.stat}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.75)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>{p.statLabel}</div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '28px 32px' }}>
                  <h3 style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '18px', fontWeight: 700,
                    color: 'var(--text-1)',
                    marginBottom: '12px',
                  }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.75 }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
