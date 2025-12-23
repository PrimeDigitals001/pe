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
      {/* White Background Card */}
      <div className={styles.rectangle17}></div>

      {/* Image - FIXED: Regular img tag, no Next Image */}
      <img 
        className={styles.rectangle171}
        src={image}
        alt={title}
      />

      {/* Title */}
      <div className={styles.title}>{title}</div>

      {/* Description */}
      <div className={styles.description}>
        {description}
      </div>

      {/* Client */}
      <div className={styles.clientXyzTeam}>
        <span className={styles.clientXyzTeamSpan}>Client: </span>
        <span className={styles.clientXyzTeamSpan2}>{client}</span>
      </div>

      {/* Status Badge (only if ongoing) */}
      {status === 'ongoing' && (
        <div className={styles.frame18}>
          <div className={styles.onGoing}>On going</div>
        </div>
      )}
    </Link>
  );
};

export default ProjectCard;