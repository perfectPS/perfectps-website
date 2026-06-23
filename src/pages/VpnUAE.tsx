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
    title: 'Best VPN for UAE — PS Secure | PerfectPS',
    description:
      'PS Secure is the best VPN for UAE. WireGuard protocol, strict zero-log policy, AdGuard DNS filtering, Arabic UI, and Middle East servers. Fast, private, and built for the United Arab Emirates.',
  },
  ar: {
    title: 'أفضل VPN للإمارات العربية المتحدة — PS Secure | PerfectPS',
    description:
      'PS Secure أفضل تطبيق VPN للإمارات العربية المتحدة. بروتوكول WireGuard وسياسة صفرية السجلات وفلتر DNS من AdGuard وواجهة عربية وخوادم في الشرق الأوسط. سريع وخاص ومصمم للإمارات.',
  },
}

const content = {
  en: {
    badge: 'UAE VPN',
    heroH1: 'Best VPN for the',
    heroH1Accent: 'United Arab Emirates',
    heroBody:
      'PS Secure gives you fast, private internet in the UAE. Built on WireGuard — the fastest VPN protocol — with a strict zero-log policy and an Arabic interface designed for the Gulf region.',
    ctaPrimary: 'Get PS Secure',
    ctaSecondary: 'Learn More',
    featuresLabel: 'Why PS Secure',
    featuresH2: 'Everything you need',
    featuresH2Accent: 'in the UAE',
    features: [
      {
        title: 'WireGuard Protocol',
        desc: 'The fastest, most modern VPN protocol available. WireGuard delivers low latency and high throughput — ideal for VoIP, streaming, and everyday browsing across the UAE.',
      },
      {
        title: 'Strict Zero-Log Policy',
        desc: 'We never collect, store, or share your browsing activity, DNS queries, IP addresses, or connection timestamps. Your privacy is absolute.',
      },
      {
        title: 'Kill Switch',
        desc: 'Your traffic is cut instantly if the VPN drops, ensuring your real IP is never exposed while using PS Secure in Dubai, Abu Dhabi, or anywhere in the UAE.',
      },
      {
        title: 'AdGuard DNS Filtering',
        desc: 'Block ads, trackers, and malicious domains at the DNS level for faster page loads and a cleaner browsing experience across all your apps.',
      },
      {
        title: 'Arabic UI',
        desc: 'PS Secure supports a full Arabic (RTL) interface. Designed for Arabic-speaking users across the UAE and the wider Gulf region.',
      },
      {
        title: 'Middle East Servers',
        desc: 'Optimised server infrastructure for the Gulf region, delivering low-latency connections from the UAE.',
      },
    ],
    whyLabel: 'Built for UAE',
    whyH2: 'Why choose PS Secure in the UAE?',
    whyPoints: [
      {
        title: 'Bypass Restrictions',
        desc: 'Access VoIP, streaming, and other services that may be limited in the UAE, with a reliable WireGuard-powered connection.',
      },
      {
        title: 'Works on iOS & Android',
        desc: 'A native app for iPhone, iPad, and Android devices — no configuration files, no command line. Set up in under a minute.',
      },
      {
        title: 'Transparent & Independent',
        desc: 'PerfectPS is a boutique studio based in Amman, Jordan. We are not affiliated with any telecom operator, ISP, or government body.',
      },
    ],
    ctaH2: 'Ready to protect your connection in the UAE?',
    ctaBody: 'Download PS Secure on iOS or Android and connect in seconds.',
    ctaBtn: 'Get PS Secure',
  },
  ar: {
    badge: 'VPN للإمارات',
    heroH1: 'أفضل VPN',
    heroH1Accent: 'للإمارات العربية المتحدة',
    heroBody:
      'PS Secure يمنحك إنترنتاً سريعاً وخاصاً في الإمارات العربية المتحدة. مبني على WireGuard — أسرع بروتوكولات VPN — مع سياسة صارمة لعدم تسجيل البيانات وواجهة عربية مصممة لمنطقة الخليج.',
    ctaPrimary: 'احصل على PS Secure',
    ctaSecondary: 'اعرف أكثر',
    featuresLabel: 'لماذا PS Secure',
    featuresH2: 'كل ما تحتاجه',
    featuresH2Accent: 'في الإمارات',
    features: [
      {
        title: 'بروتوكول WireGuard',
        desc: 'أسرع بروتوكولات VPN وأحدثها. يوفر WireGuard زمن استجابة منخفضاً وسرعة نقل عالية — مثالي لمكالمات VoIP والبث والتصفح في الإمارات.',
      },
      {
        title: 'سياسة صفرية السجلات',
        desc: 'لا نجمع نشاط تصفحك أو استعلامات DNS أو عناوين IP أو طوابع الاتصال الزمنية. خصوصيتك مطلقة.',
      },
      {
        title: 'مفتاح الإيقاع الطارئ',
        desc: 'يُوقف حركة بياناتك فوراً إذا انقطع اتصال VPN، لضمان عدم كشف عنوان IP الحقيقي أثناء استخدام PS Secure في دبي أو أبوظبي أو أي مكان في الإمارات.',
      },
      {
        title: 'فلتر DNS من AdGuard',
        desc: 'حجب الإعلانات والمتتبعين والنطاقات الضارة على مستوى DNS لتحميل أسرع للصفحات وتصفح أنظف.',
      },
      {
        title: 'واجهة عربية كاملة',
        desc: 'PS Secure يدعم واجهة عربية كاملة (RTL). مصمم للمستخدمين الناطقين بالعربية في الإمارات ومنطقة الخليج.',
      },
      {
        title: 'خوادم في الشرق الأوسط',
        desc: 'بنية تحتية خادمية محسّنة لمنطقة الخليج، تقدم اتصالات منخفضة الزمن من الإمارات العربية المتحدة.',
      },
    ],
    whyLabel: 'مبني للإمارات',
    whyH2: 'لماذا تختار PS Secure في الإمارات؟',
    whyPoints: [
      {
        title: 'تجاوز القيود',
        desc: 'الوصول إلى VoIP والبث والخدمات الأخرى التي قد تكون مقيدة في الإمارات، بفضل اتصال موثوق مبني على WireGuard.',
      },
      {
        title: 'يعمل على iOS وAndroid',
        desc: 'تطبيق أصلي لـ iPhone وiPad وأجهزة Android — بلا ملفات إعداد ولا سطر أوامر. جاهز خلال أقل من دقيقة.',
      },
      {
        title: 'شفاف ومستقل',
        desc: 'PerfectPS استوديو متخصص في عمّان، الأردن. لسنا تابعين لأي مشغل اتصالات أو مزود خدمة إنترنت أو جهة حكومية.',
      },
    ],
    ctaH2: 'هل أنت مستعد لحماية اتصالك في الإمارات؟',
    ctaBody: 'حمّل PS Secure على iOS أو Android وتواصل في ثوانٍ.',
    ctaBtn: 'احصل على PS Secure',
  },
}

