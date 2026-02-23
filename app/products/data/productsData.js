export const productsData = [
  {
    id: 1,
    name: 'Tata Bluescope',
    slug: 'tata-bluescope',
    logo: '/images/products/logo_tata-bluescope.png',
    description: 'Leading manufacturer of safety equipment',
    website: 'https://company1.com',
  },
  {
    id: 2,
    name: 'Ejot',
    slug: 'ejot-screw',
    logo: '/images/products/logo_ejot.png',
    description: 'Global leader in access systems',
    website: 'https://company2.com',
  },
  {
    id: 3,
    name: 'Company 3',
    slug: 'company-3',
    logo: '/images/products/logo_3.png',
    description: 'Premium fall protection solutions',
    website: 'https://company3.com',
  },
  {
    id: 4,
    name: 'Hindalco',
    slug: 'hindalco',
    logo: '/images/products/logo_hindalco.png',
    description: 'Industrial safety specialists',
    website: 'https://company4.com',
  },
  {
    id: 5,
    name: 'Birlanu',
    slug: 'birlanu',
    logo: '/images/products/logo_birlanu.png',
    description: 'Certified height safety equipment',
    website: 'https://company5.com',
  },
  {
    id: 6,
    name: 'Kee-Safety',
    slug: 'kee-safety',
    logo: '/images/products/logo_kee-safety.png',
    description: 'Trusted safety solutions provider',
    website: 'https://company6.com',
  },
  {
    id: 7,
    name: 'Saint-Gobain',
    slug: 'saint-gobain',
    logo: '/images/products/logo_saint-gobain.png',
    description: 'Advanced safety technology',
    website: 'https://company7.com',
  },
  {
    id: 8,
    name: 'Company 8',
    slug: 'company-8',
    logo: '/images/products/logo_8.png',
    description: 'Innovative access solutions',
    website: 'https://company8.com',
  },
  {
    id: 9,
    name: 'Company 9',
    slug: 'company-9',
    logo: '/images/products/logo_9.png',
    description: 'Leading safety equipment manufacturer',
    website: 'https://company9.com',
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