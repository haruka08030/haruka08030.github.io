# Haruka – Portfolio

Minimal Next.js 14 + TypeScript + Tailwind + shadcn/ui portfolio designed for GitHub Pages (static export).

## Tech
- Next.js 14 App Router, TypeScript
- Tailwind CSS + Typography plugin
- shadcn/ui (Button, Card)
- Static export via Next 14 `output: 'export'` (no `next export`) to `out/`
- GitHub Actions deploy to Pages

## Local Development
Requirements: Node.js 20.x and npm.

```
npm install
npm run dev
```

Build locally:
```
npm run build
```
Output is written to `out/`.

## Deploy (GitHub Pages)
This repo includes `.github/workflows/deploy.yml` to build and deploy on push to `main`.

1) In GitHub → Repository → Settings → Pages:
- Build and deployment: select “GitHub Actions”.

2) In GitHub → Repository → Settings → Variables → Actions → Variables, add:
- `REPO_NAME` = `haruka08030.github.io` (or your repo name)
- `USE_ROOT_PAGES` = `true` if using the special root repo (`<user>.github.io`), else `false`.

3) Push to `main` to trigger the workflow.

### Base Path
`next.config.mjs` sets `output: 'export'` and disables image optimization. When `USE_ROOT_PAGES` is not `true`, it applies `basePath` and `assetPrefix` to `/${REPO_NAME}`. For the root repo (`haruka08030.github.io`), no base path is set.

## Design
- Ivory background (`#F5F3EF`) + serif headings (Playfair Display) + Inter body text.
- Colors are CSS variables declared in `app/globals.css` and exposed as Tailwind colors in `tailwind.config.ts`.

## Sitemap & Robots
Static `public/sitemap.xml` and `public/robots.txt` are included and copied to `out/` on export.

## License
Private, all rights reserved.
