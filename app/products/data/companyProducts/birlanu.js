// ============================================
// BIRLANU PRODUCTS DATA
// Company ID: 5 (5th company)
// ============================================

export const birlanuData = {
  companyInfo: {
    id: 5,
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
    'Tile Adhesives',
  ],

  // Product type filters for segregation
  productTypes: [
    'All',
    'Building Materials',
    'Tile Adhesives',
  ],

  products: [

    // ============================================
    // BUILDING MATERIALS - EXISTING PRODUCTS
    // ============================================

    // PRODUCT 1: Fortune Fiber Cement Roofs
    {
      id: 'birlanu-001',
      name: 'Fortune Fiber Cement Roofs',
      slug: 'fortune-fiber-cement-roofs',
      category: 'Fiber Cement Roofs',
      productType: 'Building Materials',
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
          text: 'Fortune Fiber Cement Roof',
          size: '91 KB',
          link: 'https://birlanu.aflip.in/052cf7283e.html#page/1',
        },
      ],

      inStock: true,
      isNew: false,
      isFeatured: true,
      relatedProducts: ['birlanu-002', 'birlanu-003'],
    },

    // PRODUCT 2: Aerocon Wall Panels
    {
      id: 'birlanu-002',
      name: 'Aerocon Wall Panels',
      slug: 'aerocon-wall-panels',
      category: 'Wall Panels',
      productType: 'Building Materials',
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
          text: 'Fortune Fiber Cement Roof',
          size: '91 KB',
          link: 'https://birlanu.aflip.in/052cf7283e.html#page/1',
        },
      ],

      inStock: true,
      isNew: true,
      isFeatured: true,
      relatedProducts: ['birlanu-001', 'birlanu-003'],
    },

    // PRODUCT 3: Aerocon AAC Blocks
    {
      id: 'birlanu-003',
      name: 'Aerocon AAC Blocks',
      slug: 'aerocon-aac-blocks',
      category: 'AAC Blocks',
      productType: 'Building Materials',
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
          description: 'Up to 4 hours (200mm thick) fire rating',
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
          text: 'Fortune Fiber Cement Roof',
          size: '91 KB',
          link: 'https://birlanu.aflip.in/052cf7283e.html#page/1',
        },
      ],

      inStock: true,
      isNew: false,
      isFeatured: true,
      relatedProducts: ['birlanu-001', 'birlanu-002'],
    },

    // PRODUCT 4: TA 105
    {
      id: 'birlanu-004',
      name: 'TA 105',
      slug: 'ta-105',
      category: 'Tile Adhesives',
      productType: 'Tile Adhesives',
      pageCategory: 'Polymer-modified adhesive for ceramic and small-format tiles',

      image: '/images/products/birlanu/TA105_p1.png',
      galleryImages: [],

      cardDescription: 'Ready-to-use tile adhesive for ceramic tiles & small format stones',

      longDescription: 'BirlaNu TA 105 is a ready-to-use tile adhesive for ceramic tiles & small format stones, specially formulated to provide strong adhesion and long-lasting durability for tiles on both walls and floors. Its polymer-modified cementitious formulation ensures superior bonding and resistance to cracking, making it ideal for small-format tiles in residential and commercial interiors.',

      sizes: [
        '20 KG'
      ],

      standards: [
        'IS 15477: 2019',
        'Type: 1T; EN/ISO: C1T',
      ],

      applications: [
        'Interior floors and walls',
        'Ceramic/small tiles',
      ],

      features: [
        {
          icon: '/images/icons/excellent_bonding.png',
          title: 'Excellent bonding',
          description: 'Strong adhesion for lasting results',
        },
        {
          icon: '/images/icons/long_lasting_durability.png',
          title: 'High durability',
          description: 'Long-lasting performance',
        },
        {
          icon: '/images/icons/thermal_and_noise_protection.png',
          title: 'Thermal and noise protection',
          description: 'Insulation properties',
        },
        {
          icon: '/images/icons/hygienic_and_mold_resistant.png',
          title: 'Hygienic and mold-resistant',
          description: 'Prevents mold growth',
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

      bottomSectionTitle: 'Why Choose TA 105?',

      brochures: [
        {
          text: 'Fortune Fiber Cement Roofs',
          size: '91 KB',
          link: 'https://birlanu.aflip.in/052cf7283e.html#page/1',
        },
      ],

      inStock: true,
      isNew: true,
      isFeatured: true,
      relatedProducts: ['birlanu-005', 'birlanu-006', 'birlanu-007'],
    },

    // PRODUCT 5: TA 205 and TA 210
    {
      id: 'birlanu-005',
      name: 'TA 205 and TA 210',
      slug: 'ta-205-and-ta-210',
      category: 'Tile Adhesives',
      productType: 'Tile Adhesives',
      pageCategory: 'Adhesives for ceramic, vitrified, and natural stone tiles',

      image: '/images/products/birlanu/TA205_p1.png',
      galleryImages: [],

      cardDescription: 'Ideal adhesives for ceramic and vitrified tiles on interior and exterior surfaces',

      longDescription: 'TA 205 and TA 210 are ideal adhesives for securely fixing ceramic and vitrified tiles on both interior and exterior surfaces. Whether for floors or walls, they provide a strong, reliable bond and long-lasting results.',

      sizes: [
        '20 KG'
      ],

      standards: [
        'IS 15477: 2019',
        'Type: 2; EN/ISO: C2T',
      ],

      applications: [
        'Floors and walls',
        'Ceramic, vitrified, small-format natural stones',
      ],

      features: [
        {
          icon: '/images/icons/excellent_bonding.png',
          title: 'Excellent bonding',
          description: 'Strong adhesion for lasting results',
        },
        {
          icon: '/images/icons/long_lasting_durability.png',
          title: 'High durability',
          description: 'Long-lasting performance',
        },
        {
          icon: '/images/icons/thermal_and_noise_protection.png',
          title: 'Polymer based',
          description: 'Advanced polymer formulation',
        },
        {
          icon: '/images/icons/tile_on_tile_application.png',
          title: 'Tile-on-tile application',
          description: 'Apply over existing tiles',
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

      bottomSectionTitle: 'Why Choose TA 205 and TA 210?',

      brochures: [
        {
          text: 'Fortune Fiber Adhesives',
          size: '91 KB',
          link: 'https://birlanu.aflip.in/052cf7283e.html#page/1',
        },
      ],

      inStock: true,
      isNew: true,
      isFeatured: true,
      relatedProducts: ['birlanu-004', 'birlanu-006', 'birlanu-007'],
    },

    // PRODUCT 6: STA 505 & STA 510
    {
      id: 'birlanu-006',
      name: 'STA 505 & STA 510',
      slug: 'sta-505-and-sta-510',
      category: 'Tile Adhesives',
      productType: 'Tile Adhesives',
      pageCategory: 'Adhesive for large format tiles and small stones',

      image: '/images/products/birlanu/STA505_p1.png',
      galleryImages: [],

      cardDescription: 'Premium adhesives for large-format tiles & small stones on walls and floors',

      longDescription: 'BirlaNu STA 505 & STA 510 are premium adhesives formulated for large-format tiles & small stones on both walls and floors. Designed for interior and exterior applications, these adhesives provide superior bonding strength, ensuring tiles remain securely in place while resisting cracks and surface movement.',

      sizes: [
        '20 KG'
      ],

      standards: [
        'IS 15477: 2019',
        'Type: 3; EN/ISO: C2TE',
      ],

      applications: [
        'Interior & exterior use',
        'Large tiles',
        'Small stones',
      ],

      features: [
        {
          icon: '/images/icons/excellent_bonding.png',
          title: 'Excellent bonding',
          description: 'Strong adhesion for lasting results',
        },
        {
          icon: '/images/icons/long_lasting_durability.png',
          title: 'High durability',
          description: 'Long-lasting performance',
        },
        {
          icon: '/images/icons/thermal_and_noise_protection.png',
          title: 'Polymer based',
          description: 'Advanced polymer formulation',
        },
        {
          icon: '/images/icons/interior_and_exterior_application.png',
          title: 'Interior & exterior application',
          description: 'Versatile usage',
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

      bottomSectionTitle: 'Why Choose STA 505 & STA 510?',

      brochures: [
        {
          text: 'Fortune Fiber Cement Roofs',
          size: '91 KB',
          link: 'https://birlanu.aflip.in/052cf7283e.html#page/1',
        },
      ],

      inStock: true,
      isNew: true,
      isFeatured: false,
      relatedProducts: ['birlanu-004', 'birlanu-005', 'birlanu-007'],
    },

    // PRODUCT 7: STA 1000 & STA 1010
    {
      id: 'birlanu-007',
      name: 'STA 1000 & STA 1010',
      slug: 'sta-1000-and-sta-1010',
      category: 'Tile Adhesives',
      productType: 'Tile Adhesives',
      pageCategory: 'High-strength adhesive for large tiles and natural stones',

      image: '/images/products/birlanu/STA1000_p1.png',
      galleryImages: [],

      cardDescription: 'Advanced high-strength adhesives for demanding interior and exterior applications',

      longDescription: 'BirlaNu STA 1000 & STA 1010 are advanced high-strength tile adhesives formulated for demanding interior and exterior applications. Designed for large-format tiles, vitrified tiles, and natural stones, these adhesives provide superior bonding strength and long-lasting durability.',

      sizes: [
        '20 KG'
      ],

      standards: [
        'IS 15477: 2019',
        'Type: 3; TS1 EN/ISO: C2TES1',
      ],

      applications: [
        'Interior and exterior application',
        'Large tiles and stones',
      ],

      features: [
        {
          icon: '/images/icons/excellent_bonding.png',
          title: 'Excellent bonding',
          description: 'Strong adhesion for lasting results',
        },
        {
          icon: '/images/icons/long_lasting_durability.png',
          title: 'High durability',
          description: 'Long-lasting performance',
        },
        {
          icon: '/images/icons/thermal_and_noise_protection.png',
          title: 'Thermal and noise protection',
          description: 'Insulation properties',
        },
        {
          icon: '/images/icons/hygienic_and_mold_resistant.png',
          title: 'Hygienic and mold-resistant',
          description: 'Prevents mold growth',
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

      bottomSectionTitle: 'Why Choose STA 1000 & STA 1010?',

      brochures: [
        {
          text: 'Fortune Fiber Adhesives',
          size: '91 KB',
          link: 'https://birlanu.aflip.in/052cf7283e.html#page/1',
        },
      ],

      inStock: true,
      isNew: true,
      isFeatured: false,
      relatedProducts: ['birlanu-004', 'birlanu-005', 'birlanu-006'],
    },

    // PRODUCT 8: DSTA 605 & DSTA 610
    {
      id: 'birlanu-008',
      name: 'DSTA 605 & DSTA 610',
      slug: 'dsta-605-and-dsta-610',
      category: 'Tile Adhesives',
      productType: 'Tile Adhesives',
      pageCategory: 'Adhesive for tiles and stones on dry walls',

      image: '/images/products/birlanu/DSTA605_p1.png',
      galleryImages: [],

      cardDescription: 'Premium adhesives designed for dry wall installations',

      longDescription: 'BirlaNu DSTA 605 & DSTA 610 are premium adhesives designed for dry wall installations. Ideal for dry walls, cement boards, and plastered surfaces, these adhesives provide strong bonding and long-lasting durability for tiles of various types, including ceramic, vitrified, and natural stone.',

      sizes: [
        '20 KG'
      ],

      standards: [
        'IS 15477: 2019',
        'Type: 4; TS1 EN/ISO: C2TES1',
      ],

      applications: [
        'Dry surface installation',
        'Wood, Cement board, Drywall',
      ],

      features: [
        {
          icon: '/images/icons/excellent_bonding.png',
          title: 'Excellent bonding',
          description: 'Strong adhesion for lasting results',
        },
        {
          icon: '/images/icons/long_lasting_durability.png',
          title: 'High durability',
          description: 'Long-lasting performance',
        },
        {
          icon: '/images/icons/thermal_and_noise_protection.png',
          title: 'Polymer based',
          description: 'Advanced polymer formulation',
        },
        {
          icon: '/images/icons/tile_on_tile_application.png',
          title: 'Tile-on-tile application',
          description: 'Apply over existing tiles',
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

      bottomSectionTitle: 'Why Choose DSTA 605 & DSTA 610?',

      brochures: [
        {
          text: 'Fortune Fiber Adhesives',
          size: '91 KB',
          link: 'https://birlanu.aflip.in/052cf7283e.html#page/1',
        },
      ],

      inStock: true,
      isNew: true,
      isFeatured: false,
      relatedProducts: ['birlanu-004', 'birlanu-005', 'birlanu-009'],
    },

    // PRODUCT 9: DSTA 615 & DSTA 620
    {
      id: 'birlanu-009',
      name: 'DSTA 615 & DSTA 620',
      slug: 'dsta-615-and-dsta-620',
      category: 'Tile Adhesives',
      productType: 'Tile Adhesives',
      pageCategory: 'Highly deformable adhesive for all tile types on dry walls',

      image: '/images/products/birlanu/DSTA615_p1.png',
      galleryImages: [],

      cardDescription: 'High-performance deformable adhesives for flexible bonding',

      longDescription: 'BirlaNu DSTA 615 & DSTA 620 are high-performance deformable tile adhesives engineered to provide strong, flexible bonding for ceramic, vitrified, and natural stone tiles. Suitable for interior and exterior walls and floors, these adhesives accommodate surface movement and thermal expansion, reducing the risk of cracks.',

      sizes: [
        '20 KG'
      ],

      standards: [
        'IS 15477: 2019',
        'Type: 4; TS2 EN/ISO: C2TES2',
      ],

      applications: [
        'Interior floors and walls',
        'Ceramic/small tiles',
      ],

      features: [
        {
          icon: '/images/icons/excellent_bonding.png',
          title: 'Excellent bonding',
          description: 'Strong adhesion for lasting results',
        },
        {
          icon: '/images/icons/long_lasting_durability.png',
          title: 'High durability',
          description: 'Long-lasting performance',
        },
        {
          icon: '/images/icons/thermal_and_noise_protection.png',
          title: 'Thermal and noise protection',
          description: 'Insulation properties',
        },
        {
          icon: '/images/icons/hygienic_and_mold_resistant.png',
          title: 'Hygienic and mold-resistant',
          description: 'Prevents mold growth',
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

      bottomSectionTitle: 'Why Choose DSTA 615 & DSTA 620?',

      brochures: [
        {
          text: 'Fortune Fiber Cement Roofs',
          size: '91 KB',
          link: 'https://birlanu.aflip.in/052cf7283e.html#page/1',
        },
      ],

      inStock: true,
      isNew: true,
      isFeatured: false,
      relatedProducts: ['birlanu-004', 'birlanu-008', 'birlanu-007'],
    },
    {
      id: 'birlanu-010',
      name: 'PUA 5000',
      slug: 'pua-5000',
      category: 'Tile Adhesives',
      productType: 'Tile Adhesives',
      pageCategory: 'Premium 2-component adhesive for all tile types on any surface',

      image: '/images/products/birlanu/PUA5000_p1.png',
      galleryImages: [],

      cardDescription: 'High-performance deformable adhesives for flexible bonding',

      longDescription: 'BirlaNu PUA 5000 is a high-performance 2-component adhesive designed to provide superior bonding for all types of tiles & stones. Its advanced formulation ensures excellent adhesion on ceramic, vitrified, and natural stone tiles for both walls and floors, in interior and exterior applications.',

      sizes: [
        '4 kg',
        '8 kg'
      ],

      standards: [
        'IS 15477: 2019',
        'Type: 5T S2',
      ],

      applications: [
        'All tile types',
        'Glass',
        'Grid iron',
        'Mild steel',
        'Stainless steel',
        'Aluminium',
        'Plywood',
        'Dry surfaces'
      ],

      features: [
        {
          icon: '/images/icons/excellent_bonding.png',
          title: 'High bond strength',
          description: 'Strong adhesion for lasting results',
        },
        {
          icon: '/images/icons/long_lasting_durability.png',
          title: 'High durability',
          description: 'Long-lasting performance',
        },
        {
          icon: '/images/icons/thermal_and_noise_protection.png',
          title: 'Interior & exterior application',
          description: 'Insulation properties',
        },
        {
          icon: '/images/icons/thermal_shock_resistant.png',
          title: 'Thermal shock resistant',
          description: 'Prevents mold growth',
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

      bottomSectionTitle: 'Why Choose DSTA 615 & DSTA 620?',

      brochures: [
        {
          text: 'Fortune Fiber Cement Roofs',
          size: '91 KB',
          link: 'https://birlanu.aflip.in/052cf7283e.html#page/1',
        },
      ],

      inStock: true,
      isNew: true,
      isFeatured: false,
      relatedProducts: ['birlanu-004', 'birlanu-008', 'birlanu-007'],
    }
  ]
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

// NEW: Filter by product type (Building Materials or Tile Adhesives)
export const getBirlanuProductsByType = (productType) => {
  if (productType === 'All') {
    return birlanuData.products;
  }
  return birlanuData.products.filter(product => product.productType === productType);
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

// NEW: Get all tile adhesive products
export const getBirlanuTileAdhesives = () => {
  return birlanuData.products.filter(product => product.productType === 'Tile Adhesives');
};

// NEW: Get all building material products
export const getBirlanuBuildingMaterials = () => {
  return birlanuData.products.filter(product => product.productType === 'Building Materials');
};