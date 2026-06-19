import { Globe, Smartphone, Shield, Server, Palette, Cloud } from 'lucide-react'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '../ui/ScrollReveal'
import { useTilt } from '../../hooks/useTilt'
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
  const ref = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  useTilt(ref, 8)

  return (
    <ScrollReveal delay={delay} style={{ height: '100%' }}>
      <div
        ref={ref}
        style={{
          background: '#112240',
          border: '1px solid rgba(200,168,75,0.18)',
          borderRadius: '14px',
          padding: '32px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          transition: 'border-color 200ms ease, box-shadow 200ms ease',
          cursor: 'default',
          position: 'relative',
          overflow: 'hidden',
          transformStyle: 'preserve-3d',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = 'rgba(200,168,75,0.5)'
          el.style.boxShadow = '0 8px 32px rgba(200,168,75,0.08)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = 'rgba(200,168,75,0.18)'
          el.style.boxShadow = 'none'
        }}
      >
        <div aria-hidden style={{
          position: 'absolute', bottom: -30, right: -30,
          width: 120, height: 120,
          background: 'radial-gradient(circle, rgba(200,168,75,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          width: 52, height: 52,
          borderRadius: '12px',
          background: 'rgba(200,168,75,0.1)',
          border: '1px solid rgba(200,168,75,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Icon size={24} strokeWidth={1.75} color="#c8a84b" />
        </div>

        <h3 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '18px', fontWeight: 700,
          color: '#ffffff',
        }}>
          {service.title}
        </h3>
        <p style={{ fontSize: '14px', color: '#8fa3bc', lineHeight: 1.7, flex: 1 }}>
          {service.description}
        </p>

        <div style={{ fontSize: '13px', fontWeight: 600, color: '#c8a84b' }}>
          {t('services.learn_more')}
        </div>
      </div>
    </ScrollReveal>
  )
}
