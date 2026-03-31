'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './ServicesContact.module.css';

const ServicesContact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`${styles.servicesContact} ${isVisible ? styles.animate : ''}`}
        >
            {/* Background image with overlay */}
            <div className={styles.bgImage}>
                <img
                    src="/images/services_cta_bg.png"
                    alt=""
                    className={styles.bgImg}
                    aria-hidden="true"
                />
            </div>

            <div className={styles.container}>

                {/* Left — heading + subtext */}
                <div className={styles.leftBlock}>
                    <p className={`${styles.eyebrow} ${styles.animateUp}`}>
                        Ready to start?
                    </p>
                    <h2 className={`${styles.heading} ${styles.animateUp}`}>
                        Let's Work Together
                    </h2>
                    <p className={`${styles.subtext} ${styles.animateUp}`}>
                        Whether it's a new project, maintenance support, or an urgent site
                        requirement — our team is ready to support you at every stage.
                    </p>
                    <Link
                        href="/get-quote"
                        className={`${styles.quoteBtn} ${styles.animateUp}`}
                    >
                        <span className={styles.quoteBtnText}>Get a Quote</span>
                        <span className={styles.quoteBtnArrow}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </Link>
                </div>

                {/* Vertical divider — desktop only */}
                <div className={`${styles.verticalDivider} ${styles.animateUp}`} />

                {/* Right — contact details */}
                <div className={`${styles.rightBlock} ${styles.animateUp}`}>

                    <p className={styles.contactLabel}>Get in touch directly</p>

                    <a
                        href="tel:+917359951901"
                        className={styles.contactItem}
                        aria-label="Call us"
                    >
                        <span className={styles.contactIcon}>
                            {/* Phone */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.34 21 3 13.66 3 4.5a1 1 0 011-1H7.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="currentColor" />
                            </svg>
                        </span>
                        <span className={styles.contactText}>+91 7359951901</span>
                    </a>

                    <a
                        href="mailto:Meet.patel@patelenterprise.co"
                        className={styles.contactItem}
                        aria-label="Email us"
                    >
                        <span className={styles.contactIcon}>
                            {/* Email */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <span className={styles.contactText}>Meet.patel@patelenterprise.co</span>
                    </a>

                    <a
                        href="https://www.patelenterprise.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactItem}
                        aria-label="Visit website"
                    >
                        <span className={styles.contactIcon}>
                            {/* Globe */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <span className={styles.contactText}>www.patelenterprise.co</span>
                    </a>

                </div>

            </div>
        </section>
    );
};

export default ServicesContact;