const featureIcons = [Zap, Eye, Shield, Lock, Smartphone, Globe]

export function VpnUAE() {
  const lang = useLang()
  const seo = SEO[lang as 'en' | 'ar'] ?? SEO.en
  const c = content[lang as 'en' | 'ar'] ?? content.en

  usePageSeo({
    title: seo.title,
    description: seo.description,
    canonical: `${BASE}/${lang}/vpn-uae`,
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
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(250,204,21,0.07) 0%, transparent 70%)',
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
              background: '#FACC15',
              color: '#0d1b2e',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              textDecoration: 'none',
              transition: 'background 200ms',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#FDE047' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#FACC15' }}
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
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#FACC15' }}
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
                    border: '1px solid rgba(250,204,21,0.18)',
                    borderRadius: '16px',
                    height: '100%',
                    background: '#f8f9fa',
                    transition: 'border-color 200ms, box-shadow 200ms',
                  }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(250,204,21,0.45)'; el.style.boxShadow = '0 8px 32px rgba(250,204,21,0.08)' }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(250,204,21,0.18)'; el.style.boxShadow = 'none' }}
                  >
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(250,204,21,0.1)',
                      border: '1px solid rgba(250,204,21,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '18px',
                    }}>
                      <Icon size={22} color="#FACC15" strokeWidth={1.75} />
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

      {/* Why PS Secure in UAE */}
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
                    background: '#FACC15',
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
            background: '#FACC15',
            color: '#0d1b2e',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 700,
            fontFamily: "'DM Sans'",
            display: 'inline-block',
            textDecoration: 'none',
            transition: 'background 200ms',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#FDE047' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#FACC15' }}
          >
            {c.ctaBtn}
          </a>
        </div>
      </Section>
    </>
  )
}
