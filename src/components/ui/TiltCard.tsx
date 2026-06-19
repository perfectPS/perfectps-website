import { useRef, type PropsWithChildren, type CSSProperties } from 'react'
import { useTilt } from '../../hooks/useTilt'

interface TiltCardProps {
  className?: string
  style?: CSSProperties
  strength?: number
}

export function TiltCard({ children, className = '', style, strength = 10 }: PropsWithChildren<TiltCardProps>) {
  const ref = useRef<HTMLDivElement>(null)
  useTilt(ref, strength)

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      style={{ transformStyle: 'preserve-3d', ...style }}
    >
      {children}
    </div>
  )
}
