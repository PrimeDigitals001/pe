'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './ServicesSection.module.css';

const ServicesSection = () => {
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

  const services = [
    {
      id: 1,
      image: '/images/rectangle-20.png',
      icon: '/icons/fall-protection.svg', // Optional icon for circle
      title: 'Fall Protection Systems',
      description: 'Complete range of horizontal lifelines, overhead lifelines & anchor points ensuring safe work at height.'
    },
    {
      id: 2,
      image: '/images/rectangle-21.png',
      icon: '/icons/roof-edge.svg',
      title: 'Roof Edge Protection',
      description: 'Non-penetrative guardrail systems for permanent or temporary protection on all roof types.'
    },
    {
      id: 3,
      image: '/images/rectangle-22.png',
      icon: '/icons/rooftop-walkways.svg',
      title: 'Rooftop Walkways',
      description: 'Anti-slip walkways that offer safe, stable access across uneven or fragile roofs.'
    },
    {
      id: 4,
      image: '/images/rectangle-23.png',
      icon: '/icons/step-over.svg',
      title: 'Step-Over & Access Platforms',
      description: 'Modular platforms designed to cross obstacles, ducts, pipelines & level changes safely.'
    },
    {
      id: 5,
      image: '/images/rectangle-24.png',
      icon: '/icons/structural-decking.svg',
      title: 'Structural Decking (SMARTDEK 51)',
      description: 'High-strength steel decking providing fast construction, reduced steel usage, and superior load performance.'
    },
    {
      id: 6,
      image: '/images/rectangle-25.png',
      icon: '/icons/roofing-materials.svg',
      title: 'Premium Roofing & Cladding Materials',
      description: 'Long-lasting COLORBOND® XRW, ZINCALUME® roofing & cladding for industrial and commercial structures.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`${styles.servicesSection} ${isVisible ? styles.animate : ''}`}
    >
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <h2 className={`${styles.title} ${styles.animateUp}`}>
            Our Services
          </h2>
          <p className={`${styles.subtitle} ${styles.animateUp}`}>
            Providing world-class safety, access, and engineering solutions designed to protect people and infrastructure.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`${styles.serviceCard} ${styles.animateUp}`}
              style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
            >
              {/* Card Image */}
              <div className={styles.cardImage}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  loading="lazy"
                />
              </div>

              {/* Icon Circle (positioned at image/content border) */}
              <div className={styles.iconCircle}>
                {/* Optional: Add icon inside */}
                {/* <img src={service.icon} alt="" /> */}
              </div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;