'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import { birlanuData } from '../data/companyProducts/birlanu';
import styles from './styles.module.css';

export default function BirlanuPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  // Filter products by category
  const filteredProducts = selectedCategory === 'All Products'
    ? birlanuData.products
    : birlanuData.products.filter(p => p.category === selectedCategory);

  return (
    <>
      <Header />
      <Logo />
      <FloatingQuoteButton />

      <main className={styles.birlanuPage}>
        
        {/* Birlanu Logo */}
        <div className={styles.logoSection}>
          <img 
            src={birlanuData.companyInfo.logo} 
            alt={birlanuData.companyInfo.name}
            className={styles.companyLogo}
            loading="lazy"
          />
        </div>

        {/* Page Title */}
        <div className={styles.headerSection}>
          <h1 className={styles.pageTitle}>{birlanuData.companyInfo.name}</h1>
          <p className={styles.pageDescription}>
            {birlanuData.companyInfo.description}
          </p>
        </div>

        {/* Products Header */}
        <div className={styles.productsHeader}>
          <h2 className={styles.productsTitle}>Products</h2>
          <span className={styles.productsCount} aria-label={`${birlanuData.products.length} products available`}>
            ({birlanuData.products.length})
          </span>
        </div>

        {/* Divider */}
        <div className={styles.dividerLine} role="separator"></div>

        {/* Products Grid */}
        <div className={styles.productsGrid}>
          {filteredProducts.map((product) => (
            <article key={product.id} className={styles.productCard}>
              <Link href={`/products/birlanu/${product.slug}`} className={styles.productCardLink}>
                
                <div className={styles.productImageWrapper}>
                  <img 
                    src={product.image} 
                    alt={`${product.name} - ${product.category}`}
                    className={styles.productImage}
                    loading="lazy"
                  />
                </div>

                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productCategory}>{product.category}</p>
                <p className={styles.productDescription}>{product.cardDescription}</p>

                <span className={styles.viewProductLink}>
                  View product
                </span>

                <div className={styles.cardBottomBorder}></div>
              </Link>
            </article>
          ))}
        </div>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Features</h2>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <img src="/images/icons/eco-friendly.png" alt="Eco-Friendly" className={styles.featureIcon} />
              <p className={styles.featureText}>Eco-Friendly</p>
            </div>
            <div className={styles.featureItem}>
              <img src="/images/icons/fire-resistant.png" alt="Fire Resistant" className={styles.featureIcon} />
              <p className={styles.featureText}>Fire and corrosion resistant</p>
            </div>
            <div className={styles.featureItem}>
              <img src="/images/icons/thermal-protection.png" alt="Thermal" className={styles.featureIcon} />
              <p className={styles.featureText}>Thermal and noise protection</p>
            </div>
            <div className={styles.featureItem}>
              <img src="/images/icons/hygienic.png" alt="Hygienic" className={styles.featureIcon} />
              <p className={styles.featureText}>Hygienic and mold-resistant</p>
            </div>
          </div>

          <div className={styles.sectionDivider}></div>

          <h2 className={styles.sectionTitle}>Benefits</h2>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <img src="/images/icons/strength.png" alt="Strength" className={styles.benefitIcon} />
              <p className={styles.benefitText}>Superior strength with<br />eco-conscious approach</p>
            </div>
            <div className={styles.benefitItem}>
              <img src="/images/icons/strength.png" alt="Corrosion" className={styles.benefitIcon} />
              <p className={styles.benefitText}>Fights highly corrosive<br />environments</p>
            </div>
            <div className={styles.benefitItem}>
              <img src="/images/icons/strength.png" alt="Impact" className={styles.benefitIcon} />
              <p className={styles.benefitText}>Withstands high impacts and tough conditions</p>
            </div>
          </div>
        </section>

        {/* Bottom Content */}
        <section className={styles.bottomContent}>
          <h2 className={styles.bottomTitle}>
            Wide application range: For components made of steel, timber, aluminium
          </h2>
          <p className={styles.bottomDescription}>
            {birlanuData.companyInfo.description} Birlanu offers a comprehensive range of building materials engineered for fire resistance, corrosion resistance, and long-term performance. With high impact strength, excellent noise insulation, and an easy-to-handle, easy-to-fix design, Birlanu products ensure a reliable, low-maintenance building experience for a wide range of applications.
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}

