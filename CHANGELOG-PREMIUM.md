# Elite Hotel Khandala — Premium Luxury Transformation (Master Prompt, 19 Oct 2026)

## Direction (Sec 2)
Deep charcoal #181410 / #100D0A, warm ivory #FBF6EC, champagne gold #C5A880 used sparingly, muted forest/sage natural accents.
Previous saturated sunset-amber was refined down to champagne; excessive gradients/glass/oversized rounding removed. Serif Playfair/Cormorant + Plus Jakarta Sans retained.

## Cinematic scroll (Sec 3 — top priority)
- Multi-layer parallax: hero slideshow parallax (scroll translate) + ParallaxDivider via new `src/hooks/useParallax.ts` (single rAF loop, lerp smoothing, transform-only, cleanup, reduced-motion off)
- ScrollReveal upgraded: 7 variants (fade-up/fade/slide-left/slide-right/clip-mask/scale/line), IO threshold/rootMargin, disconnects after reveal
- Hero: 4-slide crossfade, gentle Ken Burns (24s), word-by-word headline stagger, mist layers, slide captions/dots, eager first image
- Sticky storytelling: Rooms — pinned photograph crossfades while room narratives scroll (desktop); self-contained editorial blocks on mobile
- Alternating rhythm: Hero(charcoal) → Booking → About(ivory) → Stats(charcoal) → Rooms(ivory) → OTA strip → Amenities(sand) → Parallax(Kune) → Dining(charcoal) → Real Moments(sand) → Gallery → Parallax(Duke) → Reviews(charcoal) → Location → FAQ → Contact/Footer

## Sections (Sec 4–7, 9)
Navbar: transparent→frosted charcoal, active-section underline (IO), Escape closes mobile, body scroll-lock, staggered mobile drawer (always mounted).
About: orphan PropertyIntro revived as editorial About (fixed stale 4.3★ → dynamic 4.8/2,243).
Rooms: sticky showcase above (verified amenities, from-prices, modal + WhatsApp preserved). Amenities: numbered editorial index, hairlines, no generic grid. Gallery: masonry columns, varied ratios, clip reveal, keyboard-openable, lightbox retained.
Footer: editorial CTA ("Reserve — From ₹2,468"), hairline rule, verified contact/policies retained. No invented social links.

## Facts — nothing invented (Sec 5/6)
4.8★ · 2,243 reviews (your Google screenshot) in Hero/Stats/Reviews/JSON-LD; ₹2,468 Cleartrip / ₹2,557 MakeMyTrip vs Direct strip (screenshot, dated); maps place/coords 18.7572306,73.3768465 from your link; real photos: your entrance/room/restaurant/reception + real Kune/Duke/Karla-Bhaja (fixed Bhushi beach bug). Reviews/prices only from hotelData.

## Motion/perf/a11y (Sec 8,10,11)
No new animation libraries — IO + rAF only (justified: perf). Images 8.6MB→2.6MB, lazy+decoding below fold, eager hero, aspect ratios reserved, no scroll-jacking, prefers-reduced-motion respected, focus-visible rings, aria labels/current, semantic sections. Horizontal filmstrip is intentional overflow-x-auto inside section; page body overflow-x hidden.

## Tested (Sec 13)
- `npm run build` ✅ Next 16.4 Turbopack, TS clean, routes `/` + `/api/enquiry`
- Dev server: HOME 200 (212KB HTML), all section ids in order, 11/11 key images 200
- Enquiry API: invalid → 400 validation; valid → 200 {success, leadId ELT-…, whatsappUrl}
- Responsive: mobile-first classes throughout (sticky image hidden <lg, masonry 1→2→3 cols, sticky mobile bar retained); parallax transforms transform-only (no layout shift)
- Needs external: none for core. Optional later — real Google review texts if you want more reviews, hotel-shot balcony/bathroom photos to replace remaining scenic renders, CRM webhook (LEAD_WEBHOOK_URL / RESEND in .env.example) if you want email/Sheets leads.

