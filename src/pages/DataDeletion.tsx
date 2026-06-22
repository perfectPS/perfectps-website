import { useTranslation } from 'react-i18next'
import { useLang } from '../hooks/useLang'
import { usePageSeo } from '../hooks/usePageSeo'

const sectionsEn = [
  {
    heading: 'What Data We Store',
    body: 'When you log in to PS Secure using Facebook, we receive your Facebook name and email address. We use this information solely to create and manage your PS Secure account.',
  },
  {
    heading: 'How to Request Deletion',
    body: 'To delete all data associated with your account, send an email to hello@perfectps.com with the subject line "Data Deletion Request" and include the email address linked to your account. We will permanently delete your data within 30 days and confirm by email.',
  },
  {
    heading: 'What Gets Deleted',
    body: 'Upon a confirmed deletion request, we will permanently remove: your account profile (name, email), your subscription history, and any usage records linked to your account. This action is irreversible.',
  },
  {
    heading: 'Automatic Deletion via Facebook',
    body: 'If you connected your account via Facebook Login, you can also remove app permissions directly from your Facebook settings at facebook.com/settings → Apps and Websites → PS Secure → Remove. This revokes our access but does not automatically delete data already stored. Please follow the email request process above to ensure full deletion.',
  },
  {
    heading: 'Retention After Deletion',
    body: 'After deletion is confirmed, no personal data is retained. Anonymised, non-identifiable usage statistics (e.g., aggregate server load data) that cannot be linked back to you may be retained for operational purposes.',
  },
  {
    heading: 'Contact',
    body: 'For data deletion requests or questions, email hello@perfectps.com. We respond within 5 business days.',
  },
]

const sectionsAr = [
  {
    heading: 'البيانات التي نحتفظ بها',
    body: 'عند تسجيل دخولك إلى PS Secure باستخدام فيسبوك، نتلقى اسمك على فيسبوك وعنوان بريدك الإلكتروني. نستخدم هذه المعلومات فقط لإنشاء حسابك وإدارته في PS Secure.',
  },
  {
    heading: 'كيفية طلب الحذف',
    body: 'لحذف جميع البيانات المرتبطة بحسابك، أرسل بريدًا إلكترونيًا إلى hello@perfectps.com بعنوان "طلب حذف البيانات" مع ذكر عنوان البريد الإلكتروني المرتبط بحسابك. سنحذف بياناتك نهائيًا خلال 30 يومًا ونؤكد ذلك بالبريد الإلكتروني.',
  },
  {
    heading: 'ما الذي يُحذف',
    body: 'عند تأكيد طلب الحذف، سنحذف نهائيًا: ملفك الشخصي (الاسم والبريد الإلكتروني)، وسجل اشتراكاتك، وأي سجلات استخدام مرتبطة بحسابك. هذا الإجراء لا يمكن التراجع عنه.',
  },
  {
    heading: 'الحذف التلقائي عبر فيسبوك',
    body: 'إذا ربطت حسابك عبر تسجيل دخول فيسبوك، يمكنك أيضًا إزالة أذونات التطبيق مباشرةً من إعدادات فيسبوك على facebook.com/settings ← التطبيقات والمواقع ← PS Secure ← إزالة. يؤدي هذا إلى إلغاء وصولنا، لكنه لا يحذف البيانات المخزنة مسبقًا تلقائيًا. يرجى اتباع عملية طلب البريد الإلكتروني أعلاه لضمان الحذف الكامل.',
  },
  {
    heading: 'الاحتفاظ بالبيانات بعد الحذف',
    body: 'بعد تأكيد الحذف، لا يتم الاحتفاظ بأي بيانات شخصية. قد يتم الاحتفاظ بإحصاءات استخدام مجهولة الهوية وغير قابلة للتتبع (مثل بيانات تحميل الخادم الإجمالية) لأغراض تشغيلية.',
  },
  {
    heading: 'التواصل',
    body: 'لطلبات حذف البيانات أو الاستفسارات، راسلنا على hello@perfectps.com. نرد خلال 5 أيام عمل.',
  },
]

const BASE = 'https://perfectps.com'

const SEO = {
  en: {
    title: 'User Data Deletion | perfectPS',
    description:
      'Learn how to request deletion of your PS Secure account data. Email hello@perfectps.com with your deletion request and we will remove all your data within 30 days.',
  },
  ar: {
    title: 'حذف بيانات المستخدم | perfectPS',
    description:
      'تعرف على كيفية طلب حذف بيانات حساب PS Secure الخاص بك. راسلنا على hello@perfectps.com وسنحذف جميع بياناتك خلال 30 يومًا.',
  },
}

export function DataDeletion() {
  const { t } = useTranslation()
  const lang = useLang()
  const sections = lang === 'ar' ? sectionsAr : sectionsEn

  const seo = SEO[lang as 'en' | 'ar'] ?? SEO.en
  usePageSeo({
    title: seo.title,
    description: seo.description,
    canonical: `${BASE}/${lang}/data-deletion`,
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

        <div className="section-label">Last updated: June 2026</div>
        <h1 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 800,
          color: '#fff',
          lineHeight: 1.1,
          marginBottom: '48px',
        }}>
          {lang === 'ar' ? 'حذف بيانات المستخدم' : 'User Data Deletion'}
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
