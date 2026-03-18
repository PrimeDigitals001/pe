'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './EnquireModal.module.css';

export default function EnquireModal({ isOpen, onClose, product, companyName }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        projectLocation: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const modalRef = useRef(null);
    const firstInputRef = useRef(null);

    // Focus trap & keyboard close
    useEffect(() => {
        if (!isOpen) return;

        // Focus first input when modal opens
        const timer = setTimeout(() => firstInputRef.current?.focus(), 100);

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();

            // Focus trap
            if (e.key === 'Tab' && modalRef.current) {
                const focusable = modalRef.current.querySelectorAll(
                    'button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
                );
                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
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
            setTimeout(() => {
                setFormData({ name: '', email: '', phone: '', companyName: '', projectLocation: '', message: '' });
                setErrors({});
                setSubmitted(false);
                setIsSubmitting(false);
            }, 300);
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            const res = await fetch('/api/send-enquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    // Contact fields
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    companyName: formData.companyName,
                    projectLocation: formData.projectLocation,
                    message: formData.message,
                    // Pre-filled product fields
                    productName: product?.name,
                    productCategory: product?.category,
                    productBrand: companyName,
                    productProperties: product?.properties || [],
                    productSpecs: product?.technicalSpecifications || [],
                }),
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(data.error || 'Something went wrong. Please try again.');
            }

            setSubmitted(true);
        } catch (err) {
            setErrors((prev) => ({
                ...prev,
                _form: err.message || 'Failed to send. Please try again.',
            }));
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className={styles.overlay}
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
            role="dialog"
            aria-modal="true"
            aria-label={`Enquire about ${product?.name || 'this product'}`}
        >
            <div
                className={`${styles.modal} ${isOpen ? styles.modalOpen : ''}`}
                ref={modalRef}
            >
                {/* ── Close Button ── */}
                <button
                    className={styles.closeBtn}
                    onClick={onClose}
                    aria-label="Close enquiry form"
                >
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                {submitted ? (
                    /* ── Success State ── */
                    <div className={styles.successState}>
                        <div className={styles.successIcon}>
                            <svg viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className={styles.successTitle}>Enquiry Sent!</h3>
                        <p className={styles.successText}>
                            Your email client has opened with your enquiry for{' '}
                            <strong>{product?.name}</strong>. We'll get back to you shortly.
                        </p>
                        <button onClick={onClose} className={styles.successCloseBtn}>
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        {/* ── Modal Header ── */}
                        <div className={styles.modalHeader}>
                            <span className={styles.modalEyebrow}>{companyName}</span>
                            <h2 className={styles.modalTitle}>Enquire Now</h2>
                            <p className={styles.modalSubtitle}>
                                We'll get back to you with pricing and availability.
                            </p>
                        </div>

                        {/* ── Product Info Strip ── */}
                        {product && (
                            <div className={styles.productStrip}>
                                {product.image && (
                                    <div className={styles.productStripImage}>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                                <div className={styles.productStripInfo}>
                                    <span className={styles.productStripBrand}>{companyName}</span>
                                    <span className={styles.productStripName}>{product.name}</span>
                                    {product.category && (
                                        <span className={styles.productStripCategory}>{product.category}</span>
                                    )}
                                    {product.technicalSpecifications?.length > 0 && (
                                        <div className={styles.productStripSpecs}>
                                            {product.technicalSpecifications.slice(0, 3).map((spec, i) => (
                                                <span key={i} className={styles.specTag}>{spec}</span>
                                            ))}
                                            {product.technicalSpecifications.length > 3 && (
                                                <span className={styles.specTagMore}>
                                                    +{product.technicalSpecifications.length - 3} more
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* ── Form ── */}
                        <form onSubmit={handleSubmit} noValidate className={styles.form}>

                            {/* Row: Name, Email */}
                            <div className={styles.row2}>
                                <div className={styles.fieldGroup}>
                                    <label className={styles.label} htmlFor="enquire-name">
                                        Your Name <span className={styles.required}>*</span>
                                    </label>
                                    <input
                                        id="enquire-name"
                                        ref={firstInputRef}
                                        type="text"
                                        name="name"
                                        placeholder="Full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                                        aria-required="true"
                                    />
                                    {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label className={styles.label} htmlFor="enquire-email">
                                        Email Address <span className={styles.required}>*</span>
                                    </label>
                                    <input
                                        id="enquire-email"
                                        type="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                                        aria-required="true"
                                    />
                                    {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                                </div>
                            </div>

                            {/* Row: Phone, Company */}
                            <div className={styles.row2}>
                                <div className={styles.fieldGroup}>
                                    <label className={styles.label} htmlFor="enquire-phone">Phone</label>
                                    <input
                                        id="enquire-phone"
                                        type="tel"
                                        name="phone"
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label className={styles.label} htmlFor="enquire-company">Company Name</label>
                                    <input
                                        id="enquire-company"
                                        type="text"
                                        name="companyName"
                                        placeholder="Your company"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className={styles.input}
                                    />
                                </div>
                            </div>

                            {/* Project Location */}
                            <div className={styles.fieldGroup}>
                                <label className={styles.label} htmlFor="enquire-location">Project Location</label>
                                <input
                                    id="enquire-location"
                                    type="text"
                                    name="projectLocation"
                                    placeholder="City, State"
                                    value={formData.projectLocation}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </div>

                            {/* Message */}
                            <div className={styles.fieldGroup}>
                                <label className={styles.label} htmlFor="enquire-message">Message</label>
                                <textarea
                                    id="enquire-message"
                                    name="message"
                                    placeholder="Tell us about your project requirements, quantity needed, timeline..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={styles.textarea}
                                    rows={3}
                                />
                            </div>

                            {/* Form-level error */}
                            {errors._form && (
                                <div className={styles.formError} role="alert">
                                    <svg viewBox="0 0 24 24" fill="none" className={styles.formErrorIcon}>
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    {errors._form}
                                </div>
                            )}

                            {/* Footer */}
                            <div className={styles.formFooter}>
                                <button type="button" onClick={onClose} className={styles.cancelBtn}>
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className={styles.submitBtn}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className={styles.submittingState}>
                                            <svg viewBox="0 0 24 24" fill="none" className={styles.spinnerIcon}>
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
                                                <path d="M12 2C6.477 2 2 6.477 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        <>
                                            <svg viewBox="0 0 24 24" fill="none" className={styles.submitIcon}>
                                                <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Send Enquiry
                                        </>
                                    )}
                                </button>
                            </div>

                        </form>
                    </>
                )}
            </div>
        </div>
    );
}