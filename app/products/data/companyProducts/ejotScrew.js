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
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/h11/h0f/9381560221726/EJOT-pds-jz3-s-6.3-en-2025.pdf',
        },
        {
          text: 'ETA-22/0126.pdf',
          size: '576 KB',
          link: 'https://www.ejot.com/medias/sys_master/ETA-Building-Fasteners/eta-bf/h97/hb4/9233671618590/EJOT-eta-22-0126-jt-jf-jz-screws-EN.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
        {
          text: 'DoP ETA-22/0126 JZ3.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/dop-ilb/019/he7/h38/9340689809438/ejot-dop-1-008-220126-2022-2-jz3.pdf',
        },
        {
          text: 'Assembly instruction.pdf',
          size: '2 MB',
          link: 'https://www.ejot.com/medias/sys_master/Montageanleitungen_Assembly-Instructions/Montageanleitungen_Assembly-Instructions/ha4/h93/9364898840606/EJOT-man-self-tapping-screws-de-en-global.20241216162349884.pdf',
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
      
      cardDescription: 'For fixing metal sections to timber or aluminium substructure ≤ 2mm',
      useCase: 'For fixing metal sections to timber or aluminium substructure ≤ 2mm',
      
      properties: [
        'A2 stainless steel',
      ],
      
      technicalSpecifications: [
        'Diameter: 4.9 mm',
        'Head geometry: Pan head',
        'Drive: hexalobular T25',
      ],
      
      brochures: [
        {
          text: 'Product data sheet.pdf',
          size: '178 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/hd6/h22/9381124014110/EJOT-pds-ja3-lt-4.9-en-2025.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
        {
          text: 'JA3-LT-4.9-UK-datasheet-issue-2.pdf',
          size: '299 KB',
          link: 'https://www.ejot.com/medias/sys_master/UK-product-data-sheets/UK-product-data-sheets/h6e/h2c/9343572344862/JA3-LT-4.9-UK-datasheet-issue-2.pdf',
        },
        {
          text: 'Assembly instruction.pdf',
          size: '2 MB',
          link: 'https://www.ejot.com/medias/sys_master/Montageanleitungen_Assembly-Instructions/Montageanleitungen_Assembly-Instructions/ha4/h93/9364898840606/EJOT-man-self-tapping-screws-de-en-global.20241216162349884.pdf',
        },
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
      name: 'CORREMAKS® JZ1-6.3',
      slug: 'jz1-6-3',
      category: 'Timber Screws',
      
      image: '/images/products/ejot/JZ1-6.3_p3.png',
      
      cardDescription: 'Fastening profiled steel sheets to steel substructure in highly corrosive environments',
      useCase: 'Fastening profiled steel sheets to steel substructure in highly corrosive environments',
      
      properties: [
        'Stainless steel HCR -1.4529',
        'Stainless steel sealing washer',
        'Pre-assembled sealing washer',
        'Highest corrosion protection class',
      ],
      
      technicalSpecifications: [
        'Diameter: 6.3 mm',
        'Drive: Hexagon AF 3/8"',
        'Installation rotation speed: max. 400 rpm',
      ],
      
      brochures: [
        {
          text: 'FM approved - certificate of compliance 1.pdf',
          size: '91 KB',
          link: 'https://www.ejot.com/medias/sys_master/zertifikate/zertifikate/h34/h81/8854335848478/FM-approved-certificate-of-compliance-1.pdf',
        },
        {
          text: 'ETA-10/0200.pdf',
          size: '28 MB',
          link: 'https://www.ejot.com/medias/sys_master/ETA-Building-Fasteners/eta-bf/hdc/hb8/9038295171102/ETA-10-0200.pdf',
        },
        {
          text: 'DoP ETA-10/0200 JZ1.pdf',
          size: '636 KB',
          link: 'https://www.ejot.com/medias/sys_master/dop-ilb/019/h45/hd7/9340684140574/ejot-dop-1-012-100200-2018-3-jz1.pdf',
        },
        {
          text: 'Product data sheet.pdf',
          size: '234 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/hb9/he0/9260961759262/EJOT-pds-jz1-6-3-EN.pdf',
        },
        {
          text: 'ETA-22/0126.pdf',
          size: '576 KB',
          link: 'https://www.ejot.com/medias/sys_master/ETA-Building-Fasteners/eta-bf/h97/hb4/9233671618590/EJOT-eta-22-0126-jt-jf-jz-screws-EN.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
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
      
      cardDescription: 'For fixing metal sections to timber, aluminium (≤ 3 mm) or steel (≤ 2 mm) substructures',
      useCase: 'For fixing metal sections to timber substructures, aluminium substructures ≤ 3 mm or steel substructures ≤ 2 mm. For fixing treads, platform and balcony slabs to timber or aluminium substructures',
      
      properties: [
        'A2 stainless steel',
      ],
      
      technicalSpecifications: [
        'Diameter: 6.5 mm',
        'Head geometry: Countersunk head',
        'Drive: Hexalobular drive T30',
      ],
      
      brochures: [
        {
          text: 'Product data sheet.pdf',
          size: '173 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/hf2/h9b/9381124112414/EJOT-pds-ja3-s-6.5-en-2025.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
        {
          text: 'Assembly instruction.pdf',
          size: '2 MB',
          link: 'https://www.ejot.com/medias/sys_master/Montageanleitungen_Assembly-Instructions/Montageanleitungen_Assembly-Instructions/ha4/h93/9364898840606/EJOT-man-self-tapping-screws-de-en-global.20241216162349884.pdf',
        },
      ],
      
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
      
      cardDescription: 'Repair screw for covering faulty drill holes',
      useCase: 'Repair screw for covering faulty drill holes',
      
      properties: [
        'A2 stainless steel',
        'Stainless steel sealing washer',
        'Pre-assembled sealing washer',
      ],
      
      technicalSpecifications: [
        'Diameter: 7.2 mm',
        'Head geometry: Hexagon head',
        'Drive: Hexagon AF 3/8"',
      ],
      
      brochures: [
        {
          text: 'Product data sheet.pdf',
          size: '166 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/h35/h27/9381124145182/EJOT-pds-jb3-7.2-en-2025.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
        {
          text: 'Assembly instruction.pdf',
          size: '2 MB',
          link: 'https://www.ejot.com/medias/sys_master/Montageanleitungen_Assembly-Instructions/Montageanleitungen_Assembly-Instructions/ha4/h93/9364898840606/EJOT-man-self-tapping-screws-de-en-global.20241216162349884.pdf',
        },
      ],
      
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
      
      cardDescription: 'For side lap stitching of profiled plastic sheets',
      useCase: 'For side lap stitching of profiled plastic sheets. Fastening of profiled plastic sheets with other components, that don\'t require a load-carrying capacity verification, where variable shear forces due to temperature expansion can be expected.',
      
      properties: [
        'A2 stainless steel screw',
        'Stainless steel sealing washer',
        'Pre-assembled sealing washer',
        'EPDM sealing sleeve with brass thread insert',
      ],
      
      technicalSpecifications: [
        'Diameter: 8.0 mm',
        'Drill hole diameter: 10.0 mm',
        'Self-tapping screw: M5',
        'Tightening torque: 1.5 Nm',
        'Drive: Hexagon A/F8',
      ],
      
      brochures: [
        {
          text: 'Product data sheet.pdf',
          size: '186 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/hd7/h3c/9381875318814/EJOT-pds-rls-25-en-2025.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
      ],
      
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
      name: 'CRONIMAKS® JZ7-6.3',
      slug: 'jz7-6-3',
      category: 'Timber Screws',
      
      image: '/images/products/ejot/JZ7-6.3_p7.png',
      
      cardDescription: 'Fastening profiled steel sheets and sandwich panels to steel substrate',
      useCase: 'Fastening profiled steel sheets and sandwich panels to steel substrate up to S 355 (St 52). Fastening profiled steel sheets and sandwich panels to stainless steel substrate (up to Rm = 700 N/mm2)',
      
      properties: [
        'Approved A2 stainless steel screw for high-strength steel substructures',
        'Stainless steel sealing washer',
        'Pre-assembled sealing washer',
      ],
      
      technicalSpecifications: [
        'Diameter: 6.3 mm',
        'Drive: Hexagon AF 3/8"',
        'Installation rotation speed: max. 400 rpm',
      ],
      
      brochures: [
        {
          text: 'FM approved - certificate of compliance 1.pdf',
          size: '91 KB',
          link: 'https://www.ejot.com/medias/sys_master/zertifikate/zertifikate/h34/h81/8854335848478/FM-approved-certificate-of-compliance-1.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
      ],
      
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
      
      cardDescription: 'For fixing wall flashing profiles and roofing sheet to timber substructure',
      useCase: 'For fixing wall flashing profiles. For fixing roofing sheet to timber substructure',
      
      properties: [
        'A2 stainless steel',
        'Stainless steel sealing washer',
        'Truss head and bonded washer mill finish or coloured',
        'Pre-assembled sealing washer',
        'Thread according to DIN 7998',
      ],
      
      technicalSpecifications: [
        'Head geometry: Truss head',
        'Drive: Hexalobular TX25',
      ],
      
      brochures: [
        {
          text: 'Product data sheet.pdf',
          size: '161 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/h7c/hb4/9059733471262/EJOT-pds-ja3-fr-4-9-2020-05-27-EN.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
      ],
      
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
      
      cardDescription: 'For fixing wall flashing profiles and roofing sheet to timber substructure',
      useCase: 'For fixing wall flashing profiles. For fixing roofing sheet to timber substructure',
      
      properties: [
        'A2 stainless steel',
        'Stainless steel sealing washer',
        'Truss head and bonded washer mill finish or coloured',
        'Pre-assembled sealing washer',
        'Thread according to DIN 7998',
      ],
      
      technicalSpecifications: [
        'Diameter: 6.5 mm',
        'Drive: Hexagon AF3/8"',
        'Installation rotation speed: max. 1500 rpm',
      ],
      
      brochures: [
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
      ],
      
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
      
      cardDescription: 'For fixing profiled steel sheet to steel substructure',
      useCase: 'For fixing profiled steel sheet to steel substructure',
      
      properties: [
        'Case-hardened steel, zinc-plated',
        'Steel sealing washer, zinc-plated',
        'Pre-assembled sealing washer',
      ],
      
      technicalSpecifications: [
        'Diameter: 6.3 mm',
        'Drive: Hexagon AF 3/8"',
        'Installation rotation speed: max. 400 rpm',
      ],
      
      brochures: [
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/Building-Fasteners/Products/Self-tapping-Screws/self-tapping-screw-JZ2-6-3/p/JZ2-6_3',
        },
      ],
      
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
      
      cardDescription: 'Fastening profiled steel sheet and sandwich panel to steel substrate up to S 355 (St 52)',
      useCase: 'Fastening profiled steel sheet and sandwich panel to steel substrate up to S 355 (St 52). Suitable for replacing screws with diameter 5.5 and 6.3 mm',
      
      properties: [
        'A2 stainless steel with hardened steel dog point',
        'Stainless steel sealing washer',
        'Pre-assembled sealing washer',
      ],
      
      technicalSpecifications: [
        'Screw diameter: 8.0 mm',
        'Sealing washer diameter 22 mm',
        'Hexagon drive',
        'Installation rotation speed: max. 400 rpm',
      ],
      
      brochures: [
        {
          text: 'ETA-10/0200.pdf',
          size: '28 MB',
          link: 'https://www.ejot.com/medias/sys_master/ETA-Building-Fasteners/eta-bf/hdc/hb8/9038295171102/ETA-10-0200.pdf',
        },
        {
          text: 'Product data sheet.pdf',
          size: '189 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/hc6/hbe/9381560647710/EJOT-pds-jz5-8.0-en-2025.pdf',
        },
        {
          text: 'ETA-13/0177.pdf',
          size: '25 MB',
          link: 'https://www.ejot.com/medias/sys_master/ETA-Building-Fasteners/eta-bf/h9b/hc4/9064125628446/EJOT-eta-13-0177-fastening-screws-ja-jz-jt-jf-EN.pdf',
        },
        {
          text: 'Brochure JZ5 self-tapping screws.pdf',
          size: '5 MB',
          link: 'https://www.ejot.com/medias/sys_master/Brochures-Building-Fasteners/bro-bf/h12/hea/9349664505886/EJOT-bro-jz5-2024-07-30-EN.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
        {
          text: 'DoP ETA-10/0200 JZ5.pdf',
          size: '809 KB',
          link: 'https://www.ejot.com/medias/sys_master/dop-ilb/019/hd9/hbf/9340684206110/ejot-dop-1-014-100200-2018-3-jz5.pdf',
        },
        {
          text: 'DoP ETA-13/0177 JZ5.pdf',
          size: '806 KB',
          link: 'https://www.ejot.com/medias/sys_master/dop-ilb/019/hf6/hb7/9340685877278/ejot-dop-1-006-130177-2018-3-jz5.pdf',
        },
        {
          text: 'Assembly instruction.pdf',
          size: '2 MB',
          link: 'https://www.ejot.com/medias/sys_master/Montageanleitungen_Assembly-Instructions/Montageanleitungen_Assembly-Instructions/ha4/h93/9364898840606/EJOT-man-self-tapping-screws-de-en-global.20241216162349884.pdf',
        },
      ],
      
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
      
      cardDescription: 'Fastening profiled steel sheets and sandwich panels to steel substructures',
      useCase: 'Fastening profiled steel sheets and sandwich panels to steel substructures. For high-strength steel substructures',
      
      properties: [
        'A2 stainless steel with hardened steel dog point',
        'Stainless steel sealing washer',
        'Pre-assembled sealing washer',
      ],
      
      technicalSpecifications: [
        'Screw diameter: 6.3 mm',
      ],
      
      brochures: [
        {
          text: 'ETA-10/0200.pdf',
          size: '28 MB',
          link: 'https://www.ejot.com/medias/sys_master/ETA-Building-Fasteners/eta-bf/hdc/hb8/9038295171102/ETA-10-0200.pdf',
        },
        {
          text: 'ETA-13/0177.pdf',
          size: '25 MB',
          link: 'https://www.ejot.com/medias/sys_master/ETA-Building-Fasteners/eta-bf/h9b/hc4/9064125628446/EJOT-eta-13-0177-fastening-screws-ja-jz-jt-jf-EN.pdf',
        },
        {
          text: 'Product data sheet.pdf',
          size: '226 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/h9f/hb9/9381560451102/EJOT-pds-jz5-6.3-en-2025.pdf',
        },
        {
          text: 'Brochure JZ5 self-tapping screws.pdf',
          size: '5 MB',
          link: 'https://www.ejot.com/medias/sys_master/Brochures-Building-Fasteners/bro-bf/h12/hea/9349664505886/EJOT-bro-jz5-2024-07-30-EN.pdf',
        },
        {
          text: 'ETA-22/0126.pdf',
          size: '576 KB',
          link: 'https://www.ejot.com/medias/sys_master/ETA-Building-Fasteners/eta-bf/h97/hb4/9233671618590/EJOT-eta-22-0126-jt-jf-jz-screws-EN.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
        {
          text: 'DoP ETA-10/0200 JZ5.pdf',
          size: '809 KB',
          link: 'https://www.ejot.com/medias/sys_master/dop-ilb/019/hd9/hbf/9340684206110/ejot-dop-1-014-100200-2018-3-jz5.pdf',
        },
        {
          text: 'FM Approval.pdf',
          size: '564 KB',
          link: 'https://www.ejot.com/medias/sys_master/FM-Approval/fm-approval/h6e/he3/9340660613150/EJOT-fm-approved-certificate-of-compliance-jt2-jz5.pdf',
        },
        {
          text: 'DoP ETA-13/0177 JZ5.pdf',
          size: '806 KB',
          link: 'https://www.ejot.com/medias/sys_master/dop-ilb/019/hf6/hb7/9340685877278/ejot-dop-1-006-130177-2018-3-jz5.pdf',
        },
        {
          text: 'DoP ETA-22/0126 JZ5.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/dop-ilb/019/h0e/h64/9340689874974/ejot-dop-1-009-220126-2022-2-jz5.pdf',
        },
        {
          text: 'Assembly instruction.pdf',
          size: '2 MB',
          link: 'https://www.ejot.com/medias/sys_master/Montageanleitungen_Assembly-Instructions/Montageanleitungen_Assembly-Instructions/ha4/h93/9364898840606/EJOT-man-self-tapping-screws-de-en-global.20241216162349884.pdf',
        },
      ],
      
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