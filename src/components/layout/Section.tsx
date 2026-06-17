import type { ReactNode, CSSProperties } from 'react'

interface SectionProps {
  id?: string
  bg?: 'white' | 'alt' | 'dark'
  children: ReactNode
  style?: CSSProperties
  className?: string
}

export function Section({ id, bg = 'white', children, style, className }: SectionProps) {
  const bgMap: Record<string, string> = {
    white: 'var(--surface)',
    alt: 'var(--surface-alt)',
    dark: 'var(--navy)',
  }

  return (
    <section
      id={id}
      className={`section ${className ?? ''}`}
      style={{ background: bgMap[bg], ...style }}
    >
      {children}
    </section>
  )
}
