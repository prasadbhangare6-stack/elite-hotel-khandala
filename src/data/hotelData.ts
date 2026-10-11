export interface RoomCategory {
  id: string;
  name: string;
  shortBenefit: string;
  keyDetails: [string, string, string]; // Exactly 3 key details for scannable cards
  size: string;
  occupancy: string;
  bedType: string;
  view: string;
  pricePerNight: number;
  featured: boolean;
  heroImage: string;
  galleryImages: string[];
  description: string;
  amenities: string[];
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  icon: string;
  verified: boolean;
}

export interface LocalAttraction {
  name: string;
  distance: string;
  driveTime: string;
  description: string;
  image: string;
  type: 'Nature' | 'Heritage' | 'Transit' | 'Viewpoint';
}

export interface GuestReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  tripType: string;
  comment: string;
  platform: 'Verified Review' | 'Google Reviews' | 'Guest Stay';
}

export const HOTEL_INFO = {
  name: 'Elite Hotel',
  legalName: 'Elite Hotel Khandala',
  tagline: 'A Serene Boutique Sanctuary in the Sahyadris',
  location: 'Khandala, Maharashtra',
  address: 'CTS 295, Plot No. 2, B P Road, Opposite Kamat Hotel, Kune Village, Khandala, Lonavala, Maharashtra 410301',
  phone: '+91 79720 01916',
  phoneDisplay: '+91 79720 01916',
  email: 'stay@elitehotelkhandala.com',
  whatsapp: '917972001916',
  whatsappMessage: 'Hello Elite Hotel Khandala, I would like to inquire about room availability for an upcoming stay.',
  googleMapsUrl: 'https://maps.google.com/?q=Elite+Hotel+Khandala,+Opposite+Kamat+Hotel,+B+P+Road,+Khandala+410301',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Elite+Hotel+Khandala,+Opposite+Kamat+Hotel,+Khandala,+Maharashtra+410301&t=&z=15&ie=UTF8&iwloc=&output=embed',
  checkIn: '12:00 PM',
  checkOut: '10:00 AM',
  rating: 4.3,
  reviewCount: 1050,
  starRating: '3-Star Boutique Mountain Stay',
  policyCoupleFriendly: 'Couple-friendly with valid Government ID (Aadhaar, Passport, Voter ID, Driving License)',
};

