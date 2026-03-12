

// ============================================
// TEGOLA CANADESE PRODUCTS DATA
// Company ID: 6 (6th company)
// ============================================

// ── Shared Features (same for all products) ──
const sharedFeatures = [
    {
        icon: '/images/products/tegola-canadese/icons/design.svg',
        text: 'Exclusive DESIGN for any roof and context, thanks to the wide range of models and colors',
    },
    {
        icon: '/images/products/tegola-canadese/icons/impermeabilita.svg',
        text: 'WATERPROOFING to ensure your roof quality and durability over time',
    },
    {
        icon: '/images/products/tegola-canadese/icons/leggerezza.svg',
        text: 'LIGHTNESS above your head to guarantee maximum safety, even in the event of a seismic event',
    },
    {
        icon: '/images/products/tegola-canadese/icons/resistenza.svg',
        text: 'RESISTANCE to any extreme conditions, to hailstorm, to strong winds',
    },
    {
        icon: '/images/products/tegola-canadese/icons/semplicita.svg',
        text: 'SIMPLICITY they adapt to any shape and slope of the roof, easy to transport and apply.',
    },
];

// ── Shared Brochures (same for all products) ──
const sharedBrochures = [
    {
        text: 'PRESTIGE TRADITIONAL SHINGLE',
        size: '91 KB',
        link: 'https://tegolacanadese.com/wp-content/uploads/2025/12/Prestige-Traditional_installation-instruction-EN.pdf',
    },
    {
        text: 'Data sheet Prestige Traditional',
        size: '91 KB',
        link: 'https://tegolacanadese.com/wp-content/uploads/2025/12/DRS1P618A_Prestige_Traditional_rev04.pdf',
    },
    {
        text: 'Declaration of Performance',
        size: '91 KB',
        link: 'https://tegolacanadese.com/wp-content/uploads/2025/12/004_DoP_Prestige_Traditional_rev00_EN.pdf',
    },
];

// ── Shared KPI Specs (same for all products) ──
const sharedKpiSpecs = [
    { label: 'Reference Standard', value: 'EN 544' },
    { label: 'Weight (kg/m²)', value: '9,00' },
    { label: 'Dimensions (mm)', value: '1000 x 337' },
    { label: 'Tiles per package (n°)', value: '24' },
    { label: 'Surface per parcel (m²)', value: '3,45' },
    { label: 'Surface Coating', value: 'G - EVO ceramic granules' },
    { label: 'Set of the Flaps', value: 'Self-adhesive tabs' },
    { label: 'Reinforcement', value: 'Fiberglass' },
    { label: 'Important', value: 'This product does not contain asbestos and tar' },
];

