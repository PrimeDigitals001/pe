'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
// import Footer from '@/components/Footer';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add real form submission later
    alert("Thank you for reaching out! We will get back to you shortly.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Logo />
      <Header />
      <FloatingQuoteButton />

      <main className={styles.main}>
        <div className={styles.container}>

          <div className={styles.leftColumn}>
            <h1 className={styles.title}>Let's talk<br />about you.</h1>
            <p className={styles.subtitle}>
              Ready to start your industrial roofing or major construction project?
              Get in touch with us today, and let's bring your vision to life with precision and excellence.
            </p>

            <div className={styles.infoBlock}>
              <h3 className={styles.label}>Where to find us</h3>
              <p className={styles.text}>
                Alpha Arcade, A 201,<br />
                GIDC Rd, Bholav, Bharuch,<br />
                Gujarat 392015
              </p>
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
                <a href="mailto:meetpatel@patelenterprise.com">meetpatel@patelenterprise.com</a>
              </p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <h2 className={styles.formTitle}>Send a Message</h2>
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

              <button type="submit" className={styles.submitBtn}>
                Submit Inquiry
              </button>

            </form>
          </div>

        </div>
      </main>

      {/* <Footer /> */}
    </>
  );
}