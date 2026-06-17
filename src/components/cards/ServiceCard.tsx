import { Globe, Smartphone, Shield, Server, Palette, Cloud } from 'lucide-react'
import { ScrollReveal } from '../ui/ScrollReveal'
import type { ServiceItem } from '../../types'

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; color?: string }>> = {
  Globe, Smartphone, Shield, Server, Palette, Cloud,
}

const iconGradients: Record<string, string> = {
  Globe:      'linear-gradient(135deg, #00AEEF, #0055A5)',
  Smartphone: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
  Shield:     'linear-gradient(135deg, #0EA5E9, #0284C7)',
  Server:     'linear-gradient(135deg, #10B981, #059669)',
  Palette:    'linear-gradient(135deg, #F59E0B, #D97706)',
  Cloud:      'linear-gradient(135deg, #06B6D4, #0891B2)',
}

interface ServiceCardProps {
  service: ServiceItem
  delay?: number
}

export function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Globe
  const gradient = iconGradients[service.icon] ?? iconGradients.Globe

  return (
    <ScrollReveal delay={delay} style={{ height: '100%' }}>
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--r-lg)',
          padding: '32px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          transition: 'transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease',
          cursor: 'default',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-5px)'
          e.currentTarget.style.boxShadow = 'var(--shadow-md)'
          e.currentTarget.style.borderColor = 'rgba(0,174,239,0.35)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.borderColor = 'var(--border)'
        }}
      >
        {/* Bottom-right glow */}
        <div style={{
          position: 'absolute', bottom: -20, right: -20,
          width: 100, height: 100,
          background: 'radial-gradient(circle, rgba(0,174,239,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Icon */}
        <div style={{
          width: 52, height: 52,
          borderRadius: 'var(--r-md)',
          background: gradient,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          flexShrink: 0,
        }}>
          <Icon size={24} strokeWidth={1.75} color="#fff" />
        </div>

        <h3 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '18px', fontWeight: 700,
          color: 'var(--text-1)',
        }}>
          {service.title}
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.7, flex: 1 }}>
          {service.description}
        </p>

        {/* Learn more link */}
        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--cyan)', display: 'flex', alignItems: 'center', gap: '4px' }}>
          Learn more →
        </div>
      </div>
    </ScrollReveal>
  )
}
