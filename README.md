# Nikhil Reddy — Portfolio

Personal portfolio site, built as a static React app and content-driven from a single data file so it's easy to keep current.

Live: https://nikhil-portfolio-zeta-ivory.vercel.app/

## Structure

```
src/
  data.js     all content — profile, skills, experience, projects, education, certifications
  App.jsx     renders sections from data.js
  index.css   design system: color tokens (light/dark via prefers-color-scheme), layout, animations
```

## Updating content

Everything on the page — bio, skills, experience bullets, projects, education, certifications — comes from `src/data.js`. Edit that file and nothing else needs to change; there's no CMS or build step beyond the normal Vite build.

## Running locally

```bash
npm install
npm run dev
```

## Deployment

Deployed on Vercel, connected directly to this GitHub repo — every push to `main` redeploys automatically. No backend, no environment variables required.
