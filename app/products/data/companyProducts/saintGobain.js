// app/products/data/companyProducts/saintGobain.js

export const saintGobainData = {
    companyInfo: {
        name: "Saint-Gobain",
        logo: "/images/products/saint-gobain/logo.png",
        mainLogo: "/images/mk-logo.png", // Your company logo
    },

    types: [
        {
            id: "glass-wool",
            name: "Glass Wool",
            slug: "glass-wool",

            // Header description for listing page
            headerDescription: "Glass wool is a fibrous insulation material made from recycled glass, designed to provide effective thermal and acoustic insulation. It helps reduce heat transfer, improves indoor comfort, and lowers energy consumption in buildings. Glass wool also absorbs sound, making spaces quieter, and is non-combustible, offering good fire safety. It is lightweight, flexible, easy to install, and widely used in roofs, walls, ceilings, partitions, and HVAC duct insulation.",

            productCount: 7,

            products: [
                {
                    id: 1,
                    name: "Glass Wool Roll",
                    slug: "glass-wool-roll",
                    type: "Glass Wool",
                    image: "/images/products/saint-gobain/glass-wool-roll.png",
                    cardDescription: "Glass wool roll is a flexible, lightweight insulation material made from recycled glass fibers. It provides thermal insulation, sound absorption, and fire resistance, and is commonly used in roofs, walls, ceilings, and HVAC ducts.",
                    longDescription: "Glass wool roll is a flexible, lightweight insulation material made from recycled glass fibers. Designed for superior thermal and acoustic performance, it reduces heat transfer, improves indoor comfort, and lowers energy consumption. Non-combustible and easy to install, it is ideal for roofs, walls, ceilings, partitions, and HVAC duct insulation.",
                    range: ["Density : 10 to 48 kg/m3",
                        "Thickness : 25 to 130 mm",
                        "Width : 1.1 to 1.2 m",
                        "Length : 7.5 to 30 m",
                        "Available with or without facing"],
                    facings: ["Aluminium : FSK, R3035HD, Aluglass",
                        "Polypropylene : White Metalized Polypropylene",
                        "Tissue : FGT, BGT"],
                    basicInformation: [
                        "Make / Brand - Twigainsul",
                        "Material - Resin bonded glass wool",
                        "Standard / Code - IS 8183"
                    ],
                    properties: [
                        { name: "Long Resilient Blanks", icon: "/images/products/saint-gobain/icons/icon_4.png", description: "Excellent thermal resistance" },
                        { name: "Yellow in Colour", icon: "/images/products/saint-gobain/icons/icon_6.png", description: "Superior sound absorption" },
                        { name: "Lightweight and Flexible", icon: "/images/products/saint-gobain/icons/icon_7.png", description: "Non-combustible" },
                        { name: "Customized Product", icon: "/images/products/saint-gobain/icons/icon_2.png", description: "Easy to handle" },
                        { name: "Fewer Joints and Less Wastage", icon: "/images/products/saint-gobain/icons/icon_8.png", description: "Easy to handle" }
                    ],
                    brochure: "/pdf/products/saint-gobain/glass-wool-roll-brochure.pdf",
                    brochureFileName: "SAINTGOBAIN",
                    brochureFileSize: "101KB"
                },
                {
                    id: 2,
                    name: "Glass Wool Board",
                    slug: "glass-wool-board",
                    type: "Glass Wool",
                    image: "/images/products/saint-gobain/glass-wool-board.png",
                    cardDescription: "Glass wool board is specifically designed for insulating pipes, ducts, and cylindrical surfaces. Made from high-quality glass fibers, it provides excellent thermal efficiency, prevents condensation, and reduces energy loss.",
                    longDescription: "Glass wool board is a semi-rigid insulation panel offering excellent thermal and acoustic performance. Made from high-quality glass fibers, it provides superior energy efficiency and fire protection in residential and commercial buildings. Ideal for external walls, partitions, and roofs.",
                    range: ["Density : 32 to 120 kg/m3", "Thickness : 15 to 100 mm", "Width : 0.6 m", "Length : 1.2 m", "Available with or without facing"],
                    facings: ["Aluminium : FSK, R3035HD, Aluglass", "Polypropylene : White Metalized Polypropylene", "Tissue : FGT, BGT", "Glass Cloth : WGC, BGC"],
                    basicInformation: ["Make / Brand - Twigainsul", "Material - Resin bonded glass wool", "Standard / Code - IS 8183"],
                    properties: [
                        { name: "Rigid and Semi-Rigid Product", icon: "/images/products/saint-gobain/icons/icon_9.png", description: "Durable and long-lasting" },
                        { name: "Ease of use", icon: "/images/products/saint-gobain/icons/icon_10.png", description: "Characteristic finish" },
                        { name: "Self Supported", icon: "/images/products/saint-gobain/icons/icon_2.png", description: "Easy to handle" },
                        { name: "Customized Sizes", icon: "/images/products/saint-gobain/icons/icon_2.png", description: "Tailored to requirements" },

                    ],
                    brochure: "/pdf/products/saint-gobain/glass-wool-board-brochure.pdf",
                    brochureFileName: "SAINTGOBAIN",
                    brochureFileSize: "101 KB"
                },
                {
                    id: 3,
                    name: "Glass Wool Roll and Board",
                    slug: "glass-wool-roll-and-board",
                    type: "Glass Wool",
                    image: "/images/products/saint-gobain/glass-wool-roll-and-board.png",
                    cardDescription: "Glass wool is a lightweight insulation material made from recycled glass fibers. It provides thermal insulation, sound absorption, and fire resistance.",
                    longDescription: "Glass wool slabs and rolls are rigid to flexible insulation products made from compressed glass fibers. They offer superior thermal and acoustic insulation for walls, roofs, and partitions.",
                    range: ["Density (kg/m3) :10 to 48", "Thickness (mm) :25 to 130", "Width (m) :1.1 to 1.2", "Density :7.5 to 30", "Available with or without facing"],
                    facings: ["Aluminium : FSK, R3035 HD, Aluglass", "Polypropylene : White Metalized Polypropylene", "Tissue : FGT, BGT", "Glass Cloth : WGC, BGC"],
                    basicInformation: ["Make / Brand - Ecoinsul", "Material - Resin bonded glass wool", "Standard / Code - IS 8183"],
                    properties: [
                        { name: "Green Blinder", icon: "/images/products/saint-gobain/icons/icon_11.png", description: "Superior performance" },
                        { name: "Soft to Touch", icon: "/images/products/saint-gobain/icons/icon_12.png", description: "Excellent absorption" },
                        { name: "Odourless", icon: "/images/products/saint-gobain/icons/icon_13.png", description: "Class A1" },
                        { name: "Formaldehyde Free", icon: "/images/products/saint-gobain/icons/icon_14.png", description: "Class A1" },
                        { name: "Available in Both Roll and Board Form", icon: "/images/products/saint-gobain/icons/icon_15.png", description: "Class A1" },
                        { name: "Customized Sizes", icon: "/images/products/saint-gobain/icons/icon_2.png", description: "Class A1" },
                    ],
                    brochure: "/pdf/products/saint-gobain/glass-wool-roll-board-brochure.pdf",
                    brochureFileName: "SAINTGOBAIN",
                    brochureFileSize: "101 KB"
                },
                {
                    id: 4,
                    name: "Glass Wool Pipe Insulation",
                    slug: "glass-wool-pipe-insulation",
                    type: "Glass Wool",
                    image: "/images/products/saint-gobain/glass-wool-pipe-insulation.png",
                    cardDescription: "Specifically designed for insulating pipes, ducts, and cylindrical surfaces. Prevents condensation and reduces energy loss.",
                    longDescription: "Glass wool pipe insulation is specifically designed for insulating pipes, ducts, and cylindrical surfaces. Made from high-quality glass fibers, it provides excellent thermal efficiency, prevents condensation, and reduces energy loss in HVAC and plumbing systems.",
                    range: ["Density (kg/m3) :80", "Thickness (mm) :25 to 75", "Diameter NB (mm) :25 to 450", "Length (m) :1.2", "Available with or without facing (without facing in case of preformed pipe section)",],
                    facings: ["Aluminium : FSK"],
                    basicInformation: ["Make / Brand - Twigainsul", "Material - Resin bonded glass wool", "Standard / Code - IS 9842"],
                    properties: [
                        { name: "Performed Pipe Section", icon: "/images/products/saint-gobain/icons/icon_1.png", description: "Reduces heat loss" },
                        { name: "Rigid", icon: "/images/products/saint-gobain/icons/icon_3.png", description: "Prevents moisture" },
                        { name: "Easy and Fast Installation", icon: "/images/products/saint-gobain/icons/icon_5.png", description: "Pre-formed sections" },
                        { name: "Customizable", icon: "/images/products/saint-gobain/icons/icon_2.png", description: "Pre-formed sections" },
                        { name: "Made of Glass Fiber Wedges Laminated With AlumInium Foil", icon: "/images/products/saint-gobain/icons/icon_4.png", description: "Pre-formed sections" },
                        { name: "Compression Resistant", icon: "/images/products/saint-gobain/icons/icon_2.png", description: "Pre-formed sections" },
                    ],
                    brochure: "/pdf/products/saint-gobain/glass-wool-pipe-brochure.pdf",
                    brochureFileName: "SAINTGOBAIN",
                    brochureFileSize: "101 KB"
                },
                {
                    id: 5,
                    name: "Flexible Duct Insulation",
                    slug: "flexible-duct-insulation",
                    type: "Glass Wool",
                    image: "/images/products/saint-gobain/flexible-duct-insulation.png",
                    cardDescription: "Wraps easily around rectangular and round ducts, improving energy efficiency and indoor air quality.",
                    longDescription: "Flexible duct insulation (Duct Wrap) is designed to insulate HVAC ducts, reducing heat loss/gain and condensation. Its flexible design wraps easily around rectangular and round ducts.",
                    range: ["Density (kg/m3) :80", "Thickness (mm) :25 to 75", "Diameter NB (mm) :25 to 450", "Length (m) :1.2", "Available with or without facing (without facing in case of preformed pipe section)",],
                    facings: ["Aluminium : FSK"],
                    basicInformation: ["Make / Brand - Twigainsul", "Material - Resin bonded glass wool", "Standard / Code - IS 9842"],
                    properties: [
                        { name: "High Degree of Flexibility", icon: "/images/products/saint-gobain/icons/icon_16.png", description: "Lower consumption" },
                        { name: "Allows Ducting Around Obstacles", icon: "/images/products/saint-gobain/icons/icon_17.png", description: "Prevents buildup" },
                        { name: "Lightweight", icon: "/images/products/saint-gobain/icons/icon_7.png", description: "Easy wrap" },
                        { name: "Stong, Dimensionally Stable", icon: "/images/products/saint-gobain/icons/icon_2.png", description: "Easy wrap" },
                        { name: "Easy to Install", icon: "/images/products/saint-gobain/icons/icon_10.png", description: "Easy wrap" },
                        { name: "Compressible", icon: "/images/products/saint-gobain/icons/icon_2.png", description: "Easy wrap" }


                    ],
                    brochure: "/pdf/products/saint-gobain/flexible-duct-brochure.pdf",
                    brochureFileName: "SAINTGOBAIN",
                    brochureFileSize: "101 KB"
                },
                {
                    id: 6,
                    name: "Acoustic Board | Acoustic Panels and Foam",
                    slug: "acoustic-board",
                    type: "Acoustic",
                    image: "/images/products/saint-gobain/acoustic-board.png",
                    cardDescription: "Specifically designed to reduce sound transmission. Ideal for offices, auditoriums, and commercial spaces.",
                    longDescription: "Acoustic boards and panels are specifically designed to reduce sound transmission and improve acoustics in buildings. Made from high-quality compressed glass fibers.",
                    range: ["Density : 70 to 80 kg/m3", "Thickness : 25 to 50 mm", "Width : 0.6 and 1.2 m", "Length : 1.2 and 2.5 m"],
                    facings: ["FSK on one side + BGC on the other side"],
                    basicInformation: ["Make / Brand - Twigainsul", "Material - Resin bonded glass wool", "Standard / Code - IS 8183"],
                    properties: [
                        { name: "Rigid", icon: "/images/products/saint-gobain/icons/icon_9.png", description: "Superior absorption" },
                        { name: "For Acoustic Sensitive Area", icon: "/images/products/saint-gobain/icons/icon_18.png", description: "Non-combustible" },
                        { name: "Easy to Install", icon: "/images/products/saint-gobain/icons/icon_2.png", description: "Decorative finishes" }
                    ],
                    brochure: "/pdf/products/saint-gobain/acoustic-board-brochure.pdf",
                    brochureFileName: "SAINTGOBAIN",
                    brochureFileSize: "101 KB"
                },
                {
                    id: 7,
                    name: "Mineral Fiber Marine Board (MFMB)",
                    slug: "mineral-fiber-marine-board",
                    type: "Acoustic",
                    image: "/images/products/saint-gobain/mineral-fiber-marine-board.png",
                    cardDescription: "High-quality materials provide excellent sound absorption for commercial environments.",
                    longDescription: "Acoustic panels and foam are specifically designed to reduce sound transmission in buildings. Made from high-quality materials, they provide excellent sound absorption.",
                    range: ["Density : 56 kg/m3", "Thickness : 25 to 75 mm", "Width : 0.6 m", "Length : 0.9 m"],
                    facings: ["Glass Cloth: WGC"],
                    basicInformation: ["Make / Brand - Twigainsul", "Material - Resin bonded glass wool", "Standard / Code - Naval Engineering Standard 802 Part 1, NCD 1427 Issue 1"],
                    properties: [
                        { name: "Rigid Board", icon: "/images/products/saint-gobain/icons/icon_9.png", description: "Absorbs airborne sound" },
                        { name: "Used in ships: Bulkhead, Deckhead and duck Insulation", icon: "/images/products/saint-gobain/icons/icon_19.png", description: "Easy to handle" },
                        { name: "Helps Withstand Extreme Ambient Conditions", icon: "/images/products/saint-gobain/icons/icon_20.png", description: "Recycled content" }
                    ],
                    brochure: "/pdf/products/saint-gobain/acoustic-panels-brochure.pdf",
                    brochureFileName: "SAINTGOBAIN",
                    brochureFileSize: "101 KB"
                }
            ]
        },

        {
            id: "stone-wool",
            name: "Stone Wool Insulation",
            slug: "stone-wool",

            headerDescription: "Stone wool (rock wool) is made by melting volcanic rock such as basalt and converting them to fiber form. With the ability to operate at service temperatures up to 750oC, it is predominantly used in high temperature industrial applications.",

            productCount: 7,

            products: [
                {
                    id: 8,
                    name: "Rockwool Insulation LRB Mattress",
                    slug: "rockwool-insulation-lrb-mattress",
                    type: "Stone Wool",
                    image: "/images/products/saint-gobain/rockwool-lrb-mattress.png",
                    cardDescription: "High-temperature insulation material made from volcanic rock. Ideal for industrial applications, piping, and equipment insulation.",
                    longDescription: "Rockwool LRB (Lamella Reinforced Blanket) Mattress is a high-density stone wool insulation designed for cylindrical surfaces such as tanks, vessels, and large-diameter pipes. It offers exceptional thermal efficiency and fire protection at high temperatures.",
                    range: ["Density : 70 to 160 kg/m3", "Thickness : 25 to 100 mm", "Width : 1.22 m", "Length : 1.52 to 5 m"],
                    facings: ["GI Wire Mesh", "SS Wire Mesh"],
                    basicInformation: ["Make / Brand - Rockinsul", "Material - Low resin bonded stone wool mattress", "Standard / Code - IS 8183, IS 3144, ASTM C592"],
                    properties: [
                        { name: "High Density", icon: "/images/products/saint-gobain/icons/s1.png", description: "Withstands up to 750°C" },
                        { name: "Low Binder", icon: "/images/products/saint-gobain/icons/s2.png", description: "Non-combustible" },
                        { name: "Semi- Flexible Mat", icon: "/images/products/saint-gobain/icons/s3.png", description: "Excellent insulation" },
                        { name: "Customized Lengths", icon: "/images/products/saint-gobain/icons/s4.png", description: "Excellent insulation" },
                        { name: "Fewer Joints and Less Wastage", icon: "/images/products/saint-gobain/icons/s5.png", description: "Excellent insulation" }
                    ],
                    brochure: "/pdf/products/saint-gobain/rockwool-lrb-mattress-brochure.pdf",
                    brochureFileName: "SAINTGOBAIN",
                    brochureFileSize: "101 KB"
                },
                {
                    id: 9,
                    name: "RB Slab | Resin Bonded Stone Wool Slab",
                    slug: "rb-slab-stone-wool",
                    type: "Stone Wool",
                    image: "/images/products/saint-gobain/rb-slab-stone-wool.png",
                    cardDescription: "Rigid, high-density insulation boards designed for walls, roofs, and partitions in industrial and commercial buildings.",
                    longDescription: "Resin Bonded (RB) Slabs are semi-rigid to rigid stone wool insulation boards designed for superior fire protection, thermal insulation, and acoustic performance. They are ideal for high-temperature applications and building partitions.",
                    range: ["Density : 40 to 180 kg/m3", "Thickness : 25 to 150 mm", "Width : 0.6 m", "Length : 0.6 to 1.2 m", "Available with or without facing"],
                    facings: ["Aluminium : FSK", "Aluglass Tissue : BGT / Black Glass Fabric"],
                    basicInformation: ["Make / Brand - Rockinsul", "Material - Low resin bonded stone wool mattress", "Standard / Code - IS 8183, IS 3144, ASTM C 612"],
                    properties: [
                        { name: "Rigid / semi-rigid", icon: "/images/products/saint-gobain/icons/s6.png", description: "Non-combustible up to 1000°C" },
                        { name: "Strong", icon: "/images/products/saint-gobain/icons/s7.png", description: "Excellent performance" },
                        { name: "Easy to handle", icon: "/images/products/saint-gobain/icons/s8.png", description: "Superior absorption" },
                        { name: "Easy to cut", icon: "/images/products/saint-gobain/icons/s9.png", description: "Superior absorption" },
                        { name: "Dimensionally stable", icon: "/images/products/saint-gobain/icons/s10.png", description: "Superior absorption" }
                    ],
                    brochure: "/pdf/products/saint-gobain/rb-slab-brochure.pdf",
                    brochureFileName: "SAINTGOBAIN",
                    brochureFileSize: "101 KB"
                },
                {
                    id: 10,
                    name: "Stone Wool Pipe Section",
                    slug: "stone-wool-pipe-section",
                    type: "Stone Wool",
                    image: "/images/products/saint-gobain/stone-wool-pipe-section.png",
                    cardDescription: "Pre-formed insulation designed for high-temperature pipes in industrial and process applications.",
                    longDescription: "Stone wool pipe sections are pre-formed insulation designed for high-temperature pipes. They provide superior fire resistance, thermal efficiency, and are easy to install on hot piping systems.",
                    range: ["Density : 100 to 160 kg/m3", "Thickness : 25 to 100 mm", "Diameter : 15 to 600 mm (NB)", "Length : 1.2 to 1.25 m"],
                    facings: ["Unfaced / plain", "Aluminium : FSK"],
                    basicInformation: ["Make / Brand - Rockinsul", "Material - Stone wool pipe section", "Standard / Code - IS 9842, ASTM C 547"],
                    properties: [
                        { name: "Pre-formed pipe section", icon: "/images/products/saint-gobain/icons/s11.png", description: "Up to 750°C" },
                        { name: "Rigid", icon: "/images/products/saint-gobain/icons/s7.png", description: "Reduces heat loss" },
                        { name: "Ease of installation", icon: "/images/products/saint-gobain/icons/s12.png", description: "Pre-cut sections" },
                        { name: "Less joints and wastage", icon: "/images/products/saint-gobain/icons/s5.png", description: "Pre-cut sections" },
                        { name: "Good compressive strength", icon: "/images/products/saint-gobain/icons/s13.png", description: "Pre-cut sections" },
                        { name: "No sagging", icon: "/images/products/saint-gobain/icons/s14.png", description: "Pre-cut sections" },

                    ],
                    brochure: "/pdf/products/saint-gobain/stone-wool-pipe-brochure.pdf",
                    brochureFileName: "SAINTGOBAIN",
                    brochureFileSize: "101 KB"
                },
                {
                    id: 11,
                    name: "Tuffinsul Slab | Stone Wool Rigid Slab",
                    slug: "tuffinsul-slab",
                    type: "Stone Wool",
                    image: "/images/products/saint-gobain/tuffinsul-slab.png",
                    cardDescription: "Exceptional fire resistance and thermal performance for façades, fire barriers, and industrial applications.",
                    longDescription: "Tuffinsul Slabs are high-density, rigid stone wool boards offering exceptional fire resistance. They are specifically designed for external façades, fire barriers, and high-temperature industrial environments.",
                    range: ["Density : 80 to 150 kg/m3", "Thickness : 50 to 100 mm", "Width : 0.6 m", "Length : 1 to 1.2 m"],
                    facings: ["Unfaced / plain",],
                    basicInformation: ["Make / Brand - Tuffinsul", "Material - Stone wool pipe section", "Standard / Code - IS 8183, IS 3144"],
                    properties: [
                        { name: "Superior Rigidity", icon: "/images/products/saint-gobain/icons/s7.png", description: "Non-combustible" },
                        { name: "High Compressive Strength", icon: "/images/products/saint-gobain/icons/s6.png", description: "Dimensionally stable" },

                    ],
                    brochure: "/pdf/products/saint-gobain/tuffinsul-slab-brochure.pdf",
                    brochureFileName: "SAINTGOBAIN",
                    brochureFileSize: "101 KB"
                },
                {
                    id: 12,
                    name: "Tuffinsul Lamella Bat",
                    slug: "tuffinsul-lamella-bat",
                    type: "Stone Wool",
                    image: "/images/products/saint-gobain/tuffinsul-lamella-bat.png",
                    cardDescription: "Orientation of fibers provides high compressive strength, making it ideal for sandwich panels.",
                    longDescription: "Tuffinsul Lamella Bat is a specialized stone wool product where fibers are oriented perpendicular to the surface. This provides extremely high compressive strength, making it the perfect core material for sandwich panels and structural insulation.",
                    range: ["Density : 80 to 150 kg/m3", "Thickness : 25 to 110 mm", "Width : 100 to 110 mm", "Length : 1 to 1.2 m", "Available without facing"],
                    facings: [],
                    basicInformation: ["Make / Brand - Tuffinsul", "Material - Stone wool pipe section", "Standard / Code - IS 8183, IS 3144"],
                    properties: [
                        { name: "Rigid Bat", icon: "/images/products/saint-gobain/icons/s15.png", description: "High compressive strength" },

                    ],
                    brochure: "/pdf/products/saint-gobain/tuffinsul-lamella-brochure.pdf",
                    brochureFileName: "Lamella Bat",
                    brochureFileSize: "92 KB"
                },
                {
                    id: 13,
                    name: "Stone Wool Building Roll",
                    slug: "stone-wool-building-roll",
                    type: "Stone Wool",
                    image: "/images/products/saint-gobain/stone-wool-building-roll.png",
                    cardDescription: "Flexible stone wool rolls for large-area thermal and acoustic insulation in buildings.",
                    longDescription: "Stone wool building rolls are flexible, high-performance insulation rolls designed for large-area applications. Perfect for industrial buildings, warehouses, and metal structures, providing thermal and acoustic benefits.",
                    range: ["Density : 40 to 100 kg/m3", "Thickness : 50 to 100 mm", "Width : 1.1 to 1.2 m", "Length : 5 to 10 m", "Available with or without facing"],
                    facings: ["Aluminium : FSK", "Alu Glass"],
                    basicInformation: ["Make / Brand - Rockinsul", "Material - Resin bonded stone wool blanket", "Standard / Code - IS 8183"],
                    properties: [
                        { name: "Superior Rigidity", icon: "/images/products/saint-gobain/icons/s16.png", description: "Effective transfer reduction" },
                        { name: "High Compressive Strength", icon: "/images/products/saint-gobain/icons/s17.png", description: "Sound absorption" },
                    ],
                    brochure: "/pdf/products/saint-gobain/building-roll-brochure.pdf",
                    brochureFileName: "SAINTGOBAIN",
                    brochureFileSize: "101 KB"
                },
                {
                    id: 14,
                    name: "Stone Wool Loose Wool",
                    slug: "stone-wool-loose-wool",
                    type: "Stone Wool",
                    image: "/images/products/saint-gobain/stone-wool-loose-wool.png",
                    cardDescription: "Bulk stone wool fibers for filling irregular spaces and cavities where pre-formed insulation cannot be used.",
                    longDescription: "Stone wool loose wool consists of bulk fibers designed for filling irregular spaces, cavities, and complex geometries. It is widely used for thermal insulation in high-temperature industrial equipment and fire-stopping applications.",
                    range: [],
                    facings: [],
                    basicInformation: ["Make / Brand - Rockinsul", "Material - Unbonded stone wool fibers", "Standard / Code - IS 3677, ASTM C 764"],
                    properties: [
                        { name: "Unbonded Loose Stone Wool Fibers", icon: "/images/products/saint-gobain/icons/s18.png", description: "Fills any shape" },
                        { name: "No Specific Density or Thickness", icon: "/images/products/saint-gobain/icons/s19.png", description: "Industrial performance" },
                        { name: "In Fill Material For Complex Shapes", icon: "/images/products/saint-gobain/icons/s20.png", description: "Fills gaps perfectly" }
                    ],
                    brochure: "/pdf/products/saint-gobain/loose-wool-brochure.pdf",
                    brochureFileName: "Loose Wool",
                    brochureFileSize: "75 KB"
                }
            ]
        }
    ]
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getAllTypes() { return saintGobainData.types; }
export function getTypeBySlug(slug) { return saintGobainData.types.find(type => type.slug === slug); }
export function getAllProducts() { return saintGobainData.types.flatMap(type => type.products); }
export function getProductsByType(typeSlug) { const type = getTypeBySlug(typeSlug); return type ? type.products : []; }
export function getProductBySlug(productSlug) { return getAllProducts().find(product => product.slug === productSlug); }
export function getRelatedProducts(productSlug, limit = 3) {
    const currentProduct = getProductBySlug(productSlug);
    if (!currentProduct) return [];
    const type = saintGobainData.types.find(t => t.products.some(p => p.slug === productSlug));
    if (!type) return [];
    return type.products.filter(p => p.slug !== productSlug).slice(0, limit);
}
export function searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    return getAllProducts().filter(product =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.cardDescription.toLowerCase().includes(lowerQuery) ||
        product.type.toLowerCase().includes(lowerQuery)
    );
}