'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { getAllChemicals } from '../../data/dataService';
import styles from './ChemicalsSection.module.css';

const ChemicalsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const chemicals = getAllChemicals();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.08 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`${styles.chemicalsSection} ${isVisible ? styles.animate : ''}`}
        >
            <div className={styles.container}>

                {/* ── Section Header ── */}
                <div className={styles.header}>
                    <p className={`${styles.eyebrow} ${styles.animateUp}`}>
                        Supplier & Stockist
                    </p>
                    <h2 className={`${styles.title} ${styles.animateUp}`}
                        style={{ animationDelay: '0.05s' }}>
                        Industrial Chemicals
                    </h2>
                    <p className={`${styles.subtitle} ${styles.animateUp}`}
                        style={{ animationDelay: '0.1s' }}>
                        Patel Enterprise supplies and stocks a wide range of industrial chemicals — bulk supply via tanker and drums across South Gujarat.
                    </p>
                </div>

                {/* ── Chemicals Grid ── */}
                <div className={styles.chemicalsGrid}>
                    {chemicals.map((chemical, index) => (
                        <Link
                            key={chemical.id}
                            href={`/products/chemicals/${chemical.slug}`}
                            className={`${styles.chemicalCard} ${styles.animateUp}`}
                            style={{ animationDelay: `${0.15 + index * 0.05}s` }}
                        >
                            {/* Full bleed image */}
                            <img
                                src={chemical.cardImage}
                                alt={chemical.name}
                                className={styles.cardImage}
                                loading="lazy"
                            />

                            {/* Gradient overlay + text */}
                            <div className={styles.cardOverlay}>
                                <span className={styles.cardCategory}>{chemical.category}</span>
                                <h3 className={styles.cardName}>
                                    {chemical.name}
                                    {chemical.tradeName && (
                                        <span className={styles.cardTradeName}> ({chemical.tradeName})</span>
                                    )}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* ── View All CTA ── */}
                {/* <div className={`${styles.viewAllWrapper} ${styles.animateUp}`}
                    style={{ animationDelay: `${0.15 + chemicals.length * 0.05}s` }}>
                    <Link href="/products/chemicals" className={styles.viewAllBtn}>
                        View all chemicals
                    </Link>
                </div> */}

            </div>
        </section>
    );
};

export default ChemicalsSection;