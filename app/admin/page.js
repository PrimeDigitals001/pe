'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useAdminData } from './hooks/useAdminData';
import { slugToSchemaKey, HARDCODED_SLUGS, slugToCompanyKey } from './utils/schemaRegistry';
import { slugify } from './utils/slugify';
import { getOverrides, saveOverrides } from './utils/mergeData';
import PublishButton from './components/PublishButton';
import styles from './styles.module.css';

export default function AdminDashboard() {
    const { getCompanyProducts, getProductsRegistry, saveCompanyToRegistry, resetAll, exportData, importData, hasUnpublishedChanges, publishToGitHub } = useAdminData();
    const fileInputRef = useRef(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newCompany, setNewCompany] = useState({ name: '', slug: '', logo: '', tagline: '', description: '' });
    const [addError, setAddError] = useState('');

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

    // Hardcoded baseline (includes chemicals which isn't in productsData registry)
    const baselineCompanies = [
        { slug: 'chemicals', label: 'Chemicals', logo: null },
        { slug: 'birlanu', label: 'Birlanu', logo: '/images/products/logo_birlanu.png' },
        { slug: 'ejot-screw', label: 'Ejot Screw', logo: '/images/products/logo_ejot.png' },
        { slug: 'hindalco', label: 'Hindalco', logo: '/images/products/logo_hindalco.png' },
        { slug: 'kee-safety', label: 'Kee Safety', logo: '/images/products/logo_kee-safety.png' },
        { slug: 'saint-gobain', label: 'Saint-Gobain', logo: '/images/products/logo_saint-gobain.png' },
        { slug: 'tata-bluescope', label: 'Tata Bluescope', logo: '/images/products/logo_tata-bluescope.png' },
        { slug: 'tegola-canadese', label: 'Tegola Canadese', logo: '/images/products/logo_tegola-canadese.png' },
    ];

    // Merge with registry to include dynamically added companies
    const registry = getProductsRegistry();
    const dynamicCompanies = registry
        .filter((c) => !baselineCompanies.find((b) => b.slug === c.slug))
        .map((c) => ({ slug: c.slug, label: c.name, logo: c.logo || c.cardImage || null }));

    const companies = [...baselineCompanies, ...dynamicCompanies];

    const handleAddCompany = () => {
        setAddError('');
        const slug = newCompany.slug || slugify(newCompany.name);

        if (!newCompany.name.trim()) {
            setAddError('Company name is required.');
            return;
        }

        if (HARDCODED_SLUGS.includes(slug)) {
            setAddError('This slug conflicts with an existing company. Choose a different name.');
            return;
        }

        if (registry.find((c) => c.slug === slug)) {
            setAddError('A company with this slug already exists.');
            return;
        }

        // Add to products registry
        const companyId = `custom-${Date.now()}`;
        saveCompanyToRegistry({
            id: companyId,
            name: newCompany.name.trim(),
            slug,
            logo: newCompany.logo || '',
            cardImage: newCompany.logo || '',
            tagline: newCompany.tagline || '',
            description: newCompany.description || '',
            website: '',
        });

        // Initialize company data in overrides
        const overrides = getOverrides();
        const companyKey = slugToCompanyKey(slug);
        if (!overrides[companyKey]) {
            overrides[companyKey] = {
                companyInfo: {
                    name: newCompany.name.trim(),
                    slug,
                    logo: newCompany.logo || '',
                    tagline: newCompany.tagline || '',
                    description: newCompany.description || '',
                },
                products: [],
                categories: ['All Products'],
            };
            saveOverrides(overrides);
        }

        setNewCompany({ name: '', slug: '', logo: '', tagline: '', description: '' });
        setShowAddForm(false);
    };

    return (
        <>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>Dashboard</h1>
                <p className={styles.pageSubtitle}>Manage your products and companies</p>
            </div>

            <div className={styles.toolbarActions}>
                <PublishButton onPublish={publishToGitHub} hasChanges={hasUnpublishedChanges()} />
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

            <div className={styles.toolbarActions}>
                <button className={styles.addButton} onClick={() => setShowAddForm(!showAddForm)}>
                    {showAddForm ? 'Cancel' : '+ Add New Company'}
                </button>
            </div>

            {/* Add New Company Form */}
            {showAddForm && (
                <div className={styles.formWrapper} style={{ marginBottom: '24px' }}>
                    <h3 className={styles.tableTitle}>Add New Company</h3>
                    <div className={styles.formGrid}>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Company Name <span className={styles.formRequired}>*</span></label>
                            <input
                                className={styles.formInput}
                                value={newCompany.name}
                                onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value, slug: slugify(e.target.value) })}
                                placeholder="e.g. Acme Industries"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>URL Slug</label>
                            <input
                                className={styles.formInput}
                                value={newCompany.slug || slugify(newCompany.name)}
                                onChange={(e) => setNewCompany({ ...newCompany, slug: e.target.value })}
                                placeholder="auto-generated from name"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Logo URL</label>
                            <input
                                className={styles.formInput}
                                value={newCompany.logo}
                                onChange={(e) => setNewCompany({ ...newCompany, logo: e.target.value })}
                                placeholder="/images/products/logo_company.png"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Tagline</label>
                            <input
                                className={styles.formInput}
                                value={newCompany.tagline}
                                onChange={(e) => setNewCompany({ ...newCompany, tagline: e.target.value })}
                                placeholder="Short tagline"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Description</label>
                            <textarea
                                className={styles.formTextarea}
                                value={newCompany.description}
                                onChange={(e) => setNewCompany({ ...newCompany, description: e.target.value })}
                                placeholder="Company description"
                            />
                        </div>
                        {addError && <p style={{ color: '#ef4444', fontSize: '13px', margin: 0 }}>{addError}</p>}
                        <div className={styles.formActions}>
                            <button className={styles.saveButton} onClick={handleAddCompany}>Create Company</button>
                            <button className={styles.cancelButton} onClick={() => setShowAddForm(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            <div className={styles.dashboardGrid}>
                {companies.map((c) => {
                    const schemaKey = slugToSchemaKey[c.slug] || slugToCompanyKey(c.slug);
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
