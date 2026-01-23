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
                    range: ["25mm thickness", "50mm thickness", "75mm thickness", "100mm thickness"],
                    facings: ["Unfaced", "Aluminium foil faced", "Black glass tissue faced", "White glass tissue faced"],
                    basicInformation: [
                        "Density: 12-24 kg/m³",
                        "Thermal Conductivity: 0.035-0.040 W/mK",
                        "Temperature Range: -40°C to +250°C",
                        "Fire Rating: Non-combustible (Class A1)",
                        "Roll Width: 1200mm standard"
                    ],
                    properties: [
                        { name: "Thermal Insulation", icon: "/images/icons/thermal_insulation.png", description: "Excellent thermal resistance" },
                        { name: "Acoustic Performance", icon: "/images/icons/superior_acoustic_insulation.png", description: "Superior sound absorption" },
                        { name: "Fire Resistance", icon: "/images/icons/fire-resistant.png", description: "Non-combustible" },
                        { name: "Lightweight", icon: "/images/icons/lightweight.png", description: "Easy to handle" }
                    ],
                    brochure: "/pdf/products/saint-gobain/glass-wool-roll-brochure.pdf",
                    brochureFileName: "Glass Wool Roll",
                    brochureFileSize: "85 KB"
                },
                {
                    id: 2,
                    name: "Glass Wool Board",
                    slug: "glass-wool-board",
                    type: "Glass Wool",
                    image: "/images/products/saint-gobain/glass-wool-board.png",
                    cardDescription: "Glass wool board is specifically designed for insulating pipes, ducts, and cylindrical surfaces. Made from high-quality glass fibers, it provides excellent thermal efficiency, prevents condensation, and reduces energy loss.",
                    longDescription: "Glass wool board is a semi-rigid insulation panel offering excellent thermal and acoustic performance. Made from high-quality glass fibers, it provides superior energy efficiency and fire protection in residential and commercial buildings. Ideal for external walls, partitions, and roofs.",
                    range: ["Density : 10 to 48 kg/m3", "Thickness : 25 to 130 mm", "Width : 1.1 to 1.2 m", "Length : 7.5 to 30 m"],
                    facings: ["Aluminium : FSK, R3035HD, Aluglass", "Polypropylene : White Metalized Polypropylene", "Tissue : FGT, BGT"],
                    basicInformation: ["Make / Brand - Twigainsul", "Material - Resin bonded glass wool", "Standard / Code - IS 8183"],
                    properties: [
                        { name: "Long Resilient Blanks", icon: "/images/icons/durable.png", description: "Durable and long-lasting" },
                        { name: "Yellow in Colour", icon: "/images/icons/aesthetic.png", description: "Characteristic finish" },
                        { name: "Lightweight and Flexible", icon: "/images/icons/lightweight.png", description: "Easy to handle" },
                        { name: "Customized Product", icon: "/images/icons/flexible.png", description: "Tailored to requirements" },
                        { name: "Fewer Joints", icon: "/images/icons/energy_savings.png", description: "Optimized lengths" }
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
                    range: ["25mm to 150mm thickness", "Variable densities"],
                    facings: ["Unfaced", "Black glass tissue faced", "Aluminium foil faced"],
                    basicInformation: ["Density: 48-96 kg/m³", "Thermal Conductivity: 0.033-0.036 W/mK", "Fire Rating: Non-combustible"],
                    properties: [
                        { name: "Thermal Insulation", icon: "/images/icons/thermal_insulation.png", description: "Superior performance" },
                        { name: "Acoustic Insulation", icon: "/images/icons/superior_acoustic_insulation.png", description: "Excellent absorption" },
                        { name: "Fire Resistance", icon: "/images/icons/fire-resistant.png", description: "Class A1" }
                    ],
                    brochure: "/pdf/products/saint-gobain/glass-wool-roll-board-brochure.pdf",
                    brochureFileName: "Glass Wool Roll & Board",
                    brochureFileSize: "88 KB"
                },
                {
                    id: 4,
                    name: "Glass Wool Pipe Insulation",
                    slug: "glass-wool-pipe-insulation",
                    type: "Glass Wool",
                    image: "/images/products/saint-gobain/glass-wool-pipe-insulation.png",
                    cardDescription: "Specifically designed for insulating pipes, ducts, and cylindrical surfaces. Prevents condensation and reduces energy loss.",
                    longDescription: "Glass wool pipe insulation is specifically designed for insulating pipes, ducts, and cylindrical surfaces. Made from high-quality glass fibers, it provides excellent thermal efficiency, prevents condensation, and reduces energy loss in HVAC and plumbing systems.",
                    range: ["Pipe diameter: 15mm to 600mm", "Thickness: 25mm to 100mm"],
                    facings: ["Unfaced", "Aluminium foil jacket", "PVC jacket"],
                    basicInformation: ["Density: 40-80 kg/m³", "Temperature Range: -40°C to +250°C", "Fire Rating: Class A1"],
                    properties: [
                        { name: "Energy Efficiency", icon: "/images/icons/energy_savings.png", description: "Reduces heat loss" },
                        { name: "Condensation Control", icon: "/images/icons/moisture_protection.png", description: "Prevents moisture" },
                        { name: "Easy Installation", icon: "/images/icons/labour_efficiency.png", description: "Pre-formed sections" }
                    ],
                    brochure: "/pdf/products/saint-gobain/glass-wool-pipe-brochure.pdf",
                    brochureFileName: "Pipe Insulation",
                    brochureFileSize: "92 KB"
                },
                {
                    id: 5,
                    name: "Flexible Duct Insulation",
                    slug: "flexible-duct-insulation",
                    type: "Glass Wool",
                    image: "/images/products/saint-gobain/flexible-duct-insulation.png",
                    cardDescription: "Wraps easily around rectangular and round ducts, improving energy efficiency and indoor air quality.",
                    longDescription: "Flexible duct insulation (Duct Wrap) is designed to insulate HVAC ducts, reducing heat loss/gain and condensation. Its flexible design wraps easily around rectangular and round ducts.",
                    range: ["25mm to 50mm thickness", "Roll width: 1200mm"],
                    facings: ["Aluminium foil FSK", "White vinyl", "Unfaced"],
                    basicInformation: ["Density: 24-48 kg/m³", "Thermal Conductivity: 0.035-0.038 W/mK", "Temperature: -40°C to +250°C"],
                    properties: [
                        { name: "Energy Saving", icon: "/images/icons/energy_savings.png", description: "Lower consumption" },
                        { name: "Moisture Protection", icon: "/images/icons/moisture_protection.png", description: "Prevents buildup" },
                        { name: "Flexible", icon: "/images/icons/flexible.png", description: "Easy wrap" }
                    ],
                    brochure: "/pdf/products/saint-gobain/flexible-duct-brochure.pdf",
                    brochureFileName: "Duct Insulation",
                    brochureFileSize: "86 KB"
                },
                {
                    id: 6,
                    name: "Acoustic Board | Acoustic Panels and Foam",
                    slug: "acoustic-board",
                    type: "Acoustic",
                    image: "/images/products/saint-gobain/acoustic-board.png",
                    cardDescription: "Specifically designed to reduce sound transmission. Ideal for offices, auditoriums, and commercial spaces.",
                    longDescription: "Acoustic boards and panels are specifically designed to reduce sound transmission and improve acoustics in buildings. Made from high-quality compressed glass fibers.",
                    range: ["Thickness: 25mm to 100mm", "Standard 600x600mm or 1200x600mm"],
                    facings: ["Fabric finish", "Painted finish", "Tissue faced"],
                    basicInformation: ["Density: 60-100 kg/m³", "NRC: 0.85 to 1.00", "Fire Rating: Euroclass A1"],
                    properties: [
                        { name: "Acoustic Performance", icon: "/images/icons/superior_acoustic_insulation.png", description: "Superior absorption" },
                        { name: "Fire Safety", icon: "/images/icons/fire-resistant.png", description: "Non-combustible" },
                        { name: "Aesthetic", icon: "/images/icons/aesthetic.png", description: "Decorative finishes" }
                    ],
                    brochure: "/pdf/products/saint-gobain/acoustic-board-brochure.pdf",
                    brochureFileName: "Acoustic Board",
                    brochureFileSize: "90 KB"
                },
                {
                    id: 7,
                    name: "Acoustic Board | Acoustic Panels and Foam",
                    slug: "acoustic-board-2",
                    type: "Acoustic",
                    image: "/images/products/saint-gobain/acoustic-board-2.png",
                    cardDescription: "High-quality materials provide excellent sound absorption for commercial environments.",
                    longDescription: "Acoustic panels and foam are specifically designed to reduce sound transmission in buildings. Made from high-quality materials, they provide excellent sound absorption.",
                    range: ["Thickness: 25mm to 100mm", "Custom sizes available"],
                    facings: ["Unfaced", "Aluminium foil", "White tissue"],
                    basicInformation: ["Density: 10-24 kg/m³", "Thermal Conductivity: 0.038-0.042 W/mK", "Fire Rating: Class A1"],
                    properties: [
                        { name: "Sound Absorption", icon: "/images/icons/superior_acoustic_insulation.png", description: "Absorbs airborne sound" },
                        { name: "Lightweight", icon: "/images/icons/lightweight.png", description: "Easy to handle" },
                        { name: "Eco-Friendly", icon: "/images/icons/eco-friendly.png", description: "Recycled content" }
                    ],
                    brochure: "/pdf/products/saint-gobain/acoustic-panels-brochure.pdf",
                    brochureFileName: "Acoustic Panels",
                    brochureFileSize: "84 KB"
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
                    range: ["Thickness: 50mm to 150mm", "Density: 80-120 kg/m³"],
                    facings: ["Wire mesh reinforced", "Aluminium foil facing"],
                    basicInformation: ["Density: 80-120 kg/m³", "Operating Temperature: Up to 750°C", "Fire Rating: Euroclass A1"],
                    properties: [
                        { name: "High Temperature", icon: "/images/icons/high-temp.png", description: "Withstands up to 750°C" },
                        { name: "Fire Protection", icon: "/images/icons/fire-resistant.png", description: "Non-combustible" },
                        { name: "Thermal Efficiency", icon: "/images/icons/thermal_insulation.png", description: "Excellent insulation" }
                    ],
                    brochure: "/pdf/products/saint-gobain/rockwool-lrb-mattress-brochure.pdf",
                    brochureFileName: "Rockwool LRB Mattress",
                    brochureFileSize: "95 KB"
                },
                {
                    id: 9,
                    name: "RB Slab | Resin Bonded Stone Wool Slab",
                    slug: "rb-slab-stone-wool",
                    type: "Stone Wool",
                    image: "/images/products/saint-gobain/rb-slab-stone-wool.png",
                    cardDescription: "Rigid, high-density insulation boards designed for walls, roofs, and partitions in industrial and commercial buildings.",
                    longDescription: "Resin Bonded (RB) Slabs are semi-rigid to rigid stone wool insulation boards designed for superior fire protection, thermal insulation, and acoustic performance. They are ideal for high-temperature applications and building partitions.",
                    range: ["Thickness: 25mm to 200mm", "Density: 48kg/m³ to 160kg/m³"],
                    facings: ["Unfaced", "Black glass tissue", "Aluminium foil"],
                    basicInformation: ["Operating Temperature: Up to 750°C", "Fire Rating: Class A1", "Sound Absorption: High"],
                    properties: [
                        { name: "Fire Resistance", icon: "/images/icons/fire-resistant.png", description: "Non-combustible up to 1000°C" },
                        { name: "Thermal Insulation", icon: "/images/icons/thermal_insulation.png", description: "Excellent performance" },
                        { name: "Acoustic Performance", icon: "/images/icons/superior_acoustic_insulation.png", description: "Superior absorption" }
                    ],
                    brochure: "/pdf/products/saint-gobain/rb-slab-brochure.pdf",
                    brochureFileName: "RB Slab",
                    brochureFileSize: "100 KB"
                },
                {
                    id: 10,
                    name: "Stone Wool Pipe Section",
                    slug: "stone-wool-pipe-section",
                    type: "Stone Wool",
                    image: "/images/products/saint-gobain/stone-wool-pipe-section.png",
                    cardDescription: "Pre-formed insulation designed for high-temperature pipes in industrial and process applications.",
                    longDescription: "Stone wool pipe sections are pre-formed insulation designed for high-temperature pipes. They provide superior fire resistance, thermal efficiency, and are easy to install on hot piping systems.",
                    range: ["Pipe diameter: 21mm to 600mm", "Thickness: 25mm to 100mm"],
                    facings: ["Unfaced", "Aluminium foil jacket", "Cladding available"],
                    basicInformation: ["Density: 100-150 kg/m³", "Operating Temperature: Up to 750°C", "Fire Rating: Class A1"],
                    properties: [
                        { name: "High Temp", icon: "/images/icons/high-temp.png", description: "Up to 750°C" },
                        { name: "Energy Efficiency", icon: "/images/icons/energy_savings.png", description: "Reduces heat loss" },
                        { name: "Easy Installation", icon: "/images/icons/labour_efficiency.png", description: "Pre-cut sections" }
                    ],
                    brochure: "/pdf/products/saint-gobain/stone-wool-pipe-brochure.pdf",
                    brochureFileName: "Pipe Section",
                    brochureFileSize: "98 KB"
                },
                {
                    id: 11,
                    name: "Tuffinsul Slab | Stone Wool Rigid Slab",
                    slug: "tuffinsul-slab",
                    type: "Stone Wool",
                    image: "/images/products/saint-gobain/tuffinsul-slab.png",
                    cardDescription: "Exceptional fire resistance and thermal performance for façades, fire barriers, and industrial applications.",
                    longDescription: "Tuffinsul Slabs are high-density, rigid stone wool boards offering exceptional fire resistance. They are specifically designed for external façades, fire barriers, and high-temperature industrial environments.",
                    range: ["Thickness: 30mm to 200mm", "Density: 80kg/m³ to 140kg/m³"],
                    facings: ["Unfaced", "Glass tissue", "Aluminium foil"],
                    basicInformation: ["Density: 80-140 kg/m³", "Operating Temperature: Up to 750°C", "Fire Rating: Euroclass A1"],
                    properties: [
                        { name: "Fire Protection", icon: "/images/icons/fire-resistant.png", description: "Non-combustible" },
                        { name: "High Stability", icon: "/images/icons/rigid.png", description: "Dimensionally stable" },
                        { name: "Thermal Insulation", icon: "/images/icons/thermal_insulation.png", description: "Low conductivity" }
                    ],
                    brochure: "/pdf/products/saint-gobain/tuffinsul-slab-brochure.pdf",
                    brochureFileName: "Tuffinsul Slab",
                    brochureFileSize: "97 KB"
                },
                {
                    id: 12,
                    name: "Tuffinsul Lamella Bat",
                    slug: "tuffinsul-lamella-bat",
                    type: "Stone Wool",
                    image: "/images/products/saint-gobain/tuffinsul-lamella-bat.png",
                    cardDescription: "Orientation of fibers provides high compressive strength, making it ideal for sandwich panels.",
                    longDescription: "Tuffinsul Lamella Bat is a specialized stone wool product where fibers are oriented perpendicular to the surface. This provides extremely high compressive strength, making it the perfect core material for sandwich panels and structural insulation.",
                    range: ["Thickness: 40mm to 100mm", "Custom widths"],
                    facings: ["Unfaced", "Primed for bonding"],
                    basicInformation: ["High Compressive Strength", "Melting Point: >1000°C", "Fire Rating: Euroclass A1"],
                    properties: [
                        { name: "Structural", icon: "/images/icons/strength.png", description: "High compressive strength" },
                        { name: "Fire Safety", icon: "/images/icons/fire-resistant.png", description: "Exceptional resistance" },
                        { name: "Thermal", icon: "/images/icons/thermal_insulation.png", description: "Constant efficiency" }
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
                    range: ["Thickness: 25mm to 100mm", "Roll width: 1200mm"],
                    facings: ["Unfaced", "Aluminium foil FSK", "Kraft paper"],
                    basicInformation: ["Density: 40-70 kg/m³", "Operating Temp: Up to 750°C", "Water Repellent"],
                    properties: [
                        { name: "Thermal", icon: "/images/icons/thermal_insulation.png", description: "Effective transfer reduction" },
                        { name: "Acoustic", icon: "/images/icons/superior_acoustic_insulation.png", description: "Sound absorption" },
                        { name: "Fire Rating", icon: "/images/icons/fire-resistant.png", description: "Class A1" }
                    ],
                    brochure: "/pdf/products/saint-gobain/building-roll-brochure.pdf",
                    brochureFileName: "Building Roll",
                    brochureFileSize: "89 KB"
                },
                {
                    id: 14,
                    name: "Stone Wool Loose Wool",
                    slug: "stone-wool-loose-wool",
                    type: "Stone Wool",
                    image: "/images/products/saint-gobain/stone-wool-loose-wool.png",
                    cardDescription: "Bulk stone wool fibers for filling irregular spaces and cavities where pre-formed insulation cannot be used.",
                    longDescription: "Stone wool loose wool consists of bulk fibers designed for filling irregular spaces, cavities, and complex geometries. It is widely used for thermal insulation in high-temperature industrial equipment and fire-stopping applications.",
                    range: ["Supplied in 20kg/40kg bags", "Bulk fiber state"],
                    facings: ["N/A"],
                    basicInformation: ["Application: Hand-packed or blown", "Fire Rating: Non-combustible", "Temp Limit: 750°C"],
                    properties: [
                        { name: "Versatile", icon: "/images/icons/flexible.png", description: "Fills any shape" },
                        { name: "High Temp", icon: "/images/icons/high-temp.png", description: "Industrial performance" },
                        { name: "Fire Safety", icon: "/images/icons/fire-resistant.png", description: "Fills gaps perfectly" }
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