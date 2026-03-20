'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './ClientsSection.module.css';

const ClientsSection = () => {
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

  // Generate client logos array (1.png to 30.png)
  const clients = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    src: `/images/client_logo/${index + 1}.png`,
    alt: `Client ${index + 1}`,
  }));

  return (
    <section
      ref={sectionRef}
      className={`${styles.clientsSection} ${isVisible ? styles.animate : ''}`}
    >
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h2 className={`${styles.title} ${styles.animateUp}`}>
            Our Clients
          </h2>
          <p className={`${styles.subtitle} ${styles.animateUp}`}>
            We are proud to collaborate with leading companies across diverse industries.
          </p>
        </div>

        {/* Infinite Scroll Logos */}
        <div className={styles.logoScrollWrapper}>
          <div className={styles.logoScroll}>
            {/* First set of logos */}
            <div className={styles.logoTrack}>
              {clients.map((client) => (
                <div key={`set1-${client.id}`} className={styles.logoItem}>
                  <img
                    src={client.src}
                    alt={client.alt}
                    className={styles.logo}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className={styles.logoTrack}>
              {clients.map((client) => (
                <div key={`set2-${client.id}`} className={styles.logoItem}>
                  <img
                    src={client.src}
                    alt={client.alt}
                    className={styles.logo}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;