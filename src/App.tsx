import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { Work } from './pages/Work'
import { PSSecure } from './pages/PSSecure'
import { NotFound } from './pages/NotFound'
import { LangLayout } from './components/layout/LangLayout'
import { AdminAuthProvider } from './contexts/AdminAuthContext'
import { AdminLogin } from './pages/admin/AdminLogin'
import { AdminLayout } from './pages/admin/AdminLayout'
import { AdminDashboard } from './pages/admin/AdminDashboard'
import { AdminContent } from './pages/admin/AdminContent'
import { AdminPortfolio } from './pages/admin/AdminPortfolio'

function getPreferredLang(): string {
  const stored = localStorage.getItem('lang')
  if (stored === 'ar' || stored === 'en') return stored
  return navigator.language.toLowerCase().startsWith('ar') ? 'ar' : 'en'
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={`/${getPreferredLang()}`} replace />} />
        <Route path="/:lang" element={<LangLayout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="ps-secure" element={<PSSecure />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route
          path="/admin/*"
          element={
            <AdminAuthProvider>
              <Routes>
                <Route path="login" element={<AdminLogin />} />
                <Route element={<AdminLayout />}>
                  <Route index element={<AdminDashboard />} />
                  <Route path="content" element={<AdminContent />} />
                  <Route path="portfolio" element={<AdminPortfolio />} />
                </Route>
              </Routes>
            </AdminAuthProvider>
          }
        />
        <Route path="*" element={<Navigate to={`/${getPreferredLang()}`} replace />} />
      </Routes>
    </BrowserRouter>
  )
}
