'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './StatsSection.module.css';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    clients: 0,
    engineers: 0,
  });
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          startCounters();
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  // Counter Animation Function
  const startCounters = () => {
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = duration / frameRate;

    const targets = {
      projects: 250,
      experience: 10,
      clients: 180,
      engineers: 25,
    };

    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuad = 1 - Math.pow(1 - progress, 3); // Easing function

      setCounters({
        projects: Math.floor(easeOutQuad * targets.projects),
        experience: Math.floor(easeOutQuad * targets.experience),
        clients: Math.floor(easeOutQuad * targets.clients),
        engineers: Math.floor(easeOutQuad * targets.engineers),
      });

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCounters(targets); // Ensure final values
      }
    }, frameRate);
  };

  const stats = [
    {
      id: 1,
      number: counters.projects,
      suffix: '+',
      label: 'PROJECT COMPLETED',
    },
    {
      id: 2,
      number: counters.experience,
      suffix: '+',
      label: 'YEARS OF EXPERIENCE',
    },
    {
      id: 3,
      number: counters.clients,
      suffix: '+',
      label: 'HAPPY CLIENTS',
    },
    {
      id: 4,
      number: counters.engineers,
      suffix: '+',
      label: 'EXPERT ENGINEERS',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className={`${styles.statsSection} ${isVisible ? styles.animate : ''}`}
    >
      {/* Blue Background Bar */}
      <div className={styles.blueBackground}></div>

      {/* Stats Container */}
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`${styles.statItem} ${styles.animateUp}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Label */}
              <div className={styles.statLabel}>{stat.label}</div>
              
              {/* Number with Counter */}
              <div className={styles.statNumber}>
                {stat.number}
                <span className={styles.suffix}>{stat.suffix}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;