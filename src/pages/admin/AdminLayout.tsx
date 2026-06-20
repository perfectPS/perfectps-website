import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { LayoutDashboard, FileText, Briefcase, ExternalLink, LogOut } from 'lucide-react'
import { useAdminAuth } from '../../contexts/AdminAuthContext'
import { useEffect, type CSSProperties } from 'react'

const SIDEBAR_W = 220

interface NavItem {
  to: string
  label: string
  icon: React.ReactNode
  end?: boolean
}

function SidebarNavItem({ item }: { item: NavItem }) {
  const baseStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '10px 16px',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 500,
    color: 'rgba(255,255,255,0.65)',
    textDecoration: 'none',
    transition: 'background 0.15s, color 0.15s, border-color 0.15s',
    borderLeft: '3px solid transparent',
    fontFamily: "'DM Sans', sans-serif",
    marginBottom: 2,
  }

  return (
    <NavLink
      to={item.to}
      end={item.end}
      style={({ isActive }) =>
        isActive
          ? {
              ...baseStyle,
              color: '#c8a84b',
              background: 'rgba(200,168,75,0.08)',
              borderLeft: '3px solid #c8a84b',
            }
          : baseStyle
      }
    >
      {item.icon}
      {item.label}
    </NavLink>
  )
}

export function AdminLayout() {
  const { isAuth, logout } = useAdminAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/admin/login', { replace: true })
    }
  }, [isAuth, navigate])

  if (!isAuth) return null

  const navItems: NavItem[] = [
    {
      to: '/admin',
      end: true,
      label: 'Dashboard',
      icon: <LayoutDashboard size={16} />,
    },
    {
      to: '/admin/content',
      label: 'Content',
      icon: <FileText size={16} />,
    },
    {
      to: '/admin/portfolio',
      label: 'Portfolio',
      icon: <Briefcase size={16} />,
    },
  ]

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: '#070f1a',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: SIDEBAR_W,
          flexShrink: 0,
          background: '#0d1b2e',
          borderRight: '1px solid rgba(200,168,75,0.15)',
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          zIndex: 100,
          overflowY: 'auto',
        }}
      >
        {/* Logo */}
        <div
          style={{
            padding: '24px 16px 20px',
            borderBottom: '1px solid rgba(200,168,75,0.1)',
            marginBottom: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 36,
                height: 36,
                background: 'linear-gradient(135deg, #c8a84b, #a07830)',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 15,
                fontWeight: 800,
                color: '#070f1a',
              }}
            >
              PS
            </div>
            <div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1.2,
                }}
              >
                perfectPS
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.04em',
                }}
              >
                Admin Panel
              </div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ padding: '0 8px', flex: 1 }}>
          {navItems.map((item) => (
            <SidebarNavItem key={item.to} item={item} />
          ))}
        </nav>

        {/* Bottom actions */}
        <div
          style={{
            padding: '12px 8px 16px',
            borderTop: '1px solid rgba(200,168,75,0.1)',
          }}
        >
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '9px 16px',
              borderRadius: 8,
              fontSize: 13,
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              marginBottom: 2,
              transition: 'color 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
            }}
          >
            <ExternalLink size={15} />
            View Site
          </a>
          <button
            onClick={logout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              width: '100%',
              padding: '9px 16px',
              borderRadius: 8,
              fontSize: 13,
              color: 'rgba(255,255,255,0.5)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif",
              textAlign: 'left',
              transition: 'color 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#f87171'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
            }}
          >
            <LogOut size={15} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main
        style={{
          flex: 1,
          marginLeft: SIDEBAR_W,
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        <Outlet />
      </main>
    </div>
  )
}
