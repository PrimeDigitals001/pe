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
        
        {/* Left Column - Text Content */}
        <div className={styles.contentColumn}>
          <h2 className={`${styles.title} ${styles.animateUp}`}>
            Our Journey
          </h2>
          
          <p className={`${styles.description} ${styles.animateUp}`}>
          We began by delivering safe, durable industrial solutions and evolved from basic fabrication to complete safety and access systems—lifelines, guardrails, walkways, and custom platforms built to global standards. With advanced technology, certified processes, and expert talent, we’ve earned a reputation for innovation, quality, and timely delivery, serving industries across the region with the same commitment that defined our start.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className={`${styles.imageColumn} ${styles.animateUp}`}>
          <img 
            src="/images/rectangle_158.png" 
            alt="Our Journey - MK Roofing"
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
};

export default OurJourney;