export interface RoomCategory {
  id: string;
  name: string;
  subtitle: string;
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
  highlights: string[];
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
  platform: 'MakeMyTrip Verified' | 'Google Reviews' | 'Direct Guest';
}

export const HOTEL_INFO = {
  name: 'Elite Hotel',
  legalName: 'Elite Hotel Khandala',
  tagline: 'Where Sahyadri Mist Meets Refined Comfort',
  location: 'Khandala, Lonavala, Maharashtra',
  address: 'CTS 295, Plot No. 2, B P Road, Opposite Kamat Hotel, Kune Village, Khandala, Lonavala, Maharashtra 410301',
  phone: '+91 79720 01916',
  phoneDisplay: '+91 79720 01916',
  email: 'stay@elitehotelkhandala.com',
  whatsapp: '917972001916',
  whatsappMessage: 'Hello Elite Hotel Khandala, I would like to enquire about room availability for an upcoming stay.',
  googleMapsUrl: 'https://maps.app.goo.gl/xFJ6PueNaAgiHDD58',
  checkIn: '12:00 PM',
  checkOut: '10:00 AM',
  rating: 4.2,
  reviewCount: 380,
  starRating: '3-Star Premium Property',
};

export const ROOMS: RoomCategory[] = [
  {
    id: 'ac-deluxe',
    name: 'AC Deluxe Room',
    subtitle: 'Crisp comfort with garden & city views',
    size: '220 sq. ft.',
    occupancy: '2 Adults, 1 Child',
    bedType: 'King-Size Bed',
    view: 'Garden & Khandala Town View',
    pricePerNight: 2899,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A thoughtfully appointed sanctuary tailored for couples and road-trippers seeking restful quiet in Khandala. Featuring climate-controlled air conditioning, plush king bedding, and swift access to the Western Ghat attractions.',
    amenities: [
      'Climate Air Conditioning',
      'Plush King-Size Bed',
      'Flat-Screen Smart TV',
      'High-Speed Wi-Fi',
      'En-Suite Bathroom with 24/7 Hot Water',
      'Work & Dressing Desk',
      'Complimentary Bottled Water',
      'Daily Housekeeping',
    ],
    highlights: ['Best value for couples', 'Fast Wi-Fi', 'Quiet courtyard view'],
  },
  {
    id: 'ac-super-deluxe',
    name: 'AC Super Deluxe Room (with Balcony)',
    subtitle: 'Private balcony overlooking Sahyadri mountain mist',
    size: '290 sq. ft.',
    occupancy: '2 - 3 Adults',
    bedType: 'King-Size Bed + Lounge Seating',
    view: 'Private Hill & Sahyadri Mist Balcony',
    pricePerNight: 3899,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Immerse yourself in Khandala’s legendary hill breezes. Step directly onto your private balcony with morning chai while Sahyadri mist rolls across the ridges. Features an expanded floorplan with comfortable lounge seating.',
    amenities: [
      'Private Walk-Out Balcony',
      'Scenic Hill & Mist Views',
      'King-Size Bed + Lounge Seating',
      'Climate Air Conditioning',
      'Electric Kettle & Tea/Coffee Maker',
      'Modern Rain Shower En-Suite',
      'Flat-Screen Smart TV',
      'High-Speed Wi-Fi',
      '24/7 In-Room Dining Service',
    ],
    highlights: ['Private Balcony', 'Sahyadri Mist Views', 'Most Popular Choice'],
  },
  {
    id: 'ac-suite',
    name: 'AC Suite Room (with Bathtub)',
    subtitle: 'The flagship luxury suite with deep soaking bathtub & living lounge',
    size: '325 sq. ft.',
    occupancy: '2 - 4 Adults',
    bedType: 'Master King Bed + Convertible Sofa Bed',
    view: 'Panoramic Khandala Valley Vista',
    pricePerNight: 5299,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Our most spacious accommodation, designed for families and discerning guests who appreciate indulgence. Features a dedicated relaxation lounge, an expansive master bedroom, and a signature en-suite with a private deep-soaking bathtub.',
    amenities: [
      'Private Deep Soaking Bathtub',
      'Separate Living Lounge Area',
      'Comfortable Sofa Bed',
      'Master King-Size Bed',
      'Mini-Refrigerator & Refreshment Bar',
      'Premium Toiletries & Plush Bathrobes',
      'Climate Air Conditioning',
      'High-Speed Wi-Fi',
      'Priority Concierge & Room Service',
    ],
    highlights: ['Private Bathtub', 'Separate Living Area', 'Spacious 325 sq. ft.'],
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: 'wifi',
    name: 'High-Speed Wi-Fi',
    description: 'Fast, dependable Wi-Fi coverage across all guest rooms, restaurant, and public areas for seamless work and streaming.',
    icon: 'Wifi',
    verified: true,
  },
  {
    id: 'ac',
    name: 'Climate Air Conditioning',
    description: 'Individual temperature controls in every room to keep you comfortable after a day exploring the Sahyadri hills.',
    icon: 'Wind',
    verified: true,
  },
  {
    id: 'dining',
    name: 'Multi-Cuisine Restaurant & Bar',
    description: 'Savour hot Maharashtrian specialties, authentic North & South Indian dishes, and evening beverages at our on-site restaurant.',
    icon: 'UtensilsCrossed',
    verified: true,
  },
  {
    id: 'balcony',
    name: 'Private Hill Balconies',
    description: 'Selected rooms feature private balconies overlooking Khandala mist and lush valley vegetation.',
    icon: 'Mountain',
    verified: true,
  },
  {
    id: 'parking',
    name: 'Complimentary Secure Parking',
    description: 'Hassle-free, on-site car parking right on B P Road, ideal for road-trippers from Mumbai and Pune.',
    icon: 'Car',
    verified: true,
  },
  {
    id: 'frontdesk',
    name: '24/7 Front Desk & Concierge',
    description: 'Round-the-clock front desk assistance, fast check-in, and local sight recommendations from friendly staff.',
    icon: 'Clock',
    verified: true,
  },
  {
    id: 'playarea',
    name: 'Children’s Play Space',
    description: 'Dedicated recreational space on property to keep young travellers entertained during family getaways.',
    icon: 'Smile',
    verified: true,
  },
  {
    id: 'power',
    name: '100% Power Backup',
    description: 'Complete generator backup ensuring uninterrupted air conditioning and lighting throughout your stay.',
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
    image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Khandala Railway Station',
    distance: '800 m',
    driveTime: '3 mins',
    type: 'Transit',
    description: 'Just a short walk or quick rickshaw hop away, offering easy rail connectivity from Mumbai and Pune.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Duke’s Nose (Nagphani)',
    distance: '4.2 km',
    driveTime: '12 mins',
    type: 'Viewpoint',
    description: 'Iconic cliff formation named after the Duke of Wellington, offering panoramic trekking and sunset views.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Tiger’s Leap & Lion’s Point',
    distance: '9.5 km',
    driveTime: '20 mins',
    type: 'Viewpoint',
    description: 'A breathtaking 650m sheer drop cliff with exhilarating valley echoes and steaming roasted corn stalls.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Bhushi Dam & Waterfalls',
    distance: '7.8 km',
    driveTime: '18 mins',
    type: 'Nature',
    description: 'Famous stepped waterfall and masonry dam where refreshing mountain waters overflow in monsoon season.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Karla & Bhaja Buddhist Caves',
    distance: '14.0 km',
    driveTime: '25 mins',
    type: 'Heritage',
    description: 'Ancient 2nd-century BC rock-cut Buddhist chaityas and monasteries carved deep into the hill rock.',
    image: 'https://images.unsplash.com/photo-1599817799583-0a77f980e1a1?auto=format&fit=crop&w=800&q=80',
  },
];

