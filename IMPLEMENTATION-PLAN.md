# Master Prompt — Implementation Plan (existing code, no rebuild)
Stack: Next.js 16.4 App Router + React 19 + TS + Tailwind 3.4 + Lucide. No new animation lib — lightweight IO + rAF parallax (perf, Sec 8/11).
Direction refinement: Sunset amber was too orange/saturated -> restrained Deep Charcoal #181410, Warm Ivory #FBF6EC, Champagne Gold #C5A880 (sparing), muted Forest/Sage natural accents. No invented facts: 4.8★/2,243 (Google screenshot), ₹2,468 Cleartrip / ₹2,557 MMT (screenshot), coords from Maps link.
Order: palette tokens -> ScrollReveal variants -> Hero word-stagger -> Navbar active+mobile transition -> About (orphan PropertyIntro revived, fix stale 4.3★) -> Sticky Rooms -> Amenities editorial -> Gallery masonry -> Parallax dividers (rAF lerp) -> Footer CTA -> lazy imgs/a11y -> build + responsive checks.
Preserve: booking modal, WhatsApp, /api/enquiry, all routes, hotelData as source of truth.
