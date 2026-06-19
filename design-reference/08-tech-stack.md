# Section 08 — Tech Stack

**File:** `src/components/sections/TechStack.tsx`  
**Data:** `src/data/tech.ts`

---

## Current State

"TECHNOLOGY / We Choose the Right Tool for Every Job" — infinite marquee/ticker of tech logos scrolling in both directions. Light background.

---

## Target Design (LMO-Inspired)

Same tech list. Dark elevated background. Marquee rows kept (they're distinctive). Gold section label, clean white headline. Subtle fade masks on sides.

---

## Layout

```
[Section Label Pill: "TECHNOLOGY"]

We Choose the Right Tool
for Every Job              ← "We Choose the Right Tool" white, "for Every Job" gold

Modern stack, battle-tested choices — built for performance and long-term maintainability.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→  React  React Native  TypeScript  Node.js  Hono  PostgreSQL  …  →
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
←  Linux  Nginx  Redis  GitHub Actions  Figma  DigitalOcean  …   ←
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

- Section bg: `#112240`
- Marquee rows: 2 rows, opposite scroll directions (already implemented)

---

## Section Header

```
[pill] → "TECHNOLOGY"
h2     → "We Choose the Right Tool for Every Job"
       → first line white, last 3 words → #c8a84b
       → font-size: 48px, weight: 800, centered
sub    → color: #8fa3bc, centered, max-width: 500px
margin-bottom: 56px
```

---

## Marquee Row

```
overflow: hidden
position: relative
padding: 16px 0
```

**Side fade masks:**
```
::before, ::after:
  content: ''
  position: absolute; top: 0; bottom: 0; width: 120px; z-index: 2
::before → left: 0; background: linear-gradient(to right, #112240, transparent)
::after  → right: 0; background: linear-gradient(to left, #112240, transparent)
```

**Each tech chip:**
```
display: inline-flex
align-items: center
gap: 10px
background: #0d1b2e
border: 1px solid rgba(200,168,75,0.15)
border-radius: 8px
padding: 10px 18px
margin: 0 8px
white-space: nowrap
transition: border-color 150ms
hover → border-color: rgba(200,168,75,0.45)

icon (if svg logo): width: 20px, height: 20px, filter: grayscale(0.3)
label: font-size: 13px, font-weight: 500, color: #cbd5e1
```

---

## Tech List (unchanged)

Row 1 (left→right): React, React Native, TypeScript, Node.js, Hono, PostgreSQL, WireGuard, Docker, Expo, Vite, TailwindCSS, Oracle Cloud, DigitalOcean, Figma, GitHub Actions, Redis, Nginx, Linux

Row 2 (right→left): same list in reverse order

---

## Animation

```css
@keyframes marquee-ltr {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes marquee-rtl {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}

.row-1 { animation: marquee-ltr 30s linear infinite; }
.row-2 { animation: marquee-rtl 30s linear infinite; }
hover → animation-play-state: paused (nice touch)
```

---

## Key Changes from Current

| Current | New |
|---|---|
| Light section background | Dark elevated `#112240` |
| Plain chip styling | Dark chip with gold border on hover |
| No side fade masks (or lighter ones) | Strong dark-to-transparent fade mask |
| Multi-color section feel | Unified dark/gold palette |
