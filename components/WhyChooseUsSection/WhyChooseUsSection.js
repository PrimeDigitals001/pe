'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './WhyChooseUsSection.module.css';

const WhyChooseUsSection = () => {
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

  const features = [
    {
      id: 1,
      icon: '/images/_1.png', // Changed path
      title: 'Certified Safety & Compliance',
      description: 'All our systems meet EN, OSHA & ANSI international safety standards.'
    },
    {
      id: 2,
      icon: '/images/_2.png', // Changed path
      title: 'Premium Quality Materials',
      description: 'Built with galvanized steel, aluminium, reinforced components for long lasting performance.'
    },
    {
      id: 3,
      icon: '/images/_3.png', // Changed path
      title: 'End-to-End Safety Solutions',
      description: 'Complete range of lifelines, guardrails, walkways & access platforms for total roof safety.'
    },
    {
      id: 4,
      icon: '/images/_4.png', // Changed path
      title: 'Experienced Technical Team',
      description: 'Expert team for site survey, design, installation & project execution.'
    },
    {
      id: 5,
      icon: '/images/_5.png', // Changed path
      title: 'Custom-Engineered Systems',
      description: 'Solutions tailored to any roof type, height, or structural complexity.'
    },
    {
      id: 6,
      icon: '/images/_6.png', // Changed path
      title: 'Non-Penetrative Technology',
      description: 'Engineered to protect roof integrity no drilling, no leakage, no damage.'
    },
    {
      id: 7,
      icon: '/images/_7.png', // Changed path
      title: 'Fast & Efficient Installation',
      description: 'Modular systems ensure quick assembly, minimal downtime & smooth workflow.'
    },
    {
      id: 8,
      icon: '/images/_8.png', // Changed path
      title: 'Trusted Across Industries',
      description: 'Used by aviation, industrial, commercial & infrastructure leaders worldwide.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`${styles.whyChooseUsSection} ${isVisible ? styles.animate : ''}`}
    >
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <h2 className={`${styles.title} ${styles.animateUp}`}>
            Why Choose Us
          </h2>
          <p className={`${styles.subtitle} ${styles.animateUp}`}>
            Discover excellence in construction with our cutting-edge solutions and proven capabilities.
          </p>
        </div>

        {/* Features Grid - 4×2 */}
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`${styles.featureCard} ${styles.animateUp}`}
              style={{ animationDelay: `${0.2 + (index * 0.08)}s` }}
            >
              {/* Icon */}
              <div className={styles.iconWrapper}>
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className={styles.icon}
                />
              </div>

              {/* Title */}
              <h3 className={styles.featureTitle}>{feature.title}</h3>

              {/* Description */}
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;