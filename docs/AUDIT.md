# Staging audit — November 11, 2026

Baseline: `codex/staging-v2`, commit `8e9a5814ecd0f30d93143d18ed02c01e9263bfcf`.
Read before edits: index.html, README, CODEX-HANDOFF, SOURCE-MAP, ASSET-MANIFEST; opening Notion prompt and linked Wall Riot/CAIO briefs.

## Findings
- All four approved WebP assets absent. No matching local archive in Downloads/Documents. Shared chat original v2 delivery located, but download label is a span without a file URL; downloadMedia fails. Image/content QA remains blocked, no substitutions.
- Actual CAIO source inspected at `/Volumes/Sandbox/agents/000-canonical-patty-woods-cc/app/offers/caio-x/CAIOExperience.tsx` (process section around lines 432–474) and `app/globals.css` (`.steps`, `.step`, `.process-layout`). Original implementation uses a grid with 22vh gaps, sticky cards, ascending z-index, section-bounded containment and sticky desktop heading. No scroll event hijacking. Local checkout has no HEAD commit, so provenance is file-based; SHA256 snapshots recorded separately.
- Existing Texas cards only swipe horizontally; tap overlay is not vertical scroll progression.
- Google Sans families declared but no @font-face or stylesheet delivered.
- Mobile carousel negative margins can overflow the document.
- Startup setActive scroll is unnecessary and may change the initial viewport.
- Tap disclosure has aria-expanded but details remain visually/semantically inconsistent. Prefer visible service copy in sticky cards.
- Tiny 8px dot hit targets; service controls should offer explicit keyboard/touch navigation.
- Existing hero image reserves space; service images lack intrinsic dimensions.
- Existing truthful referral disclosures, disabled calls, noindex/nofollow must remain.
- Approved benefits padding: mobile 29px/32px, desktop clamp 29/30px to 50px. Preserve exactly.

## Implementation decision
Keep the existing static HTML/CSS/JavaScript stack; no framework, backend, analytics or deployment is needed. Adapt inspected CAIO sticky cards as the default service layout; preserve separate optional horizontal browsing with an accessible view toggle. Reduced motion, short viewports and focused controls use ordinary flow. Self-host approved fonts with upstream license files. Preserve approved consumer copy; any proposed editorial additions are kept separate for review.
