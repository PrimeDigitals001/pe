'use client';

import React from 'react';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const { slug, title, description, client, status, image } = project;

  return (
    <Link 
      href={`/projects/${slug}`}
      className={styles.projectCard}
    >
      {/* Image */}
      <div className={styles.imageWrapper}>
        <img 
          className={styles.projectImage}
          src={image}
          alt={title}
          loading="lazy"
        />
      </div>

      {/* Content Area */}
      <div className={styles.content}>
        
        {/* Title + Status Badge Row */}
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{title}</h3>
          
          {status === 'ongoing' && (
            <div className={styles.statusBadge}>
              <span className={styles.statusText}>On going</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className={styles.description}>
          {description}
        </p>

        {/* Client */}
        <div className={styles.client}>
          <span className={styles.clientLabel}>Client: </span>
          <span className={styles.clientName}>{client}</span>
        </div>

      </div>
    </Link>
  );
};

export default ProjectCard;