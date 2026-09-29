# vaanyasingh.in

Portfolio site, built from the Vaanya Singh design system (claude.ai/design). Vite + React.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # → dist/
```

## Where things live
- `src/data/projects.js` — projects **and case studies**. Each case study is a list of sections
  (`text`, `image`, `pair`, `quote`, `facts`, `fork`); the schema is documented at the top of the file.
  Images go in `public/work/<id>/`. Set a card image with `cover: '/work/<id>/cover.jpg'`.
- `src/data/site.js` — status line, socials, nav, About timeline and skills.
- `src/components/Wordmark.jsx` — the wordmark. Change it here and it updates everywhere (nav, menu, intro, favicon is `public/favicon.svg`).
- `src/styles/tokens.css` — design tokens copied from the design system. `global.css` — everything else.

## Contact form
Copy `.env.example` → `.env` and set `VITE_FORM_ENDPOINT` (e.g. a Formspree URL). Without it,
the form opens a pre-filled email to `VITE_CONTACT_EMAIL`; with neither, it points people to LinkedIn.

## Deploy
Static build. `vercel.json` (Vercel) and `public/_redirects` (Netlify) route every path to the app.
