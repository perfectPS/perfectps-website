import type { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  light?: boolean
  variant?: 'gold' | 'cyan'
}

export function SectionLabel({ children, light, variant = 'gold' }: SectionLabelProps) {
  const isCyan = variant === 'cyan' || light
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '2.5px',
        textTransform: 'uppercase',
        color: isCyan ? 'var(--cyan)' : 'var(--gold)',
        marginBottom: '16px',
        padding: '6px 14px',
        border: `1px solid ${isCyan ? 'rgba(0,174,239,0.30)' : 'rgba(201,162,39,0.35)'}`,
        borderRadius: '100px',
        background: isCyan ? 'rgba(0,174,239,0.08)' : 'rgba(201,162,39,0.08)',
      }}
    >
      {children}
    </div>
  )
}
