import { useEffect } from 'react'

const BASE = 'https://perfectps.com'

const DEFAULTS = {
  title: 'PerfectPS | Web, Mobile & VPN Studio | Middle East Digital Studio',
  description:
    'PerfectPS is a boutique digital studio in Amman, Jordan. We build secure web apps, cross-platform mobile apps, and WireGuard-based VPN infrastructure. Creators of PS Secure VPN. Est. 2019.',
  canonical: `${BASE}/en`,
}

interface PageSeoOptions {
  title: string
  description: string
  /** Absolute canonical URL, e.g. https://perfectps.com/en/ps-secure */
  canonical: string
  lang?: string
}

function setMeta(selector: string, content: string, attr = 'content') {
  const el = document.querySelector<HTMLMetaElement>(selector)
  if (el) el.setAttribute(attr, content)
}

function setLink(selector: string, href: string) {
  const el = document.querySelector<HTMLLinkElement>(selector)
  if (el) el.setAttribute('href', href)
}

export function usePageSeo({ title, description, canonical, lang = 'en' }: PageSeoOptions) {
  useEffect(() => {
    // Title
    document.title = title

    // Meta description
    setMeta('meta[name="description"]', description)

    // Canonical
    setLink('link[rel="canonical"]', canonical)

    // OG tags
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[property="og:url"]', canonical)

    // Twitter tags
    setMeta('meta[name="twitter:title"]', title)
    setMeta('meta[name="twitter:description"]', description)

    return () => {
      // Reset to defaults on unmount
      document.title = DEFAULTS.title
      setMeta('meta[name="description"]', DEFAULTS.description)
      setLink('link[rel="canonical"]', DEFAULTS.canonical)
      setMeta('meta[property="og:title"]', DEFAULTS.title)
      setMeta('meta[property="og:description"]', DEFAULTS.description)
      setMeta('meta[property="og:url"]', DEFAULTS.canonical)
      setMeta('meta[name="twitter:title"]', DEFAULTS.title)
      setMeta('meta[name="twitter:description"]', DEFAULTS.description)
    }
  }, [title, description, canonical, lang])
}
