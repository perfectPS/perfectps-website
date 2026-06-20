import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import bundledEn from './locales/en.json'
import bundledAr from './locales/ar.json'

function getLangFromUrl(): string {
  const seg = window.location.pathname.split('/')[1]
  return seg === 'ar' ? 'ar' : 'en'
}

export const i18nReady: Promise<void> = i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: bundledEn },
      ar: { translation: bundledAr },
    },
    lng: getLangFromUrl(),
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })
  .then(() => undefined)

export default i18n
