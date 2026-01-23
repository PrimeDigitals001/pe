// app/products/saint-gobain/stone-wool/page.js

'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import { saintGobainData, getTypeBySlug } from '../../data/companyProducts/saintGobain';
import styles from './styles.module.css';

export default function StoneWoolPage() {
    const typeData = getTypeBySlug('stone-wool');

    if (!typeData) {
        return (
            <>
                <Header />
                <Logo />
                <main className={styles.errorPage}>
                    <h1>Product type not found</h1>
                    <Link href="/products/saint-gobain">Back to Saint-Gobain</Link>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <Logo />
            <FloatingQuoteButton />

            <main className={styles.stoneWoolPage}>

                {/* Saint-Gobain Logo */}
                <div className={styles.logoSection}>
                    <img
                        src={saintGobainData.companyInfo.logo}
                        alt={saintGobainData.companyInfo.name}
                        className={styles.companyLogo}
                        loading="lazy"
                    />
                </div>

                {/* Page Title & Description */}
                <div className={styles.headerSection}>
                    <h1 className={styles.pageTitle}>{typeData.name}</h1>
                    <p className={styles.pageDescription}>
                        {typeData.headerDescription}
                    </p>
                </div>

                {/* Products Header */}
                <div className={styles.productsHeader}>
                    <h2 className={styles.productsTitle}>{typeData.name}</h2>
                    <span
                        className={styles.productsCount}
                        aria-label={`${typeData.productCount} products available`}
                    >
                        {String(typeData.productCount).padStart(2, '0')}
                    </span>
                </div>

                {/* Divider Line */}
                <div className={styles.dividerLine} role="separator"></div>

                {/* Products Grid */}
                <div className={styles.productsGrid}>
                    {typeData.products.map((product) => (
                        <article key={product.id} className={styles.productCard}>
                            <Link
                                href={`/products/saint-gobain/stone-wool/${product.slug}`}
                                className={styles.productCardLink}
                            >

                                {/* Product Image */}
                                <div className={styles.productImageWrapper}>
                                    <img
                                        src={product.image}
                                        alt={`${product.name} - ${product.type}`}
                                        className={styles.productImage}
                                        loading="lazy"
                                    />
                                </div>

                                {/* Product Name */}
                                <h3 className={styles.productName}>{product.name}</h3>

                                {/* Product Type */}
                                <p className={styles.productType}>{product.type}</p>

                                {/* Card Description */}
                                <p className={styles.productDescription}>
                                    {product.cardDescription}
                                </p>

                                {/* View Product Link */}
                                <span className={styles.viewProductLink}>
                                    View product
                                </span>

                                {/* Card Bottom Border */}
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
