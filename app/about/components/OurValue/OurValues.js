'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './OurValues.module.css';

const OurValues = () => {
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

  const values = [
    {
      id: 1,
      icon: '/images/_1.png',
      title: 'Certified Safety & Compliance',
      description: 'All our systems meet EN, OSHA & ANSI international safety standards.'
    },
    {
      id: 2,
      icon: '/images/_2.png',
      title: 'Premium Quality Materials',
      description: 'Built with galvanized steel, aluminium, reinforced components for long lasting performance.'
    },
    {
      id: 3,
      icon: '/images/_7.png',
      title: 'Fast & Efficient Installation',
      description: 'Modular systems ensure quick assembly, minimal downtime & smooth workflow.'
    },
    {
      id: 4,
      icon: '/images/_4.png',
      title: 'Experienced Technical Team',
      description: 'Expert team for site survey, design, installation & project execution.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`${styles.ourValuesSection} ${isVisible ? styles.animate : ''}`}
    >
      <div className={styles.container}>
        
        {/* Title */}
        <h2 className={`${styles.title} ${styles.animateUp}`}>
          Our Values
        </h2>

        {/* Values Grid - 4 cards in 1 row */}
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div 
              key={value.id} 
              className={`${styles.valueCard} ${styles.animateUp}`}
              style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
            >
              {/* Card Background */}
              <div className={styles.cardBackground}></div>

              {/* Icon */}
              <div className={styles.iconWrapper}>
                <img 
                  src={value.icon} 
                  alt={value.title}
                  className={styles.icon}
                />
              </div>

              {/* Title */}
              <h3 className={styles.cardTitle}>{value.title}</h3>

              {/* Description */}
              <p className={styles.cardDescription}>{value.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurValues;