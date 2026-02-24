'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import { keeSafetyData } from '../data/companyProducts/keeSafety';
import styles from './styles.module.css';

export default function KeeSafetyPage() {
    const [selectedCategory, setSelectedCategory] = useState('All Products');

    // Filter products based on selection
    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'All Products') {
            return keeSafetyData.products;
        }
        return keeSafetyData.products.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <>
            <Header />
            <Logo />
            <FloatingQuoteButton />

            <main className={styles.keeSafetyPage}>

                {/* Logo */}
                <div className={styles.logoSection}>
                    <img
                        src={keeSafetyData.companyInfo.logo}
                        alt={keeSafetyData.companyInfo.name}
                        className={styles.companyLogo}
                        loading="lazy"
                    />
                </div>

                {/* Page Title */}
                <h1 className={styles.pageTitle}>Discover Safety Solutions</h1>

                {/* Description */}
                <div className={styles.descriptionSection}>
                    <p className={styles.description}>
                        Kee Safety is part of a global company that supplies engineered safety systems designed to protect people working at height and separate them from hazards. They focus on fall-protection and safe-access products used across industries such as construction, manufacturing, facilities management, and data centres.
                    </p>
                </div>

                {/* Products Header with Filter */}
                <div className={styles.productsHeader}>
                    <div className={styles.titleGroup}>
                        <h2 className={styles.productsTitle}>
                            {selectedCategory === 'All Products' ? 'Products' : selectedCategory}
                        </h2>
                        <span className={styles.productsCount} aria-live="polite">
                            ({filteredProducts.length})
                        </span>
                    </div>

                    <div className={styles.filterSection}>
                        <label htmlFor="categoryFilter" className={styles.filterLabel}>
                            Filter by Category:
                        </label>
                        <div className={styles.selectWrapper}>
                            <select
                                id="categoryFilter"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className={styles.filterDropdown}
                            >
                                {keeSafetyData.categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            <svg
                                className={styles.dropdownArrow}
                                width="12"
                                height="8"
                                viewBox="0 0 12 8"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.dividerLine} role="separator" />

                {/* Products Grid */}
                <div className={styles.productsGrid}>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <article key={product.id} className={styles.productCard}>
                                <Link
                                    href={`/products/kee-safety/${product.slug}`}
                                    className={styles.productCardLink}
                                >
                                    <div className={styles.productImageWrapper}>
                                        <img
                                            src={product.cardImage}
                                            alt={product.name}
                                            className={styles.productImage}
                                            loading="lazy"
                                        />
                                    </div>

                                    <h3 className={styles.productName}>{product.name}</h3>
                                    <p className={styles.productProperty}>{product.cardProperty}</p>
                                    <p className={styles.productDescription}>{product.cardDescription}</p>

                                    <span className={styles.viewProductLink}>View product</span>
                                    <div className={styles.cardBottomBorder} />
                                </Link>
                            </article>
                        ))
                    ) : (
                        <div className={styles.noProducts}>
                            <p>No products found in this category.</p>
                        </div>
                    )}
                </div>

            </main>

            <Footer />
        </>
    );
}