import { useState, useEffect, useCallback, type CSSProperties } from 'react'
import { useAdminAuth } from '../../contexts/AdminAuthContext'
import { getContent, saveContent } from '../../api/adminClient'
import { SectionEditor } from '../../components/admin/SectionEditor'
import { Save, CheckCircle, AlertCircle } from 'lucide-react'

const SECTION_TABS = [
  { key: 'nav',       label: 'Navigation' },
  { key: 'hero',      label: 'Hero' },
  { key: 'services',  label: 'Services' },
  { key: 'whyus',     label: 'Why Us' },
  { key: 'process',   label: 'Process' },
  { key: 'work',      label: 'Work' },
  { key: 'techstack', label: 'Tech Stack' },
  { key: 'about',     label: 'About' },
  { key: 'products',  label: 'Products' },
  { key: 'pssecure',  label: 'PS Secure' },
  { key: 'footer',    label: 'Footer' },
  { key: 'contact',   label: 'Contact' },
]

type Toast = { type: 'success' | 'error'; message: string } | null

function ToastBanner({ toast }: { toast: Toast }) {
  if (!toast) return null
  const isSuccess = toast.type === 'success'
  return (
    <div
      style={{
        position: 'fixed',
        top: 20,
        right: 24,
        zIndex: 1000,
        padding: '12px 18px',
        borderRadius: 8,
        background: isSuccess ? 'rgba(52,211,153,0.12)' : 'rgba(239,68,68,0.12)',
        border: `1px solid ${isSuccess ? 'rgba(52,211,153,0.35)' : 'rgba(239,68,68,0.35)'}`,
        color: isSuccess ? '#34d399' : '#f87171',
        fontSize: 14,
        fontFamily: "'DM Sans', sans-serif",
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
        animation: 'fadeInDown 0.2s ease',
      }}
    >
      {isSuccess ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
      {toast.message}
    </div>
  )
}

function setNestedValue(
  obj: Record<string, unknown>,
  path: string,
  value: string
): Record<string, unknown> {
  const parts = path.split(/\.|\[(\d+)\]/).filter(Boolean)
  const clone = structuredClone(obj)
  let current: Record<string, unknown> = clone

  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i]
    if (current[part] === undefined || current[part] === null) {
      current[part] = {}
    }
    current = current[part] as Record<string, unknown>
  }

  current[parts[parts.length - 1]] = value
  return clone
}

export function AdminContent() {
  const { token } = useAdminAuth()
  const [activeTab, setActiveTab] = useState(SECTION_TABS[0].key)
  const [enData, setEnData] = useState<Record<string, unknown>>({})
  const [arData, setArData] = useState<Record<string, unknown>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState<Toast>(null)

  useEffect(() => {
    if (!token) return
    setLoading(true)
    Promise.all([getContent('en', token), getContent('ar', token)])
      .then(([en, ar]) => {
        setEnData(en)
        setArData(ar)
      })
      .catch((err) => {
        showToast('error', err instanceof Error ? err.message : 'Failed to load content')
      })
      .finally(() => setLoading(false))
  }, [token])

  function showToast(type: 'success' | 'error', message: string) {
    setToast({ type, message })
    setTimeout(() => setToast(null), 4000)
  }

  const handleChange = useCallback(
    (lang: 'en' | 'ar', path: string, value: string) => {
      // path is like "sectionKey.fieldKey"
      const dotIndex = path.indexOf('.')
      const sectionKey = dotIndex === -1 ? path : path.slice(0, dotIndex)
      const fieldPath = dotIndex === -1 ? '' : path.slice(dotIndex + 1)

      if (lang === 'en') {
        setEnData((prev) => {
          const section = (prev[sectionKey] as Record<string, unknown>) ?? {}
          const updated = fieldPath
            ? setNestedValue(section, fieldPath, value)
            : { ...section }
          return { ...prev, [sectionKey]: updated }
        })
      } else {
        setArData((prev) => {
          const section = (prev[sectionKey] as Record<string, unknown>) ?? {}
          const updated = fieldPath
            ? setNestedValue(section, fieldPath, value)
            : { ...section }
          return { ...prev, [sectionKey]: updated }
        })
      }
    },
    []
  )

  async function handleSave() {
    if (!token) return
    setSaving(true)
    try {
      await Promise.all([
        saveContent('en', enData, token),
        saveContent('ar', arData, token),
      ])
      showToast('success', 'Content saved successfully!')
    } catch (err) {
      showToast('error', err instanceof Error ? err.message : 'Failed to save')
    } finally {
      setSaving(false)
    }
  }

  const tabStyle = (isActive: boolean): CSSProperties => ({
    padding: '9px 16px',
    fontSize: 13,
    fontWeight: isActive ? 600 : 500,
    color: isActive ? '#c8a84b' : 'rgba(255,255,255,0.5)',
    background: isActive ? 'rgba(200,168,75,0.1)' : 'transparent',
    border: 'none',
    borderBottom: isActive ? '2px solid #c8a84b' : '2px solid transparent',
    cursor: 'pointer',
    fontFamily: "'DM Sans', sans-serif",
    transition: 'color 0.15s, background 0.15s',
    whiteSpace: 'nowrap',
  })

  return (
    <div
      style={{
        padding: '36px 40px',
        maxWidth: 1100,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <ToastBanner toast={toast} />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 28,
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <div>
          <h1
            style={{ margin: '0 0 4px', fontSize: 26, fontWeight: 700, color: '#fff' }}
          >
            Content Editor
          </h1>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>
            Edit bilingual content for all website sections.
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving || loading}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 22px',
            background: saving ? 'rgba(200,168,75,0.5)' : '#c8a84b',
            border: 'none',
            borderRadius: 8,
            color: '#070f1a',
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
            cursor: saving || loading ? 'not-allowed' : 'pointer',
            transition: 'background 0.15s',
          }}
        >
          <Save size={16} />
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
      </div>

      {/* Tab bar */}
      <div
        style={{
          display: 'flex',
          overflowX: 'auto',
          borderBottom: '1px solid rgba(200,168,75,0.15)',
          marginBottom: 28,
          gap: 2,
        }}
      >
        {SECTION_TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={tabStyle(activeTab === tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {loading ? (
        <div
          style={{
            padding: 40,
            textAlign: 'center',
            color: 'rgba(255,255,255,0.4)',
            fontSize: 14,
          }}
        >
          Loading content…
        </div>
      ) : (
        <div
          style={{
            background: '#0d2247',
            border: '1px solid rgba(200,168,75,0.15)',
            borderRadius: 12,
            padding: 28,
          }}
        >
          <SectionEditor
            key={activeTab}
            sectionKey={activeTab}
            enData={enData as Record<string, Record<string, unknown>>}
            arData={arData as Record<string, Record<string, unknown>>}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  )
}
