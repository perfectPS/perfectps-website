# 3D Interactive Design Layer

Add depth and motion on top of the LMO theme. All effects use CSS + lightweight JS — no Three.js needed for most of these. Use `@react-three/fiber` only for the Hero globe (optional heavy feature).

---

## Library Choices

| Effect | Library | Bundle cost |
|---|---|---|
| Mouse-tilt on cards | `vanilla-tilt` via `react-vanta` or pure JS | ~4 KB |
| Scroll parallax | `framer-motion` (already likely in project) | ~30 KB |
| Floating particles (hero) | `tsparticles` or CSS only | ~15 KB / 0 KB |
| 3D globe (hero, optional) | `@react-three/fiber` + `drei` | ~200 KB — lazy load |
| Morphing blob | CSS `border-radius` keyframes | 0 KB |
| Perspective card stack | Pure CSS `perspective` | 0 KB |

**Recommendation:** Start with pure-CSS + Framer Motion (no new deps). Add tsparticles for hero. Skip Three.js unless the hero globe is a priority.

---

## 01 — Hero: Floating Particle Field

Replace static dot-grid with animated particles that react to mouse movement.

**Implementation (CSS-only, no lib):**
```css
/* Scattered glowing dots, CSS animation */
.particle {
  position: absolute;
  width: 2px; height: 2px;
  border-radius: 50%;
  background: #c8a84b;
  opacity: 0.3;
  animation: float var(--dur, 8s) ease-in-out infinite;
  animation-delay: var(--delay, 0s);
}

@keyframes float {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
  50%       { transform: translateY(-24px) translateX(8px); opacity: 0.6; }
}
```

Generate 30–50 particles via `Array.from({length: 40})` in JSX, random `top/left/--dur/--delay` inline styles.

**Mouse-reactive version (tsparticles config):**
```json
{
  "particles": {
    "number": { "value": 50 },
    "color": { "value": "#c8a84b" },
    "opacity": { "value": 0.25 },
    "size": { "value": 1.5 },
    "move": { "enable": true, "speed": 0.6 },
    "links": { "enable": true, "color": "#c8a84b", "opacity": 0.08, "distance": 120 }
  },
  "interactivity": {
    "events": { "onHover": { "enable": true, "mode": "repulse" } }
  }
}
```

---

## 02 — Hero: 3D Tilt Stat Cards

Stat cards at the bottom of the hero respond to mouse position with a 3D tilt.

**CSS setup:**
```css
.stat-card {
  transform-style: preserve-3d;
  transition: transform 200ms ease;
  will-change: transform;
}
```

