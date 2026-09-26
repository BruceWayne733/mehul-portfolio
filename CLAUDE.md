# Mehul Sharma portfolio site

Personal resume + portfolio site, styled as an "interactive career editorial" (magazine layout).

## Structure
- `index.html`: the whole site. HTML, CSS and JS in one file. No build step, no framework.
- `Mehul-Sharma-Resume.pdf`: linked from the "Download résumé" buttons. Keep this filename.
- Deployed as a static site (Vercel). No server code.

## Design system (keep consistent)
- Fonts (Google Fonts): Archivo (display, condensed via `wdth`), Newsreader (body serif), IBM Plex Mono (labels, dates, stacks).
- Colors are CSS tokens on `:root` with dark-mode overrides. One accent only: cobalt `--accent` (#2437E6). Never hardcode colors outside the token blocks.
- 12-column grid; side-head labels in the left 3 columns.
- No rounded cards, gradients, skill percentage bars or emoji.

## "At a glance / In depth" toggle
- `#page[data-view]` is `glance` or `deep`. Elements with class `.deep` show only in depth; `.glance-only` only at a glance.
- Essential facts must appear in BOTH views. Put extra detail in `.deep`.
- The toggle keeps the reader's scroll position by anchoring to an element visible in both views (see `anchor()` in the script).

## Content rules
- Never invent employers, metrics, achievements, testimonials or qualifications. Use only facts from the résumé or ones Mehul confirms.
- Copy: short, specific, active voice. No buzzwords.

## Open items
- Confirm the BQP start month (currently "2026 – Present") and whether Drish Infotech is still current.
- The résumé PDF still says "Co-Founder / Stealth AI Startup"; the site says "Founder & Solo Engineer". Update the PDF to match.
- Add 3 flagship projects (to be decided).

## Checks before finishing a change
- Page works at 390px, 768px and 1440px wide with no horizontal scroll.
- Keyboard: every control reachable with visible focus; reduced-motion respected.
- Open `index.html` locally and click both toggle states.
