'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { productsData } from '../../data/productsData';
import styles from './ProductsSection.module.css';

const ProductsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`${styles.productsSection} ${isVisible ? styles.animate : ''}`}
    >
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <h2 className={`${styles.title} ${styles.animateUp}`}>
            Our Authorized Partnerships
          </h2>
          <p className={`${styles.subtitle} ${styles.animateUp}`}>
            We proudly collaborate with top manufacturers as their trusted channel partner.
          </p>
        </div>

        {/* Products Grid */}
        <div className={styles.productsGrid}>
          {productsData.map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className={`${styles.productCard} ${styles.animateUp}`}
              style={{ animationDelay: `${0.1 + (index * 0.05)}s` }}
            >
              <div className={styles.cardBackground}></div>

              <div className={styles.logoWrapper}>
                <img
                  src={product.logo}
                  alt={product.name}
                  className={styles.logo}
                  // REMOVED fixed width/height for responsive scaling
                />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;