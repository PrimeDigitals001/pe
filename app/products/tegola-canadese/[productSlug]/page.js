'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import EnquireModal from '@/components/EnquireModal';
import {
    tegolaData,
    getTegolaProductBySlug,
    getTegolaRelatedProducts
} from '../../data/dataService';
import styles from './styles.module.css';

export default function TegolaProductDetailPage() {
    const params = useParams();
    const { productSlug } = params;

    // ── Modal state ──
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [enquiryProduct, setEnquiryProduct] = useState(null);

    const openEnquiryModal = (p) => { setEnquiryProduct(p); setIsModalOpen(true); };
    const closeEnquiryModal = () => setIsModalOpen(false);

    const product = getTegolaProductBySlug(productSlug);
    const [selectedImage, setSelectedImage] = useState(product?.image);

    useEffect(() => {
        if (product) {
            setSelectedImage(product.image);
        }
    }, [product]);

    const relatedProducts = product ? getTegolaRelatedProducts(product.id) : [];

    if (!product) {
        return (
            <>
                <Header />
                <Logo />
                <main className={styles.errorPage}>
                    <h1>Product not found</h1>
                    <Link href="/products/tegola-canadese">Back to Tegola Canadese Products</Link>
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

            {/* ── Enquire Modal ── */}
            <EnquireModal
                isOpen={isModalOpen}
                onClose={closeEnquiryModal}
                product={enquiryProduct}
                companyName={tegolaData.companyInfo.name}
            />

            <main className={styles.productPage}>

                {/* Company Logo */}
                <div className={styles.logoSection}>
                    <img
                        src={tegolaData.companyInfo.logo}
                        alt={tegolaData.companyInfo.name}
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
                    <Link href="/products/tegola-canadese" className={styles.breadcrumbLink}>
                        Tegola Canadese
                    </Link>
                    <span className={styles.breadcrumbArrow} aria-hidden="true">›</span>
                    <span className={styles.breadcrumbCurrent}>{product.name}</span>
                </nav>

                {/* Product Detail Section */}
                <div className={styles.productDetailSection}>

                    {/* Left: Product Images */}
                    <div className={styles.productImageContainer}>
                        <div className={styles.mainImageWrapper}>
                            <img
                                src={selectedImage || product.image}
                                alt={product.name}
                                className={styles.productMainImage}
                                loading="lazy"
                            />
                        </div>
                        {product.galleryImages && product.galleryImages.length > 0 && (
                            <div className={styles.galleryGrid}>
                                {product.galleryImages.slice(1, 4).map((img, index) => (
                                    <button
                                        key={index}
                                        className={`${styles.galleryThumb} ${selectedImage === img ? styles.galleryThumbActive : ''}`}
                                        onClick={() => setSelectedImage(img)}
                                        aria-label={`View image ${index + 1}`}
                                    >
                                        <img src={img} alt={`${product.name} view ${index + 1}`} loading="lazy" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Product Information */}
                    <div className={styles.productInfo}>

                        {/* Product Title */}
                        <h1 className={styles.productTitle}>{product.name}</h1>

                        {/* Technical Specifications */}
                        {product.kpiSpecs && product.kpiSpecs.length > 0 && (
                            <div className={styles.kpiSpecsList}>
                                {product.kpiSpecs.map((spec, index) => (
                                    <p key={index} className={styles.kpiSpecRow}>
                                        <span className={styles.kpiLabel}>{spec.label} - </span>
                                        <span className={styles.kpiValue}>{spec.value}</span>
                                    </p>
                                ))}
                            </div>
                        )}

                        {/* Brochures */}
                        {product.brochures && product.brochures.length > 0 && (
                            <div className={styles.brochureSection}>
                                {product.brochures.map((brochure, index) => (
                                    <a
                                        key={index}
                                        href={brochure.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.brochureLink}
                                        aria-label={`Download ${brochure.text}`}
                                    >
                                        <svg className={styles.downloadIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <path d="M12 3V16M12 16L7 11M12 16L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3 17V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <span className={styles.brochureTextGroup}>
                                            <span className={styles.brochureFileName}>{brochure.text}</span>
                                            {' '}
                                            <span className={styles.brochureFileSize}>{brochure.size}</span>
                                        </span>
                                    </a>
                                ))}
                            </div>
                        )}

                        {/* Enquire Now Button */}
                        <button
                            className={styles.enquireButton}
                            aria-label={`Enquire about ${product.name}`}
                            onClick={() => openEnquiryModal(product)}
                        >
                            Enquire now
                        </button>

                        {/* Standard Colour Range */}
                        {product.colorRange && product.colorRange.length > 0 && (
                            <>
                                <div className={styles.dividerLine} role="separator"></div>
                                <div className={styles.colorRangeSection}>
                                    <h2 className={styles.sectionTitle}>Standard Colour Range</h2>
                                    <div className={styles.colorBlocksGrid}>
                                        {product.colorRange.map((color, index) => (
                                            <div key={index} className={styles.colorBlock}>
                                                <div className={styles.colorSwatchImage}>
                                                    <img
                                                        src={color.image}
                                                        alt={color.name}
                                                        className={styles.colorImage}
                                                    />
                                                    <span className={styles.colorNameInside}>
                                                        {color.name}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                    </div>
                </div>

                {/* Features Section */}
                {product.features && product.features.length > 0 && (
                    <section className={styles.featuresSection}>
                        <h2 className={styles.featuresTitle}>Features</h2>
                        <div className={styles.featuresGrid}>
                            {product.features.map((feature, idx) => (
                                <div key={idx} className={styles.featureCard}>
                                    <div className={styles.featureIconWrapper}>
                                        <img
                                            src={feature.icon}
                                            alt="Feature icon"
                                            className={styles.featureIcon}
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p className={styles.featureText}>{feature.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.featuresDivider} role="separator"></div>
                    </section>
                )}

                {/* Bottom Description */}
                {(product.longDescription || product.cardDescription) && (
                    <div className={styles.bottomDescription}>
                        <p>{product.longDescription || product.cardDescription}</p>
                    </div>
                )}

            </main>

            <Footer />
        </>
    );
}