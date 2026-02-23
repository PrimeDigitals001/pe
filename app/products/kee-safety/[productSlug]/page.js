'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import {
    keeSafetyData,
    getKeeSafetyProductBySlug,
    getKeeSafetyRelatedProducts
} from '../../data/companyProducts/keeSafety';
import styles from './styles.module.css';

export default function KeeSafetyProductDetailPage() {
    const params = useParams();
    const { productSlug } = params;

    // Get current product
    const product = getKeeSafetyProductBySlug(productSlug);

    // Get related products (limit to 3)
    let relatedProducts = [];

    if (product) {
        relatedProducts = getKeeSafetyRelatedProducts(product.id);

        // If no related products, show other products (exclude current)
        if (relatedProducts.length === 0) {
            relatedProducts = keeSafetyData.products
                .filter((p) => p.id !== product.id)
                .slice(0, 3);
        } else {
            relatedProducts = relatedProducts.slice(0, 3);
        }
    }

    if (!product) {
        return (
            <>
                <Header />
                <Logo />
                <main className={styles.errorPage}>
                    <h1>Product not found</h1>
                    <Link href="/products/kee-safety">Back to Kee Safety Products</Link>
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

                {/* Kee Safety Logo */}
                <div className={styles.logoSection}>
                    <img
                        src="/images/products/logo_kee_safety.png"
                        alt="Kee Safety"
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
                    <Link href="/products/kee-safety" className={styles.breadcrumbLink}>
                        Kee Safety
                    </Link>
                    <span className={styles.breadcrumbArrow} aria-hidden="true">›</span>
                    <span className={styles.breadcrumbCurrent}>{product.name}</span>
                </nav>

                {/* Product Detail Section */}
                <div className={styles.productDetailSection}>

                    {/* Left: Product Image */}
                    <div className={styles.productImageContainer}>
                        <img
                            src={product.internalImage || product.cardImage}
                            alt={`${product.name} - ${product.category}`}
                            className={styles.productMainImage}
                            loading="lazy"
                        />
                    </div>

                    {/* Right: Product Information */}
                    <div className={styles.productInfo}>

                        {/* Product Title */}
                        <h1 className={styles.productTitle}>
                            {product.name} - {product.cardProperty}
                        </h1>

                        {/* Product Short Description */}
                        <p className={styles.productShortDesc}>
                            {product.mainProperty}
                        </p>

                        {/* Main Description */}
                        <p className={styles.productMainDesc}>
                            {product.mainDescription}
                        </p>

                        {/* Divider Line */}
                        <div className={styles.dividerLine} role="separator"></div>

                        {/* Sizes / SKUs Available */}
                        {product.sizesAndSKUs && product.sizesAndSKUs.length > 0 && (
                            <>
                                <div className={styles.infoSection}>
                                    <h2 className={styles.sectionTitle}>Sizes / SKUs Available</h2>
                                    <div className={styles.infoContent}>
                                        {product.sizesAndSKUs.map((item, index) => (
                                            <p key={index} className={styles.infoItem}>{item}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.dividerLine} role="separator"></div>
                            </>
                        )}

                        {/* Standards & Specifications */}
                        {product.standardsAndSpecifications && product.standardsAndSpecifications.length > 0 && (
                            <>
                                <div className={styles.infoSection}>
                                    <h2 className={styles.sectionTitle}>Standards & Specifications</h2>
                                    <div className={styles.infoContent}>
                                        {product.standardsAndSpecifications.map((item, index) => (
                                            <p key={index} className={styles.infoItem}>{item}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.dividerLine} role="separator"></div>
                            </>
                        )}

                        {/* Application / Area of Usage */}
                        {product.applicationAndUsage && product.applicationAndUsage.length > 0 && (
                            <>
                                <div className={styles.infoSection}>
                                    <h2 className={styles.sectionTitle}>Application / Area of Usage</h2>
                                    <div className={styles.infoContent}>
                                        {product.applicationAndUsage.map((item, index) => (
                                            <p key={index} className={styles.infoItem}>{item}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.dividerLine} role="separator"></div>
                            </>
                        )}

                        {/* Brochure Downloads */}
                        {product.brochures && product.brochures.length > 0 && (
                            <div className={styles.infoSection}>
                                <h2 className={styles.sectionTitle}>Brochure</h2>
                                <div className={styles.downloadList}>
                                    {product.brochures.map((brochure, index) => {
                                        const isExternal = brochure.link.startsWith('http');

                                        return (
                                            <a
                                                key={index}
                                                href={brochure.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.downloadLink}
                                                {...(!isExternal ? { download: true } : {})}
                                                aria-label={`${isExternal ? 'Open' : 'Download'} ${brochure.text}${brochure.size ? ` (${brochure.size})` : ''}`}
                                            >
                                                <svg className={styles.downloadIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                    <path d="M12 3V16M12 16L7 11M12 16L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M3 17V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                                <span className={styles.downloadText}>
                                                    <span className={styles.downloadName}>{brochure.text}</span>
                                                    {brochure.size && <span className={styles.downloadSize}> {brochure.size}</span>}
                                                </span>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Enquire Now Button */}
                        <button className={styles.enquireButton} aria-label="Enquire about this product">
                            Enquire now
                        </button>
                    </div>
                </div>

                {/* Further Products Section */}
                <section className={styles.furtherProductsSection}>
                    <h2 className={styles.furtherProductsTitle}>Further Products</h2>
                    <div className={styles.furtherProductsDivider} role="separator"></div>

                    {/* Related Products Grid */}
                    <div className={styles.relatedProductsGrid}>
                        {relatedProducts.map((relatedProduct) => (
                            <article key={relatedProduct.id} className={styles.relatedProductCard}>
                                <Link href={`/products/kee-safety/${relatedProduct.slug}`} className={styles.relatedProductLink}>
                                    <div className={styles.relatedProductImage}>
                                        <img
                                            src={relatedProduct.cardImage}
                                            alt={`${relatedProduct.name} - ${relatedProduct.category}`}
                                            loading="lazy"
                                        />
                                    </div>
                                    <h3 className={styles.relatedProductName}>{relatedProduct.name}</h3>
                                    <p className={styles.relatedProductCategory}>{relatedProduct.cardProperty}</p>
                                    <p className={styles.relatedProductDesc}>{relatedProduct.cardDescription}</p>
                                    <span className={styles.viewProductLink}>View product</span>
                                    <div className={styles.relatedProductBorder}></div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}