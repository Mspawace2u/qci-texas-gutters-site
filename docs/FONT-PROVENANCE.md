# Self-hosted typography

Retrieved November 11, 2026 from Google's `google/fonts` repository:
- https://github.com/google/fonts/tree/main/ofl/googlesansflex
- https://github.com/google/fonts/tree/main/ofl/googlesanscode

Both upstream distributions include SIL Open Font License 1.1 and trademark notices; copies are bundled next to the webfonts. No claim of affiliation with Google is made. No remote font request is needed by the site.

Google Sans Flex: upstream `GoogleSansFlex[ROND,opsz,slnt,wdth,wght].ttf`; keep weight 400–800, pin other axes to upstream defaults. Google Sans Code: upstream `GoogleSansCode[wght].ttf`; instance at weight 700. Converted with fontTools 4.60.2 and Brotli 1.2.1 to Latin/Latin-1 WOFF2 with punctuation, arrows and required symbols. Flex 31,852 bytes; Code 9,464 bytes. Browser QA checks actual loading and a blocked-font fallback. Upstream notices cover the font software; all supplied copyright/license notices are retained.

For future languages, regenerate an appropriate character subset. Do not claim the current Latin subset covers every language.
