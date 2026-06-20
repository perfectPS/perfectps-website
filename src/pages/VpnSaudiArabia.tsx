import { Shield, Eye, Zap, Smartphone, Globe, Lock } from 'lucide-react'
import { useLang } from '../hooks/useLang'
import { usePageSeo } from '../hooks/usePageSeo'
import { Section } from '../components/layout/Section'
import { SectionLabel } from '../components/ui/SectionLabel'
import { Badge } from '../components/ui/Badge'
import { ScrollReveal } from '../components/ui/ScrollReveal'

const BASE = 'https://perfectps.com'

const SEO = {
  en: {
    title: 'Best VPN for Saudi Arabia — PS Secure | perfectPS',
    description:
      'PS Secure is the best VPN for Saudi Arabia. WireGuard protocol, strict zero-log policy, AdGuard DNS filtering, Arabic UI, and Middle East servers. Fast, private, and built for KSA.',
  },
  ar: {
    title: 'أفضل VPN للمملكة العربية السعودية — PS Secure | perfectPS',
    description:
      'PS Secure أفضل تطبيق VPN للمملكة العربية السعودية. بروتوكول WireGuard وسياسة صفرية السجلات وفلتر DNS من AdGuard وواجهة عربية وخوادم في الشرق الأوسط. سريع وخاص ومصمم للسعودية.',
  },
}

