# Workspace — Connected & Ready to Work
**Repo cloned:** 19 Oct 2026 from https://github.com/prasadbhangare6-stack/elite-hotel-khandala.git
**Location in workspace:** `/home/user/elite-hotel-khandala/`
**Live site:** https://elite-hotel-khandala.vercel.app/
**Build status:** ✅ `npm run build` passes (Next.js 16.4.0, Turbopack) — verified in workspace

---

## Your Locked Decisions (from last chat)
| Decision | Choice |
|---|---|
| Colour direction | **C — Sunset Valley**: Plum-Brown `#2B1B12` · Sunset Amber `#E8A15C` · Sage `#8AA899` · Sand `#F3E9D7` · Forest `#234236` |
| Images | **Mix** — your real hotel photos + I source real location photos (Kune Falls, Duke's Nose, Karla/Bhaja) |
| Code | This GitHub repo (now in workspace) |
| Pricing | **"Starting from" only** — data already has it: Deluxe ₹2,899 · Balcony ₹3,899 · Suite ₹5,299 (`src/data/hotelData.ts`). Lowest = **₹2,899/night** to show in hero |

Preview of the new look: open `sunset-valley-preview.html` in this folder.
Full audit: `UPGRADE-PLAN.md` in this folder.

---

## Repo Map — What Everything Does

```
elite-hotel-khandala/
├── src/app/
│   ├── page.tsx          → Main page. Order: Navbar → Hero → BookingWidget → Rooms →
│   │                        Amenities → Dining → Gallery → Reviews → Location → FAQ → Contact → Footer
│   ├── layout.tsx        → SEO metadata + Hotel JSON-LD schema
│   └── globals.css       → Fonts (Playfair + Cormorant + Plus Jakarta Sans), hero drift, fade-up, overlays
├── src/data/hotelData.ts → ⭐ SINGLE SOURCE OF TRUTH: hotel info, 3 rooms + prices, 8 amenities,
│                            6 attractions, 3 reviews, 6 FAQs, 8 gallery items. Edit here = updates everywhere.
├── src/components/       → 17 components (see table below)
│   └── ui/ScrollReveal.tsx → Scroll-triggered reveal (IntersectionObserver) — already exists, under-used
├── public/images/hotel/  → 10 JPGs, 764KB–1,008KB each (~8.7MB total) ⚠️ AI-generated, to be replaced
├── tailwind.config.js    → brand (gold/brown) + resort (dark green/cream) tokens — Sunset palette goes here
├── next.config.mjs       → Allows Unsplash + Google user images
└── src/app/api/enquiry/route.ts → Lead/enquiry API endpoint
```

### Components
| Component | Used? | Notes |
|---|---|---|
| Navbar, Hero, BookingWidget | ✅ | Hero uses exterior.jpg + fade-up only |
| RoomsSection + RoomModal | ✅ | RoomModal used via RoomsSection |
| Amenities, DiningExperiences, CategorizedGallery | ✅ | Gallery has lightbox + filters |
| ReviewsSection, LocationAttractions, FaqSection | ✅ | Location has map embed |
| ContactWhatsApp, Footer, QuickEnquiryModal | ✅ | Booking modal + lead form |
| FloatingWhatsApp, MobileStickyBar | ✅ | Mobile bar: Call / WhatsApp / Check Dates |
| **ClientPitchBanner** | ❌ Orphan | Not imported in page.tsx — delete or repurpose as Offers banner |
| **PropertyIntro** | ❌ Orphan | Not imported in page.tsx — could become the "Monsoon Story" scroll section |

---

## Issues Found While Connecting (to fix in upgrade)

1. **Rating mismatch** — `hotelData.ts` & Hero: **4.3 / 1,050+** · README: **4.2 / 380+** · `layout.tsx` schema: **4.2**. → Confirm one true number.
2. **Hardcoded colours everywhere** — `#C5A880` x129, `#0E1411` x50 in components. Sunset palette must go into `tailwind.config.js` + CSS vars first, then replace. Don't find-replace blindly (gold on dark vs light differs).
3. **Images ~8.7MB JPG** — switch to Next `<Image>` WebP, lazy-load, blur placeholders. Target <1.5MB total.
4. **Unsplash placeholders** for Tiger's Leap, Bhushi Dam, Karla/Bhaja in hotelData.ts (lines 249–265) — replace with real location photos per your "Mix" choice. Note: Bhushi image is currently a *beach* photo — wrong.
5. **Scroll experience thin** — ScrollReveal exists but most sections don't use it; only hero has fade-up + drift. Plan: parallax hero, sticky booking bar, marquee, counters, horizontal gallery (see UPGRADE-PLAN.md §5).
6. **Next.js 16 warning** — `AGENTS.md` says this Next version has breaking changes; read `node_modules/next/dist/docs/` before editing APIs. Build currently passes, so changes will be styling/content-level (safe).
7. **Env** — only optional webhooks/email in `.env.example`. No secrets in repo ✅. Local `.env.local` not needed to run.

---

## How We'll Work Now
1. **You:** upload real hotel photos (ZIP here in chat) + confirm rating/reviews + confirm ₹2,899 "starting from" is correct to display
2. **Me:** apply Sunset Valley palette → replace images (yours graded + real location photos sourced) → premium scroll (Framer-motion-style reveals via existing ScrollReveal + CSS, no heavy deps unless needed) → show you **live preview** from this workspace
3. **You approve** → I commit/push prep: I'll give you the changed files + push instructions (or a patch ZIP) for Vercel redeploy

**Run locally anytime:** `npm run dev` (in this folder) · **Build check:** `npm run build` ✅
