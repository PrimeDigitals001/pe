'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './StatsSection.module.css';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    engineers: 0
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounting();
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const startCounting = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = {
      experience: 10,
      projects: 500,
      clients: 180,
      engineers: 25
    };

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        experience: Math.floor(targets.experience * progress),
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        engineers: Math.floor(targets.engineers * progress)
      });

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(interval);
      }
    }, stepDuration);
  };

  const stats = [
    {
      id: 1,
      icon: '/images/gears.png',
      label: 'YEARS OF EXPERIENCE',
      value: counts.experience,
      suffix: '+'
    },
    {
      id: 2,
      icon: '/images/factory.png',
      label: 'PROJECT COMPLETED',
      value: counts.projects,
      suffix: '+'
    },
    {
      id: 3,
      icon: '/images/handshake.png',
      label: 'HAPPY CLIENTS',
      value: counts.clients,
      suffix: '+'
    },
    {
      id: 4,
      icon: '/images/manager.png',
      label: 'EXPERT ENGINEERS',
      value: counts.engineers,
      suffix: '+'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`${styles.statsSection} ${isVisible ? styles.animate : ''}`}
    >
      <div className={styles.container}>
        
        {/* Top Border Line */}
        <div className={styles.topLine}></div>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`${styles.statItem} ${styles.animateUp}`}
              style={{ animationDelay: `${0.1 + (index * 0.1)}s` }}
            >
              {/* Icon */}
              <div className={styles.iconWrapper}>
                <img 
                  src={stat.icon} 
                  alt={stat.label}
                  className={styles.icon}
                />
              </div>

              {/* Label */}
              <div className={styles.label}>
                {stat.label}
              </div>

              {/* Value */}
              <div className={styles.value}>
                {stat.value}{stat.suffix}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Border Line */}
        <div className={styles.bottomLine}></div>

      </div>
    </section>
  );
};

export default StatsSection;