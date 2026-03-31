// ============================================================
// PATEL ENTERPRISE — Chemical Products Data
// Supplier & Stockist | Bharuch · Ankleshwar · Dahej · Jhagadia · Vadodara · Surat
// ============================================================

export const chemicalsData = {

    companyInfo: {
        name: 'Patel Enterprise',
        tagline: 'Industrial Chemical Supplier & Stockist',
        description:
            'Patel Enterprise is a trusted supplier and stockist of industrial chemicals, serving manufacturing and process industries across South Gujarat and beyond. With ready stock of 600–700 tonnes and bulk supply capability via tanker and drums, we ensure consistent, reliable delivery to your facility.',
        supplyCapability: [
            'Bulk Stock Available',
            'Ready Stock: 600–700 Tons',
            'Packing: Tanker / Drums',
        ],
        servingAreas: ['Bharuch', 'Ankleshwar', 'Dahej', 'Jhagadia', 'Vadodara', 'Surat'],
        contact: {
            name: 'Smit Mistry',
            role: 'Sales Executive',
            phone: '63581 85078',
        },
    },

    categories: [
        'All Products',
        'Acids',
        'Alkali & Chemicals',
        'Industrial Chemicals',
    ],

    products: [

        // ============================================================
        // PRODUCT 1 — Phosphoric Acid
        // ============================================================
        {
            id: 'chem-001',
            name: 'Phosphoric Acid',
            slug: 'phosphoric-acid',
            category: 'Acids',

            // Core specs
            formula: 'H₃PO₄',
            grade: '80% Technical Grade',
            physicalForm: 'Clear, colourless to slightly yellowish viscous liquid',
            packing: ['Tanker', 'Drums'],

            // Card display
            cardDescription:
                'A versatile inorganic acid used in fertiliser production, metal surface treatment, water treatment, and industrial cleaning.',

            // Images — place files at /public/images/products/chemicals/
            cardImage: '/images/products/chemicals/phosphoric-acid.jpg',
            detailImage: '/images/products/chemicals/phosphoric-acid.jpg',

            // Applications shown on detail page
            applications: [
                {
                    industry: 'Fertiliser Production',
                    detail: 'Primary raw material for MAP, DAP, and TSP phosphate fertilisers.',
                },
                {
                    industry: 'Metal Surface Treatment',
                    detail: 'Rust removal, metal cleaning, and surface preparation before coating or plating.',
                },
                {
                    industry: 'Water Treatment',
                    detail: 'pH adjustment and corrosion inhibition in boilers and cooling towers.',
                },
                {
                    industry: 'Detergents & Cleaning',
                    detail: 'Descaling agent for industrial equipment and cleaning formulations.',
                },
                {
                    industry: 'Chemical Manufacturing',
                    detail: 'Production of phosphate salts, phosphoric compounds, and chemical intermediates.',
                },
            ],

            brochures: [], // Add PDFs here when available

            inStock: true,
            isFeatured: true,
        },

        // ============================================================
        // PRODUCT 2 — Hydrochloric Acid
        // ============================================================
        {
            id: 'chem-002',
            name: 'Hydrochloric Acid',
            slug: 'hydrochloric-acid',
            category: 'Acids',

            formula: 'HCl',
            grade: '33%',
            physicalForm: 'Clear to slightly yellow fuming liquid with pungent odour',
            packing: ['Tanker', 'Drums'],

            cardDescription:
                'A strong mineral acid widely used for steel pickling, pH control, chemical synthesis, and water treatment across process industries.',

            cardImage: '/images/products/chemicals/hydrochloric-acid.jpg',
            detailImage: '/images/products/chemicals/hydrochloric-acid.jpg',

            applications: [
                {
                    industry: 'Steel & Metal Pickling',
                    detail: 'Removes rust, scale, and oxides from steel surfaces before galvanising or coating.',
                },
                {
                    industry: 'Water Treatment',
                    detail: 'pH control and neutralisation in industrial effluent and municipal water systems.',
                },
                {
                    industry: 'Chemical Synthesis',
                    detail: 'Production of PVC, organic compounds, and chlorine-based chemicals.',
                },
                {
                    industry: 'Food Processing',
                    detail: 'pH adjustment and acidification in food-grade applications (food-grade grade).',
                },
                {
                    industry: 'Oil & Gas',
                    detail: 'Well acidizing and reservoir stimulation in oil field operations.',
                },
            ],

            brochures: [],
            inStock: true,
            isFeatured: true,
        },

        // ============================================================
        // PRODUCT 3 — Caustic Soda Lye
        // ============================================================
        {
            id: 'chem-003',
            name: 'Caustic Soda Lye',
            slug: 'caustic-soda-lye',
            category: 'Alkali & Chemicals',

            formula: 'NaOH',
            grade: '47–50% Liquid Solution',
            physicalForm: 'Clear, colourless, odourless aqueous solution',
            packing: ['Tanker'],

            cardDescription:
                'Liquid sodium hydroxide solution supplied via tanker, used in soap making, paper production, water treatment, and edible oil refining.',

            cardImage: '/images/products/chemicals/caustic-soda-lye.jpg',
            detailImage: '/images/products/chemicals/caustic-soda-lye.jpg',

            applications: [
                {
                    industry: 'Soap & Detergent Manufacturing',
                    detail: 'Saponification of fats and oils to produce soap; production of liquid detergents.',
                },
                {
                    industry: 'Pulp & Paper',
                    detail: 'Kraft pulping process — breaks down lignin to separate cellulose fibres for paper production.',
                },
                {
                    industry: 'Water Treatment',
                    detail: 'pH neutralisation, adjustment of acidic water streams, and heavy metal removal.',
                },
                {
                    industry: 'Edible Oil Refining',
                    detail: 'Neutralises free fatty acids in vegetable oil refining to improve taste and quality.',
                },
                {
                    industry: 'Textile Industry',
                    detail: 'Mercerisation of cotton to improve strength, lustre, and dye absorption.',
                },
            ],

            brochures: [],
            inStock: true,
            isFeatured: false,
        },

        // ============================================================
        // PRODUCT 4 — Caustic Soda Flakes
        // ============================================================
        {
            id: 'chem-004',
            name: 'Caustic Soda Flakes',
            slug: 'caustic-soda-flakes',
            category: 'Alkali & Chemicals',

            formula: 'NaOH',
            grade: '98–99% Solid',
            physicalForm: 'White, hygroscopic solid flakes',
            packing: ['25 kg HDPE Bags', '50 kg HDPE Bags'],

            cardDescription:
                'High-purity solid sodium hydroxide flakes for applications requiring precise dosing — soap making, chemical manufacturing, textiles, and pharmaceuticals.',

            cardImage: '/images/products/chemicals/caustic-soda-flakes.jpg',
            detailImage: '/images/products/chemicals/caustic-soda-flakes.jpg',

            applications: [
                {
                    industry: 'Soap & Detergent Manufacturing',
                    detail: 'Preferred form for soap makers due to ease of precise measurement and stable storage.',
                },
                {
                    industry: 'Chemical Manufacturing',
                    detail: 'Production of sodium compounds, silicates, phosphates, and bleach.',
                },
                {
                    industry: 'Textile & Dyeing',
                    detail: 'Mercerisation, scouring, and preparation of cotton and synthetic fibres.',
                },
                {
                    industry: 'Pharmaceuticals',
                    detail: 'pH adjustment and synthesis of active pharmaceutical ingredients.',
                },
                {
                    industry: 'Industrial Cleaning',
                    detail: 'Strong alkaline cleaning agent for removing grease, oils, and organic deposits.',
                },
            ],

            brochures: [],
            inStock: true,
            isFeatured: false,
        },

        // ============================================================
        // PRODUCT 5 — Sodium Carbonate (Soda Ash)
        // ============================================================
        {
            id: 'chem-005',
            name: 'Sodium Carbonate',
            slug: 'sodium-carbonate',
            category: 'Alkali & Chemicals',

            formula: 'Na₂CO₃',
            grade: 'Industrial Grade (Light & Dense)',
            physicalForm: 'White, granular or fine powder; odourless',
            packing: ['50 kg Bags', 'Jumbo Bags'],

            // Common trade name shown as subtitle on cards/detail
            tradeName: 'Soda Ash',

            cardDescription:
                'Also known as Soda Ash — a versatile alkali used in glass manufacturing, detergents, water treatment, textile dyeing, and chemical production.',

            cardImage: '/images/products/chemicals/sodium-carbonate.jpg',
            detailImage: '/images/products/chemicals/sodium-carbonate.jpg',

            applications: [
                {
                    industry: 'Glass Manufacturing',
                    detail: 'Acts as a flux, lowering the melting point of silica for glass container and fibre glass production.',
                },
                {
                    industry: 'Detergents & Cleaning Products',
                    detail: 'Builder in laundry detergents and industrial cleaners; enhances cleaning performance.',
                },
                {
                    industry: 'Water Treatment',
                    detail: 'Raises pH, softens hard water, and removes calcium and magnesium ions.',
                },
                {
                    industry: 'Textile & Dyeing',
                    detail: 'Dye fixation and fibre preparation; pH control during fabric processing.',
                },
                {
                    industry: 'Pulp & Paper',
                    detail: 'Used in chemical pulping and pH adjustment processes.',
                },
            ],

            brochures: [],
            inStock: true,
            isFeatured: false,
        },

        // ============================================================
        // PRODUCT 6 — Sodium Bisulphate
        // ============================================================
        {
            id: 'chem-006',
            name: 'Sodium Bisulphate',
            slug: 'sodium-bisulphate',
            category: 'Alkali & Chemicals',

            formula: 'NaHSO₄',
            grade: 'Technical Grade',
            physicalForm: 'White crystalline granular powder',
            packing: ['25 kg Bags', '50 kg Bags'],

            cardDescription:
                'An acidic salt used as a pH reducer in water treatment, cleaning agents, textile processing, and food industry applications.',

            cardImage: '/images/products/chemicals/sodium-bisulphate.jpg',
            detailImage: '/images/products/chemicals/sodium-bisulphate.jpg',

            applications: [
                {
                    industry: 'Water Treatment',
                    detail: 'pH reduction in pools, cooling towers, and industrial water systems.',
                },
                {
                    industry: 'Cleaning & Disinfectants',
                    detail: 'Active ingredient in acidic cleaners, descalers, and disinfecting formulations.',
                },
                {
                    industry: 'Textile & Dye Industry',
                    detail: 'pH adjustment during dyeing processes and fibre treatment.',
                },
                {
                    industry: 'Food Processing',
                    detail: 'Approved food additive used as a preservative and leavening agent (E514).',
                },
                {
                    industry: 'Metal Treatment',
                    detail: 'Surface preparation and pickling of metals prior to coating.',
                },
            ],

            brochures: [],
            inStock: true,
            isFeatured: false,
        },

        // ============================================================
        // PRODUCT 7 — Glycerine
        // ============================================================
        {
            id: 'chem-007',
            name: 'Glycerine',
            slug: 'glycerine',
            category: 'Industrial Chemicals',

            formula: 'C₃H₈O₃',
            grade: 'Technical Grade',
            physicalForm: 'Clear, colourless, odourless, viscous liquid; hygroscopic',
            packing: ['Drums'],

            cardDescription:
                'A versatile industrial chemical used in soap and personal care manufacturing, pharmaceutical production, alkyd resins, and food processing as a humectant.',

            cardImage: '/images/products/chemicals/glycerine.jpg',
            detailImage: '/images/products/chemicals/glycerine.jpg',

            applications: [
                {
                    industry: 'Soap & Personal Care',
                    detail: 'By-product of saponification; used as a moisturiser and emollient in soaps, creams, and cosmetics.',
                },
                {
                    industry: 'Pharmaceuticals',
                    detail: 'Excipient and solvent in syrups, suppositories, and topical formulations.',
                },
                {
                    industry: 'Food & Beverage',
                    detail: 'Humectant, sweetener, and thickening agent; approved food additive (E422).',
                },
                {
                    industry: 'Alkyd Resin & Paints',
                    detail: 'Key raw material in alkyd resin synthesis for paints and surface coatings.',
                },
                {
                    industry: 'Textile Industry',
                    detail: 'Softening and conditioning agent for fibres and fabrics.',
                },
            ],

            brochures: [],
            inStock: true,
            isFeatured: false,
        },

    ],
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================

export const getChemicalBySlug = (slug) => {
    return chemicalsData.products.find((p) => p.slug === slug);
};

export const getChemicalsByCategory = (category) => {
    if (category === 'All Products') return chemicalsData.products;
    return chemicalsData.products.filter((p) => p.category === category);
};

export const getFeaturedChemicals = () => {
    return chemicalsData.products.filter((p) => p.isFeatured);
};

export const getAllChemicals = () => {
    return chemicalsData.products;
};