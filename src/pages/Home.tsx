import { lazy, Suspense, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  Zap, ShieldCheck, Smartphone, Filter, PowerOff, Globe,
  ArrowRight, Lock, Server, Wifi, Cpu,
  Target, Monitor, Shield, Layers,
} from 'lucide-react'
import PageWrapper from '../components/PageWrapper'

const HeroGlobe = lazy(() => import('../components/HeroGlobe'))

/* ── Animation helpers ─────────────────────────────────────────── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp = (delay = 0): any => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: 'easeOut' } },
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const inView = (delay = 0): any => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

/* ── 3D Tilt Card ──────────────────────────────────────────────── */
function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 350, damping: 45 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 350, damping: 45 })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <div style={{ perspective: '900px', height: '100%' }}>
      <motion.div
        className={className}
        style={{ rotateX, rotateY, height: '100%' }}
        onMouseMove={handleMove}
        onMouseLeave={() => { x.set(0); y.set(0) }}
      >
        {children}
      </motion.div>
    </div>
  )
}

/* ── Portfolio data ────────────────────────────────────────────── */
type PortfolioItem = {
  id: string
  name: string
  sector: string
  type: 'web' | 'mobile'
  desc: string
  image: string
  ext: 'png' | 'svg'
}

const portfolioItems: PortfolioItem[] = [
  { id: 'quantum_trading',     name: 'Quantum Trading',      sector: 'FinTech',          type: 'web',    desc: 'Low-latency order books, telemetry feeds, risk limits, and live depth charts.',    image: '/portfolio/quantum_trading.png',     ext: 'png' },
  { id: 'healthhub_portal',    name: 'HealthHub Portal',     sector: 'Healthcare',       type: 'web',    desc: 'Doctor consultation booking, video chat, medical timeline, wearable metrics.',    image: '/portfolio/healthhub_portal.png',    ext: 'png' },
  { id: 'threatmonitor',       name: 'ThreatMonitor',        sector: 'Cybersecurity',    type: 'web',    desc: 'Live attack maps, firewall filters, incident logs, vulnerability scanners.',       image: '/portfolio/threatmonitor.png',        ext: 'png' },
  { id: 'aurelia_luxury',      name: 'Aurelia Luxury',       sector: 'E-Commerce',       type: 'web',    desc: 'Luxury product catalog, customization swatches, checkout, and invoice history.',   image: '/portfolio/aurelia_luxury.png',      ext: 'png' },
  { id: 'smarthome_hub',       name: 'SmartHome Hub',        sector: 'IoT',              type: 'web',    desc: 'Thermostat controls, lighting scenes, camera streams, and power usage charts.',   image: '/portfolio/smarthome_hub.png',       ext: 'png' },
  { id: 'lms_education',       name: 'EduLearn LMS',         sector: 'EdTech',           type: 'web',    desc: 'Student dashboard, video lessons, course syllabus, homework uploads, grades.',    image: '/portfolio/lms_education.svg',       ext: 'svg' },
  { id: 'ai_saas',             name: 'Synthetix AI',         sector: 'Generative Media', type: 'web',    desc: 'Prompt studio, aspect ratio workspace, community gallery, billing, API logs.',    image: '/portfolio/ai_saas.svg',             ext: 'svg' },
  { id: 'proptech_realestate', name: 'UrbanNest PropTech',   sector: 'Real Estate',      type: 'web',    desc: 'Property map search, specifications, mortgage calculator, agent booking chat.',   image: '/portfolio/proptech_realestate.svg', ext: 'svg' },
  { id: 'logistics_tracker',   name: 'Logix Fleet',          sector: 'Logistics',        type: 'web',    desc: 'Global shipment tracker, warehouse capacity, routing logs, vehicle diagnostics.', image: '/portfolio/logistics_tracker.svg',   ext: 'svg' },
  { id: 'kanban_saas',         name: 'TaskFlow SaaS',        sector: 'Productivity',     type: 'web',    desc: 'Kanban boards, Gantt chart roadmaps, velocity charts, Slack & GitHub panels.',    image: '/portfolio/kanban_saas.svg',         ext: 'svg' },
  { id: 'neobank_mobile',      name: 'ApexBank Mobile',      sector: 'NeoBanking',       type: 'mobile', desc: 'Account balances, send/receive funds, savings vaults, and QR code payments.',     image: '/portfolio/neobank_mobile.svg',      ext: 'svg' },
  { id: 'fitness_mobile',      name: 'FitMetrics Mobile',    sector: 'Fitness',          type: 'mobile', desc: 'Activity rings, strength & cardio catalogs, countdown timers, calorie logs.',     image: '/portfolio/fitness_mobile.svg',      ext: 'svg' },
  { id: 'food_delivery_mobile',name: 'YumRun Mobile',        sector: 'Food & Delivery',  type: 'mobile', desc: 'Discount banners, restaurant menus, live GPS rider tracker, digital receipts.',   image: '/portfolio/food_delivery_mobile.svg',ext: 'svg' },
  { id: 'music_player_mobile', name: 'SonicFlow Mobile',     sector: 'Music & Audio',    type: 'mobile', desc: 'Music discovery grid, interactive player, playlist manager, podcast listings.',   image: '/portfolio/music_player_mobile.svg', ext: 'svg' },
  { id: 'password_vault_mobile',name:'LockBox Mobile',       sector: 'Security',         type: 'mobile', desc: 'Credential vault, password generator, FaceID lock simulator, vault health score.',image: '/portfolio/password_vault_mobile.svg',ext:'svg' },
]

