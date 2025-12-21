'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission - will be implemented later
    console.log('Email submitted:', email);
    setEmail('');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Top Section */}
        <div className={styles.topSection}>
          
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <h2 className={styles.mainTitle}>Let's Talk!</h2>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <p className={styles.description}>
              Ready to take the first step toward realizing your dream
              <br />
              project? Contact us today for a consultation and let's
              <br />
              turn your vision into a reality.
            </p>
            <button className={styles.ctaButton}>
              Build project with us
            </button>
          </div>

        </div>

        {/* Divider Line 1 */}
        <div className={styles.dividerLine}></div>

        {/* Middle Section */}
        <div className={styles.middleSection}>
          
          {/* Left Column - Logo & Contact */}
          <div className={styles.contactColumn}>
            {/* Logo */}
            <div className={styles.logoWrapper}>
              <Image 
                src="/images/logo.png" 
                alt="MK Roofing Logo"
                width={240}
                height={86}
                className={styles.logo}
              />
            </div>

            {/* Tagline */}
            <p className={styles.tagline}>
              Designing the Future, One Space at a Time
            </p>

            {/* Address */}
            <p className={styles.address}>
              Alpha Arcade, A 201, GIDC Rd, Bholav, Bharuch, Gujarat 392015
            </p>

            {/* Mail */}
            <p className={styles.contactItem}>Mail us:</p>

            {/* Phone */}
            <p className={styles.contactItem}>Call us: +91 73599 51901</p>

            {/* Navigation Links */}
            <nav className={styles.navLinks}>
              <a href="#about" className={styles.navLink}>About</a>
              <a href="#services" className={styles.navLink}>Services</a>
              <a href="#testimonials" className={styles.navLink}>Testimonials</a>
              <a href="#contact" className={styles.navLink}>Contact us</a>
            </nav>
          </div>

          {/* Right Column - Newsletter (Starts after 2nd link on left) */}
          <div className={styles.newsletterColumn}>
            <h3 className={styles.newsletterTitle}>
              Sign up to receive the latest news and events from us.
            </h3>
            
            <form onSubmit={handleSubmit} className={styles.newsletterForm}>
              <label htmlFor="email" className={styles.emailLabel}>
                Your Email*
              </label>
              
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  required
                  className={styles.emailInput}
                />
              </div>

              <button type="submit" className={styles.sendButton}>
                SEND
              </button>

              <p className={styles.disclaimer}>
                No worries, we don't spamyour inbox.
              </p>
            </form>
          </div>

        </div>

        {/* Divider Line 2 */}
        <div className={styles.dividerLine}></div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          
          {/* Social Links */}
          <div className={styles.socialSection}>
            <p className={styles.followLabel}>FOLLOW US</p>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
            >
              Instagram
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
            >
              Facebook
            </a>
          </div>

          {/* Copyright */}
          <p className={styles.copyright}>
            © {currentYear} Patel Enterprise. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;