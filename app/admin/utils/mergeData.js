const STORAGE_KEY = 'pe_admin_overrides';

export function getOverrides() {
    if (typeof window === 'undefined') return {};
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch {
        return {};
    }
}

export function saveOverrides(overrides) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
}

// Merge for flat product arrays (birlanu, chemicals, ejot, hindalco, keeSafety, tegola)
export function mergeProducts(staticProducts, overrideProducts) {
    if (!overrideProducts) return staticProducts;

    const merged = [...staticProducts];

    overrideProducts.forEach((op) => {
        if (op._deleted) {
            const idx = merged.findIndex((p) => p.id === op.id);
            if (idx !== -1) merged.splice(idx, 1);
            return;
        }
        const idx = merged.findIndex((p) => p.id === op.id);
        if (idx !== -1) {
            merged[idx] = { ...merged[idx], ...op };
        } else {
            merged.push(op);
        }
    });

    return merged;
}

// Merge for nested structures (tata-bluescope categories, saint-gobain types)
export function mergeNested(staticItems, overrideItems, nestedKey = 'products') {
    if (!overrideItems) return staticItems;

    const merged = staticItems.map((item) => {
        const override = overrideItems.find((o) => o.id === item.id || o.slug === item.slug);
        if (!override) return item;
        return {
            ...item,
            ...override,
            [nestedKey]: mergeProducts(item[nestedKey] || [], override[nestedKey]),
        };
    });

    // Add new categories/types that only exist in overrides
    overrideItems.forEach((o) => {
        const exists = merged.find((m) => m.id === o.id || m.slug === o.slug);
        if (!exists && !o._deleted) {
            merged.push(o);
        }
    });

    return merged;
}

// Merge company info (shallow)
export function mergeCompanyInfo(staticInfo, overrideInfo) {
    if (!overrideInfo) return staticInfo;
    return { ...staticInfo, ...overrideInfo };
}

// Merge the productsData registry (company list on /products page)
export function mergeProductsRegistry(staticRegistry, overrideRegistry) {
    if (!overrideRegistry) return staticRegistry;
    return mergeProducts(staticRegistry, overrideRegistry);
}
