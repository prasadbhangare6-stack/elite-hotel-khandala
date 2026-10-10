# 🏔️ Elite Hotel Khandala — Luxury Hospitality Website Demo

> **Client Acquisition Project**: A visual-first, conversion-focused luxury hotel website crafted to pitch and acquire **Elite Hotel, Khandala** (Maharashtra, India) as a direct web client.

---

## 📍 Property Overview

- **Hotel Name:** Elite Hotel, Khandala
- **Address:** CTS 295, Plot No. 2, B P Road, Opposite Kamat Hotel, Kune Village, Khandala, Lonavala, Maharashtra - 410301
- **Reception Phone & WhatsApp:** +91 79720 01916
- **Google Maps:** [https://maps.app.goo.gl/xFJ6PueNaAgiHDD58](https://maps.app.goo.gl/xFJ6PueNaAgiHDD58)
- **Guest Rating:** 4.2 / 5.0 (380+ Verified Ratings across MakeMyTrip & Google)
- **Proximity:** 800m to Khandala Railway Station, 1.8km to Kune Falls, 2 mins from Mumbai-Pune Expressway exit.

---

## 🎯 Key Objectives

1. **Eliminate 18%–22% OTA Commissions:** Convert third-party aggregator visitors into direct, commission-free bookings.
2. **Instant WhatsApp Direct Booking:** Cater to high-intent weekend road-trippers from Mumbai and Pune with 1-click WhatsApp reservations.
3. **Elevate Hill Station Visual Branding:** Spotlight the property’s signature **Super Deluxe Balcony Rooms** overlooking Sahyadri mountain mist.
4. **Build Direct Guest Loyalty:** Retain 100% of guest data for repeat weekend and monsoon holiday promotions.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (custom luxury resort palette: champagne gold, forest emerald, warm sand, charcoal)
- **Icons:** Lucide React
- **Typography:** Playfair Display, Cormorant Garamond, Plus Jakarta Sans

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```
F:\Elite\
├── src/
│   ├── app/
│   │   ├── globals.css           # Luxury design system, fonts & custom scrollbars
│   │   ├── layout.tsx            # Metadata, OpenGraph & Hotel JSON-LD schema
│   │   └── page.tsx              # Coordinated homepage with modal state
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky header, announcement bar, mobile drawer
│   │   ├── Hero.tsx              # Cinematic hero & trust badges
│   │   ├── BookingWidget.tsx     # Interactive booking bar with validation
│   │   ├── PropertyIntro.tsx     # Editorial intro on Khandala setting
│   │   ├── RoomsSection.tsx      # Verified room categories & specs
│   │   ├── RoomModal.tsx         # Comprehensive room detail modal
│   │   ├── AmenitiesSection.tsx  # Verified facilities grid
│   │   ├── DiningExperiences.tsx # In-house dining & excursions
│   │   ├── CategorizedGallery.tsx# Filterable gallery & Lightbox
│   │   ├── ReviewsSection.tsx    # Verified reviews & OTA ROI pitch
│   │   ├── LocationAttractions.tsx# Verified address & transit times
│   │   ├── ContactWhatsApp.tsx   # Enquiry form & WhatsApp desk
│   │   ├── FaqSection.tsx        # Interactive FAQ accordion
│   │   ├── Footer.tsx            # Verified policies & legal disclaimer
│   │   ├── QuickEnquiryModal.tsx # Simulated reservation & night calculation
│   │   ├── FloatingWhatsApp.tsx  # Fixed corner WhatsApp CTA
│   │   └── ClientPitchBanner.tsx # Interactive presentation helper
│   └── data/
│       └── hotelData.ts          # Central verified property dataset
├── tailwind.config.js            # Custom design tokens
├── next.config.mjs               # Image domain configurations
└── tsconfig.json                 # TypeScript compiler configuration
```

---

## 🌐 Deploy to Vercel (1-Click)

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Elite Hotel Khandala demo"
   git remote add origin https://github.com/your-username/elite-hotel.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Deploy to get your live URL (e.g., `https://elite-hotel-khandala.vercel.app`).
