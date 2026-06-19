import { services } from '../../data/services'
import { ServiceCard } from '../cards/ServiceCard'
import { ScrollReveal } from '../ui/ScrollReveal'
import { BackgroundOrbs } from '../ui/BackgroundOrbs'

export function Services() {
  return (
    <section id="services" className="section" style={{ background: '#0d1b2e', overflow: 'hidden', position: 'relative' }}>
      <BackgroundOrbs goldTop="-150px" goldRight="-80px" blueBottom="-100px" blueLeft="-60px" />

      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'radial-gradient(circle, rgba(200,168,75,0.05) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <div className="section-label">What We Build</div>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '14px',
          }}>
            End-to-End<br />
            <span className="gradient-text">Digital Products</span>
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#8fa3bc',
            maxWidth: '520px',
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
