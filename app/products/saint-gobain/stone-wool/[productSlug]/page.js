'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import { saintGobainData, getProductBySlug } from '../../../data/companyProducts/saintGobain';
import styles from './styles.module.css';

export default function StoneWoolProductDetailPage() {
    const params = useParams();
    const { productSlug } = params;

    // Get current product
    const product = getProductBySlug(productSlug);

    if (!product) {
        return (
            <>
                <Header />
                <Logo />
                <main className={styles.errorPage}>
                    <h1>Product not found</h1>
                    <Link href="/products/saint-gobain/stone-wool">Back to Stone Wool Products</Link>
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

            <main className={styles.productPage}>

                {/* Company Logo */}
                <div className={styles.logoSection}>
                    <img
                        src={saintGobainData.companyInfo.logo}
                        alt={saintGobainData.companyInfo.name}
                        className={styles.companyLogo}
                        loading="lazy"
                    />
                </div>

                {/* Breadcrumb Navigation */}
                <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                    <Link href="/products" className={styles.breadcrumbLink}>
                        Products
                    </Link>
                    <div className={styles.breadcrumbArrow}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <Link href="/products/saint-gobain" className={styles.breadcrumbLink}>
                        Saint Gobain
                    </Link>
                    <div className={styles.breadcrumbArrow}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className={styles.breadcrumbCurrent}>{product.name}</span>
                </nav>

                {/* Product Detail Section */}
                <div className={styles.productDetailSection}>

                    {/* Left: Product Image */}
                    <div className={styles.productImageContainer}>
                        <div className={styles.mainImageWrapper}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className={styles.productMainImage}
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Right: Product Information */}
                    <div className={styles.productInfo}>

                        {/* Product Title */}
                        <h1 className={styles.productTitle}>{product.name}</h1>

                        {/* Product Type Label */}
                        <p className={styles.productTypeLabel}>{product.type}</p>

                        {/* Description */}
                        <p className={styles.productLongDescription}>
                            {product.cardDescription}
                        </p>

                        {/* Divider */}
                        <div className={styles.dividerLine}></div>

                        {/* Range Section */}
                        {product.range && product.range.length > 0 && (
                            <div className={styles.infoSection}>
                                <h2 className={styles.sectionTitle}>Range</h2>
                                <ul className={styles.infoList}>
                                    {product.range.map((item, index) => (
                                        <li key={index} className={styles.infoListItem}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Divider */}
                        <div className={styles.dividerLine}></div>

                        {/* Facings Section */}
                        {product.facings && product.facings.length > 0 && product.facings[0] !== "N/A" && (
                            <>
                                <div className={styles.infoSection}>
                                    <h2 className={styles.sectionTitle}>Facings</h2>
                                    <ul className={styles.infoList}>
                                        {product.facings.map((item, index) => (
                                            <li key={index} className={styles.infoListItem}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.dividerLine}></div>
                            </>
                        )}

                        {/* Basic Information Section */}
                        {product.basicInformation && product.basicInformation.length > 0 && (
                            <div className={styles.infoSection}>
                                <h2 className={styles.sectionTitle}>Basic Information</h2>
                                <ul className={styles.infoList}>
                                    {product.basicInformation.map((item, index) => (
                                        <li key={index} className={styles.infoListItem}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Divider */}
                        <div className={styles.dividerLine}></div>

                        {/* Brochure Section */}
                        {product.brochure && (
                            <div className={styles.infoSection}>
                                <h2 className={styles.sectionTitle}>Brochure</h2>
                                <a
                                    href={product.brochure}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.brochureLink}
                                >
                                    <svg className={styles.downloadIcon} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.5 3.16666V12.6667M9.5 12.6667L6.33333 9.5M9.5 12.6667L12.6667 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.16666 14.25V15.0417C3.16666 15.4782 3.34005 15.8968 3.64871 16.2055C3.95737 16.5141 4.37599 16.6875 4.8125 16.6875H14.1875C14.624 16.6875 15.0426 16.5141 15.3513 16.2055C15.6599 15.8968 15.8333 15.4782 15.8333 15.0417V14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <div className={styles.brochureText}>
                                        <span className={styles.brochureName}>{product.brochureFileName} </span>
                                        <span className={styles.brochureSize}>{product.brochureFileSize}</span>
                                    </div>
                                </a>
                            </div>
                        )}

                        {/* Enquire Now Button */}
                        <button className={styles.enquireButton}>Enquire now</button>
                    </div>
                </div>

                {/* Properties / Features Area */}
                <section className={styles.propertiesSection}>
                    <div className={styles.propertiesGrid}>
                        {product.properties && product.properties.map((prop, index) => (
                            <div key={index} className={styles.propertyItem}>
                                <img src={prop.icon} alt={prop.name} className={styles.propertyIcon} />
                                <span className={styles.propertyName}>{prop.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}
