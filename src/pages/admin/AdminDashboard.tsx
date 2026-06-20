import { useState, useEffect, type CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { FileText, Briefcase, Globe, Clock, ArrowRight } from 'lucide-react'
import { useAdminAuth } from '../../contexts/AdminAuthContext'
import { getPortfolio, type PortfolioItem } from '../../api/adminClient'

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string | number
  color?: string
}

function StatCard({ icon, label, value, color = '#c8a84b' }: StatCardProps) {
  return (
    <div
      style={{
        background: '#0d2247',
        border: '1px solid rgba(200,168,75,0.15)',
        borderRadius: 12,
        padding: '24px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: 16,
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 10,
          background: `${color}18`,
          border: `1px solid ${color}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: color,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1,
            marginBottom: 6,
          }}
        >
          {value}
        </div>
        <div
          style={{
            fontSize: 13,
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          {label}
        </div>
      </div>
    </div>
  )
}

interface QuickLinkProps {
  to: string
  label: string
  description: string
  icon: React.ReactNode
}

function QuickLink({ to, label, description, icon }: QuickLinkProps) {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)

  const style: CSSProperties = {
    background: hovered ? 'rgba(200,168,75,0.05)' : '#0d2247',
    border: `1px solid ${hovered ? 'rgba(200,168,75,0.4)' : 'rgba(200,168,75,0.15)'}`,
    borderRadius: 12,
    padding: '20px 24px',
    cursor: 'pointer',
    transition: 'background 0.15s, border-color 0.15s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

  return (
    <div
      style={style}
      onClick={() => navigate(to)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ color: '#c8a84b' }}>{icon}</div>
        <div>
          <div
            style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 2 }}
          >
            {label}
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
            {description}
          </div>
        </div>
      </div>
      <ArrowRight size={16} color="rgba(255,255,255,0.3)" />
    </div>
  )
}

export function AdminDashboard() {
  const { token } = useAdminAuth()
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([])

  useEffect(() => {
    if (token) {
      getPortfolio(token).then(setPortfolioItems).catch(() => {})
    }
  }, [token])

  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <div style={{ padding: '36px 40px', maxWidth: 1000 }}>
      {/* Header */}
      <div style={{ marginBottom: 36 }}>
        <h1
          style={{
            margin: '0 0 6px',
            fontSize: 26,
            fontWeight: 700,
            color: '#fff',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Dashboard
        </h1>
        <p
          style={{
            margin: 0,
            color: 'rgba(255,255,255,0.45)',
            fontSize: 14,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Welcome to the perfectPS admin panel.
        </p>
      </div>

      {/* Stats grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
          gap: 16,
          marginBottom: 40,
        }}
      >
        <StatCard
          icon={<FileText size={20} />}
          label="Content Sections"
          value={12}
        />
        <StatCard
          icon={<Briefcase size={20} />}
          label="Portfolio Items"
          value={portfolioItems.length}
        />
        <StatCard
          icon={<Globe size={20} />}
          label="Languages"
          value={2}
          color="#60a5fa"
        />
        <StatCard
          icon={<Clock size={20} />}
          label="Last Updated"
          value={today}
          color="#34d399"
        />
      </div>

      {/* Quick links */}
      <div>
        <h2
          style={{
            margin: '0 0 16px',
            fontSize: 16,
            fontWeight: 600,
            color: 'rgba(255,255,255,0.6)',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Quick Actions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <QuickLink
            to="/admin/content"
            label="Edit Content"
            description="Update bilingual text for all website sections"
            icon={<FileText size={20} />}
          />
          <QuickLink
            to="/admin/portfolio"
            label="Manage Portfolio"
            description="Add, edit, or remove portfolio projects"
            icon={<Briefcase size={20} />}
          />
        </div>
      </div>
    </div>
  )
}
