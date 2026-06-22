import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLang } from '../hooks/useLang'
import { usePageSeo } from '../hooks/usePageSeo'

const GOLD = '#FACC15'
const NAVY = '#070f1a'
const CARD = '#0d1b2a'
const BORDER = 'rgba(250,204,21,0.15)'
const TEXT = 'rgba(255,255,255,0.55)'
const GREEN = '#22c55e'

const BASE = 'https://perfectps.com'

const SEO = {
  en: {
    title: 'User Data Deletion | PS Secure',
    description:
      'Request deletion of your PS Secure account data. We delete all personal data within 30 days. Facebook users can also trigger automatic deletion via Facebook settings.',
  },
  ar: {
    title: 'حذف بيانات المستخدم | PS Secure',
    description:
      'اطلب حذف بيانات حساب PS Secure. نحذف جميع البيانات الشخصية خلال 30 يومًا. يمكن لمستخدمي فيسبوك بدء الحذف التلقائي عبر إعدادات فيسبوك.',
  },
}

export function DataDeletion() {
  const { t } = useTranslation()
  const lang = useLang()
  const isAr = lang === 'ar'
  const [searchParams] = useSearchParams()
  const ref = searchParams.get('ref') ?? ''
  const isFbStatus = ref.startsWith('fb-del-')

  // Parse timestamp from ref (fb-del-{userId}-{timestamp})
  const refParts = ref.split('-')
  const tsMs = isFbStatus ? Number(refParts[refParts.length - 1]) : 0
  const deletedDate = tsMs > 0 ? new Date(tsMs).toLocaleDateString(isAr ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''

  const seo = SEO[lang as 'en' | 'ar'] ?? SEO.en
  usePageSeo({
    title: isFbStatus ? (isAr ? 'حالة حذف البيانات | PS Secure' : 'Data Deletion Status | PS Secure') : seo.title,
    description: seo.description,
    canonical: `${BASE}/${lang}/data-deletion`,
    lang,
  })

  if (isFbStatus) {
    return (
      <div style={{ background: NAVY, minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
        <div className="container" style={{ maxWidth: '720px' }}>

          <a href={`/${lang}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '13px', fontWeight: 600,
            color: 'rgba(250,204,21,0.7)',
            textDecoration: 'none',
            marginBottom: '40px',
            transition: 'color 200ms',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = GOLD }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(250,204,21,0.7)' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M11 7H3M7 11L3 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t('nav.back_home')}
          </a>

          <div style={{
            background: CARD,
            border: `1px solid rgba(34,197,94,0.25)`,
            borderRadius: '12px',
            padding: '36px 32px',
            textAlign: 'center',
          }}>
            {/* Checkmark icon */}
            <div style={{
              width: '60px', height: '60px', borderRadius: '50%',
              background: 'rgba(34,197,94,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <h1 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(22px, 4vw, 32px)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '12px',
            }}>
              {isAr ? 'تم حذف بياناتك' : 'Your Data Has Been Deleted'}
            </h1>

            <p style={{ fontSize: '15px', color: TEXT, lineHeight: 1.8, marginBottom: '28px' }}>
              {isAr
                ? 'لقد استلمنا طلب الحذف الخاص بك وتمت معالجته. جميع البيانات الشخصية المرتبطة بحساب فيسبوك الخاص بك في PS Secure قد حُذفت نهائيًا.'
                : 'We received your deletion request and it has been processed. All personal data linked to your Facebook account in PS Secure has been permanently removed from our systems.'}
            </p>

            {/* Confirmation block */}
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: `1px solid ${BORDER}`,
              borderRadius: '8px',
              padding: '16px 20px',
              textAlign: isAr ? 'right' : 'left',
              marginBottom: '24px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 600 }}>
                  {isAr ? 'رمز التأكيد' : 'Confirmation Code'}
                </span>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 600 }}>
                  {isAr ? 'الحالة' : 'Status'}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <code style={{ fontSize: '13px', color: GOLD, fontFamily: 'monospace', wordBreak: 'break-all' }}>{ref}</code>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  background: 'rgba(34,197,94,0.12)',
                  color: GREEN,
                  fontSize: '12px', fontWeight: 700,
                  padding: '3px 10px', borderRadius: '20px',
                }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill={GREEN}><circle cx="5" cy="5" r="5"/></svg>
                  {isAr ? 'مكتمل' : 'Completed'}
                </span>
              </div>
              {deletedDate && (
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '8px', marginBottom: 0 }}>
                  {isAr ? `تاريخ المعالجة: ${deletedDate}` : `Processed on: ${deletedDate}`}
                </p>
              )}
            </div>

            {/* What was deleted */}
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: `1px solid ${BORDER}`,
              borderRadius: '8px',
              padding: '16px 20px',
              textAlign: isAr ? 'right' : 'left',
              marginBottom: '24px',
            }}>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 600 }}>
                {isAr ? 'ما الذي تم حذفه' : 'What Was Deleted'}
              </p>
              {(isAr ? [
                'ملفك الشخصي (الاسم والبريد الإلكتروني)',
                'سجل الاشتراكات',
                'سجلات استخدام VPN المرتبطة بحسابك',
              ] : [
                'Your account profile (name, email)',
                'Subscription history',
                'VPN usage records linked to your account',
              ]).map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: i < 2 ? '6px' : 0 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: '2px', flexShrink: 0 }}>
                    <path d="M2 7l4 4 6-7" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontSize: '14px', color: TEXT }}>{item}</span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.6 }}>
              {isAr
                ? <>لأي استفسارات تواصل معنا على <a href="mailto:hello@perfectps.com" style={{ color: GOLD }}>hello@perfectps.com</a></>
                : <>For any questions contact us at <a href="mailto:hello@perfectps.com" style={{ color: GOLD }}>hello@perfectps.com</a></>}
            </p>
          </div>

        </div>
      </div>
    )
  }

  return (
    <div style={{ background: NAVY, minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container" style={{ maxWidth: '720px' }}>

        <a href={`/${lang}`} style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontSize: '13px', fontWeight: 600,
          color: 'rgba(250,204,21,0.7)',
          textDecoration: 'none',
          marginBottom: '40px',
          transition: 'color 200ms',
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = GOLD }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(250,204,21,0.7)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M11 7H3M7 11L3 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {t('nav.back_home')}
        </a>

        <div className="section-label" style={{ marginBottom: '12px' }}>
          {isAr ? 'آخر تحديث: يونيو 2026' : 'Last updated: June 2026'}
        </div>
        <h1 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 'clamp(28px, 5vw, 44px)',
          fontWeight: 800,
          color: '#fff',
          lineHeight: 1.1,
          marginBottom: '16px',
        }}>
          {isAr ? 'حذف بيانات المستخدم' : 'User Data Deletion'}
        </h1>
        <p style={{ fontSize: '16px', color: TEXT, lineHeight: 1.8, marginBottom: '48px' }}>
          {isAr
            ? 'PS Secure تحترم خصوصيتك. يمكنك طلب حذف جميع بياناتك الشخصية في أي وقت باستخدام أي من الطرق أدناه.'
            : 'PS Secure respects your privacy. You can request deletion of all your personal data at any time using either method below.'}
        </p>

        {/* Method 1 — Email */}
        <div style={{
          background: CARD,
          border: `1px solid ${BORDER}`,
          borderRadius: '12px',
          padding: '28px 32px',
          marginBottom: '20px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '8px',
              background: 'rgba(250,204,21,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{ color: GOLD, fontSize: '16px', fontWeight: 700 }}>1</span>
            </div>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '18px', fontWeight: 700, color: '#fff', margin: 0 }}>
              {isAr ? 'طلب الحذف عبر البريد الإلكتروني' : 'Request Deletion by Email'}
            </h2>
          </div>
          <p style={{ fontSize: '15px', color: TEXT, lineHeight: 1.8, marginBottom: '20px' }}>
            {isAr
              ? 'أرسل بريدًا إلكترونيًا إلى العنوان أدناه من عنوان البريد المرتبط بحسابك. سنحذف جميع بياناتك خلال 30 يومًا ونرسل لك تأكيدًا.'
              : 'Send an email from the address linked to your account. We will permanently delete all your data within 30 days and send you a confirmation.'}
          </p>
          <a
            href={`mailto:hello@perfectps.com?subject=${encodeURIComponent('Data Deletion Request')}&body=${encodeURIComponent('Please delete all data associated with my account.\n\nEmail: ')}`}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: GOLD, color: '#000',
              fontWeight: 700, fontSize: '14px',
              padding: '10px 20px', borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            {isAr ? 'إرسال طلب الحذف' : 'Send Deletion Request'}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginTop: '12px', lineHeight: 1.6 }}>
            {isAr ? 'البريد الإلكتروني: ' : 'Email: '}
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>hello@perfectps.com</span>
            {isAr ? ' · الموضوع: "طلب حذف البيانات"' : ' · Subject: "Data Deletion Request"'}
          </p>
        </div>

        {/* Method 2 — Facebook automatic */}
        <div style={{
          background: CARD,
          border: `1px solid ${BORDER}`,
          borderRadius: '12px',
          padding: '28px 32px',
          marginBottom: '40px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '8px',
              background: 'rgba(24,119,242,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{ color: '#1877F2', fontSize: '16px', fontWeight: 700 }}>2</span>
            </div>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '18px', fontWeight: 700, color: '#fff', margin: 0 }}>
              {isAr ? 'الحذف التلقائي عبر إعدادات فيسبوك' : 'Automatic Deletion via Facebook Settings'}
            </h2>
          </div>
          <p style={{ fontSize: '15px', color: TEXT, lineHeight: 1.8, marginBottom: '20px' }}>
            {isAr
              ? 'إذا سجّلت الدخول باستخدام فيسبوك، يمكنك إزالة PS Secure من إعدادات التطبيقات في فيسبوك. سيتم حذف بياناتك تلقائيًا من أنظمتنا فور إزالة التطبيق.'
              : 'If you signed in with Facebook, removing PS Secure from your Facebook app settings will automatically trigger deletion of your data from our systems.'}
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '8px',
            padding: '16px 20px',
          }}>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 600 }}>
              {isAr ? 'الخطوات' : 'Steps'}
            </p>
            {(isAr ? [
              'افتح facebook.com/settings',
              'انتقل إلى التطبيقات والمواقع الإلكترونية',
              'ابحث عن PS Secure وانقر على إزالة',
              'سيتم إرسال طلب الحذف إلينا تلقائيًا',
            ] : [
              'Open facebook.com/settings',
              'Go to Apps and Websites',
              'Find PS Secure and click Remove',
              'A deletion request is automatically sent to us',
            ]).map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: i < 3 ? '8px' : 0 }}>
                <span style={{ color: GOLD, fontWeight: 700, fontSize: '13px', minWidth: '18px' }}>{i + 1}.</span>
                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What gets deleted */}
        <div style={{ borderInlineStart: `2px solid ${BORDER}`, paddingInlineStart: '24px', marginBottom: '32px' }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '18px', fontWeight: 700, color: GOLD, marginBottom: '10px' }}>
            {isAr ? 'ما الذي يُحذف' : 'What Gets Deleted'}
          </h2>
          <p style={{ fontSize: '15px', color: TEXT, lineHeight: 1.85 }}>
            {isAr
              ? 'عند تأكيد طلب الحذف، نحذف نهائيًا: ملفك الشخصي (الاسم والبريد)، سجل اشتراكاتك، وسجلات استخدام VPN المرتبطة بحسابك. هذا الإجراء لا يمكن التراجع عنه. لا يتم الاحتفاظ بأي بيانات شخصية بعد الحذف.'
              : 'Upon confirmed deletion we permanently remove: your account profile (name, email), your subscription history, and VPN usage records linked to your account. This action is irreversible. No personal data is retained after deletion.'}
          </p>
        </div>

        {/* Response time */}
        <div style={{ borderInlineStart: `2px solid ${BORDER}`, paddingInlineStart: '24px', marginBottom: '32px' }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '18px', fontWeight: 700, color: GOLD, marginBottom: '10px' }}>
            {isAr ? 'وقت الاستجابة' : 'Response Time'}
          </h2>
          <p style={{ fontSize: '15px', color: TEXT, lineHeight: 1.85 }}>
            {isAr
              ? 'يتم تنفيذ طلبات الحذف التلقائية (عبر فيسبوك) فورًا. طلبات البريد الإلكتروني تُعالج خلال 5 أيام عمل، ويكتمل الحذف الكامل خلال 30 يومًا.'
              : 'Automatic deletion requests (via Facebook) are processed immediately. Email requests are handled within 5 business days, with full deletion completed within 30 days.'}
          </p>
        </div>

        {/* Contact */}
        <div style={{ borderInlineStart: `2px solid ${BORDER}`, paddingInlineStart: '24px' }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '18px', fontWeight: 700, color: GOLD, marginBottom: '10px' }}>
            {isAr ? 'التواصل' : 'Contact'}
          </h2>
          <p style={{ fontSize: '15px', color: TEXT, lineHeight: 1.85 }}>
            {isAr
              ? 'للأسئلة المتعلقة بخصوصيتك أو بيانات حسابك، تواصل معنا على '
              : 'For questions about your privacy or account data, contact us at '}
            <a href="mailto:hello@perfectps.com" style={{ color: GOLD }}>hello@perfectps.com</a>
            {isAr ? '.' : '.'}
          </p>
        </div>

      </div>
    </div>
  )
}
