'use client';

import React from 'react';
import Link from 'next/link';
import { useAdminData } from '../hooks/useAdminData';
import { slugToSchemaKey } from '../utils/schemaRegistry';
import styles from '../styles.module.css';

const companies = [
    { slug: 'chemicals', label: 'Chemicals', logo: null },
    { slug: 'birlanu', label: 'Birlanu', logo: '/images/products/logo_birlanu.png' },
    { slug: 'ejot-screw', label: 'Ejot Screw', logo: '/images/products/logo_ejot.png' },
    { slug: 'hindalco', label: 'Hindalco', logo: '/images/products/logo_hindalco.png' },
    { slug: 'kee-safety', label: 'Kee Safety', logo: '/images/products/logo_kee-safety.png' },
    { slug: 'saint-gobain', label: 'Saint-Gobain', logo: '/images/products/logo_saint-gobain.png' },
    { slug: 'tata-bluescope', label: 'Tata Bluescope', logo: '/images/products/logo_tata-bluescope.png' },
    { slug: 'tegola-canadese', label: 'Tegola Canadese', logo: '/images/products/logo_tegola-canadese.png' },
];

export default function CompaniesPage() {
    const { getCompanyProducts } = useAdminData();

    return (
        <>
            <div className={styles.breadcrumbAdmin}>
                <Link href="/admin">Dashboard</Link>
                <span>›</span>
                <span>Companies</span>
            </div>

            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>All Companies</h1>
                <p className={styles.pageSubtitle}>Select a company to manage its products</p>
            </div>

            <div className={styles.dashboardGrid}>
                {companies.map((c) => {
                    const schemaKey = slugToSchemaKey[c.slug];
                    const products = schemaKey ? getCompanyProducts(schemaKey) : [];
                    return (
                        <Link key={c.slug} href={`/admin/companies/${c.slug}`} className={styles.companyCard}>
                            {c.logo && <img src={c.logo} alt={c.label} className={styles.companyCardLogo} />}
                            <h3 className={styles.companyCardName}>{c.label}</h3>
                            <span className={styles.companyCardBadge}>{products.length} products</span>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}
