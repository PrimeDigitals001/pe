'use client';

import { birlanuData as staticBirlanu } from './companyProducts/birlanu';
import { chemicalsData as staticChemicals } from './companyProducts/chemicals';
import { ejotScrewData as staticEjot } from './companyProducts/ejotScrew';
import { hindalcoData as staticHindalco } from './companyProducts/hindalco';
import { keeSafetyData as staticKeeSafety } from './companyProducts/keeSafety';
import { saintGobainData as staticSaintGobain } from './companyProducts/saintGobain';
import { tataBluescopeData as staticTata } from './companyProducts/tataBlueScope';
import { tegolaData as staticTegola } from './companyProducts/tegolaCanadese';
import { productsData as staticProductsData } from './productsData';
import { getOverrides, mergeProducts, mergeNested, mergeCompanyInfo, mergeProductsRegistry } from '../../admin/utils/mergeData';

// ── Helper: get merged data for a company ──

function getMergedData(staticData, companyKey, nestedKey) {
    const overrides = getOverrides();
    const co = overrides[companyKey] || {};

    const merged = { ...staticData };

    if (merged.companyInfo && co.companyInfo) {
        merged.companyInfo = mergeCompanyInfo(merged.companyInfo, co.companyInfo);
    }

    if (nestedKey && merged[nestedKey]) {
        merged[nestedKey] = mergeNested(merged[nestedKey], co[nestedKey], 'products');
    } else if (merged.products) {
        merged.products = mergeProducts(merged.products, co.products);
    }

    if (co.categories && !nestedKey) {
        merged.categories = co.categories;
    }

    return merged;
}

// ══════════════════════════════════════════════
// PRODUCTS REGISTRY (main /products page)
// ══════════════════════════════════════════════

export function getProductsData() {
    const overrides = getOverrides();
    return mergeProductsRegistry(staticProductsData, overrides.productsData);
}

export function getProductBySlug(slug) {
    return getProductsData().find((p) => p.slug === slug);
}

export function getAllProducts() {
    return getProductsData();
}

// ══════════════════════════════════════════════
// BIRLANU
// ══════════════════════════════════════════════

export function getBirlanuData() {
    return getMergedData(staticBirlanu, 'birlanu');
}

export function getBirlanuProductBySlug(slug) {
    return getBirlanuData().products.find((p) => p.slug === slug);
}

export function getBirlanuProductsByCategory(category) {
    const data = getBirlanuData();
    if (category === 'All Products') return data.products;
    return data.products.filter((p) => p.category === category);
}

export function getBirlanuProductsByType(productType) {
    const data = getBirlanuData();
    if (productType === 'All Products') return data.products;
    return data.products.filter((p) => p.productType === productType);
}

export function getBirlanuFeaturedProducts() {
    return getBirlanuData().products.filter((p) => p.isFeatured);
}

export function getBirlanuRelatedProducts(productId) {
    const data = getBirlanuData();
    const product = data.products.find((p) => p.id === productId);
    if (!product || !product.relatedProducts) return [];
    return product.relatedProducts
        .map((id) => data.products.find((p) => p.id === id))
        .filter(Boolean);
}

export function getBirlanuTileAdhesives() {
    return getBirlanuData().products.filter((p) => p.productType === 'Tile Adhesives');
}

export function getBirlanuBuildingMaterials() {
    return getBirlanuData().products.filter((p) => p.productType === 'Building Materials');
}

// Re-export data as getter for backward compat
export const birlanuData = new Proxy({}, {
    get(_, prop) { return getBirlanuData()[prop]; }
});

// ══════════════════════════════════════════════
// CHEMICALS
// ══════════════════════════════════════════════

export function getChemicalsData() {
    return getMergedData(staticChemicals, 'chemicals');
}

export function getChemicalBySlug(slug) {
    return getChemicalsData().products.find((p) => p.slug === slug);
}

export function getChemicalsByCategory(category) {
    const data = getChemicalsData();
    if (category === 'All Products') return data.products;
    return data.products.filter((p) => p.category === category);
}

export function getFeaturedChemicals() {
    return getChemicalsData().products.filter((p) => p.isFeatured);
}

export function getAllChemicals() {
    return getChemicalsData().products;
}

export const chemicalsData = new Proxy({}, {
    get(_, prop) { return getChemicalsData()[prop]; }
});

// ══════════════════════════════════════════════
// EJOT SCREW
// ══════════════════════════════════════════════

export function getEjotData() {
    return getMergedData(staticEjot, 'ejotScrew');
}

export function getEjotProductBySlug(slug) {
    return getEjotData().products.find((p) => p.slug === slug);
}

export function getEjotProductsByCategory(category) {
    const data = getEjotData();
    if (category === 'All Products') return data.products;
    return data.products.filter((p) => p.category === category);
}

export function getEjotProductsByType(productType) {
    const data = getEjotData();
    if (productType === 'All Products') return data.products;
    return data.products.filter((p) => p.productType === productType);
}

export function getEjotFeaturedProducts() {
    return getEjotData().products.filter((p) => p.isFeatured);
}

export function getEjotRelatedProducts(productId) {
    const data = getEjotData();
    const product = data.products.find((p) => p.id === productId);
    if (!product || !product.relatedProducts) return [];
    return product.relatedProducts
        .map((id) => data.products.find((p) => p.id === id))
        .filter(Boolean);
}

export const ejotScrewData = new Proxy({}, {
    get(_, prop) { return getEjotData()[prop]; }
});

// ══════════════════════════════════════════════
// HINDALCO
// ══════════════════════════════════════════════

export function getHindalcoData() {
    return getMergedData(staticHindalco, 'hindalco');
}

export function getHindalcoProductBySlug(slug) {
    return getHindalcoData().products.find((p) => p.slug === slug);
}