const content = {
  en: {
    badge: 'Saudi Arabia VPN',
    heroH1: 'Best VPN for',
    heroH1Accent: 'Saudi Arabia',
    heroBody:
      'PS Secure gives you fast, private internet in Saudi Arabia. Built on WireGuard — the fastest VPN protocol — with a strict zero-log policy and an Arabic interface designed for the region.',
    ctaPrimary: 'Get PS Secure',
    ctaSecondary: 'Learn More',
    featuresLabel: 'Why PS Secure',
    featuresH2: 'Everything you need',
    featuresH2Accent: 'in Saudi Arabia',
    features: [
      {
        title: 'WireGuard Protocol',
        desc: 'The fastest, most modern VPN protocol available. WireGuard delivers consistently low latency and high throughput — ideal for streaming and everyday browsing in KSA.',
      },
      {
        title: 'Strict Zero-Log Policy',
        desc: 'We never collect, store, or share your browsing activity, DNS queries, IP addresses, or connection timestamps. Your privacy is absolute.',
      },
      {
        title: 'Kill Switch',
        desc: 'Your traffic is blocked instantly if the VPN connection drops, ensuring your real IP address is never exposed while using PS Secure in Saudi Arabia.',
      },
      {
        title: 'AdGuard DNS Filtering',
        desc: 'Block ads, trackers, and malicious domains at the DNS level. Faster page loads and cleaner browsing across all your apps and websites.',
      },
      {
        title: 'Arabic UI',
        desc: 'PS Secure supports full Arabic (RTL) interface. Designed for Arabic-speaking users across Saudi Arabia and the wider Gulf region.',
      },
      {
        title: 'Middle East Servers',
        desc: 'Optimised server infrastructure for the Middle East and Gulf region, delivering low-latency connections from Saudi Arabia.',
      },
    ],
    whyLabel: 'Built for KSA',
    whyH2: 'Why choose PS Secure in Saudi Arabia?',
    whyPoints: [
      {
        title: 'No Throttling',
        desc: 'Our WireGuard-based architecture bypasses bandwidth throttling, so you get the full speed your connection can deliver.',
      },
      {
        title: 'Works on iOS & Android',
        desc: 'A native app for iPhone, iPad, and Android devices — no configuration files, no command line. Set up in under a minute.',
      },
      {
        title: 'Transparent & Independent',
        desc: 'perfectPS is a boutique studio based in Amman, Jordan. We are not affiliated with any telecom operator or government body.',
      },
    ],
    ctaH2: 'Ready to protect your connection in Saudi Arabia?',
    ctaBody: 'Download PS Secure on iOS or Android and connect in seconds.',
    ctaBtn: 'Get PS Secure',
  },
  ar: {
    badge: 'VPN للسعودية',
    heroH1: 'أفضل VPN',
    heroH1Accent: 'للمملكة العربية السعودية',
    heroBody:
      'PS Secure يمنحك إنترنتاً سريعاً وخاصاً في المملكة العربية السعودية. مبني على WireGuard — أسرع بروتوكولات VPN — مع سياسة صارمة لعدم تسجيل البيانات وواجهة عربية مصممة للمنطقة.',
    ctaPrimary: 'احصل على PS Secure',
    ctaSecondary: 'اعرف أكثر',
    featuresLabel: 'لماذا PS Secure',
    featuresH2: 'كل ما تحتاجه',
    featuresH2Accent: 'في السعودية',
    features: [
      {
        title: 'بروتوكول WireGuard',
        desc: 'أسرع بروتوكولات VPN وأحدثها. يوفر WireGuard زمن استجابة منخفضاً باستمرار وسرعة نقل عالية — مثالي للبث والتصفح اليومي في المملكة.',
      },
      {
        title: 'سياسة صفرية السجلات',
        desc: 'لا نجمع نشاط تصفحك أو استعلامات DNS أو عناوين IP أو طوابع الاتصال الزمنية. خصوصيتك مطلقة.',
      },
      {
        title: 'مفتاح الإيقاع الطارئ',
        desc: 'يُوقف حركة بياناتك فوراً إذا انقطع اتصال VPN، لضمان عدم كشف عنوان IP الحقيقي أثناء استخدام PS Secure في السعودية.',
      },
      {
        title: 'فلتر DNS من AdGuard',
        desc: 'حجب الإعلانات والمتتبعين والنطاقات الضارة على مستوى DNS. تحميل أسرع للصفحات وتصفح أنظف.',
      },
      {
        title: 'واجهة عربية كاملة',
        desc: 'PS Secure يدعم واجهة عربية كاملة (RTL). مصمم للمستخدمين الناطقين بالعربية في السعودية ومنطقة الخليج.',
      },
      {
        title: 'خوادم في الشرق الأوسط',
        desc: 'بنية تحتية خادمية محسّنة للشرق الأوسط ومنطقة الخليج، تقدم اتصالات منخفضة الزمن من المملكة العربية السعودية.',
      },
    ],
    whyLabel: 'مبني للسعودية',
    whyH2: 'لماذا تختار PS Secure في السعودية؟',
    whyPoints: [
      {
        title: 'بلا تقييد للسرعة',
        desc: 'بنيتنا القائمة على WireGuard تتجاوز تقييد النطاق الترددي، لتحصل على كامل سرعة اتصالك.',
      },
      {
        title: 'يعمل على iOS وAndroid',
        desc: 'تطبيق أصلي لـ iPhone وiPad وأجهزة Android — بلا ملفات إعداد ولا سطر أوامر. جاهز خلال أقل من دقيقة.',
      },
      {
        title: 'شفاف ومستقل',
        desc: 'perfectPS استوديو متخصص في عمّان، الأردن. لسنا تابعين لأي مشغل اتصالات أو جهة حكومية.',
      },
    ],
    ctaH2: 'هل أنت مستعد لحماية اتصالك في السعودية؟',
    ctaBody: 'حمّل PS Secure على iOS أو Android وتواصل في ثوانٍ.',
    ctaBtn: 'احصل على PS Secure',
  },
}

const featureIcons = [Zap, Eye, Shield, Lock, Smartphone, Globe]

