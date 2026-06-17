import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

export default function Terms() {
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
            <h1>Terms of Service</h1>
            <p className="legal-meta">Perfect Pixel Solutions · Effective: June 16, 2026 · Last updated: June 16, 2026</p>
          </motion.div>

          <motion.div
            className="legal-body"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>Please read these Terms of Service carefully before using any services provided by <strong>Perfect Pixel Solutions</strong> ("PerfectPS", "we", "us", "our"), including the PS Secure VPN application and the website at perfectps.com ("Service").</p>
            <p>By accessing or using our Service, you agree to be bound by these Terms.</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By creating an account, downloading our app, or using our website, you represent that you are at least 13 years of age and have the legal capacity to enter into a binding agreement.</p>

            <h2>2. Description of Service</h2>
            <p>PS Secure VPN is a virtual private network service that encrypts your internet traffic and routes it through our servers. The Service includes:</p>
            <ul>
              <li>Encrypted VPN tunnel using the WireGuard protocol</li>
              <li>DNS-level ad and tracker blocking</li>
              <li>Access to VPN servers in available regions</li>
              <li>iOS, Android, and web client applications</li>
              <li>Kill switch and auto-reconnect functionality</li>
            </ul>

            <h2>3. Account Registration</h2>
            <p>To use PS Secure, you must create an account with a valid email address. You are responsible for maintaining the confidentiality of your credentials and all activities under your account. Notify us immediately at <a href="mailto:emadxcs@gmail.com">emadxcs@gmail.com</a> of any unauthorized access.</p>

            <h2>4. Acceptable Use</h2>
            <p>You must NOT use PS Secure to:</p>
            <ul>
              <li>Engage in any illegal activity</li>
              <li>Distribute malware, ransomware, or other malicious software</li>
              <li>Conduct cyberattacks, DDoS attacks, or network intrusion</li>
              <li>Infringe the intellectual property rights of others</li>
              <li>Access, store, or distribute child sexual abuse material (CSAM) — strictly prohibited</li>
              <li>Send unsolicited bulk messages (spam)</li>
              <li>Resell or sublicense access to the Service without our written consent</li>
            </ul>

            <h2>5. Subscription and Payment</h2>
            <ul>
              <li>Subscriptions are billed in advance on a monthly or annual basis</li>
              <li>Payment is processed securely through Stripe; we do not store your payment details</li>
              <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
              <li>Price changes will be communicated at least 30 days in advance</li>
            </ul>

            <h2>6. Cancellation and Refunds</h2>
            <p>You may cancel your subscription at any time. You retain access until the end of the current billing period. No partial refunds are issued for unused portions, except where required by law. For annual subscriptions cancelled within 14 days of purchase with no meaningful usage, we may offer a pro-rated refund at our discretion.</p>

            <h2>7. Intellectual Property</h2>
            <p>All content, code, trademarks, and materials are the exclusive property of Perfect Pixel Solutions, protected by applicable intellectual property laws. The "PerfectPS" and "PS Secure" names and logos are trademarks of Perfect Pixel Solutions.</p>

            <h2>8. Disclaimer of Warranties</h2>
            <p>THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. A VPN is a privacy tool — it does not provide absolute anonymity.</p>

            <h2>9. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, PERFECTPS SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED AMOUNTS YOU PAID IN THE 12 MONTHS PRECEDING THE CLAIM.</p>

            <h2>10. Indemnification</h2>
            <p>You agree to indemnify and hold harmless Perfect Pixel Solutions from claims, damages, or expenses arising from your violation of these Terms.</p>

            <h2>11. Governing Law</h2>
            <p>These Terms shall be governed by applicable law. We encourage you to contact us at <a href="mailto:emadxcs@gmail.com">emadxcs@gmail.com</a> to resolve any issue before pursuing formal proceedings.</p>

            <h2>12. Privacy</h2>
            <p>Your use of our Service is governed by our <Link to="/privacy">Privacy Policy</Link>, incorporated into these Terms by reference.</p>

            <h2>13. Changes to These Terms</h2>
            <p>We may modify these Terms at any time. We will provide notice of material changes via email at least 14 days before they take effect. Continued use constitutes acceptance.</p>

            <h2>14. Termination</h2>
            <p>We reserve the right to suspend or terminate your access at any time for violation of these Terms. You may terminate your account at any time by contacting us.</p>

            <h2>15. Contact Us</h2>
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
