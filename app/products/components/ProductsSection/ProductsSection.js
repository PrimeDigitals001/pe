'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { getProductsData } from '../../data/dataService';
const productsData = getProductsData();
import styles from './ProductsSection.module.css';

const ProductsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px 50px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
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
          <p className={`${styles.subtitle} ${styles.animateUp}`} style={{ animationDelay: '0.08s' }}>
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
              style={{ animationDelay: `${0.12 + index * 0.05}s` }}
            >
              {/* Logo — always visible, subtle zoom on hover */}
              <div className={styles.logoWrapper}>
                <img
                  src={product.logo}
                  alt={product.name}
                  className={styles.logo}
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