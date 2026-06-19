# Section 10 — Contact

**File:** `src/components/sections/Contact.tsx`

---

## Current State

"LET'S WORK TOGETHER / Start Your Project" — form on left, contact info (email, location, hours) on right. Light background.

---

## Target Design (LMO-Inspired)

Same form + contact info. Dark elevated background. Left: contact info card with icon rows. Right: form with dark inputs, gold focus ring, gold submit button.

---

## Layout

```
[Section Label Pill: "LET'S WORK TOGETHER"]

Start Your
Project                  ← "Start Your" white, "Project" gold

Tell us about your idea and we'll get back to you within 24 hours.

┌─────────────────────────────┬────────────────────────────────────┐
│  [Contact Info Card]        │  [Contact Form]                    │
│                             │                                    │
│  📧 Email                   │  NAME ___________________________  │
│  hello@perfectps.com        │                                    │
│                             │  EMAIL __________________________  │
│  📍 Location                │                                    │
│  Amman, Jordan              │  PROJECT TYPE ▼ ________________   │
│                             │                                    │
│  🕐 Hours                   │  MESSAGE                           │
│  Sun–Thu, 9 AM – 6 PM       │  ________________________________  │
│                             │  ________________________________  │
│  We typically respond       │  ________________________________  │
│  within a few hours…        │                                    │
│                             │  [Send Message →]                  │
└─────────────────────────────┴────────────────────────────────────┘
```

- Section bg: `#112240`
- Grid: `grid-template-columns: 380px 1fr`, `gap: 48px`
- Mobile: stack, info card above form

---

## Section Header

```
[pill] → "LET'S WORK TOGETHER"
h2     → "Start Your Project"
       → "Start Your" white, "Project" → #c8a84b
       → font-size: 48px, weight: 800
sub    → color: #8fa3bc, centered, max-width: 480px
margin-bottom: 64px
```

---

## Contact Info Card

```
background: #0d1b2e
border: 1px solid rgba(200,168,75,0.2)
border-radius: 16px
padding: 40px 32px
height: fit-content
```

**Each contact row:**
```
display: flex
align-items: flex-start
gap: 16px
padding: 20px 0
border-bottom: 1px solid rgba(200,168,75,0.08)
last-child → no border
```

**Icon container:**
```
width: 44px, height: 44px
background: rgba(200,168,75,0.1)
border-radius: 10px
flex-shrink: 0
display: flex; align-items: center; justify-content: center
lucide icon: 18px, color: #c8a84b
```

**Contact label:**
```
font-size: 11px, weight: 600, uppercase, letter-spacing: 0.08em
color: #c8a84b
margin-bottom: 4px
```

**Contact value:**
```
font-size: 15px, weight: 500
color: #ffffff
```

**"Typical response" note:**
```
margin-top: 24px
padding: 16px
background: rgba(200,168,75,0.05)
border: 1px solid rgba(200,168,75,0.1)
border-radius: 8px
font-size: 13px
color: #8fa3bc
line-height: 1.6
```

---

## Contact Form

```
background: #0d1b2e
border: 1px solid rgba(200,168,75,0.15)
border-radius: 16px
padding: 40px 36px
```

**Form field label:**
```
font-size: 11px, weight: 600, uppercase, letter-spacing: 0.08em
color: #8fa3bc
margin-bottom: 8px
display: block
```

**Input / Textarea / Select:**
```
width: 100%
background: rgba(200,168,75,0.04)
border: 1px solid rgba(200,168,75,0.15)
border-radius: 8px
padding: 12px 16px
color: #ffffff
font-size: 15px
font-family: Barlow
outline: none
transition: border-color 200ms, box-shadow 200ms

focus →
  border-color: #c8a84b
  box-shadow: 0 0 0 3px rgba(200,168,75,0.1)

placeholder → color: rgba(143,163,188,0.5)
```

**Textarea:** `min-height: 140px; resize: vertical`

**Select:** custom arrow using background SVG (gold chevron-down)

**Submit button:**
```
width: 100%
background: #c8a84b
color: #0d1b2e
border: none
border-radius: 8px
padding: 14px
font-size: 15px, weight: 700
cursor: pointer
margin-top: 8px
transition: background 200ms, transform 150ms

hover → background: #e0c068
active → transform: scale(0.99)
```

---

## Contact Data (unchanged)

| Icon | Label | Value |
|---|---|---|
| `Mail` | EMAIL | hello@perfectps.com |
| `MapPin` | LOCATION | Amman, Jordan |
| `Clock` | HOURS | Sun–Thu, 9 AM – 6 PM |

---

## Key Changes from Current

| Current | New |
|---|---|
| Light form background | Dark form card on dark elevated section |
| Default browser input style | Gold-accent focus ring, dark bg inputs |
| Blue submit button | Gold submit button, full-width |
| Contact info inline text | Card with icon rows |
