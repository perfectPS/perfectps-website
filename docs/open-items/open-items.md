# perfectPS Website — Open Items

Last updated: 2026-06-20

---

## Status Key

| Symbol | Meaning |
|---|---|
| `[ ]` | Not started |
| `[~]` | In progress / partial |
| `[x]` | Done |
| `[!]` | Blocked — needs Emad to do manually |

---

## 1. Directory & Listing Registrations

All require creating a business account — must be done by Emad.

| # | Platform | URL | What to fill | Status |
|---|---|---|---|---|
| 1 | **Clutch.co** | https://clutch.co/get-listed | Click "Join Us" → email: hello@perfectps.com → Company: perfectPS · Category: Web Dev + Mobile App Dev · Location: Amman, Jordan | `[!]` |
| 2 | **Apple Maps Connect** | https://mapsconnect.apple.com | Add business: perfectPS · Amman, Jordan · Category: Software Company | `[!]` |
| 3 | **LinkedIn Company Page** | https://www.linkedin.com/company/setup/new/ | Company: perfectPS · Website: https://perfectps.com · Industry: IT Services · Size: 2–10 | `[!]` |
| 4 | **Crunchbase** | https://www.crunchbase.com/add-new-entity | Org: perfectPS · Founded: 2019 · HQ: Amman, Jordan · Category: Software / Mobile · Website: https://perfectps.com | `[!]` |
| 5 | **GoodFirms** | https://www.goodfirms.co/it-companies/register | Services: Web Dev + Mobile App + VPN · Location: Amman, Jordan | `[!]` |
| 6 | **ProductHunt** | https://www.producthunt.com/posts/new | Product: PS Secure VPN · Tagline: WireGuard VPN built for the Middle East · Launch Thu or Fri for max upvotes | `[!]` |
| 7 | **Bing Places** | https://www.bingplaces.com | Same info as GBP · Use e.abufarwa@gmail.com | `[!]` |
| 8 | **BBB (Better Business Bureau)** | https://www.bbb.org/business-registration | Add after US LLC is formed | `[!]` |

---

## 2. Google Business Profile (GBP)

| Step | Details | Status |
|---|---|---|
| Profile created | Done 2026-06-20 on e.abufarwa@gmail.com | `[x]` |
| Hours set | Sun–Thu 09:00–18:00, Fri–Sat closed | `[x]` |
| Description added | 526-char description written | `[x]` |
| Postcard verification | Go to https://business.google.com → "Get verified" → request postcard to your address | `[!]` |
| Add photos | Upload logo, office/team photos after verification | `[ ]` |
| Collect reviews | Ask first 5 clients to leave a Google review after verification | `[ ]` |

---

## 3. US Company Registration

Steps in order:

| Step | Action | Recommended service | Status |
|---|---|---|---|
| 1 | Form Wyoming LLC | Northwest Registered Agent ($39/yr + ~$100 state) or Stripe Atlas ($500 flat) | `[!]` |
| 2 | Get virtual US address | iPostal1 from $9.99/mo — real street address, not PO Box | `[!]` |
| 3 | Get US EIN | Included with Stripe Atlas; otherwise file SS-4 form with IRS (free, 4–6 weeks) | `[!]` |
| 4 | Update website schema | Add US address to JSON-LD in `index.html` LocalBusiness block | `[ ]` |
| 5 | Update website footer | Show US address alongside Jordan address | `[ ]` |
| 6 | Register BBB | https://www.bbb.org/business-registration | `[ ]` |

---

## 4. Website Code Items

| # | Item | File(s) | Status |
|---|---|---|---|
| 1 | Blog section | New page `/en/blog` + article listing component | `[ ]` |
| 2 | GitHub org page | Create org "perfectps" at github.com/organizations/new · add description + website | `[!]` needs Emad's GitHub login |
| 3 | Core Web Vitals audit | Visit https://pagespeed.web.dev → paste https://perfectps.com/en/ | `[!]` API quota exhausted — do manually |
| 4 | US address in footer + JSON-LD | `index.html` + Footer component | `[ ]` after step 3.2 above |

---

## 5. Completed This Session

| Item | Date |
|---|---|
| Country landing pages: `/en/vpn-saudi-arabia`, `/ar/vpn-saudi-arabia`, `/en/vpn-uae`, `/ar/vpn-uae` | 2026-06-20 |
| Sitemap updated with hreflang for country pages | 2026-06-20 |
| Google Business Profile created (pending postcard) | 2026-06-20 |
| Bing Webmaster Tools registered + sitemap submitted | 2026-06-20 |
| LocalBusiness JSON-LD schema in index.html | 2026-06-20 |
| Self-hosted fonts (DM Sans + Chakra Petch via @fontsource) | 2026-06-20 |
| Sitemap hreflang (24 alternates, EN + AR) | 2026-06-20 |
| IndexNow key + ping script | 2026-06-20 |
| llms.txt for AI crawler GEO | 2026-06-20 |
| robots.txt allows all major AI crawlers | 2026-06-20 |
| OG image (SVG + PNG 1200×630) | 2026-06-20 |
| Stats strip removed from About section | 2026-06-20 |
| Google Search Console verified + sitemap submitted | 2026-06-20 |
| Deployment docs created in `docs/deployment/` | 2026-06-20 |
