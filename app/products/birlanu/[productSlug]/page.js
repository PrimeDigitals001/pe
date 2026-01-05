'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import { 
  birlanuData, 
  getBirlanuProductBySlug,
  getBirlanuRelatedProducts 
} from '../../data/companyProducts/birlanu';
import styles from './styles.module.css';

export default function BirlanuProductDetailPage() {
  const params = useParams();
  const { productSlug } = params;

  // Get current product
  const product = getBirlanuProductBySlug(productSlug);

  const [selectedImage, setSelectedImage] = useState(product?.image);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
  }, [product]);

  // Get related products (limit to 3)
  const relatedProducts = product?.relatedProducts 
    ? getBirlanuRelatedProducts(product.id).slice(0, 3)
    : birlanuData.products.filter(p => p.id !== product?.id).slice(0, 3);

  if (!product) {
    return (
      <>
        <Header />
        <Logo />
        <main className={styles.errorPage}>
          <h1>Product not found</h1>
          <Link href="/products/birlanu">Back to Birlanu Products</Link>
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
        
        {/* Birlanu Logo */}
        <div className={styles.logoSection}>
          <img 
            src={birlanuData.companyInfo.logo}
            alt={birlanuData.companyInfo.name}
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
          <Link href="/products/birlanu" className={styles.breadcrumbLink}>
            Birlanu
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
                alt={`${product.name} - ${product.category}`}
                className={styles.productMainImage}
                loading="lazy"
              />
            </div>
            
            {/* Gallery Thumbnails */}
            {product.galleryImages && product.galleryImages.length > 0 && (
              <div className={styles.galleryThumbnails}>
                {/* Include main image as first thumbnail if desired, or just extra images */}

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
            <p className={styles.productCategory}>{product.pageCategory || product.category}</p>

            {/* Short Description */}
            <p className={styles.productShortDesc}>
              {product.longDescription}
            </p>

            {/* Divider Line */}
            <div className={styles.dividerLine} role="separator"></div>

            {/* Sizes / SKUs Available */}
            {product.sizes && product.sizes.length > 0 && (
              <>
                <div className={styles.infoSection}>
                  <h2 className={styles.sectionTitle}>Sizes / SKUs Available</h2>
                  <div className={styles.simpleList}>
                    {product.sizes.map((size, index) => (
                      <p key={index} className={styles.listItem}>{size}</p>
                    ))}
                  </div>
                </div>
                <div className={styles.dividerLine} role="separator"></div>
              </>
            )}

            {/* Standards & Specifications */}
            {product.standards && product.standards.length > 0 && (
              <>
                <div className={styles.infoSection}>
                  <h2 className={styles.sectionTitle}>Standards & Specifications</h2>
                  <ul className={styles.bulletList}>
                    {product.standards.map((standard, index) => (
                      <li key={index} className={styles.bulletItem}>{standard}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.dividerLine} role="separator"></div>
              </>
            )}

            {/* Application / Area of Usage */}
            {product.applications && product.applications.length > 0 && (
              <>
                <div className={styles.infoSection}>
                  <h2 className={styles.sectionTitle}>Application / Area of Usage</h2>
                  <div className={styles.simpleList}>
                    {product.applications.map((application, index) => (
                      <p key={index} className={styles.listItem}>{application}</p>
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
                          <path d="M12 3V16M12 16L7 11M12 16L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3 17V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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

        {/* Features Section */}
        {product.features && product.features.length > 0 && (
          <section className={styles.featuresSection}>
            <h2 className={styles.featuresSectionTitle}>Features</h2>
            
            <div className={styles.featuresGrid}>
              {product.features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <img src={feature.icon} alt={feature.title} className={styles.featureIcon} />
                  <p className={styles.featureText}>{feature.title}</p>
                </div>
              ))}
            </div>

            <div className={styles.sectionDivider}></div>

            {/* Benefits Section */}
            {product.benefits && product.benefits.length > 0 && (
              <>
                <h2 className={styles.featuresSectionTitle}>Benefits</h2>

                <div className={styles.benefitsGrid}>
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className={styles.benefitItem}>
                      <img src={benefit.icon} alt={benefit.title} className={styles.benefitIcon} />
                      <p className={styles.benefitText} dangerouslySetInnerHTML={{ __html: benefit.title.replace(/\n/g, '<br />') }}></p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </section>
        )}

        {/* Further Products Section */}
        <section className={styles.furtherProductsSection}>
          <h2 className={styles.furtherProductsTitle}>Further Products</h2>
          <div className={styles.furtherProductsDivider} role="separator"></div>

          {/* Related Products Grid */}
          <div className={styles.relatedProductsGrid}>
            {relatedProducts.map((relatedProduct) => (
              <article key={relatedProduct.id} className={styles.relatedProductCard}>
                <Link href={`/products/birlanu/${relatedProduct.slug}`} className={styles.relatedProductLink}>
                  <div className={styles.relatedProductImage}>
                    <img 
                      src={relatedProduct.image}
                      alt={`${relatedProduct.name} - ${relatedProduct.category}`}
                      loading="lazy"
                    />
                  </div>
                  <h3 className={styles.relatedProductName}>{relatedProduct.name}</h3>
                  <p className={styles.relatedProductCategory}>{relatedProduct.category}</p>
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
          <h2 className={styles.bottomTitle}>
            {product.bottomSectionTitle || 'Wide application range'}
          </h2>

          <p className={styles.bottomDescription}>
            {product.longDescription || birlanuData.companyInfo.description}
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}