## Deploy
`git add . && git commit -m "feat: premium luxury cinematic edition" && git push` → Vercel auto-deploys.

## Bug-Fix Pass (user-reported: blurry images + scrolling not working)
Root causes found & fixed:
1. **Preview blocked Next dev JS/HMR** (`.next/dev/logs`: "Blocked cross-origin request… allowedDevOrigins") → hydration/scroll animations never ran in Live Preview. Fixed: `allowedDevOrigins: ['*.e2b.app','*.vercel.app','localhost']` in next.config.mjs + preview now runs **production** server (`next start`, no HMR dependency).
2. **ScrollReveal could leave content invisible forever** (opacity-0 + IO-only, pointer-events trapped) → fail-safe reveal after 1.6s, threshold 0.06, no pointer-events trap.
3. **Scroll jank**: Hero + progress bar called React setState on every scroll frame → direct DOM transforms via refs (no re-renders). Navbar scroll handler de-duped.
4. **Blurry images**: (a) scenic images had been double-compressed q80 → restored git masters, re-encoded q88; (b) your real photos (636–829px) were stretched full-screen → 2x Lanczos upscale + unsharp/contrast enhancement (now 1272–1658px, q90), and low-res real entrance removed from fullscreen hero (high-res slides only); gallery/parallax now display at/near native size.
Verified: prod HOME 200 in 0.01s, JS chunks 200 (hydration OK), 11/11 images 200, IntersectionObserver in bundle, enquiry API 200, build clean.

## Maximum-WOW Cinematic Pass (user choice: Maximum WOW + Pro Hero)
Studied Aman/Taj-level patterns (cinematic hero, sticky booking, micro-interactions, scroll-triggered, negative space — startdesigns/mediaboom 2026 roundups).
Added `src/components/Cinematic.tsx`: 1s brand Preloader (ELITE letter stagger, slides up), FilmGrain overlay (3.5% SVG noise), SideDots section nav (active tracking), RevealWords (word-stagger headings), Magnetic CTA (desktop pointer-fine only), PinnedMoments — desktop pinned horizontal scroll journey (340vh, rAF transform, progress hairline) + mobile native swipe. Hero CTA magnetic + gold scroll-line. Dining clip-mask reveal. About inset card multi-speed parallax (scale-safe useParallax param). All rAF/transform-only, reduced-motion respected, no new libs.
Note: user said they'd paste a reference link (none arrived) — paste it anytime for exact matching.

## Taj + Della Reference Pass (user links: Taj Chia Kutir + Della Resorts)
Analysed: Taj — fullscreen banner carousel + in-hero booking bar + sticky property sub-nav (Rooms/Overview/Offers/Dining/Venues/Experiences/Gallery/Attractions) + spec-sheet cards (Specifications 1/2/3, MORE expand, ENQUIRE NOW) + horizontal Timeless-Weddings carousel w/ arrows + restrained gold/serif-caps. Della — cinematic video hero + letter-spaced mega headings (S T A Y / G A S T R O N O M Y) + awards-badge row + big count stats + gastronomy card grid + tabbed Offers carousel (Stay/Dining/Experiences) w/ prev-next.
Implemented in `src/components/TajDella.tsx`: StickySubNav (sticks under header, gold underline active), TrustStrip (honest badges: Google 4.8/2243, Cleartrip ₹2468, MMT ₹2557 — no fake awards), ExperiencesCarousel (Taj spec cards for 6 verified attractions, MORE expand -> Distance/Drive/Category specs, Enquire Now WhatsApp), OffersTabs (Stay/Dining/Experiences tabs + arrows, enquiry-based offers — no invented discounts/prices beyond verified ₹2468 direct). Della spaced heading applied to Dining + Offers/Experiences eyebrows. Build clean, prod verified.
