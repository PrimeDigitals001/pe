'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles.module.css';

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
    const [open, setOpen] = useState(false);

    const isActive = (path) => pathname === path ? styles.sidebarLinkActive : '';

    // Close drawer on route change
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Lock body scroll when drawer is open (mobile only)
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
            return () => { document.body.style.overflow = ''; };
        }
    }, [open]);

    return (
        <>
            {/* Mobile top bar — only shown on narrow screens */}
            <div className={styles.mobileTopBar}>
                <button
                    type="button"
                    aria-label="Open menu"
                    className={styles.hamburgerBtn}
                    onClick={() => setOpen(true)}
                >
                    <span />
                    <span />
                    <span />
                </button>
                <span className={styles.mobileBrand}>Patel Enterprise</span>
            </div>

            {/* Dim overlay when drawer open on mobile */}
            {open && <div className={styles.sidebarBackdrop} onClick={() => setOpen(false)} />}

            <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : ''}`}>
                <div className={styles.sidebarHeader}>
                    <h1 className={styles.sidebarBrand}>Patel Enterprise</h1>
                    <p className={styles.sidebarTag}>Admin Dashboard</p>
                    <button
                        type="button"
                        aria-label="Close menu"
                        className={styles.sidebarCloseBtn}
                        onClick={() => setOpen(false)}
                    >
                        ×
                    </button>
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
        </>
    );
}
