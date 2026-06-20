import { useEffect } from 'react'
import { useParams, Outlet, Navigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

const SUPPORTED = ['en', 'ar'] as const
const BASE = 'https://perfectps.com'

const PAGE_META: Record<string, Record<string, { title: string; description: string }>> = {
  '/': {
    en: {
      title: 'perfectPS | Web, Mobile & VPN Studio | Middle East Digital Studio',
      description: 'perfectPS is a boutique digital studio in Amman, Jordan. We build secure web apps, cross-platform mobile apps, and WireGuard-based VPN infrastructure. Creators of PS Secure VPN. Est. 2019.',
    },
    ar: {
      title: 'perfectPS | استوديو ويب وجوال وVPN | الشرق الأوسط',
      description: 'perfectPS استوديو رقمي في عمّان، الأردن. نبني تطبيقات ويب وجوال آمنة وبنية تحتية VPN مبنية على WireGuard. مبتكرو PS Secure VPN. منذ 2019.',
    },
  },
  '/ps-secure': {
    en: {
      title: 'PS Secure VPN | WireGuard VPN for iOS & Android | perfectPS',
      description: 'PS Secure is a WireGuard VPN for iOS and Android with a zero-log policy, AdGuard DNS filtering, and a hardware kill switch. Built by perfectPS for privacy-first users in the Middle East.',
    },
    ar: {
      title: 'PS Secure VPN | تطبيق VPN بـ WireGuard لـ iOS وAndroid | perfectPS',
      description: 'PS Secure تطبيق VPN مبني على WireGuard لـ iOS وAndroid. سياسة صفرية السجلات وفلتر DNS من AdGuard ومفتاح إيقاف طارئ. مبني بواسطة perfectPS للشرق الأوسط.',
    },
  },
  '/work': {
    en: {
      title: 'Portfolio | perfectPS — 15+ Digital Products Delivered Since 2019',
      description: 'Browse 15+ web apps, mobile apps, and VPN products built by perfectPS for clients across 8+ countries. Projects spanning fintech, security, and e-commerce.',
    },
    ar: {
      title: 'أعمالنا | perfectPS — أكثر من 15 منتجاً رقمياً منذ 2019',
      description: 'تصفح أكثر من 15 تطبيق ويب وجوال ومنتج VPN بناه perfectPS لعملاء في أكثر من 8 دول منذ 2019. مشاريع في التقنية المالية والأمن والتجارة الإلكترونية.',
    },
  },
}

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

    // Per-page title, description, and OG meta
    const meta = PAGE_META[suffix]?.[lang] ?? PAGE_META['/'].en
    document.title = meta.title

    const descEl = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (descEl) descEl.setAttribute('content', meta.description)

    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', meta.title)
    const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', meta.description)
    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', `${BASE}/${lang}${suffix}`)
    const ogLocale = document.querySelector<HTMLMetaElement>('meta[property="og:locale"]')
    if (ogLocale) ogLocale.setAttribute('content', lang === 'ar' ? 'ar_SA' : 'en_US')

    const twTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')
    if (twTitle) twTitle.setAttribute('content', meta.title)
    const twDesc = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')
    if (twDesc) twDesc.setAttribute('content', meta.description)

    const langMeta = document.querySelector<HTMLMetaElement>('meta[name="language"]')
    if (langMeta) langMeta.setAttribute('content', lang === 'ar' ? 'Arabic' : 'English')
  }, [lang, location.pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
