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

  // ✅ NEW: Product type filters
  productTypes: [
    'All',
    'J2 Type',
    'J3 Type',
  ],

  products: [

    // ============================================
    // J3 TYPE PRODUCTS (Existing - 12 products)
    // ============================================

    // PRODUCT 1: JZ3-S-6.3
    {
      id: 'ejot-001',
      name: 'JZ3-S-6.3',
      slug: 'jz3-s-6-3',
      category: 'Timber Screws',
      productType: 'J3', // ✅ NEW FIELD

      image: '/images/products/ejot/JZ3-S-6.3_p1.png',

      cardDescription: 'For fixing metal to steel or aluminium substructures',
      useCase: 'For fixing metal sections, timber, treads, platforms and balcony slabs to steel or aluminium substructures',

      properties: [
        'A2 stainless steel',
      ],

      technicalSpecifications: [
        'Diameter: 6.3 mm',
        'Head geometry: Countersunk head',
        'Drive: Hexalobular drive T30',
        'Installation rotation speed: max. 400 rpm',
      ],

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

      inStock: true,
      isNew: false,
      isFeatured: false,
      relatedProducts: ['ejot-005', 'ejot-004', 'ejot-006'],
    },

    // PRODUCT 2: JA3-LT-4.9
    {
      id: 'ejot-002',
      name: 'JA3-LT-4.9',
      slug: 'ja3-lt-4-9',
      category: 'Facade Screws',
      productType: 'J3', // ✅ NEW FIELD

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

    // PRODUCT 3: JZ1-6.3
    {
      id: 'ejot-003',
      name: 'CORREMAKS® JZ1-6.3',
      slug: 'jz1-6-3',
      category: 'Timber Screws',
      productType: 'J3', // ✅ NEW FIELD

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

    // PRODUCT 4: JA3-S-6.5
    {
      id: 'ejot-004',
      name: 'JA3-S-6.5',
      slug: 'ja3-s-6-5',
      category: 'Facade Screws',
      productType: 'J3', // ✅ NEW FIELD

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

    // PRODUCT 5: JB3-7.2
    {
      id: 'ejot-005',
      name: 'JB3-7.2',
      slug: 'jb3-7-2',
      category: 'Roof Screws',
      productType: 'J3', // ✅ NEW FIELD

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

    // PRODUCT 6: RLS 25
    {
      id: 'ejot-006',
      name: 'RLS 25',
      slug: 'rls-25',
      category: 'Roof Screws',
      productType: 'J3', // ✅ NEW FIELD

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

    // PRODUCT 7: JZ7-6.3
    {
      id: 'ejot-007',
      name: 'CRONIMAKS® JZ7-6.3',
      slug: 'jz7-6-3',
      category: 'Timber Screws',
      productType: 'J3', // ✅ NEW FIELD

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

    // PRODUCT 8: JA3-FR-4.9
    {
      id: 'ejot-008',
      name: 'JA3-FR-4.9',
      slug: 'ja3-fr-4-9',
      category: 'Facade Screws',
      productType: 'J3', // ✅ NEW FIELD

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

    // PRODUCT 9: JA2-6.5
    {
      id: 'ejot-009',
      name: 'JA2-6.5',
      slug: 'ja2-6-5',
      category: 'Facade Screws',
      productType: 'J3', // ✅ NEW FIELD

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

    // PRODUCT 10: JZ2-6.3
    {
      id: 'ejot-010',
      name: 'JZ2-6.3',
      slug: 'jz2-6-3',
      category: 'Timber Screws',
      productType: 'J3', // ✅ NEW FIELD

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

    // PRODUCT 11: JZ5-8.0
    {
      id: 'ejot-011',
      name: 'JZ5-8.0',
      slug: 'jz5-8-0',
      category: 'Timber Screws',
      productType: 'J3', // ✅ NEW FIELD

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

    // PRODUCT 12: JZ5-6.3
    {
      id: 'ejot-012',
      name: 'JZ5-6.3',
      slug: 'jz5-6-3',
      category: 'Timber Screws',
      productType: 'J3', // ✅ NEW FIELD

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

    // ============================================
    // J2 TYPE PRODUCTS (NEW - 16 products)
    // ============================================

    // PRODUCT 13: JF2-2-4.2
    {
      id: 'ejot-013',
      name: 'JF2-2-4.2',
      slug: 'jf2-2-4-2',
      category: 'Roof Screws',
      productType: 'J2', // ✅ J2 TYPE

      image: '/images/products/ejot/JF2-2-4.2.png',

      cardDescription: 'Self-drilling screw for metal to metal applications',
      useCase: 'Efficient fixing of steel air ducts',

      properties: [
        'Case-hardened steel',
        'Fastening with reduced swarf',
        'No cleaning of the ventilation ducts from drilling chips',
        'Non-skid application',
      ],

      technicalSpecifications: [
        'Diameter: 4.2 mm',
        'Drilling capacity tI + tII: 0.75 + 0.75 mm',
        'Drive: Hexagon A/F7',
        'Installation rotation speed: max. 1800 rpm',
      ],

      brochures: [
        {
          text: 'Product data sheet.pdf',
          size: '161 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/h2d/h1a/9381126504478/EJOT-pds-jf2-2-4-2-en-2025.pdf',
        },
        {
          text: 'Brochure EJOFAST.pdf',
          size: '4 MB',
          link: 'https://www.ejot.com/medias/sys_master/Brochures-Building-Fasteners/bro-bf/h1a/h76/9341779116062/EJOT-bro-ejofast-20240411-EN.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
        {
          text: 'Assembly instruction.pdf',
          size: '3 MB',
          link: 'https://www.ejot.com/medias/sys_master/Montageanleitungen_Assembly-Instructions/Montageanleitungen_Assembly-Instructions/hbb/h44/9364949041182/EJOT-man-self-drilling-screws-de-en-global.20241217070951218.pdf',
        },
      ],

      inStock: true,
      isNew: true,
      isFeatured: false,
      relatedProducts: [],
    },

    // PRODUCT 14: JF2-2H-4.8x19 collated
    {
      id: 'ejot-014',
      name: 'JF2-2H-4.8x19 collated',
      slug: 'jf2-2h-4-8x19-collated',
      category: 'Roof Screws',
      productType: 'J2', // ✅ J2 TYPE

      image: '/images/products/ejot/JF2-2H-4.8x19 collated.png',

      cardDescription: 'Collated self-drilling screws for automated installation',
      useCase: 'Side lap stitching of profiled steel sheets',

      properties: [
        'Case-hardened steel, zinc-plated',
        'Steel sealing washer, zinc-plated',
        'Pre-assembled sealing washer',
        'Fastening with reduced swarf',
        'With free spin zone under screw head for side lap stitching',
        'Non-skid application',
        'Collated (20 per cartidrige) suitable for fixing with the EJOFAST® JF screwdriver',
      ],

      technicalSpecifications: [
        'Diameter: 4.8 mm',
        'Drill capacity tI + tII: 0.88 + 0.88 mm',
        'Drive: Hexagon A/F8',
        'Installation rotation speed: max. 1800 rpm',
      ],

      brochures: [
        {
          text: 'ETA-10/0200.pdf',
          size: '28 MB',
          link: 'https://www.ejot.com/medias/sys_master/ETA-Building-Fasteners/eta-bf/hdc/hb8/9038295171102/ETA-10-0200.pdf',
        },
        {
          text: 'DoP ETA-10/0200 JF2.pdf',
          size: '665 KB',
          link: 'https://www.ejot.com/medias/sys_master/dop-ilb/019/h5d/h6e/9340683649054/ejot-dop-1-002-100200-2018-3-jf2.pdf',
        },
        {
          text: 'Brochure EJOFAST.pdf',
          size: '4 MB',
          link: 'https://www.ejot.com/medias/sys_master/Brochures-Building-Fasteners/bro-bf/h1a/h76/9341779116062/EJOT-bro-ejofast-20240411-EN.pdf',
        },
        {
          text: 'Product data sheet.pdf',
          size: '229 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/h15/hbf/9381128142878/EJOT-pds-jf2-2h-4.8-en-2025.pdf',
        },
        {
          text: 'FM Approval.pdf',
          size: '93 KB',
          link: 'https://www.ejot.com/medias/sys_master/FM-Approval/fm-approval/hee/hf4/9089305706526/EJOT-fm-approved-certificate-of-compliance-2.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
      ],

      inStock: true,
      isNew: true,
      isFeatured: false,
      relatedProducts: [],
    },

    // PRODUCT 15: JT2-2H-4.8
    {
      id: 'ejot-015',
      name: 'JT2-2H-4.8',
      slug: 'jt2-2h-4-8',
      category: 'Timber Screws',
      productType: 'J2', // ✅ J2 TYPE

      image: '/images/products/ejot/JT2-2H-4.8.png',

      cardDescription: 'Self-drilling screw for timber applications',
      useCase: 'Side lap stitching of profiled steel sheets',

      properties: [
        'Case-hardened steel, zinc-plated',
        'With free spin zone under screw head for side lap stitching',
      ],

      technicalSpecifications: [
        'Diameter: 4.8 mm',
        'Drill capacity tI + tII: 1.0 + 1.0 mm',
        'Drive: Hexagon A/F8',
        'Installation rotation speed: max. 1800 rpm',
      ],

      brochures: [
        {
          text: 'ETA-10/0200.pdf',
          size: '28 MB',
          link: 'https://www.ejot.com/medias/sys_master/ETA-Building-Fasteners/eta-bf/hdc/hb8/9038295171102/ETA-10-0200.pdf',
        },
        {
          text: 'DoP ETA-10/0200 JF2.pdf',
          size: '665 KB',
          link: 'https://www.ejot.com/medias/sys_master/dop-ilb/019/ha3/h73/9340683812894/ejot-dop-1-005-100200-2018-3-jt2.pdf',
        },
        {
          text: 'Product data sheet.pdf',
          size: '229 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/h01/hb4/9381130829854/EJOT-pds-jt2-2h-4.8-en-2025.pdf',
        },
        {
          text: 'FM Approval.pdf',
          size: '93 KB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
        {
          text: 'Assembly instruction.pdf',
          size: '3 MB',
          link: 'https://www.ejot.com/medias/sys_master/Montageanleitungen_Assembly-Instructions/Montageanleitungen_Assembly-Instructions/hbb/h44/9364949041182/EJOT-man-self-drilling-screws-de-en-global.20241217070951218.pdf',
        },
      ],

      inStock: true,
      isNew: false,
      isFeatured: false,
      relatedProducts: [],
    },

    // PRODUCT 16: JT2-3-4.8
    {
      id: 'ejot-016',
      name: 'JT2-3-4.8',
      slug: 'jt2-3-4-8',
      category: 'Timber Screws',
      productType: 'J2', // ✅ J2 TYPE

      image: '/images/products/ejot/JT2-3-4.8.png',

      cardDescription: 'High-performance timber fastening solution',
      useCase: ['Fastening profiled steel sheets to 2 mm steel substructure',
        'Side lap stitching of profiled steel sheets',
        'Suitable for installation with the EJOFAST® JF screwdriver'],


      properties: [
        'Case-hardened steel, zinc-plated',

      ],

      technicalSpecifications: [
        'Diameter: 4.8 mm',
        'Drill capacity tI + tII: 1.5 + 2.0 mm',
        'Drive: Hexagon A/F8',
        'Installation rotation speed: max. 1800 rpm',
      ],

      brochures: [
        {
          text: 'ETA-10/0200.pdf',
          size: '28 MB',
          link: 'https://www.ejot.com/medias/sys_master/ETA-Building-Fasteners/eta-bf/hdc/hb8/9038295171102/ETA-10-0200.pdf',
        },
        {
          text: 'DoP ETA-10/0200 JT2.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/dop-ilb/019/ha3/h73/9340683812894/ejot-dop-1-005-100200-2018-3-jt2.pdf',
        },
        {
          text: 'Product data sheet.pdf',
          size: '240 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/hab/h71/9381481087006/EJOT-pds-jt2-3-4.8-en-2025.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
        {
          text: 'FM Approval.pdf',
          size: '93 KB',
          link: 'https://www.ejot.com/medias/sys_master/FM-Approval/fm-approval/hee/hf4/9089305706526/EJOT-fm-approved-certificate-of-compliance-2.pdf',
        },
        {
          text: 'Assembly instruction.pdf',
          size: '3 MB',
          link: 'https://www.ejot.com/medias/sys_master/Montageanleitungen_Assembly-Instructions/Montageanleitungen_Assembly-Instructions/hbb/h44/9364949041182/EJOT-man-self-drilling-screws-de-en-global.20241217070951218.pdf',
        },
      ],

      inStock: true,
      isNew: false,
      isFeatured: false,
      relatedProducts: [],
    },

    // PRODUCT 17: JT2-3-4.8x19 collated
    {
      id: 'ejot-017',
      name: 'JT2-3-4.8x19 collated',
      slug: 'jt2-3-4-8x19-collated',
      category: 'Timber Screws',
      productType: 'J2', // ✅ J2 TYPE

      image: '/images/products/ejot/JT2-3-4.8x19 collated.png',

      cardDescription: 'Collated timber screws for fast installation',
      useCase: ['Fastening profiled steel sheets to 2 mm steel substructure',
        'Side lap stitching of profiled steel sheets',
        'Suitable for installation with the EJOFAST® JF screwdriver'],

      properties: [
        'Case-hardened steel, zinc-plated',
        'Steel sealing washer, zinc-plated',
        'Pre-assembled sealing washer',
        'Loose or collated',
      ],

      technicalSpecifications: [
        'Diameter: 4.8 mm',
        'Drilling capacity tI + tII: 1.5 + 2.0 mm',
        'Drive: Hexagon A/F8',
        'Installation rotation speed: max. 1800 rpm',
      ],

      brochures: [
        {
          text: 'ETA-10/0200.pdf',
          size: '28 MB',
          link: 'https://www.ejot.com/medias/sys_master/ETA-Building-Fasteners/eta-bf/hdc/hb8/9038295171102/ETA-10-0200.pdf',
        },
        {
          text: 'DoP ETA-10/0200 JT2.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/dop-ilb/019/ha3/h73/9340683812894/ejot-dop-1-005-100200-2018-3-jt2.pdf',
        },
        {
          text: 'Product data sheet.pdf',
          size: '240 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/hab/h71/9381481087006/EJOT-pds-jt2-3-4.8-en-2025.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
        {
          text: 'FM Approval.pdf',
          size: '93 KB',
          link: 'https://www.ejot.com/medias/sys_master/FM-Approval/fm-approval/hee/hf4/9089305706526/EJOT-fm-approved-certificate-of-compliance-2.pdf',
        },

      ],

      inStock: true,
      isNew: true,
      isFeatured: true,
      relatedProducts: [],
    },

    // PRODUCT 18: JT2-2H-Plus-5.5 EJOGUARD
    {
      id: 'ejot-018',
      name: 'JT2-2H-Plus-5.5 EJOGUARD',
      slug: 'jt2-2h-plus-5-5-ejoguard',
      category: 'Timber Screws',
      productType: 'J2', // ✅ J2 TYPE

      image: '/images/products/ejot/JT2-2H-Plus-5.5 EJOGUARD.png',

      cardDescription: 'Enhanced corrosion protection for demanding environments',
      useCase: ['Side lap stitching of profiled steel sheets',
        'Fastening profiled steel sheets to 0.4 – 2.0 mm steel substructure',
        'For high-strength steel substructures according to ETA-10/0200'],

      properties: [
        'Case-hardened steel',
        'EJOGUARD corrosion protection',
        'Steel sealing washer, zinc-plated',
        'Pre-assembled sealing washer',
        'With free spin zone under screw head for effective side lap stitching',
      ],

      technicalSpecifications: [
        'Diameter: 5.5 mm',
        'Drill capacity tI + tII: 1.5 + 2.0 mm',
        'Drive: Hexagon A/F8',
        'Installation rotation speed: max. 1800 rpm',
      ],

      brochures: [
        {
          text: 'Product data sheet.pdf',
          size: '200 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/h70/hcd/9381131386910/EJOT-pds-jt2-2h-plus-5.5-en-2025.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
        {
          text: 'ETA-21/0420.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/ETA-Building-Fasteners/eta-bf/h17/hc8/9235651067934/EJOT-eta-21-0420-fastening-screws-jt2-EN.pdf',
        },
        {
          text: 'DoP ETA-21/0420 JT2.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/dop-ilb/019/h88/h90/9340687417374/ejot-dop-1-001-210420-2018-2-jt2.pdf',
        },
        {
          text: 'Assembly instruction.pdf',
          size: '3 MB',
          link: 'https://www.ejot.com/medias/sys_master/Montageanleitungen_Assembly-Instructions/Montageanleitungen_Assembly-Instructions/hbb/h44/9364949041182/EJOT-man-self-drilling-screws-de-en-global.20241217070951218.pdf',
        },
      ],

      inStock: true,
      isNew: true,
      isFeatured: false,
      relatedProducts: [],
    },

    // PRODUCT 19: JT2-6-5.5 F12
    {
      id: 'ejot-019',
      name: 'JT2-6-5.5 F12',
      slug: 'jt2-6-5-5-f12',
      category: 'Timber Screws',
      productType: 'J2', // ✅ J2 TYPE

      image: '/images/products/ejot/JT2-6-5.5 F12.png',

      cardDescription: 'F12 certified timber screw for demanding applications',
      useCase: ['Fastening profiled steel sheets to 1.5 - 4 mm steel substructure',
        'For high-strength steel substructures according to ETA-21/0420'],

      properties: [
        'Case-hardened steel, zinc-plated',
        'Steel sealing washer, zinc-plated',
        'Pre-assembled sealing washer',
      ],

      technicalSpecifications: [
        'Diameter: 5.5 mm',
        'Drilling capacity tI + tII: 2.0 + 4.0 mm',
        'Drive: Hexagon A/F8',
        'Installation rotation speed: max. 1500 rpm',
      ],

      brochures: [
        {
          text: 'Product data sheet.pdf',
          size: '200 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/he3/had/9381482692638/EJOT-pds-jt2-6-5.5-en-2025.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
        {
          text: 'ETA-21/0420.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/ETA-Building-Fasteners/eta-bf/h17/hc8/9235651067934/EJOT-eta-21-0420-fastening-screws-jt2-EN.pdf',
        },
        {
          text: 'DoP ETA-21/0420 JT2.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/dop-ilb/019/h88/h90/9340687417374/ejot-dop-1-001-210420-2018-2-jt2.pdf',
        },
        {
          text: 'Assembly instruction.pdf',
          size: '3 MB',
          link: 'https://www.ejot.com/medias/sys_master/Montageanleitungen_Assembly-Instructions/Montageanleitungen_Assembly-Instructions/hbb/h44/9364949041182/EJOT-man-self-drilling-screws-de-en-global.20241217070951218.pdf',
        },
      ],

      inStock: true,
      isNew: false,
      isFeatured: false,
      relatedProducts: [],
    },

    // PRODUCT 20: JT2-6-6.3
    {
      id: 'ejot-020',
      name: 'JT2-6-6.3',
      slug: 'jt2-6-6-3',
      category: 'Timber Screws',
      productType: 'J2', // ✅ J2 TYPE

      image: '/images/products/ejot/JT2-6-6.3.png',

      cardDescription: 'Heavy-duty timber fastening solution',
      useCase: 'Fastening profiled steel sheets to 2–5 mm steel substructure',

      properties: [
        'Case-hardened steel, zinc-plated',
        'Steel sealing washer, zinc-plated',
        'Pre-assembled sealing washer',
      ],

      technicalSpecifications: [
        'Diameter: 6.3 mm',
        'Drilling capacity tI + tII: 1.5 + 5.0 mm',
        'Drive: Hexagon AF 3/8"',
        'Installation rotation speed: max. 1500 rpm',
      ],

      brochures: [
        {
          text: 'Product data sheet.pdf',
          size: '200 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/h1f/h5f/9381483315230/EJOT-pds-jt2-6-6.3-en-2025.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
        {
          text: 'FM Approval.pdf',
          size: '564 KB',
          link: 'https://www.ejot.com/medias/sys_master/FM-Approval/fm-approval/h6e/he3/9340660613150/EJOT-fm-approved-certificate-of-compliance-jt2-jz5.pdf',
        },
        {
          text: 'FM Approval.pdf',
          size: '93 KB',
          link: 'https://www.ejot.com/medias/sys_master/FM-Approval/fm-approval/hee/hf4/9089305706526/EJOT-fm-approved-certificate-of-compliance-2.pdf',
        },
        {
          text: 'ETA-21/0420.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/ETA-Building-Fasteners/eta-bf/h17/hc8/9235651067934/EJOT-eta-21-0420-fastening-screws-jt2-EN.pdf',
        },
        {
          text: 'DoP ETA-21/0420 JT2.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/dop-ilb/019/h88/h90/9340687417374/ejot-dop-1-001-210420-2018-2-jt2.pdf',
        },
        {
          text: 'Assembly instruction.pdf',
          size: '3 MB',
          link: 'https://www.ejot.com/medias/sys_master/Montageanleitungen_Assembly-Instructions/Montageanleitungen_Assembly-Instructions/hbb/h44/9364949041182/EJOT-man-self-drilling-screws-de-en-global.20241217070951218.pdf',
        },
      ],

      inStock: true,
      isNew: false,
      isFeatured: false,
      relatedProducts: [],
    },

    // PRODUCT 21: JT2-12-5.5 EJOGUARD
    {
      id: 'ejot-021',
      name: 'JT2-12-5.5 EJOGUARD',
      slug: 'jt2-12-5-5-ejoguard',
      category: 'Timber Screws',
      productType: 'J2', // ✅ J2 TYPE

      image: '/images/products/ejot/JT2-12-5.5 EJOGUARD.png',

      cardDescription: 'Extended length screw with EJOGUARD protection',
      useCase: 'Fastening profiled steel sheets to 4–12 mm steel substructure',

      properties: [
        'Case-hardened steel, protected against corrosion',
        'High-grade coating to improve the corrosion protection',
        'Steel sealing washer, zinc-plated',
        'Pre-assembled sealing washer',
      ],

      technicalSpecifications: [
        'Diameter: 5.5 mm',
        'Drilling capacity tI + tII: 1.0 + 12.0 mm / 2.0 + 10.0 mm',
        'Drive: Hexagon A/F8',
        'Installation rotation speed: max. 1500 rpm',
      ],

      brochures: [
        {
          text: 'Product data sheet.pdf',
          size: '200 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/hdc/h82/9381485051934/EJOT-pds-jt2-12-5.5-en-2025.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
        {
          text: 'FM Approval.pdf',
          size: '564 KB',
          link: 'https://www.ejot.com/medias/sys_master/FM-Approval/fm-approval/h6e/he3/9340660613150/EJOT-fm-approved-certificate-of-compliance-jt2-jz5.pdf',
        },
        {
          text: 'ETA-21/0420.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/ETA-Building-Fasteners/eta-bf/h17/hc8/9235651067934/EJOT-eta-21-0420-fastening-screws-jt2-EN.pdf',
        },
        {
          text: 'DoP ETA-21/0420 JT2.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/dop-ilb/019/h88/h90/9340687417374/ejot-dop-1-001-210420-2018-2-jt2.pdf',
        },
        {
          text: 'Assembly instruction.pdf',
          size: '3 MB',
          link: 'https://www.ejot.com/medias/sys_master/Montageanleitungen_Assembly-Instructions/Montageanleitungen_Assembly-Instructions/hbb/h44/9364949041182/EJOT-man-self-drilling-screws-de-en-global.20241217070951218.pdf',
        },
      ],

      inStock: true,
      isNew: false,
      isFeatured: false,
      relatedProducts: [],
    },

    // PRODUCT 22: JT2-18-5.5 F12 EJOGUARD
    {
      id: 'ejot-022',
      name: 'JT2-18-5.5 F12 EJOGUARD',
      slug: 'jt2-18-5-5-f12-ejoguard',
      category: 'Timber Screws',
      productType: 'J2', // ✅ J2 TYPE

      image: '/images/products/ejot/JT2-18-5.5 F12 EJOGUARD.png',

      cardDescription: 'Premium timber screw combining F12 and EJOGUARD',
      useCase: 'Fastening profiled steel sheets to 4 – 16 mm steel substructure',

      properties: [
        'Case-hardened steel',
        'EJOGUARD corrosion protection',
        'Steel sealing washer, zinc-plated',
        'Pre-assembled sealing washer',
      ],

      technicalSpecifications: [
        'Diameter: 5.5 mm',
        'Drilling capacity tI + tII: 2.0 + 16.0 mm',
        'Drive: Hexagon A/F8',
        'Installation rotation speed: max. 1300 rpm',
      ],

      brochures: [
        {
          text: 'Product data sheet.pdf',
          size: '195 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/h04/h12/9381485608990/EJOT-pds-jt2-18-5.5-en-2025.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
        {
          text: 'ETA-21/0420.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/ETA-Building-Fasteners/eta-bf/h17/hc8/9235651067934/EJOT-eta-21-0420-fastening-screws-jt2-EN.pdf',
        },
        {
          text: 'DoP ETA-21/0420 JT2.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/dop-ilb/019/h88/h90/9340687417374/ejot-dop-1-001-210420-2018-2-jt2.pdf',
        },
        {
          text: 'Assembly instruction.pdf',
          size: '3 MB',
          link: 'https://www.ejot.com/medias/sys_master/Montageanleitungen_Assembly-Instructions/Montageanleitungen_Assembly-Instructions/hbb/h44/9364949041182/EJOT-man-self-drilling-screws-de-en-global.20241217070951218.pdf',
        },
      ],

      inStock: true,
      isNew: true,
      isFeatured: true,
      relatedProducts: [],
    },

    // PRODUCT 23: JT2-FZ-6-6.3 EJOGUARD
    {
      id: 'ejot-023',
      name: 'JT2-FZ-6-6.3 EJOGUARD',
      slug: 'jt2-fz-6-6-3-ejoguard',
      category: 'Facade Screws',
      productType: 'J2', // ✅ J2 TYPE

      image: '/images/products/ejot/JT2-FZ-6-6,3 EJOGUARD.png',

      cardDescription: 'Facade screw with enhanced corrosion protection',
      useCase: 'Fastening corrugated fibre cement sheet 177/51 to steel substructure 1.5–6 mm',

      properties: [
        'Case-hardened steel',
        'Climadur coated-high-quality coating to improve corrosion protection (15 Kesternich cycles, DIN 50018, 1997)',
        'Pre-assembled FZD sealing washer',
        'A2 stainless steel washer',
        'Screw wings save additional drilling into the corrugated slabs',
        'Reduced forcing tension',
      ],

      technicalSpecifications: [
        'Diameter: 6.3 mm',
        'Drilling capacity tII: 6.0 mm',
        'Drive: Hexagon A/F8',
        'Installation rotation speed: max. 1500 rpm',
      ],

      brochures: [
        {
          text: 'Product data sheet.pdf',
          size: '188 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/h75/h0f/9381487476766/EJOT-pds-jt2-fz-6-6.3-en-2025.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
        {
          text: 'Assembly instruction.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/Montageanleitungen_Assembly-Instructions/Montageanleitungen_Assembly-Instructions/he3/hc4/9364899725342/EJOT-man-jt-fz-de-en-global.20241216162238084.pdf',
        },
      ],

      inStock: true,
      isNew: false,
      isFeatured: false,
      relatedProducts: [],
    },

    // PRODUCT 24: JT2-FZ-12-6.3 EJOGUARD
    {
      id: 'ejot-024',
      name: 'JT2-FZ-12-6.3 EJOGUARD',
      slug: 'jt2-fz-12-6-3-ejoguard',
      category: 'Facade Screws',
      productType: 'J2', // ✅ J2 TYPE

      image: '/images/products/ejot/JT2-FZ-12-6.3 EJOGUARD.png',

      cardDescription: 'Extended facade screw with EJOGUARD technology',
      useCase: 'Fastening corrugated fibre cement sheet 177/51 to steel substructure 5–12 mm',

      properties: [
        'Case-hardened steel',
        'High-grade coating to improve the corrosion protection (15 Kesternich cycles, DIN 50018, 1997)',
        'Pre-assembled FZD sealing washer',
        'A2 stainless steel washer',
        'Screw wings save additional drilling into the corrugated slabs',
        'Reduced forcing tension',
      ],

      technicalSpecifications: [
        'Diameter: 6.3 mm',
        'Drilling capacity tII: 12.0 mm',
        'Drive: Hexagon A/F8',
        'Installation rotation speed: max. 1500 rpm',
      ],

      brochures: [
        {
          text: 'Product data sheet.pdf',
          size: '189 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/h7d/h92/9381487509534/EJOT-pds-jt2-fz-12-6.3-en-2025.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
        {
          text: 'Assembly instruction.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/Montageanleitungen_Assembly-Instructions/Montageanleitungen_Assembly-Instructions/he3/hc4/9364899725342/EJOT-man-jt-fz-de-en-global.20241216162238084.pdf',
        },
      ],

      inStock: true,
      isNew: false,
      isFeatured: false,
      relatedProducts: [],
    },

    // PRODUCT 25: JT2-FZ-F-6.5
    {
      id: 'ejot-025',
      name: 'JT2-FZ-F-6.5',
      slug: 'jt2-fz-f-6-5',
      category: 'Facade Screws',
      productType: 'J2', // ✅ J2 TYPE

      image: '/images/products/ejot/JT2-FZ-F-6.5.png',

      cardDescription: 'High-performance facade fastening solution',
      useCase: 'Fastening corrugated fibre cement sheet to timber substructure',

      properties: [
        'Case-hardened steel, hot-dip zinc-plated',
        'Pre-assembled FZD sealing washer',
        'A2 stainless steel washer',
        'Screw wings save additional drilling into the corrugated slabs',
        'Reduced forcing tension',
      ],

      technicalSpecifications: [
        'Diameter: 6.5 mm',
        'Drive: Hexagon A/F8',
      ],

      brochures: [
        {
          text: 'Product data sheet.pdf',
          size: '181 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/hb8/h7c/9381487542302/EJOT-pds-jt2-fz-f-6.5-en-2025.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
        {
          text: 'Assembly instruction.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/Montageanleitungen_Assembly-Instructions/Montageanleitungen_Assembly-Instructions/he3/hc4/9364899725342/EJOT-man-jt-fz-de-en-global.20241216162238084.pdf',
        },
      ],

      inStock: true,
      isNew: false,
      isFeatured: false,
      relatedProducts: [],
    },

    // PRODUCT 26: JT2-ST-2-6.0
    {
      id: 'ejot-026',
      name: 'JT2-ST-2-6.0',
      slug: 'jt2-st-2-6-0',
      category: 'Timber Screws',
      productType: 'J2', // ✅ J2 TYPE

      image: '/images/products/ejot/JT2-ST-2-6.0.png',

      cardDescription: 'Structural timber screw for heavy loads',
      useCase: 'Fastening timber components to thin-walled steel substructures',

      properties: [
        'Case-hardened steel',
        'High-grade coating to improve the corrosion protection (15 Kesternich cycles, DIN 50018, 1997)',
        'With countersunk head',
      ],

      technicalSpecifications: [
        'Diameter: 6.0 mm',
        'Drilling capacity tI + tII: 1.0 + 1.0 mm',
        'Drive: Hexalobular drive TX25',
        'Installation rotation speed: max. 1500 rpm',
      ],

      brochures: [
        {
          text: 'Product data sheet.pdf',
          size: '214 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/h6f/h46/9381487575070/EJOT-pds-jt2-st-2-6.0-en-2025.pdf',
        },
        {
          text: 'FM Approval.pdf',
          size: '157 KB',
          link: 'https://www.ejot.com/medias/sys_master/FM-Approval/fm-approval/he0/h00/9239636213790/EJOT-fm-approved-flat-roofing.pdf',
        },
        {
          text: 'EPD Self-tapping screws.pdf',
          size: '1 MB',
          link: 'https://www.ejot.com/medias/sys_master/epdsilb/002/hf4/h66/9261587398686/EJOT-epd-self-tapping-screws-EN.pdf',
        },
        {
          text: 'ETA-07/0013.pdf',
          size: '3 MB',
          link: 'https://www.ejot.com/medias/sys_master/ETA-Building-Fasteners/eta-bf/h7b/hf9/9232569499678/EJOT-eta-07-0013-fasteners-for-flexible-roof-waterproofing-membrane-EN.pdf',
        },
        {
          text: 'Assembly instruction.pdf',
          size: '3 MB',
          link: 'https://www.ejot.com/medias/sys_master/Montageanleitungen_Assembly-Instructions/Montageanleitungen_Assembly-Instructions/hbb/h44/9364949041182/EJOT-man-self-drilling-screws-de-en-global.20241217070951218.pdf',
        },
      ],

      inStock: true,
      isNew: false,
      isFeatured: false,
      relatedProducts: [],
    },

    // PRODUCT 27: JT2-ST-2-6.8
    {
      id: 'ejot-027',
      name: 'JT2-ST-2-6.8',
      slug: 'jt2-st-2-6-8',
      category: 'Timber Screws',
      productType: 'J2', // ✅ J2 TYPE

      image: '/images/products/ejot/JT2-ST-2-6.8.png',

      cardDescription: 'Heavy-duty structural timber screw',
      useCase: ['Fastening timber components to thin-walled steel substructures',
        'Fastening fixing rails to thin-walled steel and aluminium substructures',
      ],
      properties: [
        'Case-hardened steel',
        'High-grade coating to improve the corrosion protection (15 Kesternich cycles, DIN 50018, 1997)',
        'With countersunk head',
      ],

      technicalSpecifications: [
        'Diameter: 6.8 mm',
        'Drilling capacity tI + tII: 1.0 + 1.0 mm',
        'Drive: Hexalobular drive TX25',
        'Installation rotation speed: max. 1500 rpm',
      ],

      brochures: [
        {
          text: 'Product data sheet.pdf',
          size: '201 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/h30/h84/9381488001054/EJOT-pds-jt2-st-2-6.8-en-2025.pdf',
        },
        {
          text: 'ETA-07/0013.pdf',
          size: '3 MB',
          link: 'https://www.ejot.com/medias/sys_master/ETA-Building-Fasteners/eta-bf/h7b/hf9/9232569499678/EJOT-eta-07-0013-fasteners-for-flexible-roof-waterproofing-membrane-EN.pdf',
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
      relatedProducts: [],
    },

    // PRODUCT 28: JT2-WD-5-5.5
    {
      id: 'ejot-028',
      name: 'JT2-WD-5-5.5',
      slug: 'jt2-wd-5-5-5',
      category: 'Timber Screws',
      productType: 'J2', // ✅ J2 TYPE

      image: '/images/products/ejot/JT2-WD-5-5.5.png',

      cardDescription: 'Wide-diameter timber screw for enhanced pull-out resistance',
      useCase: 'Special screw for fastening wood to steel substructures',

      properties: [
        'Case-hardened steel',
        'Zinc-plated, blue passivated finish',
        'The wings ream out the wood larger than the thread diameter',
        'The wings prevent force feeding of the screw and thus possible damage to the drill point',
      ],

      technicalSpecifications: [
        'Diameter: 5.5 mm',
        'Drilling capacity tII: 5.0 mm',
        'Drive: Hexalobular drive T25',
      ],

      brochures: [
        {
          text: 'Product data sheet.pdf',
          size: '283 KB',
          link: 'https://www.ejot.com/medias/sys_master/Product-data-sheets-EN/pds-en/hf9/h4a/9381492686878/EJOT-pds-jt2-wd-5-5.5-en-2025.pdf',
        },
        {
          text: 'Assembly instruction.pdf',
          size: '3 MB',
          link: 'https://www.ejot.com/medias/sys_master/Montageanleitungen_Assembly-Instructions/Montageanleitungen_Assembly-Instructions/hbb/h44/9364949041182/EJOT-man-self-drilling-screws-de-en-global.20241217070951218.pdf',
        },
      ],

      inStock: true,
      isNew: false,
      isFeatured: false,
      relatedProducts: [],
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

// ✅ NEW: Filter by product type (J2 or J3)
export const getEjotProductsByType = (productType) => {
  if (productType === 'All') {
    return ejotScrewData.products;
  }
  // Extract 'J2' or 'J3' from 'J2 Type' or 'J3 Type'
  const typeCode = productType.split(' ')[0];
  return ejotScrewData.products.filter(product => product.productType === typeCode);
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