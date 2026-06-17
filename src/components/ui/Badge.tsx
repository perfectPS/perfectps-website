import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'accent' | 'gold' | 'success' | 'sector'
}

const variantStyles: Record<string, React.CSSProperties> = {
  default: {
    background: 'var(--surface-alt)',
    color: 'var(--navy)',
    border: '1px solid var(--border)',
  },
  accent: {
    background: 'rgba(0,174,239,0.1)',
    color: 'var(--cyan)',
    border: '1px solid rgba(0,174,239,0.25)',
  },
  gold: {
    background: 'rgba(245,158,11,0.1)',
    color: '#B45309',
    border: '1px solid rgba(245,158,11,0.3)',
  },
  success: {
    background: 'rgba(34,197,94,0.1)',
    color: '#15803D',
    border: '1px solid rgba(34,197,94,0.25)',
  },
  sector: {
    background: 'rgba(15,31,61,0.06)',
    color: 'var(--text-2)',
    border: '1px solid var(--border)',
  },
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '3px 10px',
        borderRadius: '4px',
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '0.3px',
        whiteSpace: 'nowrap',
        ...variantStyles[variant],
      }}
    >
      {children}
    </span>
  )
}
