# Texas Gutters — QCI pilot

**Status: nonproduction staging. Code/interaction QA passes; final visual review blocked by four missing original photos.**

- Target: Katy + Cypress / West Houston, Texas.
- Planned domain / reserved Vercel project: `texasgutters.site` / `qci-texas-gutters-site`.
- Work branch: `codex/staging-v2`.
- Calls disabled. Robots `noindex,nofollow`. No tracking, DNS, production or remote preview setup.

## Review

Start with [QA report](docs/QA-REPORT.md), [source review](docs/CAIO-SOURCE-REVIEW.md) and [MarketCall checklist](docs/MARKETCALL-REVIEW-PACK.md). The expected photos and attempted recovery are recorded in [asset manifest](docs/ASSET-MANIFEST.md). Do not approve the visuals until they load.

`index.html` + `styles.css` + `services.js` are the static app; no build step or runtime dependencies. For local QA: `python3 -m http.server 4173 --bind 127.0.0.1`. This command is for local testing, not authorization to publish a preview.

Browser evidence is in `output/playwright/`. `scripts/browser-qa.js` is a Playwright CLI `run-code` function; the runner accepts the locally installed CLI. Syntax: `node --check services.js`. Whitespace: `git diff --check`.

Individual campaign/creative/placement approval and the network-supplied tracking number remain required. $50/month in verified approved commissions is an experiment threshold, not demonstrated revenue. No production work is delegated to the owner.
