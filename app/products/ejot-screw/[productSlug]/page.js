'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import {
  ejotScrewData,
  getEjotProductBySlug,
  getEjotRelatedProducts
} from '../../data/companyProducts/ejotScrew';
import styles from './styles.module.css';

export default function EjotProductDetailPage() {
  const params = useParams();
  const { productSlug } = params;

  // Get current product
  const product = getEjotProductBySlug(productSlug);

  // Get related products (limit to 3)

  let relatedProducts = getEjotRelatedProducts(product.id);

  // If no related products, show other products (exclude current)
  if (relatedProducts.length === 0) {
    relatedProducts = ejotScrewData.products
      .filter((p) => p.id !== product.id)
      .slice(0, 3);
  } else {
    relatedProducts = relatedProducts.slice(0, 3);
  }

  if (!product) {
    return (
      <>
        <Header />
        <Logo />
        <main className={styles.errorPage}>
          <h1>Product not found</h1>
          <Link href="/products/ejot-screw">Back to EJOT Products</Link>
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

        {/* EJOT Logo */}
        <div className={styles.ejotLogoSection}>
          <img
            src="/images/products/logo_ejot.png"
            alt="EJOT"
            className={styles.ejotLogo}
            loading="lazy"
          />
        </div>

        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/products" className={styles.breadcrumbLink}>
            Products
          </Link>
          <span className={styles.breadcrumbArrow} aria-hidden="true">›</span>
          <Link href="/products/ejot-screw" className={styles.breadcrumbLink}>
            Ejot
          </Link>
          <span className={styles.breadcrumbArrow} aria-hidden="true">›</span>
          <span className={styles.breadcrumbCurrent}>{product.name}</span>
        </nav>

        {/* Product Detail Section */}
        <div className={styles.productDetailSection}>

          {/* Left: Product Image */}
          <div className={styles.productImageContainer}>
            <img
              src={product.image}
              alt={`${product.name} - ${product.category}`}
              className={styles.productMainImage}
              loading="lazy"
            />
          </div>

          {/* Right: Product Information */}
          <div className={styles.productInfo}>

            {/* Product Title */}
            <h1 className={styles.productTitle}>
              EJOT® self-tapping screw {product.name}
            </h1>

            {/* Product Category */}
            <p className={styles.productCategory}>self-tapping screw</p>

            {/* Use Case */}
            <div className={styles.simpleList}>
              {Array.isArray(product.useCase) ? (
                product.useCase.map((item, index) => (
                  <p key={index} className={styles.productUseCase}>
                    {item}
                  </p>
                ))
              ) : (
                <p className={styles.productUseCase}>{product.useCase}</p>
              )}
            </div>

            {/* Divider Line */}
            <div className={styles.dividerLine} role="separator"></div>

            {/* Properties Section */}
            {product.properties && product.properties.length > 0 && (
              <>
                <div className={styles.infoSection}>
                  <h2 className={styles.sectionTitle}>Properties</h2>
                  <div className={styles.simpleList}>
                    {product.properties.map((property, index) => (
                      <p key={index} className={styles.listItem}>{property}</p>
                    ))}
                  </div>
                </div>
                <div className={styles.dividerLine} role="separator"></div>
              </>
            )}

            {/* Technical Specifications */}
            {product.technicalSpecifications && product.technicalSpecifications.length > 0 && (
              <>
                <div className={styles.infoSection}>
                  <h2 className={styles.sectionTitle}>Technical specifications</h2>
                  <ul className={styles.bulletList}>
                    {product.technicalSpecifications.map((spec, index) => (
                      <li key={index} className={styles.bulletItem}>{spec}</li>
                    ))}
                  </ul>
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
                          {brochure.size && <span className={styles.downloadSize}> ({brochure.size})</span>}
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
                <Link href={`/products/ejot-screw/${relatedProduct.slug}`} className={styles.relatedProductLink}>
                  <div className={styles.relatedProductImage}>
                    <img
                      src={relatedProduct.image}
                      alt={`${relatedProduct.name} - ${relatedProduct.category}`}
                      loading="lazy"
                    />
                  </div>
                  <h3 className={styles.relatedProductName}>{relatedProduct.name}</h3>
                  <p className={styles.relatedProductCategory}>self-tapping screw</p>
                  <p className={styles.relatedProductDesc}>{relatedProduct.cardDescription}</p>
                  <span className={styles.viewProductLink}>View product</span>
                  <div className={styles.relatedProductBorder}></div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Bottom Content Section */}
        <section className={styles.bottomContent}>
          <h2 className={styles.bottomTitle}>Self-tapping Screws</h2>

          <h3 className={styles.bottomSubtitle}>
            Wide application range: For components made of steel, timber, aluminium
          </h3>

          <p className={styles.bottomDescription}>
            The JA3/JB3/JZ3 screws are made of high-quality A2 stainless steel and are suitable for steel, aluminium and timber components.
          </p>

          <h3 className={styles.bottomSubtitle}>
            To avoid that your building projects take a bath: The EJOT® CORREMAKS JA1/JZ1 for highly corrosive environments
          </h3>

          <p className={styles.bottomDescription}>
            You are looking for a fastening solution for indoor swimming pools or chemical plants? The JA/JZ1 self-tapping screws are the reliable experts when it comes to building projects in highly corrosive environments. The JA1/JZ1 feature the material class stainless steel HCR ® 1.4529 and thus have the highest corrosion-protection class.
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}