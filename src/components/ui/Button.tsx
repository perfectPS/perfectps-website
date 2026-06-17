import type { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'accent' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

const inlineStyles: Record<string, React.CSSProperties> = {
  primary: { background: 'var(--navy)', color: '#fff', borderColor: 'transparent' },
  'primary-hover': { background: 'var(--navy-mid)' },
  outline: { background: 'transparent', color: 'var(--navy)', border: '1.5px solid var(--navy)' },
  accent: { background: 'var(--cyan)', color: '#fff', borderColor: 'transparent' },
  ghost: { background: 'transparent', color: 'var(--navy)', borderColor: 'transparent' },
  sm: { fontSize: '14px', padding: '8px 16px', borderRadius: '8px' },
  md: { fontSize: '15px', padding: '11px 28px', borderRadius: '8px' },
  lg: { fontSize: '16px', padding: '14px 36px', borderRadius: '8px' },
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 200ms ease',
    textDecoration: 'none',
    border: '1.5px solid transparent',
    ...inlineStyles[variant],
    ...inlineStyles[size],
  }

  if (href) {
    return (
      <a href={href} style={style} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} style={style} className={className}>
      {children}
    </button>
  )
}
