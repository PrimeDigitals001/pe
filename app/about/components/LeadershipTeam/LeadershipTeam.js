'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './LeadershipTeam.module.css';

const LeadershipTeam = () => {
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

  const leaders = [
    {
      id: 1,
      name: 'Meet Patel',
      role: 'Co-Founder & Director',
      image: '/images/leader_1.png', // Update with your image path
      linkedin: '#', // Add LinkedIn URL
    },
    {
      id: 2,
      name: 'John Smith',
      role: 'Chief Technology Officer',
      image: '/images/leader_2.png',
      linkedin: '#',
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'Head of Operations',
      image: '/images/leader_3.png',
      linkedin: '#',
    },
    {
      id: 4,
      name: 'David Chen',
      role: 'Business Development Lead',
      image: '/images/leader_4.png',
      linkedin: '#',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className={`${styles.leadershipSection} ${isVisible ? styles.animate : ''}`}
    >
      <div className={styles.container}>
        
        {/* Title */}
        <h2 className={`${styles.title} ${styles.animateUp}`}>
          Our Leadership Team
        </h2>

        {/* Leadership Cards Grid */}
        <div className={styles.leadershipGrid}>
          {leaders.map((leader, index) => (
            <div 
              key={leader.id} 
              className={`${styles.leaderCard} ${styles.animateUp}`}
              style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
            >
              {/* Card Container */}
              <div className={styles.cardContainer}>
                
                {/* Image */}
                <div className={styles.imageWrapper}>
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className={styles.leaderImage}
                  />
                  {/* LinkedIn Overlay (shows on hover) */}
                  <a 
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinOverlay}
                    aria-label={`${leader.name}'s LinkedIn`}
                  >
                    <svg 
                      width="32" 
                      height="32" 
                      viewBox="0 0 24 24" 
                      fill="white"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>

                {/* Info Section */}
                <div className={styles.infoSection}>
                  <h3 className={styles.leaderName}>{leader.name}</h3>
                  <p className={styles.leaderRole}>{leader.role}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeadershipTeam;