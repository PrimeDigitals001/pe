'use client';

import React from 'react';
import styles from './ProjectsHero.module.css';

const ProjectsHero = () => {
  return (
    <section className={styles.projectsHero}>
      {/* Background Image */}
      <div className={styles.heroImage}>
        <img 
          src="/images/hero_img.png" 
          alt="Patel Enterprise"
          className={styles.image}
        />
      </div>

      {/* Overlay Content */}
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Our Project</h1>
        <p className={styles.subtitle}>
        Explore our portfolio of successful construction projects and achievements.
        </p>
      </div>
    </section>
  );
};

export default ProjectsHero;