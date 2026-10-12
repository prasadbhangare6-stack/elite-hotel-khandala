# 🏔️ Elite Hotel Khandala — Luxury Hospitality Website & Direct Booking Engine

[![Next.js 16](https://img.shields.io/badge/Next.js-16.4.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.3.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-gold?style=for-the-badge)](LICENSE)

> **High-Converting Web Experience & Direct Booking System**: A bespoke, visual-first hotel website engineered to establish a premier direct booking presence for **Elite Hotel, Khandala** (Maharashtra, India) — capturing high-intent road-trippers from Mumbai and Pune while eliminating hefty 18%–22% OTA commissions.

---

## 📌 Table of Contents

- [Overview & Client Rationale](#-overview--client-rationale)
- [Verified Property Records](#-verified-property-records)
- [Key Features](#-key-features)
- [Commercial ROI & The OTA Problem](#-commercial-roi--the-ota-problem)
- [Technology Stack](#-technology-stack)
- [Project Architecture](#-project-architecture)
- [API Reference](#-api-reference)
- [Quick Start & Local Setup](#-quick-start--local-setup)
- [Environment Configuration](#-environment-configuration)
- [Deployment Guide](#-deployment-guide)
- [Author & Credits](#-author--credits)
- [License](#-license)

---

## 🌟 Overview & Client Rationale

Weekend travelers from Mumbai and Pune searching for mountain stays in Khandala and Lonavala routinely book via Online Travel Agencies (OTAs) such as MakeMyTrip, Goibibo, Agoda, and Booking.com. This results in:
- **Hefty Commission Losses:** 18% to 22% of gross booking revenue paid to intermediaries.
- **Lost Direct Guest Relationships:** OTAs mask customer phone numbers and emails, preventing re-marketing for monsoon retreats and festival weekends.
- **Underrepresented Hill Station Aesthetics:** Standard OTA grids cannot convey the signature **Super Deluxe Balcony mist views** or proximity to Kune Falls.

This platform bridges that gap by offering a **luxury boutique website with instant WhatsApp reservation inquiry, interactive stay night calculator, verified room photography, and Google Maps transit integrations.**

---

## 📍 Verified Property Records

| Attribute | Verified Value |
| :--- | :--- |
| **Property Name** | **Elite Hotel, Khandala** |
| **Legal / Brand Entity** | Elite Hotel Khandala |
| **Physical Address** | CTS 295, Plot No. 2, B P Road, Opposite Kamat Hotel, Kune Village, Khandala, Lonavala, Maharashtra — 410301 |
| **Phone & Direct Desk** | `+91 79720 01916` |
| **WhatsApp Direct Desk** | `+91 79720 01916` ([Chat Now](https://wa.me/917972001916)) |
| **Official Email** | `stay@elitehotelkhandala.com` |
| **Check-in / Check-out** | Check-in: **12:00 PM** \| Check-out: **10:00 AM** |
| **Guest Rating** | **4.2 / 5.0** (Over 380+ verified reviews on MakeMyTrip & Google) |
| **Classification** | 3-Star Boutique Mountain Stay |
| **Couple Friendly** | Yes (Valid Govt ID: Aadhaar, Passport, Voter ID, Driving License) |
| **Location Advantage** | Opposite Kamat Hotel, 800m to Khandala Railway Station, 2 mins from Mumbai-Pune Expressway exit |
| **Google Maps Embed** | [Interactive Map View](https://maps.google.com/?q=Elite+Hotel+Khandala,+Opposite+Kamat+Hotel,+B+P+Road,+Khandala+410301) |

---

## 🚀 Key Features

### 1. 🛏️ Verified Room Catalog & Detail Modals
Three carefully segmented room types catering to couples, families, and road-trippers:
- **Deluxe King Room** (220 sq. ft. · King Bed · AC · Garden View) — *From ₹2,899/night*
- **Super Deluxe Balcony Room** (290 sq. ft. · Private Hill & Mist Balcony · Lounge) — *From ₹3,899/night* ⭐ *Signature Selection*
- **Executive Suite with Bathtub** (325 sq. ft. · Deep Soaking Tub · Master King + Sofa Bed) — *From ₹5,299/night*

### 2. 📲 Instant 1-Tap WhatsApp Direct Booking
- Pre-populates guest reservation queries with **Lead Reference ID**, check-in/check-out dates, guest count, and selected room type.
- Dispatches directly to the hotel front desk via WhatsApp URL scheme with zero middleman friction.

### 3. 📅 Interactive Stay & Night Calculator
- Dynamic check-in and check-out validation.
- Real-time night count calculation and estimated room tariff tally.
- Built-in adult and child count selectors with room capacity guidelines.

### 4. 🖼️ Categorized Photography Gallery & Lightbox
- High-resolution real photography of the property exterior, balcony views, deluxe rooms, reception, restaurant, and surrounding mist.
- Instant category filter: *All*, *Rooms*, *Property*, *Dining*, and *Surroundings*.
- Interactive modal lightbox for full-screen photo browsing.

### 5. 🗺️ Location & Transit Matrix
- Exact driving and transit distances from Mumbai-Pune Expressway, Khandala Railway Station (800m), Kune Falls (1.8km), Duke’s Nose (4.2km), Tiger's Leap (9.5km), and Bhushi Dam (7.8km).
- Embedded interactive Google Map iframe with direct GPS routing button.

### 6. 📱 Mobile-First Sticky Action Bar
- Pinned bottom bar on mobile screens with instant **Call Now**, **WhatsApp Desk**, and **Check Availability** buttons for travelers on the go.

### 7. 🔍 Local SEO & Schema Markup
- Structured JSON-LD metadata for `Hotel` / `LodgingBusiness` schema.
- OpenGraph and Twitter card integration for social sharing previews.

---

## 💰 Commercial ROI & The OTA Problem

| Factor | OTA Aggregators (MakeMyTrip / Goibibo) | Elite Hotel Direct Website |
| :--- | :--- | :--- |
| **Commission Deductions** | **18% – 22%** per confirmed stay | **0% Commission** (100% retained) |
| **Net on ₹3,899 Room Night** | Hotel receives approx **₹3,040** | Hotel receives full **₹3,899** (**+₹859 net gain**) |
| **Monthly ROI (150 Nights)** | ₹1,28,000+ lost in commissions | **₹1,28,000+ retained direct profit** |
| **Guest Data Ownership** | Masked / retained by OTA | **100% Direct Guest Relationship** for re-marketing |
| **Booking Flexibility** | Rigid cancellation disputes | Direct WhatsApp communication with front desk |

---

## 🛠️ Technology Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Server Components & Turbopack)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict typing across property models and enquiry payloads)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) with custom luxury tokens:
  - *Champagne Gold:* `#D4AF37`
  - *Forest Emerald:* `#1B4332`
  - *Warm Sand:* `#FAF8F5`
  - *Charcoal:* `#1A1A1A`
- **Typography:** Playfair Display, Cormorant Garamond & Plus Jakarta Sans
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment Platform:** [Vercel](https://vercel.com/)

---

## 📂 Project Architecture

```
F:\Elite\
├── public/
│   └── images/
│       └── hotel/                   # Verified property & surrounding photography
│           ├── exterior.jpg          # Hotel building facade & parking
│           ├── reception.jpg         # 24/7 front desk & lobby
│           ├── deluxe-room.jpg       # Deluxe King room interior
│           ├── balcony-room.jpg      # Super Deluxe Balcony room
│           ├── balcony-mist.jpg      # Khandala mountain mist from room balcony
│           ├── executive-suite.jpg   # Executive suite & bathtub
│           ├── restaurant.jpg        # Multi-cuisine dining terrace
│           ├── kune-falls.jpg        # Nearby Kune Waterfalls (1.8 km)
│           ├── dukes-nose.jpg        # Duke's Nose cliff viewpoint (4.2 km)
│           └── khandala-station.jpg  # Khandala Railway Station (800 m)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── enquiry/
│   │   │       └── route.ts          # Serverless lead ingestion, WhatsApp pre-fill & webhook handler
│   │   ├── globals.css               # Luxury resort design system, font variables & utilities
│   │   ├── layout.tsx                # Hotel JSON-LD metadata & responsive layout shell
│   │   └── page.tsx                  # Coordinated homepage with modal state management
│   ├── components/
│   │   ├── AmenitiesSection.tsx      # Verified facilities grid (Wi-Fi, AC, restaurant, parking, etc.)
│   │   ├── BookingWidget.tsx         # Interactive availability search bar with date pickers
│   │   ├── CategorizedGallery.tsx    # Filterable photography gallery & Lightbox modal
│   │   ├── ContactWhatsApp.tsx       # Direct reservation enquiry form & WhatsApp desk
│   │   ├── DiningExperiences.tsx     # On-site restaurant specialties & local excursions
│   │   ├── FaqSection.tsx            # Interactive FAQ accordion with verified policies
│   │   ├── FloatingWhatsApp.tsx      # Floating WhatsApp CTA button
│   │   ├── Footer.tsx                # Property address, contact, legal disclaimer & policies
│   │   ├── Hero.tsx                  # Cinematic hero banner, trust indicators & instant booking CTA
│   │   ├── LocationAttractions.tsx   # Verified transit matrix & interactive Google Maps embed
│   │   ├── MobileStickyBar.tsx       # Fixed bottom action bar for mobile devices
│   │   ├── Navbar.tsx                # Sticky luxury header, contact desk banner & mobile drawer
│   │   ├── PropertyIntro.tsx         # Editorial overview of Khandala hill setting
│   │   ├── QuickEnquiryModal.tsx     # Interactive reservation modal with night & tariff calculator
│   │   ├── ReviewsSection.tsx        # Guest testimonials & OTA direct booking value comparison
│   │   ├── RoomModal.tsx             # Full-screen room spec sheet, gallery & booking trigger
│   │   └── RoomsSection.tsx          # Scannable room category cards with specs & pricing
│   └── data/
│       └── hotelData.ts              # Single source of truth for hotel records, rooms, amenities & FAQs
├── .env.example                      # Template for optional CRM webhooks & email credentials
├── .gitignore                        # Git ignore rules for node_modules, .next, and env files
├── next.config.mjs                   # Next.js build & remote image domain configs
├── package.json                      # Project metadata, dependencies & npm scripts
├── postcss.config.js                 # PostCSS configuration for Tailwind
├── tailwind.config.js                # Custom luxury resort theme tokens & typography
└── tsconfig.json                     # TypeScript compiler options
```

---

## 📡 API Reference

### `POST /api/enquiry`

Records a reservation inquiry, logs server lead metadata, generates a unique Lead Reference ID (`ELT-YYMMDD-XXXX`), constructs a pre-formatted WhatsApp chat link, and optionally forwards data to CRM/Google Sheets or sends an email via Resend.

#### Request Body:
```json
{
  "fullName": "Rahul Sharma",
  "phone": "+91 98765 43210",
  "email": "rahul.sharma@example.com",
  "roomType": "Super Deluxe Balcony Room",
  "checkIn": "2026-10-18",
  "checkOut": "2026-10-20",
  "adults": 2,
  "message": "Prefer higher floor room overlooking valley mist.",
  "source": "website-direct"
}
```

#### Successful Response (`200 OK`):
```json
{
  "success": true,
  "leadId": "ELT-261012-4821",
  "whatsappUrl": "https://wa.me/917972001916?text=...",
  "leadRecord": {
    "leadId": "ELT-261012-4821",
    "receivedAt": "2026-10-12T16:48:00.000Z",
    "fullName": "Rahul Sharma",
    "phone": "+91 98765 43210",
    "roomType": "Super Deluxe Balcony Room",
    "checkIn": "2026-10-18",
    "checkOut": "2026-10-20",
    "status": "NEW_UNCONFIRMED"
  },
  "message": "Reservation inquiry recorded successfully."
}
```

---

## ⚡ Quick Start & Local Setup

### Prerequisites
- Node.js 18.18 or newer
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/prasadbhangare6-stack/elite-hotel-khandala.git
cd elite-hotel-khandala
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## ⚙️ Environment Configuration

Create a `.env.local` file by copying the template:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
| :--- | :--- | :--- |
| `LEAD_WEBHOOK_URL` | No | Webhook URL for CRM / n8n / Zapier lead ingestion |
| `GOOGLE_SHEETS_WEBHOOK_URL` | No | Google Apps Script endpoint to log leads to a Google Sheet |
| `RESEND_API_KEY` | No | Resend API key for instant email notifications to hotel desk |
| `LEAD_NOTIFICATION_EMAIL` | No | Destination email address for incoming booking alerts |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical website domain (e.g., `https://elite-hotel-khandala.vercel.app`) |

*(Note: The core website and WhatsApp booking engine work fully out-of-the-box without any environment variables).*

---

## ☁️ Deployment Guide

### Deploying to Vercel (Recommended)

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete luxury hotel website demo and direct booking system"
   git branch -M main
   git remote add origin https://github.com/prasadbhangare6-stack/elite-hotel-khandala.git
   git push -u origin main
   ```
2. Open [Vercel Dashboard](https://vercel.com/) and click **Add New > Project**.
3. Import the `elite-hotel-khandala` repository.
4. Leave build command as `next build` and output directory as `.next`.
5. Click **Deploy**. Vercel will provide a live production URL in under 60 seconds.

---

## 👤 Author & Credits

- **Developer & Designer:** [Prasad Bhangare](https://github.com/prasadbhangare6-stack) (`prasadbhangare6@gmail.com`)
- **Client Project Target:** Elite Hotel, Khandala (Opposite Kamat Hotel, B P Road, Khandala, Maharashtra)
- **Photography Records:** Verified real photography of Elite Hotel, Khandala property, amenities, and Western Ghat surroundings.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to use and adapt this architecture for luxury hospitality client presentations and web applications.
