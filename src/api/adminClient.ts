const BASE_URL = '/api/admin'

export interface PortfolioItem {
  id: string
  name: string
  sector: string
  type: 'web' | 'mobile'
  desc: string
  image: string
}

async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  if (!res.ok) {
    const body = await res.json().catch(() => ({ error: res.statusText }))
    throw new Error(body.error || `HTTP ${res.status}`)
  }

  return res.json() as Promise<T>
}

function authHeaders(token: string): Record<string, string> {
  return { Authorization: `Bearer ${token}` }
}

export async function login(
  username: string,
  password: string
): Promise<{ token: string }> {
  return request<{ token: string }>('/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  })
}

export async function getContent(
  lang: 'en' | 'ar',
  token: string
): Promise<Record<string, Record<string, unknown>>> {
  return request<Record<string, Record<string, unknown>>>(`/content/${lang}`, {
    headers: authHeaders(token),
  })
}

export async function saveContent(
  lang: 'en' | 'ar',
  data: Record<string, unknown>,
  token: string
): Promise<void> {
  await request<{ success: true }>(`/content/${lang}`, {
    method: 'PUT',
    headers: authHeaders(token),
    body: JSON.stringify(data),
  })
}

export async function getPortfolio(token: string): Promise<PortfolioItem[]> {
  return request<PortfolioItem[]>('/portfolio', {
    headers: authHeaders(token),
  })
}

export async function createPortfolioItem(
  item: Omit<PortfolioItem, 'id'>,
  token: string
): Promise<PortfolioItem> {
  return request<PortfolioItem>('/portfolio', {
    method: 'POST',
    headers: authHeaders(token),
    body: JSON.stringify(item),
  })
}

export async function updatePortfolioItem(
  id: string,
  item: Partial<PortfolioItem>,
  token: string
): Promise<PortfolioItem> {
  return request<PortfolioItem>(`/portfolio/${id}`, {
    method: 'PUT',
    headers: authHeaders(token),
    body: JSON.stringify(item),
  })
}

export async function deletePortfolioItem(
  id: string,
  token: string
): Promise<void> {
  await request<{ success: true }>(`/portfolio/${id}`, {
    method: 'DELETE',
    headers: authHeaders(token),
  })
}
