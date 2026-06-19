# Design System — LMO Theme Applied to perfectPS

Inspired by: https://lmo.mol.gov.jo/

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--bg-primary` | `#0d1b2e` | Page background, dark sections |
| `--bg-secondary` | `#112240` | Card backgrounds, elevated surfaces |
| `--bg-tertiary` | `#1a2f4a` | Hover states, subtle surface lift |
| `--accent-gold` | `#c8a84b` | Primary CTA, highlights, section labels |
| `--accent-gold-light` | `#e0c068` | Hover state for gold |
| `--text-primary` | `#ffffff` | Headlines, body on dark bg |
| `--text-muted` | `#8fa3bc` | Subtitles, secondary body text |
| `--border` | `rgba(200,168,75,0.2)` | Card borders, dividers |
| `--border-hover` | `rgba(200,168,75,0.5)` | Card border on hover |
| `--positive` | `#22c55e` | Positive delta badges (green) |
| `--negative` | `#ef4444` | Negative delta badges (red) |

---

## Typography

| Role | Font | Weight | Size (desktop) |
|---|---|---|---|
| Logo | `Chakra Petch` | 700 | 20px |
| Section label (pill) | `Barlow` | 600 | 12px uppercase |
| Section headline | `Barlow` | 800 | 48–64px |
| Subheadline / card title | `Barlow` | 700 | 24–32px |
| Body / card desc | `Barlow` | 400 | 15–16px |
| Stat number | `Barlow` | 800 | 40–56px |
| Stat label | `Barlow` | 500 | 12px uppercase |
| Button | `Barlow` | 600 | 14px |

> Fonts already in use per `project_website_design.md` memory — no changes needed.

---

## Section Label Pill

Used above every section headline (like LMO's outlined pill badges).

```
border: 1px solid #c8a84b
background: transparent (or rgba(200,168,75,0.08))
color: #c8a84b
border-radius: 999px
padding: 6px 16px
font-size: 11px
letter-spacing: 0.1em
text-transform: uppercase
```

---

## Cards

```
background: #112240
border: 1px solid rgba(200,168,75,0.2)
border-radius: 12px
transition: border-color 200ms ease, transform 200ms ease
hover → border-color: rgba(200,168,75,0.5), translateY(-2px)
```

---

## Buttons

### Primary (Gold filled)
```
background: #c8a84b
color: #0d1b2e
border-radius: 8px (or chamfered via clip-path per existing design)
padding: 12px 28px
font-weight: 600
hover → background: #e0c068
```

### Secondary (Outlined)
```
background: transparent
border: 1px solid rgba(255,255,255,0.3)
color: #ffffff
hover → border-color: #c8a84b, color: #c8a84b
```

---

## Stat Delta Badge

```html
<span class="delta positive">↑ +3.2% vs last year</span>
```
```
background: rgba(34,197,94,0.15)
color: #22c55e
border-radius: 999px
padding: 3px 10px
font-size: 11px
font-weight: 600
```

---

## Spacing Scale

| Name | Value |
|---|---|
| Section vertical padding | `96px 0` (desktop), `64px 0` (mobile) |
| Card gap | `24px` |
| Container max-width | `1200px` |
| Container padding | `0 32px` |

---

## Background Alternation

| Section | Background |
|---|---|
| Navbar | `#0d1b2e` (sticky, blur on scroll) |
| Hero | `#0d1b2e` + subtle radial gradient top-center |
| Services | `#0d1b2e` |
| Why Us | `#112240` (slight lift) |
| Products | `#0d1b2e` |
| Process | `#112240` |
| Portfolio | `#0d1b2e` |
| Tech Stack | `#112240` |
| About | `#0d1b2e` |
| Contact | `#112240` |
| Footer | `#070f1a` (darkest) |

---

## Icons

Use `lucide-react` (already in mobile project, can import same in web).  
Icon color: `#c8a84b` for feature icons, `#8fa3bc` for decorative.  
Icon size: 20px inline, 32px in feature cards.

---

## Animations / Motion

- **Scroll reveal**: fade-up + opacity, 300ms ease-out, stagger 80ms per card (existing `ScrollReveal` component)
- **CountUp**: trigger on first in-view (existing `CountUp` component)
- **Card hover**: `transform: translateY(-2px)` + border glow, 200ms ease
- **Navbar**: `backdrop-filter: blur(12px)` + `background: rgba(13,27,46,0.9)` on scroll
