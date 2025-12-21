'use client';

import React from 'react';
import styles from './ScrollingBanner.module.css';

const ScrollingBanner = () => {
  // Services text for each line
  const topLineText = "Industrial Roofing & Pre-Engineered Sheds & Wall Cladding &";
  const middleLineText = "Industrial Roofing & Pre-Engineered Sheds & Wall Cladding &";
  const bottomLineText = "Structural Decking & Safety & Access Systems & Roof Shingles & Thermal Insulation & Rainwater Systems & Roof Maintenance &";

  return (
    <section className={styles.scrollingBanner}>
      <div className={styles.container}>
        
        {/* Top Line - Stroke Only (scrolls left) */}
        <div className={styles.marqueeWrapper}>
          <div className={`${styles.marquee} ${styles.scrollLeft}`}>
            <div className={styles.marqueeContent}>
              <span className={styles.strokeText}>{topLineText}</span>
              <span className={styles.strokeText}>{topLineText}</span>
              <span className={styles.strokeText}>{topLineText}</span>
              <span className={styles.strokeText}>{topLineText}</span>
            </div>
          </div>
        </div>

        {/* Middle Line - Blue Filled (scrolls right) */}
        <div className={styles.marqueeWrapper}>
          <div className={`${styles.marquee} ${styles.scrollRight}`}>
            <div className={styles.marqueeContent}>
              <span className={styles.filledText}>{middleLineText}</span>
              <span className={styles.filledText}>{middleLineText}</span>
              <span className={styles.filledText}>{middleLineText}</span>
              <span className={styles.filledText}>{middleLineText}</span>
            </div>
          </div>
        </div>

        {/* Bottom Line - Stroke Only (scrolls left) */}
        <div className={styles.marqueeWrapper}>
          <div className={`${styles.marquee} ${styles.scrollLeft}`}>
            <div className={styles.marqueeContent}>
              <span className={styles.strokeText}>{bottomLineText}</span>
              <span className={styles.strokeText}>{bottomLineText}</span>
              <span className={styles.strokeText}>{bottomLineText}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ScrollingBanner;