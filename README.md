# Shreyans Satpathy — Portfolio

Personal portfolio site, built with **Next.js 14 (App Router)** and TypeScript. Ported from an HTML/CSS/JS prototype exported from Claude Design.

## Features

- Animated canvas "network" background in the hero (lightweight custom `requestAnimationFrame` loop)
- Scroll-triggered reveal animations via `IntersectionObserver`
- Sticky nav that adopts a blurred background on scroll
- Infinite horizontal tech ticker
- LinkedIn post embeds in the Writing section
- Fully responsive (desktop → tablet → mobile)
- Downloadable resume (`/public/resume.pdf`)

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Pure CSS (no UI library), Google Fonts: Bebas Neue, Space Grotesk, JetBrains Mono

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the GitHub repo.
3. Vercel auto-detects Next.js — just click **Deploy**. No env vars needed.

## Structure

```
app/
  layout.tsx          # <html>, fonts, global metadata
  page.tsx            # the single-page portfolio
  globals.css         # all styles (design tokens + section styles)
  components/
    Nav.tsx           # sticky nav with scroll state
    HeroCanvas.tsx    # animated dot-network background
    RevealObserver.tsx# IntersectionObserver reveal
    Ticker.tsx        # tech ticker
public/
  resume.pdf
```