export const ROOMS: RoomCategory[] = [
  {
    id: 'ac-deluxe',
    name: 'Deluxe King Room',
    shortBenefit: 'Quiet comfort with plush bedding and restful garden views after a day in the hills.',
    keyDetails: ['220 sq. ft.', '2 Guests', 'King Bed & Climate AC'],
    size: '220 sq. ft.',
    occupancy: '2 Adults, 1 Child',
    bedType: 'King-Size Bed',
    view: 'Garden & Mountain Breeze',
    pricePerNight: 2899,
    featured: false,
    heroImage: '/images/hotel/deluxe-room.jpg',
    galleryImages: [
      '/images/hotel/deluxe-room.jpg',
      '/images/hotel/reception.jpg',
      '/images/hotel/exterior.jpg',
    ],
    description: 'A quiet, thoughtfully appointed sanctuary for couples and road-trippers seeking restful quiet in Khandala. Features individually controlled air conditioning, plush king bedding, work desk, and swift access to Western Ghat viewpoints.',
    amenities: [
      'Climate Air Conditioning',
      'Plush King-Size Bed',
      'Flat-Screen Smart TV',
      'High-Speed Wi-Fi',
      'Private En-Suite with 24/7 Hot Water',
      'Work & Dressing Console',
      'Complimentary Bottled Water',
      'Daily Housekeeping',
    ],
  },
  {
    id: 'ac-super-deluxe',
    name: 'Super Deluxe Balcony Room',
    shortBenefit: 'Wake up to cool mountain breezes and rolling Sahyadri mist from your private balcony.',
    keyDetails: ['290 sq. ft.', '2–3 Guests', 'Private Hill Balcony'],
    size: '290 sq. ft.',
    occupancy: '2 - 3 Adults',
    bedType: 'King Bed + Seating Lounge',
    view: 'Private Hill & Sahyadri Mist Balcony',
    pricePerNight: 3899,
    featured: true,
    heroImage: '/images/hotel/balcony-room.jpg',
    galleryImages: [
      '/images/hotel/balcony-room.jpg',
      '/images/hotel/balcony-mist.jpg',
      '/images/hotel/exterior.jpg',
    ],
    description: 'Immerse yourself in Khandala’s legendary hill air. Step directly onto your private balcony for morning tea while valley clouds pass over the ridge. Offers an expanded layout with comfortable seating lounge.',
    amenities: [
      'Private Scenic Balcony',
      'Hill & Mountain Mist Views',
      'King-Size Bed & Lounge Seating',
      'Climate Air Conditioning',
      'Electric Tea & Coffee Maker',
      'Modern Rain Shower En-Suite',
      'Flat-Screen Smart TV',
      'High-Speed Wi-Fi',
      'In-Room Dining Service',
    ],
  },
  {
    id: 'ac-suite',
    name: 'Executive Suite with Bathtub',
    shortBenefit: 'Expansive indulgence featuring a private soaking tub, master bedroom, and dedicated lounge.',
    keyDetails: ['325 sq. ft.', 'Up to 4 Guests', 'Private Soaking Tub'],
    size: '325 sq. ft.',
    occupancy: '2 - 4 Adults',
    bedType: 'Master King Bed + Convertible Sofa Bed',
    view: 'Panoramic Khandala Valley Vista',
    pricePerNight: 5299,
    featured: false,
    heroImage: '/images/hotel/executive-suite.jpg',
    galleryImages: [
      '/images/hotel/executive-suite.jpg',
      '/images/hotel/balcony-mist.jpg',
      '/images/hotel/deluxe-room.jpg',
    ],
    description: 'Our most spacious accommodation, designed for families and discerning travellers who appreciate extra room. Features a dedicated relaxation lounge, an expansive master bedroom, and an en-suite with a private deep-soaking bathtub.',
    amenities: [
      'Private Deep Soaking Bathtub',
      'Dedicated Living Lounge Area',
      'Convertible Sofa Bed',
      'Master King-Size Bed',
      'Mini-Refrigerator Bar',
      'Premium Linens & Toiletries',
      'Climate Air Conditioning',
      'High-Speed Wi-Fi',
      'Priority Concierge Service',
    ],
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: 'wifi',
    name: 'High-Speed Wi-Fi',
    description: 'Fast, dependable Wi-Fi coverage across all guest rooms, dining, and public areas.',
    icon: 'Wifi',
    verified: true,
  },
  {
    id: 'ac',
    name: 'Climate Air Conditioning',
    description: 'Individual temperature controls in every room for year-round personal comfort.',
    icon: 'Wind',
    verified: true,
  },
  {
    id: 'dining',
    name: 'Multi-Cuisine Restaurant & Bar',
    description: 'Hot Maharashtrian specialties, authentic Indian dishes, and evening refreshments.',
    icon: 'UtensilsCrossed',
    verified: true,
  },
  {
    id: 'balcony',
    name: 'Scenic Hill Balconies',
    description: 'Private open balconies overlooking Khandala mist and lush valley vegetation.',
    icon: 'Mountain',
    verified: true,
  },
  {
    id: 'parking',
    name: 'Complimentary Secure Parking',
    description: 'Hassle-free, on-site car parking right on B P Road, ideal for road-trippers.',
    icon: 'Car',
    verified: true,
  },
  {
    id: 'frontdesk',
    name: '24/7 Front Desk & Concierge',
    description: 'Round-the-clock front desk assistance, fast check-in, and local sight recommendations.',
    icon: 'Clock',
    verified: true,
  },
  {
    id: 'playarea',
    name: 'Children’s Play Space',
    description: 'Dedicated recreational space on property for visiting family travellers.',
    icon: 'Smile',
    verified: true,
  },
  {
    id: 'power',
    name: '100% Power Backup',
    description: 'Continuous generator backup ensuring uninterrupted comfort in all seasons.',
    icon: 'Zap',
    verified: true,
  },
];

export const ATTRACTIONS: LocalAttraction[] = [
  {
    name: 'Kune Waterfalls',
    distance: '1.8 km',
    driveTime: '5 mins',
    type: 'Nature',
    description: 'India’s 14th highest waterfall, cascading 200 meters in three tiers against dramatic Sahyadri cliffs.',
    image: '/images/hotel/kune-falls.jpg',
  },
  {
    name: 'Khandala Railway Station',
    distance: '800 m',
    driveTime: '3 mins',
    type: 'Transit',
    description: 'A short auto-rickshaw hop or brief walk away, offering easy rail connectivity from Mumbai and Pune.',
    image: '/images/hotel/khandala-station.jpg',
  },
  {
    name: 'Duke’s Nose (Nagphani)',
    distance: '4.2 km',
    driveTime: '12 mins',
    type: 'Viewpoint',
    description: 'Iconic cliff formation offering exhilarating trekking and 360-degree sunset panoramas.',
    image: '/images/hotel/dukes-nose.jpg',
  },
  {
    name: 'Tiger’s Leap & Lion’s Point',
    distance: '9.5 km',
    driveTime: '20 mins',
    type: 'Viewpoint',
    description: 'A dramatic 650m sheer drop cliff with exhilarating valley echoes and evening mist.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Bhushi Dam & Waterfalls',
    distance: '7.8 km',
    driveTime: '18 mins',
    type: 'Nature',
    description: 'Famous stepped waterfall and masonry dam where refreshing mountain waters overflow.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Karla & Bhaja Buddhist Caves',
    distance: '14.0 km',
    driveTime: '25 mins',
    type: 'Heritage',
    description: 'Ancient 2nd-century BC rock-cut Buddhist chaityas and monasteries carved deep into the basalt rock.',
    image: 'https://images.unsplash.com/photo-1599817799583-0a77f980e1a1?auto=format&fit=crop&w=800&q=80',
  },
];

