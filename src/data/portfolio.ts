import type { PortfolioItem } from '../types'

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'fintech-trading',
    name: 'Trading Dashboard',
    sector: 'FinTech',
    type: 'web',
    desc: 'Real-time trading dashboard with advanced charting, portfolio analytics, and live market data feeds.',
    image: '/portfolio/quantum_trading.png',
  },
  {
    id: 'healthcare-platform',
    name: 'Healthcare Platform',
    sector: 'Healthcare',
    type: 'web',
    desc: 'Patient management system for clinics — appointment scheduling, EHR, and billing in one platform.',
    image: '/portfolio/healthhub_portal.png',
  },
  {
    id: 'security-monitor',
    name: 'Security Monitor',
    sector: 'Cybersecurity',
    type: 'web',
    desc: 'Threat detection and incident response dashboard with real-time alerts and audit trails.',
    image: '/portfolio/threatmonitor.png',
  },
  {
    id: 'iot-control',
    name: 'IoT Control Center',
    sector: 'IoT',
    type: 'web',
    desc: 'Unified smart device control hub with automation rules, scheduling, and energy monitoring.',
    image: '/portfolio/smarthome_hub.png',
  },
  {
    id: 'ecommerce-luxury',
    name: 'Luxury E-Commerce',
    sector: 'E-Commerce',
    type: 'web',
    desc: 'High-end retail platform with curated catalog, personalised experiences, and multi-currency checkout.',
    image: '/portfolio/aurelia_luxury.png',
  },
  {
    id: 'ai-automation',
    name: 'AI Automation Platform',
    sector: 'AI / SaaS',
    type: 'web',
    desc: 'AI-powered content generation, document processing, and workflow automation for enterprise teams.',
    image: '/portfolio/ai_saas.svg',
  },
  {
    id: 'project-management',
    name: 'Project Management SaaS',
    sector: 'Productivity',
    type: 'web',
    desc: 'Real-time team collaboration with Kanban boards, sprint planning, and workload tracking.',
    image: '/portfolio/kanban_saas.svg',
  },
  {
    id: 'learning-platform',
    name: 'Learning Platform',
    sector: 'EdTech',
    type: 'web',
    desc: 'LMS with course authoring, progress tracking, live sessions, and student performance analytics.',
    image: '/portfolio/lms_education.svg',
  },
  {
    id: 'proptech-platform',
    name: 'Property Intelligence',
    sector: 'Real Estate',
    type: 'web',
    desc: 'Property listing and investment analytics platform with map search and ROI forecasting.',
    image: '/portfolio/proptech_realestate.svg',
  },
  {
    id: 'fleet-logistics',
    name: 'Fleet & Logistics',
    sector: 'Logistics',
    type: 'web',
    desc: 'Fleet tracking and shipment management with live GPS integration and delivery SLA monitoring.',
    image: '/portfolio/logistics_tracker.svg',
  },
  {
    id: 'digital-banking',
    name: 'Digital Banking App',
    sector: 'FinTech',
    type: 'mobile',
    desc: 'Neobank app with instant transfers, virtual cards, spending insights, and biometric authentication.',
    image: '/portfolio/neobank_mobile.svg',
  },
  {
    id: 'fitness-health',
    name: 'Fitness & Health App',
    sector: 'Health & Fitness',
    type: 'mobile',
    desc: 'Workout tracking, nutrition logging, and AI-powered coaching with wearable device sync.',
    image: '/portfolio/fitness_mobile.svg',
  },
  {
    id: 'food-platform',
    name: 'Food Delivery Platform',
    sector: 'Food & Beverage',
    type: 'mobile',
    desc: 'On-demand food ordering with real-time driver tracking, loyalty rewards, and restaurant CMS.',
    image: '/portfolio/food_delivery_mobile.svg',
  },
  {
    id: 'music-streaming',
    name: 'Music Streaming App',
    sector: 'Entertainment',
    type: 'mobile',
    desc: 'Streaming app with offline mode, curated playlists, artist pages, and social sharing.',
    image: '/portfolio/music_player_mobile.svg',
  },
  {
    id: 'security-vault',
    name: 'Security Vault App',
    sector: 'Security',
    type: 'mobile',
    desc: 'Password manager with biometric auth, autofill, secure notes, and AES-256 encryption.',
    image: '/portfolio/password_vault_mobile.svg',
  },
]

/**
 * Fetches portfolio items from the server's /content/portfolio.json endpoint.
 * Falls back to the static bundled array if the request fails or returns invalid data.
 */
export async function fetchPortfolio(): Promise<PortfolioItem[]> {
  try {
    const res = await fetch('/content/portfolio.json')
    if (!res.ok) return portfolioItems
    const data: unknown = await res.json()
    if (!Array.isArray(data)) return portfolioItems
    return data as PortfolioItem[]
  } catch {
    return portfolioItems
  }
}
