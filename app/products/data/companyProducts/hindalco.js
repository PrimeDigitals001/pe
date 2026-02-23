// Hindalco Products Data
// Single product company - Everlast Aluminium Roofing

export const hindalcoData = {
    companyInfo: {
        id: 4,
        name: 'Hindalco',
        slug: 'hindalco',
        logo: '/images/products/logo_hindalco.png',
        tagline: 'Everlast Aluminium Roofing Solutions',
        description: 'Hindalco Everlast is used across industrial, commercial, and residential projects with superior aluminium roofing solutions.',
        heroImage: '/images/companies/hindalco-hero.jpg',
        primaryColor: '#E31E24', // Hindalco red
        website: 'https://www.hindalco.com',
    },

    categories: [
        'All Products',
        'Roofing',
    ],

    products: [

        // ============================================
        // PRODUCT 1: Hindalco Everlast Aluminium Roofing
        // ============================================
        {
            id: 'hindalco-001',
            name: 'Hindalco Everlast Aluminium Roofing',
            slug: 'hindalco-everlast-aluminium-roofing',
            category: 'Roofing',

            // Card display (shortened name for card)
            cardName: 'Everlast',
            cardProperty: 'Plants & Manufacturing Facilities',
            cardDescription: 'Hindalco Everlast is used in a wide range of industrial, commercial and residential projects. Some of them',

            // Images
            cardImage: '/images/products/hindalco/hp1.1.png',
            internalImage: '/images/products/hindalco/hp1.2.png',

            // Main page display
            mainProperty: 'Roofing',
            mainDescription: 'Hindalco Everlast is used across industrial, commercial, and residential projects.',

            // Product specifications
            alloys: [
                'AA1200',
                'AA3003',
                'AA3004',
                'AA3105',
                'AA8011',
            ],

            thickness: {
                range: '0.38 mm to 1.63 mm',
                min: '0.38 mm',
                max: '1.63 mm',
            },

            standardLength: {
                range: '1500 mm to 6500 mm',
                min: '1500 mm',
                max: '6500 mm',
                customNote: 'Customized lengths are available subject to prior confirmation.',
            },

            colourCoatedCoils: {
                description: 'Colour Coated Coils for Accessories',
                note: 'Procurement and T&C require contacting the sales team',
            },

            compliance: [
                'Aluminum roofing is specified in CPWD DSR (12.64/65 & 12.26)',
            ],

            // Available colors
            colors: [
                {
                    name: 'Royal Blue',
                    code: '#007CC4', // Approximate color code
                },
                {
                    name: 'Brick Red',
                    code: '#DD5431',
                },
                {
                    name: 'Off White',
                    code: '#C4CBB9',
                },
                {
                    name: 'Cloudy Grey',
                    code: '#61686D',
                },
            ],

            brochures: [
                {
                    text: 'Fortune Fiber Cement Roofs',
                    size: '91 KB',
                    link: 'https://birlanu.aflip.in/052cf7283e.html#page/1',
                    type: 'flipbook', // or 'pdf'
                },
            ],

            // Bottom content section
            bottomContent: {
                title: 'Wide application range: For components made of steel, timber, aluminium',
                description: 'Fortune Fiber Cement Roofs offer a smart and durable roofing solution built with advanced reinforcing hybrid fibers. These eco-friendly roofing sheets are engineered for fire resistance, corrosion resistance, and long-term performance. With high impact strength, excellent noise insulation, and an easy-to-handle, easy-to-fix design, Fortune Fiber Cement Roofs ensure a reliable, low-maintenance roofing experience for a wide range of applications.',
            },

            // Additional product info
            features: [
                'Fire resistance',
                'Corrosion resistance',
                'Long-term performance',
                'High impact strength',
                'Excellent noise insulation',
                'Easy-to-handle design',
                'Easy-to-fix installation',
                'Low-maintenance',
                'Eco-friendly',
            ],

            applications: [
                'Industrial buildings',
                'Commercial buildings',
                'Residential projects',
                'Manufacturing facilities',
                'Warehouses',
                'Factory sheds',
            ],

            inStock: true,
            isNew: false,
            isFeatured: true,
            relatedProducts: [], // No related products since it's the only one
        },

    ],
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getHindalcoProductBySlug = (slug) => {
    return hindalcoData.products.find(product => product.slug === slug);
};

export const getHindalcoProductsByCategory = (category) => {
    if (category === 'All Products') {
        return hindalcoData.products;
    }
    return hindalcoData.products.filter(product => product.category === category);
};

export const getHindalcoFeaturedProducts = () => {
    return hindalcoData.products.filter(product => product.isFeatured);
};

export const getHindalcoProduct = () => {
    // Since there's only one product, this returns it directly
    return hindalcoData.products[0];
};

export const getHindalcoColors = () => {
    const product = hindalcoData.products[0];
    return product ? product.colors : [];
};

export const getHindalcoAlloys = () => {
    const product = hindalcoData.products[0];
    return product ? product.alloys : [];
};