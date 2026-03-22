'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import styles from './Header.module.css'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isHidden, setIsHidden] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const mobileNavRef = useRef(null)
    const toggleButtonRef = useRef(null)

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

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMobileMenuOpen])

    // Handle escape key to close menu
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                closeMobileMenu()
            }
        }

        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [isMobileMenuOpen])

    // Handle inert attribute manually (React doesn't support it natively yet)
    useEffect(() => {
        if (mobileNavRef.current) {
            if (isMobileMenuOpen) {
                mobileNavRef.current.removeAttribute('inert')
            } else {
                mobileNavRef.current.setAttribute('inert', '')
            }
        }
    }, [isMobileMenuOpen])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
        // Return focus to toggle button when menu closes
        if (toggleButtonRef.current) {
            toggleButtonRef.current.focus()
        }
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

            {/* Mobile Toggle - Always visible on mobile, acts as close button when menu open */}
            <button
                ref={toggleButtonRef}
                className={`
                    ${styles.mobileToggle} 
                    ${isHidden && !isMobileMenuOpen ? styles.mobileToggleHidden : ''} 
                    ${isMobileMenuOpen ? styles.mobileToggleActive : ''}
                `}
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Mobile Navigation Overlay */}
            <nav
                id="mobile-navigation"
                ref={mobileNavRef}
                className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}
            >
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

                {/* Quote Button - Goes to /quote page */}
                <Link href="/quote" className={styles.mobileQuoteButton} onClick={closeMobileMenu}>
                    GET QUOTE
                </Link>
            </nav>
        </>
    )
}