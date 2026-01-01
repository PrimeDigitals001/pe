// ============================================
// BIRLANU PRODUCTS DATA
// Company ID: 5 (5th company)
// ============================================

export const birlanuData = {
    companyInfo: {
      id: 5, // ✅ CHANGED to 5
      name: 'Birlanu',
      slug: 'birlanu',
      logo: '/images/products/logo_birlanu.png',
      tagline: 'Building Excellence Since 1976',
      description: 'Birlanu is a leading manufacturer of high-quality building materials, specializing in fiber cement roofing, wall panels, and AAC blocks.',
      heroImage: '/images/companies/birlanu-hero.jpg',
      primaryColor: '#805E4B',
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
        
        image: '/images/products/birlanu/FFCR_p1.png',
        
        cardDescription: 'Smart and durable roofing solution with advanced reinforcing hybrid fibers',
        
        longDescription: 'Fortune Fiber Cement Roofs offer a smart and durable roofing solution built with advanced reinforcing hybrid fibers. These eco-friendly roofing sheets are engineered for fire resistance, corrosion resistance, and long-term performance. With high impact strength, excellent noise insulation, and an easy-to-handle, easy-to-fix design, Fortune Fiber Cement Roofs ensure a reliable, low-maintenance roofing experience for a wide range of applications.',
        
        sizes: [
          {
            sku: 'FCR-2440-5',
            dimensions: '2440mm × 1050mm × 5mm',
            coverage: '2.31 sq.m',
            weight: '18.5 kg',
          },
          {
            sku: 'FCR-2440-6',
            dimensions: '2440mm × 1050mm × 6mm',
            coverage: '2.31 sq.m',
            weight: '21.8 kg',
          },
          {
            sku: 'FCR-3050-5',
            dimensions: '3050mm × 1050mm × 5mm',
            coverage: '2.89 sq.m',
            weight: '23.2 kg',
          },
        ],
        
        standards: [
          'Conforms to IS 14871:2000',
          'Fire resistance: Class 1 as per BS 476',
          'Water absorption: < 25% as per IS 14871',
          'Modulus of rupture: > 15 N/mm²',
          'Density: 1.4 - 1.5 g/cm³',
        ],
        
        applications: [
          'Industrial roofing',
          'Commercial buildings',
          'Residential roofing',
          'Agricultural structures',
          'Warehouses and storage facilities',
          'Educational institutions',
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
            icon: '/images/icons/corrosion.png',
            title: 'Fights highly corrosive environments',
          },
          {
            icon: '/images/icons/impact.png',
            title: 'Withstands high impacts and tough conditions',
          },
        ],
        
        brochures: [
          {
            text: 'Fortune Fiber Cement Roof - Product Brochure.pdf',
            size: '2.5 MB',
            link: '/downloads/birlanu/fortune-fiber-cement-roof-brochure.pdf',
          },
          {
            text: 'Technical Specifications.pdf',
            size: '850 KB',
            link: '/downloads/birlanu/fortune-fiber-cement-roof-specs.pdf',
          },
          {
            text: 'Installation Guide.pdf',
            size: '1.2 MB',
            link: '/downloads/birlanu/fortune-fiber-cement-roof-installation.pdf',
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
        
        image: '/images/products/birlanu/AWP_p1.png',
        
        cardDescription: 'Lightweight, durable wall panels for rapid construction',
        
        longDescription: 'Aerocon Wall Panels are revolutionary lightweight precast panels that offer superior strength, thermal insulation, and fire resistance. These eco-friendly panels are engineered for rapid construction, reducing project timelines significantly while maintaining exceptional structural integrity and durability.',
        
        sizes: [
          {
            sku: 'AWP-3000-75',
            dimensions: '3000mm × 600mm × 75mm',
            coverage: '1.8 sq.m',
            weight: '45 kg',
          },
          {
            sku: 'AWP-3000-100',
            dimensions: '3000mm × 600mm × 100mm',
            coverage: '1.8 sq.m',
            weight: '58 kg',
          },
          {
            sku: 'AWP-3000-125',
            dimensions: '3000mm × 600mm × 125mm',
            coverage: '1.8 sq.m',
            weight: '72 kg',
          },
        ],
        
        standards: [
          'Conforms to IS 2185 Part 3',
          'Fire resistance: 4 hours as per IS 3809',
          'Thermal conductivity: 0.16 W/mK',
          'Compressive strength: > 4 N/mm²',
          'Dry density: 550-650 kg/m³',
        ],
        
        applications: [
          'External walls',
          'Internal partition walls',
          'Boundary walls',
          'Commercial buildings',
          'Residential construction',
          'Industrial buildings',
        ],
        
        features: [
          {
            icon: '/images/icons/lightweight.png',
            title: 'Lightweight Construction',
            description: 'Reduces structural load',
          },
          {
            icon: '/images/icons/thermal.png',
            title: 'Excellent Thermal Insulation',
            description: 'Energy-efficient building solution',
          },
          {
            icon: '/images/icons/fire.png',
            title: 'Fire Resistant',
            description: '4-hour fire rating',
          },
          {
            icon: '/images/icons/sound.png',
            title: 'Sound Insulation',
            description: 'Reduces noise transmission',
          },
        ],
        
        benefits: [
          {
            icon: '/images/icons/speed.png',
            title: 'Rapid construction with reduced labor costs',
          },
          {
            icon: '/images/icons/eco.png',
            title: 'Eco-friendly and sustainable building material',
          },
          {
            icon: '/images/icons/durability.png',
            title: 'Long-lasting durability with minimal maintenance',
          },
        ],
        
        brochures: [
          {
            text: 'Aerocon Wall Panels - Product Catalog.pdf',
            size: '3.2 MB',
            link: '/downloads/birlanu/aerocon-wall-panels-catalog.pdf',
          },
          {
            text: 'Installation Manual.pdf',
            size: '1.8 MB',
            link: '/downloads/birlanu/aerocon-wall-panels-installation.pdf',
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
        
        image: '/images/products/birlanu/AAC_p1.png',
        
        cardDescription: 'Autoclaved Aerated Concrete blocks for modern construction',
        
        longDescription: 'Aerocon AAC Blocks are premium quality Autoclaved Aerated Concrete blocks that combine lightweight properties with exceptional strength. These eco-friendly blocks offer superior thermal insulation, fire resistance, and earthquake resistance, making them the ideal choice for modern sustainable construction projects.',
        
        sizes: [
          {
            sku: 'AAC-600-200-100',
            dimensions: '600mm × 200mm × 100mm',
            coverage: '8.33 blocks/sq.m',
            weight: '7.2 kg',
          },
          {
            sku: 'AAC-600-200-150',
            dimensions: '600mm × 200mm × 150mm',
            coverage: '8.33 blocks/sq.m',
            weight: '10.8 kg',
          },
          {
            sku: 'AAC-600-200-200',
            dimensions: '600mm × 200mm × 200mm',
            coverage: '8.33 blocks/sq.m',
            weight: '14.4 kg',
          },
          {
            sku: 'AAC-600-200-250',
            dimensions: '600mm × 200mm × 250mm',
            coverage: '8.33 blocks/sq.m',
            weight: '18 kg',
          },
        ],
        
        standards: [
          'Conforms to IS 2185 Part 3',
          'Compressive strength: 3-4 N/mm²',
          'Dry density: 550-650 kg/m³',
          'Fire resistance: 6 hours (200mm thick)',
          'Thermal conductivity: 0.16 W/mK',
          'Sound reduction: 45 dB (200mm thick)',
        ],
        
        applications: [
          'Load-bearing walls',
          'Non-load bearing walls',
          'Partition walls',
          'Residential buildings',
          'Commercial complexes',
          'High-rise buildings',
          'Earthquake-prone areas',
        ],
        
        features: [
          {
            icon: '/images/icons/lightweight.png',
            title: 'Ultra Lightweight',
            description: '1/3rd weight of conventional bricks',
          },
          {
            icon: '/images/icons/thermal.png',
            title: 'Thermal Insulation',
            description: 'Reduces cooling/heating costs',
          },
          {
            icon: '/images/icons/fire.png',
            title: 'Fire Resistant',
            description: 'Up to 6 hours fire rating',
          },
          {
            icon: '/images/icons/earthquake.png',
            title: 'Earthquake Resistant',
            description: 'Better seismic performance',
          },
        ],
        
        benefits: [
          {
            icon: '/images/icons/savings.png',
            title: 'Reduces overall construction cost by 15-20%',
          },
          {
            icon: '/images/icons/environment.png',
            title: 'Environmentally sustainable with zero waste',
          },
          {
            icon: '/images/icons/precision.png',
            title: 'Precision-cut blocks ensure minimal mortar usage',
          },
        ],
        
        brochures: [
          {
            text: 'Aerocon AAC Blocks - Complete Guide.pdf',
            size: '2.8 MB',
            link: '/downloads/birlanu/aerocon-aac-blocks-guide.pdf',
          },
          {
            text: 'Technical Data Sheet.pdf',
            size: '650 KB',
            link: '/downloads/birlanu/aerocon-aac-blocks-datasheet.pdf',
          },
          {
            text: 'Construction Best Practices.pdf',
            size: '1.5 MB',
            link: '/downloads/birlanu/aerocon-aac-blocks-best-practices.pdf',
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