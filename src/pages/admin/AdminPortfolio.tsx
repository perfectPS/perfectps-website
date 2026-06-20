import { useState, useEffect, type CSSProperties, type FormEvent } from 'react'
import { useAdminAuth } from '../../contexts/AdminAuthContext'
import {
  getPortfolio,
  createPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem,
  type PortfolioItem,
} from '../../api/adminClient'
import { Plus, Pencil, Trash2, X, Save, Monitor, Smartphone } from 'lucide-react'

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
      }}
    >
      {toast.message}
    </div>
  )
}

type FormData = {
  name: string
  sector: string
  type: 'web' | 'mobile'
  desc: string
  image: string
}

const EMPTY_FORM: FormData = {
  name: '',
  sector: '',
  type: 'web',
  desc: '',
  image: '',
}

const inputStyle: CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  background: '#070f1a',
  border: '1px solid rgba(200,168,75,0.2)',
  borderRadius: 7,
  color: '#fff',
  fontSize: 13,
  fontFamily: "'DM Sans', sans-serif",
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.15s',
}

const labelStyle: CSSProperties = {
  display: 'block',
  fontSize: 11,
  fontWeight: 600,
  color: 'rgba(255,255,255,0.45)',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  marginBottom: 5,
}

function PortfolioForm({
  initial,
  onSave,
  onCancel,
  saving,
}: {
  initial: FormData
  onSave: (data: FormData) => void
  onCancel: () => void
  saving: boolean
}) {
  const [form, setForm] = useState<FormData>(initial)

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    onSave(form)
  }

  return (
    <div
      style={{
        background: '#0d2247',
        border: '1px solid rgba(200,168,75,0.2)',
        borderRadius: 12,
        padding: 28,
        marginBottom: 32,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 24,
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: 17,
            fontWeight: 700,
            color: '#fff',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {initial.name ? 'Edit Project' : 'Add Project'}
        </h3>
        <button
          type="button"
          onClick={onCancel}
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.4)',
            cursor: 'pointer',
            padding: 4,
          }}
        >
          <X size={18} />
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
            marginBottom: 16,
          }}
        >
          <div>
            <label style={labelStyle}>Project Name</label>
            <input
              style={inputStyle}
              value={form.name}
              onChange={(e) => set('name', e.target.value)}
              required
              placeholder="e.g. PerfectPS Website"
              onFocus={(e) => (e.currentTarget.style.borderColor = '#c8a84b')}
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = 'rgba(200,168,75,0.2)')
              }
            />
          </div>
          <div>
            <label style={labelStyle}>Sector</label>
            <input
              style={inputStyle}
              value={form.sector}
              onChange={(e) => set('sector', e.target.value)}
              required
              placeholder="e.g. Technology"
              onFocus={(e) => (e.currentTarget.style.borderColor = '#c8a84b')}
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = 'rgba(200,168,75,0.2)')
              }
            />
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={labelStyle}>Type</label>
          <select
            value={form.type}
            onChange={(e) => set('type', e.target.value)}
            style={{
              ...inputStyle,
              appearance: 'none',
              cursor: 'pointer',
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = '#c8a84b')}
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = 'rgba(200,168,75,0.2)')
            }
          >
            <option value="web">Web</option>
            <option value="mobile">Mobile</option>
          </select>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={labelStyle}>Description</label>
          <textarea
            value={form.desc}
            onChange={(e) => set('desc', e.target.value)}
            rows={3}
            placeholder="Brief project description…"
            style={{
              ...inputStyle,
              resize: 'vertical',
              minHeight: 72,
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = '#c8a84b')}
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = 'rgba(200,168,75,0.2)')
            }
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={labelStyle}>Image Path / URL</label>
          <input
            style={inputStyle}
            value={form.image}
            onChange={(e) => set('image', e.target.value)}
            placeholder="/images/project.png"
            onFocus={(e) => (e.currentTarget.style.borderColor = '#c8a84b')}
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = 'rgba(200,168,75,0.2)')
            }
          />
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button
            type="submit"
            disabled={saving}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              padding: '10px 20px',
              background: saving ? 'rgba(200,168,75,0.5)' : '#c8a84b',
              border: 'none',
              borderRadius: 8,
              color: '#070f1a',
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              cursor: saving ? 'not-allowed' : 'pointer',
            }}
          >
            <Save size={15} />
            {saving ? 'Saving…' : 'Save'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            style={{
              padding: '10px 20px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8,
              color: 'rgba(255,255,255,0.7)',
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

function PortfolioCard({
  item,
  onEdit,
  onDelete,
}: {
  item: PortfolioItem
  onEdit: () => void
  onDelete: () => void
}) {
  return (
    <div
      style={{
        background: '#0d2247',
        border: '1px solid rgba(200,168,75,0.15)',
        borderRadius: 12,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image */}
      <div
        style={{
          height: 130,
          background: '#0a1830',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        ) : (
          <div style={{ color: 'rgba(255,255,255,0.15)' }}>
            {item.type === 'mobile' ? (
              <Smartphone size={32} />
            ) : (
              <Monitor size={32} />
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '16px', flex: 1 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 8,
            marginBottom: 6,
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: 15,
              fontWeight: 700,
              color: '#fff',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {item.name}
          </h3>
          <span
            style={{
              padding: '2px 8px',
              borderRadius: 4,
              fontSize: 11,
              fontWeight: 600,
              background:
                item.type === 'web'
                  ? 'rgba(96,165,250,0.15)'
                  : 'rgba(167,139,250,0.15)',
              color: item.type === 'web' ? '#60a5fa' : '#a78bfa',
              whiteSpace: 'nowrap',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {item.type}
          </span>
        </div>
        <p
          style={{
            margin: '0 0 4px',
            fontSize: 12,
            color: '#c8a84b',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
          }}
        >
          {item.sector}
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 13,
            color: 'rgba(255,255,255,0.5)',
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1.5,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {item.desc}
        </p>
      </div>

      {/* Actions */}
      <div
        style={{
          padding: '12px 16px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          gap: 8,
        }}
      >
        <button
          onClick={onEdit}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            padding: '8px',
            background: 'rgba(200,168,75,0.1)',
            border: '1px solid rgba(200,168,75,0.2)',
            borderRadius: 6,
            color: '#c8a84b',
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
            cursor: 'pointer',
          }}
        >
          <Pencil size={13} />
          Edit
        </button>
        <button
          onClick={onDelete}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            padding: '8px',
            background: 'rgba(239,68,68,0.08)',
            border: '1px solid rgba(239,68,68,0.2)',
            borderRadius: 6,
            color: '#f87171',
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
            cursor: 'pointer',
          }}
        >
          <Trash2 size={13} />
          Delete
        </button>
      </div>
    </div>
  )
}

export function AdminPortfolio() {
  const { token } = useAdminAuth()
  const [items, setItems] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState<Toast>(null)
  const [showForm, setShowForm] = useState(false)
  const [editItem, setEditItem] = useState<PortfolioItem | null>(null)

  function showToast(type: 'success' | 'error', message: string) {
    setToast({ type, message })
    setTimeout(() => setToast(null), 4000)
  }

  useEffect(() => {
    if (!token) return
    setLoading(true)
    getPortfolio(token)
      .then(setItems)
      .catch((err) => showToast('error', err.message))
      .finally(() => setLoading(false))
  }, [token])

  async function handleSave(data: FormData) {
    if (!token) return
    setSaving(true)
    try {
      if (editItem) {
        const updated = await updatePortfolioItem(editItem.id, data, token)
        setItems((prev) => prev.map((i) => (i.id === editItem.id ? updated : i)))
        showToast('success', 'Project updated!')
      } else {
        const created = await createPortfolioItem(data, token)
        setItems((prev) => [...prev, created])
        showToast('success', 'Project added!')
      }
      setShowForm(false)
      setEditItem(null)
    } catch (err) {
      showToast('error', err instanceof Error ? err.message : 'Failed to save')
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(item: PortfolioItem) {
    if (!window.confirm(`Delete "${item.name}"? This cannot be undone.`)) return
    if (!token) return
    try {
      await deletePortfolioItem(item.id, token)
      setItems((prev) => prev.filter((i) => i.id !== item.id))
      showToast('success', 'Project deleted.')
    } catch (err) {
      showToast('error', err instanceof Error ? err.message : 'Failed to delete')
    }
  }

  function startEdit(item: PortfolioItem) {
    setEditItem(item)
    setShowForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function openAdd() {
    setEditItem(null)
    setShowForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const formInitial: FormData = editItem
    ? {
        name: editItem.name,
        sector: editItem.sector,
        type: editItem.type,
        desc: editItem.desc,
        image: editItem.image,
      }
    : EMPTY_FORM

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
            Portfolio
          </h1>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>
            {items.length} project{items.length !== 1 ? 's' : ''}
          </p>
        </div>
        <button
          onClick={openAdd}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 7,
            padding: '10px 20px',
            background: '#c8a84b',
            border: 'none',
            borderRadius: 8,
            color: '#070f1a',
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
            cursor: 'pointer',
          }}
        >
          <Plus size={16} />
          Add Project
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <PortfolioForm
          initial={formInitial}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false)
            setEditItem(null)
          }}
          saving={saving}
        />
      )}

      {/* Grid */}
      {loading ? (
        <div
          style={{
            padding: 60,
            textAlign: 'center',
            color: 'rgba(255,255,255,0.35)',
            fontSize: 14,
          }}
        >
          Loading portfolio…
        </div>
      ) : items.length === 0 ? (
        <div
          style={{
            padding: 60,
            textAlign: 'center',
            color: 'rgba(255,255,255,0.35)',
            fontSize: 14,
          }}
        >
          No portfolio items yet. Click "Add Project" to add the first one.
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {items.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onEdit={() => startEdit(item)}
              onDelete={() => handleDelete(item)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