**JS mousemove handler (per card):**
```ts
function applyTilt(card: HTMLElement, e: MouseEvent) {
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width  - 0.5;  // -0.5 to 0.5
  const y = (e.clientY - rect.top)  / rect.height - 0.5;
  card.style.transform = `perspective(600px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(8px)`;
}
card.addEventListener('mousemove', e => applyTilt(card, e));
card.addEventListener('mouseleave', () => card.style.transform = '');
```

Or use the `useTilt` custom hook pattern:
```ts
// hooks/useTilt.ts
export function useTilt(ref: RefObject<HTMLElement>, strength = 12) {
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onMove = (e: MouseEvent) => { /* same logic */ };
    const onLeave = () => { el.style.transform = ''; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); };
  }, [ref, strength]);
}
```

---

## 03 — Service & Portfolio Cards: 3D Hover

Apply tilt to any grid card (Services, Portfolio, Why Us, Process steps).

```tsx
// components/ui/TiltCard.tsx
import { useRef } from 'react';
import { useTilt } from '../../hooks/useTilt';

export function TiltCard({ children, className }: PropsWithChildren<{className?: string}>) {
  const ref = useRef<HTMLDivElement>(null);
  useTilt(ref, 10);
  return (
    <div ref={ref} className={className} style={{ transformStyle: 'preserve-3d' }}>
      {children}
    </div>
  );
}
```

Wrap any card component with `<TiltCard>`.

**Depth layering inside card (optional):**
```css
/* Elevate icon to appear "floating" above card surface */
.card-icon {
  transform: translateZ(20px);
}
.card-title {
  transform: translateZ(12px);
}
.card-desc {
  transform: translateZ(6px);
}
```

---

## 04 — Products Section: Floating 3D Shield

The PS Secure brand panel left side shows an animated 3D shield.

**CSS 3D rotate on hover:**
```css
.shield-icon {
  transition: transform 600ms ease;
  transform-style: preserve-3d;
}
.product-panel:hover .shield-icon {
  transform: perspective(400px) rotateY(25deg) rotateX(10deg) scale(1.1);
}
```

**Idle float animation:**
```css
@keyframes shield-float {
  0%, 100% { transform: translateY(0) rotateZ(0deg); }
  50%       { transform: translateY(-10px) rotateZ(2deg); }
}
.shield-icon {
  animation: shield-float 4s ease-in-out infinite;
}
```

**Gold glow pulse:**
```css
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(200,168,75,0.2); }
  50%       { box-shadow: 0 0 40px rgba(200,168,75,0.5), 0 0 80px rgba(200,168,75,0.15); }
}
.shield-container {
  animation: glow-pulse 3s ease-in-out infinite;
}
```

---

## 05 — About Section: Identity Card 3D Flip

On hover, the left identity card does a subtle 3D reveal.

```css
.identity-card {
  transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
  transform-style: preserve-3d;
}
.identity-card:hover {
  transform: perspective(800px) rotateY(-8deg) rotateX(4deg) translateZ(12px);
}
```

---

## 06 — Scroll-Triggered Parallax

Use Framer Motion's `useScroll` + `useTransform` for depth on scroll.

```tsx
// Hero section example
import { useScroll, useTransform, motion } from 'framer-motion';

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -80]);       // particles drift up
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);   // hero fades out

  return (
    <section>
      <motion.div style={{ y }} className="particles-layer" />
      <motion.div style={{ opacity }} className="hero-content" />
    </section>
  );
}
```

**Stagger reveal on scroll (existing ScrollReveal component — enhance it):**
```tsx
// Upgrade ScrollReveal to use framer-motion variants
const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0.23, 1, 0.32, 1] }
  })
};
// Pass custom={index} to each card in a grid
```

---

## 07 — Tech Stack: 3D Marquee Depth

Add a subtle depth feel to the marquee rows.

```css
.marquee-wrapper {
  perspective: 800px;
}
.marquee-row-1 {
  transform: rotateX(4deg);
}
.marquee-row-2 {
  transform: rotateX(-4deg);
}
```

---

## 08 — Background: Animated Gradient Orbs

Behind every section, floating blurred orbs create a subtle depth field (zero performance cost with `filter: blur`).

```tsx
// components/ui/BackgroundOrbs.tsx
export function BackgroundOrbs() {
  return (
    <div className="orbs-container" aria-hidden>
      <div className="orb orb-1" />
      <div className="orb orb-2" />
    </div>
  );
}
```

```css
.orbs-container {
  position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0;
}
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.12;
}
.orb-1 {
  width: 500px; height: 500px;
  background: #c8a84b;
  top: -200px; right: -100px;
  animation: drift 12s ease-in-out infinite;
}
.orb-2 {
  width: 400px; height: 400px;
  background: #1e4a8a;
  bottom: -150px; left: -80px;
  animation: drift 16s ease-in-out infinite reverse;
}

@keyframes drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(30px, -20px) scale(1.05); }
  66%       { transform: translate(-20px, 15px) scale(0.97); }
}
```

Add `<BackgroundOrbs />` as first child inside each `<section style={{position:'relative'}}>`.

---

## Priority Order for Implementation

1. **BackgroundOrbs** — biggest visual impact, zero deps, add to all sections
2. **TiltCard** — wrap all grid cards, uses `useTilt` hook
3. **Hero particles** — CSS-only floating dots
4. **ScrollReveal stagger** — enhance existing component with Framer Motion
5. **Shield float + glow** — Products section only
6. **Parallax scroll** — Hero + one other section
7. **Marquee 3D tilt** — TechStack section
8. **Identity card flip** — About section

---

## Performance Notes

- All `transform` + `opacity` animations use compositor thread — no layout thrash
- `will-change: transform` only on actively animated elements (not global)
- Reduce particle count to 20 on mobile (`window.innerWidth < 768`)
- `prefers-reduced-motion` check: wrap all animations
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 0.01ms !important; }
  }
  ```
