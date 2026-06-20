import { useState, type FormEvent, type CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdminAuth } from '../../contexts/AdminAuthContext'

const inputStyle: CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  background: '#0d1b2e',
  border: '1px solid rgba(200,168,75,0.25)',
  borderRadius: 8,
  color: '#fff',
  fontSize: 14,
  fontFamily: "'DM Sans', sans-serif",
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.15s',
}

export function AdminLogin() {
  const { login } = useAdminAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(username, password)
      navigate('/admin')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#070f1a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 380,
          padding: '0 20px',
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 8,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                background: 'linear-gradient(135deg, #c8a84b, #a07830)',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                fontWeight: 800,
                color: '#070f1a',
                letterSpacing: '-0.02em',
              }}
            >
              PS
            </div>
            <span
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: '#fff',
                letterSpacing: '-0.01em',
              }}
            >
              perfectPS
            </span>
          </div>
          <p
            style={{
              margin: 0,
              color: 'rgba(255,255,255,0.45)',
              fontSize: 13,
            }}
          >
            Admin Panel
          </p>
        </div>

        {/* Card */}
        <div
          style={{
            background: '#0d2247',
            border: '1px solid rgba(200,168,75,0.15)',
            borderRadius: 12,
            padding: 32,
          }}
        >
          <h1
            style={{
              margin: '0 0 24px',
              fontSize: 20,
              fontWeight: 700,
              color: '#fff',
            }}
          >
            Sign In
          </h1>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  display: 'block',
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: 6,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                required
                autoComplete="username"
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#c8a84b'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(200,168,75,0.25)'
                }}
              />
            </div>

            <div style={{ marginBottom: 24 }}>
              <label
                style={{
                  display: 'block',
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: 6,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                autoComplete="current-password"
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#c8a84b'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(200,168,75,0.25)'
                }}
              />
            </div>

            {error && (
              <div
                style={{
                  marginBottom: 16,
                  padding: '10px 14px',
                  background: 'rgba(239,68,68,0.12)',
                  border: '1px solid rgba(239,68,68,0.3)',
                  borderRadius: 6,
                  color: '#f87171',
                  fontSize: 13,
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '13px',
                background: loading ? 'rgba(200,168,75,0.5)' : '#c8a84b',
                border: 'none',
                borderRadius: 8,
                color: '#070f1a',
                fontSize: 15,
                fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'background 0.15s, opacity 0.15s',
              }}
              onMouseEnter={(e) => {
                if (!loading) e.currentTarget.style.background = '#d4b55a'
              }}
              onMouseLeave={(e) => {
                if (!loading) e.currentTarget.style.background = '#c8a84b'
              }}
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
