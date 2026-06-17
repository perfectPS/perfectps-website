import type { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  light?: boolean
}

export function SectionLabel({ children, light }: SectionLabelProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '3px',
        textTransform: 'uppercase',
        color: light ? 'rgba(0,174,239,0.9)' : 'var(--cyan)',
        marginBottom: '16px',
      }}
    >
      <span
        style={{
          display: 'block',
          width: '20px',
          height: '2px',
          background: 'var(--cyan)',
          flexShrink: 0,
          borderRadius: '1px',
        }}
      />
      {children}
    </div>
  )
}
