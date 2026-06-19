import { useEffect } from 'react'
import { useParams, Outlet, Navigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

const SUPPORTED = ['en', 'ar'] as const
const BASE = 'https://perfectps.com'

export function LangLayout() {
  const { lang } = useParams<{ lang: string }>()
  const { i18n } = useTranslation()
  const location = useLocation()

  if (!lang || !(SUPPORTED as readonly string[]).includes(lang)) {
    return <Navigate to="/en" replace />
  }

  const isRtl = lang === 'ar'

  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang)
    document.documentElement.setAttribute('lang', lang)
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr')

    // Path segment after the lang prefix, e.g. '' | '/work' | '/ps-secure'
    const suffix = location.pathname.replace(/^\/(en|ar)/, '') || '/'

    // Update hreflang link tags (remove stale, insert fresh)
    document.querySelectorAll('link[hreflang]').forEach(el => el.remove())
    ;[
      { hreflang: 'en',        href: `${BASE}/en${suffix}` },
      { hreflang: 'ar',        href: `${BASE}/ar${suffix}` },
      { hreflang: 'x-default', href: `${BASE}/en${suffix}` },
    ].forEach(({ hreflang, href }) => {
      const el = document.createElement('link')
      el.setAttribute('rel', 'alternate')
      el.setAttribute('hreflang', hreflang)
      el.setAttribute('href', href)
      document.head.appendChild(el)
    })

    // Update canonical to the current lang-specific URL
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${BASE}/${lang}${suffix}`)
  }, [lang, location.pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
