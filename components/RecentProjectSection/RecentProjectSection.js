'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './RecentProjectSection.module.css';

const RecentProjectSection = () => {
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
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`${styles.recentProjectSection} ${isVisible ? styles.animate : ''}`}
    >
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <h2 className={`${styles.title} ${styles.animateUp}`}>
            Most Recent Project
          </h2>
          <p className={`${styles.subtitle} ${styles.animateUp}`}>
            Explore our latest achievement in industrial construction
          </p>
        </div>

        {/* Project Card */}
        <div className={`${styles.projectCard} ${styles.animateUp}`}>
          
          {/* Left Side - Image */}
          <div className={styles.imageSection}>
            <img 
              src="/images/rectangle-27.png" 
              alt="TATA Bluesteel Engineering Project"
              className={styles.projectImage}
            />
          </div>

          {/* Right Side - Info */}
          <div className={styles.infoSection}>
            
            {/* Client */}
            <div className={styles.infoItem}>
              <div className={styles.label}>Client:</div>
              <div className={styles.value}>TATA Bluesteel Engineering Ltd</div>
            </div>

            {/* Category */}
            <div className={styles.infoItem}>
              <div className={styles.label}>Category:</div>
              <div className={styles.value}>Industrial Roofing</div>
            </div>

            {/* Location */}
            <div className={styles.infoItem}>
              <div className={styles.label}>Location:</div>
              <div className={styles.value}>Bharuch</div>
            </div>

            {/* Description */}
            <p className={styles.description}>
              The project stands as a hallmark of prestige, notably due to the ongoing development of Asia's largest Galvanized Iron (GI) plant. Spanning across 1,01,171 square meters of land, our endeavor encompasses the creation of a cutting-edge factory facility.
            </p>

            {/* CTA Button - Inside Card */}
<div className={styles.ctaWrapper}>
  <button className={styles.ctaButton}>
    <span>View All Projects</span>
    <svg 
      className={styles.arrowIcon}
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none"
    >
      <path 
        d="M5 12H19M19 12L12 5M19 12L12 19" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  </button>
</div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default RecentProjectSection;