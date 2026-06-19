# Section 05 — Products (PS Secure)

**File:** `src/components/sections/Products.tsx`

---

## Current State

"OUR PRODUCTS / Built for the Real World" — featured PS Secure card with feature badges (WireGuard, Zero-Log, etc.), two CTAs, and a feature list on the right side.

---

## Target Design (LMO-Inspired)

Same PS Secure product. Dark navy background. Large feature card with gold accent details. Left: visual/brand panel. Right: feature list. Flagship product treatment with a strong gold CTA.

---

## Layout

```
[Section Label Pill: "OUR PRODUCTS"]

Built for the
Real World               ← "Built for the" white, "Real World" gold

┌───────────────────────────────────┬────────────────────────────────┐
│                                   │  PS Secure                     │
│  [PS Secure Brand Panel]          │  Flagship Product              │
│                                   │  VPN & Privacy Platform        │
│  dark bg, gold PS logo or         │                                │
│  shield icon centered,            │  Enterprise-grade VPN powered  │
│  subtle grid texture              │  by WireGuard. Zero-log        │
│                                   │  privacy, AdGuard DNS, kill    │
│  [WireGuard] [Zero-Log]           │  switch, native iOS & Android. │
│  [AdGuard] [Kill Switch]          │                                │
│  (badge chips)                    │  ✓ WireGuard Protocol          │
│                                   │  ✓ Zero-Log Policy             │
│                                   │  ✓ Kill Switch                 │
│                                   │  ✓ AdGuard DNS                 │
│                                   │  ✓ iOS & Android               │
│                                   │  ✓ Regional Servers            │
│                                   │                                │
│                                   │  [Learn More →]  [Get Early Access] │
└───────────────────────────────────┴────────────────────────────────┘
```

- Card: `background: #112240`, `border: 1px solid rgba(200,168,75,0.25)`, `border-radius: 16px`, `overflow: hidden`
- Left panel: 45% width, `background: #0d1b2e`, `border-right: 1px solid rgba(200,168,75,0.15)`
- Right panel: 55% width, `padding: 48px`
- Mobile: stack vertically (left panel collapses to banner-style top strip)

---

## Section Header

```
[pill] → "OUR PRODUCTS"
h2     → "Built for the Real World"
       → "Built for the" → white
       → "Real World" → #c8a84b
       → font-size: 48px, weight: 800
centered, margin-bottom: 56px
```

---

## Left Brand Panel

```
background: linear-gradient(135deg, #0d1b2e 0%, #112240 100%)
min-height: 480px
display: flex
flex-direction: column
align-items: center
justify-content: center
gap: 32px
padding: 48px 32px
```

**Shield/logo icon:**
```
width: 80px, height: 80px
background: rgba(200,168,75,0.12)
border: 1px solid rgba(200,168,75,0.3)
border-radius: 20px
display: flex; align-items: center; justify-content: center
lucide Shield icon: 40px, color: #c8a84b
```

**Product name:**
```
font-size: 28px, weight: 800
"PS " → color: #8fa3bc
"Secure" → color: #c8a84b
```

**Badge chips row (tech tags):**
```
display: flex; flex-wrap: wrap; gap: 8px; justify-content: center
each chip:
  background: rgba(200,168,75,0.08)
  border: 1px solid rgba(200,168,75,0.25)
  color: #c8a84b
  font-size: 11px, weight: 600
  border-radius: 999px
  padding: 5px 12px
  text-transform: uppercase
  letter-spacing: 0.06em
```

---

## Right Content Panel

**"Flagship Product" tag:**
```
background: rgba(200,168,75,0.1)
color: #c8a84b
font-size: 11px, weight: 600, uppercase
border-radius: 999px
padding: 4px 12px
display: inline-block
margin-bottom: 12px
```

**Product title:** `font-size: 28px, weight: 700, color: #fff`
**Subtitle:** `font-size: 14px, color: #c8a84b, weight: 500, margin-bottom: 16px`
**Description:** `font-size: 15px, color: #8fa3bc, line-height: 1.7`

**Feature checklist:**
```
margin: 24px 0
display: grid; grid-template-columns: 1fr 1fr; gap: 10px
each item:
  display: flex; align-items: center; gap: 10px
  lucide Check icon: 16px, color: #22c55e
  text: font-size: 14px, color: #cbd5e1
```

**CTA row:**
```
display: flex; gap: 16px; margin-top: 32px
```

- Primary: `Learn More →` — gold filled
- Secondary: `Get Early Access` — outlined white

---

## Key Changes from Current

| Current | New |
|---|---|
| Multi-color/gradient card | Dark split-panel card with gold accents |
| Inline badge list below CTAs | Left panel brand area with badge chips |
| Feature list plain text | Checklist with green check icons |
| Blue primary CTA | Gold primary CTA |
