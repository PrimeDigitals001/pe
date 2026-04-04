'use client';

import React, { useState } from 'react';
import styles from '../styles.module.css';

export default function AdminLogin({ onLogin }) {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = onLogin(password);
        if (!success) {
            setError('Incorrect password');
            setPassword('');
        }
    };

    return (
        <div className={styles.loginPage}>
            <form className={styles.loginCard} onSubmit={handleSubmit}>
                <h1 className={styles.loginTitle}>Admin Dashboard</h1>
                <p className={styles.loginSubtitle}>Patel Enterprise — Product Management</p>
                <input
                    type="password"
                    className={styles.loginInput}
                    placeholder="Enter admin password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(''); }}
                    autoFocus
                />
                <button type="submit" className={styles.loginButton}>Login</button>
                {error && <p className={styles.loginError}>{error}</p>}
            </form>
        </div>
    );
}
