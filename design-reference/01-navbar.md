# Section 01 — Navbar

**File:** `src/components/layout/Navbar.tsx`

---

## Current State

White/transparent navbar with dark text links and a blue "Get in Touch" button.

---

## Target Design (LMO-Inspired)

Dark navy sticky navbar. Gold primary CTA. Subtle backdrop blur on scroll. Understated, high-trust.

---

## Layout

```
[Logo]                    [Work] [Services] [PS Secure] [About] [Contact]    [Get in Touch →]
left-aligned              center nav links (gap: 32px)                        gold filled button
```

- Height: `72px`
- Sticky: `position: fixed; top: 0; z-index: 50`
- On scroll (scrollY > 10): add `backdrop-filter: blur(12px)` + `background: rgba(13,27,46,0.92)` + `border-bottom: 1px solid rgba(200,168,75,0.15)`
- Default (at top): `background: transparent`

---

## Logo

```
font-family: Chakra Petch
font-weight: 700
font-size: 20px
color: #ffffff
"perfect" → white, "PS" → #c8a84b  (already matches existing style)
```

---

## Nav Links

```
color: #8fa3bc
font-size: 14px
font-weight: 500
hover → color: #ffffff
active/current → color: #c8a84b
transition: color 150ms ease
```

---

## CTA Button

```
label: "Get in Touch →"
background: #c8a84b
color: #0d1b2e
border-radius: 8px  (or keep existing chamfer clip-path)
padding: 10px 22px
font-size: 14px
font-weight: 600
hover → background: #e0c068
```

---

## Mobile (< 768px)

- Hamburger icon (lucide `Menu`, color `#c8a84b`)
- Slide-down drawer: `background: #0d1b2e`, full-width
- Links stacked, 48px tap targets
- CTA button full-width at bottom of drawer

---

## Key Changes from Current

| Current | New |
|---|---|
| White/light bg on scroll | Dark navy bg on scroll |
| Blue "Get in Touch" button | Gold "Get in Touch" button |
| Dark text links | Muted slate links, white on hover |
| No blur effect | `backdrop-filter: blur(12px)` on scroll |
