export const productsData = [
  {
    id: 1,
    name: 'Tata Bluescope',
    slug: 'tata-bluescope',
    logo: '/images/products/logo_tata-bluescope.png',
    cardImage: '/images/products/card_tata-bluescope.jpg',   // ← ADD: hover background image
    tagline: 'Pre-engineered steel building solutions',
    description: 'Leading manufacturer of safety equipment',
    website: 'https://company1.com',
  },
  {
    id: 2,
    name: 'Ejot',
    slug: 'ejot-screw',
    logo: '/images/products/logo_ejot.png',
    cardImage: '/images/products/card_ejot.jpg',
    tagline: 'Precision fastening systems',
    description: 'Global leader in access systems',
    website: 'https://company2.com',
  },
  {
    id: 4,
    name: 'Hindalco',
    slug: 'hindalco',
    logo: '/images/products/logo_hindalco.png',
    cardImage: '/images/products/card_hindalco.jpg',
    tagline: 'Aluminium & copper products',
    description: 'Industrial safety specialists',
    website: 'https://company4.com',
  },
  {
    id: 5,
    name: 'Birlanu',
    slug: 'birlanu',
    logo: '/images/products/logo_birlanu.png',
    cardImage: '/images/products/card_birlanu.jpg',
    tagline: 'Advanced roofing & cladding',
    description: 'Certified height safety equipment',
    website: 'https://company5.com',
  },
  {
    id: 6,
    name: 'Kee-Safety',
    slug: 'kee-safety',
    logo: '/images/products/logo_kee-safety.png',
    cardImage: '/images/products/card_kee-safety.jpg',
    tagline: 'Fall protection & guardrails',
    description: 'Trusted safety solutions provider',
    website: 'https://company6.com',
  },
  {
    id: 7,
    name: 'Saint-Gobain',
    slug: 'saint-gobain',
    logo: '/images/products/logo_saint-gobain.png',
    cardImage: '/images/products/card_saint-gobain.jpg',
    tagline: 'High-performance building materials',
    description: 'Advanced safety technology',
    website: 'https://company7.com',
  },
  {
    id: 8,
    name: 'Tegola Canadese',
    slug: 'tegola-canadese',
    logo: '/images/products/logo_tegola-canadese.png',
    cardImage: '/images/products/card_tegola-canadese.jpg',
    tagline: 'Italian design roofing tiles',
    description: 'Premium roofing solutions with natural slate',
    website: 'https://tegola.com',
  },
];

// Get product by slug (for individual product pages)
export const getProductBySlug = (slug) => {
  return productsData.find(product => product.slug === slug);
};

// Get all products
export const getAllProducts = () => {
  return productsData;
};