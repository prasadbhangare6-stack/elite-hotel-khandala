# Deploy Elite Hotel Khandala — Premium Website

This package is the complete upgraded website (Next.js 16 + React 19 + Tailwind).
It builds cleanly: `npm run build` ✅ (verified). No secrets inside — only `.env.example`.

---

## Option A — Antigravity → GitHub → Vercel (your flow)

### 1. In Antigravity
1. Unzip this package. Open the **folder** `elite-hotel-khandala` as the project in Antigravity.
2. Open Terminal in Antigravity and run:
   ```bash
   npm install
   npm run build
   npm run dev
   ```
   Open the localhost link it shows to preview.

### 2. Push to GitHub (same repo, updates your live site)
If this folder is already your repo clone:
```bash
git add .
git commit -m "feat: premium cinematic Taj+Della edition — parallax, pinned scroll, offers, experiences"
git push origin main
```
If it's a fresh unzip (no `.git` folder), connect it to your repo:
```bash
git init
git add .
git commit -m "feat: premium cinematic edition"
git branch -M main
git remote add origin https://github.com/prasadbhangare6-stack/elite-hotel-khandala.git
git push -u origin main --force
```
> ⚠️ `--force` overwrites GitHub with this upgraded code — that's what you want here,
> because this package IS the latest version of the same website.

### 3. Vercel (auto-deploys if already connected)
- If your Vercel project is already linked to that GitHub repo, **pushing is enough** —
  Vercel will build & go live in ~1–2 minutes. Check vercel.com → your project → Deployments.
- First-time setup: vercel.com → **Add New → Project** → Import
  `prasadbhangare6-stack/elite-hotel-khandala` → Framework auto-detects **Next.js** →
  Root Directory: `./` → **Deploy**. No env variables required.
- Optional env vars (only if you want leads by email/Sheets): see `.env.example`
  (`LEAD_WEBHOOK_URL`, `RESEND_API_KEY`) — add them in Vercel → Settings → Environment Variables.

---

## Option B — Vercel CLI (direct from this folder, no GitHub)
```bash
npm i -g vercel
vercel login
vercel --prod
```

## Option C — Drag & drop on Vercel (no code)
vercel.com → Add New → Project → **Deploy from ZIP / folder** if offered in your dashboard,
or use Option B — it's the same result.

---

## Local commands
| Command | Use |
|---|---|
| `npm install` | Install dependencies (first time) |
| `npm run dev` | Local preview (localhost:3000) |
| `npm run build` | Production build check |
| `npm run start` | Run the production build locally |

## What's inside
- `src/` — all pages & components (Hero, Rooms, Dining, TajDella, Cinematic, PremiumMotion…)
- `public/images/hotel/` — real hotel + real Khandala location photos (optimised)
- `src/data/hotelData.ts` — **edit hotel facts here** (prices, rating, rooms) — the whole site updates
- `CHANGELOG-PREMIUM.md` — everything that was changed & tested
- Verified: 4.8★ / 2,243 reviews · ₹2,468 starting rate · WhatsApp +91 79720 01916 · Enquiry API `/api/enquiry`

## Troubleshooting
- *Build fails in Antigravity?* Delete `node_modules` + `.next`, run `npm install` again.
- *Vercel shows old site?* Vercel → Deployments → latest must say the new commit message; hard-refresh (Ctrl+Shift+R).
- *Images not loading?* Make sure the `public` folder was uploaded with the code (it must be in the ZIP — it is).
