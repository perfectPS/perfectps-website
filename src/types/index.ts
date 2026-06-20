export interface PortfolioItem {
  id: string
  name: string
  sector: string
  type: 'web' | 'mobile'
  desc: string
  image: string
}

export interface ServiceItem {
  icon: string
  title: string
  description: string
  href?: string
}

export interface StatItem {
  value: string
  numericValue?: number
  label: string
  change?: string
  positive?: boolean
}