export function getHindalcoProductsByCategory(category) {
    const data = getHindalcoData();
    if (category === 'All Products') return data.products;
    return data.products.filter((p) => p.category === category);
}

export function getHindalcoFeaturedProducts() {
    return getHindalcoData().products.filter((p) => p.isFeatured);
}

export function getHindalcoProduct() {
    return getHindalcoData().products[0];
}

export function getHindalcoColors() {
    const product = getHindalcoProduct();
    return product?.colors || [];
}

export function getHindalcoAlloys() {
    const product = getHindalcoProduct();
    return product?.alloys || [];
}

export const hindalcoData = new Proxy({}, {
    get(_, prop) { return getHindalcoData()[prop]; }
});

// ══════════════════════════════════════════════
// KEE SAFETY
// ══════════════════════════════════════════════

export function getKeeSafetyData() {
    return getMergedData(staticKeeSafety, 'keeSafety');
}

export function getKeeSafetyProductBySlug(slug) {
    return getKeeSafetyData().products.find((p) => p.slug === slug);
}

export function getKeeSafetyProductsByCategory(category) {
    const data = getKeeSafetyData();
    if (category === 'All Products') return data.products;
    return data.products.filter((p) => p.category === category);
}

export function getKeeSafetyFeaturedProducts() {
    return getKeeSafetyData().products.filter((p) => p.isFeatured);
}

export function getKeeSafetyRelatedProducts(productId) {
    const data = getKeeSafetyData();
    const product = data.products.find((p) => p.id === productId);
    if (!product || !product.relatedProducts) return [];
    return product.relatedProducts
        .map((id) => data.products.find((p) => p.id === id))
        .filter(Boolean);
}

export function getKeeSafetyNewProducts() {
    return getKeeSafetyData().products.filter((p) => p.isNew);
}

export const keeSafetyData = new Proxy({}, {
    get(_, prop) { return getKeeSafetyData()[prop]; }
});

// ══════════════════════════════════════════════
// SAINT-GOBAIN (nested: types → products)
// ══════════════════════════════════════════════

export function getSaintGobainData() {
    return getMergedData(staticSaintGobain, 'saintGobain', 'types');
}

export function getAllSaintGobainTypes() {
    return getSaintGobainData().types;
}

export function getSaintGobainTypeBySlug(slug) {
    return getSaintGobainData().types.find((t) => t.slug === slug);
}

export function getAllSaintGobainProducts() {
    return getSaintGobainData().types.flatMap((t) => t.products);
}

export function getSaintGobainProductsByType(typeSlug) {
    const type = getSaintGobainTypeBySlug(typeSlug);
    return type ? type.products : [];
}

export function getSaintGobainProductBySlug(productSlug) {
    return getAllSaintGobainProducts().find((p) => p.slug === productSlug);
}

export function getSaintGobainRelatedProducts(productSlug, limit = 3) {
    const all = getAllSaintGobainProducts();
    return all.filter((p) => p.slug !== productSlug).slice(0, limit);
}

export function searchSaintGobainProducts(query) {
    const q = query.toLowerCase();
    return getAllSaintGobainProducts().filter(
        (p) => p.name.toLowerCase().includes(q) || (p.cardDescription || '').toLowerCase().includes(q)
    );
}

export const saintGobainData = new Proxy({}, {
    get(_, prop) { return getSaintGobainData()[prop]; }
});

// ══════════════════════════════════════════════
// TATA BLUESCOPE (nested: categories → products)
// ══════════════════════════════════════════════

export function getTataData() {
    return getMergedData(staticTata, 'tataBlueScope', 'categories');
}

export function getAllTataProducts() {
    return getTataData().categories.flatMap((c) => c.products);
}

export function getTataProductBySlug(slug) {
    return getAllTataProducts().find((p) => p.slug === slug);
}

export function getTataCategoryById(categoryId) {
    return getTataData().categories.find((c) => c.id === categoryId);
}

export function getTataProductsByCategory(categoryId) {
    const cat = getTataCategoryById(categoryId);
    return cat ? cat.products : [];
}

export function getTataProductCountByCategory(categoryId) {
    return getTataProductsByCategory(categoryId).length;
}

export function searchTataProducts(query) {
    const q = query.toLowerCase();
    return getAllTataProducts().filter(
        (p) => p.name.toLowerCase().includes(q) || (p.cardDescription || '').toLowerCase().includes(q)
    );
}

export function getTataRelatedProducts(productSlug, limit = 3) {
    const all = getAllTataProducts();
    return all.filter((p) => p.slug !== productSlug).slice(0, limit);
}

export const tataBluescopeData = new Proxy({}, {
    get(_, prop) { return getTataData()[prop]; }
});

// ══════════════════════════════════════════════
// TEGOLA CANADESE
// ══════════════════════════════════════════════

export function getTegolaData() {
    return getMergedData(staticTegola, 'tegolaCanadese');
}

export function getTegolaProductBySlug(slug) {
    return getTegolaData().products.find((p) => p.slug === slug);
}

export function getTegolaProductsByCategory(category) {
    const data = getTegolaData();
    if (category === 'All Products') return data.products;
    return data.products.filter((p) => p.category === category);
}

export function getTegolaFeaturedProducts() {
    return getTegolaData().products.filter((p) => p.isFeatured);
}

export function getTegolaRelatedProducts(productId) {
    const data = getTegolaData();
    const product = data.products.find((p) => p.id === productId);
    if (!product || !product.relatedProducts) return [];
    return product.relatedProducts
        .map((id) => data.products.find((p) => p.id === id))
        .filter(Boolean);
}

export const tegolaData = new Proxy({}, {
    get(_, prop) { return getTegolaData()[prop]; }
});
