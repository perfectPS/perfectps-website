import { useTranslation } from 'react-i18next'
import { useLang } from '../hooks/useLang'
import { usePageSeo } from '../hooks/usePageSeo'

const sectionsEn = [
  {
    heading: 'Acceptance of Terms',
    body: 'By accessing or using perfectps.com or any service provided by perfectPS ("we", "us", "our"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.',
  },
  {
    heading: 'Services',
    body: 'perfectPS provides digital product development services including web applications, mobile apps, VPN infrastructure, UI/UX design, backend engineering, and DevOps. We also operate PS Secure, a VPN and privacy product available on iOS and Android.',
  },
  {
    heading: 'Intellectual Property',
    body: 'Unless otherwise agreed in a signed contract, all work product created by perfectPS for clients remains the intellectual property of perfectPS until full payment is received, at which point ownership transfers to the client as specified in the project agreement. The perfectPS brand, logo, and the PS Secure product are the sole property of perfectPS.',
  },
  {
    heading: 'Client Responsibilities',
    body: 'Clients are responsible for providing accurate requirements, timely feedback, and any assets or credentials necessary to complete the agreed work. Delays caused by the client may affect project timelines and costs.',
  },
  {
    heading: 'Payment Terms',
    body: 'Project pricing and payment schedules are defined in individual project agreements. All payments are due within the timeframes specified therein. Late payments may result in work suspension and interest charges as permitted by applicable law.',
  },
  {
    heading: 'Confidentiality',
    body: 'perfectPS treats all client project information as confidential by default. We do not disclose client identities or project details to third parties without explicit written consent. Clients may request additional NDA coverage for any engagement.',
  },
  {
    heading: 'Limitation of Liability',
    body: 'To the maximum extent permitted by law, perfectPS shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from the use of our services. Our total liability shall not exceed the fees paid by the client in the three months preceding the claim.',
  },
  {
    heading: 'PS Secure VPN Terms',
    body: 'PS Secure is provided for lawful personal use only. Users may not use PS Secure to violate any applicable laws, infringe intellectual property rights, transmit malware, or engage in any activity that disrupts network infrastructure. We reserve the right to terminate accounts that violate these terms.',
  },
  {
    heading: 'Governing Law',
    body: 'These Terms are governed by the laws applicable in the Hashemite Kingdom of Jordan. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of courts in Amman, Jordan.',
  },
  {
    heading: 'Changes to Terms',
    body: 'We reserve the right to update these Terms at any time. Continued use of our services following notice of changes constitutes your acceptance of the updated Terms. Material changes will be announced via email to known clients.',
  },
  {
    heading: 'Contact',
    body: 'Questions about these Terms may be directed to hello@perfectps.com.',
  },
]

