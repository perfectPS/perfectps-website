# Section 02 — Hero

**File:** `src/components/sections/Hero.tsx`

---

## Current State

Light background, large headline "We Build Digital Products That Matter.", two CTAs, 4 stat counters in a row.

---

## Target Design (LMO-Inspired)

Full-viewport dark navy hero. Two-tone headline (white + gold). Gold primary CTA + outlined secondary CTA. 4 animated KPI stat cards in a bottom row — same stats as now but dark-card styled with delta badges.

---

## Layout

```
┌─────────────────────────────────────────────────────────────────┐
│  [Section Label Pill: "DIGITAL STUDIO · EST. 2019"]             │
│                                                                 │
│  We Build                                                       │  ← white, 64px
│  Digital Products                                               │  ← gold (#c8a84b), 64px
│  That Matter.                                                   │  ← white, 64px
│                                                                 │
│  From secure VPN infrastructure to market-ready web             │  ← muted text, 18px
│  and mobile applications — fast, beautiful, built to last.      │
│                                                                 │
│  [← View Our Work]     [Learn More ↗]                          │
│   gold filled btn       outlined btn                            │
│                                                                 │
│ ─────────────────────────────────────────────────────────────── │
│  [15+ Projects] [8+ Clients] [5+ Years] [100% On-Time]         │  ← 4 stat cards
└─────────────────────────────────────────────────────────────────┘
```

- Section: `min-height: 100vh`, `display: flex; align-items: center`
- Background: `#0d1b2e` + radial gradient `radial-gradient(ellipse 60% 50% at 50% 0%, rgba(200,168,75,0.08) 0%, transparent 70%)`
- Content: centered, `max-width: 800px`, `text-align: center`, `margin: 0 auto`

---

## Headline

```
"We Build"           → color: #ffffff
"Digital Products"   → color: #c8a84b  (gold)
"That Matter."       → color: #ffffff
font-size: 64px (desktop), 40px (mobile)
font-weight: 800
line-height: 1.1
font-family: Barlow
```

---

## Subheadline

```
color: #8fa3bc
font-size: 18px
font-weight: 400
max-width: 560px
margin: 24px auto
line-height: 1.6
```

---

## CTA Row

```
gap: 16px
justify-content: center
margin-top: 40px
```

**Primary:** `← View Our Work`
```
background: #c8a84b
color: #0d1b2e
font-weight: 600
padding: 14px 32px
border-radius: 8px (or chamfer)
hover → background: #e0c068
```

**Secondary:** `Learn More ↗`
```
background: transparent
border: 1px solid rgba(255,255,255,0.25)
color: #ffffff
padding: 14px 32px
hover → border-color: #c8a84b, color: #c8a84b
```

---

## Stat Cards Row

4 cards in a horizontal row, below the main content. Same data as current:

| Stat | Label | Delta |
|---|---|---|
| 15+ | Projects Delivered | ↑ +4 this year |
| 8+ | Clients Served | ↑ Growing |
| 5+ | Years Building | ↑ Since 2019 |
| 100% | On-Time Delivery | ↑ Every project |

**Card style:**
```
background: #112240
border: 1px solid rgba(200,168,75,0.2)
border-radius: 12px
padding: 24px
flex: 1
min-width: 0
```

**Stat number:**
```
font-size: 40px
font-weight: 800
color: #ffffff
CountUp animation on first view
```

**Stat label:**
```
font-size: 12px
font-weight: 500
color: #8fa3bc
text-transform: uppercase
letter-spacing: 0.08em
margin-top: 4px
```

**Delta badge:**
```
background: rgba(34,197,94,0.12)
color: #22c55e
font-size: 11px
font-weight: 600
border-radius: 999px
padding: 3px 10px
margin-top: 8px
display: inline-block
```

---

## Background Decoration

Optional: subtle grid/dot pattern overlay at `opacity: 0.03` (matches LMO's dark dashboard texture).

```css
background-image: radial-gradient(rgba(200,168,75,0.15) 1px, transparent 1px);
background-size: 32px 32px;
```

---

## Key Changes from Current

| Current | New |
|---|---|
| Light/white background | Dark navy `#0d1b2e` |
| All-white headline | Two-tone: white + gold |
| Blue/teal CTA | Gold filled primary CTA |
| Flat stat counters | Dark cards with delta badges |
| No background texture | Subtle dot grid + radial glow |
