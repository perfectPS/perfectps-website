import { services } from '../../data/services'
import { ServiceCard } from '../cards/ServiceCard'
import { ScrollReveal } from '../ui/ScrollReveal'

export function Services() {
  return (
    <section id="services" className="section" style={{ background: '#ffffff', overflow: 'hidden', position: 'relative' }}>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <div className="section-label">What We Build</div>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            color: '#0d1b2e',
            marginBottom: '14px',
          }}>
            End-to-End<br />
            <span style={{ color: '#c8a84b' }}>Digital Products</span>
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#4a5568',
            maxWidth: '520px',
            lineHeight: 1.7,
            marginBottom: '56px',
          }}>
            We cover the full stack — from pixel-perfect interfaces to secure cloud infrastructure.
          </p>
        </ScrollReveal>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
          <img src="/src/assets/sections/services-network.svg" alt="Services network diagram" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
        </div>

        <div className="grid-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
