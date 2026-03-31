'use client';

import React from 'react';
import styles from './ServicesHero.module.css';

const ServicesHero = () => {
    return (
        <section className={styles.servicesHero}>

            {/* Background Image */}
            <div className={styles.heroImage}>
                <img
                    src="/images/hero_img.png"
                    alt="Patel Enterprise Services"
                    className={styles.image}
                />
            </div>

            {/* Overlay Content */}
            <div className={styles.heroContent}>
                <h1 className={styles.title}>Our Services</h1>
                <p className={styles.subtitle}>
                    Comprehensive industrial solutions built on safety, quality, and trust.
                </p>
            </div>

        </section>
    );
};

export default ServicesHero;