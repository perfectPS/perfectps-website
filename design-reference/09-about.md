# Section 09 — About

**File:** `src/components/sections/About.tsx`

---

## Current State

"ABOUT THE STUDIO / We Are perfectPS" — paragraph description, tech tags row, 4 stat counters (Founded, Core Team, Products, Countries), a "Start a Project" CTA.

---

## Target Design (LMO-Inspired)

Same content. Dark navy background. **Split layout**: Left side = stat/identity card (like LMO's "رؤية المرصد" vision card). Right side = text + tech pills + CTA. Mirrors LMO's about section exactly but adapted for perfectPS.

---

## Layout

```
[Section Label Pill: "ABOUT THE STUDIO"]

We Are
perfectPS               ← "We Are" white, "perfectPS" gold


┌──────────────────────────────┬──────────────────────────────────────┐
│  [Identity Card]             │  perfectPS is a boutique digital     │
│                              │  studio based in the Middle East,    │
│  dark bg, border, rounded    │  specializing in secure, high-       │
│                              │  performance digital products.       │
│  [PS logo / shield icon]     │                                      │
│                              │  We built PS Secure — a zero-log VPN │
│  perfectPS                   │  platform trusted by users across    │
│  Digital Studio              │  the region — and partner with       │
│                              │  businesses to design, build, and    │
│  "We believe in clean code,  │  ship products that make an impact.  │
│  beautiful interfaces, and   │                                      │
│  infrastructure that works." │  We believe in clean code, beautiful │
│                              │  interfaces, and infrastructure that │
│  ┌─────────────────────────┐ │  actually works.                     │
│  │ 2019 │ 5+  │ 15+ │ 8+  │ │                                      │
│  │ Fnd  │Team │Prod │ Ctry │ │  [React] [WireGuard] [TypeScript]   │
│  └─────────────────────────┘ │  [Oracle Cloud] [Expo] [Node.js]    │
│                              │                                      │
│  [Start a Project →]         │  [Start a Project →]                 │
└──────────────────────────────┴──────────────────────────────────────┘
```

- Section bg: `#0d1b2e`
- Grid: `grid-template-columns: 420px 1fr` (desktop)
- Mobile: stack, left card above right text

---

## Section Header (centered above grid)

```
[pill] → "ABOUT THE STUDIO"
h2     → "We Are perfectPS"
       → "We Are" white, "perfectPS" → #c8a84b
       → font-size: 48px, weight: 800
centered, margin-bottom: 56px
```

---

## Left Identity Card

```
background: #112240
border: 1px solid rgba(200,168,75,0.25)
border-radius: 16px
padding: 40px 32px
display: flex
flex-direction: column
gap: 24px
align-self: flex-start
```

**Logo/icon:**
```
width: 64px, height: 64px
background: rgba(200,168,75,0.1)
border: 1px solid rgba(200,168,75,0.3)
border-radius: 16px
display: flex; align-items: center; justify-content: center
lucide Shield: 30px, color: #c8a84b
```

**Studio name:**
```
font-size: 22px, weight: 700
"perfect" → color: #ffffff
"PS" → color: #c8a84b
```

**Tagline:**
```
font-size: 13px
color: #8fa3bc
line-height: 1.6
font-style: italic
border-left: 2px solid rgba(200,168,75,0.4)
padding-left: 12px
```

**Stats mini-grid:**
```
display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px
background: rgba(13,27,46,0.5)
border: 1px solid rgba(200,168,75,0.1)
border-radius: 10px
padding: 20px

each stat:
  number: font-size: 24px, weight: 800, color: #fff
  label:  font-size: 11px, color: #8fa3bc, text-transform: uppercase
```

| Stat | Label |
|---|---|
| 2019 | Founded |
| 5+ | Core Team |
| 15+ | Products Shipped |
| 8+ | Countries |

**CTA (inside card):**
```
background: #c8a84b
color: #0d1b2e
border-radius: 8px
padding: 12px 24px
font-size: 14px, weight: 600
width: 100%
text-align: center
hover → background: #e0c068
```

---

## Right Text Panel

**Description paragraphs:**
```
font-size: 16px
color: #8fa3bc
line-height: 1.75
margin-bottom: 16px
```

First sentence / opening line:
```
font-size: 18px
color: #cbd5e1
font-weight: 500
```

**Tech pill tags:**
```
display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px
each tag:
  background: rgba(200,168,75,0.07)
  border: 1px solid rgba(200,168,75,0.2)
  color: #c8a84b
  font-size: 12px, weight: 600
  border-radius: 6px
  padding: 5px 12px
```

---

## Key Changes from Current

| Current | New |
|---|---|
| Single-column text block with stats below | Two-column split: identity card + text |
| Plain stat counters in a row | Condensed 2×2 stat grid inside card |
| Inline tech tags after text | Gold-bordered tech pill row |
| Blue "Start a Project" CTA | Gold CTA inside the identity card |
