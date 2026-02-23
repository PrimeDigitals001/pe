// Kee Safety Products Data
// Flexible structure - each product can have different fields

export const keeSafetyData = {
    companyInfo: {
        id: 6,
        name: 'Kee Safety',
        slug: 'kee-safety',
        logo: '/images/products/logo_kee-safety.png',
        tagline: 'Global Leader in Fall Protection & Safety Solutions',
        description: 'Kee Safety is a leading global supplier of fall protection equipment, safety railing systems, and height safety solutions.',
        heroImage: '/images/companies/kee-safety-hero.jpg',
        primaryColor: '#000000',
        website: 'https://keesafety.com',
    },

    categories: [
        'All Products',
        'Roof Guardrails',
        'Safety Railings',
        'Safety Gates',
        'Platforms & Walkways',
        'Lifelines & Anchors',
        'Skylight Fall Protection',
        'Safe Connections',
    ],

    products: [

        // ============================================
        // ROOF GUARDRAILS (2 products)
        // ============================================

        // PRODUCT 1: Kee Guard® Roof Top Guardrail
        {
            id: 'kee-001',
            name: 'Kee Guard® Roof Top Guardrail',
            slug: 'kee-guard-roof-top-guardrail',
            category: 'Roof Guardrails',

            cardImage: '/images/products/kee-safety/p1.1.png',
            internalImage: '/images/products/kee-safety/p1.2.png',

            cardName: 'Kee Guard® Roof Top Guardrail',
            cardProperty: 'Safety Railing',
            cardDescription: 'Kee Guard is the industry leading modular, roof top railing system. designed to provide permanent roof edge protection for areas.',

            mainProperty: 'A portfolio of roof top guardrails providing collective fall protection.',
            mainDescription: 'Kee Guard is the industry leading modular, roof top railing system. It has been designed to provide permanent roof edge protection for areas where regular access for maintenance and inspection is required. Kee Guard is an EN and OSHA compliant, permanent, and dependable safety barrier for a roof edge, helping you to keep your workforce safe.',

            sizesAndSKUs: [
                'Modular system (customizable as per roof layout)',
                'Available in standard straight sections, corners, gates, and access points',
            ],

            standardsAndSpecifications: [
                'Designed to meet EN 14122-3 (Permanent means of access to machinery)',
                'Complies with OSHA standards for fall protection',
                'Non-penetrating system (no roof membrane damage)',
                'Hot-dip galvanized steel construction',
                'Counterbalanced base with recycled PVC weights',
            ],

            applicationAndUsage: [
                'Rooftop edge protection',
                'Commercial & industrial buildings',
                'Warehouses & factories',
                'Data centres',
                'Facilities management areas',
                'Any flat roof where fall protection is required',
            ],

            brochures: [
                {
                    text: 'kneesafety',
                    size: '91 KB',
                    link: 'https://keesafety.in/media/zw3mezuh/kee-walk-the-safe-access-solution-for-roof-top-walkways-and-stepovers_2020-india-email.pdf',
                },
            ],

            inStock: true,
            isNew: false,
            isFeatured: true,
            relatedProducts: ['kee-002', 'kee-007'],
        },

        // PRODUCT 2: Kee Walk® Guarded Walkway
        {
            id: 'kee-002',
            name: 'Kee Walk® Guarded Walkway',
            slug: 'kee-walk-guarded-walkway',
            category: 'Roof Guardrails',

            cardImage: '/images/products/kee-safety/p2.1.png',
            internalImage: '/images/products/kee-safety/p2.2.png',

            cardName: 'Kee Walk® Guarded Walkway',
            cardProperty: 'Safety Railing',
            cardDescription: 'Kee Guard is the industry leading modular, roof top railing system. designed to provide permanent roof edge protection for areas.',

            mainProperty: 'The safe access solution for roof top walkways and step overs.',
            mainDescription: 'The Kee Walk with guardrail system is a fall protection solution consisting of walkway and guardrail which can be installed quickly and easily on a wide variety of roofs. It is a compliant approach to guardrail protection and eliminates the fall hazard typically present when workers are exposed to an unprotected edge.',

            sizesAndSKUs: [
                'Modular walkway widths available (typically 600 mm and 900 mm)',
                'Custom lengths depending on site requirements',
                'Optional accessories: handrails, gates, ramps, steps',
            ],

            standardsAndSpecifications: [
                'Engineered to meet EN 14122 (safe means of access)',
                'Complies with relevant OSHA/ANSI safety standards for walkways',
                'Constructed from hot-dip galvanized steel for corrosion resistance',
                'Non-penetrative socket bases to prevent roof membrane damage',
                'Anti-slip grating surface for safe walking',
            ],

            applicationAndUsage: [
                'Roof access routes to HVAC units, plant equipment, piping',
                'Areas where frequent movement on roof is required',
                'Industrial and commercial rooftops',
                'Maintenance walkways over fragile surfaces',
                'Safe roof access for facility technicians and service personnel',
            ],

            brochures: [
                {
                    text: 'keesafety',
                    size: '91 KB',
                    link: 'https://keesafety.in/media/zw3mezuh/kee-walk-the-safe-access-solution-for-roof-top-walkways-and-stepovers_2020-india-email.pdf',
                },
            ],

            inStock: true,
            isNew: false,
            isFeatured: true,
            relatedProducts: ['kee-001', 'kee-007'],
        },

        // ============================================
        // SAFETY RAILINGS (2 products)
        // ============================================

        // PRODUCT 3: Kee Klamp® Galvanised Railings
        {
            id: 'kee-003',
            name: 'Kee Klamp® Galvanised Railings',
            slug: 'kee-klamp-galvanised-railings',
            category: 'Safety Railings',

            cardImage: '/images/products/kee-safety/p3.1.png',
            internalImage: '/images/products/kee-safety/p3.2.png',

            cardName: 'Kee Klamp® Galvanised Railings',
            cardProperty: 'Safety Railings',
            cardDescription: 'Our high-quality safety railing solutions are constructed using tubular fittings and standard tube. They are a cost-effective alternative to traditional welded handrail systems.',

            mainProperty: 'Weldless handrails, safety barriers and guardrail systems exceeding world class safety standards.',
            mainDescription: 'In 1934, we invented Kee Klamp® tubular fittings for use in the agriculture industry. Following the development of these simple safety barrier systems, many other uses were found.',

            sizesAndSKUs: [
                'Range of standard tube sizes & fittings',
                'Tubing options typically 1.90 m – 6 m lengths',
                'Multiple fitting types (elbows, tees, flanges, base plates)*',
                ' (*Final SKUs depend on configuration required)',
            ],

            standardsAndSpecifications: [
                'Designed per EN 14122 / EN ISO 14122 (safe access and guardrails)',
                'Meets general OSHA/ANSI safety railing criteria',
                'Galvanized or powder-coated finishes for corrosion protection',
                'Modular tubular steel system – easy assembly without welding',
            ],

            applicationAndUsage: [
                'Edge protection on walkways, platforms, mezzanines',
                'Machine guarding and perimeter barriers',
                'Stair handrails & balustrades',
                'Industrial plants, warehouses, factories',
                'Construction sites and service areas',
            ],

            brochures: [
                {
                    text: 'keesafety',
                    size: '91 KB',
                    link: 'https://keesafety.in/media/zw3mezuh/kee-walk-the-safe-access-solution-for-roof-top-walkways-and-stepovers_2020-india-email.pdf',
                },
            ],

            inStock: true,
            isNew: false,
            isFeatured: false,
            relatedProducts: ['kee-004'],
        },

        // PRODUCT 4: Kee Kwik® Railing Kits
        {
            id: 'kee-004',
            name: 'Kee Kwik® Railing Kits',
            slug: 'kee-kwik-railing-kits',
            category: 'Safety Railings',

            cardImage: '/images/products/kee-safety/p4.1.png',
            internalImage: '/images/products/kee-safety/p4.2.png',

            cardName: 'Kee Kwik® Railing Kits',
            cardProperty: 'Safety Railings',
            cardDescription: 'Our high-quality safety railing solutions are constructed using tubular fittings and standard tube. They are a cost-effective alternative to traditional welded handrail systems.',

            mainProperty: 'Create a sturdy railing system with no welding or threading that exceeds EN and OSHA safety standards.',
            mainDescription: 'Quickly protect workplace areas and provide a safe environment with the Kee Kwik® railing. There is no need to weld or bend tubing because the pre-assembled uprights make installation speedy and simple. Safety Yellow coating comes as standard, making the railing highly visible.',

            sizesAndSKUs: [
                'Pre-configured railing kits',
                'Standard heights (typically 1100 mm / 42″)',
                'Various lengths depending on kit model',
                'Components include posts, top rails, base plates, fittings, and fasteners',
            ],

            standardsAndSpecifications: [
                'Complies with EN 14122-3 (guardrails & handrails)',
                'Designed to meet OSHA/ANSI fall protection standards',
                'Durable galvanized steel construction',
                'Modular, bolt-together system (no welding required)',
                'Kits sized for easy site assembly',
            ],

            applicationAndUsage: [
                'Perimeter edge protection for walkways and platforms',
                'Stair handrails and mezzanine guardrails',
                'Industrial facilities: plants, warehouses',
                'Maintenance areas and service corridors',
                'Construction and retrofit applications',
            ],

            brochures: [
                {
                    text: 'keesafety',
                    size: '91 KB',
                    link: 'https://keesafety.in/media/zw3mezuh/kee-walk-the-safe-access-solution-for-roof-top-walkways-and-stepovers_2020-india-email.pdf',
                },
            ],

            inStock: true,
            isNew: false,
            isFeatured: false,
            relatedProducts: ['kee-003'],
        },

        // ============================================
        // SAFETY GATES (2 products)
        // ============================================

        // PRODUCT 5: Kee Gate® Self-Closing Safety Gate
        {
            id: 'kee-005',
            name: 'Kee Gate® Self-Closing Safety Gate',
            slug: 'kee-gate-self-closing-safety-gate',
            category: 'Safety Gates',

            cardImage: '/images/products/kee-safety/p5.1.png',
            internalImage: '/images/products/kee-safety/p5.2.png',

            cardName: 'Kee Gate® Self-Closing Safety Gate',
            cardProperty: 'Safety Gates',
            cardDescription: 'Our Pallet, Mezzanine & Rooftop Safety Gates are self-closing, spring loaded gates for hazard protection in internal or external applications.',

            mainProperty: 'Self-closing industrial access gate',
            mainDescription: 'Kee Gate® Self-Closing Safety Gates provide automatic closure at railing openings, ladder access points, and platform gaps.',

            sizesAndSKUs: [
                'Single gate: 450mm - 600mm opening',
                'Wide single gate: 600mm - 900mm opening',
            ],

            standardsAndSpecifications: [
                'EN ISO 14122-3 - Access Gates',
                'BS 6180 - Safety Barriers',
            ],

            applicationAndUsage: [
                'Ladder access openings',
                'Platform and mezzanine entry points',
            ],

            brochures: [
                {
                    text: 'Kee Gate Product Brochure.pdf',
                    size: '1.5 MB',
                    link: '/brochures/kee-safety/kee-gate-brochure.pdf',
                },
            ],

            inStock: true,
            isNew: false,
            isFeatured: false,
            relatedProducts: ['kee-006'],
        },

        // PRODUCT 6: Kee Pivot® Mezzanine Safety Gates
        {
            id: 'kee-006',
            name: 'Kee Pivot® Mezzanine Safety Gates',
            slug: 'kee-pivot-mezzanine-safety-gates',
            category: 'Safety Gates',

            cardImage: '/images/products/kee-safety/p6.1.png',
            internalImage: '/images/products/kee-safety/p6.2.png',

            cardName: 'Kee Pivot® Mezzanine Safety Gates',
            cardProperty: 'Safety Gates',
            cardDescription: 'Our Pallet, Mezzanine & Rooftop Safety Gates are self-closing, spring loaded gates for hazard protection in internal or external applications.',

            mainProperty: 'Dual-gate interlocking safety system',
            mainDescription: 'Kee Pivot® Mezzanine Safety Gates provide a safe solution for loading and unloading materials at elevated platforms.',

            sizesAndSKUs: [
                'Clear opening widths: 1200mm - 3000mm',
                'Gate heights: 1000mm, 1100mm',
            ],

            standardsAndSpecifications: [
                'EN ISO 14122-3 - Mezzanine Safety Gates',
                'BS 6180 - Barriers in Buildings',
            ],

            applicationAndUsage: [
                'Mezzanine loading bays',
                'Pallet handling areas',
            ],

            brochures: [
                {
                    text: 'Kee Pivot Product Guide.pdf',
                    size: '2.2 MB',
                    link: '/brochures/kee-safety/kee-pivot-guide.pdf',
                },
            ],

            inStock: true,
            isNew: false,
            isFeatured: true,
            relatedProducts: ['kee-005'],
        },

        // ============================================
        // PLATFORMS & WALKWAYS (6 products)
        // ============================================

        // PRODUCT 7: Kee Walk® Rooftop Walkway
        {
            id: 'kee-007',
            name: 'Kee Walk® Rooftop Walkway',
            slug: 'kee-walk-rooftop-walkway',
            category: 'Platforms & Walkways',

            cardImage: '/images/products/kee-safety/p7.1.png',
            internalImage: '/images/products/kee-safety/p7.2.png',

            cardName: 'Kee Walk® Rooftop Walkway',
            cardProperty: 'Platforms & Walkways',
            cardDescription: 'We offer a portfolio of solutions which allow people to work safely, whether they\'re on a roof, on a raised platform.',

            mainProperty: 'A modular roof walkway system that is easy to install and designed to meet international safety standards.',
            mainDescription: 'Kee Walk® provides a safe, anti-slip, level walkway for workers who need to access a roof in the course of their work. Its intelligent design protects the roof surface from unnecessary damage and integrates easily with either guardrails or lifeline systems.',

            sizesAndSKUs: [
                'Modular walkway system',
                'Standard widths available (typically 600 mm / 900 mm)',
                'Custom lengths based on roof layout',
                'Optional accessories: handrails, ramps, steps, connectors',
            ],

            standardsAndSpecifications: [
                'Designed to meet EN 14122-3 (Safe means of access & guardrails)',
                'Complies with OSHA/ANSI safety standards',
                'Hot-dip galvanized steel for corrosion resistance',
                'Anti-slip perforated or grating surface',
                'Non-penetrating roof support where required',
            ],

            applicationAndUsage: [
                'Safe access routes on rooftops',
                'Maintenance walkways over equipment and plant areas',
                'Walkway paths to service areas on flat or low-slope roofs',
                'Industrial, commercial, and facility rooftops',
                'Protection over fragile surfaces',
            ],

            brochures: [
                {
                    text: 'Keesafety',
                    size: '91 KB',
                    link: 'https://keesafety.in/media/zw3mezuh/kee-walk-the-safe-access-solution-for-roof-top-walkways-and-stepovers_2020-india-email.pdf',
                },
            ],

            inStock: true,
            isNew: false,
            isFeatured: false,
            relatedProducts: ['kee-002', 'kee-008'],
        },

        // PRODUCT 8: Step Rooftop Crossovers and Stepovers
        {
            id: 'kee-008',
            name: 'Step Rooftop Crossovers and Stepovers',
            slug: 'step-rooftop-crossovers-stepovers',
            category: 'Platforms & Walkways',

            cardImage: '/images/products/kee-safety/p8.1.png',
            internalImage: '/images/products/kee-safety/p8.2.png',

            cardName: 'Step Rooftop Crossovers and Stepovers',
            cardProperty: 'Platforms & Walkways',
            cardDescription: 'We offer a portfolio of solutions which allow people to work safely, whether they\'re on a roof, on a raised platform.',

            mainProperty: 'Creates a safe route over objects and obstructions on the rooftop without penetrating the roof membrane.',
            mainDescription: 'Roof surfaces can be extremely dangerous places to work, but not if Kee® Step is installed. It provides a safe, anti-slip, level walking surface to access areas of the roof and to safely walk across it. Step sections are adjustable and can be used on sloped roofs too. Added to this, it also protects the roof sheet from foot traffic.',

            sizesAndSKUs: [
                'Modular step platform system',
                'Standard step heights available (typical single and multi-step options)',
                'Custom configurations based on access height',
                'Accessories: handrails, toe plates, landing platforms',
            ],

            standardsAndSpecifications: [
                'Engineered to meet EN 14122-3 (safe access systems)',
                'Complies with relevant OSHA/ANSI standards for platform steps',
                'Hot-dip galvanized steel for corrosion resistance',
                'Anti-slip perforated tread plates',
                'Designed for safe vertical elevation changes',
            ],

            applicationAndUsage: [
                'Transition steps between different roof levels',
                'Step access to elevated plant and equipment',
                'Safe movement across uneven floor levels',
                'Rooftops, industrial platforms, mezzanines',
                'Maintenance access where level change exists',
            ],

            brochures: [
                {
                    text: 'Keesafety',
                    size: '91 KB',
                    link: 'https://keesafety.in/media/zw3mezuh/kee-walk-the-safe-access-solution-for-roof-top-walkways-and-stepovers_2020-india-email.pdf',
                },
            ],

            inStock: true,
            isNew: false,
            isFeatured: false,
            relatedProducts: ['kee-007'],
        },

        // PRODUCT 9: Static Kee® Platform
        {
            id: 'kee-009',
            name: 'Static Kee® Platform',
            slug: 'static-kee-platform',
            category: 'Platforms & Walkways',

            cardImage: '/images/products/kee-safety/p9.1.png',
            internalImage: '/images/products/kee-safety/p9.2.png',

            cardName: 'Static Kee® Platform',
            cardProperty: 'Platforms & Walkways',
            cardDescription: 'We offer a portfolio of solutions which allow people to work safely, whether they\'re on a roof, on a raised platform.',

            mainProperty: 'Permanent safe access to perform tasks at height.',
            mainDescription: 'Static Kee® Platform uses Kee Klamp® tubular fittings to construct platforms to suit any application. Each platform is designed to your specific situation and built to exceed EN and OSHA safety standards. Static Kee® Platforms are flexible, durable and effectively protect workers from the hazards of slipping and falling when working at height.',

            sizesAndSKUs: [
                'Modular platform sections (custom lengths)',
                'Standard deck widths commonly available (e.g., 600 mm / 900 mm)',
                'Options for single or multi-section platforms',
                'Accessories include handrails, stair access kits, gates, toe plates',
            ],

            standardsAndSpecifications: [
                'Engineered to meet EN 14122-3 (permanent means of access & work platforms)',
                'Complies with relevant OSHA/ANSI safety standards',
                'Hot-dip galvanized steel construction for corrosion resistance',
                'Anti-slip deck surface',
                'Designed for easy assembly without welding',
            ],

            applicationAndUsage: [
                'Safe working area around rooftop plant and equipment',
                'Maintenance and service platforms on roofs and industrial structures',
                'Platforms for mechanical equipment access',
                'Elevated workstations in warehouses or factories',
                'Any area requiring a stable, safe work surface at height',
            ],

            brochures: [
                {
                    text: 'keesafety',
                    size: '91 KB',
                    link: 'https://keesafety.in/media/zw3mezuh/kee-walk-the-safe-access-solution-for-roof-top-walkways-and-stepovers_2020-india-email.pdf',
                },
            ],

            inStock: true,
            isNew: false,
            isFeatured: false,
            relatedProducts: ['kee-010', 'kee-011'],
        },

        // PRODUCT 10: Mobile Kee Platform®
        {
            id: 'kee-010',
            name: 'Mobile Kee Platform®',
            slug: 'mobile-kee-platform',
            category: 'Platforms & Walkways',

            cardImage: '/images/products/kee-safety/p10.1.png',
            internalImage: '/images/products/kee-safety/p10.2.png',

            cardName: 'Mobile Kee Platform®',
            cardProperty: 'Platforms & Walkways',
            cardDescription: 'We offer a portfolio of solutions which allow people to work safely, whether they\'re on a roof, on a raised platform.',

            mainProperty: 'Easily Customised, Multi-Purpose Mobile Access Platforms',
            mainDescription: 'Mobile Kee Platform® allows safe access to areas difficult to reach, such as machinery, warehouse racking, vehicle maintenance - including busses and trains, aircraft and helicopters maintenance and in welding or plastering applications. Platforms can be designed to suit any requirement.',

            sizesAndSKUs: [
                'Portable modular platform sections',
                'Standard platform widths (e.g., 600 mm / 900 mm)',
                'Optional extensions and crossover treads',
                'Optional handrails and stair access kits',
            ],

            standardsAndSpecifications: [
                'Designed to meet EN 14122-3 (safe access & work platforms)',
                'Complies with relevant OSHA/ANSI standards',
                'Hot-dip galvanized steel construction for durability',
                'Anti-slip perforated deck surface',
                'Lockable castors/wheels for secure positioning',
                'Quick-assembly bolt-together modular design',
            ],

            applicationAndUsage: [
                'Temporary or movable work platforms',
                'Rooftop equipment access where fixed platforms aren’t practical',
                'Maintenance access around plant & HVAC areas',
                'Flexible positioning in warehouses, factories, and job sites',
                'Areas requiring frequent repositioning of work platforms',
            ],

            brochures: [
                {
                    text: 'keesafety',
                    size: '91 KB',
                    link: 'https://keesafety.in/media/zw3mezuh/kee-walk-the-safe-access-solution-for-roof-top-walkways-and-stepovers_2020-india-email.pdf',
                },
            ],

            inStock: true,
            isNew: true,
            isFeatured: false,
            relatedProducts: ['kee-009', 'kee-011'],
        },

        // PRODUCT 11: Fragile Roof Platforms
        {
            id: 'kee-011',
            name: 'Fragile Roof Platforms',
            slug: 'fragile-roof-platforms',
            category: 'Platforms & Walkways',

            cardImage: '/images/products/kee-safety/p11.1.png',
            internalImage: '/images/products/kee-safety/p11.2.png',

            cardName: 'Fragile Roof Platforms',
            cardProperty: 'Platforms & Walkways',
            cardDescription: 'We offer a portfolio of solutions which allow people to work safely, whether they\'re on a roof, on a raised platform.',

            mainProperty: 'Providing safe access to those working on or around fragile roofs',
            mainDescription: 'Working around fragile roofs entails inherent danger. Unfortunately, these roofs still require maintenance. Kee Safety fragile roof platforms protect people who maintain these delicate roofs. Whether inspecting, cleaning, or resealing, Kee Safety\'s fragile roof platforms provide compliant protection.',

            sizesAndSKUs: [
                'Modular support platforms designed for fragile roof areas',
                'Standard widths (e.g., 600 mm / 900 mm)',
                'Custom lengths depending on fragile zone layout',
                'Optional ramps, handrails, and crossover kits',
            ],

            standardsAndSpecifications: [
                'Engineered to support personnel safely over fragile surfaces',
                'Designed per EN 14122 (safe means of access & walking surfaces)',
                'Complies with relevant OSHA/ANSI standards',
                'Hot-dip galvanized steel for corrosion resistance',
                'Anti-slip perforated deck for secure footing',
                'Distributed load design to reduce point loading on fragile panels',
            ],

            applicationAndUsage: [
                'Safe walking platforms over fragile roof sheets (e.g., fibre cement, polycarbonate)',
                'Rooftop maintenance and plant access',
                'Walkways across areas where roof substrate can break',
                'Industrial and commercial rooftops',
                'Facility rooftops where fragile materials exist',
            ],

            brochures: [
                {
                    text: 'keesafety',
                    size: '91 KB',
                    link: 'https://keesafety.in/media/zw3mezuh/kee-walk-the-safe-access-solution-for-roof-top-walkways-and-stepovers_2020-india-email.pdf',
                },
            ],

            inStock: true,
            isNew: false,
            isFeatured: false,
            relatedProducts: ['kee-007', 'kee-019'],
        },

        // PRODUCT 12: PitProtect® Maintenance Pit Cover
        {
            id: 'kee-012',
            name: 'PitProtect® Maintenance Pit Cover',
            slug: 'pitprotect-maintenance-pit-cover',
            category: 'Platforms & Walkways',

            cardImage: '/images/products/kee-safety/p12.1.png',
            internalImage: '/images/products/kee-safety/p12.2.png',

            cardName: 'PitProtect® Maintenance Pit Cover',
            cardProperty: 'Platforms & Walkways',
            cardDescription: 'We offer a portfolio of solutions which allow people to work safely, whether they\'re on a roof, on a raised platform.',

            mainProperty: 'Maintenance Pit Cover for Inspection Pits',
            mainDescription: 'The PitProtect is a lightweight concertina inspection pit cover. It has been created to safeguard open pits, and is designed to be robust, adjustable and quick and easy to deploy. The inspection pit cover protects against falls while still giving access to the underside of the vehicle. ',

            sizesAndSKUs: [
                'Modular platform covers sized to fit different pit and opening dimensions',
                'Standard widths and lengths based on common hatch sizes',
                'Optional accessories: handrails, safety chains, toe boards',
            ],

            standardsAndSpecifications: [
                'Designed to meet EN 14122-3 (safe means of access & work platforms)',
                'Complies with applicable OSHA/ANSI safety standards',
                'Heavy-duty hot-dip galvanized steel construction',
                'Anti-slip surface for secure footing',
                'Engineered to safely cover or bridge hazardous pits/openings',
            ],

            applicationAndUsage: [
                'Protecting floor pits and maintenance openings',
                'Mechanical and service pits in factories or warehouses',
                'Access ways over pits in industrial floors',
                'Areas where open floor pits pose fall hazards',
                'Maintenance access safety solution',
            ],

            brochures: [
                {
                    text: 'keesafety',
                    size: '91 KB',
                    link: 'https://keesafety.in/media/zw3mezuh/kee-walk-the-safe-access-solution-for-roof-top-walkways-and-stepovers_2020-india-email.pdf',
                },
            ],

            inStock: true,
            isNew: false,
            isFeatured: false,
            relatedProducts: ['kee-009'],
        },

        // ============================================
        // LIFELINES & ANCHORS (6 products)
        // ============================================

        // PRODUCT 13: Kee Line® Horizontal Lifeline
        {
            id: 'kee-013',
            name: 'Kee Line® Horizontal Lifeline',
            slug: 'kee-line-horizontal-lifeline',
            category: 'Lifelines & Anchors',

            cardImage: '/images/products/kee-safety/p13.1.png',
            internalImage: '/images/products/kee-safety/p13.2.png',

            cardName: 'Kee Line® Horizontal Lifeline',
            cardProperty: 'Lifelines & Anchors',
            cardDescription: 'Our selection of Horizontal Lifeline Systems, and Anchors that can be used in situations where collective protection is not available',

            mainProperty: 'Energy absorbing lifeline system suitable for use on roofs, ceilings and other structures.',
            mainDescription: 'Kee Line® Horizontal Lifeline provides a safe, anti-slip, level walkway for workers who need to access a roof in the course of their work. Its intelligent design protects the roof surface from unnecessary damage and integrates easily with either guardrails or lifeline systems.',

            sizesAndSKUs: [
                'Horizontal lifeline kits (various lengths)',
                'End-anchor kits, intermediate supports, tensioners',
                'Vertical lifelines & fall arrest anchors',
                'Accessories: carabiners, lanyards, tensioning tools',
            ],

            standardsAndSpecifications: [
                'Designed to comply with EN 795, CEN/TS 16415 (anchorages & lifelines)',
                'Meets applicable OSHA/ANSI fall protection standards',
                'High-strength galvanized steel components',
                'Tested load ratings for fall arrest / restraint use',
                'Designed for both single and multi-user applications',
            ],

            applicationAndUsage: [
                'Lifeline system for rooftop fall protection',
                'Anchorage points for safety harness attachment',
                'Horizontal runs across roof edges, structures, and support beams',
                'Fall restraint systems on building exteriors',
                'Industrial facilities, warehouses, commercial rooftops',
            ],

            brochures: [
                {
                    text: 'keesafety',
                    size: '91 KB',
                    link: 'https://keesafety.in/media/zw3mezuh/kee-walk-the-safe-access-solution-for-roof-top-walkways-and-stepovers_2020-india-email.pdf',
                },
            ],

            inStock: true,
            isNew: false,
            isFeatured: true,
            relatedProducts: ['kee-014', 'kee-015'],
        },

        // PRODUCT 14: Kee Track® Rigid Rail Lifeline
        {
            id: 'kee-014',
            name: 'Kee Track® Rigid Rail Lifeline',
            slug: 'kee-track-rigid-rail-lifeline',
            category: 'Lifelines & Anchors',

            cardImage: '/images/products/kee-safety/p14.1.png',
            internalImage: '/images/products/kee-safety/p14.2.png',

            cardName: 'Kee Track® Rigid Rail Lifeline',
            cardProperty: 'Lifelines & Anchors',
            cardDescription: 'Our selection of Horizontal Lifeline Systems, and Anchors that can be used in situations where collective protection is not available',

            mainProperty: 'Rigid Rail Fall Protection System',
            mainDescription: 'Kee Track® has a unique range of mounting options which ensures a secure installation for a wide variety of roof designs. It is particularly effective when users work at short free-fall distances, such as carrying out operations on trains, trucks and aircraft with low ground clearances.',

            sizesAndSKUs: [
                'Track systems in multiple lengths to suit building spans',
                'Compatible connectors and trolleys',
                'End stops, intermediate supports, and tensioning hardware',
                'Optional fall arrest blocks and harness accessories',
            ],

            standardsAndSpecifications: [
                'Designed to meet EN 795 Class E (track-guided lifeline systems)',
                'Complies with relevant OSHA/ANSI fall protection standards',
                'Hot-dip galvanized or coated steel track and components',
                'Engineered for smooth trolley movement and fall arrest engagement',
                'Tested to support fall arrest loads per safety standards',
            ],

            applicationAndUsage: [
                'Guided horizontal lifeline systems for roof edges, beams, and structures',
                'Personnel fall arrest and restraint systems',
                'Rooftop access zones on warehouses, facilities, and industrial buildings',
                'Roof perimeter fall protection where fixed railings are impractical',
                'Support for maintenance teams working at height',
            ],

            brochures: [
                {
                    text: 'keesafety',
                    size: '91 KB',
                    link: 'https://keesafety.in/media/zw3mezuh/kee-walk-the-safe-access-solution-for-roof-top-walkways-and-stepovers_2020-india-email.pdf',
                },
            ],

            inStock: true,
            isNew: true,
            isFeatured: true,
            relatedProducts: ['kee-013', 'kee-015'],
        },

        // PRODUCT 15: Kee Anchor® Deadweight Anchor
        {
            id: 'kee-015',
            name: 'Kee Anchor® Deadweight Anchor',
            slug: 'kee-anchor-deadweight-anchor',
            category: 'Lifelines & Anchors',

            cardImage: '/images/products/kee-safety/p15.1.png',
            internalImage: '/images/products/kee-safety/p15.2.png',

            cardName: 'Kee Anchor® Deadweight Anchor',
            cardProperty: 'Lifelines & Anchors',
            cardDescription: 'Our selection of Horizontal Lifeline Systems, and Anchors that can be used in situations where collective protection is not available',

            mainProperty: 'Make working at a height much safer with this mobile anchor system.',
            mainDescription: 'Kee Anchor® is a mobile, deadweight anchor device for use on roofs up to 5 degrees pitch, where the installation of collective protection or permanent anchor devices is not viable. The system uses a central pedestal which allows the attachment of a safety harness and lanyard and raises the height at which the arrest force is applied.',

            sizesAndSKUs: [
                'Range of anchor styles (fixed, temporary, single-user or multi-user)',
                'Base plates, pad eyes, and overhead anchorage points',
                'Accessories: bolts, mounting kits, certified attachment hardware',
            ],

            standardsAndSpecifications: [
                'Engineered to meet EN 795 (anchor devices)',
                'Designed per CEN/TS 16415 for multi-user anchor compatibility',
                'Complies with relevant OSHA/ANSI fall protection standards',
                'High-strength galvanized steel for durability and corrosion resistance',
                'Tested load ratings for fall arrest and restraint',
            ],

            applicationAndUsage: [
                'Anchor points for attaching fall arrest lanyards and safety harnesses',
                'Roof, steelwork, and structural anchorage positions',
                'Single-user and multiple-user anchor configurations',
                'Industrial facilities, warehouses, commercial rooftops',
                'Construction, maintenance, and service access points',
            ],

            brochures: [
                {
                    text: 'keesafety',
                    size: '91 KB',
                    link: 'https://keesafety.in/media/zw3mezuh/kee-walk-the-safe-access-solution-for-roof-top-walkways-and-stepovers_2020-india-email.pdf',
                },
            ],

            inStock: true,
            isNew: false,
            isFeatured: false,
            relatedProducts: ['kee-013', 'kee-016'],
        },

        // PRODUCT 16: Kee Point Eyebolt Safety Anchor
        {
            id: 'kee-016',
            name: 'Kee Point Eyebolt Safety Anchor',
            slug: 'kee-point-eyebolt-safety-anchor',
            category: 'Lifelines & Anchors',

            cardImage: '/images/products/kee-safety/p16.1.png',
            internalImage: '/images/products/kee-safety/p16.2.png',

            cardName: 'Kee Point Eyebolt Safety Anchor',
            cardProperty: 'Lifelines & Anchors',
            cardDescription: 'Our selection of Horizontal Lifeline Systems, and Anchors that can be used in situations where collective protection is not available',

            mainProperty: 'Wall-mounted eyebolt anchors for fall protection tie-off',
            mainDescription: 'Don\'t overlook safety for the sake of style. Kee® Point creates a wall-mounted anchor point that can be permanent or removable. Our anchor points are fully compliant but discreet enough to be used in public environments. Typically used where people need to reach out of a window, Kee Point will create an eye bolt that won\'t be an eye sore!',

            sizesAndSKUs: [
                'Range of dedicated anchor points for fall protection',
                'Options for fixed or temporary install',
                'Single-use and multi-user anchorage types',
                'Accessories: mounting bolts, base plates, certified hardware',
            ],

            standardsAndSpecifications: [
                'Engineered to meet EN 795 (anchor devices for fall arrest)',
                'Designed per CEN/TS 16415 for multi-user anchor compatibility',
                'Complies with relevant OSHA/ANSI fall protection standards',
                'High-strength galvanized steel construction for corrosion resistance',
                'Tested load ratings for fall arrest/ restraint applications',
            ],

            applicationAndUsage: [
                'Anchor points for attaching safety harness lanyards',
                'Roof edges, steel structures, beams, and columns',
                'Suitable for single installer or multiple workers',
                'Industrial facilities, warehouses, commercial rooftops',
                'Construction, maintenance, and access operations',
            ],

            brochures: [
                {
                    text: 'keesafety',
                    size: '91 KB',
                    link: 'https://keesafety.in/media/zw3mezuh/kee-walk-the-safe-access-solution-for-roof-top-walkways-and-stepovers_2020-india-email.pdf',
                },
            ],

            inStock: true,
            isNew: false,
            isFeatured: false,
            relatedProducts: ['kee-015', 'kee-017'],
        },

        // PRODUCT 17: DavitPro Arms
        {
            id: 'kee-017',
            name: 'DavitPro Arms',
            slug: 'davitpro-arms',
            category: 'Lifelines & Anchors',

            cardImage: '/images/products/kee-safety/p17.1.png',
            internalImage: '/images/products/kee-safety/p17.2.png',

            cardName: 'DavitPro Arms',
            cardProperty: 'Lifelines & Anchors',
            cardDescription: 'Our selection of Horizontal Lifeline Systems, and Anchors that can be used in situations where collective protection is not available',

            mainProperty: 'Lightweight aluminium abseil davit system compliant with BS 8610:2017 standard for rope access, work positioning',
            mainDescription: 'DavitPro davit arms are made from lightweight structural grade aluminum. Easy to carry and store, DavitPro has been tested to BS 8610:2017 for up to 2 persons under type A3, A4, and A5 procedures.',

            sizesAndSKUs: [
                'Davit arm systems in various reach lengths',
                'Fixed and adjustable arm models',
                'Base mounting options (floor, wall, roof, or structure)',
                'Accessories: winches, hoists, bases, safety clamps',
            ],

            standardsAndSpecifications: [
                'Engineered to meet EN 1496 (lifting equipment safety)',
                'Designed per relevant OSHA/ANSI standards for personnel lifting',
                'Heavy-duty steel construction with corrosion-resistant finish',
                'Load-rated for safe worker support and equipment lifting',
                'Smooth rotation and secure anchorage systems',
            ],

            applicationAndUsage: [
                'Personnel lifting and lowering at height',
                'Davit arm for roof edge access and fall protection tie-ins',
                'Lifting tools and equipment in industrial facilities',
                'Maintenance, rescue, and confined-space access',
                'Rooftops, platforms, steel structures, and stair landings',
            ],

            brochures: [
                {
                    text: 'keesafety',
                    size: '91 KB',
                    link: 'https://keesafety.in/media/zw3mezuh/kee-walk-the-safe-access-solution-for-roof-top-walkways-and-stepovers_2020-india-email.pdf',
                },
            ],

            inStock: true,
            isNew: false,
            isFeatured: false,
            relatedProducts: ['kee-018', 'kee-016'],
        },

        // PRODUCT 18: ProRail EX Abseil Rail System
        {
            id: 'kee-018',
            name: 'ProRail EX Abseil Rail System',
            slug: 'prorail-ex-abseil-rail-system',
            category: 'Lifelines & Anchors',

            cardImage: '/images/products/kee-safety/p18.1.png',
            internalImage: '/images/products/kee-safety/p18.2.png',

            cardName: 'ProRail EX Abseil Rail System',
            cardProperty: 'Lifelines & Anchors',
            cardDescription: 'Our selection of Horizontal Lifeline Systems, and Anchors that can be used in situations where collective protection is not available',

            mainProperty: 'Lightweight, versatile and compliant abseil rail system compliant with BS8610:2017 and by proxy conforms to EN795:2012',
            mainDescription: 'ProRail is an aluminum extruded rail with a hard anodized coating used for abseiling rope access, fall-arrest and fall-restraint scenarios. While in use, the user is connected to the rail via an externally mounted traveling device made of marine grade 316 stainless steel. ',

            sizesAndSKUs: [
                'External abseil rail sections in various lengths',
                'Complete kits with trolleys, end stops, and connectors',
                'Optional accessories: fall arrest devices, carabiners, anchors',
            ],

            standardsAndSpecifications: [
                'Engineered to meet EN 795 Class E (rail-guided device)',
                'Designed per CEN/TS 16415 (multi-user compatibility)',
                'Complies with relevant OSHA/ANSI fall protection standards',
                'Heavy-duty galvanized or coated steel rail components',
                'Smooth-operating guided trolley and fall arrest integration',
                'Load tested for safe personnel abseil / fall arrest use',
            ],

            applicationAndUsage: [
                'External abseil and descent systems on building exteriors',
                'Window cleaning, facade access, maintenance and repair work',
                'Fall arrest support for technicians abseiling on vertical surfaces',
                'Industrial buildings, commercial structures, high-rise façades',
                'Rooftops and elevated platforms where guided abseil is required',
            ],

            brochures: [
                {
                    text: 'keesafety',
                    size: '91 KB',
                    link: 'https://keesafety.in/media/zw3mezuh/kee-walk-the-safe-access-solution-for-roof-top-walkways-and-stepovers_2020-india-email.pdf',
                },
            ],

            inStock: true,
            isNew: true,
            isFeatured: false,
            relatedProducts: ['kee-017', 'kee-014'],
        },

        // ============================================
        // SKYLIGHT FALL PROTECTION (2 products)
        // ============================================

        // PRODUCT 19: Kee Cover® Rooflight Fall Protection
        {
            id: 'kee-019',
            name: 'Kee Cover® Rooflight Fall Protection',
            slug: 'kee-cover-rooflight-fall-protection',
            category: 'Skylight Fall Protection',

            cardImage: '/images/products/kee-safety/p19.1.png',
            internalImage: '/images/products/kee-safety/p19.2.png',

            cardName: 'Kee Cover® Rooflight Fall Protection',
            cardProperty: 'Skylight Fall Protection',
            cardDescription: 'Skylights and rooflights pose a significant hazard to people accessing the roof of a building. We offer several solutions to ensure the safety of people accessing the roof.',

            mainProperty: 'A range of fragile rooflight covers designed to prevent falls through skylights and rooflights.',
            mainDescription: 'Protect people from falling through fragile rooflights with Kee Cover® Skylight Covers. Kee Cover has been specifically designed to provide an effective solution for covering unprotected rooflights without blocking out the light they are supposed to let into a building.',

            sizesAndSKUs: [
                'Multiple skylight cover sizes to fit standard and custom openings',
                'Load-bearing covers available in different dimensions',
                'Accessories: mounting brackets, safety clamps, fixings',
            ],

            standardsAndSpecifications: [
                'Designed to meet EN 14122-4 (skylight fall protection requirements)',
                'Complies with applicable OSHA/ANSI fall protection standards',
                'Heavy-duty hot-dip galvanized steel',
                'High-strength load-bearing design',
                'Anti-slip surface for safe footing',
            ],

            applicationAndUsage: [
                'Roof skylight fall protection to prevent accidental falls',
                'Commercial and industrial rooftops',
                'Warehouses, factories, maintenance roofs',
                'Facilities where skylights pose fall hazards',
                'Easily added to existing roof structures',
            ],

            brochures: [
                {
                    text: 'keesafety',
                    size: '91 KB',
                    link: 'https://keesafety.in/media/zw3mezuh/kee-walk-the-safe-access-solution-for-roof-top-walkways-and-stepovers_2020-india-email.pdf',
                },
            ],

            inStock: true,
            isNew: false,
            isFeatured: false,
            relatedProducts: ['kee-020', 'kee-011'],
        },

        // PRODUCT 20: Kee Dome® Skylight Railing
        {
            id: 'kee-020',
            name: 'Kee Dome® Skylight Railing',
            slug: 'kee-dome-skylight-railing',
            category: 'Skylight Fall Protection',

            cardImage: '/images/products/kee-safety/p20.1.png',
            internalImage: '/images/products/kee-safety/p20.2.png',

            cardName: 'Kee Dome® Skylight Railing',
            cardProperty: 'Skylight Fall Protection',
            cardDescription: 'Skylights and rooflights pose a significant hazard to people accessing the roof of a building. We offer several solutions to ensure the safety of people accessing the roof.',

            mainProperty: 'A free-standing skylight fall protection system that will not penetrate your roof\'s surface',
            mainDescription: 'Kee Dome® is a modular system designed specifically to prevent falls through skylights, roof lights and dome lights. The modular Kee Dome system allows contractors and maintenance crews to access rooftops for repair and maintenance work safely and easily without the risk of falling through glazed areas.',

            sizesAndSKUs: [
                'Dome-shaped skylight guard sizes to fit standard and custom skylights',
                'Multiple diameter/options depending on opening size',
                'Accessories: mounting brackets, fixings, caps',
            ],

            standardsAndSpecifications: [
                'Engineered to meet EN 14122-4 (stand-off protection over skylights)',
                'Complies with relevant OSHA/ANSI fall protection standards',
                'Heavy-duty galvanized steel or weather-resistant finish',
                'Designed to withstand personnel load without damaging skylight',
                'Anti-slip and robust construction for long-term rooftop use',
            ],

            applicationAndUsage: [
                'Skylight fall protection to prevent accidental falls',
                'Industrial and commercial rooftop installations',
                'Factories, warehouses, facility roofs',
                'Maintenance areas where skylights are a fall hazard',
                'Easily retrofit to existing roof skylights',
            ],

            brochures: [
                {
                    text: 'keesafety',
                    size: '91 KB',
                    link: 'https://keesafety.in/media/zw3mezuh/kee-walk-the-safe-access-solution-for-roof-top-walkways-and-stepovers_2020-india-email.pdf',
                },
            ],

            inStock: true,
            isNew: false,
            isFeatured: true,
            relatedProducts: ['kee-019', 'kee-001'],
        },

        // ============================================
        // SAFE CONNECTIONS (2 products)
        // ============================================

        // PRODUCT 21: BoxBolt® Blind Bolt Connection
        {
            id: 'kee-021',
            name: 'BoxBolt® Blind Bolt Connection',
            slug: 'boxbolt-blind-bolt-connection',
            category: 'Safe Connections',

            cardImage: '/images/products/kee-safety/p21.1.png',
            internalImage: '/images/products/kee-safety/p21.2.png',

            cardName: 'BoxBolt® Blind Bolt Connection',
            cardProperty: 'Safe, Engineered Connections',
            cardDescription: 'BeamClamp and BoxBolt safe connections are used to join beams and tie together hollow steel in safe, engineered manner.',

            mainProperty: 'The blind bolt solution for connecting hollow section steelwork',
            mainDescription: 'BoxBolt is a fully tested and approved blind fixing solution for connecting hollow section steelwork, or other steel structures where access is restricted to one side only. Their ease of installation eliminates the need for tapping, welding, strapping or through-bolting. BoxBolt fixings are suitable for use with rectangular, square and circular hollow sections. ',

            sizesAndSKUs: [
                'BoxBolt® expansion anchors in various lengths and diameters',
                'Options for different base materials (concrete, block, brick)',
                'Pack sizes (single, multi-pack depending on retailer)',
            ],

            standardsAndSpecifications: [
                'High-strength mechanical expansion anchor',
                'Designed for secure fastening into masonry and concrete',
                'Corrosion-resistant finish (zinc plated / galvanized options)',
                'Tested pull-out strength to engineering safety factors',
                'Suitable for use with Kee Safety base plates and structural components',
            ],

            applicationAndUsage: [
                'Anchoring fall-protection posts and baseplates to concrete or masonry',
                'Securing safety railings, guard posts, equipment bases',
                'Installation of roof safety systems (railings, lifelines, platforms)',
                'Industrial and commercial construction fastening',
                'Maintenance and retrofit safety installations',
            ],

            brochures: [
                {
                    text: 'keesafety',
                    size: '91 KB',
                    link: 'https://keesafety.in/media/zw3mezuh/kee-walk-the-safe-access-solution-for-roof-top-walkways-and-stepovers_2020-india-email.pdf',
                },
            ],

            inStock: true,
            isNew: false,
            isFeatured: false,
            relatedProducts: ['kee-022', 'kee-003'],
        },

        // PRODUCT 22: BeamClamp® Engineered Connections
        {
            id: 'kee-022',
            name: 'BeamClamp® Engineered Connections',
            slug: 'beamclamp-engineered-connections',
            category: 'Safe Connections',

            cardImage: '/images/products/kee-safety/p22.1.png',
            internalImage: '/images/products/kee-safety/p22.2.png',

            cardName: 'BeamClamp® Engineered Connections',
            cardProperty: 'Safe, Engineered Connections',
            cardDescription: 'BeamClamp and BoxBolt safe connections are used to join beams and tie together hollow steel in safe, engineered manner.',

            mainProperty: 'A connection solution for structural steelwork',
            mainDescription: 'The BeamClamp range is designed to provide a secure fixing method for structural steelwork. It is ideal for areas where drilling or welding/hot working is not allowed, or where access and power is restricted. Once the connection has been made, it has a guaranteed safe working load, with no compromise or weakening of the existing steelwork.',

            sizesAndSKUs: [
                'Multiple clamp sizes to fit a range of steel beam flange widths',
                'Options include fixed and adjustable clamp types',
                'Accessories: bolts, nuts, spacers, load plates',
            ],

            standardsAndSpecifications: [
                'Engineered for secure structural connections',
                'Designed to meet relevant EN & ISO standards for structural fixings',
                'Complies with applicable OSHA safety requirements',
                'High-strength steel construction with corrosion-resistant finish',
                'Load-rated for safe anchorage to steel beams without drilling',
            ],

            applicationAndUsage: [
                'Beam mounting for fall-protection systems (railings, lifelines, platforms)',
                'Installing safety posts or anchor points on steel structures',
                'Industrial, warehouse, and facility steel frameworks',
                'Retrofit installations without welding/drilling',
                'Quick secure connections for OEM structures and safety systems',
            ],

            brochures: [
                {
                    text: 'keesafety',
                    size: '91 KB',
                    link: 'https://keesafety.in/media/zw3mezuh/kee-walk-the-safe-access-solution-for-roof-top-walkways-and-stepovers_2020-india-email.pdf',
                },
            ],

            inStock: true,
            isNew: false,
            isFeatured: false,
            relatedProducts: ['kee-021', 'kee-003'],
        },

    ],
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getKeeSafetyProductBySlug = (slug) => {
    return keeSafetyData.products.find(product => product.slug === slug);
};

export const getKeeSafetyProductsByCategory = (category) => {
    if (category === 'All Products') {
        return keeSafetyData.products;
    }
    return keeSafetyData.products.filter(product => product.category === category);
};

export const getKeeSafetyFeaturedProducts = () => {
    return keeSafetyData.products.filter(product => product.isFeatured);
};

export const getKeeSafetyRelatedProducts = (productId) => {
    const product = keeSafetyData.products.find(p => p.id === productId);
    if (!product || !product.relatedProducts) return [];

    return keeSafetyData.products.filter(p =>
        product.relatedProducts.includes(p.id)
    );
};

export const getKeeSafetyNewProducts = () => {
    return keeSafetyData.products.filter(product => product.isNew);
};