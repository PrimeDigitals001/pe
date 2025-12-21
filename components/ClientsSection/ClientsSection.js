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

  // Client logos - Add your actual logo paths here
  const clients = [
    { id: 1, src: '/images/googleplus-logo.svg', alt: 'Google Plus', width: 139.23, height: 40 },
    { id: 2, src: '/images/microsoft-logo.svg', alt: 'Microsoft', width: 163.85, height: 35 },
    { id: 3, src: '/images/metallb-horizontal-white-logo.svg', alt: 'MetalLB', width: 119.49, height: 40 },
    { id: 4, src: '/images/linkedin-plain-wordmark-logo.svg', alt: 'LinkedIn', width: 160, height: 40 },
    { id: 5, src: '/images/frame-2.svg', alt: 'Client 5', width: 141.24, height: 40 },
    { id: 6, src: '/images/group.svg', alt: 'Client 6', width: 97.36, height: 40 },
    { id: 7, src: '/images/amazon-logo.svg', alt: 'Amazon', width: 130.61, height: 40 }
  ];

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
                    style={{ 
                      width: `${client.width}px`, 
                      height: `${client.height}px` 
                    }}
                    className={styles.logo}
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
                    style={{ 
                      width: `${client.width}px`, 
                      height: `${client.height}px` 
                    }}
                    className={styles.logo}
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