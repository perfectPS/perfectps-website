# Section 06 — Process (How We Work)

**File:** `src/components/sections/Process.tsx`

---

## Current State

"HOW WE WORK / From Idea to Shipped Product" — 4 numbered steps (Discover, Design, Build, Launch) in a vertical or horizontal list layout.

---

## Target Design (LMO-Inspired)

Same 4 steps. Dark elevated background. Horizontal step cards with large gold step numbers, connecting line between them. Clean and professional.

---

## Layout

```
[Section Label Pill: "HOW WE WORK"]

From Idea to
Shipped Product            ← "From Idea to" white, "Shipped Product" gold

A proven 4-step process that keeps every project on track, on budget, and on time.

        ●━━━━━━━━━━━━━━━━●━━━━━━━━━━━━━━━━●━━━━━━━━━━━━━━━━●
        01               02               03               04

┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│  01          │ │  02          │ │  03          │ │  04          │
│  Discover    │ │  Design      │ │  Build       │ │  Launch      │
│              │ │              │ │              │ │              │
│  We start by │ │  Architecture│ │  Iterative   │ │  Production  │
│  understanding│ │ decisions… │ │  development │ │  deploy…     │
└──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘
```

- Section bg: `#112240`
- Grid: `repeat(4, 1fr)`, `gap: 24px`
- Mobile: 1-col stack with vertical connector line on left

---

## Section Header

```
[pill] → "HOW WE WORK"
h2     → "From Idea to Shipped Product"
       → "From Idea to" → white
       → "Shipped Product" → #c8a84b
       → font-size: 48px, weight: 800
sub    → color: #8fa3bc, centered, max-width: 540px
margin-bottom: 64px
```

---

## Step Connector Line (desktop only)

```
position: relative; display: flex; align-items: flex-start
::before (pseudo):
  content: ''
  position: absolute
  top: 28px (center of step number)
  left: 48px; right: 48px
  height: 1px
  background: linear-gradient(90deg, #c8a84b 0%, rgba(200,168,75,0.1) 100%)
  z-index: 0
```

---

## Step Card

```
background: #0d1b2e
border: 1px solid rgba(200,168,75,0.15)
border-radius: 12px
padding: 32px 28px
position: relative
z-index: 1
transition: border-color 200ms, transform 200ms
hover → border-color: rgba(200,168,75,0.4), translateY(-3px)
```

**Step number:**
```
font-size: 48px
font-weight: 800
color: rgba(200,168,75,0.25)   ← large, faint, decorative
line-height: 1
margin-bottom: 16px

"active" (current hovered) → color: #c8a84b
```

**Step title:**
```
font-size: 18px
font-weight: 700
color: #ffffff
margin-bottom: 12px
```

**Step description:**
```
font-size: 14px
color: #8fa3bc
line-height: 1.65
```

---

## Step Data (unchanged)

| # | Title | Description |
|---|---|---|
| 01 | Discover | We start by understanding your business goals, users, and constraints — not jumping straight to code. |
| 02 | Design | Architecture decisions, UI systems, and prototypes. We align on the plan before writing a single production line. |
| 03 | Build | Iterative development in tight sprints. Regular check-ins, live previews, and test coverage at every stage. |
| 04 | Launch | Production deploy, monitoring setup, and post-launch support. We don't hand you a zip file — we ship it, measure it, and stay on until it's stable. |

---

## Mobile Layout

- Stack cards vertically
- Connector line: `position: absolute; left: 28px; top: 0; bottom: 0; width: 1px; background: rgba(200,168,75,0.2)`
- Step number: smaller, `32px`

---

## Key Changes from Current

| Current | New |
|---|---|
| Vertical list / numbered items | Horizontal 4-col card grid |
| Plain numbered headings | Large decorative faint step numbers |
| No connector visual | Horizontal gold connector line |
| Light background | Dark elevated `#112240` |
