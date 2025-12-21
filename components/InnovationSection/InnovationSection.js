'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './InnovationSection.module.css';

const InnovationSection = () => {
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
      className={`${styles.innovationSection} ${isVisible ? styles.animate : ''}`}
    >
      <div className={styles.container}>
        
        {/* Title */}
        <h2 className={`${styles.title} ${styles.animateUp}`}>
          Innovation in Motion
        </h2>

        {/* Subtitle */}
        <p className={`${styles.subtitle} ${styles.animateUp}`}>
          Experience our construction expertise through a showcase of our standout projects.
        </p>

        {/* Video Container */}
        <div className={`${styles.videoContainer} ${styles.animateUp}`}>
          <video 
            className={styles.video}
            autoPlay
            loop
            muted
            playsInline
            poster="/images/video-poster.jpg" // Optional: Add a poster image
          >
            <source src="/videos/innovation-showcase.mp4" type="video/mp4" />
            <source src="/videos/innovation-showcase.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          
          {/* Play button overlay (optional) */}
          {/* <button className={styles.playButton} aria-label="Play video">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="32" fill="rgba(38, 131, 198, 0.9)" />
              <path d="M26 20L44 32L26 44V20Z" fill="white" />
            </svg>
          </button> */}
        </div>

      </div>
    </section>
  );
};

export default InnovationSection;