export const tegolaData = {
    companyInfo: {
        id: 6,
        name: 'Tegola Canadese',
        slug: 'tegola',
        logo: '/images/products/logo_tegola-canadese.png',
        tagline: '',
        description: '',
        heroImage: '/images/companies/tegola-hero.jpg',
        primaryColor: '#000000',
        website: 'https://tegolacanadese.com',
    },

    categories: [
        'All Products',
        'Prestige',
        'Ultimetal',
        'Master',
        'Top Shingle',
    ],

    products: [

        // ============================================
        // PRODUCT 1: Prestige Traditional
        // ============================================
        {
            id: 'tegola-001',
            name: 'Prestige Traditional',
            slug: 'prestige-traditional',
            category: 'Prestige',
            pageCategory: 'Prestige',

            image: '/images/products/tegola-canadese/p1.png',
            galleryImages: [
                '/images/products/tegola-canadese/p1_1.png',
                '/images/products/tegola-canadese/p1_2.png',
                '/images/products/tegola-canadese/p1_3.png',
                '/images/products/tegola-canadese/p1_4.png',
            ],

            cardDescription: 'PRESTIGE shingles with a copper finish is the workhorse of Tegola Canadese – unique items, with over 30 years on the market.',
            longDescription: 'PRESTIGE TRADITIONAL embodies the tradition of shingle roofs with its beaver tail shape and copper finish, which enjoys the benefit of high-performance adhesives for excellent bonding of the coil to the substrate – resistance to weathering, durability and unparalleled design also typify this model.',

            bottomSectionTitle: '',

            kpiSpecs: [...sharedKpiSpecs],

            colorRange: [
                {
                    name: 'Surfmist',
                    image: '/images/products/tegola-canadese/p1c1.png',
                },
            ],

            features: [...sharedFeatures],

            brochures: [...sharedBrochures],

            inStock: true,
            isNew: false,
            isFeatured: true,
            relatedProducts: ['tegola-002', 'tegola-003'],
        },

        // ============================================
        // PRODUCT 2: Prestige Compact Plus
        // ============================================
        {
            id: 'tegola-002',
            name: 'Prestige Compact Plus',
            slug: 'prestige-compact-plus',
            category: 'Prestige',
            pageCategory: 'Prestige',

            image: '/images/products/tegola-canadese/p2.png',
            galleryImages: [
                '/images/products/tegola-canadese/p2_1.png',
                '/images/products/tegola-canadese/p2_2.png',
                '/images/products/tegola-canadese/p2_3.png',
                '/images/products/tegola-canadese/p2_4.png',
            ],

            cardDescription: 'PRESTIGE shingles with a copper finish is the workhorse of Tegola Canadese – unique items, with over 30 years on the market.',
            longDescription: 'PRESTIGE TRADITIONAL embodies the tradition of shingle roofs with its beaver tail shape and copper finish, which enjoys the benefit of high-performance adhesives for excellent bonding of the coil to the substrate – resistance to weathering, durability and unparalleled design also typify this model.',

            bottomSectionTitle: '',

            kpiSpecs: [...sharedKpiSpecs],

            colorRange: [
                {
                    name: 'Surfmist',
                    image: '/images/products/tegola-canadese/p2c1.png',
                },
            ],

            features: [...sharedFeatures],

            brochures: [...sharedBrochures],

            inStock: true,
            isNew: false,
            isFeatured: true,
            relatedProducts: ['tegola-001', 'tegola-003'],
        },

        // ============================================
        // PRODUCT 3: Ultimetal HD
        // ============================================
        {
            id: 'tegola-003',
            name: 'Ultimetal HD',
            slug: 'ultimetal-hd',
            category: 'Ultimetal',
            pageCategory: 'Ultimetal',

            image: '/images/products/tegola-canadese/p3.png',
            galleryImages: [
                '/images/products/tegola-canadese/p3_1.png',
                '/images/products/tegola-canadese/p3_2.png',
                '/images/products/tegola-canadese/p3_3.png',
                '/images/products/tegola-canadese/p3_4.png',
            ],

            cardDescription: 'PRESTIGE shingles with a copper finish is the workhorse of Tegola Canadese – unique items, with over 30 years on the market.',
            longDescription: 'PRESTIGE TRADITIONAL embodies the tradition of shingle roofs with its beaver tail shape and copper finish, which enjoys the benefit of high-performance adhesives for excellent bonding of the coil to the substrate – resistance to weathering, durability and unparalleled design also typify this model.',

            bottomSectionTitle: '',

            kpiSpecs: [...sharedKpiSpecs],

            colorRange: [
                {
                    name: 'Surfmist',
                    image: '/images/products/tegola-canadese/p3c1.png',
                },
            ],

            features: [...sharedFeatures],

            brochures: [...sharedBrochures],

            inStock: true,
            isNew: false,
            isFeatured: true,
            relatedProducts: ['tegola-001', 'tegola-004'],
        },

        // ============================================
        // PRODUCT 4: Master Coppo
        // ============================================
        {
            id: 'tegola-004',
            name: 'Master Coppo',
            slug: 'master-coppo',
            category: 'Master',
            pageCategory: 'Master',

            image: '/images/products/tegola-canadese/p4.png',
            galleryImages: [
                '/images/products/tegola-canadese/p4_1.png',
                '/images/products/tegola-canadese/p4_2.png',
                '/images/products/tegola-canadese/p4_3.png',
                '/images/products/tegola-canadese/p4_4.png',
            ],

            cardDescription: 'PRESTIGE shingles with a copper finish is the workhorse of Tegola Canadese – unique items, with over 30 years on the market.',
            longDescription: 'PRESTIGE TRADITIONAL embodies the tradition of shingle roofs with its beaver tail shape and copper finish, which enjoys the benefit of high-performance adhesives for excellent bonding of the coil to the substrate – resistance to weathering, durability and unparalleled design also typify this model.',

            bottomSectionTitle: '',

            kpiSpecs: [...sharedKpiSpecs],

            colorRange: [
                {
                    name: 'Surfmist',
                    image: '/images/products/tegola-canadese/p4c1.png',
                },
            ],

            features: [...sharedFeatures],

            brochures: [...sharedBrochures],

            inStock: true,
            isNew: false,
            isFeatured: true,
            relatedProducts: ['tegola-003', 'tegola-005'],
        },

        // ============================================
        // PRODUCT 5: Master J Series
        // ============================================
        {
            id: 'tegola-005',
            name: 'Master J Series',
            slug: 'master-j-series',
            category: 'Master',
            pageCategory: 'Master',

            image: '/images/products/tegola-canadese/p5.png',
            galleryImages: [
                '/images/products/tegola-canadese/p5_1.png',
                '/images/products/tegola-canadese/p5_2.png',
                '/images/products/tegola-canadese/p5_3.png',
                '/images/products/tegola-canadese/p5_4.png',
            ],

            cardDescription: 'PRESTIGE shingles with a copper finish is the workhorse of Tegola Canadese – unique items, with over 30 years on the market.',
            longDescription: 'PRESTIGE TRADITIONAL embodies the tradition of shingle roofs with its beaver tail shape and copper finish, which enjoys the benefit of high-performance adhesives for excellent bonding of the coil to the substrate – resistance to weathering, durability and unparalleled design also typify this model.',

            bottomSectionTitle: '',

            kpiSpecs: [...sharedKpiSpecs],

            colorRange: [
                {
                    name: 'Surfmist',
                    image: '/images/products/tegola-canadese/p5c1.png',
                },
            ],

            features: [...sharedFeatures],

            brochures: [...sharedBrochures],

            inStock: true,
            isNew: false,
            isFeatured: true,
            relatedProducts: ['tegola-004', 'tegola-006'],
        },

        // ============================================
        // PRODUCT 6: Top Shingle Rectangular In Line
        // ============================================
        {
            id: 'tegola-006',
            name: 'Top Shingle Rectangular In Line',
            slug: 'top-shingle-rectangular-in-line',
            category: 'Top Shingle',
            pageCategory: 'Top Shingle',

            image: '/images/products/tegola-canadese/p6.png',
            galleryImages: [
                '/images/products/tegola-canadese/p6_1.png',
                '/images/products/tegola-canadese/p6_2.png',
                '/images/products/tegola-canadese/p6_3.png',
                '/images/products/tegola-canadese/p6_4.png',
            ],

            cardDescription: 'PRESTIGE shingles with a copper finish is the workhorse of Tegola Canadese – unique items, with over 30 years on the market.',
            longDescription: 'PRESTIGE TRADITIONAL embodies the tradition of shingle roofs with its beaver tail shape and copper finish, which enjoys the benefit of high-performance adhesives for excellent bonding of the coil to the substrate – resistance to weathering, durability and unparalleled design also typify this model.',

            bottomSectionTitle: '',

            kpiSpecs: [...sharedKpiSpecs],

            colorRange: [
                {
                    name: 'Surfmist',
                    image: '/images/products/tegola-canadese/p6c1.png',
                },
            ],

            features: [...sharedFeatures],

            brochures: [...sharedBrochures],

            inStock: true,
            isNew: false,
            isFeatured: true,
            relatedProducts: ['tegola-005', 'tegola-001'],
        },

    ],
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getTegolaProductBySlug = (slug) => {
    return tegolaData.products.find(product => product.slug === slug);
};

export const getTegolaProductsByCategory = (category) => {
    if (category === 'All Products') {
        return tegolaData.products;
    }
    return tegolaData.products.filter(product => product.category === category);
};

export const getTegolaFeaturedProducts = () => {
    return tegolaData.products.filter(product => product.isFeatured);
};

export const getTegolaRelatedProducts = (productId) => {
    const product = tegolaData.products.find(p => p.id === productId);
    if (!product || !product.relatedProducts) return [];

    return tegolaData.products.filter(p =>
        product.relatedProducts.includes(p.id)
    );
};
