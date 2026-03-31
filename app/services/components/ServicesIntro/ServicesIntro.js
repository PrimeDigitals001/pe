'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './ServicesIntro.module.css';

const ServicesIntro = () => {
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
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (observer) observer.disconnect();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`${styles.servicesIntroSection} ${isVisible ? styles.animate : ''}`}
        >
            <div className={styles.container}>

                {/* Image — Left Side */}
                <div className={`${styles.imageColumn} ${styles.animateUp}`}>
                    <img
                        src="/images/services_intro.png"
                        alt="Why Choose Patel Enterprise"
                        className={styles.image}
                    />
                </div>

                {/* Text Content — Right Side */}
                <div className={styles.contentColumn}>
                    <h2 className={`${styles.title} ${styles.animateUp}`}>
                        Why Choose Us?
                    </h2>

                    <p className={`${styles.description} ${styles.animateUp}`}>
                        At Patel Enterprise, we are committed to delivering quality, reliability, and
                        value in every project we support. Our products meet industry standards
                        and are sourced with a strong focus on durability and performance,
                        ensuring long-term results for industrial and construction applications.
                        With in-depth industry knowledge and technical understanding, we help
                        clients select the right solutions for their specific project needs.
                    </p>

                    <p className={`${styles.description} ${styles.animateUp}`}>
                        We believe in building trust through transparent communication, timely
                        delivery, and consistent service. Our customer-first approach, ethical
                        business practices, and dedication to quality control set us apart. By
                        combining dependable materials with professional support, Patel Enterprise
                        becomes more than a supplier — we become a reliable partner in your
                        project's success.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ServicesIntro;