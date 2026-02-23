'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import { hindalcoData, getHindalcoProduct } from '../data/companyProducts/hindalco';
import styles from './styles.module.css';

export default function HindalcoPage() {
    // Get the single product
    const product = getHindalcoProduct();

    return (
        <>
            <Header />
            <Logo />
            <FloatingQuoteButton />

            <main className={styles.hindalcoPage}>

                {/* Hindalco Logo */}
                <div className={styles.logoSection}>
                    <img
                        src={hindalcoData.companyInfo.logo}
                        alt={hindalcoData.companyInfo.name}
                        className={styles.companyLogo}
                        loading="lazy"
                    />
                </div>

                {/* Page Title */}
                <h1 className={styles.pageTitle}>Hindalco Industries Limited</h1>

                {/* Description */}
                <div className={styles.descriptionSection}>
                    <p className={styles.description}>
                        Hindalco Industries Limited is the metals flagship of the{' '}
                        <a
                            href="https://www.adityabirla.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.highlightLink}
                        >
                            Aditya Birla Group
                        </a>
                        . A USD 28 billion metals powerhouse, it is the world's largest aluminium company by revenue and a major global player in copper and specialty alumina. With operations across 10 countries and 48 manufacturing locations, Hindalco is a fully integrated player — from mining to finished products — and a global leader in flat-rolled aluminium products through its subsidiary Novelis. It is also India's largest producer of copper.
                    </p>
                </div>

                {/* Product Section Header */}
                <div className={styles.productSectionHeader}>
                    <h2 className={styles.productSectionTitle}>Hindalco Everlast</h2>
                    <span className={styles.productCount}>01</span>
                </div>
                <div className={styles.sectionDivider}></div>

                {/* Single Product Card */}
                <div className={styles.productCardContainer}>
                    <article className={styles.productCard}>
                        <Link href={`/products/hindalco/${product.slug}`} className={styles.productCardLink}>
                            {/* Product Image */}
                            <div className={styles.productImageWrapper}>
                                <img
                                    src={product.cardImage}
                                    alt={`${product.name} - ${product.category}`}
                                    className={styles.productImage}
                                    loading="lazy"
                                />
                            </div>

                            {/* Product Name (Card Name) */}
                            <h3 className={styles.productName}>{product.cardName}</h3>

                            {/* Product Property */}
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
                </div>

                {/* Bottom Content Section */}
                <section className={styles.bottomContent}>
                    <h2 className={styles.bottomTitle}>
                        {product.bottomContent.title}
                    </h2>

                    <p className={styles.bottomDescription}>
                        {product.bottomContent.description}
                    </p>
                </section>

            </main>

            <Footer />
        </>
    );
}