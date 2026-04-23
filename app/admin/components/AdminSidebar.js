'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles.module.css';
import { slugToSchemaKey } from '../utils/schemaRegistry';

const companies = [
    { slug: 'chemicals', label: 'Chemicals' },
    { slug: 'birlanu', label: 'Birlanu' },
    { slug: 'ejot-screw', label: 'Ejot Screw' },
    { slug: 'hindalco', label: 'Hindalco' },
    { slug: 'kee-safety', label: 'Kee Safety' },
    { slug: 'saint-gobain', label: 'Saint-Gobain' },
    { slug: 'tata-bluescope', label: 'Tata Bluescope' },
    { slug: 'tegola-canadese', label: 'Tegola Canadese' },
];

export default function AdminSidebar({ onLogout }) {
    const pathname = usePathname();

    const isActive = (path) => pathname === path ? styles.sidebarLinkActive : '';

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <h1 className={styles.sidebarBrand}>Patel Enterprise</h1>
                <p className={styles.sidebarTag}>Admin Dashboard</p>
            </div>

            <nav className={styles.sidebarNav}>
                <Link href="/admin" className={`${styles.sidebarLink} ${isActive('/admin')}`}>
                    Dashboard
                </Link>
                <Link href="/admin/companies" className={`${styles.sidebarLink} ${isActive('/admin/companies')}`}>
                    All Companies
                </Link>
                <Link href="/admin/quotes" className={`${styles.sidebarLink} ${pathname.startsWith('/admin/quotes') ? styles.sidebarLinkActive : ''}`}>
                    Quotes
                </Link>

                <div className={styles.sidebarSection}>Companies</div>
                {companies.map((c) => (
                    <Link
                        key={c.slug}
                        href={`/admin/companies/${c.slug}`}
                        className={`${styles.sidebarLink} ${pathname.includes(`/admin/companies/${c.slug}`) ? styles.sidebarLinkActive : ''}`}
                    >
                        {c.label}
                    </Link>
                ))}
            </nav>

            <div className={styles.sidebarFooter}>
                <button className={styles.logoutBtn} onClick={onLogout}>Logout</button>
            </div>
        </aside>
    );
}
