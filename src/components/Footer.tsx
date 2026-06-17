import { Link } from 'react-router-dom'
import { ExternalLink, Shield, GitFork } from 'lucide-react'

const LogoMark = () => (
  <svg width="24" height="24" viewBox="0 0 400 400" fill="none">
    <defs>
      <linearGradient id="fl1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00F0FF"/>
        <stop offset="100%" stopColor="#0072FF"/>
      </linearGradient>
      <linearGradient id="fl2" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#a855f7"/>
        <stop offset="100%" stopColor="#00F0FF"/>
      </linearGradient>
    </defs>
    <path d="M130 110 L170 110 A40 40 0 0 1 170 190 L130 190Z" fill="none" stroke="url(#fl1)" strokeWidth="18" strokeLinejoin="round" strokeLinecap="round"/>
    <path d="M130 110 L130 270" fill="none" stroke="url(#fl1)" strokeWidth="18" strokeLinejoin="round" strokeLinecap="round"/>
    <rect x="165" y="145" width="14" height="14" fill="#00F0FF"/>
    <rect x="123" y="261" width="16" height="16" fill="#00F0FF"/>
    <path d="M230 110 L270 110 A20 20 0 0 1 270 150 L230 150 A20 20 0 0 0 230 190 L270 190 A20 20 0 0 1 270 230 L230 230" fill="none" stroke="url(#fl2)" strokeWidth="18" strokeLinejoin="round" strokeLinecap="round"/>
    <rect x="224" y="100" width="16" height="16" fill="#a855f7"/>
    <rect x="262" y="223" width="16" height="16" fill="#00F0FF"/>
    <rect x="190" y="190" width="20" height="20" rx="4" fill="#fff"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="nav-logo" style={{ marginBottom: 0 }}>
              <LogoMark />
              Perfect<em>PS</em>
            </Link>
            <p>
              Perfect Pixel Solutions — building secure, pixel-perfect internet tools.
              Starting with PS Secure VPN.
            </p>
            <div className="footer-social">
              <a href="https://github.com/perfectPS" target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitFork size={15} />
              </a>
              <a href="https://perfectps.com" aria-label="Website">
                <ExternalLink size={15} />
              </a>
              <a href="#" aria-label="VPN">
                <Shield size={15} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><Link to="/#products">PS Secure VPN</Link></li>
              <li><Link to="/#features">Features</Link></li>
              <li><Link to="/contact">Early Access</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/#about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="https://github.com/perfectPS" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Perfect Pixel Solutions. All rights reserved.</p>
          <div className="footer-btm-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
