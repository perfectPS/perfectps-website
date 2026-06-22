import { Globe, Smartphone, Shield, Server, Palette, Cloud } from 'lucide-react'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '../ui/ScrollReveal'
import { useTilt } from '../../hooks/useTilt'
import { useLang } from '../../hooks/useLang'
import type { ServiceItem } from '../../types'

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; color?: string }>> = {
  Globe, Smartphone, Shield, Server, Palette, Cloud,
}

interface ServiceCardProps {
  service: ServiceItem
  delay?: number
}

export function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Globe
  const ref = useRef<HTMLAnchorElement>(null)
  const { t } = useTranslation()
  const lang = useLang()
  useTilt(ref as React.RefObject<HTMLElement>, 8)

  const cardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    background: '#112240',
    border: '1px solid rgba(250,204,21,0.18)',
    borderRadius: '14px',
    padding: '32px',
    height: '100%',
    textDecoration: 'none',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    transformStyle: 'preserve-3d',
    transition: 'border-color 200ms ease, box-shadow 200ms ease, outline-offset 100ms',
    outline: 'none',
  }

  return (
    <ScrollReveal delay={delay} style={{ height: '100%' }}>
      <a
        ref={ref}
        href={service.href ?? '#contact'}
        aria-label={`${t('services.learn_more')} — ${service.title}`}
        style={cardStyle}
        onMouseEnter={e => {
          const el = e.currentTarget
          el.style.borderColor = 'rgba(250,204,21,0.5)'
          el.style.boxShadow = '0 8px 32px rgba(250,204,21,0.1)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget
          el.style.borderColor = 'rgba(250,204,21,0.18)'
          el.style.boxShadow = 'none'
        }}
        onFocus={e => {
          const el = e.currentTarget
          el.style.borderColor = 'rgba(250,204,21,0.6)'
          el.style.boxShadow = '0 0 0 3px rgba(250,204,21,0.2)'
        }}
        onBlur={e => {
          const el = e.currentTarget
          el.style.borderColor = 'rgba(250,204,21,0.18)'
          el.style.boxShadow = 'none'
        }}
      >
        <div aria-hidden style={{
          position: 'absolute', bottom: -30, right: -30,
          width: 120, height: 120,
          background: 'radial-gradient(circle, rgba(250,204,21,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          width: 52, height: 52,
          borderRadius: '12px',
          background: 'rgba(250,204,21,0.1)',
          border: '1px solid rgba(250,204,21,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Icon size={24} strokeWidth={1.75} color="#FACC15" />
        </div>

        <h3 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '18px', fontWeight: 700,
          color: '#ffffff',
          margin: 0,
        }}>
          {service.title}
        </h3>

        <p style={{ fontSize: '14px', color: '#8fa3bc', lineHeight: 1.7, flex: 1, margin: 0 }}>
          {service.description}
        </p>

        <div style={{
          fontSize: '13px', fontWeight: 600, color: '#FACC15',
          display: 'flex', alignItems: 'center', gap: '4px',
        }}>
          {t('services.learn_more')}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden
            style={lang === 'ar' ? { transform: 'scaleX(-1)' } : undefined}>
            <path d="M2 6h8M6 2l4 4-4 4" stroke="#FACC15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </a>
    </ScrollReveal>
  )
}
