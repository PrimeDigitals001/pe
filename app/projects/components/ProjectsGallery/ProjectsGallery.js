'use client';

import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from '../ProjectCard';
import { projectsData } from '../../data/projectsData';
import styles from './ProjectsGallery.module.css';

const ProjectsGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter(project => project.category === activeFilter)
      );
    }
  }, [activeFilter]);

  return (
    <section 
      ref={sectionRef}
      className={`${styles.projectsGallerySection} ${isVisible ? styles.animate : ''}`}
    >
      <div className={styles.container}>
        
        {/* Filter Buttons */}
        <div className={styles.filterButtonsWrapper}>
          <button
            data-filter="all"
            onClick={() => setActiveFilter('all')}
            className={`${styles.filterButton} ${
              activeFilter === 'all' ? styles.active : ''
            }`}
          >
            All
          </button>
          <button
            data-filter="industrial"
            onClick={() => setActiveFilter('industrial')}
            className={`${styles.filterButton} ${
              activeFilter === 'industrial' ? styles.active : ''
            }`}
          >
            Industrial
          </button>
          <button
            data-filter="commercial"
            onClick={() => setActiveFilter('commercial')}
            className={`${styles.filterButton} ${
              activeFilter === 'commercial' ? styles.active : ''
            }`}
          >
            Commercial
          </button>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project}
              />
            ))
          ) : (
            <div className={styles.noProjects}>
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default ProjectsGallery;