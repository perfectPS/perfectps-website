import { services } from '../../data/services'
import { ServiceCard } from '../cards/ServiceCard'
import { ScrollReveal } from '../ui/ScrollReveal'

export function Services() {
  return (
    <section id="services" className="section dot-grid" style={{ background: 'var(--surface-alt)', overflow: 'hidden' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-label">What We Build</div>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: 'var(--text-1)',
            marginBottom: '14px',
          }}>
            End-to-End Digital Products
          </h2>
          <p style={{
            fontSize: '17px',
            color: 'var(--text-2)',
            maxWidth: '560px',
            lineHeight: 1.7,
            marginBottom: '56px',
          }}>
            We cover the full stack — from pixel-perfect interfaces to secure cloud infrastructure.
          </p>
        </ScrollReveal>

        <div className="grid-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
