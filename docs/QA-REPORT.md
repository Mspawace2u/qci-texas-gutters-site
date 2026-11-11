# Staging QA — November 11, 2026

**Outcome: interaction/code QA passes; final visual approval is BLOCKED by four missing approved photographs. No production or remote preview deployed.**

## Change summary

- Replaced tap-overlay-only cards with the inspected CAIO X sticky sequence: section-bounded cards, ascending layering, bottom-up progression during normal scrolling, sticky desktop heading.
- Horizontal browsing remains a separate opt-in mode with real touch swipe, arrow buttons, large numbered controls, keyboard arrows/Home/End.
- All service descriptions always available; removed false disclosure states.
- Fixed mobile document overflow (baseline 333px at 320px; now 320px).
- Added local optimized approved fonts, license notices, visible keyboard focus, skip link, semantic service headings, intrinsic image dimensions and hero fetch priority.
- Reduced motion and short screens use ordinary stacked flow. No JavaScript still provides all service content and working native FAQs.
- Split styles and script into styles.css and services.js. Kept the existing static stack; no runtime dependencies, backend or tracking.
- Approved copy, palette and mobile benefits padding (29px top / 32px bottom) preserved. Tiny footer text uses the approved muted color for readability.

## Measured evidence

See `output/playwright/qa-results.json`: 65 assertions passed at 320 / 375 / 390 / 430 / 1280px. Screenshots include every requested width, intermediate card rise and horizontal mode.

- All tested widths: no document overflow; no startup scroll; CTA text stays single-line; hero CTA width/height match; local fonts load.
- Scroll measurement at 390px: first card remains at y=24px while the second rises from y≈820px to y≈520px after a 300px scroll. All widths demonstrate the same sticky/rising relationship.
- Last card leaves the viewport after section boundary; page continues normally.
- Reduced motion: cards become ordinary flow. Landscape 740×390 uses the same fallback.
- Keyboard: skip link focuses main, menu focuses services heading, FAQs open with Enter, gallery End selects repairs, view toggle restores stack.
- Calls remain disabled; zero tel links; robots noindex,nofollow retained; all local anchors resolve; no JavaScript exceptions.
- Local observed CLS was 0 at each measured width with missing photos; this is not a production Core Web Vitals result.

See `output/playwright/extra-qa-results.json`:
- Browser platform-font inspection confirms actual headline glyphs use Google Sans Flex and CTA glyphs use Google Sans Code (not merely declared CSS families).
- Emulated touch swipe moves the horizontal gallery 293px.
- When font requests are intentionally blocked, fallback text remains visible without page overflow.
- With JavaScript disabled: three service cards, optional controls hidden, no overflow, native FAQ opens.

`node --check services.js` and `git diff --check` pass. No project package/test/lint configuration existed; there is no invented npm test result.

## Limits and remaining blockers

1. **Required input:** original `texasgutters-v2-preview.zip` or its four approved WebP files. Shared delivery is visible but not downloadable. Image loading, photo content/crops, gutter relevance and final image performance cannot pass until actual bytes are restored.
2. Final image-inclusive mobile/desktop screenshots, motion and performance checks must be rerun after asset recovery. Current evidence shows missing images and is not final design signoff.
3. Tests use local Chromium with mobile dimensions and touch emulation. Physical iPhone/Safari behavior and production network performance are not claimed.
4. Separate owner and MarketCall campaign/creative/placement approval remain required. Review existing ambiguous service/speed headings proposed in EDITORIAL-DRAFT.md; no copy was silently changed.
5. A remote preview needs separate authorization. Plan: after photo recovery and QA, create a review-only preview under the reserved project name if approved. No DNS, production promotion, tracking or calls as part of that preview.

## Review material

- `docs/CAIO-SOURCE-REVIEW.md`: inspected actual source, SHA256 fingerprints and adapted mechanics.
- `docs/FONT-PROVENANCE.md`: official sources, optimization and bundled notices.
- `docs/MARKETCALL-REVIEW-PACK.md`: ready review checklist; no third-party outreach or publication performed.
- `docs/EDITORIAL-DRAFT.md`: original local answer proposals and source links, kept separate for copy approval.

Focused motion recording: `output/playwright/card-rise-390.webm` (photos absent; structural evidence only).
