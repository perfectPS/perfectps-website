import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { api, type Subscription } from '../lib/api'
import { usePageSeo } from '../hooks/usePageSeo'

const GOLD = '#FACC15'
const NAVY = '#0d1b2a'
const CARD = '#111d2c'
const BORDER = '#1e3047'

export function BillingSuccess() {
  usePageSeo({
    title: 'Subscription Activated | PS Secure VPN — perfectPS',
    description: 'Your PS Secure VPN subscription is now active. Welcome aboard.',
    canonical: 'https://perfectps.com/en/billing/success',
  })
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [sub, setSub] = useState<Subscription | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('ps_token')
    if (!token) { setLoading(false); return }

    // Poll for subscription update (webhook may take a moment)
    let attempts = 0
    const poll = setInterval(async () => {
      try {
        const data = await api.getSubscription()
        if (data.isPro || attempts >= 5) {
          setSub(data)
          setLoading(false)
          clearInterval(poll)
        }
        attempts++
      } catch {
        setLoading(false)
        clearInterval(poll)
      }
    }, 1500)

    return () => clearInterval(poll)
  }, [sessionId])

  return (
    <div style={styles.wrap}>
      <div style={styles.card}>
        <div style={styles.checkIcon}>✓</div>
        <h1 style={styles.title}>You're now on Pro!</h1>
        <p style={styles.body}>
          {loading
            ? 'Activating your subscription…'
            : sub?.isPro
            ? 'Your Pro subscription is active. Enjoy full access to all servers and protocols.'
            : 'Payment received. Your subscription will activate shortly.'}
        </p>

        {sub?.isPro && (
          <div style={styles.features}>
            {[
              '20+ server locations',
              'All 4 VPN protocols',
              'Up to 5 devices',
              'AdGuard DNS + Kill Switch',
            ].map(f => (
              <div key={f} style={styles.featureRow}>
                <span style={{ color: GOLD }}>✓</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        )}

        <div style={styles.actions}>
          <Link to="/billing" style={styles.btnPrimary}>Go to Billing Dashboard</Link>
          <a
            href="https://perfectps.com/en/ps-secure/download"
            style={styles.btnSecondary}
          >
            Download the App
          </a>
        </div>
      </div>
    </div>
  )
}

const styles = {
  wrap: {
    minHeight: '100vh',
    background: NAVY,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    fontFamily: "'DM Sans', sans-serif",
    color: '#fff',
  } as React.CSSProperties,

  card: {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 16,
    padding: '48px 40px',
    maxWidth: 480,
    width: '100%',
    textAlign: 'center' as const,
  } as React.CSSProperties,

  checkIcon: {
    width: 64,
    height: 64,
    borderRadius: '50%',
    background: 'rgba(34,197,94,0.15)',
    border: '2px solid #22c55e',
    color: '#22c55e',
    fontSize: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px',
  } as React.CSSProperties,

  title: {
    fontSize: 26,
    fontWeight: 700,
    marginBottom: 12,
  } as React.CSSProperties,

  body: {
    color: '#6b8499',
    marginBottom: 28,
    lineHeight: 1.6,
  } as React.CSSProperties,

  features: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 10,
    textAlign: 'left' as const,
    background: '#0d1b2a',
    borderRadius: 10,
    padding: '16px 20px',
    marginBottom: 28,
  } as React.CSSProperties,

  featureRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontSize: 14,
    color: '#c5d6e4',
  } as React.CSSProperties,

  actions: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 12,
  } as React.CSSProperties,

  btnPrimary: {
    display: 'block',
    background: GOLD,
    color: '#0d1b2a',
    borderRadius: 8,
    padding: '12px 20px',
    fontWeight: 700,
    fontSize: 15,
    textDecoration: 'none',
    textAlign: 'center' as const,
  } as React.CSSProperties,

  btnSecondary: {
    display: 'block',
    background: 'transparent',
    color: '#c5d6e4',
    border: `1px solid ${BORDER}`,
    borderRadius: 8,
    padding: '12px 20px',
    fontWeight: 500,
    fontSize: 14,
    textDecoration: 'none',
    textAlign: 'center' as const,
  } as React.CSSProperties,
}