export const REVIEWS: GuestReview[] = [
  {
    id: 'rev-1',
    author: 'Rajesh M.',
    location: 'Pune, Maharashtra',
    rating: 5,
    date: 'Recent Stay',
    tripType: 'Family Vacation',
    comment: 'Great location right on the main Khandala road, opposite Kamat. Very easy to find and park. The food at their on-site restaurant was hot, fresh, and delicious. Staff attended to every request promptly.',
    platform: 'MakeMyTrip Verified',
  },
  {
    id: 'rev-2',
    author: 'Priya & Amit S.',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    date: 'Weekend Getaway',
    tripType: 'Couples Retreat',
    comment: 'We booked the Super Deluxe with balcony. Waking up to the cool Khandala breeze and morning mist made our weekend drive from Mumbai completely worthwhile. Clean rooms, comfortable king bed, and prompt service.',
    platform: 'Google Reviews',
  },
  {
    id: 'rev-3',
    author: 'Dr. Nikhil K.',
    location: 'Thane, Maharashtra',
    rating: 4,
    date: 'Monsoon Stay',
    tripType: 'Short Leisure Trip',
    comment: 'Very practical and comfortable stay. Close to Khandala station and just 5 minutes from Kune Falls. Good AC, generator backup was working when it rained heavily, and staff was very polite.',
    platform: 'MakeMyTrip Verified',
  },
];

