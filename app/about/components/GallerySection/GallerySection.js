'use client';

import React from 'react';
import Image from 'next/image';
import styles from './GallerySection.module.css';

const images = [
  { src: '/images/gallery/1.png',  alt: 'Gallery image 1' },
  { src: '/images/gallery/2.png',  alt: 'Gallery image 2' },
  { src: '/images/gallery/3.png',  alt: 'Gallery image 3' },
  { src: '/images/gallery/4.png',  alt: 'Gallery image 4' },
  { src: '/images/gallery/5.png',  alt: 'Gallery image 5' },
  { src: '/images/gallery/6.png',  alt: 'Gallery image 6' },
  { src: '/images/gallery/7.png',  alt: 'Gallery image 7' },
  { src: '/images/gallery/8.png',  alt: 'Gallery image 8' },
  { src: '/images/gallery/9.png',  alt: 'Gallery image 9' },
  { src: '/images/gallery/10.png', alt: 'Gallery image 10' },
  { src: '/images/gallery/11.png', alt: 'Gallery image 11' },
  { src: '/images/gallery/12.png', alt: 'Gallery image 12' },
  { src: '/images/gallery/13.png', alt: 'Gallery image 13' },
  { src: '/images/gallery/14.png', alt: 'Gallery image 14' },
  { src: '/images/gallery/15.png', alt: 'Gallery image 15' },
  { src: '/images/gallery/16.png', alt: 'Gallery image 16' },
  { src: '/images/gallery/17.png', alt: 'Gallery image 17' },
  { src: '/images/gallery/18.png', alt: 'Gallery image 18' },
  { src: '/images/gallery/19.png', alt: 'Gallery image 19' },
  { src: '/images/gallery/20.png', alt: 'Gallery image 20' },
  { src: '/images/gallery/21.png', alt: 'Gallery image 21' },
  { src: '/images/gallery/22.png', alt: 'Gallery image 22' },
  { src: '/images/gallery/23.png', alt: 'Gallery image 23' },
  { src: '/images/gallery/24.png', alt: 'Gallery image 24' },
];

const GallerySection = () => {
  return (
    <section className={styles.gallerySection}>

      {/* ── HEADING (commented out as requested) ──────────────────────────
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Our Gallery</h2>
        <p className={styles.subheading}>A glimpse into our work and culture</p>
      </div>
      ─────────────────────────────────────────────────────────────────── */}

      <div className={styles.galleryGrid}>

        {/* ── ROW 1 — full-width hero image ──────────────────────────────── */}
        <div className={`${styles.imgWrapper} ${styles.heroWide}`}>
          <img src={images[0].src} alt={images[0].alt} className={styles.img} />
        </div>

        {/* ── ROW 2 — 4 equal landscape tiles ───────────────────────────── */}
        <div className={`${styles.imgWrapper} ${styles.tile}`}>
          <img src={images[1].src} alt={images[1].alt} className={styles.img} />
        </div>
        <div className={`${styles.imgWrapper} ${styles.tile}`}>
          <img src={images[2].src} alt={images[2].alt} className={styles.img} />
        </div>
        <div className={`${styles.imgWrapper} ${styles.tile}`}>
          <img src={images[3].src} alt={images[3].alt} className={styles.img} />
        </div>
        {/* tall portrait — spans rows 2 & 3, col 4 */}
        <div className={`${styles.imgWrapper} ${styles.tallPortrait}`}>
          <img src={images[4].src} alt={images[4].alt} className={styles.img} />
        </div>

        {/* ── ROW 3 — 3 landscape tiles (col 1-3) ───────────────────────── */}
        <div className={`${styles.imgWrapper} ${styles.tile}`}>
          <img src={images[5].src} alt={images[5].alt} className={styles.img} />
        </div>
        <div className={`${styles.imgWrapper} ${styles.tile}`}>
          <img src={images[6].src} alt={images[6].alt} className={styles.img} />
        </div>
        <div className={`${styles.imgWrapper} ${styles.tile}`}>
          <img src={images[7].src} alt={images[7].alt} className={styles.img} />
        </div>

        {/* ── ROW 4 — tall portrait col 1 + 3 tiles cols 2-4 ────────────── */}
        <div className={`${styles.imgWrapper} ${styles.tallPortraitLeft}`}>
          <img src={images[8].src} alt={images[8].alt} className={styles.img} />
        </div>
        <div className={`${styles.imgWrapper} ${styles.tile}`}>
          <img src={images[9].src} alt={images[9].alt} className={styles.img} />
        </div>
        <div className={`${styles.imgWrapper} ${styles.tile}`}>
          <img src={images[10].src} alt={images[10].alt} className={styles.img} />
        </div>
        <div className={`${styles.imgWrapper} ${styles.tile}`}>
          <img src={images[11].src} alt={images[11].alt} className={styles.img} />
        </div>

        {/* ── ROW 5 — 3 tiles cols 2-4 ──────────────────────────────────── */}
        <div className={`${styles.imgWrapper} ${styles.tile}`}>
          <img src={images[12].src} alt={images[12].alt} className={styles.img} />
        </div>
        <div className={`${styles.imgWrapper} ${styles.tile}`}>
          <img src={images[13].src} alt={images[13].alt} className={styles.img} />
        </div>
        <div className={`${styles.imgWrapper} ${styles.tile}`}>
          <img src={images[14].src} alt={images[14].alt} className={styles.img} />
        </div>

        {/* ── ROW 6 — tall portrait col 1 + tall portrait col 4 + 2 tiles ─ */}
        <div className={`${styles.imgWrapper} ${styles.tallPortraitLeft}`}>
          <img src={images[15].src} alt={images[15].alt} className={styles.img} />
        </div>
        <div className={`${styles.imgWrapper} ${styles.tile}`}>
          <img src={images[16].src} alt={images[16].alt} className={styles.img} />
        </div>
        <div className={`${styles.imgWrapper} ${styles.tile}`}>
          <img src={images[17].src} alt={images[17].alt} className={styles.img} />
        </div>
        <div className={`${styles.imgWrapper} ${styles.tallPortrait}`}>
          <img src={images[18].src} alt={images[18].alt} className={styles.img} />
        </div>

        {/* ── ROW 7 — 2 tiles cols 2-3 ──────────────────────────────────── */}
        <div className={`${styles.imgWrapper} ${styles.tile}`}>
          <img src={images[19].src} alt={images[19].alt} className={styles.img} />
        </div>
        <div className={`${styles.imgWrapper} ${styles.tile}`}>
          <img src={images[20].src} alt={images[20].alt} className={styles.img} />
        </div>

        {/* ── ROW 8 — tall portrait col 1 + wide center + tall portrait col 4 */}
        <div className={`${styles.imgWrapper} ${styles.tallPortraitLeft}`}>
          <img src={images[21].src} alt={images[21].alt} className={styles.img} />
        </div>
        <div className={`${styles.imgWrapper} ${styles.wideCenter}`}>
          <img src={images[22].src} alt={images[22].alt} className={styles.img} />
        </div>
        <div className={`${styles.imgWrapper} ${styles.tallPortrait}`}>
          <img src={images[23].src} alt={images[23].alt} className={styles.img} />
        </div>

      </div>
    </section>
  );
};

export default GallerySection;