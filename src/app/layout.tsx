import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://elitehotelkhandala.com'),
  title: 'Elite Hotel Khandala | Boutique Stay, Balcony Rooms & Suites in Sahyadri Hills',
  description:
    'Experience serene comfort at Elite Hotel Khandala on B P Road. Featuring spacious AC rooms, scenic Sahyadri mist balconies, luxury suite with bathtub, on-site multi-cuisine dining, and 5-minute access to Kune Falls. Book direct for best rates and zero platform fees.',
  keywords: [
    'Elite Hotel Khandala',
    'Hotel in Khandala',
    'Khandala resort with balcony',
    'Khandala hotel near railway station',
    'hotel near Kune Falls Khandala',
    'luxury rooms in Khandala',
    'weekend getaway from Mumbai to Khandala',
    'best hotel in Khandala Lonavala',
  ],
  authors: [{ name: 'Elite Hotel Khandala' }],
  openGraph: {
    title: 'Elite Hotel Khandala | Luxury Boutique Mountain Stay',
    description:
      'Where Sahyadri Mist Meets Refined Comfort. Book directly for best rates, complimentary early check-in assistance, and authentic in-house dining.',
    url: 'https://elitehotelkhandala.com',
    siteName: 'Elite Hotel Khandala',
    images: [
      {
        url: '/images/hotel/exterior.jpg',
        width: 1200,
        height: 630,
        alt: 'Elite Hotel Khandala Boutique Grounds & Facade',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Hotel Khandala | Where Sahyadri Mist Meets Refined Comfort',
    description:
      'Spacious AC rooms, scenic balconies, multi-cuisine dining, and quick 90-minute drive from Mumbai and Pune.',
    images: ['/images/hotel/exterior.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'Elite Hotel Khandala',
    image: 'https://elitehotelkhandala.com/images/hotel/exterior.jpg',
    description:
      'Boutique hotel in Khandala, Maharashtra offering AC rooms, scenic balconies, on-site restaurant and bar, 800m from Khandala station.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'CTS 295, Plot No. 2, B P Road, Opposite Kamat Hotel, Kune Village',
      addressLocality: 'Khandala, Lonavala',
      addressRegion: 'Maharashtra',
      postalCode: '410301',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.7573475,
      longitude: 73.3770696,
    },
    telephone: '+917972001916',
    priceRange: '₹₹',
    starRating: {
      '@type': 'Rating',
      ratingValue: '4.2',
    },
    checkinTime: '12:00',
    checkoutTime: '10:00',
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-[#C5A880] selection:text-stone-950">
        {children}
      </body>
    </html>
  );
}
