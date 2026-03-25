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
                customNote: 'Customised length can be made available, subject to prior confirmation.',
            },

            // ✅ UPDATED: Added finish types from brochure
            finish: [
                'Plain Mill',
                'Stucco-embossed',
                'Colour-coated',
            ],

            colourCoatedCoils: {
                description: 'Colour Coated Coils for Accessories',
                // ✅ UPDATED: Correct note from brochure
                note: 'Colour Coated order will be accepted upon confirmation of RAL codes strictly.',
            },

            compliance: [
                'Aluminum roofing is specified in CPWD DSR (12.64/65 & 12.26)',
            ],

            // Available colors
            colors: [
                {
                    name: 'Royal Blue',
                    code: '#007CC4',
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
                    // ✅ UPDATED: Correct brochure name and local PDF path
                    // Rename your PDF to: everlast-b2b-brochure.pdf
                    // Place it in: /public/brochures/everlast-b2b-brochure.pdf
                    text: 'Everlast B2B Brochure',
                    size: '2 MB',
                    link: '/brochures/everlast-b2b-brochure.pdf',
                    type: 'pdf',
                },
            ],

            // ✅ UPDATED: Bottom content now reflects actual Everlast product info from brochure
            bottomContent: {
                title: "India's Leading Aluminium Roofing Brand",
                description: "Hindalco Everlast is India's leading brand of Aluminium Roofing Sheets. Manufactured by Hindalco Industries Ltd., the world's largest Aluminium Rolling Company and the metals flagship of the Aditya Birla Group. Hindalco Everlast is the preferred choice for industrial and residential applications. Available in a wide range of colours and profiles like circular corrugated, trapezoidal and tiled, Everlast Roofing Sheets are aesthetically pleasing and of best-in-class quality. They do not rust, have excellent thermal properties which keep interiors cool, carry a high resale value and are 100% environment-friendly.",
            },

            // ✅ UPDATED: Features now match the advantages listed in the brochure
            features: [
                'Rust-proof',
                'Low maintenance',
                'Strong but one-third the weight of G.I.',
                'Attractive look — looks good forever',
                'Reflects heat and moderates temperature below roof up to 6°C due to lower emissivity',
                'Lifespan of over 40 years',
                'Resale value up to 60% of initial investment',
                '100% recyclable — Green Metal certified',
            ],

            // ✅ UPDATED: Applications now match the brochure exactly
            applications: [
                'Plants & Manufacturing Facilities',
                'Roof-on-Roof',
                'Direct Roofing',
                'Bus and Train Terminus',
                'Warehouses and Parking Bays',
                'Hotels and Shopping Malls',
                'Airports and Seaports',
                'Stadiums',
                'Plantations and Farms',
            ],

            inStock: true,
            isNew: false,
            isFeatured: true,
            relatedProducts: [],
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