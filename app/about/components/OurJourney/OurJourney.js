'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './OurJourney.module.css';

const OurJourney = () => {
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
      className={`${styles.ourJourneySection} ${isVisible ? styles.animate : ''}`}
    >
      <div className={styles.container}>
        
        {/* Text Content */}
        <div className={styles.contentColumn}>
          <h2 className={`${styles.title} ${styles.animateUp}`}>
            Our Journey
          </h2>
          
          <p className={`${styles.description} ${styles.animateUp}`}>
          Our journey began with a commitment to deliver safe, durable, and reliable solutions for every industry. Over the years, we have grown from providing basic fabrication services to offering complete safety and access systems including lifelines, guardrails, walkways, and custom platforms designed to meet global standards. With continuous investment in advanced technology, certified processes, and an experienced team, we have built a strong reputation for quality, innovation, and on-time project delivery. Today, we stand as a trusted partner for industries across the region, driven by the same dedication to safety, precision, and customer satisfaction that defined our beginning.
          </p>
        </div>

        {/* Image */}
        <div className={`${styles.imageColumn} ${styles.animateUp}`}>
          <img 
            src="/images/rectangle_158.png" 
            alt="Our Journey - Patel Enterprise"
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
};

export default OurJourney;