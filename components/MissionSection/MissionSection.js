'use client'; // Add this at the very top!

import React from 'react';
import { motion } from 'framer-motion';
import styles from './MissionSection.module.css';

const MissionSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const slideFromBottom = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <motion.section 
      className={styles.missionSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className={styles.missionContainer}>
        
        {/* Top Images Row */}
        <div className={styles.topImages}>
          <motion.div 
            className={styles.imageBox}
            variants={slideFromLeft}
          >
            <img 
              src="/images/rectangle-169.png" 
              alt="Patel Enterprise Project 1" 
              className={styles.image}
            />
          </motion.div>
          <motion.div 
            className={styles.imageBox}
            variants={slideFromRight}
          >
            <img 
              src="/images/rectangle-170.png" 
              alt="Patel Enterprise Project 2" 
              className={styles.image}
            />
          </motion.div>
        </div>

        {/* Center Content */}
        <div className={styles.centerContent}>
          {/* Heading Container */}
          <motion.div 
            className={styles.headingContainer}
            variants={slideFromBottom}
          >
            <h2 className={styles.missionHeading}>
              Our mission is to deliver durable,
              <br />
              innovative, and safety-driven roofing systems that protect industries and empower sustainable infrastructure.
            </h2>
          </motion.div>

          {/* Description Container */}
          <motion.div 
            className={styles.descriptionContainer}
            variants={slideFromBottom}
          >
            <p className={styles.description}>
              Dedicated to redefining industrial construction with high-quality materials,
              <br />
              expert engineering, and eco-efficient roofing solutions designed to last.
            </p>
          </motion.div>

          {/* Button */}
          <motion.button 
            className={styles.quoteButton}
            variants={slideFromBottom}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            GET QUOTE
          </motion.button>
        </div>

        {/* Bottom Images Row */}
        <div className={styles.bottomImages}>
          <motion.div 
            className={styles.imageBox}
            variants={slideFromLeft}
          >
            <img 
              src="/images/rectangle-171.png" 
              alt="Patel Enterprise Project 3" 
              className={styles.image}
            />
          </motion.div>
          <motion.div 
            className={styles.imageBox}
            variants={slideFromRight}
          >
            <img 
              src="/images/rectangle-172.png" 
              alt="Patel Enterprise Project 4" 
              className={styles.image}
            />
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
};

export default MissionSection;