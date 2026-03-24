# NGSAC Website

This repository contains the public website for `ngsac.org`, designed for deployment to GitHub Pages.

## Sections

- `About`
- `Meetings`
- `Publications`
- `Contact`

## Content model

- `src/content/meetings`: quarterly meeting pages
- `src/content/publications`: public committee outputs

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

The site is configured for static output and includes a Pages deployment workflow in `.github/workflows/deploy.yml`.