export const REVIEWS: GuestReview[] = [
  {
    id: 'rev-1',
    author: 'Rajesh M.',
    location: 'Pune',
    rating: 5,
    date: 'Recent Stay',
    tripType: 'Family Trip',
    comment: 'Great location right on the main Khandala road, opposite Kamat. Very easy to find and park. The food at their on-site restaurant was hot, fresh, and delicious. Staff attended to every request promptly.',
    platform: 'Verified Review',
  },
  {
    id: 'rev-2',
    author: 'Priya & Amit S.',
    location: 'Mumbai',
    rating: 5,
    date: 'Weekend Stay',
    tripType: 'Couples Retreat',
    comment: 'We booked the Super Deluxe with balcony. Waking up to the cool Khandala breeze and morning mist made our weekend drive from Mumbai completely worthwhile. Clean rooms, comfortable king bed, and prompt service.',
    platform: 'Google Reviews',
  },
  {
    id: 'rev-3',
    author: 'Dr. Nikhil K.',
    location: 'Thane',
    rating: 4,
    date: 'Monsoon Break',
    tripType: 'Leisure Trip',
    comment: 'Very practical and comfortable stay. Close to Khandala station and just 5 minutes from Kune Falls. Good AC, generator backup was working when it rained heavily, and staff was very polite.',
    platform: 'Verified Review',
  },
];

export const FAQS = [
  {
    question: 'What are the check-in and check-out timings?',
    answer: 'Standard check-in is from 12:00 PM onwards, and check-out is by 10:00 AM. When booking directly with our front desk, early arrival or late check-out requests are prioritized subject to availability.',
  },
  {
    question: 'How far is Elite Hotel from Khandala Railway Station?',
    answer: 'The property is located just 800 meters from Khandala Railway Station (approximately 3 minutes by auto-rickshaw or a 10-minute walk). It is also only 2 minutes from the Mumbai-Pune Expressway exit.',
  },
  {
    question: 'Is car parking available on-site?',
    answer: 'Yes, we provide complimentary, dedicated on-site parking for all our registered guests right at the property along B P Road.',
  },
  {
    question: 'What dining options are available at the hotel?',
    answer: 'Our on-site restaurant serves freshly prepared Maharashtrian specialties, North Indian curries, vegetarian options, and morning breakfast. In-room dining is also available.',
  },
  {
    question: 'What identity documents are required for check-in?',
    answer: 'As per government guidelines, all adult guests (18 years and above) must present a valid government-issued photo ID (Aadhaar Card, Passport, Voter ID, or Driving License) at the time of check-in.',
  },
  {
    question: 'Why should I reserve directly through this website?',
    answer: 'Direct reservations receive our best available direct rate, personal front-desk assistance, priority room placement, and zero middleman booking surcharges.',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    category: 'Rooms',
    title: 'Super Deluxe Balcony Room',
    image: '/images/hotel/balcony-room.jpg',
    caption: 'Airy, light-filled bedroom with attached scenic mist balcony',
  },
  {
    id: 'g2',
    category: 'Rooms',
    title: 'Executive Suite & Soaking Tub',
    image: '/images/hotel/executive-suite.jpg',
    caption: 'Master suite featuring dedicated lounge and valley bathtub',
  },
  {
    id: 'g3',
    category: 'Rooms',
    title: 'Deluxe King Bedroom',
    image: '/images/hotel/deluxe-room.jpg',
    caption: 'Comfortable king bed and work desk in Deluxe Room',
  },
  {
    id: 'g4',
    category: 'Property',
    title: 'Elite Hotel Facade & Parking',
    image: '/images/hotel/exterior.jpg',
    caption: 'Boutique mountain property on B P Road opposite Kamat Hotel',
  },
  {
    id: 'g5',
    category: 'Dining',
    title: 'In-House Multi-Cuisine Dining',
    image: '/images/hotel/restaurant.jpg',
    caption: 'Warm dining terrace and bar serving authentic hot meals',
  },
  {
    id: 'g6',
    category: 'Property',
    title: '24/7 Front Desk & Reception',
    image: '/images/hotel/reception.jpg',
    caption: 'Welcoming front desk lobby with round-the-clock check-in assistance',
  },
  {
    id: 'g7',
    category: 'Surroundings',
    title: 'Khandala Mountain Mist View',
    image: '/images/hotel/balcony-mist.jpg',
    caption: 'Rolling Sahyadri mist and morning chai from the room balcony',
  },
  {
    id: 'g8',
    category: 'Surroundings',
    title: 'Kune Waterfalls (5 mins away)',
    image: '/images/hotel/kune-falls.jpg',
    caption: 'Cascading 200m waterfall just 1.8 km from Elite Hotel',
  },
];
