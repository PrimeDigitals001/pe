'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import {
    hindalcoData,
    getHindalcoProductBySlug,
} from '../../data/companyProducts/hindalco';
import styles from './styles.module.css';

export default function HindalcoProductDetailPage() {
    const params = useParams();
    const { productSlug } = params;

    // Get current product
    const product = getHindalcoProductBySlug(productSlug);

    // State for main image (for gallery switching)
    const [mainImage, setMainImage] = useState(0);

    // Gallery images - you can add more images to the data file
    const galleryImages = [
        product?.internalImage || product?.cardImage,
        '/images/products/hindalco/hp1.3.png',
        '/images/products/hindalco/hp1.4.png',
        '/images/products/hindalco/hp1.5.png',
    ];

    if (!product) {
        return (
            <>
                <Header />
                <Logo />
                <main className={styles.errorPage}>
                    <h1>Product not found</h1>
                    <Link href="/products/hindalco">Back to Hindalco Products</Link>
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

                {/* Hindalco Logo */}
                <div className={styles.logoSection}>
                    <img
                        src="/images/products/logo_hindalco.png"
                        alt="Hindalco"
                        className={styles.companyLogo}
                        loading="lazy"
                    />
                </div>

                {/* Breadcrumb Navigation */}
                <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                    <Link href="/products" className={styles.breadcrumbLink}>
                        Products
                    </Link>
                    <span className={styles.breadcrumbArrow} aria-hidden="true">›</span>
                    <Link href="/products/hindalco" className={styles.breadcrumbLink}>
                        Hindalco
                    </Link>
                    <span className={styles.breadcrumbArrow} aria-hidden="true">›</span>
                    <span className={styles.breadcrumbCurrent}>Hindalco Industries Limited</span>
                </nav>

                {/* Product Detail Section */}
                <div className={styles.productDetailSection}>

                    {/* Left: Product Images */}
                    <div className={styles.productImageSection}>
                        {/* Main Image */}
                        <div className={styles.mainImageContainer}>
                            <img
                                src={galleryImages[mainImage]}
                                alt={`${product.name} - View ${mainImage + 1}`}
                                className={styles.mainImage}
                                loading="lazy"
                            />
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className={styles.thumbnailGallery}>
                            {galleryImages.slice(1).map((img, index) => (
                                <button
                                    key={index}
                                    className={`${styles.thumbnailButton} ${mainImage === index + 1 ? styles.thumbnailActive : ''}`}
                                    onClick={() => setMainImage(index + 1)}
                                    aria-label={`View image ${index + 2}`}
                                >
                                    <img
                                        src={img}
                                        alt={`${product.name} thumbnail ${index + 2}`}
                                        className={styles.thumbnailImage}
                                        loading="lazy"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Information */}
                    <div className={styles.productInfo}>

                        {/* Product Title */}
                        <h1 className={styles.productTitle}>
                            {product.name}
                        </h1>

                        {/* Product Property */}
                        <p className={styles.productProperty}>{product.mainProperty}</p>

                        {/* Main Description */}
                        <p className={styles.productDescription}>
                            {product.mainDescription}
                        </p>

                        {/* Divider */}
                        <div className={styles.dividerLine}></div>

                        {/* Alloys Section */}
                        <div className={styles.infoSection}>
                            <h2 className={styles.sectionTitle}>Alloys</h2>
                            <p className={styles.sectionContent}>
                                {product.alloys.join(', ')}.
                            </p>
                        </div>
                        <div className={styles.dividerLine}></div>

                        {/* Thickness Section */}
                        <div className={styles.infoSection}>
                            <h2 className={styles.sectionTitle}>Thickness</h2>
                            <p className={styles.sectionContent}>
                                Ranging from {product.thickness.min} to {product.thickness.max}
                            </p>
                        </div>
                        <div className={styles.dividerLine}></div>

                        {/* Standard Length Section */}
                        <div className={styles.infoSection}>
                            <h2 className={styles.sectionTitle}>Standard Length</h2>
                            <p className={styles.sectionContent}>
                                Ranging from {product.standardLength.min} to {product.standardLength.max}
                            </p>
                            <p className={styles.sectionNote}>
                                {product.standardLength.customNote}
                            </p>
                        </div>
                        <div className={styles.dividerLine}></div>

                        {/* Colour Coated Coils Section */}
                        <div className={styles.infoSection}>
                            <h2 className={styles.sectionTitle}>{product.colourCoatedCoils.description}</h2>
                            <p className={styles.sectionContent}>
                                {product.colourCoatedCoils.note}
                            </p>
                        </div>
                        <div className={styles.dividerLine}></div>

                        {/* Compliance Section */}
                        <div className={styles.infoSection}>
                            <h2 className={styles.sectionTitle}>Compliance</h2>
                            {product.compliance.map((item, index) => (
                                <p key={index} className={styles.sectionContent}>
                                    {item}
                                </p>
                            ))}
                        </div>
                        <div className={styles.dividerLine}></div>

                        {/* Brochure Section */}
                        <div className={styles.infoSection}>
                            <h2 className={styles.sectionTitle}>Brochure</h2>
                            <div className={styles.downloadList}>
                                {product.brochures.map((brochure, index) => (
                                    <a
                                        key={index}
                                        href={brochure.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.downloadLink}
                                        aria-label={`Open ${brochure.text}`}
                                    >
                                        <svg className={styles.downloadIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <path d="M12 3V16M12 16L7 11M12 16L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3 17V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <span className={styles.downloadText}>
                                            <span className={styles.downloadName}>{brochure.text}</span>
                                            <span className={styles.downloadSize}> {brochure.size}</span>
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Enquire Button */}
                        <button className={styles.enquireButton} aria-label="Enquire about this product">
                            Enquire now
                        </button>

                        {/* Divider before colors */}
                        <div className={styles.dividerLine}></div>

                        {/* Standard Colour Range */}
                        <div className={styles.colorSection}>
                            <h2 className={styles.sectionTitle}>Standard Colour Range</h2>
                            <div className={styles.colorGrid}>
                                {product.colors.map((color, index) => (
                                    <div key={index} className={styles.colorCard}>
                                        <div
                                            className={styles.colorSwatch}
                                            style={{ backgroundColor: color.code }}
                                        ></div>
                                        <span className={styles.colorName}>{color.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
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