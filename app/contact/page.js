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
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

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
                <a href="mailto:meet.patel@patelenterprise.co">meet.patel@patelenterprise.co</a>
              </p>
            </div>
          </div>

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