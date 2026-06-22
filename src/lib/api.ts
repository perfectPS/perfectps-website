const BASE = '/api'

function token(): string | null {
  return localStorage.getItem('ps_token')
}

function authHeaders(): Record<string, string> {
  const t = token()
  return t ? { Authorization: `Bearer ${t}` } : {}
}

async function req<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(BASE + path, {
    headers: { 'Content-Type': 'application/json', ...authHeaders(), ...(init?.headers ?? {}) },
    ...init,
  })
  const json = await res.json()
  if (!res.ok) throw new Error(json.error ?? `HTTP ${res.status}`)
  return json as T
}

export interface AuthUser {
  id: string
  email: string
  name: string
  type?: string
}

export interface Subscription {
  plan: string
  status: string
  endsAt: string | null
  isPro: boolean
}

export const api = {
  login: (email: string, password: string) =>
    req<{ token: string; user: AuthUser }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  loginFirebase: (idToken: string) =>
    req<{ token: string; user: AuthUser }>('/auth/firebase', {
      method: 'POST',
      body: JSON.stringify({ idToken }),
    }),

  getSubscription: () => req<Subscription>('/subscription/me'),

  checkout: (plan: 'monthly' | 'yearly') =>
    req<{ url: string }>('/subscription/checkout', {
      method: 'POST',
      body: JSON.stringify({ plan }),
    }),

  portal: () =>
    req<{ url: string }>('/subscription/portal', {
      method: 'POST',
    }),
}
