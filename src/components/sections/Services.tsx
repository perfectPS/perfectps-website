import { useTranslation } from 'react-i18next'
import { ServiceCard } from '../cards/ServiceCard'
import { ScrollReveal } from '../ui/ScrollReveal'
import { useLang } from '../../hooks/useLang'

export function Services() {
  const { t } = useTranslation()
  const lang = useLang()

  const services = [
    { icon: 'Globe',      title: t('services.web_title'),     description: t('services.web_desc'),     href: `/${lang}/#contact` },
    { icon: 'Smartphone', title: t('services.mobile_title'),  description: t('services.mobile_desc'),  href: `/${lang}/#contact` },
    { icon: 'Shield',     title: t('services.vpn_title'),     description: t('services.vpn_desc'),     href: `/${lang}/ps-secure` },
    { icon: 'Server',     title: t('services.backend_title'), description: t('services.backend_desc'), href: `/${lang}/#contact` },
    { icon: 'Palette',    title: t('services.design_title'),  description: t('services.design_desc'),  href: `/${lang}/#contact` },
    { icon: 'Cloud',      title: t('services.devops_title'),  description: t('services.devops_desc'),  href: `/${lang}/#contact` },
  ]

  return (
    <section id="services" className="section" style={{ background: '#ffffff', overflow: 'hidden', position: 'relative' }}>
      <div aria-hidden style={{
        position: 'absolute',
        top: '5%', right: '-2%', bottom: '5%',
        width: '52%',
        backgroundImage: "url('/sections/services-network.svg')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center right',
        opacity: 0.45,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <div className="section-label">{t('services.label')}</div>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            color: '#0d1b2e',
            marginBottom: '14px',
          }}>
            {t('services.h2_line1')}<br />
            <span style={{ color: '#FACC15' }}>{t('services.h2_line2')}</span>
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#4a5568',
            maxWidth: '520px',
            lineHeight: 1.7,
            marginBottom: '56px',
          }}>
            {t('services.body')}
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
