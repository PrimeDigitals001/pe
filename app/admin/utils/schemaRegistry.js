// Schema definitions for all company product forms
// Field types: text, textarea, select, array-string, array-object, image-url, boolean, slug, color-array

export const companySchemas = {

    // ══════════════════════════════════════════════
    // CHEMICALS (Patel Enterprise)
    // ══════════════════════════════════════════════
    chemicals: {
        companyKey: 'chemicals',
        label: 'Chemicals',
        dataGetter: 'getChemicalsData',
        fields: [
            { key: 'id', label: 'ID', type: 'text', required: true, autoGenerate: true },
            { key: 'name', label: 'Product Name', type: 'text', required: true },
            { key: 'slug', label: 'URL Slug', type: 'slug', autoFrom: 'name' },
            { key: 'category', label: 'Category', type: 'select', optionsFrom: 'categories' },
            { key: 'formula', label: 'Chemical Formula', type: 'text' },
            { key: 'grade', label: 'Grade', type: 'text' },
            { key: 'physicalForm', label: 'Physical Form', type: 'textarea' },
            { key: 'packing', label: 'Packing Options', type: 'array-string' },
            { key: 'suppliers', label: 'Suppliers', type: 'array-string' },
            { key: 'cardDescription', label: 'Card Description', type: 'textarea', required: true },
            { key: 'cardImage', label: 'Card Image URL', type: 'image-url' },
            { key: 'detailImage', label: 'Detail Image URL', type: 'image-url' },
            {
                key: 'applications', label: 'Applications', type: 'array-object',
                objectShape: [
                    { key: 'industry', label: 'Industry', type: 'text' },
                    { key: 'detail', label: 'Detail', type: 'textarea' },
                ]
            },
            { key: 'brochures', label: 'Brochures', type: 'array-object', objectShape: [
                { key: 'text', label: 'Name', type: 'text' },
                { key: 'size', label: 'File Size', type: 'text' },
                { key: 'link', label: 'Link URL', type: 'text' },
            ]},
            { key: 'customFields', label: 'Custom Info Fields', type: 'array-object', objectShape: [
                { key: 'title', label: 'Title', type: 'text' },
                { key: 'value', label: 'Value', type: 'text' },
            ]},
            { key: 'inStock', label: 'In Stock', type: 'boolean' },
            { key: 'isFeatured', label: 'Featured', type: 'boolean' },
        ],
    },

    // ══════════════════════════════════════════════
    // BIRLANU (Fortune Fiber Cement Roofs)
    // ══════════════════════════════════════════════
    birlanu: {
        companyKey: 'birlanu',
        label: 'Birlanu',
        dataGetter: 'getBirlanuData',
        fields: [
            { key: 'id', label: 'ID', type: 'text', required: true, autoGenerate: true },
            { key: 'name', label: 'Product Name', type: 'text', required: true },
            { key: 'slug', label: 'URL Slug', type: 'slug', autoFrom: 'name' },
            { key: 'category', label: 'Category', type: 'select', optionsFrom: 'categories' },
            { key: 'productType', label: 'Product Type', type: 'select', options: ['Building Materials', 'Tile Adhesives'] },
            { key: 'pageCategory', label: 'Page Category', type: 'text' },
            { key: 'image', label: 'Main Image URL', type: 'image-url' },
            { key: 'galleryImages', label: 'Gallery Images', type: 'array-string' },
            { key: 'cardDescription', label: 'Card Description', type: 'textarea', required: true },
            { key: 'longDescription', label: 'Long Description', type: 'textarea' },
            { key: 'bottomSectionTitle', label: 'Bottom Section Title', type: 'text' },
            { key: 'sizes', label: 'Sizes / SKUs', type: 'array-string' },
            { key: 'standards', label: 'Standards & Specifications', type: 'array-string' },
            { key: 'applications', label: 'Applications', type: 'array-string' },
            {
                key: 'features', label: 'Features', type: 'array-object',
                objectShape: [
                    { key: 'icon', label: 'Icon URL', type: 'text' },
                    { key: 'title', label: 'Title', type: 'text' },
                    { key: 'description', label: 'Description', type: 'text' },
                ]
            },
            {
                key: 'benefits', label: 'Benefits', type: 'array-object',
                objectShape: [
                    { key: 'icon', label: 'Icon URL', type: 'text' },
                    { key: 'title', label: 'Title', type: 'text' },
                ]
            },
            { key: 'brochures', label: 'Brochures', type: 'array-object', objectShape: [
                { key: 'text', label: 'Name', type: 'text' },
                { key: 'size', label: 'File Size', type: 'text' },
                { key: 'link', label: 'Link URL', type: 'text' },
            ]},
            { key: 'customFields', label: 'Custom Info Fields', type: 'array-object', objectShape: [
                { key: 'title', label: 'Title', type: 'text' },
                { key: 'value', label: 'Value', type: 'text' },
            ]},
            { key: 'inStock', label: 'In Stock', type: 'boolean' },
            { key: 'isNew', label: 'New', type: 'boolean' },
            { key: 'isFeatured', label: 'Featured', type: 'boolean' },
        ],
    },

    // ══════════════════════════════════════════════
    // EJOT SCREW
    // ══════════════════════════════════════════════
    ejotScrew: {
        companyKey: 'ejotScrew',
        label: 'Ejot Screw',
        dataGetter: 'getEjotData',
        fields: [
            { key: 'id', label: 'ID', type: 'text', required: true, autoGenerate: true },
            { key: 'name', label: 'Product Name', type: 'text', required: true },
            { key: 'slug', label: 'URL Slug', type: 'slug', autoFrom: 'name' },
            { key: 'category', label: 'Category', type: 'select', optionsFrom: 'categories' },
            { key: 'productType', label: 'Product Type', type: 'select', optionsFrom: 'productTypes' },
            { key: 'image', label: 'Image URL', type: 'image-url' },
            { key: 'cardDescription', label: 'Card Description', type: 'textarea', required: true },
            { key: 'useCase', label: 'Use Case', type: 'textarea' },
            { key: 'properties', label: 'Properties', type: 'array-string' },
            { key: 'technicalSpecifications', label: 'Technical Specifications', type: 'array-string' },
            { key: 'brochures', label: 'Brochures', type: 'array-object', objectShape: [
                { key: 'text', label: 'Name', type: 'text' },
                { key: 'size', label: 'File Size', type: 'text' },
                { key: 'link', label: 'Link URL', type: 'text' },
            ]},
            { key: 'customFields', label: 'Custom Info Fields', type: 'array-object', objectShape: [
                { key: 'title', label: 'Title', type: 'text' },
                { key: 'value', label: 'Value', type: 'text' },
            ]},
            { key: 'inStock', label: 'In Stock', type: 'boolean' },
            { key: 'isNew', label: 'New', type: 'boolean' },
            { key: 'isFeatured', label: 'Featured', type: 'boolean' },
        ],
    },

    // ══════════════════════════════════════════════
    // HINDALCO
    // ══════════════════════════════════════════════
    hindalco: {
        companyKey: 'hindalco',
        label: 'Hindalco',
        dataGetter: 'getHindalcoData',
        fields: [
            { key: 'id', label: 'ID', type: 'text', required: true, autoGenerate: true },
            { key: 'name', label: 'Product Name', type: 'text', required: true },
            { key: 'slug', label: 'URL Slug', type: 'slug', autoFrom: 'name' },
            { key: 'category', label: 'Category', type: 'select', optionsFrom: 'categories' },
            { key: 'cardName', label: 'Card Name', type: 'text' },
            { key: 'cardProperty', label: 'Card Property', type: 'text' },
            { key: 'cardDescription', label: 'Card Description', type: 'textarea', required: true },
            { key: 'cardImage', label: 'Card Image URL', type: 'image-url' },
            { key: 'internalImage', label: 'Internal Image URL', type: 'image-url' },
            { key: 'mainProperty', label: 'Main Property', type: 'text' },
            { key: 'mainDescription', label: 'Main Description', type: 'textarea' },
            { key: 'alloys', label: 'Alloys', type: 'array-string' },
            { key: 'finish', label: 'Finish Options', type: 'array-string' },
            { key: 'compliance', label: 'Compliance Standards', type: 'array-string' },
            {
                key: 'colors', label: 'Colors', type: 'array-object',
                objectShape: [
                    { key: 'name', label: 'Color Name', type: 'text' },
                    { key: 'code', label: 'Hex Code', type: 'text' },
                ]
            },
            { key: 'brochures', label: 'Brochures', type: 'array-object', objectShape: [
                { key: 'text', label: 'Name', type: 'text' },
                { key: 'size', label: 'File Size', type: 'text' },
                { key: 'link', label: 'Link URL', type: 'text' },
                { key: 'type', label: 'Type', type: 'text' },
            ]},
            { key: 'customFields', label: 'Custom Info Fields', type: 'array-object', objectShape: [
                { key: 'title', label: 'Title', type: 'text' },
                { key: 'value', label: 'Value', type: 'text' },
            ]},
            { key: 'inStock', label: 'In Stock', type: 'boolean' },
            { key: 'isNew', label: 'New', type: 'boolean' },
            { key: 'isFeatured', label: 'Featured', type: 'boolean' },
        ],
    },

    // ══════════════════════════════════════════════
    // KEE SAFETY
    // ══════════════════════════════════════════════
    keeSafety: {
        companyKey: 'keeSafety',
        label: 'Kee Safety',
        dataGetter: 'getKeeSafetyData',
        fields: [
            { key: 'id', label: 'ID', type: 'text', required: true, autoGenerate: true },
            { key: 'name', label: 'Product Name', type: 'text', required: true },
            { key: 'slug', label: 'URL Slug', type: 'slug', autoFrom: 'name' },
            { key: 'category', label: 'Category', type: 'select', optionsFrom: 'categories' },
            { key: 'cardImage', label: 'Card Image URL', type: 'image-url' },
            { key: 'internalImage', label: 'Internal Image URL', type: 'image-url' },
            { key: 'cardName', label: 'Card Name', type: 'text' },
            { key: 'cardProperty', label: 'Card Property', type: 'text' },
            { key: 'cardDescription', label: 'Card Description', type: 'textarea', required: true },
            { key: 'mainProperty', label: 'Main Property', type: 'text' },
            { key: 'mainDescription', label: 'Main Description', type: 'textarea' },
            { key: 'sizesAndSKUs', label: 'Sizes & SKUs', type: 'array-string' },
            { key: 'standardsAndSpecifications', label: 'Standards & Specifications', type: 'array-string' },
            { key: 'applicationAndUsage', label: 'Application & Usage', type: 'array-string' },
            { key: 'brochures', label: 'Brochures', type: 'array-object', objectShape: [
                { key: 'text', label: 'Name', type: 'text' },
                { key: 'size', label: 'File Size', type: 'text' },
                { key: 'link', label: 'Link URL', type: 'text' },
            ]},
            { key: 'customFields', label: 'Custom Info Fields', type: 'array-object', objectShape: [
                { key: 'title', label: 'Title', type: 'text' },
                { key: 'value', label: 'Value', type: 'text' },
            ]},
            { key: 'inStock', label: 'In Stock', type: 'boolean' },
            { key: 'isNew', label: 'New', type: 'boolean' },
            { key: 'isFeatured', label: 'Featured', type: 'boolean' },
        ],
    },

    // ══════════════════════════════════════════════
    // SAINT-GOBAIN (nested: types → products)
    // ══════════════════════════════════════════════
    saintGobain: {
        companyKey: 'saintGobain',
        label: 'Saint-Gobain',
        dataGetter: 'getSaintGobainData',
        nestedKey: 'types',
        fields: [
            { key: 'id', label: 'ID', type: 'text', required: true, autoGenerate: true },
            { key: 'name', label: 'Product Name', type: 'text', required: true },
            { key: 'slug', label: 'URL Slug', type: 'slug', autoFrom: 'name' },
            { key: 'type', label: 'Type', type: 'text' },
            { key: 'image', label: 'Image URL', type: 'image-url' },
            { key: 'cardDescription', label: 'Card Description', type: 'textarea', required: true },
            { key: 'longDescription', label: 'Long Description', type: 'textarea' },
            { key: 'range', label: 'Range / Dimensions', type: 'array-string' },
            { key: 'facings', label: 'Facings', type: 'array-string' },
            { key: 'basicInformation', label: 'Basic Information', type: 'array-string' },
            {
                key: 'properties', label: 'Properties', type: 'array-object',
                objectShape: [
                    { key: 'name', label: 'Name', type: 'text' },
                    { key: 'icon', label: 'Icon URL', type: 'text' },
                    { key: 'description', label: 'Description', type: 'textarea' },
                ]
            },
            { key: 'brochure', label: 'Brochure URL', type: 'text' },
            { key: 'brochureFileName', label: 'Brochure File Name', type: 'text' },
            { key: 'brochureFileSize', label: 'Brochure File Size', type: 'text' },
            { key: 'customFields', label: 'Custom Info Fields', type: 'array-object', objectShape: [
                { key: 'title', label: 'Title', type: 'text' },
                { key: 'value', label: 'Value', type: 'text' },
            ]},
        ],
    },

    // ══════════════════════════════════════════════
    // TATA BLUESCOPE (nested: categories → products)
    // ══════════════════════════════════════════════
    tataBlueScope: {
        companyKey: 'tataBlueScope',
        label: 'Tata Bluescope',
        dataGetter: 'getTataData',
        nestedKey: 'categories',
        fields: [
            { key: 'id', label: 'ID', type: 'text', required: true, autoGenerate: true },
            { key: 'name', label: 'Product Name', type: 'text', required: true },
            { key: 'slug', label: 'URL Slug', type: 'slug', autoFrom: 'name' },
            { key: 'category', label: 'Category', type: 'text' },
            { key: 'image', label: 'Image URL', type: 'image-url' },
            { key: 'onelinerDescription', label: 'One-liner Description', type: 'text' },
            { key: 'cardDescription', label: 'Card Description', type: 'textarea', required: true },
            { key: 'backgroundColor', label: 'Background Color (hex)', type: 'text' },
            { key: 'longDescription', label: 'Long Description', type: 'textarea' },
            { key: 'specifications', label: 'Specifications', type: 'array-string' },
            { key: 'applications', label: 'Applications', type: 'array-string' },
            { key: 'brochure', label: 'Brochure URL', type: 'text' },
            { key: 'brochureFileName', label: 'Brochure File Name', type: 'text' },
            { key: 'brochureFileSize', label: 'Brochure File Size', type: 'text' },
            { key: 'note', label: 'Note', type: 'textarea' },
            { key: 'customFields', label: 'Custom Info Fields', type: 'array-object', objectShape: [
                { key: 'title', label: 'Title', type: 'text' },
                { key: 'value', label: 'Value', type: 'text' },
            ]},
        ],
    },

    // ══════════════════════════════════════════════
    // TEGOLA CANADESE
    // ══════════════════════════════════════════════
    tegolaCanadese: {
        companyKey: 'tegolaCanadese',
        label: 'Tegola Canadese',
        dataGetter: 'getTegolaData',
        fields: [
            { key: 'id', label: 'ID', type: 'text', required: true, autoGenerate: true },
            { key: 'name', label: 'Product Name', type: 'text', required: true },
            { key: 'slug', label: 'URL Slug', type: 'slug', autoFrom: 'name' },
            { key: 'category', label: 'Category', type: 'select', optionsFrom: 'categories' },
            { key: 'pageCategory', label: 'Page Category', type: 'text' },
            { key: 'image', label: 'Main Image URL', type: 'image-url' },
            { key: 'galleryImages', label: 'Gallery Images', type: 'array-string' },
            { key: 'cardDescription', label: 'Card Description', type: 'textarea', required: true },
            { key: 'longDescription', label: 'Long Description', type: 'textarea' },
            { key: 'bottomSectionTitle', label: 'Bottom Section Title', type: 'text' },
            {
                key: 'kpiSpecs', label: 'KPI Specs', type: 'array-object',
                objectShape: [
                    { key: 'label', label: 'Label', type: 'text' },
                    { key: 'value', label: 'Value', type: 'text' },
                ]
            },
            {
                key: 'colorRange', label: 'Color Range', type: 'array-object',
                objectShape: [
                    { key: 'name', label: 'Color Name', type: 'text' },
                    { key: 'image', label: 'Image URL', type: 'text' },
                ]
            },
            {
                key: 'features', label: 'Features', type: 'array-object',
                objectShape: [
                    { key: 'icon', label: 'Icon URL', type: 'text' },
                    { key: 'text', label: 'Text', type: 'text' },
                ]
            },
            { key: 'brochures', label: 'Brochures', type: 'array-object', objectShape: [
                { key: 'text', label: 'Name', type: 'text' },
                { key: 'size', label: 'File Size', type: 'text' },
                { key: 'link', label: 'Link URL', type: 'text' },
            ]},
            { key: 'customFields', label: 'Custom Info Fields', type: 'array-object', objectShape: [
                { key: 'title', label: 'Title', type: 'text' },
                { key: 'value', label: 'Value', type: 'text' },
            ]},
            { key: 'inStock', label: 'In Stock', type: 'boolean' },
            { key: 'isNew', label: 'New', type: 'boolean' },
            { key: 'isFeatured', label: 'Featured', type: 'boolean' },
        ],
    },
};

