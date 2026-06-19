# Section 04 — Why Us (What Makes Us Different)

**File:** `src/components/sections/WhyUs.tsx`

---

## Current State

"WHY PERFECTPS / What Makes Us Different" — 3 large colored metric cards (100% On-Time, 0 Data Breaches, 8+ Returning Clients) each with a big stat header and description below.

---

## Target Design (LMO-Inspired)

Same 3 differentiators. Dark elevated background (`#112240`). Cards styled like LMO's feature-highlight cards — dark bg, gold stat number, icon, description. Matches the "section lift" alternation pattern.

---

## Layout

```
[Section Label Pill: "WHY PERFECTPS"]

What Makes
Us Different               ← two-tone: "What Makes" white, "Us Different" gold

We've built software products across industries, from fintech to security infrastructure.
Here's what we bring to every engagement.    ← muted, centered

┌─────────────────────┐ ┌─────────────────────┐ ┌─────────────────────┐
│  [icon]      100%   │ │  [icon]       0     │ │  [icon]      8+     │
│             ON-TIME │ │   DATA BREACHES     │ │  RETURNING CLIENTS  │
│─────────────────────│ │─────────────────────│ │─────────────────────│
│ Fast, Predictable   │ │ Security-First      │ │ Long-Term           │
│ Delivery            │ │ Engineering         │ │ Partnership         │
│                     │ │                     │ │                     │
│ We run tight…       │ │ Every product…      │ │ We're not a…        │
└─────────────────────┘ └─────────────────────┘ └─────────────────────┘
```

- Section bg: `#112240`
- Grid: `repeat(3, 1fr)`, `gap: 24px`
- Mobile: 1-col stack

---

## Section Header

```
[pill] → "WHY PERFECTPS"
h2     → "What Makes Us Different"
       → "What Makes" → white
       → "Us Different" → #c8a84b
       → font-size: 48px, weight: 800
sub    → color: #8fa3bc, centered, max-width: 600px
```

---

## Differentiator Card

```
background: #0d1b2e
border: 1px solid rgba(200,168,75,0.2)
border-radius: 12px
overflow: hidden
```

**Card top band (stat area):**
```
background: rgba(200,168,75,0.06)
border-bottom: 1px solid rgba(200,168,75,0.15)
padding: 28px 32px
display: flex
align-items: center
justify-content: space-between
```

- Left: lucide icon (24px, color `#c8a84b`) in a `rgba(200,168,75,0.1)` rounded container
- Right: big stat + label
  ```
  stat number: font-size: 48px, weight: 800, color: #ffffff
  stat label:  font-size: 11px, weight: 600, color: #c8a84b, uppercase, letter-spacing: 0.1em
  ```

**Card body:**
```
padding: 28px 32px
```

- Title: `font-size: 18px, weight: 700, color: #ffffff`
- Description: `font-size: 14px, color: #8fa3bc, line-height: 1.65, margin-top: 8px`

---

## Card Data (unchanged)

| Stat | Label | Icon | Title | Description |
|---|---|---|---|---|
| 100% | ON-TIME | `Zap` | Fast, Predictable Delivery | We run tight sprints with clear milestones... |
| 0 | DATA BREACHES | `Lock` | Security-First Engineering | Every product we build starts with threat modeling... |
| 8+ | RETURNING CLIENTS | `Heart` | Long-Term Partnership | We're not a factory. We invest in understanding... |

---

## Key Changes from Current

| Current | New |
|---|---|
| Colored gradient card tops (blue/green/orange) | Uniform dark with gold accent top band |
| Multi-color stat numbers | White stat + gold label |
| Light section background | Dark elevated `#112240` |
| No icon in top area | Gold icon in top-left of band |