/* ── Other data ────────────────────────────────────────────────── */
const capabilities = [
  { Icon: Zap,         cat: 'Protocol',   name: 'WireGuard',     status: 'v1.0',       badge: 'active' },
  { Icon: ShieldCheck, cat: 'Policy',     name: 'Zero-Log',      status: 'Enforced',   badge: 'green' },
  { Icon: Filter,      cat: 'Filtering',  name: 'AdGuard DNS',   status: 'Built-In',   badge: 'active' },
  { Icon: PowerOff,    cat: 'Failsafe',   name: 'Kill Switch',   status: 'Always-On',  badge: 'gold' },
  { Icon: Smartphone,  cat: 'Platform',   name: 'iOS / Android', status: 'Universal',  badge: 'active' },
  { Icon: Globe,       cat: 'Encryption', name: 'ChaCha20',      status: 'Military',   badge: 'gold' },
]

const trust = [
  { Icon: Zap,    label: 'WireGuard' },
  { Icon: Lock,   label: "Let's Encrypt" },
  { Icon: Server, label: 'Docker' },
  { Icon: Wifi,   label: 'AdGuard DNS' },
  { Icon: Cpu,    label: 'Oracle Cloud' },
]

const pillars = [
  { Icon: Target,  color: '#00eeff', title: 'Perfection',  desc: 'Zero-compromise quality in every release — bug-free, fast, and resilient by design.' },
  { Icon: Monitor, color: '#f59e0b', title: 'Pixels',      desc: 'Visually stunning, accessible interfaces built to the highest modern standards.' },
  { Icon: Shield,  color: '#0066ff', title: 'Solutions',   desc: 'Secure, scalable cloud architecture. Hardened servers, encrypted end-to-end, always.' },
]

const badgeClass: Record<string, string> = {
  active: 'cap-status cap-status-active',
  gold:   'cap-status cap-status-gold',
  green:  'cap-status cap-status-green',
}

type FilterTab = 'all' | 'web' | 'mobile'

