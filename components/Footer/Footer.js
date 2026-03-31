'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Exact coordinates for Patel Enterprise, GIDC Narmada Nagar, Bharuch
  const coords = '21.728716,73.012109';
  const viewLocationUrl = `https://www.google.com/maps?q=${coords}`;
  const getDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coords}`;
  const embedUrl = `https://maps.google.com/maps?q=${coords}&output=embed&z=17`;

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
              Plot No - 107, GIDC - Narmada Nagar, Behind Apex Hotel, Bharuch - 392015
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
              <Link href="/services" className={styles.navLink}>Services</Link>
              <Link href="/projects" className={styles.navLink}>Projects</Link>
              <Link href="/contact" className={styles.navLink}>Contact us</Link>
            </nav>
          </div>

        </div>

        {/* ── Map Section ── */}
        <div className={styles.mapSection}>
          {/* Embedded map */}
          <div className={styles.mapWrapper}>
            <iframe
              src={embedUrl}
              className={styles.mapIframe}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Patel Enterprise location map"
            />
            {/* Subtle overlay to prevent accidental scrolls on desktop */}
            <div className={styles.mapClickShield} aria-hidden="true" />
          </div>

          {/* Map action buttons */}
          <div className={styles.mapActions}>
            <div className={styles.mapInfo}>
              <svg className={styles.mapPinIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                  fill="currentColor" />
              </svg>
              <span className={styles.mapAddress}>
                Plot No - 107, GIDC Narmada Nagar,<br />Behind Apex Hotel, Bharuch — 392015
              </span>
            </div>

            <a
              href={viewLocationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapBtn}
              aria-label="View our location on Google Maps"
            >
              <svg viewBox="0 0 24 24" fill="none" className={styles.mapBtnIcon} aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                  fill="currentColor" />
              </svg>
              View Location
            </a>

            <a
              href={getDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.mapBtn} ${styles.mapBtnPrimary}`}
              aria-label="Get directions to Patel Enterprise"
            >
              <svg viewBox="0 0 24 24" fill="none" className={styles.mapBtnIcon} aria-hidden="true">
                <path d="M21.71 11.29l-9-9a1 1 0 00-1.42 0l-9 9a1 1 0 000 1.42l9 9a1 1 0 001.42 0l9-9a1 1 0 000-1.42zM14 14.5V12h-4v3H8v-4a1 1 0 011-1h5V7.5l3.5 3.5-3.5 3.5z"
                  fill="currentColor" />
              </svg>
              Get Directions
            </a>
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