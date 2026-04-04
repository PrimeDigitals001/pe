'use client';

import React from 'react';
import { useAuth } from './hooks/useAuth';
import AdminLogin from './components/AdminLogin';
import AdminSidebar from './components/AdminSidebar';
import styles from './styles.module.css';

export default function AdminLayout({ children }) {
    const { isAuthenticated, isLoading, login, logout } = useAuth();

    if (isLoading) return null;

    if (!isAuthenticated) {
        return <AdminLogin onLogin={login} />;
    }

    return (
        <div className={styles.adminLayout}>
            <AdminSidebar onLogout={logout} />
            <main className={styles.mainContent}>
                {children}
            </main>
        </div>
    );
}
