import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

export default function Privacy() {
  return (
    <PageWrapper>
      <section className="legal">
        <div className="wrap">
          <motion.div
            className="legal-top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="label">Legal</span>
            <h1>Privacy Policy</h1>
            <p className="legal-meta">Perfect Pixel Solutions · Effective: June 16, 2026 · Last updated: June 16, 2026</p>
          </motion.div>

          <motion.div
            className="legal-body"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="legal-tldr">
              <p><strong style={{ color: '#00f0ff' }}>TL;DR — Zero-Log Policy:</strong> We do not log, store, or share your VPN traffic, browsing activity, IP addresses, connection timestamps, or DNS queries. Your online activity is your own.</p>
            </div>

            <h2>1. Who We Are</h2>
            <p>This Privacy Policy describes how <strong>Perfect Pixel Solutions</strong> ("PerfectPS", "we", "us", "our"), the company behind PS Secure VPN, collects, uses, and protects your information when you visit <a href="https://perfectps.com">perfectps.com</a> or use our services.</p>
            <p>Questions? Contact us at <a href="mailto:emadxcs@gmail.com">emadxcs@gmail.com</a>.</p>

            <h2>2. Information We Collect</h2>
            <p>We collect only the minimum information necessary to provide our service:</p>
            <ul>
              <li><strong>Account email address</strong> — to identify your account and send service communications.</li>
              <li><strong>Payment information</strong> — processed entirely by Stripe. We never store your card details.</li>
              <li><strong>Support messages</strong> — content you send via email or contact form, used solely to respond.</li>
              <li><strong>Web server logs</strong> — standard HTTP logs retained for up to 7 days for security, then automatically deleted.</li>
            </ul>

            <h2>3. Zero-Log Policy</h2>
            <p>When you use PS Secure VPN, <strong>we strictly do not collect, log, or store</strong>:</p>
            <ul>
              <li>Your browsing activity, websites visited, or URLs accessed</li>
              <li>Your DNS queries</li>
              <li>Your originating IP address or VPN-assigned IP addresses</li>
              <li>VPN connection timestamps, session duration, or bandwidth usage</li>
              <li>Any content of your communications or data transmitted through the VPN</li>
            </ul>
            <p>This zero-log policy is enforced at the infrastructure level. Our servers are configured to not generate logs that could identify individual users or their activity.</p>

            <h2>4. How We Use Your Information</h2>
            <ul>
              <li>Create and manage your account</li>
              <li>Process your subscription payments</li>
              <li>Send you service-critical communications</li>
              <li>Respond to your support requests</li>
              <li>Monitor infrastructure for abuse and security threats</li>
            </ul>
            <p>We do not use your information for advertising, profiling, or data brokering.</p>

            <h2>5. Data Sharing and Third Parties</h2>
            <p>We do not sell, rent, or trade your personal information. We share data only with:</p>
            <ul>
              <li><strong>Stripe</strong> — to process subscription payments. Stripe's privacy policy governs their handling of payment data.</li>
              <li><strong>Apple App Store / Google Play</strong> — process app downloads per their own privacy policies.</li>
              <li><strong>Law enforcement</strong> — only if legally compelled by a valid court order. Because we hold no logs, there is no meaningful user data we could produce.</li>
            </ul>

            <h2>6. Data Retention</h2>
            <ul>
              <li><strong>Account data</strong> — retained for the duration of your subscription, deleted within 30 days of termination.</li>
              <li><strong>Payment records</strong> — held by Stripe per accounting regulations (typically 7 years).</li>
              <li><strong>Support communications</strong> — retained for 12 months, then deleted.</li>
              <li><strong>Web server logs</strong> — automatically purged after 7 days.</li>
            </ul>

            <h2>7. Security</h2>
            <p>We implement TLS/HTTPS for all data in transit, server hardening, and regular security audits. Our VPN infrastructure uses WireGuard with state-of-the-art cryptography to encrypt all VPN traffic.</p>

            <h2>8. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict processing of your data. Contact us at <a href="mailto:emadxcs@gmail.com">emadxcs@gmail.com</a> and we will respond within 30 days.</p>

            <h2>9. Children's Privacy</h2>
            <p>PS Secure is intended for users aged 13 and older. We do not knowingly collect information from children under 13.</p>

            <h2>10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. We will notify registered users via email for material changes. Continued use of our service after changes constitutes acceptance.</p>

            <h2>11. Contact Us</h2>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:emadxcs@gmail.com">emadxcs@gmail.com</a></li>
              <li><strong>Website:</strong> <Link to="/contact">perfectps.com/contact</Link></li>
              <li><strong>Company:</strong> Perfect Pixel Solutions</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
