import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import ar from './locales/ar.json'

// Read initial lang from URL so first render has correct translations
function getLangFromUrl(): string {
  const seg = window.location.pathname.split('/')[1]
  return seg === 'ar' ? 'ar' : 'en'
}

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, ar: { translation: ar } },
  lng: getLangFromUrl(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
