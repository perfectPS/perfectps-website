import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react'
import { login as apiLogin } from '../api/adminClient'

const STORAGE_KEY = 'admin_token'

interface AdminAuthContextValue {
  token: string | null
  isAuth: boolean
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null)

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(
    () => localStorage.getItem(STORAGE_KEY)
  )

  const login = useCallback(async (username: string, password: string) => {
    const res = await apiLogin(username, password)
    localStorage.setItem(STORAGE_KEY, res.token)
    setToken(res.token)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setToken(null)
  }, [])

  return (
    <AdminAuthContext.Provider
      value={{ token, isAuth: !!token, login, logout }}
    >
      {children}
    </AdminAuthContext.Provider>
  )
}

export function useAdminAuth(): AdminAuthContextValue {
  const ctx = useContext(AdminAuthContext)
  if (!ctx) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider')
  }
  return ctx
}
