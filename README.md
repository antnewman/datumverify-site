# Datum Verify website

The marketing website for Datum Verify (UK contractor risk intelligence). v0.1 is a single home
page that proves the deployment pipeline (Cloudflare DNS, Netlify hosting, React/Vite build) and
establishes the brand tokens in code.

## Tech stack

- React 18 with TypeScript (strict mode)
- Vite 8
- Tailwind CSS 3 with brand tokens in [tailwind.config.ts](tailwind.config.ts)
- Vitest 4 with React Testing Library
- ESLint 8, Prettier 3 with `prettier-plugin-tailwindcss`
- Node 22.18.0 (pinned in [`.nvmrc`](.nvmrc), `engines.node` floor `>=20.0.0`)
- Self-hosted fonts via `@fontsource` (no Google Fonts CDN)
- Hosted on Netlify; DNS on Cloudflare; domain `datumverify.com`

## Local development

```sh
npm install
npm run dev
```

The dev server runs on http://localhost:3000.

## Quality gates

```sh
npm run typecheck   # tsc --noEmit
npm run lint        # ESLint, zero-warning gate
npm run test        # Vitest (watch mode)
npm run build       # type-check then production build
```

`npm run build` produces a static bundle in `dist/`. `npm run preview` serves that bundle locally.

## Deployment

`main` is production. Netlify builds with `npm ci && npm run build` and publishes `dist/`.

## Brand tokens

| Token       | Hex       | Use                                              |
| ----------- | --------- | ------------------------------------------------ |
| `carbon`    | `#161616` | Primary text, dark surfaces                      |
| `graphite`  | `#4A4D52` | Secondary text                                   |
| `pencil`    | `#A4A29D` | Tertiary text on dark surfaces only              |
| `drafting`  | `#E8E4DA` | Subtle surfaces, dividers                        |
| `paper`     | `#FAF7F0` | Primary background                               |
| `reference` | `#1B5A6A` | Accent. Sole non-greyscale colour. Links, focus  |

Type families:

- Display: Space Grotesk 500 with -0.02em tracking
- Body: Inter 400 / 500 at 1.6 line-height
- Evidence (numbers, codes, structured data only): IBM Plex Mono 400. Never for prose.

## Accessibility

v0.1 targets WCAG AA across the board: semantic HTML, full keyboard navigability with visible focus
rings, and contrast ratios verified against the brand palette. Layout has been tested at 360px,
768px, and 1280px viewport widths.
