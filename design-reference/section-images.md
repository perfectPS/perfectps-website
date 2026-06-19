# Section SVG Illustrations

One custom SVG per section. All files live in `src/assets/sections/`. Built with inline SVG paths — no raster images, no external deps.

| Section | Background | File | Description |
|---|---|---|---|
| Hero | Dark `#0d1b2e` | `hero-shield.svg` | Large shield with circuit lines and glow rings |
| Services | White `#ffffff` | `services-network.svg` | 6 service nodes in hex layout, dotted connectors |
| Why Us | Dark `#112240` | `whyus-metrics.svg` | Abstract metric dashboard — bars, gauges, numbers |
| Products | White `#ffffff` | `products-device.svg` | Phone mockup showing PS Secure connected screen |
| Process | Dark `#0d1b2e` | `process-flow.svg` | 4-node numbered flow diagram with arrows |
| Featured Work | White `#ffffff` | `work-frames.svg` | 3 stacked browser-frame cards at varied depth |
| Tech Stack | Dark `#112240` | `techstack-constellation.svg` | Tech name bubbles connected by thin lines |
| About | White `#ffffff` | `about-studio.svg` | Abstract globe/map with studio location marker |
| Contact | Dark `#112240` | `contact-message.svg` | Open envelope with floating message + sparkles |

## Usage Pattern

Each SVG is imported as a static asset and rendered via `<img>` in the section:

```tsx
import heroShield from '../../assets/sections/hero-shield.svg'
// ...
<img src={heroShield} alt="" aria-hidden width={520} height={520} style={{ opacity: 0.9 }} />
```

## Color Conventions

**Dark-bg SVGs** (Hero, WhyUs, Process, TechStack, Contact):
- Primary stroke: `#c8a84b` (gold)
- Secondary stroke: `rgba(255,255,255,0.15)` (white dim)
- Accent fill: `rgba(200,168,75,0.08)` (gold glow)
- Dot/node: `#c8a84b`

**Light-bg SVGs** (Services, Products, FeaturedWork, About):
- Primary stroke: `#0d1b2e` (navy)
- Secondary stroke: `rgba(13,27,46,0.15)` (navy dim)
- Accent fill: `rgba(13,27,46,0.04)` (navy wash)
- Gold accent: `#c8a84b`
