// EJOT Screw Systems Products Data
// Flexible structure - each product can have different fields

export const ejotScrewData = {
  companyInfo: {
    id: 2,
    name: 'EJOT Screw Systems',
    slug: 'ejot-screw',
    logo: '/images/products/logo_ejot.png',
    tagline: 'Global Leader in Fastening Technology',
    description: 'EJOT is a leading international manufacturer of fastening and assembly technology.',
    heroImage: '/images/companies/ejot-hero.jpg',
    primaryColor: '#D1203E',
    website: 'https://ejot.com',
  },

  categories: [
    'All Products',
    'Roof Screws',
    'Facade Screws',
    'Timber Screws',
  ],

  products: [
    
    // ============================================
    // PRODUCT 1: JZ3-S-6.3
    // ============================================
    {
      id: 'ejot-001',
      name: 'JZ3-S-6.3',
      slug: 'jz3-s-6-3',
      category: 'Timber Screws',
      
      // Single image for both listing and detail page
      image: '/images/products/ejot/JZ3-S-6.3_p1.png',
      
      // Card description (shown on listing page cards - 1-2 lines)
      cardDescription: 'For fixing metal to steel or aluminium substructures',
      
      // Use case (shown on detail page - can be longer)
      useCase: 'For fixing metal sections, timber, treads, platforms and balcony slabs to steel or aluminium substructures',
      
      // Properties (simple lines, no bullets) - can be different for each product
      properties: [
        'A2 stainless steel',
        // Add more properties as needed
      ],
      
      // Technical Specifications (simple lines, no bullets) - flexible
      technicalSpecifications: [
        'Diameter: 6.3 mm',
        'Head geometry: Countersunk head',
        'Drive: Hexalobular drive T30',
        'Installation rotation speed: max. 400 rpm',
        // Add or remove as needed
      ],
      
      // Brochures - text and link separate
      brochures: [
        {
          text: 'Product data sheet.pdf',
          size: '173 KB',
          link: '/downloads/ejot/JZ3-S-6.3-datasheet.pdf',
        },
        {
          text: 'ETA-22/0126.pdf',
          size: '576 KB',
          link: '/downloads/ejot/JZ3-S-6.3-eta.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: '/downloads/ejot/JZ3-S-6.3-epd.pdf',
        },
        {
          text: 'DoP ETA-22/0126 JZ3.pdf',
          size: '1 MB',
          link: '/downloads/ejot/JZ3-S-6.3-dop.pdf',
        },
        {
          text: 'Assembly instruction.pdf',
          size: '2 MB',
          link: '/downloads/ejot/JZ3-S-6.3-assembly.pdf',
        },
      ],
      
      // Product status
      inStock: true,
      isNew: false,
      isFeatured: false,
      
      // Related products
      relatedProducts: ['ejot-005', 'ejot-004', 'ejot-006'],
    },

    // ============================================
    // PRODUCT 2: JA3-LT-4.9
    // ============================================
    {
      id: 'ejot-002',
      name: 'JA3-LT-4.9',
      slug: 'ja3-lt-4-9',
      category: 'Facade Screws',
      
      image: '/images/products/ejot/JA3-LT-4.9_p2.png',
      
      cardDescription: 'For fixing metal section',
      useCase: 'For fixing metal section to timber or steel substructures',
      
      properties: [
        'Property 1 here',
        // Different properties for this product
      ],
      
      technicalSpecifications: [
        'Spec 1 here',
        'Spec 2 here',
        // Different specs
      ],
      
      brochures: [
        {
          text: 'Technical specification.pdf',
          size: '200 KB',
          link: '/downloads/ejot/JA3-LT-4.9-spec.pdf',
        },
        // Can have different number of brochures
      ],
      
      inStock: true,
      isNew: false,
      isFeatured: true,
      relatedProducts: ['ejot-001', 'ejot-004'],
    },

    // ============================================
    // PRODUCT 3: JZ1-6.3
    // ============================================
    {
      id: 'ejot-003',
      name: 'JZ1-6.3',
      slug: 'jz1-6-3',
      category: 'Timber Screws',
      
      image: '/images/products/ejot/JZ1-6.3_p3.png',
      
      cardDescription: 'For corrosive environment',
      useCase: 'For corrosive environment applications in highly demanding conditions',
      
      properties: [
        'Add properties here',
      ],
      
      technicalSpecifications: [
        'Add specs here',
      ],
      
      brochures: [
        {
          text: 'Product brochure.pdf',
          size: '150 KB',
          link: '/downloads/ejot/JZ1-6.3-brochure.pdf',
        },
      ],
      
      inStock: true,
      isNew: false,
      isFeatured: false,
      relatedProducts: ['ejot-001'],
    },

    // ============================================
    // PRODUCT 4: JA3-S-6.5
    // ============================================
    {
      id: 'ejot-004',
      name: 'JA3-S-6.5',
      slug: 'ja3-s-6-5',
      category: 'Facade Screws',
      
      image: '/images/products/ejot/JA3-S-6.5_p4.png',
      
      cardDescription: 'For fixing metal sections',
      useCase: 'For fixing metal sections to various substrates',
      
      properties: [],
      
      technicalSpecifications: [],
      
      brochures: [],
      
      inStock: true,
      isNew: false,
      isFeatured: false,
      relatedProducts: ['ejot-002'],
    },

    // ============================================
    // PRODUCT 5: JB3-7.2
    // ============================================
    {
      id: 'ejot-005',
      name: 'JB3-7.2',
      slug: 'jb3-7-2',
      category: 'Roof Screws',
      
      image: '/images/products/ejot/JB3-7.2_p5.png',
      
      cardDescription: 'For faulty drill holes',
      useCase: 'For faulty drill holes in metal and timber applications',
      
      properties: [],
      
      technicalSpecifications: [],
      
      brochures: [],
      
      inStock: true,
      isNew: false,
      isFeatured: false,
      relatedProducts: [],
    },

    // ============================================
    // PRODUCT 6: RLS 25
    // ============================================
    {
      id: 'ejot-006',
      name: 'RLS 25',
      slug: 'rls-25',
      category: 'Roof Screws',
      
      image: '/images/products/ejot/RLS 25_p6.png',
      
      cardDescription: 'Side lap stitching of profiled plastic sheets',
      useCase: 'Side lap stitching of profiled plastic sheets for roofing applications',
      
      properties: [],
      
      technicalSpecifications: [],
      
      brochures: [],
      
      inStock: true,
      isNew: true,
      isFeatured: true,
      relatedProducts: ['ejot-005'],
    },

    // ============================================
    // PRODUCT 7: JZ7-6.3
    // ============================================
    {
      id: 'ejot-007',
      name: 'JZ7-6.3',
      slug: 'jz7-6-3',
      category: 'Timber Screws',
      
      image: '/images/products/ejot/JZ7-6.3_p7.png',
      
      cardDescription: 'For steel substructures',
      useCase: 'For steel substructures in demanding construction applications',
      
      properties: [],
      
      technicalSpecifications: [],
      
      brochures: [],
      
      inStock: true,
      isNew: false,
      isFeatured: false,
      relatedProducts: ['ejot-001', 'ejot-003'],
    },

    // ============================================
    // PRODUCT 8: JA3-FR-4.9
    // ============================================
    {
      id: 'ejot-008',
      name: 'JA3-FR-4.9',
      slug: 'ja3-fr-4-9',
      category: 'Facade Screws',
      
      image: '/images/products/ejot/JA3-FR-4.9_p8.png',
      
      cardDescription: 'For fixing wall flashing profiles and roofing sheets',
      useCase: 'For fixing wall flashing profiles and roofing sheets in facade applications',
      
      properties: [],
      
      technicalSpecifications: [],
      
      brochures: [],
      
      inStock: true,
      isNew: false,
      isFeatured: false,
      relatedProducts: ['ejot-002'],
    },

    // ============================================
    // PRODUCT 9: JA2-6.5
    // ============================================
    {
      id: 'ejot-009',
      name: 'JA2-6.5',
      slug: 'ja2-6-5',
      category: 'Facade Screws',
      
      image: '/images/products/ejot/JA2-6.5_p9.png',
      
      cardDescription: 'self-tapping screw JA2 6.5',
      useCase: 'self-tapping screw JA2 6.5 for various facade applications',
      
      properties: [],
      
      technicalSpecifications: [],
      
      brochures: [],
      
      inStock: true,
      isNew: false,
      isFeatured: false,
      relatedProducts: ['ejot-004'],
    },

    // ============================================
    // PRODUCT 10: JZ2-6.3
    // ============================================
    {
      id: 'ejot-010',
      name: 'JZ2-6.3',
      slug: 'jz2-6-3',
      category: 'Timber Screws',
      
      image: '/images/products/ejot/JZ2-6.3_p10.png',
      
      cardDescription: 'self-tapping screw JZ2 6.3',
      useCase: 'self-tapping screw JZ2 6.3 for timber connections',
      
      properties: [],
      
      technicalSpecifications: [],
      
      brochures: [],
      
      inStock: true,
      isNew: false,
      isFeatured: false,
      relatedProducts: ['ejot-001', 'ejot-003'],
    },

    // ============================================
    // PRODUCT 11: JZ5-8.0
    // ============================================
    {
      id: 'ejot-011',
      name: 'JZ5-8.0',
      slug: 'jz5-8-0',
      category: 'Timber Screws',
      
      image: '/images/products/ejot/JZ5-8.0_p11.png',
      
      cardDescription: 'Add card description here',
      useCase: 'Add use case here',
      
      properties: [],
      
      technicalSpecifications: [],
      
      brochures: [],
      
      inStock: true,
      isNew: false,
      isFeatured: false,
      relatedProducts: ['ejot-012'],
    },

    // ============================================
    // PRODUCT 12: JZ5-6.3
    // ============================================
    {
      id: 'ejot-012',
      name: 'JZ5-6.3',
      slug: 'jz5-6-3',
      category: 'Timber Screws',
      
      image: '/images/products/ejot/JZ5-6.3_p12.png',
      
      cardDescription: 'Add card description here',
      useCase: 'Add use case here',
      
      properties: [],
      
      technicalSpecifications: [],
      
      brochures: [],
      
      inStock: true,
      isNew: false,
      isFeatured: false,
      relatedProducts: ['ejot-011'],
    },

  ],
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getEjotProductBySlug = (slug) => {
  return ejotScrewData.products.find(product => product.slug === slug);
};

export const getEjotProductsByCategory = (category) => {
  if (category === 'All Products') {
    return ejotScrewData.products;
  }
  return ejotScrewData.products.filter(product => product.category === category);
};

export const getEjotFeaturedProducts = () => {
  return ejotScrewData.products.filter(product => product.isFeatured);
};

export const getEjotRelatedProducts = (productId) => {
  const product = ejotScrewData.products.find(p => p.id === productId);
  if (!product || !product.relatedProducts) return [];
  
  return ejotScrewData.products.filter(p => 
    product.relatedProducts.includes(p.id)
  );
};