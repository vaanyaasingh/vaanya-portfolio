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
  Six projects in total: 2 big (Go Girl, Raseed) + 4 pills (Watchlist, JobReady, KaamKar and one
  placeholder side quest). She finds more big cards bulky; only add more if she asks.
- **Work page (Home) order:** hero → marquee → Selected work grid → 01 Experience → 02 Go Girl →
  03 Study → Say hello. All three live in `src/components/Experience.jsx`; they moved off About.
- **Background grid:** a fixed 1cm hairline grid (`.bg__grid`, ink at .06) between the mesh and the
  grain, on every page.
- **Say hello:** a rounded dusk-gradient card with ink text and the form on a paper card. It is not
  a dark panel.
- **Nav:** only Work · About · Contact, plus a "LinkedIn ↗" button on the right (replaced the
  "Open to HCI collaborations" status pill; hidden under 1100px, where the menu has socials).
  **Off the clock is deliberately NOT in the nav**, even though
  the design file lists it there. Decided 2026-09-30: the nav stays about the work, and Off the clock
  is a discovery you reach from About (intro button + "The rest of me is off the clock." outro).
- **Wordmark in the nav:** `.nav__brand` is a 40px inline-flex box and the wordmark uses
  line-height 1.3, the same as `.nav__link`, so it centres optically with the links. Don't set it
  back to line-height 1.
- **About:** all copy is in `src/data/site.js` (`aboutIntro`, `shelf`, `currently`, `puzzle`, `offClockTeaser`).
  Section order: intro → 01 The shelf (`Shelf.jsx`: one plank with all objects standing on it,
  macOS-dock magnify on hover (objects scale in place with transforms, nothing slides; only items
  with a photo `src` are shown), museum-style label underneath, then a full-width "Currently…" card) →
  02 Solve me (4×4 hobby sudoku, `Puzzle.jsx`) → outro. The shelf sits on the page (no card);
  the puzzle is a meadow board. Both come from
  `Off the Clock.dc.html` (1b, 1c, 1d). She wants motion here, not a static page: the shelf auto-plays
  its stories until someone touches it, and the puzzle pops, shakes and ripples.
- **Cursor:** vermilion dot/ring, lilac labelled disc. Frame-rate-independent follow, `rate = 30`
  in `Cursor.jsx` (~35ms lag). Keep it snappy.

- **Case studies should be skimmable, not essays** (she found them wordy). Headings carry the story;
  bodies are 1–2 sentences. Section types beyond text/image/pair/quote/facts/fork: `summary` (3 cards:
  problem / what I built / where it is), `stat` (one big number), `list` (numbered points), `media`
  (screen beside its point; `image.phone: true` for phone screenshots, `flip` to swap sides), and
  `verdict` on a fork. Smart Market Watchlist is the reference layout. Never publish `[NEEDS: …]`
  placeholders from her drafts; leave those sections out until they're real.

## Open items (to-do list, last updated 2026-09-30)
Start the next session here. Ask Vaanya for whatever a line says is waiting on her.

**Waiting on files from Vaanya**
1. **Raseed research paper (PDF):** read it, link it from the Raseed case study, pull 1–2 findings into
   "The research". Ask whether it's published, submitted or a course paper, and describe it accurately.
2. **Economics paper on the AI bubble and funding (PDF):** relevant for HCI masters as breadth, not core.
   Plan: a small "Writing" / "Research" entry (title, one line, PDF link), probably a pill, not a full
   case study. Ask its status (published / submitted / coursework) first.
3. **CV:** `public/Vaanya-Singh-CV.pdf` is missing, so "Download CV" is broken on the live site
   (it's `assets/Vaanya-Singh-CV.pdf` in the design project).
4. **Photos:** About portrait, and the GGC event photo (`goGirl.community.photo`).
5. **Go Girl images**, then rebuild the Go Girl case study in the skimmable format (like Raseed/Watchlist).
6. **Thumbnails** for the other projects (Raseed has `thumb`; others fall back to `cover`).

**Copy to fill (placeholders are live on the site)**
- Shelf: Passport story is `[One line about travel]` (`shelf` in `site.js`).
- `currently`: every `[bracketed]` item. Ask if *Yesteryear* (Caro Claire Burke) is the current read.
- `side-quest-two` pill: replace with a real project or remove.
- JobReady and KaamKar are stubs with no case study.

**Case studies**
- Smart Market Watchlist is `placeholder: true`; after her user sessions add research, the turn, proof
  and reflection (her draft has `[NEEDS: …]` for these; never publish those brackets).
- Go Girl is still in the old wordy format and `placeholder: true`.
- Raseed screenshots show an "Invalid Date" bug in Recent activity. When she fixes it in the app,
  swap in new dashboard shots (desktop + `mobile-calendar`). Blur her email and any bank account numbers.
- She asked whether Smart Market Watchlist should become a big card now it has a case study (one line:
  remove `size: 'pill'`). Undecided.

**Other**
- Off the clock page: not built. The design is in `Off the Clock.dc.html`. When it's built, add
  `src/pages/OffTheClock.jsx` + a `/off-the-clock` route in `App.jsx`, then set
  `offTheClock.ready = true` in `site.js`. Until then, About shows a "Page coming soon" tag.
- `public/favicon.svg` still uses the old ink tile + tangerine dot, from before the no-ink/no-dot rules.
- Git: pushes of big image sets need `http.postBuffer` raised (already set in this repo's config).

## Conventions
- Styles live in `src/styles/global.css` (BEM-ish: `.card`, `.card__title`, `.card--pill`). No inline
  style objects except CSS custom properties.
- Content lives in `src/data/` (`projects.js`, `site.js`). Don't hard-code copy in components.
- `npm run build` must pass. It can take over a minute on this machine.
