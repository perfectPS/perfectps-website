# perfectps-website

Company website for **perfectPS** — showcasing all products starting with PS Secure VPN.

**Live site:** [perfectps.com](https://perfectps.com)  
**Stack:** Vite 8 · React 19 · TypeScript 6

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Type-check + production build → `dist/` |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build locally |

## Structure

```
src/
├── App.tsx       Root component
├── App.css       Component styles
├── index.css     Global variables + base styles
├── main.tsx      Entry point
└── assets/       Images and SVGs
```

See [`docs/architecture.md`](./docs/architecture.md) for full architecture details.
