'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import { chemicalsData, getChemicalsByCategory } from '../data/companyProducts/chemicals';
import styles from './styles.module.css';

export default function ChemicalsPage() {
    const [activeCategory, setActiveCategory] = useState('All Products');
    const [visibleProducts, setVisibleProducts] = useState(chemicalsData.products);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.05 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const handleCategoryChange = (category) => {
        if (category === activeCategory) return;
        setIsAnimating(true);
        setTimeout(() => {
            setActiveCategory(category);
            setVisibleProducts(getChemicalsByCategory(category));
            setIsAnimating(false);
        }, 200);
    };

    const { companyInfo } = chemicalsData;

    return (
        <>
            <Header />
            <Logo />
            <FloatingQuoteButton />

            <main className={styles.chemicalsPage} ref={sectionRef}>

                {/* ── Brand Header ── */}
                <div className={`${styles.brandHeader} ${isVisible ? styles.animateIn : ''}`}>
                    <p className={styles.brandLabel}>Patel Enterprise</p>
                    <h1 className={styles.pageTitle}>{companyInfo.tagline}</h1>
                </div>

                {/* ── Description ── */}
                <div className={`${styles.descriptionSection} ${isVisible ? styles.animateIn : ''}`}
                    style={{ animationDelay: '0.1s' }}>
                    <p className={styles.description}>{companyInfo.description}</p>
                </div>

                {/* ── Supply Capability Strip ── */}
                <div className={`${styles.supplyStrip} ${isVisible ? styles.animateIn : ''}`}
                    style={{ animationDelay: '0.15s' }}>
                    {companyInfo.supplyCapability.map((item, i) => (
                        <div key={i} className={styles.supplyItem}>
                            <span className={styles.supplyCheck} aria-hidden="true">✓</span>
                            <span className={styles.supplyText}>{item}</span>
                        </div>
                    ))}
                </div>

                {/* ── Serving Areas ── */}
                <p className={`${styles.servingAreas} ${isVisible ? styles.animateIn : ''}`}
                    style={{ animationDelay: '0.2s' }}>
                    Serving: {companyInfo.servingAreas.join(' | ')}
                </p>

                {/* ── Section Header ── */}
                <div className={`${styles.productSectionHeader} ${isVisible ? styles.animateIn : ''}`}
                    style={{ animationDelay: '0.25s' }}>
                    <h2 className={styles.productSectionTitle}>Our Product Range</h2>
                    <span className={styles.productCount}>
                        {String(visibleProducts.length).padStart(2, '0')}
                    </span>
                </div>
                <div className={styles.sectionDivider}></div>

                {/* ── Category Filter ── */}
                <div className={`${styles.categoryFilter} ${isVisible ? styles.animateIn : ''}`}
                    style={{ animationDelay: '0.3s' }}>
                    {chemicalsData.categories.map((cat) => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
                            onClick={() => handleCategoryChange(cat)}
                            aria-pressed={activeCategory === cat}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* ── Products Grid ── */}
                <div className={`${styles.productsGrid} ${isAnimating ? styles.gridFade : ''} ${isVisible ? styles.animateIn : ''}`}
                    style={{ animationDelay: '0.35s' }}>
                    {visibleProducts.map((product, index) => (
                        <Link
                            key={product.id}
                            href={`/products/chemicals/${product.slug}`}
                            className={styles.productCard}
                            style={{ animationDelay: `${0.35 + index * 0.06}s` }}
                        >
                            {/* Full bleed image */}
                            <img
                                src={product.cardImage}
                                alt={product.name}
                                className={styles.productImage}
                                loading="lazy"
                            />

                            {/* Black gradient overlay + text */}
                            <div className={styles.cardOverlay}>
                                <span className={styles.cardCategory}>{product.category}</span>
                                <h3 className={styles.cardName}>
                                    {product.name}
                                    {product.tradeName && (
                                        <span className={styles.cardTradeName}> ({product.tradeName})</span>
                                    )}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

            </main>

            <Footer />
        </>
    );
}