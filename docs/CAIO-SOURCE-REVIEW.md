# Actual CAIO X source review

Inspected November 11, 2026:
- `/Volumes/Sandbox/agents/000-canonical-patty-woods-cc/app/offers/caio-x/CAIOExperience.tsx`: process section titled “How this goes down.”
- `/Volumes/Sandbox/agents/000-canonical-patty-woods-cc/app/globals.css`: `.steps`, `.step`, `.process-heading-block`, desktop media query, reduced-motion media query.

Source SHA256:
- CAIOExperience.tsx: `a15857641350ecae1fad365cfdf0032c37204963ed559df035500af028b99bb8`
- globals.css: `64cacdf8e2d341ba7d56a7c74c7fd3922b80a83c35379cd4b159d8282e463589`

The local source has no HEAD commit; no fabricated upstream commit/repository lineage is asserted. This is direct source inspection, not reconstruction from screenshots.

## Mechanics retained

CAIO maps four `<article className="step">` elements with ascending z-index inside `.steps`. Its CSS uses grid, a `22vh` gap, bottom padding, `position: sticky`, and a top offset. At desktop width, the heading becomes sticky in the left column and cards continue in the right. The parent bounds the sequence, allowing ordinary document scrolling to resume after it.

Texas adapts that exact structural pattern to three service cards: grid gap 22vh (25vh desktop), ascending z-index, sticky top 24px, and section containment. The original service copy, images paths and disabled call buttons remain. Cards stay readable without disclosure overlays. No scroll-jacking JavaScript or fixed page background is introduced.

## Deliberate improvements

CAIO's inspected reduced-motion rule only disables animation durations; Texas additionally changes cards and heading to ordinary flow. Short viewports get the same flow fallback to avoid clipped card content. Optional horizontal browsing is a separate manually selected mode. Without JavaScript the full vertical service sequence remains available.
