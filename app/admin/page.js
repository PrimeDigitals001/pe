'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useAdminData } from './hooks/useAdminData';
import { companySchemas, slugToSchemaKey } from './utils/schemaRegistry';
import styles from './styles.module.css';

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

export default function AdminDashboard() {
    const { getCompanyProducts, resetAll, exportData, importData } = useAdminData();
    const fileInputRef = useRef(null);

    const handleImport = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            const success = importData(ev.target.result);
            alert(success ? 'Data imported successfully!' : 'Invalid JSON file.');
        };
        reader.readAsText(file);
        e.target.value = '';
    };

    return (
        <>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>Dashboard</h1>
                <p className={styles.pageSubtitle}>Manage your products and companies</p>
            </div>

            <div className={styles.toolbarActions}>
                <button className={styles.secondaryBtn} onClick={exportData}>Export Backup</button>
                <button className={styles.secondaryBtn} onClick={() => fileInputRef.current?.click()}>
                    Import Backup
                </button>
                <input ref={fileInputRef} type="file" accept=".json" onChange={handleImport} style={{ display: 'none' }} />
                <button className={styles.dangerBtn} onClick={() => {
                    if (confirm('Reset all changes to defaults? This cannot be undone.')) {
                        resetAll();
                        alert('All changes have been reset.');
                    }
                }}>Reset All Changes</button>
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
