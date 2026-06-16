# perfectPS Website — Architecture

## Overview

The `perfectps-website` is the company-wide marketing site for **perfectPS**, hosted at `perfectps.com`. It serves as the front door for all perfectPS products, with PS Secure VPN as the first product.

```
perfectps-website/
├── src/           Vite + React 19 + TypeScript source
│   ├── App.tsx    Root component (pages/sections)
│   ├── App.css    Component styles
│   ├── index.css  Global CSS variables and base styles
│   ├── main.tsx   React entry point
│   └── assets/    Images, SVGs
├── public/        Static assets served at root (favicon, etc.)
├── docs/          Project documentation
├── index.html     HTML entry point
└── vite.config.ts Vite configuration
```

## Stack

| Tool | Version | Purpose |
|---|---|---|
| Vite | ^8 | Build tool + dev server |
| React | ^19 | UI framework |
| TypeScript | ~6 | Type safety |
| ESLint | ^10 | Linting |

## Commands

```bash
npm install       # install dependencies
npm run dev       # dev server with HMR (http://localhost:5173)
npm run build     # tsc -b && vite build → dist/
npm run lint      # ESLint check
npm run preview   # serve production build locally
```

## Hosting

- **VM:** Oracle Cloud (Jeddah) — ARM Ampere A1 (`perfectps-websites`)
- **Domain:** `perfectps.com` → DNS A record → VM public IP
- **DNS managed via:** Squarespace
