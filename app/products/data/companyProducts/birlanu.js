// ============================================
// BIRLANU PRODUCTS DATA
// Company ID: 5 (5th company)
// ============================================

export const birlanuData = {
    companyInfo: {
      id: 5, // ✅ CHANGED to 5
      name: 'Fortune Fiber Cement Roofs',
      slug: 'birlanu',
      logo: '/images/products/logo_birlanu.png',
      tagline: 'Building Excellence Since 1976',
      description: 'Fortune Fiber Cement Roofs offer a smart and durable roofing solution built with advanced reinforcing hybrid fibers. These eco-friendly roofing sheets are engineered for fire resistance, corrosion resistance, and long-term performance. With high impact strength, excellent noise insulation, and an easy-to-handle, easy-to-fix design, Fortune Fiber Cement Roofs ensure a reliable, low-maintenance roofing experience for a wide range of applications.',
      heroImage: '/images/companies/birlanu-hero.jpg',
      primaryColor: '#F3859E',
      website: 'https://birlanu.com',
    },
  
    categories: [
      'All Products',
      'Fiber Cement Roofs',
      'Wall Panels',
      'AAC Blocks',
    ],
  
    products: [
      
      // ============================================
      // PRODUCT 1: Fortune Fiber Cement Roofs
      // ============================================
      {
        id: 'birlanu-001',
        name: 'Fortune Fiber Cement Roofs',
        slug: 'fortune-fiber-cement-roofs',
        category: 'Fiber Cement Roofs',
        pageCategory: 'Roofing',
        
        image: '/images/products/birlanu/FFCR_p1.png',
        galleryImages: [
          '/images/products/birlanu/FFCR_p2.png',
          '/images/products/birlanu/FFCR_p3.png',
          '/images/products/birlanu/FFCR_p4.png',
        ],
        
        bottomSectionTitle: 'Why Choose Fortune Fiber Cement Roofs?',
        
        cardDescription: 'Eco-friendly, high-performance cement roofs with hybrid fiber reinforcement',
        
        longDescription: 'Fortune Fiber Cement Roofs offer a smart and durable roofing solution built with advanced reinforcing hybrid fibers. These eco-friendly roofing sheets are engineered for fire resistance, corrosion resistance, and long-term performance. With high impact strength, excellent noise insulation, and an easy-to-handle, easy-to-fix design, Fortune Fiber Cement Roofs ensure a reliable, low-maintenance roofing experience for a wide range of applications.',
        
        sizes: [
          'Length: 1 m to 3.6 m',
          'Colors: Dark Grey, Red, Blue, Green, White'
        ],
        
        standards: [
          'IS 459:1992 , IS 14871:2000',
          'Pitch: 146 mm',
          'Corrugation depth: 48 mm',
          'Weight per metre: ~12.3–12.7 kg',
          'Effective coverage: 91% (3m roof), 87% (1.5m roof)',
        ],
        
        applications: [
         'Residential',
         'Commercial',
         'Industrial roofs',
         'Infrastructural',
        ],
        
        features: [
          {
            icon: '/images/icons/eco-friendly.png',
            title: 'Eco-Friendly',
            description: 'Made with sustainable materials',
          },
          {
            icon: '/images/icons/fire-resistant.png',
            title: 'Fire and corrosion resistant',
            description: 'Superior protection against fire and corrosion',
          },
          {
            icon: '/images/icons/thermal-protection.png',
            title: 'Thermal and noise protection',
            description: 'Excellent insulation properties',
          },
          {
            icon: '/images/icons/hygienic.png',
            title: 'Hygienic and mold-resistant',
            description: 'Prevents mold and bacterial growth',
          },
        ],
        
        benefits: [
          {
            icon: '/images/icons/strength.png',
            title: 'Superior strength with eco-conscious approach',
          },
          {
            icon: '/images/icons/strength.png',
            title: 'Fights highly corrosive environments',
          },
          {
            icon: '/images/icons/strength.png',
            title: 'Withstands high impacts and tough conditions',
          },
        ],
        
        brochures: [
          {
            text: 'Fortune Fiber Cement Roof ',
            size: '91 KB',
            link: 'https://birlanu.aflip.in/052cf7283e.html#page/1',
          },
          
        ],
        
        inStock: true,
        isNew: false,
        isFeatured: true,
        relatedProducts: ['birlanu-002', 'birlanu-003'],
      },
  
      // ============================================
      // PRODUCT 2: Aerocon Wall Panels
      // ============================================
      {
        id: 'birlanu-002',
        name: 'Aerocon Wall Panels',
        slug: 'aerocon-wall-panels',
        category: 'Wall Panels',
        pageCategory: 'Pre-fabricated sandwich panels for high-speed, eco-friendly wall construction',
        
        image: '/images/products/birlanu/AWP_p1.png',
        galleryImages: [
          '/images/products/birlanu/AWP_p2.png',
          '/images/products/birlanu/AWP_p3.png',
          '/images/products/birlanu/AWP_p4.png',
        ],
        
        bottomSectionTitle: 'Advantages of Aerocon Wall Panels',
        
        cardDescription: 'Eco-friendly, high-performance cement roofs with hybrid fiber reinforcement',
        
        longDescription: 'BirlaNu Aerocon Wall Panels are advanced lightweight sandwich panels made from fibre-reinforced cement sheets and an aerated cementitious core. Designed for rapid, dry construction, they deliver excellent strength, fire resistance, and thermal insulation. Suitable for partitions, cladding, mezzanine floors, and industrial structures, they provide a durable and efficient alternative to conventional walls.',
        
        sizes: [
          'Lengths: 2400 mm, 2700 mm, 3000mm',
          'Width: 600 mm',
          'Thicknesses: 50 mm, 75 mm,100mm'
        ],
        
        standards: [
          'IS:14862',
        ],
        
        applications: [
          'Internal partitions',
          'Demountable walls',
          'Pre frabricated structure',
          'Mezzanine floors',
          'Cladding',
        ],
        
        features: [
          {
            icon: '/images/icons/enhanced_safety.png',
            title: 'Enhanced safety',
            description: 'Reduces structural load',
          },
          {
            icon: '/images/icons/moisture_protection.png',
            title: 'Moisture protection',
            description: 'Energy-efficient building solution',
          },
          {
            icon: '/images/icons/time_efficiency.png',
            title: 'Time efficiency',
            description: '4-hour fire rating',
          },
          {
            icon: '/images/icons/labour_efficiency.png',
            title: 'Labour efficiency',
            description: 'Reduces noise transmission',
          },
        ],
        
        benefits: [
          {
            icon: '/images/icons/strength.png',
            title: 'Reduces construction time and cost',
          },
          {
            icon: '/images/icons/strength.png',
            title: 'No curing or plastering needed',
          },
          {
            icon: '/images/icons/strength.png',
            title: 'Dry construction- ideal for all seasons',
          },
        ],
        
        brochures: [
         {
            text: 'Fortune Fiber Cement Roof ',
            size: '91 KB',
            link: 'https://birlanu.aflip.in/052cf7283e.html#page/1',
          },
        ],
        
        inStock: true,
        isNew: true,
        isFeatured: true,
        relatedProducts: ['birlanu-001', 'birlanu-003'],
      },
  
      // ============================================
      // PRODUCT 3: Aerocon AAC Blocks
      // ============================================
      {
        id: 'birlanu-003',
        name: 'Aerocon AAC Blocks',
        slug: 'aerocon-aac-blocks',
        category: 'AAC Blocks',
        pageCategory: 'AAC Blocks',
        
        image: '/images/products/birlanu/AAC_p1.png',
        galleryImages: [
          '/images/products/birlanu/AAC_p2.png',
          '/images/products/birlanu/AAC_p3.png',
          '/images/products/birlanu/AAC_p4.png',
        ],
        
        bottomSectionTitle: 'Building Better with Aerocon AAC Blocks',
        
        cardDescription: 'Eco-friendly, high-performance cement roofs with hybrid fiber reinforcement',
        
        longDescription: 'BirlaNu Aerocon AAC Blocks are crafted from fly ash, cement, lime, and an aeration agent to deliver strong, lightweight, and thermally efficient building solutions. These blocks accelerate construction timelines, reduce labour and material costs, and comply with IS 2185 Part 3 standards. Ideal for modern sustainable building, they provide superior insulation, fire resistance, and long-term structural performance.',
        
        sizes: [
          'Face Size: 600 × 200 mm',
          'Thicknesses: 100 / 125 / 150 / 200 / 230 / 300 mm',
          'Dry Weight: 7.8 kg to 23.4 kg depending on thickness',
        ],
        
        standards: [
         'IS 2185 (Part 3):1995',
        ],
        
        applications: [
         'Internal and external walls in residential', 
         'commercial', 
         'institutional and industrial buildings',    
        ],
        
        features: [
          {
            icon: '/images/icons/energy_savings.png',
            title: 'Energy savings',
            description: '1/3rd weight of conventional bricks',
          },
          {
            icon: '/images/icons/superior_acoustic_insulation.png',
            title: 'Superior acoustic insulation',
            description: 'Reduces cooling/heating costs',
          },
          {
            icon: '/images/icons/long_lasting_durability.png',
            title: 'Long lasting durability',
            description: 'Up to 6 hours fire rating',
          },
          {
            icon: '/images/icons/thermal_insulation.png',
            title: 'Thermal insulation',
            description: 'Better seismic performance',
          },
        ],
        
        benefits: [
          {
            icon: '/images/icons/strength.png',
            title: 'Reduces overall construction cost by 15-20%',
          },
          {
            icon: '/images/icons/strength.png',
            title: 'Environmentally sustainable with zero waste',
          },
          {
            icon: '/images/icons/strength.png',
            title: 'Precision-cut blocks ensure minimal mortar usage',
          },
        ],
        
        brochures: [
      {
            text: 'Fortune Fiber Cement Roof ',
            size: '91 KB',
            link: 'https://birlanu.aflip.in/052cf7283e.html#page/1',
          },
        ],
        
        inStock: true,
        isNew: false,
        isFeatured: true,
        relatedProducts: ['birlanu-001', 'birlanu-002'],
      },
  
    ],
  };
  
  // ============================================
  // HELPER FUNCTIONS
  // ============================================
  
  export const getBirlanuProductBySlug = (slug) => {
    return birlanuData.products.find(product => product.slug === slug);
  };
  
  export const getBirlanuProductsByCategory = (category) => {
    if (category === 'All Products') {
      return birlanuData.products;
    }
    return birlanuData.products.filter(product => product.category === category);
  };
  
  export const getBirlanuFeaturedProducts = () => {
    return birlanuData.products.filter(product => product.isFeatured);
  };
  
  export const getBirlanuRelatedProducts = (productId) => {
    const product = birlanuData.products.find(p => p.id === productId);
    if (!product || !product.relatedProducts) return [];
    
    return birlanuData.products.filter(p => 
      product.relatedProducts.includes(p.id)
    );
  };