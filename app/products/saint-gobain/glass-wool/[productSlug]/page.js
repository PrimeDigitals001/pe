'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import { saintGobainData, getProductBySlug, getRelatedProducts } from '../../../data/companyProducts/saintGobain';
import styles from './styles.module.css';

export default function GlassWoolProductDetailPage() {
    const params = useParams();
    const { productSlug } = params;

    const product = getProductBySlug(productSlug);
    const relatedProducts = getRelatedProducts(productSlug, 3);

    if (!product) {
        return (
            <>
                <Header />
                <Logo />
                <main className={styles.errorPage}>
                    <h1>Product not found</h1>
                    <Link href="/products/saint-gobain/glass-wool">Back to Glass Wool Products</Link>
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

                {/* Company Logo Section */}
                <div className={styles.logoSection}>
                    <img
                        src={saintGobainData.companyInfo.logo}
                        alt={saintGobainData.companyInfo.name}
                        className={styles.companyLogo}
                        loading="lazy"
                    />
                </div>

                {/* Breadcrumb Navigation - Exactly like Tata */}
                <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                    <Link href="/products" className={styles.breadcrumbLink}>
                        Products
                    </Link>
                    <span className={styles.breadcrumbArrow} aria-hidden="true">›</span>
                    <Link href="/products/saint-gobain" className={styles.breadcrumbLink}>
                        Saint Gobain
                    </Link>
                    <span className={styles.breadcrumbArrow} aria-hidden="true">›</span>
                    <Link href="/products/saint-gobain/glass-wool" className={styles.breadcrumbLink}>
                        Glass Wool
                    </Link>
                    <span className={styles.breadcrumbArrow} aria-hidden="true">›</span>
                    <span className={styles.breadcrumbCurrent}>{product.name}</span>
                </nav>

                {/* Product Detail Section - Grid Layout like Tata */}
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
                        <h1 className={styles.productTitle}>
                            {product.name}
                        </h1>

                        {/* Oneliner / Type Label */}
                        <p className={styles.productOneliner}>
                            {product.type}
                        </p>

                        {/* Long Description */}
                        <div className={styles.productLongDesc}>
                            <p>{product.longDescription || product.cardDescription}</p>
                        </div>

                        {/* Divider Line */}
                        <div className={styles.dividerLine} role="separator"></div>

                        {/* Range Section */}
                        {product.range && product.range.length > 0 && (
                            <>
                                <div className={styles.infoSection}>
                                    <h2 className={styles.sectionTitle}>Range</h2>
                                    <div className={styles.infoList}>
                                        {product.range.map((item, index) => (
                                            <p key={index} className={styles.infoListItem}>{item}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.dividerLine} role="separator"></div>
                            </>
                        )}

                        {/* Facings Section */}
                        {product.facings && product.facings.length > 0 && product.facings[0] !== "N/A" && (
                            <>
                                <div className={styles.infoSection}>
                                    <h2 className={styles.sectionTitle}>Facings</h2>
                                    <div className={styles.infoList}>
                                        {product.facings.map((item, index) => (
                                            <p key={index} className={styles.infoListItem}>{item}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.dividerLine} role="separator"></div>
                            </>
                        )}

                        {/* Basic Information Section */}
                        {product.basicInformation && product.basicInformation.length > 0 && (
                            <>
                                <div className={styles.infoSection}>
                                    <h2 className={styles.sectionTitle}>Basic Information</h2>
                                    <div className={styles.infoList}>
                                        {product.basicInformation.map((item, index) => (
                                            <p key={index} className={styles.infoListItem}>{item}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.dividerLine} role="separator"></div>
                            </>
                        )}

                        {/* Brochure Section */}
                        {product.brochure && (
                            <div className={styles.infoSection}>
                                <h2 className={styles.sectionTitle}>Brochure</h2>
                                <a
                                    href={product.brochure}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.brochureLink}
                                    aria-label={`Download brochure for ${product.name}`}
                                >
                                    <svg className={styles.downloadIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path d="M12 3V16M12 16L7 11M12 16L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3 17V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    <span className={styles.brochureText}>
                                        <span className={styles.brochureFileName}>{product.brochureFileName}</span>
                                        {' '}
                                        <span className={styles.brochureFileSize}>{product.brochureFileSize}</span>
                                    </span>
                                </a>
                            </div>
                        )}

                        {/* Enquire Now Button */}
                        <button
                            className={styles.enquireButton}
                            onClick={() => {
                                window.location.href = '/contact';
                            }}
                        >
                            Enquire now
                        </button>
                    </div>
                </div>

                {/* Properties Section - 3 per line on desktop */}
                {product.properties && product.properties.length > 0 && (
                    <section className={styles.propertiesSection}>
                        <h2 className={styles.propertiesTitle}>Properties</h2>
                        <div className={styles.propertiesDivider} role="separator"></div>
                        <div className={styles.propertiesGrid}>
                            {product.properties.map((prop, index) => (
                                <div key={index} className={styles.propertyItem}>
                                    <img src={prop.icon} alt={prop.name} className={styles.propertyIcon} />
                                    <span className={styles.propertyName}>{prop.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Further Products Section - Matching Tata style */}
                {relatedProducts.length > 0 && (
                    <section className={styles.furtherProductsSection}>
                        <h2 className={styles.furtherProductsTitle}>Further Products</h2>
                        <div className={styles.furtherProductsDivider} role="separator"></div>

                        <div className={styles.relatedProductsGrid}>
                            {relatedProducts.map((relatedProduct) => (
                                <article key={relatedProduct.id} className={styles.relatedProductCard}>
                                    <Link href={`/products/saint-gobain/glass-wool/${relatedProduct.slug}`} className={styles.relatedProductLink}>
                                        <div className={styles.relatedProductImage}>
                                            <img
                                                src={relatedProduct.image}
                                                alt={relatedProduct.name}
                                                loading="lazy"
                                            />
                                        </div>
                                        <h3 className={styles.relatedProductName}>{relatedProduct.name}</h3>
                                        <p className={styles.relatedProductDesc}>{relatedProduct.cardDescription}</p>
                                        <span className={styles.viewProductLink}>View product</span>
                                        <div className={styles.relatedProductBorder}></div>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

            </main>

            <Footer />
        </>
    );
}
