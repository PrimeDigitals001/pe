// app/products/saint-gobain/page.js

'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import { saintGobainData } from '../data/companyProducts/saintGobain';
import styles from './styles.module.css';

export default function SaintGobainPage() {
    const totalTypes = saintGobainData.types.length;
    const formattedCount = String(totalTypes).padStart(2, '0');

    return (
        <>
            <Header />
            <Logo />
            <FloatingQuoteButton />

            <main className={styles.saintGobainPage}>

                {/* Saint-Gobain Logo Section */}
                <div className={styles.logoSection}>
                    <img
                        src={saintGobainData.companyInfo.logo}
                        alt={saintGobainData.companyInfo.name}
                        className={styles.companyLogo}
                        loading="lazy"
                    />
                </div>

                {/* Category Header - Matching Tata Structural Density */}
                <div className={styles.headerSection}>
                    <h1 className={styles.pageTitle}>Select types</h1>
                    <span
                        className={styles.typeCount}
                        aria-label={`${totalTypes} categories available`}
                    >
                        {formattedCount}
                    </span>
                </div>

                {/* Category Divider Line */}
                <div className={styles.dividerLine} role="separator"></div>

                {/* Category Selection Cards */}
                <div className={styles.typeCardsGrid}>
                    {saintGobainData.types.map((type) => (
                        <Link
                            key={type.id}
                            href={`/products/saint-gobain/${type.slug}`}
                            className={styles.typeCard}
                            title={`View all products in ${type.name}`}
                        >
                            <h2 className={styles.typeCardTitle}>{type.name}</h2>
                        </Link>
                    ))}
                </div>

            </main>

            <Footer />
        </>
    );
}