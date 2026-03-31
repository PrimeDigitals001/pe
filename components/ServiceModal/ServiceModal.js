'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './ServiceModal.module.css';

const ServiceModal = ({ isOpen, onClose, service }) => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        projectLocation: '',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState('');

    const modalRef = useRef(null);
    const formTopRef = useRef(null);
    const firstInputRef = useRef(null);

    // ── ESC close + focus trap ──
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'Tab' && modalRef.current) {
                const focusable = modalRef.current.querySelectorAll(
                    'button, input, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey) {
                    if (document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    }
                } else {
                    if (document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    // ── Reset all state when modal closes ──
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setShowForm(false);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    companyName: '',
                    projectLocation: '',
                    message: '',
                });
                setStatus('idle');
                setErrorMsg('');
            }, 350);
        }
    }, [isOpen]);

    // ── Scroll to form when it opens ──
    useEffect(() => {
        if (showForm && formTopRef.current) {
            setTimeout(() => {
                formTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                firstInputRef.current?.focus();
            }, 100);
        }
    }, [showForm]);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            const res = await fetch('/api/send-service-enquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    serviceName: service?.title,
                    serviceTagline: service?.tagline,
                    ...formData,
                }),
            });

            const data = await res.json();

            if (data.success) {
                setStatus('success');
            } else {
                setStatus('error');
                setErrorMsg(data.error || 'Something went wrong. Please try again.');
            }
        } catch {
            setStatus('error');
            setErrorMsg('Network error. Please check your connection and try again.');
        }
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    if (!isOpen) return null;

    return (
        <div
            className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ''}`}
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
        >
            <div
                ref={modalRef}
                className={`${styles.modal} ${isOpen ? styles.modalOpen : ''}`}
            >

                {/* ── Scrollable content area ── */}
                <div className={styles.scrollArea}>

                    {/* ── Service Image ── */}
                    <div className={styles.imageWrap}>
                        <img
                            src={service?.image}
                            alt={service?.title}
                            className={styles.image}
                        />
                        {/* gradient fade at bottom of image */}
                        <div className={styles.imageGradient} />
                    </div>

                    {/* ── Service Info ── */}
                    <div className={styles.infoBlock}>

                        <h2 className={styles.title} id="service-modal-title">
                            {service?.title}
                        </h2>
                        <p className={styles.tagline}>{service?.tagline}</p>

                        <div className={styles.divider} />

                        <p className={styles.description}>
                            {service?.fullDesc?.split('\n\n')[0]}
                        </p>

                        {service?.fullDesc?.split('\n\n')[1] && (
                            <p className={styles.description}>
                                {service?.fullDesc?.split('\n\n')[1]}
                            </p>
                        )}

                        {/* Safety & Quality Highlights */}
                        {service?.highlights?.length > 0 && (
                            <div className={styles.highlightsBlock}>
                                <p className={styles.highlightsLabel}>
                                    Safety &amp; Quality Highlights
                                </p>
                                <ul className={styles.highlightsList}>
                                    {service.highlights.map((item, i) => (
                                        <li key={i} className={styles.highlightItem}>
                                            <span className={styles.highlightDot} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Enquire Now button — only shown when form is not yet open */}
                        {!showForm && status !== 'success' && (
                            <button
                                className={styles.enquireNowBtn}
                                onClick={() => setShowForm(true)}
                            >
                                Enquire Now
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M8 3L8 13M8 13L4 9M8 13L12 9"
                                        stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        )}

                    </div>

                    {/* ── Enquiry Form — expands below ── */}
                    {showForm && (
                        <div className={styles.formBlock} ref={formTopRef}>

                            {status === 'success' ? (

                                /* Success state */
                                <div className={styles.successState}>
                                    <div className={styles.successIconWrap}>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <circle cx="16" cy="16" r="16" fill="#2683C6" fillOpacity="0.1" />
                                            <path d="M10 16.5L14 20.5L22 12"
                                                stroke="#2683C6" strokeWidth="2.5"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h3 className={styles.successTitle}>Enquiry Sent!</h3>
                                    <p className={styles.successText}>
                                        Thank you <strong>{formData.name}</strong>. We've received
                                        your enquiry for <strong>{service?.title}</strong> and will
                                        get back to you shortly.
                                    </p>
                                </div>

                            ) : (

                                /* Form */
                                <form className={styles.form} onSubmit={handleSubmit} noValidate>

                                    <h3 className={styles.formTitle}>Contact Our Team</h3>
                                    <p className={styles.formSubtitle}>
                                        Fill in your details and we'll get back to you as soon as possible.
                                    </p>

                                    <div className={styles.fieldRow}>
                                        <div className={styles.fieldGroup}>
                                            <label className={styles.label} htmlFor="name">
                                                Full Name <span className={styles.required}>*</span>
                                            </label>
                                            <input
                                                ref={firstInputRef}
                                                id="name"
                                                name="name"
                                                type="text"
                                                className={styles.input}
                                                placeholder="Meet Patel"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                autoComplete="name"
                                            />
                                        </div>
                                        <div className={styles.fieldGroup}>
                                            <label className={styles.label} htmlFor="email">
                                                Email Address <span className={styles.required}>*</span>
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                className={styles.input}
                                                placeholder="meet@company.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                autoComplete="email"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.fieldRow}>
                                        <div className={styles.fieldGroup}>
                                            <label className={styles.label} htmlFor="phone">
                                                Phone Number
                                            </label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                className={styles.input}
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                autoComplete="tel"
                                            />
                                        </div>
                                        <div className={styles.fieldGroup}>
                                            <label className={styles.label} htmlFor="companyName">
                                                Company Name
                                            </label>
                                            <input
                                                id="companyName"
                                                name="companyName"
                                                type="text"
                                                className={styles.input}
                                                placeholder="Your Company Pvt. Ltd."
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                autoComplete="organization"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label} htmlFor="projectLocation">
                                            Project Location
                                        </label>
                                        <input
                                            id="projectLocation"
                                            name="projectLocation"
                                            type="text"
                                            className={styles.input}
                                            placeholder="Bharuch, Gujarat"
                                            value={formData.projectLocation}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label} htmlFor="message">
                                            Message / Requirements
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className={styles.textarea}
                                            placeholder="Describe your project requirements or any specific details..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <p className={styles.errorMsg} role="alert">
                                            {errorMsg}
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        className={styles.submitBtn}
                                        disabled={status === 'loading'}
                                        aria-busy={status === 'loading'}
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <span className={styles.spinner} aria-hidden="true" />
                                                Sending...
                                            </>
                                        ) : (
                                            'Send Enquiry'
                                        )}
                                    </button>

                                </form>
                            )}

                        </div>
                    )}

                </div>

                {/* ── Close button — fixed at bottom, labeled ── */}
                <div className={styles.closeBar}>
                    <button className={styles.closeBtn} onClick={onClose}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M12 4L4 12M4 4L12 12"
                                stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Close
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ServiceModal;