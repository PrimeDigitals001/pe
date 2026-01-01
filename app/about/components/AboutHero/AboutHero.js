'use client';

import React from 'react';
import styles from './AboutHero.module.css';

const AboutHero = () => {
  return (
    <section className={styles.aboutHero}>
      {/* Background Image */}
      <div className={styles.heroImage}>
        <img 
          src="/images/hero_img.png" 
          alt="Patel Enterprise Team"
          className={styles.image}
        />
      </div>

      {/* Overlay Content */}
      <div className={styles.heroContent}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.subtitle}>
          Discover our story, our values, and our dedication to delivering construction excellence.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;