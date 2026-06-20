import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { i18nReady } from './i18n'
import App from './App'

// Set dir/lang on <html> immediately to avoid RTL flash before React renders
const initLang = window.location.pathname.split('/')[1]
if (initLang === 'ar') {
  document.documentElement.setAttribute('dir', 'rtl')
  document.documentElement.setAttribute('lang', 'ar')
} else {
  document.documentElement.setAttribute('dir', 'ltr')
  document.documentElement.setAttribute('lang', initLang === 'en' ? 'en' : (localStorage.getItem('lang') ?? 'en'))
}

i18nReady.then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
