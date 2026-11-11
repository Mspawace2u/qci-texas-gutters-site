# Staging QA — November 11, 2026

**Outcome: original photographs recovered and image-inclusive QA completed. No image-induced regression found. The earlier 65 passing checks were not repeated. Owner/MarketCall approval remains pending. No production or remote preview deployed.**

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

1. Photo recovery is complete: all four approved originals now exist in `assets/`. Their bytes match the recorded source sizes, and copies match the files recovered from Downloads.
2. New image-inclusive screenshots and recording supersede the earlier missing-photo evidence for visual review. The service sources are 640×640 and retain their original white edging/soft detail; no crops, replacement imagery or code changes were applied. Owner visual approval is still a review gate.
3. Tests use local Chromium with mobile dimensions and touch emulation. Physical iPhone/Safari behavior and production network performance are not claimed.
4. Separate owner and MarketCall campaign/creative/placement approval remain required. Review existing ambiguous service/speed headings proposed in EDITORIAL-DRAFT.md; no copy was silently changed.
5. A remote preview needs separate authorization. Plan: after photo recovery and QA, create a review-only preview under the reserved project name if approved. No DNS, production promotion, tracking or calls as part of that preview.

## Review material

- `docs/CAIO-SOURCE-REVIEW.md`: inspected actual source, SHA256 fingerprints and adapted mechanics.
- `docs/FONT-PROVENANCE.md`: official sources, optimization and bundled notices.
- `docs/MARKETCALL-REVIEW-PACK.md`: ready review checklist; no third-party outreach or publication performed.
- `docs/EDITORIAL-DRAFT.md`: original local answer proposals and source links, kept separate for copy approval.

Focused motion recording: `output/playwright/card-rise-390.webm` (photos absent; structural evidence only).

## Completed image recovery and image-inclusive QA — November 11, 2026

Scope: only the previously blocked image loading, visual crops, image-inclusive presentation and image-related layout/performance observations. The 65 passed interaction checks and extra fallback/touch checks were NOT rerun. `index.html`, `styles.css`, `services.js` and the original QA evidence remain unchanged.

Recovered directly from `/Users/pattywoods/Downloads`:

| Asset | Bytes | Natural dimensions |
|---|---:|---:|
| texas-home-hero.webp | 182,916 | 1448×630 |
| gutter-installation.webp | 39,076 | 640×640 |
| gutter-guards.webp | 46,180 | 640×640 |
| gutter-repairs.webp | 34,192 | 640×640 |

Total photo payload: 302,364 bytes (about 295 KiB). No recompression, regeneration or substitutions. SHA256 checksums are recorded in the asset manifest.

Results in `output/playwright/image-qa-results.json`:
- At 320 / 375 / 390 / 430 / 1280px, every image loaded and decoded with nonzero natural dimensions; photo responses were HTTP 200.
- Captured and inspected hero/service screenshots: visible gutter/eave/downspout details, guard mesh and repair work; no broken-image state. Existing `object-fit: cover` preserves proportions while cropping.
- Image-inclusive layout stayed within viewport width at all five sizes. Observed local CLS remained 0; no image-induced layout regression found.
- Local cold photo response durations were approximately 1.3–3.2ms; subsequent widths used cache. These are local observations, not a production/mobile-network performance score.
- Saved image-inclusive horizontal and reduced-motion screenshots at 390px for presentation review, without rerunning the interaction assertions.
- Recorded the sticky card sequence with images present: `output/playwright/images-card-rise-390.webm` and midpoint screenshot `images-card-rise-mid-390.png`.

Visual evidence: `images-hero-{width}.png`, `images-card-{width}-{1,2,3}.png`, `images-horizontal-390-{1,2,3}.png`, and `images-reduced-motion-390.png` under `output/playwright/`.

No HTML/CSS/JavaScript changes were needed. No production deployment, call activation, tracking or DNS changes were performed.
