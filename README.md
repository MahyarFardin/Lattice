# Lattice

Portfolio site for a two-person AI/ML + web engineering studio. Single-page, static, built with Vite + React + TypeScript, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to GitHub Pages via GitHub Actions.

One-time setup on GitHub: **Settings → Pages → Source → GitHub Actions**.

The build sets the Vite base path to `/<repo-name>/` automatically, which is
correct for a project page (`https://<user>.github.io/<repo-name>/`). If this
repo is renamed to `<user>.github.io` (a user/org page served from the root),
remove the `VITE_BASE_PATH` env line in the workflow so the base path is `/`.

## Content

All editable copy, links, project data and team info lives in
[`src/data/content.ts`](src/data/content.ts). See
[`CONTENT_TODO.txt`](CONTENT_TODO.txt) for the checklist of placeholder values
to replace before launch.
