'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import { tataBluescopeData } from '../data/companyProducts/tataBlueScope';
import styles from './styles.module.css';

export default function TataBluescopePage() {
  return (
    <>
      <Header />
      <Logo />
      <FloatingQuoteButton />

      <main className={styles.tataBluescopePage}>
        
        {/* Company Logo */}
        <div className={styles.logoSection}>
          <img 
            src={tataBluescopeData.companyInfo.logo} 
            alt={tataBluescopeData.companyInfo.name}
            className={styles.companyLogo}
            loading="lazy"
          />
        </div>

        {/* Page Title & Description */}
        <div className={styles.headerSection}>
          <h1 className={styles.pageTitle}>
            {tataBluescopeData.companyInfo.name}
          </h1>
          <p className={styles.pageDescription}>
            {tataBluescopeData.companyInfo.description}
          </p>
        </div>

        {/* Loop Through Categories */}
        {tataBluescopeData.categories.map((category) => (
          <section key={category.id} className={styles.categorySection}>
            
            {/* Category Header */}
            <div className={styles.categoryHeader}>
              <h2 className={styles.categoryTitle}>{category.name}</h2>
              <span 
                className={styles.categoryCount}
                aria-label={`${category.count} products in this category`}
              >
                {String(category.count).padStart(2, '0')}
              </span>
            </div>

            {/* Category Divider */}
            <div className={styles.categoryDivider} role="separator"></div>

            {/* Products Grid */}
            <div className={styles.productsGrid}>
              {category.products.map((product) => (
                <article 
                  key={product.id} 
                  className={styles.productCard}
                  style={{ '--card-bg': product.backgroundColor }}
                >
                  <Link 
                    href={`/products/tata-bluescope/${product.slug}`} 
                    className={styles.productCardLink}
                  >
                    
                    {/* Product Image */}
                    <div className={styles.productImageWrapper}>
                      <img 
                        src={product.image} 
                        alt={`${product.name} - ${product.onelinerDescription}`}
                        className={styles.productImage}
                        loading="lazy"
                      />
                    </div>

                    {/* Product Name */}
                    <h3 className={styles.productName}>{product.name}</h3>

                    {/* Oneliner Description */}
                    <p className={styles.productOneliner}>
                      {product.onelinerDescription}
                    </p>

                    {/* Card Description */}
                    <p className={styles.productDescription}>
                      {product.cardDescription}
                    </p>

                    {/* View Product Link */}
                    <span className={styles.viewProductLink}>
                      View product
                    </span>

                    {/* Card Bottom Border */}
                    <div className={styles.cardBottomBorder}></div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ))}

      </main>

      <Footer />
    </>
  );
}