# perfectPS Website — Open Items

Last updated: 2026-06-20

---

## Directories & Listings (requires manual account creation by Emad)

These all require creating a new business account — Claude cannot create accounts on your behalf.

| Platform | URL | What to do | Notes |
|---|---|---|---|
| **Clutch.co** | https://clutch.co/get-listed | Click "Join Us", register with hello@perfectps.com, fill company profile | Category: Web Dev + Mobile App Dev, Amman Jordan |
| **Apple Maps Connect** | https://mapsconnect.apple.com | Sign in with Apple ID, add business: perfectPS, Amman Jordan | Reaches iOS users |
| **LinkedIn Company Page** | https://www.linkedin.com/company/setup/new/ | Create company page for perfectPS | Use hello@perfectps.com or personal account |
| **Crunchbase** | https://www.crunchbase.com/add-new-entity | Add organization: perfectPS, Amman Jordan, founded 2019 | Free profile, boosts startup credibility |
| **GoodFirms** | https://www.goodfirms.co/it-companies/register | Register as IT company, Web/Mobile/VPN services | Similar to Clutch, free basic listing |
| **ProductHunt** | https://www.producthunt.com/posts/new | Launch PS Secure VPN — include screenshots, tagline, description | Best launched Thu/Fri for max upvotes |
| **Bing Places** | https://www.bingplaces.com | Register perfectPS business — same info as GBP | Use e.abufarwa@gmail.com to match GBP |

---

## Google Business Profile (GBP)

- **Status:** Created 2026-06-20, pending verification
- **Account:** e.abufarwa@gmail.com
- **Action:** Go to https://business.google.com → click "Get verified" → request postcard to your address
- **Important:** Once verified, add photos (logo, office, team) and collect first 5-star reviews

---

## US Company Registration

Steps to register perfectPS as a Wyoming LLC with a US presence:

1. **Register Wyoming LLC** — recommended services:
   - [Northwest Registered Agent](https://www.northwestregisteredagent.com) — $39/yr registered agent, ~$100 state fee
   - [Stripe Atlas](https://stripe.com/atlas) — $500 flat, sets up LLC + EIN + Stripe account
   - [Clerky](https://www.clerky.com) — good for tech companies

2. **Get a virtual US address** (for business registration + website):
   - [iPostal1](https://ipostal1.com) — from $9.99/mo, real street address (not PO Box), mail scanning
   - [Regus Virtual Office](https://www.regus.com/en-us/virtual-offices) — from $49/mo, professional address with meeting rooms
   - [Earth Class Mail](https://www.earthclassmail.com) — US address + mail scanning

3. **After getting address:**
   - Update JSON-LD schema in `index.html` (add `address` field to LocalBusiness)
   - Update footer with US address alongside Jordan address
   - Register on BBB (Better Business Bureau): https://www.bbb.org/business-registration
   - Add to US company directories

---

## Code Work (Claude can do these)

| Item | Status | Notes |
|---|---|---|
| Blog section | Not started | Add `/en/blog` page + article listing component |
| GitHub org page | Blocked — needs Emad's GitHub login | Create org "perfectps", add description + website URL |
| Core Web Vitals audit | Blocked — PageSpeed API quota exhausted | Visit https://pagespeed.web.dev and paste https://perfectps.com/en/ |

---

## Completed (this session)

- [x] Country landing pages: `/en/vpn-saudi-arabia`, `/ar/vpn-saudi-arabia`, `/en/vpn-uae`, `/ar/vpn-uae`
- [x] Sitemap updated with hreflang for country pages
- [x] Google Business Profile created (pending postcard verification)
- [x] Bing Webmaster Tools registered + sitemap submitted
- [x] LocalBusiness JSON-LD schema added to index.html
- [x] Self-hosted fonts (removed Google Fonts dependency)
- [x] Sitemap hreflang (24 alternates across EN/AR pages)
- [x] IndexNow key + ping script
- [x] llms.txt for AI crawler GEO
- [x] robots.txt allows all major AI crawlers
- [x] OG image (SVG + PNG)
- [x] Stats strip removed from About section
