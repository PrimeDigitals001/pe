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

  // Get current product
  const product = getProductBySlug(productSlug);
  const [selectedImage, setSelectedImage] = useState(product?.image);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
  }, [product]);

  // Get related products (limit to 3)
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
            
            {/* Gallery Thumbnails - if any (Future proofing) */}
            {product.galleryImages && product.galleryImages.length > 0 && (
              <div className={styles.galleryThumbnails}>
                {product.galleryImages.slice(0, 3).map((img, index) => (
                  <div 
                    key={index} 
                    className={`${styles.thumbnailWrapper} ${selectedImage === img ? styles.activeThumbnail : ''}`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img} alt={`View ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Information */}
          <div className={styles.productInfo}>
            
            {/* Product Title */}
            <h1 className={styles.productTitle}>
              {product.name}
            </h1>

            {/* Product Category */}
            <p className={styles.productCategory}>{product.category}</p>

            {/* Application Long Description */}
            <div className={styles.productLongDesc}>
              <p>{product.longDescription}</p>
            </div>

            {/* Divider Line */}
            <div className={styles.dividerLine} role="separator"></div>

            {/* Specifications - Object Iteration */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <>
                <div className={styles.infoSection}>
                  <h2 className={styles.sectionTitle}>Specifications</h2>
                  <div className={styles.sizesTable}>
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <div key={index} className={styles.sizeRow}>
                        <span className={styles.sizeLabel}>
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                        </span>
                        <span className={styles.sizeValue}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.dividerLine} role="separator"></div>
              </>
            )}

            {/* Applications */}
            {product.applications && product.applications.length > 0 && (
              <>
                <div className={styles.infoSection}>
                  <h2 className={styles.sectionTitle}>Applications</h2>
                  <ul className={styles.bulletList}>
                    {product.applications.map((app, index) => (
                      <li key={index} className={styles.bulletItem}>{app}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.dividerLine} role="separator"></div>
              </>
            )}

            {/* Color Range */}
            {product.colorRange && (
              <>
                <div className={styles.infoSection}>
                  <h2 className={styles.sectionTitle}>Color Range</h2>
                  <div className={styles.simpleList}>
                    <p className={styles.listItem} style={{ fontWeight: 600 }}>{product.colorRange.description}</p>
                    <p className={styles.listItem} style={{ fontSize: '0.9em', opacity: 0.8 }}>
                      {product.colorRange.colors.join(', ')}
                    </p>
                    {product.colorRange.note && (
                      <p className={styles.noteText}>Note: {product.colorRange.note}</p>
                    )}
                  </div>
                </div>
                <div className={styles.dividerLine} role="separator"></div>
              </>
            )}

            {/* Brochure Download */}
            {product.brochure && (
              <div className={styles.infoSection}>
                <h2 className={styles.sectionTitle}>Brochure</h2>
                <div className={styles.downloadList}>
                  <a
                    href={product.brochure}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.downloadLink}
                    aria-label={`Download brochure for ${product.name}`}
                  >
                    <svg className={styles.downloadIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 3V16M12 16L7 11M12 16L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 17V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span className={styles.downloadText}>
                      <span className={styles.downloadName}>Download Product Brochure</span>
                    </span>
                  </a>
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
                <Link href={`/products/tata-bluescope/${relatedProduct.slug}`} className={styles.relatedProductLink}>
                  <div className={styles.relatedProductImage}>
                    <img 
                      src={relatedProduct.image}
                      alt={`${relatedProduct.name} - ${relatedProduct.onelinerDescription}`}
                      loading="lazy"
                    />
                  </div>
                  <h3 className={styles.relatedProductName}>{relatedProduct.name}</h3>
                  <p className={styles.relatedProductDesc}>{relatedProduct.onelinerDescription}</p>
                  <span className={styles.viewProductLink}>View product</span>
                  <div className={styles.relatedProductBorder}></div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Bottom Note */}
        {product.note && (
          <section className={styles.bottomContent}>
            <p className={styles.bottomDescription} style={{ fontSize: '0.9em', fontStyle: 'italic' }}>
              * {product.note}
            </p>
          </section>
        )}

      </main>

      <Footer />
    </>
  );
}
