'use client';

import { useState, useCallback } from 'react';
import { getOverrides, saveOverrides, mergeProducts, mergeNested } from '../utils/mergeData';
import * as dataService from '../../products/data/dataService';
import { companySchemas } from '../utils/schemaRegistry';

export function useAdminData() {
    const [, setTick] = useState(0);
    const refresh = useCallback(() => setTick((t) => t + 1), []);

    // Get all products for a company (merged)
    function getCompanyProducts(companyKey) {
        const schema = companySchemas[companyKey];
        if (!schema) return [];

        if (schema.nestedKey) {
            // Nested: saint-gobain (types) or tata-bluescope (categories)
            if (companyKey === 'saintGobain') {
                return dataService.getAllSaintGobainProducts();
            }
            if (companyKey === 'tataBlueScope') {
                return dataService.getAllTataProducts();
            }
        }

        // Flat products
        const getterMap = {
            chemicals: () => dataService.getChemicalsData().products,
            birlanu: () => dataService.getBirlanuData().products,
            ejotScrew: () => dataService.getEjotData().products,
            hindalco: () => dataService.getHindalcoData().products,
            keeSafety: () => dataService.getKeeSafetyData().products,
            tegolaCanadese: () => dataService.getTegolaData().products,
        };

        if (getterMap[companyKey]) return getterMap[companyKey]();
        // Fallback for dynamically added companies
        return dataService.getGenericCompanyData(companyKey)?.products || [];
    }

    // Get a single product by id
    function getProduct(companyKey, productId) {
        const products = getCompanyProducts(companyKey);
        return products.find((p) => String(p.id) === String(productId));
    }

    // Get company data (companyInfo, categories, etc.)
    function getCompanyData(companyKey) {
        const getterMap = {
            chemicals: dataService.getChemicalsData,
            birlanu: dataService.getBirlanuData,
            ejotScrew: dataService.getEjotData,
            hindalco: dataService.getHindalcoData,
            keeSafety: dataService.getKeeSafetyData,
            saintGobain: dataService.getSaintGobainData,
            tataBlueScope: dataService.getTataData,
            tegolaCanadese: dataService.getTegolaData,
        };
        if (getterMap[companyKey]) return getterMap[companyKey]();
        // Fallback for dynamically added companies
        return dataService.getGenericCompanyData(companyKey) || {};
    }

    // Save a product (create or update)
    function saveProduct(companyKey, product) {
        const overrides = getOverrides();
        if (!overrides[companyKey]) overrides[companyKey] = {};

        const schema = companySchemas[companyKey];

        if (schema?.nestedKey) {
            // For nested structures, find the right category/type
            const nestedKey = schema.nestedKey;
            if (!overrides[companyKey][nestedKey]) overrides[companyKey][nestedKey] = [];

            const categoryField = companyKey === 'tataBlueScope' ? 'category' : 'type';
            const categoryValue = product[categoryField];

            let categoryOverride = overrides[companyKey][nestedKey].find(
                (c) => c.name === categoryValue || c.id === categoryValue
            );

            if (!categoryOverride) {
                // Get the static category info
                const staticData = getCompanyData(companyKey);
                const staticCategory = staticData[nestedKey]?.find(
                    (c) => c.name === categoryValue || c.id === categoryValue
                );
                categoryOverride = {
                    ...(staticCategory || { id: categoryValue, name: categoryValue, slug: categoryValue }),
                    products: [],
                };
                overrides[companyKey][nestedKey].push(categoryOverride);
            }

            if (!categoryOverride.products) categoryOverride.products = [];
            const idx = categoryOverride.products.findIndex((p) => String(p.id) === String(product.id));
            if (idx !== -1) {
                categoryOverride.products[idx] = product;
            } else {
                categoryOverride.products.push(product);
            }
        } else {
            if (!overrides[companyKey].products) overrides[companyKey].products = [];
            const idx = overrides[companyKey].products.findIndex((p) => String(p.id) === String(product.id));
            if (idx !== -1) {
                overrides[companyKey].products[idx] = product;
            } else {
                overrides[companyKey].products.push(product);
            }
        }

        saveOverrides(overrides);
        refresh();
    }

    // Delete a product
    function deleteProduct(companyKey, productId) {
        const overrides = getOverrides();
        if (!overrides[companyKey]) overrides[companyKey] = {};

        const schema = companySchemas[companyKey];

        if (schema?.nestedKey) {
            const nestedKey = schema.nestedKey;
            if (!overrides[companyKey][nestedKey]) overrides[companyKey][nestedKey] = [];

            // Find which category the product belongs to
            const staticData = getCompanyData(companyKey);
            for (const cat of staticData[nestedKey] || []) {
                const productInCat = (cat.products || []).find((p) => String(p.id) === String(productId));
                if (productInCat) {
                    let catOverride = overrides[companyKey][nestedKey].find(
                        (c) => c.id === cat.id || c.slug === cat.slug
                    );
                    if (!catOverride) {
                        catOverride = { ...cat, products: [] };
                        overrides[companyKey][nestedKey].push(catOverride);
                    }
                    if (!catOverride.products) catOverride.products = [];
                    catOverride.products.push({ id: productId, _deleted: true });
                    break;
                }
            }
        } else {
            if (!overrides[companyKey].products) overrides[companyKey].products = [];
            // Check if it already exists in overrides
            const idx = overrides[companyKey].products.findIndex((p) => String(p.id) === String(productId));
            if (idx !== -1) {
                overrides[companyKey].products[idx] = { id: productId, _deleted: true };
            } else {
                overrides[companyKey].products.push({ id: productId, _deleted: true });
            }
        }

        saveOverrides(overrides);
        refresh();
    }

    // Get products registry (company list for /products page)
    function getProductsRegistry() {
        return dataService.getProductsData();
    }

    // Save company to products registry
    function saveCompanyToRegistry(company) {
        const overrides = getOverrides();
        if (!overrides.productsData) overrides.productsData = [];
        const idx = overrides.productsData.findIndex((c) => String(c.id) === String(company.id));
        if (idx !== -1) {
            overrides.productsData[idx] = company;
        } else {
            overrides.productsData.push(company);
        }
        saveOverrides(overrides);
        refresh();
    }

    // Reset all overrides
    function resetAll() {
        localStorage.removeItem('pe_admin_overrides');
        refresh();
    }

    // Export overrides as JSON
    function exportData() {
        const overrides = getOverrides();
        const blob = new Blob([JSON.stringify(overrides, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `pe-admin-backup-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // Does the admin have local (unexported) changes in localStorage?
    function hasLocalChanges() {
        const overrides = getOverrides();
        return Object.keys(overrides).length > 0;
    }

    return {
        getCompanyProducts,
        getProduct,
        getCompanyData,
        saveProduct,
        deleteProduct,
        getProductsRegistry,
        saveCompanyToRegistry,
        resetAll,
        exportData,
        hasLocalChanges,
    };
}
