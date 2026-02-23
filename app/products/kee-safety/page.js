'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import { keeSafetyData } from '../data/companyProducts/keeSafety';
import styles from './styles.module.css';

export default function KeeSafetyPage() {

    // Group products by category for display
    const productsByCategory = {
        'Roof Guardrails': keeSafetyData.products.filter(p =>
            ['kee-001', 'kee-002'].includes(p.id)
        ),
        'Safety Railings': keeSafetyData.products.filter(p =>
            ['kee-003', 'kee-004'].includes(p.id)
        ),
        'Safety Gates': keeSafetyData.products.filter(p =>
            ['kee-005', 'kee-006'].includes(p.id)
        ),
        'Platforms & Walkways': keeSafetyData.products.filter(p =>
            ['kee-007', 'kee-008', 'kee-009', 'kee-010', 'kee-011', 'kee-012'].includes(p.id)
        ),
        'Lifelines & Anchors': keeSafetyData.products.filter(p =>
            ['kee-013', 'kee-014', 'kee-015', 'kee-016', 'kee-017', 'kee-018'].includes(p.id)
        ),
        'Skylight Fall Protection': keeSafetyData.products.filter(p =>
            ['kee-019', 'kee-020'].includes(p.id)
        ),
        'Safe Connections': keeSafetyData.products.filter(p =>
            ['kee-021', 'kee-022'].includes(p.id)
        ),
    };

    return (
        <>
            <Header />
            <Logo />
            <FloatingQuoteButton />

            <main className={styles.keeSafetyPage}>

                {/* Kee Safety Logo */}
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
                        Kee Safety is part of a global company that supplies engineered safety systems designed to protect people working at height and separate them from hazards (like falls or unprotected edges). They focus on fall-protection and safe-access products used across industries such as construction, manufacturing, facilities management, and data centres. The solutions offered on their Safety Solutions page include a wide range of systems and engineered products you.
                    </p>
                </div>

                {/* Category Sections */}
                {Object.entries(productsByCategory).map(([categoryName, products]) => (
                    <section key={categoryName} className={styles.categorySection}>
                        {/* Category Header */}
                        <div className={styles.categoryHeader}>
                            <h2 className={styles.categoryTitle}>{categoryName}</h2>
                            <span className={styles.categoryCount}>
                                {String(products.length).padStart(2, '0')}
                            </span>
                        </div>
                        <div className={styles.categoryDivider}></div>

                        {/* Products Grid */}
                        <div className={styles.productsGrid}>
                            {products.map((product) => (
                                <article key={product.id} className={styles.productCard}>
                                    <Link href={`/products/kee-safety/${product.slug}`} className={styles.productCardLink}>
                                        {/* Product Image */}
                                        <div className={styles.productImageWrapper}>
                                            <img
                                                src={product.cardImage}
                                                alt={`${product.name} - ${product.category}`}
                                                className={styles.productImage}
                                                loading="lazy"
                                            />
                                        </div>

                                        {/* Product Name */}
                                        <h3 className={styles.productName}>{product.name}</h3>

                                        {/* Product Property/Category */}
                                        <p className={styles.productProperty}>{product.cardProperty}</p>

                                        {/* Product Description */}
                                        <p className={styles.productDescription}>
                                            {product.cardDescription}
                                        </p>

                                        {/* View Product CTA */}
                                        <span className={styles.viewProductLink}>
                                            View product
                                        </span>

                                        {/* Bottom Border */}
                                        <div className={styles.cardBottomBorder}></div>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </section>
                ))}

            </main>

            <Footer />
        </>
    );
}