# vaanyasingh.in — working notes for Claude

## Source of truth
The brand lives in Vaanya's claude.ai/design project **"Vaanya Singh — Design System"**
(`projectId 8f2f8b8d-26d1-4148-92bc-f907e1733acb`). It can be read with the DesignSync tool
(`list_files` / `get_file`) when the `claude_design` MCP isn't connected. When she says she's changed
the design, re-read these before editing, and diff them against the local code:
`readme.md` (brand rules), `tokens/*.css`, `_ds_bundle.js` (all component styles in one file),
`ui_kits/portfolio/*.jsx` (page layouts), `guidelines/wordmark.html`.

Page designs live in a second project, **"About / Off the Clock"** (`projectId ed4dfe4e-85e5-4bc3-86ee-21653866ae89`):
`About.dc.html` (implemented in `src/pages/About.jsx`) and `Off the Clock.dc.html` (not built yet).

`src/styles/tokens.css` mirrors `tokens/*.css`. Keep the values identical; don't invent new tokens
in components.

## Brand rules (from the design system; last synced 2026-09-30)
- **Type:** one serif family, Newsreader. Display = Light 300 (`--weight-display`), text = Regular,
  Light Italic is the *voice*. Geist Mono for labels (UPPERCASE, .08em tracking). No Gloock and no
  heavy/bold display serifs.
- **Headlines:** tight (lh .92, −.025em). One italic turn per headline, with at most two treatments.
  `boxed` = lilac fill + italic, `circled` = tangerine ring.
- **Wordmark:** "Vaanya *Singh*" in Newsreader Light, opsz 72, −.02em. The surname is italic and turns
  upright on hover. No dot and no logo mark. The only source is `src/components/Wordmark.jsx`.
- **Colour:** cream paper + aubergine ink `#1D1A2B` (never pure black). Pastels (peach, mint, lilac,
  rose, butter, sky) are for gradients and card fills. Saturated accents (tangerine, vermilion, violet,
  moss) are only for dots, rings, full stops and status.
- **No ink fills.** Ink is for text and hairlines only. Active/selected/primary states are paper-0 or
  lilac (buttons, chips, nav pill, tags, menu button). Hover shifts paper → lilac or glass → paper.
- **Backgrounds:** always a drifting radial mesh (dawn / dusk / meadow / night) under grain at .22
  multiply. Never a flat page colour. Cards carry their own grain at .18.
- **Radii:** 12 image, 20 inner, 32 cards, pills for buttons/chips/nav. **Shadows:** only
  `--shadow-soft` (rest) and `--shadow-lift` (hover). Blur/glass only on floating chrome.
- **Motion:** spring for things you touch (lift 2px, arrow rotates 45°, press scale .96). Ease-out
  for reveals (70ms word stagger). Ease-in-out for ambient drift. Always respect reduced motion.
- **Icons:** none. Only Unicode glyphs in Newsreader: ↗ ← ✳ ·. No emoji, anywhere.
- **Voice:** first person, warm, precise, a little wry. Sentence case. "Say hello." not "Contact us".
  Two-digit indices (01, 02). No vanity stats.

## Site decisions Vaanya asked for (not in the design system)
- **Home grid:** an equal two-column grid. Big cards come first; projects with `size: 'pill'` render
  as compact pills the same width, after the big ones. There's no staggered 7/5 layout.
- **Say hello:** a rounded dusk-gradient card with ink text and the form on a paper card. It is not
  a dark panel.
- **Nav:** only Work · About · Contact. **Off the clock is deliberately NOT in the nav**, even though
  the design file lists it there. Decided 2026-09-30: the nav stays about the work, and Off the clock
  is a discovery you reach from About (intro button + "The rest of me is off the clock." outro).
- **Wordmark in the nav:** `.nav__brand` is a 40px inline-flex box and the wordmark uses
  line-height 1.3, the same as `.nav__link`, so it centres optically with the links. Don't set it
  back to line-height 1.
- **About:** all copy is in `src/data/site.js` (`experience`, `goGirl`, `study`, `offClockTeaser`).
  Section order: intro → 01 Experience → 02 Go Girl (lilac + peach panels) → 03 Study → outro.
- **Cursor:** vermilion dot/ring, lilac labelled disc. Frame-rate-independent follow, `rate = 30`
  in `Cursor.jsx` (~35ms lag). Keep it snappy.

## Open items
- `projects.js`: "Small Machines" (from the design project's sample data) and the two pill
  placeholders (`side-project-one`, `side-project-two`) still need real content from Vaanya.
- **Off the clock page:** not built. The design is in `Off the Clock.dc.html`. When it's built, add
  `src/pages/OffTheClock.jsx` + a `/off-the-clock` route in `App.jsx`, then set
  `offTheClock.ready = true` in `site.js`. That turns on the About buttons; until then, About shows
  a "Page coming soon" tag.
- **CV:** the buttons link to `/Vaanya-Singh-CV.pdf`, and `public/Vaanya-Singh-CV.pdf` needs the real file
  (it's `assets/Vaanya-Singh-CV.pdf` in the design project).
- **Photos:** About portrait and the GGC event photo are placeholders (`goGirl.community.photo`).
- `public/favicon.svg` still uses the old ink tile + tangerine dot. It predates the no-ink/no-dot rules.

## Conventions
- Styles live in `src/styles/global.css` (BEM-ish: `.card`, `.card__title`, `.card--pill`). No inline
  style objects except CSS custom properties.
- Content lives in `src/data/` (`projects.js`, `site.js`). Don't hard-code copy in components.
- `npm run build` must pass. It can take over a minute on this machine.
