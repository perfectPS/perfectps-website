import { CountUp } from '../ui/CountUp'

interface StatCardProps {
  value: string
  numericValue?: number
  suffix?: string
  label: string
  change?: string
  positive?: boolean
}

export function StatCard({ value, numericValue, suffix, label, change, positive = true }: StatCardProps) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '16px',
        padding: '28px 24px',
      }}
    >
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 'clamp(32px, 4vw, 48px)',
          fontWeight: 700,
          color: '#fff',
          lineHeight: 1,
          marginBottom: '8px',
        }}
      >
        {numericValue !== undefined ? (
          <CountUp target={numericValue} suffix={suffix ?? ''} />
        ) : (
          value
        )}
      </div>
      <div
        style={{
          fontSize: '13px',
          color: 'rgba(255,255,255,0.6)',
          marginBottom: change ? '8px' : 0,
        }}
      >
        {label}
      </div>
      {change && (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '12px',
            fontWeight: 600,
            color: positive ? '#4ADE80' : '#F87171',
          }}
        >
          {positive ? '▲' : '▼'} {change}
        </div>
      )}
    </div>
  )
}