export const FAQS = [
  {
    question: 'What are the check-in and check-out timings?',
    answer: 'Standard check-in is from 12:00 PM onwards, and check-out is by 10:00 AM. For direct bookers through our official portal or WhatsApp, early check-in or late check-out may be accommodated subject to room availability.',
  },
  {
    question: 'How far is Elite Hotel from Khandala Railway Station?',
    answer: 'The hotel is conveniently situated just 800 meters from Khandala Railway Station (approximately 3 minutes by auto-rickshaw or a 10-minute walk). It is also just a 2-minute drive from the Mumbai-Pune Expressway exit.',
  },
  {
    question: 'Is car parking available on-site?',
    answer: 'Yes! We provide complimentary, dedicated on-site parking for all our registered guests right at the property along B P Road.',
  },
  {
    question: 'What dining options are available at the hotel?',
    answer: 'We have an in-house multi-cuisine restaurant and bar serving freshly prepared Maharashtrian specialties, North Indian curries, Chinese dishes, and continental breakfast. Room service is also available for guests preferring to dine in their rooms.',
  },
  {
    question: 'What identity documents are required for check-in?',
    answer: 'As per Maharashtra government guidelines, all adult guests (18 years and above) must present a valid government-issued photo ID (Aadhaar Card, Passport, Voter ID, or Driving License) at the time of check-in.',
  },
  {
    question: 'Why should I book directly instead of using online travel portals?',
    answer: 'Direct booking guarantees our best available rates with zero middleman commissions, direct access to the hotel manager, priority room allocation, and flexible assistance for date adjustments or special requests.',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    category: 'Rooms',
    title: 'AC Super Deluxe with Balcony',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    caption: 'Airy, light-filled bedroom with attached scenic balcony',
  },
  {
    id: 'g2',
    category: 'Rooms',
    title: 'AC Suite with Private Bathtub',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    caption: 'Master suite featuring expansive seating lounge and bath',
  },
  {
    id: 'g3',
    category: 'Rooms',
    title: 'AC Deluxe King Bedroom',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    caption: 'Comfortable king bed and dedicated workspace in AC Deluxe',
  },
  {
    id: 'g4',
    category: 'Property',
    title: 'Resort Architecture & Grounds',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    caption: 'Welcoming exterior in the heart of Khandala hill station',
  },
  {
    id: 'g5',
    category: 'Dining',
    title: 'In-House Multi-Cuisine Restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Warm restaurant setting serving authentic hot meals',
  },
  {
    id: 'g6',
    category: 'Dining',
    title: 'Morning Breakfast & Beverage Bar',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Fresh morning tea, coffee, and regional Maharashtrian breakfast',
  },
  {
    id: 'g7',
    category: 'Surroundings',
    title: 'Khandala Sahyadri Valley Mist',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    caption: 'Lush greenery and mountain clouds right around the property',
  },
  {
    id: 'g8',
    category: 'Surroundings',
    title: 'Kune Waterfalls (5 mins away)',
    image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Cascading natural beauty just 1.8 km from Elite Hotel',
  },
];
