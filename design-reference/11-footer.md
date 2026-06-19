# Section 11 — Footer

**File:** `src/components/layout/Footer.tsx`

---

## Current State

Dark footer with logo, tagline, 3 link columns (Products, Company, Legal), copyright line, "All systems operational" badge.

---

## Target Design (LMO-Inspired)

Same structure and content. Deepest dark background (`#070f1a`). Gold top border line. Logo + description left, link columns center, contact/social right. Copyright bar at the very bottom.

---

## Layout

```
┌────────────────────────────────────────────────────────────────────┐
│▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  ← top border: 1px solid rgba(200,168,75,0.2)
│                                                                    │
│  perfectPS              PRODUCTS      COMPANY      LEGAL           │
│                                                                    │
│  Building digital        PS Secure    About        Privacy Policy  │
│  products that are       Get Early    Our Work     Terms of Svc    │
│  fast, secure, and       Access       Contact                      │
│  built to last.                                                    │
│                                                                    │
│  hello@perfectps.com                                               │
│  Amman, Jordan                                                     │
│                                                                    │
│────────────────────────────────────────────────────────────────────│
│  © 2026 perfectPS. All rights reserved.        ● All systems operational │
└────────────────────────────────────────────────────────────────────┘
```

- Section bg: `#070f1a`
- Grid (top section): `grid-template-columns: 2fr 1fr 1fr 1fr`, `gap: 48px`
- Mobile: stack all columns

---

## Top Border

```
border-top: 1px solid rgba(200,168,75,0.2)
padding-top: 64px
```

---

## Logo + About Column

**Logo:**
```
font-family: Chakra Petch, weight: 700, size: 20px
"perfect" → #ffffff, "PS" → #c8a84b
margin-bottom: 16px
```

**Tagline:**
```
font-size: 14px
color: #8fa3bc
line-height: 1.65
max-width: 280px
margin-bottom: 20px
```

**Contact info (small):**
```
font-size: 13px
color: rgba(143,163,188,0.7)
line-height: 1.8
```

---

## Link Columns (Products / Company / Legal)

**Column header:**
```
font-size: 11px
font-weight: 700
color: #c8a84b
text-transform: uppercase
letter-spacing: 0.1em
margin-bottom: 20px
```

**Link items:**
```
font-size: 14px
color: #8fa3bc
line-height: 2.2
display: block
hover → color: #ffffff
transition: color 150ms
```

---

## Copyright Bar

```
border-top: 1px solid rgba(255,255,255,0.06)
margin-top: 48px
padding: 24px 0
display: flex
justify-content: space-between
align-items: center
```

**Copyright text:**
```
font-size: 13px
color: rgba(143,163,188,0.5)
```

**"All systems operational" badge:**
```
display: flex; align-items: center; gap: 8px
dot: width: 8px, height: 8px, border-radius: 50%, background: #22c55e
     box-shadow: 0 0 6px rgba(34,197,94,0.5)   ← subtle glow pulse
text: font-size: 12px, color: #22c55e, font-weight: 500
```

**Dot pulse animation:**
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}
.status-dot { animation: pulse 2s ease-in-out infinite; }
```

---

## Key Changes from Current

| Current | New |
|---|---|
| Moderate dark footer | Deepest dark `#070f1a` |
| White/gray column headers | Gold uppercase column headers |
| No top border accent | Gold-tinted top border |
| Static status dot | Pulsing green glow dot |
