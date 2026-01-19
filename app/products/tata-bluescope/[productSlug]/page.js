// app/products/tata-bluescope/[productSlug]/page.js

'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import {
  tataBluescopeData,
  getProductBySlug,
  getRelatedProducts
} from '../../data/companyProducts/tataBlueScope';
import styles from './styles.module.css';

export default function TataBluescopeProductDetailPage() {
  const params = useParams();
  const { productSlug } = params;

  const product = getProductBySlug(productSlug);
  const [selectedImage, setSelectedImage] = useState(product?.image);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
  }, [product]);

  const relatedProducts = getRelatedProducts(productSlug, 3);

  if (!product) {
    return (
      <>
        <Header />
        <Logo />
        <main className={styles.errorPage}>
          <h1>Product not found</h1>
          <Link href="/products/tata-bluescope">Back to Tata BlueScope Products</Link>
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
            src={tataBluescopeData.companyInfo.logo}
            alt={tataBluescopeData.companyInfo.name}
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
          <Link href="/products/tata-bluescope" className={styles.breadcrumbLink}>
            Tata BlueScope
          </Link>
          <span className={styles.breadcrumbArrow} aria-hidden="true">›</span>
          <span className={styles.breadcrumbCurrent}>{product.name}</span>
        </nav>

        {/* Product Detail Section */}
        <div className={styles.productDetailSection}>

          {/* Left: Product Image */}
          <div className={styles.productImageContainer}>
            <div className={styles.mainImageWrapper}>
              <img
                src={selectedImage || product.image}
                alt={`${product.name} - ${product.onelinerDescription}`}
                className={styles.productMainImage}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Product Information */}
          <div className={styles.productInfo}>

            {/* Product Title - 36px SemiBold #2666AF */}
            <h1 className={styles.productTitle}>
              {product.name}
            </h1>

            {/* Oneliner Description - 18px Bold Black */}
            <p className={styles.productOneliner}>
              {product.onelinerDescription}
            </p>

            {/* Long Description - 18px Medium 60% opacity */}
            <div className={styles.productLongDesc}>
              <p>{product.longDescription}</p>
            </div>

            {/* Divider Line */}
            <div className={styles.dividerLine} role="separator"></div>

            {/* Specifications - Text Based */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <>
                <div className={styles.infoSection}>
                  <h2 className={styles.sectionTitle}>Specifications</h2>
                  <div className={styles.specificationsList}>
                    {Array.isArray(product.specifications) ? (
                      product.specifications.map((spec, index) => (
                        <p key={index} className={styles.specificationText}>{spec}</p>
                      ))
                    ) : (
                      Object.entries(product.specifications).map(([key, value], index) => (
                        <p key={index} className={styles.specificationText}>
                          <strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> {value}
                        </p>
                      ))
                    )}
                  </div>
                </div>
                <div className={styles.dividerLine} role="separator"></div>
              </>
            )}

            {/* Applications - Text Based */}
            {product.applications && product.applications.length > 0 && (
              <>
                <div className={styles.infoSection}>
                  <h2 className={styles.sectionTitle}>Application / Area of Usage</h2>
                  <div className={styles.applicationsList}>
                    <p className={styles.applicationsText}>
                      {product.applications.join(', ')}
                    </p>
                  </div>
                </div>
                <div className={styles.dividerLine} role="separator"></div>
              </>
            )}


            {/* Brochure Download */}
            {product.brochure && (
              <>
                <div className={styles.infoSection}>
                  <h2 className={styles.sectionTitle}>Brochure</h2>
                  <a
                    href={product.brochure}
                    download
                    className={styles.brochureLink}
                    aria-label={`Download brochure for ${product.name}`}
                  >
                    <svg className={styles.downloadIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 3V16M12 16L7 11M12 16L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 17V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className={styles.brochureText}>
                      <span className={styles.brochureFileName}>{product.brochureFileName || `${product.name}`}</span>
                      {' '}
                      <span className={styles.brochureFileSize}>{product.brochureFileSize || '100KB'}</span>
                    </span>
                  </a>
                </div>
                <div className={styles.dividerLine} role="separator"></div>
              </>
            )}


            {/* Standard Color Range - Color Blocks */}
            {product.colorRange && product.colorRange.colors && (
              <>
                <div className={styles.infoSection}>
                  <h2 className={styles.sectionTitle}>Standard Colour Range</h2>

                  {/* Color Blocks Grid */}
                  <div className={styles.colorBlocksGrid}>
                    {product.colorRange.colors.map((color, index) => (
                      <div key={index} className={styles.colorBlock}>
                        {color.image ? (
                          // Zincalume Steel - Image version
                          <div className={styles.colorSwatchImage}>
                            <img
                              src={color.image}
                              alt={`${color.name} (SRI-${color.sri})`}
                              className={styles.colorImage}
                            />
                            <span className={styles.colorNameInside}>
                              {color.name}
                              <br />
                              (SRI-{color.sri})
                            </span>
                          </div>
                        ) : (
                          // Regular color blocks
                          <div
                            className={styles.colorSwatch}
                            style={{ backgroundColor: color.hex }}
                            aria-label={`${color.name} (SRI-${color.sri})`}
                          >
                            <span className={styles.colorNameInside}>
                              {color.name}
                              <br />
                              (SRI-{color.sri})
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {/* NO divider line after colors */}
              </>
            )}

            {/* Product Note - Comes after colors, before button */}
            {product.note && (
              <div className={styles.productNoteSection}>
                <p className={styles.productNote}>
                  Note: {product.note}
                </p>
              </div>
            )}

            {/* Enquire Now Button */}
            <button
              className={styles.enquireButton}
              aria-label="Enquire about this product"
              onClick={() => {
                window.location.href = '/contact';
              }}
            >
              Enquire now
            </button>
          </div>
        </div>

        {/* Further Products Section */}
        {relatedProducts.length > 0 && (
          <section className={styles.furtherProductsSection}>
            <h2 className={styles.furtherProductsTitle}>Further Products</h2>
            <div className={styles.furtherProductsDivider} role="separator"></div>

            {/* Related Products Grid */}
            <div className={styles.relatedProductsGrid}>
              {relatedProducts.map((relatedProduct) => (
                <article key={relatedProduct.id} className={styles.relatedProductCard}>
                  <Link href={`/products/tata-bluescope/${relatedProduct.slug}`} className={styles.relatedProductLink}>
                    <div className={styles.relatedProductImage}>
                      <img
                        src={relatedProduct.image}
                        alt={`${relatedProduct.name} - ${relatedProduct.onelinerDescription}`}
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

