'use client';

import { useState, useEffect } from 'react';

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'patel2024';
const SESSION_KEY = 'pe_admin_session';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const session = localStorage.getItem(SESSION_KEY);
        if (session) {
            const timestamp = parseInt(session, 10);
            if (Date.now() - timestamp < SESSION_DURATION) {
                setIsAuthenticated(true);
            } else {
                localStorage.removeItem(SESSION_KEY);
            }
        }
        setIsLoading(false);
    }, []);

    function login(password) {
        if (password === ADMIN_PASSWORD) {
            localStorage.setItem(SESSION_KEY, Date.now().toString());
            setIsAuthenticated(true);
            return true;
        }
        return false;
    }

    function logout() {
        localStorage.removeItem(SESSION_KEY);
        setIsAuthenticated(false);
    }

    function getPassword() {
        return ADMIN_PASSWORD;
    }

    return { isAuthenticated, isLoading, login, logout, getPassword };
}
