# Section 07 — Portfolio / Featured Work

**Files:** `src/components/sections/FeaturedWork.tsx`, `src/components/sections/Portfolio.tsx`  
**Data:** `src/data/portfolio.ts`

---

## Current State

"SELECTED WORK / Projects We're Proud Of" — project cards with industry tag, title, tech stack. Includes a tabbed/slider view.

---

## Target Design (LMO-Inspired)

Same projects. Dark navy background. Photo-backed cards (like LMO's category cards) with dark overlay, industry badge top-left, title + description bottom. Hover lifts the overlay to show more detail.

---

## Layout

```
[Section Label Pill: "SELECTED WORK"]

Projects We're
Proud Of                 ← "Projects We're" white, "Proud Of" gold

[View all 15 projects →]  ← gold text link, right-aligned below headline

┌────────────────────────┐ ┌────────────────────────┐ ┌────────────────────────┐
│  [project photo/bg]    │ │  [project photo/bg]    │ │  [project photo/bg]    │
│  dark gradient overlay │ │  dark gradient overlay │ │  dark gradient overlay │
│                        │ │                        │ │                        │
│  [FINTECH]             │ │  [HEALTHCARE]          │ │  [SECURITY]            │
│                        │ │                        │ │                        │
│  Quantum Trading       │ │  HealthHub Portal      │ │  ThreatMonitor         │
│  Real-time trading…    │ │  Healthcare platform…  │ │  Security dashboard…   │
│  [→]                   │ │  [→]                   │ │  [→]                   │
└────────────────────────┘ └────────────────────────┘ └────────────────────────┘
```

- Grid: `repeat(3, 1fr)`, `gap: 24px` (desktop)
- Mobile: 1-col; Tablet: 2-col
- Card `aspect-ratio: 4/3` or `min-height: 280px`

---

## Section Header

```
[pill] → "SELECTED WORK"
h2     → "Projects We're Proud Of"
       → "Projects We're" white, "Proud Of" → #c8a84b
       → font-size: 48px, weight: 800
sub-row:
  left → (empty / nothing)
  right → "View all 15 projects →" link, color: #c8a84b, font-size: 14px
margin-bottom: 56px
```

---

## Project Card

```
position: relative
border-radius: 12px
overflow: hidden
border: 1px solid rgba(200,168,75,0.15)
cursor: pointer
transition: transform 200ms, border-color 200ms
hover → translateY(-4px), border-color: rgba(200,168,75,0.45)
```

**Background image:**
```
position: absolute; inset: 0
object-fit: cover; width: 100%; height: 100%
filter: brightness(0.5)   ← darkened by default
transition: filter 300ms
hover → filter: brightness(0.35)
```

**Gradient overlay (always on):**
```
position: absolute; inset: 0
background: linear-gradient(
  to top,
  rgba(13,27,46,0.95) 0%,
  rgba(13,27,46,0.4) 60%,
  transparent 100%
)
```

**Content (absolute, bottom-left):**
```
position: absolute
bottom: 0; left: 0; right: 0
padding: 24px
```

**Industry badge:**
```
background: rgba(200,168,75,0.15)
border: 1px solid rgba(200,168,75,0.4)
color: #c8a84b
font-size: 10px, weight: 700, uppercase, letter-spacing: 0.1em
border-radius: 999px
padding: 4px 10px
display: inline-block
margin-bottom: 10px
```

**Project title:**
```
font-size: 20px
font-weight: 700
color: #ffffff
line-height: 1.3
```

**Project description:**
```
font-size: 13px
color: #8fa3bc
line-height: 1.5
margin-top: 6px
max-lines: 2 (overflow: hidden)
```

**Arrow icon (bottom-right):**
```
position: absolute; bottom: 24px; right: 24px
lucide ArrowRight: 20px, color: #c8a84b
opacity: 0; transition: opacity 200ms
hover card → opacity: 1
```

---

## "View All" Button (below grid)

```
display: flex; justify-content: center; margin-top: 48px
button:
  background: transparent
  border: 1px solid rgba(200,168,75,0.4)
  color: #c8a84b
  padding: 12px 32px
  border-radius: 8px
  font-size: 14px, weight: 600
  hover → background: rgba(200,168,75,0.08), border-color: #c8a84b
```

---

## If No Real Photos Available

Use a dark gradient placeholder as background:
```
background: linear-gradient(135deg, #112240 0%, #0d1b2e 100%)
```
With a large faint lucide icon centered in the card (e.g. `Globe`, `Smartphone`, `Shield`).  
Color: `rgba(200,168,75,0.1)`, size `64px`.

---

## Key Changes from Current

| Current | New |
|---|---|
| Plain card with text and tech stack tags | Photo-backed card with dark overlay |
| Tabbed / slider interaction | Simple grid (3-col) |
| Blue accent on industry tag | Gold accent badge |
| Light section background | Dark navy background |
