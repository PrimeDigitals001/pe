'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

// ─────────────────────────────────────────────────────────────
// SLIDES CONFIG
// Add / remove slides here. Each slide:
//   desktop        → required, always shown on desktop
//   mobile         → optional, dedicated mobile crop
//                    if null → desktop image used with mobilePosition
//   mobilePosition → where to anchor the desktop image on mobile
//                    e.g. 'center center' / '70% center' / 'center top'
// ─────────────────────────────────────────────────────────────
const slides = [
    {
        desktop: '/images/hero_bg.png',
        mobile: '/images/mobile_hero.png',
        mobilePosition: 'center center',
    },
    {
        desktop: '/images/hero_bg_2.png',
        mobile: null,
        mobilePosition: '65% center',
    },
    {
        desktop: '/images/hero_bg_3.png',
        mobile: null,
        mobilePosition: 'center top',
    },
    {
        desktop: '/images/hero_bg_4.png',
        mobile: null,
        mobilePosition: '60% center',
    },
    {
        desktop: '/images/hero_bg_5.png',
        mobile: null,
        mobilePosition: 'center center',
    },
];

const INTERVAL = 5000;

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [mobileImgErrors, setMobileImgErrors] = useState({});
    const [slideErrors, setSlideErrors] = useState({});
    const timerRef = useRef(null);

    // Find next valid slide index, skipping broken ones
    // If everything is broken, returns current — never blank
    const getNextValid = useCallback((from, errors) => {
        for (let i = 1; i <= slides.length; i++) {
            const next = (from + i) % slides.length;
            if (!errors[next]) return next;
        }
        return from;
    }, []);

    const startTimer = useCallback((errorsSnapshot) => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrent((c) => {
                const next = getNextValid(c, errorsSnapshot);
                if (next === c) return c;
                setPrev(c);
                return next;
            });
        }, INTERVAL);
    }, [getNextValid]);

    // Detect mobile
    useEffect(() => {
        const mq = window.matchMedia('(max-width: 768px)');
        setIsMobile(mq.matches);
        const handler = (e) => setIsMobile(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    // Start timer on mount
    useEffect(() => {
        startTimer({});
        return () => clearInterval(timerRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Clear prev layer after fade
    useEffect(() => {
        if (prev === null) return;
        const t = setTimeout(() => setPrev(null), 900);
        return () => clearTimeout(t);
    }, [current]);

    const handleDesktopError = (i) => {
        setSlideErrors((prevErrors) => {
            const updated = { ...prevErrors, [i]: true };
            // If this was the active slide, jump to next valid immediately
            setCurrent((c) => {
                if (c !== i) return c;
                const next = getNextValid(i, updated);
                if (next !== i) setPrev(i);
                return next;
            });
            startTimer(updated);
            return updated;
        });
    };

    const handleMobileError = (mobileUrl) => {
        // Mobile image missing → silently fall back to desktop crop, slide stays
        setMobileImgErrors((prev) => ({ ...prev, [mobileUrl]: true }));
    };

    const getImageSrc = (slide) => {
        if (!isMobile) return slide.desktop;
        if (slide.mobile && !mobileImgErrors[slide.mobile]) return slide.mobile;
        return slide.desktop;
    };

    const getPosition = (slide) => {
        if (!isMobile) return 'center center';
        if (slide.mobile && !mobileImgErrors[slide.mobile]) return 'center center';
        return slide.mobilePosition || 'center center';
    };

    const goToSlide = (i) => {
        if (slideErrors[i]) return;
        clearInterval(timerRef.current);
        setPrev(current);
        setCurrent(i);
        startTimer(slideErrors);
    };

    return (
        <section className={styles.hero}>

            {/* ── Slide layers ── */}
            {slides.map((slide, i) => {
                const isActive = i === current;
                const isPrev = i === prev;
                if (!isActive && !isPrev) return null;
                if (slideErrors[i]) return null;

                return (
                    <div
                        key={i}
                        className={`${styles.slideLayer} ${isActive ? styles.slideActive : styles.slideFadeOut}`}
                    >
                        <Image
                            src={getImageSrc(slide)}
                            alt=""
                            fill
                            priority={i === 0}
                            quality={90}
                            style={{
                                objectFit: 'cover',
                                objectPosition: getPosition(slide),
                            }}
                            onError={() => {
                                const mobileAttempted = isMobile && slide.mobile && !mobileImgErrors[slide.mobile];
                                if (mobileAttempted) {
                                    // Mobile image failed → fall back to desktop, keep the slide
                                    handleMobileError(slide.mobile);
                                } else {
                                    // Desktop image failed → remove slide from rotation entirely
                                    handleDesktopError(i);
                                }
                            }}
                        />
                    </div>
                );
            })}

            {/* Overlay */}
            <div className={styles.overlay} />

            {/* Content */}
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                    <span className={styles.line1}>Complete Industrial</span>
                    <br />
                    <span className={styles.line2}>Roofing & Shed Solutions</span>
                </h1>

                <p className={styles.heroDescription}>
                    We provide durable, safe, and innovative roofing systems for factories, warehouses, and commercial structures powered by Tata BlueScope, Kee Safety, Tegola, and Saint-Gobain.
                </p>

                <Link href="/contact" className={styles.ctaButton}>
                    GET STARTED
                </Link>
            </div>

            {/* Dots — errored slides hidden automatically */}
            <div className={styles.dots} aria-hidden="true">
                {slides.map((_, i) => {
                    if (slideErrors[i]) return null;
                    return (
                        <button
                            key={i}
                            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                            onClick={() => goToSlide(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    );
                })}
            </div>

        </section>
    );
}