const sectionsAr = [
  {
    heading: 'قبول الشروط',
    body: 'بالوصول إلى perfectps.com أو استخدام أي خدمة مقدمة من perfectPS ("نحن"، "لنا"، "خاصتنا")، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق، يرجى عدم استخدام خدماتنا.',
  },
  {
    heading: 'الخدمات',
    body: 'تقدم perfectPS خدمات تطوير المنتجات الرقمية بما تشمل تطبيقات الويب وتطبيقات الجوال وبنية تحتية للـ VPN وتصميم UI/UX وهندسة الخلفية وDevOps. نحن أيضًا ندير PS Secure، منتج VPN وخصوصية متاح على iOS وAndroid.',
  },
  {
    heading: 'الملكية الفكرية',
    body: 'ما لم يُتفق على خلاف ذلك في عقد موقّع، تظل جميع منتجات العمل التي أنشأتها perfectPS للعملاء ملكًا فكريًا لـ perfectPS حتى استلام الدفعة الكاملة، وعندها تنتقل الملكية إلى العميل وفقًا لاتفاقية المشروع. تعد علامة perfectPS التجارية وشعارها ومنتج PS Secure ملكًا حصريًا لـ perfectPS.',
  },
  {
    heading: 'مسؤوليات العميل',
    body: 'يتحمل العملاء مسؤولية تقديم المتطلبات الدقيقة والتغذية الراجعة في الوقت المناسب وأي أصول أو بيانات اعتماد ضرورية لإتمام العمل المتفق عليه. قد تؤثر التأخيرات الناجمة عن العميل على جداول المشروع وتكاليفه.',
  },
  {
    heading: 'شروط الدفع',
    body: 'يتم تحديد أسعار المشاريع وجداول الدفع في اتفاقيات المشاريع الفردية. تستحق جميع المدفوعات ضمن الأطر الزمنية المحددة فيها. قد تؤدي المدفوعات المتأخرة إلى تعليق العمل ورسوم تأخير وفقًا للقانون المعمول به.',
  },
  {
    heading: 'السرية',
    body: 'تتعامل perfectPS مع جميع معلومات مشاريع العملاء باعتبارها سرية افتراضيًا. لا نكشف عن هويات العملاء أو تفاصيل المشاريع لأطراف ثالثة دون موافقة كتابية صريحة. يمكن للعملاء طلب تغطية اتفاقية سرية إضافية لأي مشاركة.',
  },
  {
    heading: 'تحديد المسؤولية',
    body: 'إلى أقصى حد يسمح به القانون، لن تكون perfectPS مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية ناجمة عن استخدام خدماتنا. لا تتجاوز مسؤوليتنا الإجمالية الرسوم التي دفعها العميل خلال الأشهر الثلاثة السابقة للمطالبة.',
  },
  {
    heading: 'شروط استخدام PS Secure VPN',
    body: 'يُقدّم PS Secure للاستخدام الشخصي القانوني فقط. لا يجوز للمستخدمين استخدام PS Secure لانتهاك أي قوانين سارية أو التعدي على حقوق الملكية الفكرية أو نقل البرامج الضارة أو الانخراط في أي نشاط يعطل البنية التحتية للشبكة. نحتفظ بحق إنهاء الحسابات المنتهكة لهذه الشروط.',
  },
  {
    heading: 'القانون الحاكم',
    body: 'تخضع هذه الشروط للقوانين المعمول بها في المملكة الأردنية الهاشمية. تخضع أي نزاعات ناشئة عن هذه الشروط للاختصاص القضائي الحصري لمحاكم عمّان، الأردن.',
  },
  {
    heading: 'التغييرات على الشروط',
    body: 'نحتفظ بحق تحديث هذه الشروط في أي وقت. يُعد استمرار استخدامك لخدماتنا عقب الإخطار بالتغييرات قبولًا منك للشروط المحدّثة. سيتم الإعلان عن التغييرات الجوهرية عبر البريد الإلكتروني للعملاء المعروفين.',
  },
  {
    heading: 'التواصل',
    body: 'يمكن توجيه الأسئلة المتعلقة بهذه الشروط إلى hello@perfectps.com.',
  },
]

const BASE = 'https://perfectps.com'

const SEO = {
  en: {
    title: 'Terms of Service | perfectPS',
    description:
      'Terms of Service for perfectPS and PS Secure VPN. Covers service scope, intellectual property, payment terms, confidentiality, and acceptable use of PS Secure VPN.',
  },
  ar: {
    title: 'شروط الخدمة | perfectPS',
    description:
      'شروط الخدمة الخاصة بـ perfectPS وتطبيق PS Secure VPN. تشمل نطاق الخدمة والملكية الفكرية وشروط الدفع والسرية والاستخدام المقبول لـ PS Secure VPN.',
  },
}

export function Terms() {
  const { t } = useTranslation()
  const lang = useLang()
  const sections = lang === 'ar' ? sectionsAr : sectionsEn

  const seo = SEO[lang as 'en' | 'ar'] ?? SEO.en
  usePageSeo({
    title: seo.title,
    description: seo.description,
    canonical: `${BASE}/${lang}/terms`,
    lang,
  })

  return (
    <div style={{ background: '#070f1a', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container" style={{ maxWidth: '720px' }}>

        <a href={`/${lang}`} style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontSize: '13px', fontWeight: 600,
          color: 'rgba(200,168,75,0.7)',
          textDecoration: 'none',
          marginBottom: '40px',
          transition: 'color 200ms',
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#c8a84b' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(200,168,75,0.7)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M11 7H3M7 11L3 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {t('nav.back_home')}
        </a>

        <div className="section-label">{t('terms.last_updated')}</div>
        <h1 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 800,
          color: '#fff',
          lineHeight: 1.1,
          marginBottom: '48px',
        }}>
          {t('terms.title')}
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {sections.map(s => (
            <div key={s.heading} style={{
              borderInlineStart: '2px solid rgba(200,168,75,0.2)',
              paddingInlineStart: '24px',
            }}>
              <h2 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '18px',
                fontWeight: 700,
                color: '#c8a84b',
                marginBottom: '10px',
              }}>
                {s.heading}
              </h2>
              <p style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.85,
              }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