export function VpnSaudiArabia() {
  const lang = useLang()
  const seo = SEO[lang as 'en' | 'ar'] ?? SEO.en
  const c = content[lang as 'en' | 'ar'] ?? content.en

  usePageSeo({
    title: seo.title,
    description: seo.description,
    canonical: `${BASE}/${lang}/vpn-saudi-arabia`,
    lang,
  })

  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'var(--navy)',
        paddingTop: 'calc(72px + 80px)',
        paddingBottom: '96px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200,168,75,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ marginBottom: '20px' }}>
            <Badge variant="accent">{c.badge}</Badge>
          </div>
          <h1 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-1.5px',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}>
            {c.heroH1}<br />
            <span className="gradient-text">{c.heroH1Accent}</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', margin: '0 auto 40px' }}>
            {c.heroBody}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`/${lang}/ps-secure`} style={{
              padding: '14px 32px',
              background: '#c8a84b',
              color: '#0d1b2e',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              textDecoration: 'none',
              transition: 'background 200ms',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e0c068' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#c8a84b' }}
            >
              {c.ctaPrimary}
            </a>
            <a href={`/${lang}/#contact`} style={{
              padding: '14px 32px',
              background: 'transparent',
              color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.25)',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              textDecoration: 'none',
              transition: 'border-color 200ms',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#c8a84b' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)' }}
            >
              {c.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <Section bg="white">
        <div className="container">
          <ScrollReveal>
            <SectionLabel>{c.featuresLabel}</SectionLabel>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '48px',
              lineHeight: 1.15,
            }}>
              {c.featuresH2}<br />
              <span className="gradient-text--dark">{c.featuresH2Accent}</span>
            </h2>
          </ScrollReveal>
          <div className="grid-3">
            {c.features.map((f, i) => {
              const Icon = featureIcons[i]
              return (
                <ScrollReveal key={f.title} delay={i * 70}>
                  <div style={{
                    padding: '32px',
                    border: '1px solid rgba(200,168,75,0.18)',
                    borderRadius: '16px',
                    height: '100%',
                    background: '#f8f9fa',
                    transition: 'border-color 200ms, box-shadow 200ms',
                  }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(200,168,75,0.45)'; el.style.boxShadow = '0 8px 32px rgba(200,168,75,0.08)' }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(200,168,75,0.18)'; el.style.boxShadow = 'none' }}
                  >
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(200,168,75,0.1)',
                      border: '1px solid rgba(200,168,75,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '18px',
                    }}>
                      <Icon size={22} color="#c8a84b" strokeWidth={1.75} />
                    </div>
                    <h3 style={{ fontFamily: "'DM Sans'", fontSize: '17px', fontWeight: 700, marginBottom: '10px', color: '#0d1b2e' }}>
                      {f.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#4a5568', lineHeight: 1.65 }}>{f.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Why PS Secure in KSA */}
      <Section bg="alt">
        <div className="container">
          <ScrollReveal>
            <SectionLabel>{c.whyLabel}</SectionLabel>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800,
              color: 'var(--text-1)',
              marginBottom: '56px',
              lineHeight: 1.15,
            }}>
              {c.whyH2}
            </h2>
          </ScrollReveal>
          <div className="grid-3">
            {c.whyPoints.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 100}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: '#c8a84b',
                    color: '#0d1b2e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'DM Sans'",
                    fontSize: '18px',
                    fontWeight: 800,
                    flexShrink: 0,
                  }}>
                    {i + 1}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'DM Sans'", fontSize: '17px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-1)' }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.65 }}>{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'DM Sans'", fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
            {c.ctaH2}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', marginBottom: '40px' }}>
            {c.ctaBody}
          </p>
          <a href={`/${lang}/ps-secure`} style={{
            padding: '16px 40px',
            background: '#c8a84b',
            color: '#0d1b2e',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 700,
            fontFamily: "'DM Sans'",
            display: 'inline-block',
            textDecoration: 'none',
            transition: 'background 200ms',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e0c068' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#c8a84b' }}
          >
            {c.ctaBtn}
          </a>
        </div>
      </Section>
    </>
  )
}
