'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import { getProductsData, getGenericCompanyData, getGenericCompanyProductsByCategory } from '../data/dataService';
import { slugToCompanyKey } from '../../admin/utils/schemaRegistry';
import styles from './styles.module.css';

export default function GenericCompanyPage() {
    const params = useParams();
    const { companySlug } = params;
    const companyKey = slugToCompanyKey(companySlug);

    const [activeCategory, setActiveCategory] = useState('All Products');
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

    // Look up company from registry
    const registry = getProductsData();
    const companyEntry = registry.find((c) => c.slug === companySlug);

    // Get company data
    const companyData = getGenericCompanyData(companyKey);
    const categories = companyData.categories || ['All Products'];

    const [visibleProducts, setVisibleProducts] = useState(companyData.products || []);

    const handleCategoryChange = (category) => {
        if (category === activeCategory) return;
        setIsAnimating(true);
        setTimeout(() => {
            setActiveCategory(category);
            setVisibleProducts(getGenericCompanyProductsByCategory(companyKey, category));
            setIsAnimating(false);
        }, 200);
    };

    if (!companyEntry) {
        return (
            <>
                <Header />
                <Logo />
                <main className={styles.errorPage}>
                    <h1>Company not found</h1>
                    <Link href="/products">Back to Products</Link>
                </main>
                <Footer />
            </>
        );
    }

    const companyName = companyData.companyInfo?.name || companyEntry.name || companySlug;
    const companyLogo = companyData.companyInfo?.logo || companyEntry.logo;
    const companyTagline = companyData.companyInfo?.tagline || companyEntry.tagline || '';
    const companyDescription = companyData.companyInfo?.description || companyEntry.description || '';

    return (
        <>
            <Header />
            <Logo />
            <FloatingQuoteButton />

            <main className={styles.companyPage} ref={sectionRef}>

                {/* Company Logo */}
                {companyLogo && (
                    <div className={`${styles.logoSection} ${isVisible ? styles.animateIn : ''}`}>
                        <img src={companyLogo} alt={companyName} className={styles.companyLogo} loading="lazy" />
                    </div>
                )}

                {/* Brand Header */}
                <div className={`${styles.brandHeader} ${isVisible ? styles.animateIn : ''}`}>
                    <p className={styles.brandLabel}>{companyName}</p>
                    {companyTagline && <h1 className={styles.pageTitle}>{companyTagline}</h1>}
                </div>

                {/* Description */}
                {companyDescription && (
                    <div className={`${styles.descriptionSection} ${isVisible ? styles.animateIn : ''}`}
                        style={{ animationDelay: '0.1s' }}>
                        <p className={styles.description}>{companyDescription}</p>
                    </div>
                )}

                {/* Section Header */}
                <div className={`${styles.productSectionHeader} ${isVisible ? styles.animateIn : ''}`}
                    style={{ animationDelay: '0.25s' }}>
                    <h2 className={styles.productSectionTitle}>Our Product Range</h2>
                    <span className={styles.productCount}>
                        {String(visibleProducts.length).padStart(2, '0')}
                    </span>
                </div>
                <div className={styles.sectionDivider}></div>

                {/* Category Filter */}
                {categories.length > 1 && (
                    <div className={`${styles.categoryFilter} ${isVisible ? styles.animateIn : ''}`}
                        style={{ animationDelay: '0.3s' }}>
                        {categories.map((cat) => (
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
                )}

                {/* Products Grid */}
                {visibleProducts.length > 0 ? (
                    <div className={`${styles.productsGrid} ${isAnimating ? styles.gridFade : ''} ${isVisible ? styles.animateIn : ''}`}
                        style={{ animationDelay: '0.35s' }}>
                        {visibleProducts.map((product, index) => (
                            <Link
                                key={product.id}
                                href={`/products/${companySlug}/${product.slug}`}
                                className={styles.productCard}
                                style={{ animationDelay: `${0.35 + index * 0.06}s` }}
                            >
                                {product.image && (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className={styles.productImage}
                                        loading="lazy"
                                    />
                                )}
                                <div className={styles.cardOverlay}>
                                    {product.category && (
                                        <span className={styles.cardCategory}>{product.category}</span>
                                    )}
                                    <h3 className={styles.cardName}>{product.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className={styles.emptyState}>
                        <h3>No products yet</h3>
                        <p>Add products from the admin dashboard</p>
                    </div>
                )}

            </main>

            <Footer />
        </>
    );
}
