'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from './FloatingQuoteButton.module.css'

export default function FloatingQuoteButton() {
    const [isAtBottom, setIsAtBottom] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Get page dimensions
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight
            const scrollTop = window.scrollY
            
            // Check if user scrolled past 50% of the page
            const scrollPercentage = (scrollTop + windowHeight) / documentHeight
            setIsAtBottom(scrollPercentage > 0.6)
        }
        
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <Link 
            href="/contact" 
            className={`${styles.quoteButton} ${isAtBottom ? styles.quoteButtonBottom : ''}`}
        >
            <svg 
                className={styles.quoteIcon} 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" 
                    fill="currentColor"
                />
            </svg>
            GET QUOTE
        </Link>
    )
}