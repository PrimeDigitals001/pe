'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import { tegolaData } from '../data/dataService';
import styles from './styles.module.css';

export default function TegolaPage() {
    const products = tegolaData.products;

    return (
        <>
            <Header />
            <Logo />
            <FloatingQuoteButton />

            <main className={styles.tegolaPage}>

                {/* Company Logo */}
                <div className={styles.logoSection}>
                    <img
                        src={tegolaData.companyInfo.logo}
                        alt={tegolaData.companyInfo.name}
                        className={styles.companyLogo}
                        loading="lazy"
                    />
                </div>

                {/* Page Title */}
                <h1 className={styles.pageTitle}>
                    Technological innovation and process quality
                </h1>

                {/* Description */}
                <div className={styles.descriptionSection}>
                    <p className={styles.description}>
                        Our company has always invested in the innovation and quality of products
                        and production processes. Thanks to qualified personnel and to an important
                        Research and Development sector, which constantly collaborates with Italian
                        and European universities and research institutes, we develop
                        technologically advanced materials, capable of enhancing the quality and
                        flexibility of use of our shingles, obtaining a high-quality product
                        standard.
                    </p>
                </div>

                {/* Product Section Header */}
                <div className={styles.productSectionHeader}>
                    <h2 className={styles.productSectionTitle}>All Products</h2>
                    <span className={styles.productCount}>
                        {String(products.length).padStart(2, '0')}
                    </span>
                </div>
                <div className={styles.sectionDivider}></div>

                {/* Product Grid — 3 columns × 2 rows */}
                <div className={styles.productGrid}>
                    {products.map((product) => (
                        <article key={product.id} className={styles.productCard}>
                            <Link
                                href={`/products/tegola-canadese/${product.slug}`}
                                className={styles.productCardLink}
                            >
                                {/* Product Image */}
                                <div className={styles.productImageWrapper}>
                                    <img
                                        src={product.image}
                                        alt={`${product.name} — ${product.category}`}
                                        className={styles.productImage}
                                        loading="lazy"
                                    />
                                </div>

                                {/* Product Name */}
                                <h3 className={styles.productName}>{product.name}</h3>

                                {/* Product Category */}
                                <p className={styles.productCategory}>{product.category}</p>

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

            </main>

            <Footer />
        </>
    );
}