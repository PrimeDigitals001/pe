'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './ServiceEnquireModal.module.css';

const ServiceEnquireModal = ({ isOpen, onClose, service }) => {
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
    const firstInputRef = useRef(null);

    // ── Focus trap + ESC close ──
    useEffect(() => {
        if (!isOpen) return;

        // Focus first input when modal opens
        const timer = setTimeout(() => {
            firstInputRef.current?.focus();
        }, 100);

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();

            // Focus trap
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
            clearTimeout(timer);
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    // Reset form when modal closes
    useEffect(() => {
        if (!isOpen) {
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
        }
    }, [isOpen]);

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
                    // Service details — pre-filled
                    serviceName: service?.title,
                    serviceTagline: service?.tagline,
                    serviceNumber: service?.number,
                    // User-filled contact fields
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

    // Backdrop click handler
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    if (!isOpen) return null;

    return (
        <div
            className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ''}`}
            onClick={handleBackdropClick}
            aria-modal="true"
            role="dialog"
            aria-labelledby="service-modal-title"
        >
            <div
                ref={modalRef}
                className={`${styles.modal} ${isOpen ? styles.modalOpen : ''}`}
            >

                {/* ── Close button ── */}
                <button
                    className={styles.closeBtn}
                    onClick={onClose}
                    aria-label="Close enquiry form"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* ── Service info strip at top ── */}
                <div className={styles.serviceStrip}>
                    <span className={styles.stripNumber}>{service?.number}</span>
                    <div className={styles.stripContent}>
                        <p className={styles.stripLabel}>Service Enquiry</p>
                        <h2 className={styles.stripTitle} id="service-modal-title">
                            {service?.title}
                        </h2>
                        <p className={styles.stripTagline}>{service?.tagline}</p>
                    </div>
                </div>

                {/* ── Success state ── */}
                {status === 'success' ? (
                    <div className={styles.successState}>
                        <div className={styles.successIcon}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <circle cx="16" cy="16" r="16" fill="#2683C6" fillOpacity="0.12" />
                                <path d="M10 16.5L14 20.5L22 12" stroke="#2683C6" strokeWidth="2.5"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className={styles.successTitle}>Enquiry Sent!</h3>
                        <p className={styles.successText}>
                            Thank you <strong>{formData.name}</strong>. We've received your enquiry
                            for <strong>{service?.title}</strong> and will get back to you shortly.
                        </p>
                        <button className={styles.successBtn} onClick={onClose}>
                            Close
                        </button>
                    </div>
                ) : (
                    /* ── Form ── */
                    <form
                        className={styles.form}
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <p className={styles.formIntro}>
                            Fill in your details and we'll get back to you as soon as possible.
                        </p>

                        {/* Row 1 — Name + Email */}
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

                        {/* Row 2 — Phone + Company */}
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

                        {/* Row 3 — Project Location (full width) */}
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

                        {/* Row 4 — Message */}
                        <div className={styles.fieldGroup}>
                            <label className={styles.label} htmlFor="message">
                                Message / Requirements
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className={styles.textarea}
                                placeholder="Describe your project requirements, timeline, or any specific details..."
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                            />
                        </div>

                        {/* Error message */}
                        {status === 'error' && (
                            <p className={styles.errorMsg} role="alert">
                                {errorMsg}
                            </p>
                        )}

                        {/* Submit */}
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
                                <>
                                    Send Enquiry
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M3 8H13M13 8L9 4M13 8L9 12"
                                            stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </>
                            )}
                        </button>

                    </form>
                )}

            </div>
        </div>
    );
};

export default ServiceEnquireModal;