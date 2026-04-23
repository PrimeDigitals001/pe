'use client';

import React from 'react';
import { useAuth } from './hooks/useAuth';
import { useAdminData } from './hooks/useAdminData';
import AdminLogin from './components/AdminLogin';
import AdminSidebar from './components/AdminSidebar';
import styles from './styles.module.css';

export default function AdminLayout({ children }) {
    const { isAuthenticated, isLoading, login, logout } = useAuth();
    const { hasLocalChanges } = useAdminData();

    if (isLoading) return null;

    if (!isAuthenticated) {
        return <AdminLogin onLogin={login} />;
    }

    return (
        <div className={styles.adminLayout}>
            <AdminSidebar onLogout={logout} />
            <main className={styles.mainContent}>
                {hasLocalChanges() && (
                    <div className={styles.previewBanner}>
                        Preview mode — product edits are saved locally in your browser and will not appear on the live website.
                        Use <strong>Export Data</strong> on the Dashboard to download your changes and share them with the developer to publish.
                    </div>
                )}
                {children}
            </main>
        </div>
    );
}
