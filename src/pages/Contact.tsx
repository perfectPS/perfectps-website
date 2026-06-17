import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Clock, Briefcase, GitFork, CheckCircle } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const inView = (delay = 0): any => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

const subjects = [
  'General Inquiry',
  'Early Access / Waitlist',
  'Partnership or Business',
  'Privacy / Data Request',
  'Technical Support',
  'Press / Media',
  'Other',
]

const cards = [
  { Icon: Mail,     title: 'Email',                desc: 'We reply within 24–48 hours.',                    link: 'mailto:emadxcs@gmail.com', linkText: 'emadxcs@gmail.com' },
  { Icon: Clock,    title: 'Early Access Waitlist', desc: 'PS Secure is coming soon. Reserve your spot.',   link: null,                      linkText: null },
  { Icon: Briefcase,title: 'Business & Partners',  desc: 'Interested in reseller or integration opportunities?', link: null,              linkText: null },
  { Icon: GitFork,  title: 'GitHub',               desc: null,                                             link: 'https://github.com/perfectPS', linkText: 'github.com/perfectPS' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd   = new FormData(e.currentTarget)
    const name = fd.get('name') as string
    const email= fd.get('email') as string
    const subj = fd.get('subject') as string
    const msg  = fd.get('message') as string
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`
    window.location.href =
      `mailto:emadxcs@gmail.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <PageWrapper>
      <section className="contact">
        <div className="wrap">
          <motion.div className="contact-top" {...inView()}>
            <span className="label">Get in Touch</span>
            <h1>We'd love to hear<br /><span className="g">from you</span></h1>
            <p>Questions about PS Secure, early access, or anything else — we read every message.</p>
          </motion.div>

          <div className="contact-grid">
            <motion.div
              className="contact-cards"
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {cards.map(({ Icon, title, desc, link, linkText }) => (
                <motion.div
                  key={title}
                  className="c-card"
                  variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } } }}
                  whileHover={{ borderColor: 'rgba(0,240,255,0.3)' }}
                >
                  <div className="c-icon"><Icon size={17} strokeWidth={1.75} /></div>
                  <div className="c-info">
                    <h4>{title}</h4>
                    {desc && <p>{desc}</p>}
                    {link && linkText && (
                      <a href={link} target={link.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{linkText}</a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="form-card" {...inView(0.1)}>
              {sent ? (
                <div className="form-ok">
                  <motion.div
                    className="form-ok-icon"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  >
                    <CheckCircle size={52} strokeWidth={1.5} />
                  </motion.div>
                  <h3>Message sent!</h3>
                  <p>Your email client opened with the message pre-filled. We'll reply as soon as possible.</p>
                </div>
              ) : (
                <>
                  <h2>Send us a message</h2>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                      <div className="fg">
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" placeholder="Your name" required />
                      </div>
                      <div className="fg">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" placeholder="you@example.com" required />
                      </div>
                    </div>
                    <div className="fg">
                      <label htmlFor="subject">Subject</label>
                      <select id="subject" name="subject">
                        {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="fg">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" name="message" placeholder="Tell us what's on your mind..." required />
                    </div>
                    <motion.button
                      type="submit"
                      className="btn btn-grad"
                      style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
                      whileHover={{ boxShadow: '0 0 48px rgba(0,240,255,0.35)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
