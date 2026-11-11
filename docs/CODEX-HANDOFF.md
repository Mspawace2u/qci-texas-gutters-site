# Codex handoff — Texas Gutters (staging)

## Gates
- Repository: `Mspawace2u/qci-texas-gutters-site`; Codex branch: `codex/staging-v2`.
- Intended Vercel project name: `qci-texas-gutters-site`.
- Future domain: `texasgutters.site`.
- **Do not deploy to production**, connect DNS, enable call buttons, or remove `noindex,nofollow` without explicit HITL approval and MarketCall offer-manager creative approval.
- Don't infer that publisher-account approval equals campaign approval.
- Commission goal: >=$50/month verified approved commissions for the micro-funnel.

## Source files
- `index.html` is the **actual prior v2 HTML prototype**, staged unchanged for review.
- Images referenced as `assets/*.webp` were provided in the original preview archive but **are NOT in this GitHub repo yet**. Do not claim image QA passes. Recover the four authored image assets from the existing `texasgutters-v2-preview.zip` conversation artifact or obtain them from the user before requesting visual signoff.
- Do not substitute stock photo repositories; original generated, gutter-relevant imagery is approved.
- Current font declarations are Google Sans Flex + Google Sans Code with fallbacks; verify availability/licensing and rendering before finalization.

## Critical animation correction
**Horizontal carousel navigation and vertical card rise are DIFFERENT behaviors.**
Current prototype contains horizontal swipe plus a tap-triggered CSS bottom-up detail overlay. Patty also requests a CAIO X-style **scroll-driven sticky-stage card progression rising from bottom to top on mobile**. Preserve horizontal swipe only where independently useful; do not mistake horizontal scroll for vertical advancement.

### Locate original working source first
1. Read the [Wall Riot Codex full handoff](https://app.notion.com/p/411074e59fe58167b490db889c329cf7) — specifically its **existing CAIO X sticky-scroll reuse** section. It is the most relevant recent implementation instruction, not just inspiration.
2. Find CAIO X original **"How this goes down"** component and CSS in its GitHub/Codex project; inspect actual code, behavior, sticky boundaries, reduced-motion, and mobile scroll interactions.
3. Read the [CAIO X Wise-inspired prompt](https://app.notion.com/p/6b2074e59fe5823f950781b0bd58b3d2) and [CAIO X design notes](https://app.notion.com/p/48c074e59fe58358bc8081a35cbb4a12) for intent.
4. Reuse working mechanics as an adapted, contained **StickyServiceShowcase**, not as a pixel-clone of Wise or Wall Riot.
5. If original CAIO X source is inaccessible, **report the blocker**; do not claim its implementation was reused.

### Responsive acceptance tests
- At widths 320, 375, 390, 430px plus desktop: vertical card rise on scroll; bounded sticky stage; clean exit to next section; no scroll trap, collisions, or horizontal page overflow.
- Service cards retain distinct gutter-specific images and semantic information.
- All mono CTA pills stay equal height, perfectly symmetrical, and one-line on mobile.
- Provide manual/keyboard equivalents, visible focus, touch support, reduced-motion fallback.
- Monitor Cumulative Layout Shift, image loading, focus behavior, and effective CTA placement.

## Approved Texas Gutters design system
- Background white #FFFFFF; ivory panels #F7F7F3; charcoal #202426; CTA petrol blue #16566A; accent eucalyptus #7A9B87.
- Google Sans Flex: sentence-case headlines/body, tight intentional line wraps.
- Google Sans Code: ALL-CAPS eyebrow labels and bold concise single-line CTA labels; no uppercase editorial headlines.
- Rounded pill buttons, equal heights and widths, Lucide outline icons, large negative space.
- Add meaningful **top AND bottom ivory breathing room** in the benefits/why card.
- Photos must show gutters and credible Texas-home architecture, no stock-library look.

## Homeowner content / AEO
- [Thumbtack-derived guide/content structure research](https://app.notion.com/p/415074e59fe581a39485fb8e4739e13c) supplies architecture inspiration only, not copy.
- Plan separate, high-value locally sourced answers: gutter repair vs replacement; guards and maintenance; pricing factors; Texas rain/drainage questions; service FAQs.
- No fabricated contractor profiles, testimonial quotes, local business facts, fake author credentials, or misleading listing markup.
- No mass-generated thin ZIP pages.

## MarketCall compliance
- Offer: Gutters Bundle | Inbounds | Dynamic | Pre-approval. Campaign manager must approve site and specific third-party placements.
- Lidia confirmed Tier 1 Dublin previously; **Katy/Cypress ZIPs appear on published Tier 1 and Tier 2 eligibility lists, but live buyer bids and individual offer approval remain open**.
- Caller criteria from manager: within service area, seeking new gutter service; mainly installation and repairs; non-homeowners may qualify; actual payable duration dynamic after IVR.
- Prominently disclose independent referral relationship and preserve exact MarketCall-required home-services disclaimer pending offer-manager review.
- No personal VoIP/SMS integration; MarketCall supplies approved call tracking/routing.

## Codex review deliverables (no publish)
1. Clean modular source / dependency decisions and image assets correctly loaded.
2. Correct bottom-up scroll mechanics using verified CAIO X source.
3. Mobile/desktop QA evidence (including reduced motion and no button wraps).
4. A working **nonproduction preview** for user review only after separate authorization; until then repository staging is enough.
5. Creative approval checklist and unresolved questions for Lidia.
