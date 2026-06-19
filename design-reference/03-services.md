# Section 03 — Services (What We Build)

**File:** `src/components/sections/Services.tsx`  
**Data:** `src/data/services.ts`

---

## Current State

"WHAT WE BUILD / End-to-End Digital Products" — 6 service cards in a 3×2 grid (Web, Mobile, Security, Backend, UI/UX, DevOps). Light background.

---

## Target Design (LMO-Inspired)

Same 6 services, same content. Dark navy background. Cards with gold icon accents, border glow on hover. Section label pill above headline.

---

## Layout

```
[Section Label Pill: "WHAT WE BUILD"]

End-to-End
Digital Products                   ← 48px, two-tone headline optional

We cover the full stack — from pixel-perfect interfaces to secure cloud infrastructure.
                                    ← muted subtext, centered, max-width 560px

┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ [icon]       │ │ [icon]       │ │ [icon]       │
│ Web Apps     │ │ Mobile Apps  │ │ Security/VPN │
│ desc…        │ │ desc…        │ │ desc…        │
│ Learn more→  │ │ Learn more→  │ │ Learn more→  │
└──────────────┘ └──────────────┘ └──────────────┘
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ [icon]       │ │ [icon]       │ │ [icon]       │
│ Backend/APIs │ │ UI/UX Design │ │ DevOps/Cloud │
│ desc…        │ │ desc…        │ │ desc…        │
│ Learn more→  │ │ Learn more→  │ │ Learn more→  │
└──────────────┘ └──────────────┘ └──────────────┘
```

- Grid: `grid-template-columns: repeat(3, 1fr)`, `gap: 24px`
- Mobile: 1-col stack
- Tablet: 2-col

---

## Section Header

```
[pill label] → "WHAT WE BUILD"
headline h2  → "End-to-End Digital Products"
             → font-size: 48px, font-weight: 800, color: #ffffff
subtext      → color: #8fa3bc, font-size: 16px, centered, max-width: 560px
margin-bottom: 64px
```

---

## Service Card

```
background: #112240
border: 1px solid rgba(200,168,75,0.15)
border-radius: 12px
padding: 32px
display: flex
flex-direction: column
gap: 16px
transition: border-color 200ms, transform 200ms
hover → border-color: rgba(200,168,75,0.5), translateY(-3px)
```

**Icon container:**
```
width: 48px, height: 48px
background: rgba(200,168,75,0.1)
border-radius: 10px
display: flex; align-items: center; justify-content: center
icon: lucide icon, color: #c8a84b, size: 22px
```

**Title:**
```
font-size: 18px
font-weight: 700
color: #ffffff
margin-top: 8px
```

**Description:**
```
font-size: 14px
color: #8fa3bc
line-height: 1.6
flex: 1
```

**"Learn more →" link:**
```
color: #c8a84b
font-size: 13px
font-weight: 600
margin-top: auto
hover → color: #e0c068
```

---

## Services Data (unchanged content)

| # | Title | Icon (lucide) |
|---|---|---|
| 1 | Web Applications | `Globe` |
| 2 | Mobile Apps | `Smartphone` |
| 3 | Security & VPN | `Shield` |
| 4 | Backend & APIs | `Server` |
| 5 | UI/UX Design | `Palette` |
| 6 | DevOps & Cloud | `Cloud` |

---

## Key Changes from Current

| Current | New |
|---|---|
| Light/colored card headers | Dark navy cards with gold icon bg |
| Multi-color icons | Uniform gold icons |
| No hover border effect | Gold border glow on hover |
| Light page background | Dark navy section background |
