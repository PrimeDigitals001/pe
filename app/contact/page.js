'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const coords = '21.728716,73.012109';
  const viewLocationUrl = `https://www.google.com/maps?q=${coords}`;
  const getDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coords}`;
  const embedUrl = `https://maps.google.com/maps?q=${coords}&output=embed&z=17`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Failed to send message. Please try again.');
    }
  };

  return (
    <>
      <Logo />
      <Header />
      <FloatingQuoteButton />

      <main className={styles.main}>
        <div className={styles.container}>

          {/* ── LEFT COLUMN ── */}
          <div className={styles.leftColumn}>
            <h1 className={styles.title}>Let's talk<br />about you.</h1>
            <p className={styles.subtitle}>
              Ready to start your industrial roofing or major construction project?
              Get in touch with us today, and let's bring your vision to life with precision and excellence.
            </p>

            <div className={styles.infoBlock}>
              <h3 className={styles.label}>Where to find us</h3>
              <p className={styles.text}>
                Plot No - 107, GIDC - Narmada Nagar,<br />
                Behind Apex Hotel, Bharuch — 392015,<br />
                Gujarat, India
              </p>
            </div>

            {/* ── Map ── */}
            <div className={styles.mapBlock}>
              <div className={styles.mapWrapper}>
                <iframe
                  src={embedUrl}
                  className={styles.mapIframe}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Patel Enterprise location"
                />
              </div>

              <div className={styles.mapButtons}>
                <a
                  href={viewLocationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapBtn}
                  aria-label="View location on Google Maps"
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

            <div className={styles.infoBlock}>
              <h3 className={styles.label}>Call Us</h3>
              <p className={styles.text}>
                <a href="tel:+917359951901">+91 73599 51901</a>
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.label}>Email Us</h3>
              <p className={styles.text}>
                <a href="mailto:meet.patel@patelenterprise.co">meet.patel@patelenterprise.co</a>
              </p>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className={styles.rightColumn}>
            <h2 className={styles.formTitle}>Send a Message</h2>

            {status === 'success' ? (
              <div className={styles.successMessage}>
                <p>✅ Thank you for reaching out! We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                <div className={styles.formGroup}>
                  <label className={styles.inputLabel}>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.inputLabel}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.inputLabel}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.inputLabel}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                    className={styles.textarea}
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className={styles.errorMessage}>{errorMsg}</p>
                )}

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
                </button>

              </form>
            )}
          </div>

        </div>
      </main>
    </>
  );
}