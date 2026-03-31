'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import EnquireModal from '@/components/EnquireModal';
import { getChemicalBySlug } from '../../data/companyProducts/chemicals';
import styles from './styles.module.css';

export default function ChemicalProductDetailPage() {
    const params = useParams();
    const { productSlug } = params;

    const product = getChemicalBySlug(productSlug);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [enquiryProduct, setEnquiryProduct] = useState(null);

    const openEnquiryModal = (p) => { setEnquiryProduct(p); setIsModalOpen(true); };
    const closeEnquiryModal = () => setIsModalOpen(false);

    if (!product) {
        return (
            <>
                <Header />
                <Logo />
                <main className={styles.errorPage}>
                    <h1>Product not found</h1>
                    <Link href="/products/chemicals">Back to Chemicals</Link>
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

            <EnquireModal
                isOpen={isModalOpen}
                onClose={closeEnquiryModal}
                product={enquiryProduct}
                companyName="Patel Enterprise"
            />

            <main className={styles.productPage}>

                {/* ── Breadcrumb ── */}
                <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                    <Link href="/products" className={styles.breadcrumbLink}>Products</Link>
                    <span className={styles.breadcrumbArrow} aria-hidden="true">›</span>
                    <Link href="/products/chemicals" className={styles.breadcrumbLink}>Chemicals</Link>
                    <span className={styles.breadcrumbArrow} aria-hidden="true">›</span>
                    <span className={styles.breadcrumbCurrent}>{product.name}</span>
                </nav>

                {/* ── Product Detail Section ── */}
                <div className={styles.productDetailSection}>

                    {/* LEFT: Product Image */}
                    <div className={styles.productImageSection}>
                        <div className={styles.mainImageContainer}>
                            <img
                                src={product.detailImage || product.cardImage}
                                alt={product.name}
                                className={styles.mainImage}
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* RIGHT: Product Information */}
                    <div className={styles.productInfo}>

                        {/* Category tag */}
                        <span className={styles.categoryTag}>{product.category}</span>

                        {/* Product Title */}
                        <h1 className={styles.productTitle}>
                            {product.name}
                            {product.tradeName && (
                                <span className={styles.tradeName}> ({product.tradeName})</span>
                            )}
                        </h1>

                        {/* Formula */}
                        <p className={styles.formula}>{product.formula}</p>

                        <div className={styles.dividerLine}></div>

                        {/* Applications & Industries — only section shown */}
                        <div className={styles.infoSection}>
                            <h2 className={styles.sectionTitle}>Applications & Industries</h2>
                            <div className={styles.applicationsList}>
                                {product.applications.map((app, index) => (
                                    <div key={index} className={styles.applicationItem}>
                                        <div className={styles.applicationIndustry}>
                                            <span className={styles.applicationDot} aria-hidden="true"></span>
                                            {app.industry}
                                        </div>
                                        <p className={styles.applicationDetail}>{app.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Brochures — only renders if brochures exist */}
                        {product.brochures.length > 0 && (
                            <>
                                <div className={styles.dividerLine}></div>
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
                            </>
                        )}

                        {/* Enquire Button */}
                        <div className={styles.dividerLine}></div>
                        <button
                            className={styles.enquireButton}
                            onClick={() => openEnquiryModal(product)}
                            aria-label={`Enquire about ${product.name}`}
                        >
                            Enquire now
                        </button>

                    </div>
                </div>

            </main>

            <Footer />
        </>
    );
}