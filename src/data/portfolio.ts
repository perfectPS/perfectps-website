import type { PortfolioItem } from '../types'

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'quantum-trading',
    name: 'Quantum Trading',
    sector: 'FinTech',
    type: 'web',
    desc: 'Real-time trading dashboard with advanced charting and portfolio management.',
    image: '/portfolio/quantum_trading.png',
  },
  {
    id: 'healthhub',
    name: 'HealthHub Portal',
    sector: 'Healthcare',
    type: 'web',
    desc: 'Patient management platform for clinics with appointment scheduling and EHR.',
    image: '/portfolio/healthhub_portal.png',
  },
  {
    id: 'threatmonitor',
    name: 'ThreatMonitor',
    sector: 'Security',
    type: 'web',
    desc: 'Cybersecurity threat detection and incident response dashboard.',
    image: '/portfolio/threatmonitor.png',
  },
  {
    id: 'smarthome',
    name: 'SmartHome Hub',
    sector: 'IoT',
    type: 'web',
    desc: 'Unified IoT control center for smart home devices and automation.',
    image: '/portfolio/smarthome_hub.png',
  },
  {
    id: 'aurelia',
    name: 'Aurelia Luxury',
    sector: 'E-Commerce',
    type: 'web',
    desc: 'High-end luxury retail platform with curated product experiences.',
    image: '/portfolio/aurelia_luxury.png',
  },
  {
    id: 'ai-saas',
    name: 'AI SaaS Platform',
    sector: 'AI / SaaS',
    type: 'web',
    desc: 'AI-powered content generation and workflow automation platform.',
    image: '/portfolio/ai_saas.svg',
  },
  {
    id: 'kanban-saas',
    name: 'Kanban SaaS',
    sector: 'Productivity',
    type: 'web',
    desc: 'Team collaboration and project management with real-time boards.',
    image: '/portfolio/kanban_saas.svg',
  },
  {
    id: 'lms',
    name: 'LMS Education',
    sector: 'EdTech',
    type: 'web',
    desc: 'Learning management system with course authoring and student analytics.',
    image: '/portfolio/lms_education.svg',
  },
  {
    id: 'proptech',
    name: 'PropTech Platform',
    sector: 'Real Estate',
    type: 'web',
    desc: 'Property listing and investment analytics platform for modern buyers.',
    image: '/portfolio/proptech_realestate.svg',
  },
  {
    id: 'logistics',
    name: 'Logistics Tracker',
    sector: 'Logistics',
    type: 'web',
    desc: 'Fleet tracking and shipment management with live GPS integration.',
    image: '/portfolio/logistics_tracker.svg',
  },
  {
    id: 'neobank',
    name: 'NeoBank App',
    sector: 'FinTech',
    type: 'mobile',
    desc: 'Digital banking app with instant transfers, cards, and spending insights.',
    image: '/portfolio/neobank_mobile.svg',
  },
  {
    id: 'fitness',
    name: 'Fitness Tracker',
    sector: 'Health & Fitness',
    type: 'mobile',
    desc: 'Workout tracking, nutrition logging, and AI-powered coaching app.',
    image: '/portfolio/fitness_mobile.svg',
  },
  {
    id: 'food-delivery',
    name: 'Food Delivery',
    sector: 'Food & Beverage',
    type: 'mobile',
    desc: 'On-demand food ordering with real-time driver tracking and loyalty rewards.',
    image: '/portfolio/food_delivery_mobile.svg',
  },
  {
    id: 'music-player',
    name: 'Music Player',
    sector: 'Entertainment',
    type: 'mobile',
    desc: 'Streaming music app with offline mode, playlists, and social sharing.',
    image: '/portfolio/music_player_mobile.svg',
  },
  {
    id: 'password-vault',
    name: 'Password Vault',
    sector: 'Security',
    type: 'mobile',
    desc: 'Secure password manager with biometric auth, autofill, and AES-256 encryption.',
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
