'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import { ejotScrewData, getEjotProductsByType } from '../data/companyProducts/ejotScrew';
import styles from './styles.module.css';

export default function EjotScrewPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [selectedProductType, setSelectedProductType] = useState('All'); // ✅ NEW STATE

  // ✅ Filter products by BOTH category AND product type
  const getFilteredProducts = () => {
    let filtered = ejotScrewData.products;

    // First filter by category
    if (selectedCategory !== 'All Products') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Then filter by product type (J2/J3)
    if (selectedProductType !== 'All') {
      const typeCode = selectedProductType.split(' ')[0]; // 'J2 Type' → 'J2'
      filtered = filtered.filter(p => p.productType === typeCode);
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <>
      <Header />
      <Logo />
      <FloatingQuoteButton />

      <main className={styles.ejotPage}>

        {/* EJOT Logo */}
        <div className={styles.ejotLogoSection}>
          <img
            src={ejotScrewData.companyInfo.logo}
            alt={ejotScrewData.companyInfo.name}
            className={styles.ejotLogo}
            loading="lazy"
          />
        </div>

        {/* Page Title */}
        <h1 className={styles.pageTitle}>Self-tapping Screws</h1>

        {/* Description */}
        <div className={styles.descriptionSection}>
          <p className={styles.description}>
            The EJOT self-tapping screws form the thread in a pre-drilled hole. They feature a coarse or fine pitch thread. At the bottom of the screw, there is a dog point or a rolled point, depending on the application. The self-tapping screws are completed by an optional pre-assembled sealing washer.{' '}
            <a
              href="https://www.ejot.com/c/SELF_TAPPING_SCREWS#Informationen"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.furtherInfoLink}
              aria-label="Further information about EJOT self-tapping screws"
            >
              » Further information
            </a>
          </p>
        </div>

        {/* Products Header with Filter */}
        <div className={styles.productsHeader}>
          <div className={styles.titleGroup}>
            <h2 className={styles.productsTitle}>Products</h2>
            <span className={styles.productsCount} aria-label={`${filteredProducts.length} products available`}>
              ({filteredProducts.length})
            </span>
          </div>

          <div className={styles.filterSection}>
            <label htmlFor="productTypeFilter" className={styles.filterLabel}>
              Filter by Type:
            </label>
            <div className={styles.selectWrapper}>
              <select
                id="productTypeFilter"
                value={selectedProductType}
                onChange={(e) => setSelectedProductType(e.target.value)}
                className={styles.filterDropdown}
                aria-label="Filter products by type"
              >
                {ejotScrewData.productTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <svg
                className={styles.dropdownArrow}
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                aria-hidden="true"
              >
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
        {/* Divider Line */}
        <div className={styles.dividerLine} role="separator"></div>



        {/* Products Grid */}
        <div className={styles.productsGrid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <article key={product.id} className={styles.productCard}>
                <Link href={`/products/ejot-screw/${product.slug}`} className={styles.productCardLink}>
                  {/* Product Image */}
                  <div className={styles.productImageWrapper}>
                    <img
                      src={product.image}
                      alt={`${product.name} - ${product.category}`}
                      className={styles.productImage}
                      loading="lazy"
                    />
                  </div>



                  {/* Product Name */}
                  <h3 className={styles.productName}>{product.name}</h3>

                  {/* Feature */}
                  <p className={styles.productFeature}>self-tapping screw</p>

                  {/* Product Description */}
                  <p className={styles.productDescription}>
                    {product.cardDescription}
                  </p>

                  {/* View Product CTA */}
                  <span className={styles.viewProductLink}>
                    View product
                  </span>

                  {/* Bottom Border */}
                  <div className={styles.cardBottomBorder}></div>
                </Link>
              </article>
            ))
          ) : (
            <div className={styles.noProducts}>
              <p>No products found matching your filters.</p>
            </div>
          )}
        </div>

        {/* Bottom Content Section */}
        <section className={styles.bottomContent}>

          {/* Section 1 */}
          <h2 className={styles.bottomTitle}>Self-tapping Screws</h2>

          <h3 className={styles.bottomSubtitle}>
            Wide application range: For components made of steel, timber, aluminium
          </h3>

          <p className={styles.bottomDescription}>
            The JA3/JB3/JZ3 screws are made of high-quality A2 stainless steel and are suitable for steel, aluminium and timber components.
          </p>

          {/* Section 2 */}
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