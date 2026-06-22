import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { api, type AuthUser, type Subscription } from '../lib/api'
import { signInWithGoogle, firebaseSignOut } from '../lib/firebase'
import { usePageSeo } from '../hooks/usePageSeo'
import { useLang } from '../hooks/useLang'

const GOLD = '#FACC15'
const NAVY = '#0d1b2a'
const CARD = '#111d2c'
const CARD2 = '#0f1923'
const BORDER = '#1e3047'
const MUTED = '#4a6275'
const TEXT = '#c5d6e4'

function setToken(t: string) { localStorage.setItem('ps_token', t) }
function getToken() { return localStorage.getItem('ps_token') }
function clearToken() { localStorage.removeItem('ps_token') }

// ─── Login Screen ─────────────────────────────────────────────────────────────

function LoginView({ onLogin }: { onLogin: (user: AuthUser) => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleEmail(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const { token, user } = await api.login(email, password)
      setToken(token)
      onLogin(user)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  async function handleGoogle() {
    setError('')
    setGoogleLoading(true)
    try {
      const idToken = await signInWithGoogle()
      const { token, user } = await api.loginFirebase(idToken)
      setToken(token)
      onLogin(user)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Google sign-in failed')
    } finally {
      setGoogleLoading(false)
    }
  }

  return (
    <div style={ls.wrap}>
      {/* Left panel */}
      <div style={ls.left}>
        <Link to="/en" style={ls.logo}>
          <span style={ls.logoPS}>PS</span>
          <span style={ls.logoText}>Secure</span>
        </Link>
        <h1 style={ls.headline}>Your privacy,<br />always protected.</h1>
        <p style={ls.sub}>Manage your subscription, upgrade your plan, and download the app — all in one place.</p>
        <div style={ls.features}>
          {[
            ['🌍', '20+ server locations worldwide'],
            ['⚡', 'WireGuard · AmneziaWG · Hysteria2 · Trojan'],
            ['🛡', 'AdGuard DNS — blocks ads & trackers'],
            ['🔒', 'Kill switch — your IP stays hidden'],
            ['📱', 'Up to 5 devices simultaneously'],
          ].map(([icon, text]) => (
            <div key={text as string} style={ls.featureRow}>
              <span style={ls.featureIcon}>{icon}</span>
              <span style={ls.featureText}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div style={ls.right}>
        <div style={ls.card}>
          <h2 style={ls.cardTitle}>Sign in</h2>
          <p style={ls.cardSub}>Access your billing dashboard</p>

          {error && <div style={s.error}>{error}</div>}

          <button onClick={handleGoogle} disabled={googleLoading} style={ls.btnGoogle}>
            <GoogleIcon />
            {googleLoading ? 'Opening…' : 'Continue with Google'}
          </button>

          <div style={ls.divider}><span style={ls.dividerText}>or sign in with email</span></div>

          <form onSubmit={handleEmail} style={ls.form}>
            <div style={ls.field}>
              <label style={ls.label}>Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={ls.input}
              />
            </div>
            <div style={ls.field}>
              <label style={ls.label}>Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                style={ls.input}
              />
            </div>
            <button type="submit" disabled={loading} style={ls.btnPrimary}>
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          <p style={ls.helpText}>
            Don't have an account?{' '}
            <a href="https://perfectps.com/en/ps-secure/download" style={{ color: GOLD, textDecoration: 'none' }}>
              Download PS Secure
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Dashboard Screen ──────────────────────────────────────────────────────────

const FREE_FEATURES = [
  { label: 'Server locations', free: '2 locations', pro: '20+ locations' },
  { label: 'Simultaneous devices', free: '1 device', pro: '5 devices' },
  { label: 'VPN protocols', free: 'WireGuard only', pro: 'All 4 protocols' },
  { label: 'AdGuard DNS', free: false, pro: true },
  { label: 'Kill switch', free: false, pro: true },
  { label: 'Priority support', free: false, pro: true },
]

const PRO_FEATURES = [
  '20+ server locations worldwide',
  'WireGuard · AmneziaWG · Hysteria2 · Trojan',
  'Up to 5 simultaneous devices',
  'AdGuard DNS — ad & tracker blocking',
  'Kill switch — your IP stays hidden always',
  'Priority support',
]

function DashboardView({ user, onLogout }: { user: AuthUser; onLogout: () => void }) {
  const [sub, setSub] = useState<Subscription | null>(null)
  const [loadingSub, setLoadingSub] = useState(true)
  const [checkoutLoading, setCheckoutLoading] = useState<'monthly' | 'yearly' | null>(null)
  const [portalLoading, setPortalLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchSub = useCallback(async () => {
    try {
      const data = await api.getSubscription()
      setSub(data)
    } catch {
      setError('Failed to load subscription info.')
    } finally {
      setLoadingSub(false)
    }
  }, [])

  useEffect(() => { fetchSub() }, [fetchSub])

  async function handleCheckout(plan: 'monthly' | 'yearly') {
    setCheckoutLoading(plan)
    try {
      const { url } = await api.checkout(plan)
      window.location.href = url
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Checkout failed')
      setCheckoutLoading(null)
    }
  }

  async function handlePortal() {
    setPortalLoading(true)
    try {
      const { url } = await api.portal()
      window.location.href = url
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Could not open billing portal')
      setPortalLoading(false)
    }
  }

  const isPro = sub?.isPro ?? false
  const statusColor =
    sub?.status === 'active' ? '#22c55e' :
    sub?.status === 'past_due' ? '#f59e0b' : '#ef4444'

  return (
    <div style={s.page}>
      {/* Header */}
      <header style={s.header}>
        <Link to="/en" style={s.logo}>
          <span style={s.logoPS}>PS</span>
          <span style={s.logoText}>Secure</span>
        </Link>
        <div style={s.headerCenter}>
          <Link to="/en" style={s.breadcrumb}>← Back to site</Link>
        </div>
        <div style={s.headerRight}>
          <span style={s.userEmail}>{user.email}</span>
          <button onClick={onLogout} style={s.btnLogout}>Sign Out</button>
        </div>
      </header>

      <main style={s.main}>
        {error && <div style={s.error}>{error}</div>}

        {/* Plan status hero */}
        <div style={{ ...s.hero, borderColor: isPro ? GOLD : BORDER }}>
          <div style={s.heroLeft}>
            <p style={s.sectionLabel}>CURRENT PLAN</p>
            <div style={s.heroTitleRow}>
              <h1 style={{ ...s.heroTitle, color: isPro ? GOLD : '#fff' }}>
                {isPro ? 'Pro' : 'Free'}
              </h1>
              {sub && (
                <span style={{ ...s.statusBadge, color: statusColor, borderColor: statusColor, background: `${statusColor}18` }}>
                  {sub.status === 'active' ? 'Active' : sub.status === 'past_due' ? 'Past Due' : sub.status === 'canceled' ? 'Canceled' : '—'}
                </span>
              )}
              {loadingSub && <span style={{ color: MUTED, fontSize: 14 }}>Loading…</span>}
            </div>
            {sub?.endsAt && (
              <p style={s.renewText}>
                {sub.status === 'canceled' ? 'Access until' : 'Renews'}{' '}
                {new Date(sub.endsAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            )}
            {!isPro && (
              <p style={s.renewText}>Upgrade to unlock all servers, protocols and features.</p>
            )}
          </div>
          <div style={s.heroRight}>
            {isPro ? (
              <button onClick={handlePortal} disabled={portalLoading} style={s.btnOutline}>
                {portalLoading ? 'Opening…' : 'Manage Billing'}
              </button>
            ) : (
              <a href="#upgrade" style={s.btnGold}>Upgrade to Pro ↓</a>
            )}
          </div>
        </div>

        {/* Free user: comparison table + upgrade */}
        {!loadingSub && !isPro && (
          <>
            {/* Comparison table */}
            <div style={s.card}>
              <p style={s.sectionLabel}>FREE VS PRO</p>
              <table style={s.table}>
                <thead>
                  <tr>
                    <th style={{ ...s.th, textAlign: 'left', color: MUTED }}>Feature</th>
                    <th style={{ ...s.th, color: MUTED }}>Free</th>
                    <th style={{ ...s.th, color: GOLD }}>Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {FREE_FEATURES.map(f => (
                    <tr key={f.label} style={s.tr}>
                      <td style={s.td}>{f.label}</td>
                      <td style={{ ...s.td, textAlign: 'center', color: MUTED }}>
                        {typeof f.free === 'boolean' ? (f.free ? '✓' : '✗') : f.free}
                      </td>
                      <td style={{ ...s.td, textAlign: 'center', color: GOLD, fontWeight: 600 }}>
                        {typeof f.pro === 'boolean' ? (f.pro ? '✓' : '✗') : f.pro}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Upgrade cards */}
            <div id="upgrade" style={s.upgradeSection}>
              <p style={s.sectionLabel}>UPGRADE TO PRO</p>
              <h2 style={s.upgradeTitle}>Choose your plan</h2>

              <div style={s.planGrid}>
                {/* Monthly */}
                <div style={s.planCard}>
                  <p style={s.planName}>Monthly</p>
                  <div style={s.priceRow}>
                    <span style={s.priceNum}>$4.99</span>
                    <span style={s.pricePer}>/month</span>
                  </div>
                  <p style={{ color: MUTED, fontSize: 13, marginBottom: 24, minHeight: 20 }}>&nbsp;</p>
                  <button
                    onClick={() => handleCheckout('monthly')}
                    disabled={checkoutLoading !== null}
                    style={s.btnOutline}
                  >
                    {checkoutLoading === 'monthly' ? 'Redirecting…' : 'Get Monthly'}
                  </button>
                </div>

                {/* Yearly — highlighted */}
                <div style={s.planCardFeatured}>
                  <div style={s.featuredBadge}>BEST VALUE</div>
                  <p style={s.planName}>Yearly</p>
                  <div style={s.priceRow}>
                    <span style={{ ...s.priceNum, color: GOLD }}>$35.99</span>
                    <span style={s.pricePer}>/year</span>
                  </div>
                  <p style={{ color: MUTED, fontSize: 13, marginBottom: 24 }}>~$3.00/month · Save 40%</p>
                  <button
                    onClick={() => handleCheckout('yearly')}
                    disabled={checkoutLoading !== null}
                    style={s.btnGoldFull}
                  >
                    {checkoutLoading === 'yearly' ? 'Redirecting…' : 'Get Yearly'}
                  </button>
                </div>
              </div>

              <p style={s.guarantee}>✓ 7-day money-back guarantee · No questions asked · Cancel anytime</p>
            </div>
          </>
        )}

        {/* Pro user: what's included */}
        {!loadingSub && isPro && (
          <div style={s.card}>
            <p style={s.sectionLabel}>WHAT'S INCLUDED IN YOUR PLAN</p>
            <div style={s.proFeatures}>
              {PRO_FEATURES.map(f => (
                <div key={f} style={s.proFeatureRow}>
                  <span style={s.proCheck}>✓</span>
                  <span style={{ color: TEXT, fontSize: 15 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Download */}
        <div style={s.card}>
          <p style={s.sectionLabel}>GET THE APP</p>
          <p style={{ color: MUTED, marginBottom: 20, fontSize: 14 }}>
            PS Secure is available on iOS and Android. Your subscription is shared across all your devices.
          </p>
          <div style={s.storeRow}>
            <a href="https://perfectps.com/en/ps-secure/download" style={s.storeBtn}>
              <AppleIcon />
              <span>
                <span style={{ display: 'block', fontSize: 10, color: MUTED }}>Download on the</span>
                <span style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#fff' }}>App Store</span>
              </span>
            </a>
            <a href="https://perfectps.com/en/ps-secure/download" style={s.storeBtn}>
              <GooglePlayIcon />
              <span>
                <span style={{ display: 'block', fontSize: 10, color: MUTED }}>Get it on</span>
                <span style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#fff' }}>Google Play</span>
              </span>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function Billing() {
  const lang = useLang()
  usePageSeo({
    title: 'My Subscription | PS Secure VPN — perfectPS',
    description: 'Manage your PS Secure VPN subscription, view billing history, and update your plan.',
    canonical: `https://perfectps.com/${lang}/billing`,
    lang,
  })
  const [user, setUser] = useState<AuthUser | null>(null)

  useEffect(() => {
    const t = getToken()
    if (!t) return
    try {
      const payload = JSON.parse(atob(t.split('.')[1]))
      setUser({ id: payload.sub, email: payload.email ?? '', name: payload.name ?? '' })
    } catch {
      clearToken()
    }
  }, [])

  function handleLogout() {
    clearToken()
    firebaseSignOut().catch(() => {})
    setUser(null)
  }

  if (!user) return <LoginView onLogin={u => setUser(u)} />
  return <DashboardView user={user} onLogout={handleLogout} />
}

// ─── Google Icon ─────────────────────────────────────────────────────────────

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" style={{ marginRight: 10, flexShrink: 0 }}>
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 814 1000" style={{ marginRight: 10, flexShrink: 0 }} fill="#ffffff">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-42.4-148.8-97.6S89.5 725.1 89.5 589.3c0-249.1 167.1-381.4 332-381.4 83.4 0 152.8 55.7 205 55.7 49 0 128.2-58.2 227.5-58.2zM544.8 64.2c-19.5-22.3-26.3-45.4-26.3-67.5 0-52.8 41.7-108.7 104.4-108.7 59.4 0 107.4 43.6 136.7 95.3-26.3 17.4-74.4 43.6-130.8 43.6-27.5 0-63.6-11.5-84-62.7z" />
    </svg>
  )
}

function GooglePlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 512 512" style={{ marginRight: 10, flexShrink: 0 }}>
      <path fill="#00C753" d="M17.8 492.7c-4.2-4.5-6.8-11.2-6.8-20V39.3c0-8.8 2.6-15.5 6.8-20L18.6 18l240.3 240.3v5.7L18.6 504.1l-.8-11.4z" />
      <path fill="#FFDD07" d="M338.1 339.5l-79.2-79.2v-5.7l79.3-79.3 1 .5 93.7 53.2c26.8 15.2 26.8 40 0 55.3l-93.7 53.2-1 .5z" />
      <path fill="#FF3B30" d="M339.1 338.9L258.9 258.7 17.8 499.7c8.8 9.4 23.4 10.5 39.8 1.2l281.5-159.7" />
      <path fill="#0099FF" d="M339.1 178.5L57.6 18.7C41.2 9.5 26.6 10.7 17.8 20L258.9 261.3l80.2-82.8z" />
    </svg>
  )
}

// ─── Login Styles ─────────────────────────────────────────────────────────────

const ls = {
  wrap: {
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    fontFamily: "'DM Sans', sans-serif",
    background: NAVY,
  } as React.CSSProperties,

  left: {
    background: CARD2,
    borderRight: `1px solid ${BORDER}`,
    padding: '64px 56px',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
  } as React.CSSProperties,

  logo: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    marginBottom: 48,
  } as React.CSSProperties,

  logoPS: {
    fontFamily: "'Chakra Petch', monospace",
    fontWeight: 700,
    fontSize: 22,
    color: GOLD,
  } as React.CSSProperties,

  logoText: {
    fontFamily: "'Chakra Petch', monospace",
    fontWeight: 700,
    fontSize: 22,
    color: '#fff',
  } as React.CSSProperties,

  headline: {
    fontFamily: "'Chakra Petch', monospace",
    fontWeight: 700,
    fontSize: 36,
    color: '#fff',
    lineHeight: 1.2,
    marginBottom: 16,
  } as React.CSSProperties,

  sub: {
    color: MUTED,
    fontSize: 16,
    lineHeight: 1.6,
    marginBottom: 40,
  } as React.CSSProperties,

  features: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 16,
  } as React.CSSProperties,

  featureRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
  } as React.CSSProperties,

  featureIcon: {
    fontSize: 18,
    width: 28,
    textAlign: 'center' as const,
    flexShrink: 0,
  } as React.CSSProperties,

  featureText: {
    color: TEXT,
    fontSize: 14,
  } as React.CSSProperties,

  right: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px 40px',
  } as React.CSSProperties,

  card: {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 16,
    padding: '40px 36px',
    width: '100%',
    maxWidth: 400,
  } as React.CSSProperties,

  cardTitle: {
    fontFamily: "'Chakra Petch', monospace",
    fontWeight: 700,
    fontSize: 24,
    color: '#fff',
    marginBottom: 4,
  } as React.CSSProperties,

  cardSub: {
    color: MUTED,
    fontSize: 14,
    marginBottom: 28,
  } as React.CSSProperties,

  btnGoogle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff',
    color: '#1a1a1a',
    border: 'none',
    borderRadius: 10,
    padding: '12px 20px',
    fontWeight: 600,
    fontSize: 15,
    cursor: 'pointer',
    width: '100%',
    transition: 'opacity 0.2s',
  } as React.CSSProperties,

  divider: {
    position: 'relative' as const,
    textAlign: 'center' as const,
    margin: '24px 0',
  } as React.CSSProperties,

  dividerText: {
    display: 'inline-block',
    background: CARD,
    padding: '0 12px',
    color: MUTED,
    fontSize: 12,
    position: 'relative' as const,
    zIndex: 1,
  } as React.CSSProperties,

  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 16,
  } as React.CSSProperties,

  field: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 6,
  } as React.CSSProperties,

  label: {
    fontSize: 13,
    fontWeight: 500,
    color: TEXT,
  } as React.CSSProperties,

  input: {
    background: '#0a131e',
    border: `1px solid ${BORDER}`,
    borderRadius: 10,
    padding: '12px 14px',
    color: '#fff',
    fontSize: 15,
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box' as const,
  } as React.CSSProperties,

  btnPrimary: {
    background: GOLD,
    color: '#0d1b2a',
    border: 'none',
    borderRadius: 10,
    padding: '13px 20px',
    fontWeight: 700,
    fontSize: 15,
    cursor: 'pointer',
    width: '100%',
    marginTop: 4,
    fontFamily: "'Chakra Petch', monospace",
    letterSpacing: '0.02em',
  } as React.CSSProperties,

  helpText: {
    textAlign: 'center' as const,
    fontSize: 13,
    color: MUTED,
    marginTop: 24,
  } as React.CSSProperties,
}

// ─── Dashboard Styles ─────────────────────────────────────────────────────────

const s = {
  page: {
    minHeight: '100vh',
    background: NAVY,
    color: '#fff',
    fontFamily: "'DM Sans', sans-serif",
  } as React.CSSProperties,

  header: {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    alignItems: 'center',
    padding: '14px 32px',
    borderBottom: `1px solid ${BORDER}`,
    background: CARD,
    position: 'sticky' as const,
    top: 0,
    zIndex: 10,
  } as React.CSSProperties,

  logo: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  } as React.CSSProperties,

  logoPS: {
    fontFamily: "'Chakra Petch', monospace",
    fontWeight: 700,
    fontSize: 20,
    color: GOLD,
  } as React.CSSProperties,

  logoText: {
    fontFamily: "'Chakra Petch', monospace",
    fontWeight: 700,
    fontSize: 20,
    color: '#fff',
  } as React.CSSProperties,

  headerCenter: {
    display: 'flex',
    justifyContent: 'center',
  } as React.CSSProperties,

  breadcrumb: {
    color: MUTED,
    fontSize: 13,
    textDecoration: 'none',
    transition: 'color 0.2s',
  } as React.CSSProperties,

  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    justifyContent: 'flex-end',
  } as React.CSSProperties,

  userEmail: {
    color: MUTED,
    fontSize: 13,
  } as React.CSSProperties,

  btnLogout: {
    background: 'transparent',
    color: MUTED,
    border: `1px solid ${BORDER}`,
    borderRadius: 8,
    padding: '6px 14px',
    fontWeight: 500,
    fontSize: 13,
    cursor: 'pointer',
  } as React.CSSProperties,

  main: {
    maxWidth: 860,
    margin: '0 auto',
    padding: '40px 24px 80px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 24,
  } as React.CSSProperties,

  hero: {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 16,
    padding: '32px 36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
    flexWrap: 'wrap' as const,
  } as React.CSSProperties,

  heroLeft: {} as React.CSSProperties,

  heroTitleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    marginBottom: 6,
  } as React.CSSProperties,

  heroTitle: {
    fontFamily: "'Chakra Petch', monospace",
    fontWeight: 700,
    fontSize: 36,
    margin: 0,
  } as React.CSSProperties,

  statusBadge: {
    fontSize: 12,
    fontWeight: 600,
    padding: '3px 12px',
    borderRadius: 99,
    border: '1px solid',
  } as React.CSSProperties,

  renewText: {
    color: MUTED,
    fontSize: 14,
    marginTop: 4,
  } as React.CSSProperties,

  heroRight: {} as React.CSSProperties,

  card: {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 16,
    padding: '28px 32px',
  } as React.CSSProperties,

  sectionLabel: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.12em',
    color: MUTED,
    marginBottom: 16,
    textTransform: 'uppercase' as const,
  } as React.CSSProperties,

  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
  } as React.CSSProperties,

  th: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.05em',
    padding: '8px 12px',
    textAlign: 'center' as const,
    borderBottom: `1px solid ${BORDER}`,
  } as React.CSSProperties,

  tr: {
    borderBottom: `1px solid ${BORDER}`,
  } as React.CSSProperties,

  td: {
    padding: '13px 12px',
    fontSize: 14,
    color: TEXT,
    textAlign: 'left' as const,
  } as React.CSSProperties,

  upgradeSection: {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 16,
    padding: '32px 36px',
  } as React.CSSProperties,

  upgradeTitle: {
    fontFamily: "'Chakra Petch', monospace",
    fontWeight: 700,
    fontSize: 22,
    color: '#fff',
    marginBottom: 28,
  } as React.CSSProperties,

  planGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 20,
  } as React.CSSProperties,

  planCard: {
    background: '#0a131e',
    border: `1px solid ${BORDER}`,
    borderRadius: 12,
    padding: '28px 24px',
    position: 'relative' as const,
  } as React.CSSProperties,

  planCardFeatured: {
    background: '#0a131e',
    border: `2px solid ${GOLD}`,
    borderRadius: 12,
    padding: '28px 24px',
    position: 'relative' as const,
  } as React.CSSProperties,

  featuredBadge: {
    position: 'absolute' as const,
    top: -12,
    left: '50%',
    transform: 'translateX(-50%)',
    background: GOLD,
    color: '#0d1b2a',
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.1em',
    padding: '3px 12px',
    borderRadius: 99,
    fontFamily: "'Chakra Petch', monospace",
  } as React.CSSProperties,

  planName: {
    fontFamily: "'Chakra Petch', monospace",
    fontWeight: 600,
    fontSize: 16,
    color: TEXT,
    marginBottom: 12,
  } as React.CSSProperties,

  priceRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 4,
    marginBottom: 8,
  } as React.CSSProperties,

  priceNum: {
    fontSize: 36,
    fontWeight: 700,
    color: '#fff',
    fontFamily: "'Chakra Petch', monospace",
  } as React.CSSProperties,

  pricePer: {
    fontSize: 14,
    color: MUTED,
  } as React.CSSProperties,

  guarantee: {
    textAlign: 'center' as const,
    color: MUTED,
    fontSize: 13,
    marginTop: 20,
  } as React.CSSProperties,

  proFeatures: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 14,
    marginTop: 4,
  } as React.CSSProperties,

  proFeatureRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
  } as React.CSSProperties,

  proCheck: {
    color: GOLD,
    fontWeight: 700,
    fontSize: 16,
    flexShrink: 0,
    marginTop: 1,
  } as React.CSSProperties,

  storeRow: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap' as const,
  } as React.CSSProperties,

  storeBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 12,
    padding: '12px 20px',
    background: '#0a131e',
    border: `1px solid ${BORDER}`,
    borderRadius: 10,
    textDecoration: 'none',
    color: '#fff',
  } as React.CSSProperties,

  btnGold: {
    display: 'inline-block',
    background: GOLD,
    color: '#0d1b2a',
    border: 'none',
    borderRadius: 10,
    padding: '12px 24px',
    fontWeight: 700,
    fontSize: 14,
    cursor: 'pointer',
    textDecoration: 'none',
    fontFamily: "'Chakra Petch', monospace",
    letterSpacing: '0.02em',
    flexShrink: 0,
  } as React.CSSProperties,

  btnGoldFull: {
    display: 'block',
    width: '100%',
    background: GOLD,
    color: '#0d1b2a',
    border: 'none',
    borderRadius: 10,
    padding: '13px 20px',
    fontWeight: 700,
    fontSize: 15,
    cursor: 'pointer',
    fontFamily: "'Chakra Petch', monospace",
    letterSpacing: '0.02em',
    boxSizing: 'border-box' as const,
  } as React.CSSProperties,

  btnOutline: {
    display: 'block',
    width: '100%',
    background: 'transparent',
    color: TEXT,
    border: `1px solid ${BORDER}`,
    borderRadius: 10,
    padding: '13px 20px',
    fontWeight: 500,
    fontSize: 14,
    cursor: 'pointer',
    boxSizing: 'border-box' as const,
  } as React.CSSProperties,

  error: {
    background: 'rgba(239,68,68,0.1)',
    border: '1px solid rgba(239,68,68,0.3)',
    borderRadius: 10,
    padding: '12px 16px',
    color: '#fca5a5',
    fontSize: 14,
    marginBottom: 4,
  } as React.CSSProperties,
}
