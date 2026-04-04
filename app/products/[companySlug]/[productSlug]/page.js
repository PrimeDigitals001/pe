'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import EnquireModal from '@/components/EnquireModal';
import { getProductsData, getGenericCompanyData, getGenericCompanyProductBySlug } from '../../data/dataService';
import { slugToCompanyKey } from '../../../admin/utils/schemaRegistry';
import styles from './styles.module.css';

export default function GenericProductDetailPage() {
    const params = useParams();
    const { companySlug, productSlug } = params;
    const companyKey = slugToCompanyKey(companySlug);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [enquiryProduct, setEnquiryProduct] = useState(null);

    const openEnquiryModal = (p) => { setEnquiryProduct(p); setIsModalOpen(true); };
    const closeEnquiryModal = () => setIsModalOpen(false);

    // Look up company from registry
    const registry = getProductsData();
    const companyEntry = registry.find((c) => c.slug === companySlug);
    const companyData = getGenericCompanyData(companyKey);
    const companyName = companyData.companyInfo?.name || companyEntry?.name || companySlug;

    const product = getGenericCompanyProductBySlug(companyKey, productSlug);

    if (!product) {
        return (
            <>
                <Header />
                <Logo />
                <main className={styles.errorPage}>
                    <h1>Product not found</h1>
                    <Link href={`/products/${companySlug}`}>Back to {companyName}</Link>
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
                companyName={companyName}
            />

            <main className={styles.productPage}>

                {/* Breadcrumb */}
                <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                    <Link href="/products" className={styles.breadcrumbLink}>Products</Link>
                    <span className={styles.breadcrumbArrow} aria-hidden="true">›</span>
                    <Link href={`/products/${companySlug}`} className={styles.breadcrumbLink}>{companyName}</Link>
                    <span className={styles.breadcrumbArrow} aria-hidden="true">›</span>
                    <span className={styles.breadcrumbCurrent}>{product.name}</span>
                </nav>

                {/* Product Detail Section */}
                <div className={styles.productDetailSection}>

                    {/* LEFT: Product Image */}
                    <div className={styles.productImageSection}>
                        <div className={styles.mainImageContainer}>
                            {product.image && (
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className={styles.mainImage}
                                    loading="lazy"
                                />
                            )}
                        </div>
                    </div>

                    {/* RIGHT: Product Information */}
                    <div className={styles.productInfo}>

                        {/* Category tag */}
                        {product.category && (
                            <span className={styles.categoryTag}>{product.category}</span>
                        )}

                        {/* Product Title */}
                        <h1 className={styles.productTitle}>{product.name}</h1>

                        <div className={styles.dividerLine}></div>

                        {/* Description */}
                        {(product.longDescription || product.cardDescription) && (
                            <>
                                <div className={styles.infoSection}>
                                    <h2 className={styles.sectionTitle}>Description</h2>
                                    <p className={styles.sectionContent}>{product.longDescription || product.cardDescription}</p>
                                </div>
                                <div className={styles.dividerLine}></div>
                            </>
                        )}

                        {/* Sizes / SKUs */}
                        {product.sizes && product.sizes.length > 0 && (
                            <>
                                <div className={styles.infoSection}>
                                    <h2 className={styles.sectionTitle}>Sizes / SKUs Available</h2>
                                    <div className={styles.simpleList}>
                                        {product.sizes.map((size, index) => (
                                            <div key={index} className={styles.listItem}>
                                                <span className={styles.listDot} aria-hidden="true"></span>
                                                <span>{size}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.dividerLine}></div>
                            </>
                        )}

                        {/* Specifications */}
                        {product.specifications && product.specifications.length > 0 && (
                            <>
                                <div className={styles.infoSection}>
                                    <h2 className={styles.sectionTitle}>Specifications</h2>
                                    <div className={styles.simpleList}>
                                        {product.specifications.map((spec, index) => (
                                            <div key={index} className={styles.listItem}>
                                                <span className={styles.listDot} aria-hidden="true"></span>
                                                <span>{spec}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.dividerLine}></div>
                            </>
                        )}

                        {/* Applications */}
                        {product.applications && product.applications.length > 0 && (
                            <>
                                <div className={styles.infoSection}>
                                    <h2 className={styles.sectionTitle}>Applications</h2>
                                    <div className={styles.simpleList}>
                                        {product.applications.map((app, index) => (
                                            <div key={index} className={styles.listItem}>
                                                <span className={styles.listDot} aria-hidden="true"></span>
                                                <span>{typeof app === 'string' ? app : app.industry || app.detail || ''}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.dividerLine}></div>
                            </>
                        )}

                        {/* Brochures */}
                        {product.brochures && product.brochures.length > 0 && (
                            <>
                                <div className={styles.infoSection}>
                                    <h2 className={styles.sectionTitle}>Brochure</h2>
                                    <div className={styles.downloadList}>
                                        {product.brochures.map((brochure, index) => {
                                            const isExternal = brochure.link?.startsWith('http');
                                            return (
                                                <a
                                                    key={index}
                                                    href={brochure.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.downloadLink}
                                                    {...(!isExternal ? { download: true } : {})}
                                                >
                                                    <svg className={styles.downloadIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                        <path d="M12 3V16M12 16L7 11M12 16L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M3 17V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                    <span className={styles.downloadText}>
                                                        <span className={styles.downloadName}>{brochure.text}</span>
                                                        {brochure.size && <span className={styles.downloadSize}> ({brochure.size})</span>}
                                                    </span>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className={styles.dividerLine}></div>
                            </>
                        )}

                        {/* Custom Info Fields */}
                        {product.customFields && product.customFields.length > 0 && product.customFields.map((field, index) => (
                            <React.Fragment key={`cf-${index}`}>
                                <div className={styles.infoSection}>
                                    <h2 className={styles.sectionTitle}>{field.title}</h2>
                                    <p className={styles.sectionContent}>{field.value}</p>
                                </div>
                                <div className={styles.dividerLine}></div>
                            </React.Fragment>
                        ))}

                        {/* Enquire Button */}
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
