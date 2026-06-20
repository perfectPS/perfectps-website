import { useRef, useEffect, type CSSProperties } from 'react'

interface BilingualFieldProps {
  fieldKey: string
  label: string
  enValue: string
  arValue: string
  onChangeEn: (v: string) => void
  onChangeAr: (v: string) => void
}

const labelStyle: CSSProperties = {
  display: 'block',
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.45)',
  marginBottom: 4,
}

function AutoTextarea({
  value,
  onChange,
  dir,
  placeholder,
}: {
  value: string
  onChange: (v: string) => void
  dir: 'ltr' | 'rtl'
  placeholder: string
}) {
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = 'auto'
      ref.current.style.height = `${Math.max(ref.current.scrollHeight, 64)}px`
    }
  }, [value])

  return (
    <textarea
      ref={ref}
      value={value}
      dir={dir}
      placeholder={placeholder}
      rows={2}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: '100%',
        minHeight: 64,
        resize: 'none',
        background: '#070f1a',
        color: '#fff',
        border: '1px solid rgba(200,168,75,0.2)',
        borderRadius: 6,
        padding: '8px 10px',
        fontSize: 13,
        fontFamily: "'DM Sans', sans-serif",
        lineHeight: 1.5,
        outline: 'none',
        boxSizing: 'border-box',
        transition: 'border-color 0.15s',
        direction: dir,
      }}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = '#c8a84b'
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = 'rgba(200,168,75,0.2)'
      }}
    />
  )
}

export function BilingualField({
  fieldKey,
  label,
  enValue,
  arValue,
  onChangeEn,
  onChangeAr,
}: BilingualFieldProps) {
  return (
    <div
      style={{ marginBottom: 20 }}
      data-field-key={fieldKey}
    >
      <p
        style={{
          margin: '0 0 8px',
          fontSize: 13,
          fontWeight: 600,
          color: '#c8a84b',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {label}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <span style={labelStyle}>English</span>
          <AutoTextarea
            value={enValue}
            onChange={onChangeEn}
            dir="ltr"
            placeholder="English text…"
          />
        </div>
        <div>
          <span style={labelStyle}>Arabic / عربي</span>
          <AutoTextarea
            value={arValue}
            onChange={onChangeAr}
            dir="rtl"
            placeholder="النص العربي…"
          />
        </div>
      </div>
    </div>
  )
}
