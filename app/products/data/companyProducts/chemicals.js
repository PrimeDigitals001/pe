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

            formula: 'H₃PO₄',
            grade: '80% Technical Grade',
            physicalForm: 'Clear, colourless to slightly yellowish viscous liquid with strong acidic properties',
            packing: ['35 kg Carboys', '50 kg Carboys', 'Drums', 'Bulk Tankers'],

            suppliers: [
                'Coromandel International',
                'Paradeep Phosphates',
                'Tata Chemicals',
                'Gujarat State Fertilizers & Chemicals (GSFC)',
            ],

            cardDescription:
                'A versatile inorganic acid used in fertiliser production, metal surface treatment, water treatment, and industrial cleaning.',

            cardImage: '/images/products/chemicals/phosphoric-acid.png',
            detailImage: '/images/products/chemicals/phosphoric-acid.png',

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

            brochures: [],
            inStock: true,
            isFeatured: true,
        },

        // ============================================================
        // PRODUCT 2 — Hydrochloric Acid (HCL 33%)
        // ============================================================
        {
            id: 'chem-002',
            name: 'Hydrochloric Acid',
            slug: 'hydrochloric-acid',
            category: 'Acids',

            formula: 'HCl',
            grade: '33%',
            physicalForm: 'Clear, colourless to slightly yellow liquid with strong acidic and corrosive properties',
            packing: ['30 kg Carboys', '50 kg Carboys', 'Drums', 'Bulk Tankers'],

            suppliers: [
                'GACL',
                'DCW Ltd.',
                'Tata Chemicals',
                'Chemplast Sanmar',
            ],

            cardDescription:
                'A strong mineral acid widely used for steel pickling, pH control, chemical synthesis, and water treatment across process industries.',

            cardImage: '/images/products/chemicals/hydrochloric-acid.png',
            detailImage: '/images/products/chemicals/hydrochloric-acid.png',

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
        // PRODUCT 3 — Nitric Acid
        // ============================================================
        {
            id: 'chem-003',
            name: 'Nitric Acid',
            slug: 'nitric-acid',
            category: 'Acids',

            formula: 'HNO₃',
            grade: 'Technical Grade',
            physicalForm: 'Clear, colourless to slightly yellow fuming liquid with strong acidic and oxidising properties',
            packing: ['30 kg Carboys', '50 kg Carboys', 'Drums', 'Bulk Tankers'],

            suppliers: [
                'Deepak Fertilisers',
                'GNFC',
                'Rashtriya Chemicals & Fertilizers (RCF)',
                'Tata Chemicals',
            ],

            cardDescription:
                'A strong oxidising acid used in fertiliser manufacturing, explosives, metal processing, industrial cleaning, and chemical synthesis.',

            cardImage: '/images/products/chemicals/nitric-acid.png',
            detailImage: '/images/products/chemicals/nitric-acid.png',

            applications: [
                {
                    industry: 'Fertiliser Manufacturing',
                    detail: 'Key raw material for ammonium nitrate and calcium ammonium nitrate fertilisers.',
                },
                {
                    industry: 'Explosives',
                    detail: 'Used in the production of nitro compounds such as TNT and nitroglycerin.',
                },
                {
                    industry: 'Metal Processing',
                    detail: 'Passivation, etching, and cleaning of stainless steel and other metals.',
                },
                {
                    industry: 'Industrial Cleaning',
                    detail: 'Removal of mineral deposits and scale from industrial equipment and surfaces.',
                },
                {
                    industry: 'Chemical Manufacturing',
                    detail: 'Synthesis of organic nitrates, dyes, and pharmaceutical intermediates.',
                },
            ],

            brochures: [],
            inStock: true,
            isFeatured: false,
        },

        // ============================================================
        // PRODUCT 4 — Caustic Soda Lye
        // ============================================================
        {
            id: 'chem-004',
            name: 'Caustic Soda Lye',
            slug: 'caustic-soda-lye',
            category: 'Alkali & Chemicals',

            formula: 'NaOH',
            grade: '47–50% Liquid Solution',
            physicalForm: 'Clear to slightly yellow liquid solution of sodium hydroxide with strong alkaline and corrosive nature',
            packing: ['50 kg Drums', 'Tankers', 'Bulk Supply'],

            suppliers: [
                'GACL',
                'Reliance Industries',
                'Aditya Birla Chemicals',
                'DCW Ltd.',
            ],

            cardDescription:
                'Liquid sodium hydroxide solution supplied via tanker, used in soap making, paper production, water treatment, and edible oil refining.',

            cardImage: '/images/products/chemicals/caustic-soda-lye.png',
            detailImage: '/images/products/chemicals/caustic-soda-lye.png',

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
        // PRODUCT 5 — Caustic Soda Flakes
        // ============================================================
        {
            id: 'chem-005',
            name: 'Caustic Soda Flakes',
            slug: 'caustic-soda-flakes',
            category: 'Alkali & Chemicals',

            formula: 'NaOH',
            grade: '98–99% Solid',
            physicalForm: 'White, solid flakes of sodium hydroxide with strong alkaline and corrosive properties',
            packing: ['25 kg HDPE Bags', '50 kg HDPE Bags'],

            suppliers: [
                'GACL',
                'Reliance Industries',
                'Aditya Birla Chemicals',
                'DCW Ltd.',
            ],

            cardDescription:
                'High-purity solid sodium hydroxide flakes for applications requiring precise dosing — soap making, chemical manufacturing, textiles, and pharmaceuticals.',

            cardImage: '/images/products/chemicals/caustic-soda-flakes.png',
            detailImage: '/images/products/chemicals/caustic-soda-flakes.png',

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
        // PRODUCT 6 — Sodium Carbonate (Soda Ash)
        // ============================================================
        {
            id: 'chem-006',
            name: 'Sodium Carbonate',
            slug: 'sodium-carbonate',
            category: 'Alkali & Chemicals',

            formula: 'Na₂CO₃',
            grade: 'Industrial Grade (Light & Dense)',
            physicalForm: 'White sodium carbonate powder with high purity; odourless granular or fine powder',
            packing: ['25 kg Bags', '50 kg Bags'],

            tradeName: 'Soda Ash',

            suppliers: [
                'Tata Chemicals',
                'GHCL',
                'Nirma Ltd.',
                'DCW Ltd.',
            ],

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
        // PRODUCT 7 — Sodium Bisulphite
        // ============================================================
        {
            id: 'chem-007',
            name: 'Sodium Bisulphite',
            slug: 'sodium-bisulphite',
            category: 'Alkali & Chemicals',

            formula: 'NaHSO₃',
            grade: 'Technical Grade',
            physicalForm: 'White to slightly yellow powder or liquid with strong reducing properties',
            packing: ['25 kg Bags', 'Liquid in Drums', 'Liquid in Tanks'],

            suppliers: [
                'BASF',
                'Aditya Birla Chemicals',
                'Grasim',
                'Gujarat Alkalies (GACL)',
            ],

            cardDescription:
                'A reducing and preservative agent used in water treatment, textile processing, paper & pulp, food preservation, and chemical processing.',

            cardImage: '/images/products/chemicals/sodium-bisulphite.jpg',
            detailImage: '/images/products/chemicals/sodium-bisulphite.jpg',

            applications: [
                {
                    industry: 'Water Treatment',
                    detail: 'Dechlorination of drinking water and removal of residual chlorine in industrial effluent.',
                },
                {
                    industry: 'Textile Processing',
                    detail: 'Reducing agent in dyeing and printing processes; discharge printing on fabrics.',
                },
                {
                    industry: 'Paper & Pulp',
                    detail: 'Bleaching of wood pulp and control of oxidation during paper manufacturing.',
                },
                {
                    industry: 'Food Preservation',
                    detail: 'Antioxidant and preservative in food processing; prevents browning and spoilage.',
                },
                {
                    industry: 'Chemical Processing',
                    detail: 'Reducing intermediate in synthesis of organic chemicals and pharmaceutical compounds.',
                },
            ],

            brochures: [],
            inStock: true,
            isFeatured: false,
        },

        // ============================================================
        // PRODUCT 8 — Sodium Metabisulphite
        // ============================================================
        {
            id: 'chem-008',
            name: 'Sodium Metabisulphite',
            slug: 'sodium-metabisulphite',
            category: 'Alkali & Chemicals',

            formula: 'Na₂S₂O₅',
            grade: 'Technical Grade',
            physicalForm: 'White crystalline powder with strong reducing and preservative properties',
            packing: ['25 kg Bags'],

            suppliers: [
                'BASF',
                'Aditya Birla Chemicals',
                'Solvay',
                'Esseco Group',
            ],

            cardDescription:
                'A versatile reducing and preservative agent used in water treatment, food preservation, textiles, paper & pulp, and chemical processing.',

            cardImage: '/images/products/chemicals/sodium-metabisulphite.png',
            detailImage: '/images/products/chemicals/sodium-metabisulphite.png',

            applications: [
                {
                    industry: 'Water Treatment',
                    detail: 'Removal of residual chlorine and chloramine from municipal and industrial water systems.',
                },
                {
                    industry: 'Food Preservation',
                    detail: 'Approved antioxidant and preservative in wines, dried fruits, and processed foods.',
                },
                {
                    industry: 'Textile Processing',
                    detail: 'Stripping and reducing agent in fabric dyeing and finishing processes.',
                },
                {
                    industry: 'Paper & Pulp',
                    detail: 'Bleaching aid and reducing agent in chemical pulping operations.',
                },
                {
                    industry: 'Chemical Processing',
                    detail: 'Intermediate in the production of dyes, pharmaceuticals, and fine chemicals.',
                },
            ],

            brochures: [],
            inStock: true,
            isFeatured: false,
        },

        // ============================================================
        // PRODUCT 9 — Sodium Bicarbonate
        // ============================================================
        {
            id: 'chem-009',
            name: 'Sodium Bicarbonate',
            slug: 'sodium-bicarbonate',
            category: 'Alkali & Chemicals',

            formula: 'NaHCO₃',
            grade: 'Technical / Food Grade',
            physicalForm: 'White crystalline powder (baking soda) with mild alkaline properties',
            packing: ['25 kg Bags', '50 kg Bags'],

            tradeName: 'Baking Soda',

            suppliers: [
                'Tata Chemicals',
                'GHCL',
                'Solvay',
                'Church & Dwight',
            ],

            cardDescription:
                'A mild alkaline powder used in food processing, pharmaceuticals, fire extinguishers, cleaning products, and industrial water treatment.',

            cardImage: '/images/products/chemicals/sodium-bicarbonate.jpg',
            detailImage: '/images/products/chemicals/sodium-bicarbonate.jpg',

            applications: [
                {
                    industry: 'Food Processing',
                    detail: 'Leavening agent in baked goods; pH buffer and acidity regulator in food formulations.',
                },
                {
                    industry: 'Pharmaceuticals',
                    detail: 'Antacid formulations, effervescent tablets, and pH adjustment in injectables.',
                },
                {
                    industry: 'Fire Extinguishers',
                    detail: 'Active agent in dry chemical fire extinguishers for Class B and C fires.',
                },
                {
                    industry: 'Cleaning Products',
                    detail: 'Mild abrasive and deodorising agent in household and industrial cleaners.',
                },
                {
                    industry: 'Water Treatment',
                    detail: 'Alkalinity adjustment and buffering in boiler water and aquaculture systems.',
                },
            ],

            brochures: [],
            inStock: true,
            isFeatured: false,
        },

        // ============================================================
        // PRODUCT 10 — Tri Sodium Phosphate
        // ============================================================
        {
            id: 'chem-010',
            name: 'Tri Sodium Phosphate',
            slug: 'tri-sodium-phosphate',
            category: 'Alkali & Chemicals',

            formula: 'Na₃PO₄',
            grade: 'Technical Grade',
            physicalForm: 'White crystalline powder with strong alkaline cleaning properties',
            packing: ['25 kg Bags', '50 kg Bags'],

            tradeName: 'TSP',

            suppliers: [
                'Tata Chemicals',
                'Innophos',
                'Aditya Birla Chemicals',
                'Prayon',
            ],

            cardDescription:
                'A strong alkaline cleaning and sequestering agent used in industrial degreasers, water treatment, food processing, and surface preparation.',

            cardImage: '/images/products/chemicals/tri-sodium-phosphate.png',
            detailImage: '/images/products/chemicals/tri-sodium-phosphate.png',

            applications: [
                {
                    industry: 'Industrial Cleaning & Degreasing',
                    detail: 'Heavy-duty degreaser and cleaner for metal surfaces, industrial machinery, and floors.',
                },
                {
                    industry: 'Water Treatment',
                    detail: 'Sequestrant for scale and corrosion control in boilers and cooling water systems.',
                },
                {
                    industry: 'Food Processing',
                    detail: 'Emulsifier and buffering agent in processed cheese and dairy products (E339).',
                },
                {
                    industry: 'Detergent Manufacturing',
                    detail: 'Builder and pH booster in heavy-duty industrial and institutional cleaning formulations.',
                },
                {
                    industry: 'Surface Preparation',
                    detail: 'Prepares walls and surfaces by removing grease and residue prior to painting.',
                },
            ],

            brochures: [],
            inStock: true,
            isFeatured: false,
        },

        // ============================================================
        // PRODUCT 11 — Calcium Chloride
        // ============================================================
        {
            id: 'chem-011',
            name: 'Calcium Chloride',
            slug: 'calcium-chloride',
            category: 'Industrial Chemicals',

            formula: 'CaCl₂',
            grade: 'Technical Grade',
            physicalForm: 'White hygroscopic flakes or powder with high moisture absorption properties',
            packing: ['25 kg Bags', '50 kg Bags', 'Bulk'],

            suppliers: [
                'Tetra Chemicals',
                'Solvay',
                'Ward Chemical',
                'Tiger Calcium',
            ],

            cardDescription:
                'A highly hygroscopic salt used in water treatment, construction, dust control, de-icing, food processing, and industrial drying applications.',

            cardImage: '/images/products/chemicals/calcium-chloride.jpg',
            detailImage: '/images/products/chemicals/calcium-chloride.jpg',

            applications: [
                {
                    industry: 'Water Treatment',
                    detail: 'Calcium hardness adjustment in drinking water, pools, and industrial water systems.',
                },
                {
                    industry: 'Construction',
                    detail: 'Accelerates concrete setting time and improves cold-weather concrete performance.',
                },
                {
                    industry: 'Dust Control',
                    detail: 'Applied to unpaved roads and surfaces to suppress dust by absorbing atmospheric moisture.',
                },
                {
                    industry: 'De-icing & Road Maintenance',
                    detail: 'Melts ice at lower temperatures than conventional salt; used on roads and pavements.',
                },
                {
                    industry: 'Food Processing',
                    detail: 'Firming agent in canned vegetables and cheese production (E509).',
                },
            ],

            brochures: [],
            inStock: true,
            isFeatured: false,
        },

        // ============================================================
        // PRODUCT 12 — Diammonium Phosphate
        // ============================================================
        {
            id: 'chem-012',
            name: 'Diammonium Phosphate',
            slug: 'diammonium-phosphate',
            category: 'Industrial Chemicals',

            formula: '(NH₄)₂HPO₄',
            grade: 'Technical / Agricultural Grade',
            physicalForm: 'White crystalline granules or powder with high nitrogen and phosphorus content',
            packing: ['25 kg Bags', '50 kg Bags'],

            tradeName: 'DAP',

            suppliers: [
                'IFFCO',
                'Coromandel International',
                'Paradeep Phosphates',
                'GSFC',
            ],

            cardDescription:
                'A high-analysis fertiliser and industrial chemical used in fertiliser blends, fire retardants, yeast nutrients, and food processing applications.',

            cardImage: '/images/products/chemicals/diammonium-phosphate.png',
            detailImage: '/images/products/chemicals/diammonium-phosphate.png',

            applications: [
                {
                    industry: 'Fertilisers',
                    detail: 'One of the most widely used phosphatic fertilisers, supplying nitrogen and phosphorus to crops.',
                },
                {
                    industry: 'Fire Retardants',
                    detail: 'Flame retardant treatment for wood, paper, textiles, and agricultural residues.',
                },
                {
                    industry: 'Yeast Nutrients',
                    detail: 'Nutrient supplement for yeast in fermentation processes for brewing and biofuel production.',
                },
                {
                    industry: 'Food Processing',
                    detail: 'Leavening agent and dough conditioner in baking applications.',
                },
                {
                    industry: 'Industrial Applications',
                    detail: 'Flux in soldering; corrosion inhibitor in cooling water and boiler systems.',
                },
            ],

            brochures: [],
            inStock: true,
            isFeatured: false,
        },

        // ============================================================
        // PRODUCT 13 — Aluminium Sulphate (Non-Ferric)
        // ============================================================
        {
            id: 'chem-013',
            name: 'Aluminium Sulphate (Non-Ferric)',
            slug: 'aluminium-sulphate-non-ferric',
            category: 'Industrial Chemicals',

            formula: 'Al₂(SO₄)₃',
            grade: 'Non-Ferric Technical Grade',
            physicalForm: 'White crystalline powder or granules with low iron content and strong coagulating properties',
            packing: ['25 kg Bags', '50 kg Bags'],

            tradeName: 'Alum (Non-Ferric)',

            suppliers: [
                'GACL',
                'Chemfab Alkalis',
                'Aditya Birla Chemicals',
                'USALCO',
            ],

            cardDescription:
                'A non-ferric coagulant and flocculant used in water treatment, paper & pulp, textile processing, and industrial wastewater treatment.',

            cardImage: '/images/products/chemicals/aluminium-sulphate.png',
            detailImage: '/images/products/chemicals/aluminium-sulphate.png',

            applications: [
                {
                    industry: 'Water Treatment',
                    detail: 'Primary coagulant for removal of suspended solids, turbidity, and organic matter from drinking and industrial water.',
                },
                {
                    industry: 'Wastewater Treatment',
                    detail: 'Flocculation of industrial effluent and sewage in effluent treatment plants (ETP and STP).',
                },
                {
                    industry: 'Paper & Pulp',
                    detail: "Sizing agent (papermaker's alum) to improve paper strength and water resistance.",
                },
                {
                    industry: 'Textile Processing',
                    detail: 'Mordant for fixing dyes on cotton and other natural fibres.',
                },
                {
                    industry: 'Tanning & Leather',
                    detail: 'Chrome-free tanning agent for the leather processing industry.',
                },
            ],

            brochures: [],
            inStock: true,
            isFeatured: false,
        },

        // ============================================================
        // PRODUCT 14 — Efflutone CT
        // ============================================================
        {
            id: 'chem-014',
            name: 'Efflutone CT',
            slug: 'efflutone-ct',
            category: 'Industrial Chemicals',

            formula: null,
            grade: 'Industrial Grade',
            physicalForm: 'Specialised chemical coagulant; liquid or powder form',
            packing: ['25 kg Bags', 'Drums', 'Bulk Supply'],

            suppliers: [
                'Thermax Chemicals',
                'Ion Exchange India Ltd.',
                'Aquatech Systems Asia',
                'Chembond Chemicals',
            ],

            cardDescription:
                'A specialised chemical coagulant formulated for efficient treatment of industrial wastewater, sewage, and water clarification processes.',

            cardImage: '/images/products/chemicals/efflutone-ct.png',
            detailImage: '/images/products/chemicals/efflutone-ct.png',

            applications: [
                {
                    industry: 'Effluent Treatment Plants (ETP)',
                    detail: 'Effective coagulation and flocculation of industrial wastewater to meet discharge norms.',
                },
                {
                    industry: 'Sewage Treatment',
                    detail: 'Removal of suspended solids, BOD, and COD from municipal and industrial sewage.',
                },
                {
                    industry: 'Water Clarification',
                    detail: 'Rapid settling of turbidity and colloidal matter in raw water clarification systems.',
                },
                {
                    industry: 'Chemical & Pharma Effluent',
                    detail: 'Treatment of high-strength effluent from chemical and pharmaceutical manufacturing units.',
                },
                {
                    industry: 'Textile Effluent',
                    detail: 'Colour removal and COD reduction in dyehouse and textile processing effluent.',
                },
            ],

            brochures: [],
            inStock: true,
            isFeatured: false,
        },

        // ============================================================
        // PRODUCT 15 — Zinc Stearate
        // ============================================================
        {
            id: 'chem-015',
            name: 'Zinc Stearate',
            slug: 'zinc-stearate',
            category: 'Industrial Chemicals',

            formula: 'Zn(C₁₈H₃₅O₂)₂',
            grade: 'Technical Grade',
            physicalForm: 'Fine white powder with excellent lubricating and water-repellent properties',
            packing: ['20 kg Bags', '25 kg Bags'],

            suppliers: [
                'Baerlocher',
                'Valtris Specialty Chemicals',
                'FACI Group',
                'Dover Chemical',
            ],

            cardDescription:
                'A metallic soap used as a lubricant and release agent in plastics, rubber, paints, cosmetics, and pharmaceutical tablet manufacturing.',

            cardImage: '/images/products/chemicals/zinc-stearate.png',
            detailImage: '/images/products/chemicals/zinc-stearate.png',

            applications: [
                {
                    industry: 'Plastics',
                    detail: 'Mould release agent and internal lubricant in PVC, polyolefins, and thermoset processing.',
                },
                {
                    industry: 'Rubber',
                    detail: 'Processing aid, release agent, and activator in rubber compounding and vulcanisation.',
                },
                {
                    industry: 'Paints & Coatings',
                    detail: 'Anti-settling agent and flatting aid in solvent-based and powder coatings.',
                },
                {
                    industry: 'Cosmetics & Personal Care',
                    detail: 'Used in cosmetic powders, foundations, and talc-based formulations as a binder.',
                },
                {
                    industry: 'Pharmaceuticals',
                    detail: 'Tablet lubricant and glidant in solid dosage form manufacturing.',
                },
            ],

            brochures: [],
            inStock: true,
            isFeatured: false,
        },

        // ============================================================
        // PRODUCT 16 — Calcium Stearate
        // ============================================================
        {
            id: 'chem-016',
            name: 'Calcium Stearate',
            slug: 'calcium-stearate',
            category: 'Industrial Chemicals',

            formula: 'Ca(C₁₈H₃₅O₂)₂',
            grade: 'Technical Grade',
            physicalForm: 'Fine white powder with excellent lubricating and anti-caking properties',
            packing: ['20 kg Bags', '25 kg Bags'],

            suppliers: [
                'Baerlocher',
                'FACI Group',
                'Valtris Specialty Chemicals',
                'Peter Greven',
            ],

            cardDescription:
                'A calcium-based metallic soap used as a lubricant, stabiliser, and anti-caking agent in plastics, rubber, construction, paints, and pharmaceuticals.',

            cardImage: '/images/products/chemicals/calcium-stearate.png',
            detailImage: '/images/products/chemicals/calcium-stearate.png',

            applications: [
                {
                    industry: 'Plastics',
                    detail: 'Heat stabiliser and internal lubricant in PVC and other thermoplastic compounds.',
                },
                {
                    industry: 'Rubber',
                    detail: 'Processing lubricant and release agent in rubber moulding and extrusion operations.',
                },
                {
                    industry: 'Construction Materials',
                    detail: 'Water-repellent additive and anti-caking agent in cement, mortar, and dry-mix products.',
                },
                {
                    industry: 'Paints & Coatings',
                    detail: 'Flatting agent and anti-settling additive in paints and industrial coatings.',
                },
                {
                    industry: 'Pharmaceuticals',
                    detail: 'Tablet lubricant and glidant in solid dosage form manufacturing.',
                },
            ],

            brochures: [],
            inStock: true,
            isFeatured: false,
        },

        // ============================================================
        // PRODUCT 17 — Glycerine (CP Grade)
        // ============================================================
        {
            id: 'chem-017',
            name: 'Glycerine',
            slug: 'glycerine',
            category: 'Industrial Chemicals',

            formula: 'C₃H₈O₃',
            grade: 'CP Grade (Technical)',
            physicalForm: 'Clear, colourless, viscous liquid with high purity and mild sweetness; hygroscopic',
            packing: ['250 kg Drums', 'IBC Tanks', 'Bulk'],

            suppliers: [
                'Adani Wilmar',
                'Godrej Industries',
                'IOI Oleochemical',
                'KLK Oleo',
            ],

            cardDescription:
                'A versatile industrial chemical used in soap and personal care manufacturing, pharmaceutical production, alkyd resins, and food processing as a humectant.',

            cardImage: '/images/products/chemicals/glycerine.png',
            detailImage: '/images/products/chemicals/glycerine.png',

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

        // ============================================================
        // PRODUCT 18 — Benzyl Alcohol
        // ============================================================
        {
            id: 'chem-018',
            name: 'Benzyl Alcohol',
            slug: 'benzyl-alcohol',
            category: 'Industrial Chemicals',

            formula: 'C₇H₈O',
            grade: 'Technical Grade',
            physicalForm: 'Clear, colourless liquid with mild aromatic odour and good solvent properties',
            packing: ['200 kg Drums', 'IBC Tanks', 'Bulk'],

            suppliers: [
                'Lanxess',
                'Emerald Kalama Chemical',
                'Gujarat Alkalies (GACL)',
                'Valtris Specialty Chemicals',
            ],

            cardDescription:
                'An aromatic alcohol and versatile solvent used in pharmaceuticals, cosmetics, paints, inks, and as a chemical processing solvent.',

            cardImage: '/images/products/chemicals/benzyl-alcohol.png',
            detailImage: '/images/products/chemicals/benzyl-alcohol.png',

            applications: [
                {
                    industry: 'Pharmaceuticals',
                    detail: 'Preservative in injectable formulations and topical preparations; local anaesthetic.',
                },
                {
                    industry: 'Cosmetics & Personal Care',
                    detail: 'Solvent and preservative in fragrances, shampoos, lotions, and skin care products.',
                },
                {
                    industry: 'Paints & Coatings',
                    detail: 'Solvent for epoxy coatings, varnishes, and industrial surface coatings.',
                },
                {
                    industry: 'Inks & Adhesives',
                    detail: 'Solvent and viscosity modifier in printing inks and adhesive formulations.',
                },
                {
                    industry: 'Chemical Processing',
                    detail: 'Intermediate in synthesis of benzyl esters, benzaldehyde, and other fine chemicals.',
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