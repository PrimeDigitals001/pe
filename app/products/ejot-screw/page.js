'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import { ejotScrewData } from '../data/companyProducts/ejotScrew';
import styles from './styles.module.css';

export default function EjotScrewPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  // Filter products by category
  const filteredProducts = selectedCategory === 'All Products'
    ? ejotScrewData.products
    : ejotScrewData.products.filter(p => p.category === selectedCategory);

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
            >
              » Further information
            </a>
          </p>
        </div>

        {/* Products Header */}
        <div className={styles.productsHeader}>
          <h2 className={styles.productsTitle}>Products</h2>
          <span className={styles.productsCount}>{ejotScrewData.products.length}</span>
        </div>

        {/* Divider Line */}
        <div className={styles.dividerLine}></div>

        {/* Products Grid */}
        <div className={styles.productsGrid}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              
              {/* Product Image */}
              <div className={styles.productImageWrapper}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={styles.productImage}
                />
              </div>

              {/* Product Name */}
              <h3 className={styles.productName}>{product.name}</h3>

              {/* Feature (self-tapping screw) */}
              <p className={styles.productFeature}>self-tapping screw</p>

              {/* Product Description */}
              <p className={styles.productDescription}>
  {product.cardDescription}  {/* ← Changed from product.useCase */}
</p>

              {/* View Product Link */}
              <Link 
                href={`/products/ejot-screw/${product.slug}`}
                className={styles.viewProductLink}
              >
                View product
              </Link>

              {/* Bottom Border */}
              <div className={styles.cardBottomBorder}></div>
            </div>
          ))}
        </div>

        {/* Bottom Content Section */}
        <div className={styles.bottomContent}>
          
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
        </div>

      </main>

      <Footer />
    </>
  );
}