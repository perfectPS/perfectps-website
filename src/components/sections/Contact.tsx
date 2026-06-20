import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, MapPin, Clock, Check } from 'lucide-react'
import { ScrollReveal } from '../ui/ScrollReveal'
import { BackgroundOrbs } from '../ui/BackgroundOrbs'
import { useLang } from '../../hooks/useLang'

const projectTypesEn = [
  'Web Application', 'Mobile App', 'VPN / Security',
  'Backend / API', 'UI/UX Design', 'DevOps / Cloud', 'Other',
]
const projectTypesAr = [
  'تطبيق ويب', 'تطبيق جوال', 'VPN / الأمن',
  'الخلفية / API', 'تصميم UI/UX', 'DevOps / السحابة', 'أخرى',
]

const darkInputStyle: React.CSSProperties = {
  width: '100%',
  padding: '13px 16px',
  border: '1px solid rgba(200,168,75,0.2)',
  borderRadius: '8px',
  fontSize: '15px',
  color: '#fff',
  background: 'rgba(200,168,75,0.04)',
  outline: 'none',
  transition: 'border-color 200ms, box-shadow 200ms',
}

export function Contact() {
  const { t } = useTranslation()
  const lang = useLang()
  const projectTypes = lang === 'ar' ? projectTypesAr : projectTypesEn
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [sent, setSent] = useState(false)

  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = '#c8a84b'
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(200,168,75,0.1)'
  }
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(200,168,75,0.2)'
    e.currentTarget.style.boxShadow = 'none'
  }

  return (
    <section
      id="contact"
      className="section"
      style={{
        background: '#112240',
        overflow: 'hidden',
        position: 'relative',
        backgroundImage: `url('/bg/contact-bg.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div aria-hidden style={{
        position: 'absolute',
        bottom: '0', right: '0',
        width: '35%',
        height: '70%',
        backgroundImage: "url('/sections/contact-message.svg')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right bottom',
        opacity: 0.45,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <BackgroundOrbs goldTop="-80px" goldRight="-60px" blueBottom="-100px" blueLeft="-40px" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <div style={{ maxWidth: 560, marginBottom: '56px' }}>
            <div className="section-label">{t('contact.label')}</div>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800, color: '#fff',
              marginBottom: '14px',
            }}>
              {t('contact.h2')}
            </h2>
            <p style={{ fontSize: '17px', color: '#8fa3bc', lineHeight: 1.7 }}>
              {t('contact.body')}
            </p>
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 340px',
          gap: '48px',
          alignItems: 'start',
        }} className="contact-grid">

          <ScrollReveal>
            {sent ? (
              <div style={{
                padding: '56px 48px',
                background: '#0d1b2e',
                borderRadius: '16px',
                border: '1px solid rgba(200,168,75,0.2)',
                textAlign: 'center',
              }}>
                <div style={{
                  width: 64, height: 64,
                  borderRadius: '50%',
                  background: 'rgba(34,197,94,0.12)',
                  border: '1px solid rgba(34,197,94,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '28px',
                }}>
                  <Check size={12} />
                </div>
                <h3 style={{ fontFamily: "'DM Sans'", fontSize: '22px', fontWeight: 700, marginBottom: '8px', color: '#fff' }}>
                  {t('contact.success_title')}
                </h3>
                <p style={{ color: '#8fa3bc' }}>{t('contact.success_body')}</p>
              </div>
            ) : (
              <form
                onSubmit={e => { e.preventDefault(); setSent(true) }}
                style={{
                  background: '#0d1b2e',
                  borderRadius: '16px',
                  border: '1px solid rgba(200,168,75,0.18)',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-name-row">
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 700, color: '#8fa3bc', display: 'block', marginBottom: '6px', letterSpacing: '1px', textTransform: 'uppercase' }}>{t('contact.name_label')}</label>
                    <input type="text" required placeholder={t('contact.name_placeholder')} value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      style={darkInputStyle} onFocus={focus} onBlur={blur} />
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 700, color: '#8fa3bc', display: 'block', marginBottom: '6px', letterSpacing: '1px', textTransform: 'uppercase' }}>{t('contact.email_label')}</label>
                    <input type="email" required placeholder={t('contact.email_placeholder')} value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      style={darkInputStyle} onFocus={focus} onBlur={blur} />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '11px', fontWeight: 700, color: '#8fa3bc', display: 'block', marginBottom: '6px', letterSpacing: '1px', textTransform: 'uppercase' }}>{t('contact.project_type_label')}</label>
                  <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}
                    style={{ ...darkInputStyle, cursor: 'pointer' }} onFocus={focus} onBlur={blur}>
                    <option value="" style={{ background: '#0d1b2e' }}>{t('contact.project_type_placeholder')}</option>
                    {projectTypes.map(t => <option key={t} value={t} style={{ background: '#0d1b2e' }}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '11px', fontWeight: 700, color: '#8fa3bc', display: 'block', marginBottom: '6px', letterSpacing: '1px', textTransform: 'uppercase' }}>{t('contact.message_label')}</label>
                  <textarea required rows={5} placeholder={t('contact.message_placeholder')}
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...darkInputStyle, resize: 'vertical', minHeight: '130px' }}
                    onFocus={focus} onBlur={blur} />
                </div>

                <button type="submit" style={{
                  padding: '15px',
                  background: '#c8a84b',
                  color: '#0d1b2e',
                  borderRadius: '8px',
                  fontSize: '15px', fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  transition: 'background 200ms, transform 150ms',
                  border: 'none',
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#e0c068'; el.style.transform = 'translateY(-1px)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#c8a84b'; el.style.transform = 'translateY(0)' }}
                >
                  {t('contact.submit')}
                </button>
              </form>
            )}
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div style={{
              background: '#0d1b2e',
              border: '1px solid rgba(200,168,75,0.18)',
              borderRadius: '16px',
              padding: '32px 28px',
              display: 'flex', flexDirection: 'column', gap: '0',
            }}>
              {[
                { icon: Mail,   label: t('contact.label_email'),    value: t('contact.info_email'),    href: 'mailto:hello@perfectps.com' },
                { icon: MapPin, label: t('contact.label_location'), value: t('contact.info_location'), href: undefined },
                { icon: Clock,  label: t('contact.label_hours'),    value: t('contact.info_hours'),    href: undefined },
              ].map(({ icon: Icon, label, value, href }, idx, arr) => {
                const inner = (
                  <div style={{
                    display: 'flex', alignItems: 'flex-start', gap: '16px',
                    padding: '20px 0',
                    borderBottom: idx < arr.length - 1 ? '1px solid rgba(200,168,75,0.08)' : 'none',
                  }}>
                    <div style={{
                      width: 40, height: 40,
                      borderRadius: '10px',
                      background: 'rgba(200,168,75,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={17} color="#c8a84b" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#c8a84b', marginBottom: '2px' }}>{label}</div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>{value}</div>
                    </div>
                  </div>
                )
                return href
                  ? <a key={label} href={href} style={{ display: 'block' }}>{inner}</a>
                  : <div key={label}>{inner}</div>
              })}

              <div style={{
                marginTop: '20px',
                padding: '16px',
                background: 'rgba(200,168,75,0.05)',
                border: '1px solid rgba(200,168,75,0.12)',
                borderRadius: '8px',
              }}>
                <p style={{ color: '#8fa3bc', fontSize: '13px', lineHeight: 1.75, marginBottom: '12px' }}>
                  {t('contact.info_note')}
                </p>
                <a href="mailto:hello@perfectps.com" style={{
                  color: '#c8a84b', fontSize: '13px', fontWeight: 700,
                  display: 'flex', alignItems: 'center', gap: '6px',
                }}>
                  hello@perfectps.com
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 560px) { .form-name-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
