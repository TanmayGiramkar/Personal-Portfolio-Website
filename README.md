# Tanmay Giramkar Premium Portfolio

A recruiter-first portfolio with a premium dark visual system, restrained motion, and a static deployment path that works well on Cloudflare Pages.

## Stack

- React + Vite + React Router
- Tailwind CSS + Framer Motion
- TypeScript

## Run locally

```bash
npm install
npm run dev:client
```

Portfolio URL: `http://localhost:5173`

If PowerShell blocks `npm`, use:

```bash
npm.cmd run dev:client
```

## Production build

```bash
npm run build:client
```

The build output is generated in `server/public`.

## Cloudflare Pages

Use these settings in Cloudflare Pages:

- Framework preset: `Vite`
- Build command: `npm run build:client`
- Build output directory: `server/public`

SPA routing is handled by `client/public/_redirects`.

## Contact flow

The contact form is static-hosting friendly and opens the visitor's email app with a pre-filled draft instead of submitting to a backend API.
