'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Top Section - Let's Talk */}
        <div className={styles.topSection}>
          <div className={styles.leftColumn}>
            <h2 className={styles.mainTitle}>Let's Talk!</h2>
          </div>
          <div className={styles.rightColumn}>
            <p className={styles.description}>
              Ready to take the first step toward realizing your dream project?
              Contact us today for a consultation and let's turn your vision into a reality.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Build project with us
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.dividerLine}></div>

        {/* Middle Section - 3 columns */}
        <div className={styles.middleSection}>

          {/* Column 1 - Logo */}
          <div className={styles.logoColumn}>
            <div className={styles.logoWrapper}>
              <Image
                src="/images/logo.png"
                alt="Patel Enterprise Logo"
                width={240}
                height={86}
                className={styles.logo}
              />
            </div>
          </div>

          {/* Column 2 - Contact Info */}
          <div className={styles.contactColumn}>
            <p className={styles.tagline}>
              Designing the Future, One Space at a Time
            </p>
            <p className={styles.address}>
              Plot No - 107, GIDC - Narmada Nagar, Bharuch - 392015
            </p>
            <Link
              href="mailto:meet.patel@patelenterprise.co.in"
              className={styles.contactItem}
            >
              Mail us: meet.patel@patelenterprise.co
            </Link>
            <Link
              href="tel:+917359951901"
              className={styles.contactItem}
            >
              Call us: +91 73599 51901
            </Link>
          </div>

          {/* Column 3 - Nav Links */}
          <div className={styles.navColumn}>
            <nav className={styles.navLinks}>
              <Link href="/about" className={styles.navLink}>About us</Link>
              <Link href="/products" className={styles.navLink}>Products</Link>
              <Link href="/projects" className={styles.navLink}>Projects</Link>
              <Link href="/contact" className={styles.navLink}>Contact us</Link>
            </nav>
          </div>

        </div>

        {/* Divider */}
        <div className={styles.dividerLine}></div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
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
          <p className={styles.copyright}>
            © {currentYear} Patel Enterprise. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;