/* ── Component ─────────────────────────────────────────────────── */
export default function Home() {
  const [activeTab, setActiveTab] = useState<FilterTab>('all')

  const filtered = activeTab === 'all'
    ? portfolioItems
    : portfolioItems.filter(p => p.type === activeTab)

  return (
    <PageWrapper>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <div className="hero-grid" />
          <Suspense fallback={null}>
            <HeroGlobe />
          </Suspense>
          <div className="hero-floor" />
          <div className="hero-scan" />
        </div>

        <div className="wrap">
          <motion.div {...fadeUp(0)}>
            <div className="hero-badge">
              <div className="badge-dot" />
              Digital Infrastructure Studio
            </div>
          </motion.div>

          <motion.h1 {...fadeUp(0.08)}>
            Perfect Pixels.<br />
            <span className="g">Secure Solutions.</span>
          </motion.h1>

          <motion.p className="hero-sub" {...fadeUp(0.16)}>
            We build high-performance digital systems and premium experiences — from
            hardened VPN infrastructure to enterprise mobile software.
          </motion.p>

          <motion.div className="hero-btns" {...fadeUp(0.22)}>
            <a href="#work" className="btn btn-grad">
              View Our Work <ArrowRight size={14} />
            </a>
            <Link to="/contact" className="btn btn-ghost">
              Get In Touch
            </Link>
          </motion.div>

          <motion.p className="hero-note" {...fadeUp(0.3)}>
            Infrastructure <span>·</span> Mobile <span>·</span> Web
          </motion.p>
        </div>
      </section>

      {/* ── Trust bar ────────────────────────────────────────── */}
      <section className="trust">
        <div className="wrap">
          <div className="trust-inner">
            <span className="trust-label">Powered by open standards</span>
            <div className="trust-items">
              {trust.map(({ Icon, label }) => (
                <div key={label} className="trust-item">
                  <Icon size={13} />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio ─────────────────────────────────────────── */}
      <section className="portfolio" id="work">
        <div className="wrap">
          <motion.div className="sec-head" {...inView()}>
            <span className="label">Selected Work</span>
            <h2>Products we've<br /><span className="g">designed & built</span></h2>
            <p>A cross-section of platforms across industries — from FinTech and Healthcare to IoT and Generative AI.</p>
          </motion.div>

          {/* Filter tabs */}
          <div className="portfolio-filters">
            {(['all', 'web', 'mobile'] as FilterTab[]).map(tab => (
              <button
                key={tab}
                className={`pf-btn${activeTab === tab ? ' pf-btn--active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'all' ? 'All Work' : tab === 'web' ? 'Web Apps' : 'Mobile Apps'}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            className="portfolio-grid"
            layout
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <div className={`pf-card${item.type === 'mobile' ? ' pf-card--mobile' : ''}`}>

                  {/* Frame mockup */}
                  {item.type === 'web' ? (
                    <div className="pf-browser">
                      <div className="pf-browser-bar">
                        <div className="pf-browser-dot" />
                        <div className="pf-browser-dot" />
                        <div className="pf-browser-dot" />
                        <div className="pf-browser-url" />
                      </div>
                    </div>
                  ) : (
                    <div className="pf-phone">
                      <div className="pf-phone-notch" />
                    </div>
                  )}

                  {/* Screenshot */}
                  <div className="pf-screenshot">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />
                  </div>

                  {/* Info */}
                  <div className="pf-info">
                    <span className="pf-sector">{item.sector}</span>
                    <span className="pf-name">{item.name}</span>
                    <p className="pf-desc">{item.desc}</p>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Own Products ──────────────────────────────────────── */}
      <section className="projects" id="projects">
        <div className="wrap">
          <motion.div className="sec-head" {...inView()}>
            <span className="label">Our Products</span>
            <h2>What we're<br /><span className="g">launching</span></h2>
            <p>Beyond client work — perfectPS builds and ships its own products.</p>
          </motion.div>

          <div className="projects-grid">

            {/* PS Secure — Featured */}
            <div className="projects-grid-cell">
              <TiltCard className="proj-card proj-card--featured">
                <div className="proj-inner">
                  <div className="proj-header">
                    <span className="proj-tag proj-tag--active">In Development</span>
                    <span className="proj-type">VPN Platform</span>
                  </div>
                  <div className="proj-body">
                    <div className="proj-icon">
                      <ShieldCheck size={44} strokeWidth={1.25} color="#00eeff" />
                    </div>
                    <h3><span className="g">PS Secure</span></h3>
                    <p>
                      WireGuard-powered privacy infrastructure with a zero-log policy,
                      built-in DNS ad filtering, and seamless support across iOS, Android, and web.
                    </p>
                    <div className="proj-tech">
                      {['WireGuard', 'iOS', 'Android', 'Oracle Cloud', 'AdGuard'].map(t => (
                        <span key={t} className="proj-tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="proj-footer">
                    <Link to="/contact" className="btn btn-grad" style={{ width: 'fit-content' }}>
                      Join the Waitlist <ArrowRight size={14} />
                    </Link>
                  </div>
                  <div className="proj-glow" />
                </div>
              </TiltCard>
            </div>

            {/* Coming Soon */}
            <div className="projects-grid-cell">
              <TiltCard className="proj-card proj-card--upcoming">
                <div className="proj-inner">
                  <div className="proj-header">
                    <span className="proj-tag proj-tag--gold">Coming Soon</span>
                    <span className="proj-type">Next Product</span>
                  </div>
                  <div className="proj-body">
                    <div className="proj-icon proj-icon--gold">
                      <Layers size={44} strokeWidth={1.25} color="#f59e0b" />
                    </div>
                    <h3 style={{ color: 'var(--text-2)' }}>Something new<br />is being built.</h3>
                    <p>
                      Another high-performance system is in the works. If you have a project
                      in mind, we'd love to build it together.
                    </p>
                  </div>
                  <div className="proj-footer">
                    <Link to="/contact" className="btn btn-ghost" style={{ width: 'fit-content' }}>
                      Work With Us <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </div>

          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────────── */}
      <section className="capabilities" id="capabilities">
        <div className="wrap">
          <motion.div className="sec-head" {...inView()}>
            <span className="label">Technology Stack</span>
            <h2>Built with the<br /><span className="g">right tools</span></h2>
            <p>Every technology is hand-selected and production-proven. No vendor lock-in, no black boxes.</p>
          </motion.div>

          <motion.div
            className="cap-grid"
            variants={{ visible: { transition: { staggerChildren: 0.06 } } } as any} // eslint-disable-line @typescript-eslint/no-explicit-any
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {capabilities.map(({ Icon, cat, name, status, badge }) => (
              <motion.div
                key={name}
                className="cap-card"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } } as any} // eslint-disable-line @typescript-eslint/no-explicit-any
                whileHover={{ backgroundColor: 'var(--bg-2)' }}
              >
                <div className="cap-icon-wrap">
                  <Icon size={18} color="var(--cyan)" strokeWidth={1.75} />
                </div>
                <div className="cap-meta">
                  <span className="cap-cat">{cat}</span>
                  <span className="cap-name">{name}</span>
                </div>
                <span className={badgeClass[badge]}>{status}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section className="about" id="about">
        <div className="wrap">
          <div className="about-grid">
            <motion.div className="about-left" {...inView()}>
              <span className="label">About Us</span>
              <h2>Perfect pixels.<br /><span className="g">Secure solutions.</span></h2>
              <p>
                Perfect Pixel Solutions (perfectPS) is a technology firm specializing in
                high-performance digital systems and premium user experiences, built on
                institutional-grade infrastructure.
              </p>
              <p>
                We believe privacy is a fundamental right, not a premium feature. PS Secure
                VPN is our first product — WireGuard-powered, zero-log, and designed for everyone.
              </p>
            </motion.div>

            <motion.div
              className="pillars"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } } as any} // eslint-disable-line @typescript-eslint/no-explicit-any
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {pillars.map(({ Icon, color, title, desc }) => (
                <motion.div
                  key={title}
                  className="pillar"
                  variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.45 } } } as any} // eslint-disable-line @typescript-eslint/no-explicit-any
                  whileHover={{ borderColor: 'rgba(0,238,255,0.3)' }}
                >
                  <div className="pillar-icon">
                    <Icon size={20} color={color} strokeWidth={1.75} />
                  </div>
                  <div className="pillar-body">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="cta-sec">
        <div className="wrap">
          <motion.div className="cta-card" {...inView()}>
            <span className="label">Work With Us</span>
            <h2>Have a project?<br /><span className="g">Let's build it.</span></h2>
            <p>Whether you need hardened infrastructure, a premium mobile app, or an end-to-end digital product — we'd love to hear about it.</p>
            <div className="cta-btns">
              <Link to="/contact" className="btn btn-grad">
                Get In Touch <ArrowRight size={14} />
              </Link>
              <a href="https://github.com/perfectPS" target="_blank" rel="noreferrer" className="btn btn-ghost">
                Follow on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </PageWrapper>
  )
}