// ══════════════════════════════════════════════
// GENERIC SCHEMA (for dynamically added companies)
// ══════════════════════════════════════════════

export const genericCompanySchema = {
    companyKey: null,
    label: null,
    dataGetter: null,
    fields: [
        { key: 'id', label: 'ID', type: 'text', required: true, autoGenerate: true },
        { key: 'name', label: 'Product Name', type: 'text', required: true },
        { key: 'slug', label: 'URL Slug', type: 'slug', autoFrom: 'name' },
        { key: 'category', label: 'Category', type: 'select', optionsFrom: 'categories' },
        { key: 'image', label: 'Main Image URL', type: 'image-url' },
        { key: 'cardDescription', label: 'Card Description', type: 'textarea', required: true },
        { key: 'longDescription', label: 'Long Description', type: 'textarea' },
        { key: 'sizes', label: 'Sizes / SKUs', type: 'array-string' },
        { key: 'specifications', label: 'Specifications', type: 'array-string' },
        { key: 'applications', label: 'Applications', type: 'array-string' },
        { key: 'brochures', label: 'Brochures', type: 'array-object', objectShape: [
            { key: 'text', label: 'Name', type: 'text' },
            { key: 'size', label: 'File Size', type: 'text' },
            { key: 'link', label: 'Link URL', type: 'text' },
        ]},
        { key: 'customFields', label: 'Custom Info Fields', type: 'array-object', objectShape: [
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'value', label: 'Value', type: 'text' },
        ]},
        { key: 'inStock', label: 'In Stock', type: 'boolean' },
        { key: 'isFeatured', label: 'Featured', type: 'boolean' },
    ],
};

// Hardcoded company slugs (to prevent collisions with dynamic routes)
export const HARDCODED_SLUGS = [
    'birlanu', 'chemicals', 'ejot-screw', 'hindalco',
    'kee-safety', 'saint-gobain', 'tata-bluescope', 'tegola-canadese',
];

// Convert slug to camelCase companyKey
export function slugToCompanyKey(slug) {
    return slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

// Create a dynamic schema for a new company
function createDynamicSchema(slug) {
    const companyKey = slugToCompanyKey(slug);
    return {
        ...genericCompanySchema,
        companyKey,
        label: slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    };
}

// Map URL slugs to schema keys
export const slugToSchemaKey = {
    'chemicals': 'chemicals',
    'birlanu': 'birlanu',
    'ejot-screw': 'ejotScrew',
    'hindalco': 'hindalco',
    'kee-safety': 'keeSafety',
    'saint-gobain': 'saintGobain',
    'tata-bluescope': 'tataBlueScope',
    'tegola-canadese': 'tegolaCanadese',
};

export function getSchemaBySlug(slug) {
    const key = slugToSchemaKey[slug];
    if (key) return companySchemas[key];
    // Fallback to generic schema for dynamically added companies
    return createDynamicSchema(slug);
}
