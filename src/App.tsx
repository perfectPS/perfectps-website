import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { PSSecure } from './pages/PSSecure'
import { PSSecureFeatures } from './pages/PSSecureFeatures'
import { PSSecureProtocols } from './pages/PSSecureProtocols'
import { PSSecurePricing } from './pages/PSSecurePricing'
import { PSSecureDownload } from './pages/PSSecureDownload'
import { Privacy } from './pages/Privacy'
import { Terms } from './pages/Terms'
import { NotFound } from './pages/NotFound'
import { VpnSaudiArabia } from './pages/VpnSaudiArabia'
import { VpnUAE } from './pages/VpnUAE'
import { LangLayout } from './components/layout/LangLayout'

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
          <Route path="ps-secure" element={<PSSecure />} />
          <Route path="ps-secure/features" element={<PSSecureFeatures />} />
          <Route path="ps-secure/protocols" element={<PSSecureProtocols />} />
          <Route path="ps-secure/pricing" element={<PSSecurePricing />} />
          <Route path="ps-secure/download" element={<PSSecureDownload />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="vpn-saudi-arabia" element={<VpnSaudiArabia />} />
          <Route path="vpn-uae" element={<VpnUAE />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<Navigate to={`/${getPreferredLang()}`} replace />} />
      </Routes>
    </BrowserRouter>
  )
}
