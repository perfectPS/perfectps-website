import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import bundledEn from './locales/en.json'
import bundledAr from './locales/ar.json'

// Read initial lang from URL so first render has correct translations
function getLangFromUrl(): string {
  const seg = window.location.pathname.split('/')[1]
  return seg === 'ar' ? 'ar' : 'en'
}

async function fetchJson(url: string): Promise<Record<string, unknown> | null> {
  try {
    const res = await fetch(url)
    if (!res.ok) return null
    const data = await res.json()
    if (typeof data !== 'object' || data === null || Array.isArray(data)) return null
    return data as Record<string, unknown>
  } catch {
    return null
  }
}

// Exported promise that resolves when i18n is fully initialised.
// main.tsx can await this before rendering to ensure translations are ready.
export const i18nReady: Promise<void> = (async () => {
  // Attempt to fetch remote translations in parallel
  const [remoteEn, remoteAr] = await Promise.all([
    fetchJson('/content/en.json'),
    fetchJson('/content/ar.json'),
  ])

  // Use remote content only when both fetches succeed
  const en = remoteEn ?? bundledEn
  const ar = remoteAr ?? bundledAr

  await i18n.use(initReactI18next).init({
    resources: { en: { translation: en }, ar: { translation: ar } },
    lng: getLangFromUrl(),
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })
})()

export default i18n
