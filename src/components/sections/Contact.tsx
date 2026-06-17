import { useState } from 'react'
import { Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { ScrollReveal } from '../ui/ScrollReveal'

const projectTypes = [
  'Web Application', 'Mobile App', 'VPN / Security',
  'Backend / API', 'UI/UX Design', 'DevOps / Cloud', 'Other',
]

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '13px 16px',
  border: '1.5px solid var(--border)',
  borderRadius: 'var(--r-sm)',
  fontSize: '15px',
  color: 'var(--text-1)',
  background: 'var(--bg)',
  outline: 'none',
  transition: 'border-color 200ms, box-shadow 200ms',
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [sent, setSent] = useState(false)

  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--cyan)'
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,174,239,0.12)'
  }
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--border)'
    e.currentTarget.style.boxShadow = 'none'
  }

  return (
    <section
      id="contact"
      className="section"
      style={{ background: 'var(--surface-alt)', overflow: 'hidden', position: 'relative' }}
    >
      {/* Decorative bg */}
      <div aria-hidden style={{
        position: 'absolute', right: -100, top: -100,
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(0,174,239,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <div style={{ maxWidth: 560, marginBottom: '56px' }}>
            <div className="section-label">Let's Work Together</div>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800, color: 'var(--text-1)',
              marginBottom: '14px',
            }}>
              Start Your Project
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--text-2)', lineHeight: 1.7 }}>
              Tell us about your idea and we'll get back to you within 24 hours.
            </p>
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 360px',
          gap: '48px',
          alignItems: 'start',
        }} className="contact-grid">

          {/* Form */}
          <ScrollReveal>
            {sent ? (
              <div style={{
                padding: '56px 48px',
                background: 'var(--surface)',
                borderRadius: 'var(--r-xl)',
                border: '1px solid var(--border)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{
                  width: 64, height: 64,
                  borderRadius: '50%',
                  background: 'rgba(16,185,129,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '28px',
                }}>
                  ✓
                </div>
                <h3 style={{ fontFamily: "'DM Sans'", fontSize: '22px', fontWeight: 700, marginBottom: '8px', color: 'var(--navy)' }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text-2)' }}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={e => { e.preventDefault(); setSent(true) }}
                style={{
                  background: 'var(--surface)',
                  borderRadius: 'var(--r-xl)',
                  border: '1px solid var(--border)',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-name-row">
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-2)', display: 'block', marginBottom: '6px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Name</label>
                    <input type="text" required placeholder="Your name" value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      style={inputStyle} onFocus={focus} onBlur={blur} />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-2)', display: 'block', marginBottom: '6px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Email</label>
                    <input type="email" required placeholder="hello@company.com" value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      style={inputStyle} onFocus={focus} onBlur={blur} />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-2)', display: 'block', marginBottom: '6px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Project Type</label>
                  <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}
                    style={{ ...inputStyle, cursor: 'pointer' }} onFocus={focus} onBlur={blur}>
                    <option value="">Select a project type</option>
                    {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-2)', display: 'block', marginBottom: '6px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Message</label>
                  <textarea required rows={5} placeholder="Tell us about your project..."
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                    onFocus={focus} onBlur={blur} />
                </div>

                <button type="submit" style={{
                  padding: '15px',
                  background: 'var(--navy)',
                  color: '#fff',
                  borderRadius: 'var(--r-sm)',
                  fontSize: '15px', fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  transition: 'opacity 200ms, transform 200ms',
                }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  Send Message <ArrowRight size={16} />
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* Info sidebar */}
          <ScrollReveal delay={150}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: Mail, label: 'Email', value: 'hello@perfectps.com', href: 'mailto:hello@perfectps.com' },
                { icon: MapPin, label: 'Location', value: 'Amman, Jordan' },
                { icon: Clock, label: 'Hours', value: 'Sun–Thu, 9 AM – 6 PM' },
              ].map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '16px',
                    padding: '18px 20px',
                    background: 'var(--surface)',
                    borderRadius: 'var(--r-md)',
                    border: '1px solid var(--border)',
                  }}>
                    <div style={{
                      width: 40, height: 40,
                      borderRadius: 10,
                      background: 'var(--cyan-dim)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={17} color="var(--cyan)" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '1px' }}>{label}</div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-1)' }}>{value}</div>
                    </div>
                  </div>
                )
                return href
                  ? <a key={label} href={href}>{inner}</a>
                  : <div key={label}>{inner}</div>
              })}

              {/* CTA callout */}
              <div style={{
                marginTop: '8px',
                padding: '24px',
                background: 'var(--navy)',
                borderRadius: 'var(--r-lg)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--cyan), transparent)' }} />
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.75, marginBottom: '16px' }}>
                  We typically respond within a few hours during business days. Ready to bring your idea to life?
                </p>
                <a href="mailto:hello@perfectps.com" style={{
                  color: 'var(--cyan)', fontSize: '13px', fontWeight: 700,
                  display: 'flex', alignItems: 'center', gap: '6px',
                }}>
                  hello@perfectps.com <ArrowRight size={13} />
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
