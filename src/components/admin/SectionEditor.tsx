import { BilingualField } from './BilingualField'

interface SectionEditorProps {
  sectionKey: string
  enData: Record<string, unknown>
  arData: Record<string, unknown>
  onChange: (lang: 'en' | 'ar', key: string, value: string) => void
}

function toLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/[_-]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim()
}

function flattenObject(
  obj: Record<string, unknown>,
  prefix = ''
): Array<{ key: string; value: string }> {
  const result: Array<{ key: string; value: string }> = []

  for (const [k, v] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${k}` : k
    if (typeof v === 'string') {
      result.push({ key: fullKey, value: v })
    } else if (v !== null && typeof v === 'object' && !Array.isArray(v)) {
      result.push(...flattenObject(v as Record<string, unknown>, fullKey))
    } else if (Array.isArray(v)) {
      v.forEach((item, idx) => {
        if (typeof item === 'string') {
          result.push({ key: `${fullKey}[${idx}]`, value: item })
        } else if (item !== null && typeof item === 'object') {
          result.push(
            ...flattenObject(item as Record<string, unknown>, `${fullKey}[${idx}]`)
          )
        }
      })
    }
  }

  return result
}

function getNestedValue(obj: Record<string, unknown>, key: string): string {
  const parts = key.split(/\.|\[|\]/).filter(Boolean)
  let current: unknown = obj
  for (const part of parts) {
    if (current === null || current === undefined) return ''
    if (typeof current === 'object' && !Array.isArray(current)) {
      current = (current as Record<string, unknown>)[part]
    } else if (Array.isArray(current)) {
      const idx = parseInt(part, 10)
      current = current[idx]
    } else {
      return ''
    }
  }
  return typeof current === 'string' ? current : ''
}

export function SectionEditor({
  sectionKey,
  enData,
  arData,
  onChange,
}: SectionEditorProps) {
  const enSection = (enData[sectionKey] as Record<string, unknown>) ?? {}
  const arSection = (arData[sectionKey] as Record<string, unknown>) ?? {}

  const enFields = flattenObject(enSection)

  if (enFields.length === 0) {
    return (
      <p
        style={{
          color: 'rgba(255,255,255,0.4)',
          fontSize: 13,
          fontStyle: 'italic',
        }}
      >
        No editable fields in this section.
      </p>
    )
  }

  return (
    <div>
      {enFields.map(({ key }) => {
        const enVal = getNestedValue(enSection, key)
        const arVal = getNestedValue(arSection, key)
        const parts = key.split(/\.|\[|\]/).filter(Boolean)
        const label = parts.map(toLabel).join(' › ')

        return (
          <BilingualField
            key={`${sectionKey}.${key}`}
            fieldKey={`${sectionKey}.${key}`}
            label={label}
            enValue={enVal}
            arValue={arVal}
            onChangeEn={(v) => onChange('en', `${sectionKey}.${key}`, v)}
            onChangeAr={(v) => onChange('ar', `${sectionKey}.${key}`, v)}
          />
        )
      })}
    </div>
  )
}
