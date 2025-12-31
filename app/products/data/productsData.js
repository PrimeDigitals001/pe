export const productsData = [
  {
    id: 1,
    name: 'Company 1',
    slug: 'company-1',
    logo: '/images/products/logo_1.png',
    description: 'Leading manufacturer of safety equipment',
    website: 'https://company1.com',
  },
  {
    id: 2,
    name: 'Company 2',
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
    name: 'Company 4',
    slug: 'company-4',
    logo: '/images/products/logo_4.png',
    description: 'Industrial safety specialists',
    website: 'https://company4.com',
  },
  {
    id: 5,
    name: 'Company 5',
    slug: 'company-5',
    logo: '/images/products/logo_5.png',
    description: 'Certified height safety equipment',
    website: 'https://company5.com',
  },
  {
    id: 6,
    name: 'Company 6',
    slug: 'company-6',
    logo: '/images/products/logo_6.png',
    description: 'Trusted safety solutions provider',
    website: 'https://company6.com',
  },
  {
    id: 7,
    name: 'Company 7',
    slug: 'company-7',
    logo: '/images/products/logo_7.png',
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