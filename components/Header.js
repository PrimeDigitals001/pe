'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from './Header.module.css'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isHidden, setIsHidden] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)

    // Smart scroll behavior
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > 100) {
                if (currentScrollY > lastScrollY) {
                    setIsHidden(true)
                } else {
                    setIsHidden(false)
                }
            } else {
                setIsHidden(false)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            {/* Desktop Navbar */}
            <header className={`${styles.header} ${isHidden ? styles.headerHidden : ''}`}>
                <nav className={styles.navContainer}>
                    <Link href="/" className={styles.navLink}>
                        HOME
                    </Link>
                    <Link href="/about" className={styles.navLink}>
                        ABOUT US
                    </Link>
                    <Link href="/products" className={styles.navLink}>
                        PRODUCTS
                    </Link>
                    <Link href="/projects" className={styles.navLink}>
                        PROJECTS
                    </Link>
                    <Link href="/contact" className={styles.navLink}>
                        CONTACT US
                    </Link>
                </nav>
            </header>

            {/* Mobile Toggle */}
            <button 
                className={`
                    ${styles.mobileToggle} 
                    ${isHidden ? styles.mobileToggleHidden : ''} 
                    ${isMobileMenuOpen ? styles.mobileToggleActive : ''}
                `}
                onClick={toggleMobileMenu}
                aria-label="Toggle Menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Mobile Navigation with Quote Button */}
            <nav className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
                <Link href="/" className={styles.mobileNavLink} onClick={closeMobileMenu}>
                    HOME
                </Link>
                <Link href="/about" className={styles.mobileNavLink} onClick={closeMobileMenu}>
                    ABOUT US
                </Link>
                <Link href="/products" className={styles.mobileNavLink} onClick={closeMobileMenu}>
                    PRODUCTS
                </Link>
                <Link href="/projects" className={styles.mobileNavLink} onClick={closeMobileMenu}>
                    PROJECTS
                </Link>
                <Link href="/contact" className={styles.mobileNavLink} onClick={closeMobileMenu}>
                    CONTACT US
                </Link>
                
                {/* Quote Button in Mobile Menu */}
                <Link href="/contact" className={styles.mobileQuoteButton} onClick={closeMobileMenu}>
                    GET QUOTE
                </Link>
            </nav>
        </>
    )
}