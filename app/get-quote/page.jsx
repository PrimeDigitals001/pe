'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import styles from './page.module.css';

const COMPANIES = [
    'Tata Bluescope',
    'EJOT Screw Systems',
    'Hindalco',
    'Birlanu',
    'Kee-Safety',
    'Saint-Gobain',
    'Tegola Canadese',
    'Chemicals',
];

const PRODUCTS = {
    'Tata Bluescope': ['Roofing Sheets', 'Wall Cladding', 'Steel Decking', 'Sandwich Panels'],
    'EJOT Screw Systems': [
        'JZ3-S-6.3', 'JA3-LT-4.9', 'CORREMAKS® JZ1-6.3', 'JA3-S-6.5',
        'JB3-7.2', 'RLS 25', 'CRONIMAKS® JZ7-6.3', 'JA3-FR-4.9',
        'JT2-2H-4.8', 'JT2-3-4.8', 'JT2-6-5.5 F12', 'JT2-6-6.3',
        'JT2-FZ-6-6.3 EJOGUARD', 'JT2-FZ-12-6.3 EJOGUARD',
    ],
    'Hindalco': ['Everlast Aluminium Roofing'],
    'Birlanu': ['Roofing Solutions', 'Insulation Panels', 'Metal Profiles'],
    'Kee-Safety': ['Safety Rails', 'Roof Access', 'Fall Protection Systems'],
    'Saint-Gobain': ['Gyproc Boards', 'Insulation', 'Glass Wool', 'Weber Products'],
    'Tegola Canadese': ['Bituminous Shingles', 'Slate Tiles', 'Waterproofing Membranes'],
    'Chemicals': [
        'Phosphoric Acid — 80% Technical Grade',
        'Hydrochloric Acid — 33%',
        'Caustic Soda Lye — 47–50%',
        'Caustic Soda Flakes — 98–99%',
        'Sodium Carbonate (Soda Ash)',
        'Sodium Bisulphate — Technical Grade',
        'Glycerine — Technical Grade',
    ],
};

const CATEGORIES = [
    'Pre-Engineering Building',
    'Roofing Sheet',
    'Fabrication Structure',
    'Insulation',
    'Safety Systems',
    'Wall Cladding',
    'Industrial Chemicals',
    'Other',
];

const STATES = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Delhi', 'Jammu & Kashmir', 'Ladakh',
];

export default function GetQuotePage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        category: '',
        state: '',
        city: '',
        projectLocation: '',
        areaOfBuilding: '',
        selectedCompany: '',
        selectedProducts: [],
        projectDescription: '',
        businessCard: null,
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const availableProducts = formData.selectedCompany ? PRODUCTS[formData.selectedCompany] || [] : [];

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'selectedCompany') {
            // ── Switch brand tab WITHOUT clearing existing selections ──
            setFormData((prev) => ({ ...prev, selectedCompany: value }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }

        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleProductToggle = (product) => {
        setFormData((prev) => ({
            ...prev,
            selectedProducts: prev.selectedProducts.includes(product)
                ? prev.selectedProducts.filter((p) => p !== product)
                : [...prev.selectedProducts, product],
        }));
        if (errors.selectedProducts) setErrors((prev) => ({ ...prev, selectedProducts: '' }));
    };

    // Remove a product from the summary pill strip
    const handleRemoveProduct = (product) => {
        setFormData((prev) => ({
            ...prev,
            selectedProducts: prev.selectedProducts.filter((p) => p !== product),
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, businessCard: e.target.files[0] }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';
        if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
        if (!formData.category) newErrors.category = 'Please select a category';
        if (!formData.projectLocation.trim()) newErrors.projectLocation = 'Project location is required';
        if (!formData.areaOfBuilding.trim()) newErrors.areaOfBuilding = 'Area of building is required';
        if (formData.selectedProducts.length === 0) newErrors.selectedProducts = 'Select at least one product';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            const firstError = document.querySelector('[class*="inputError"]');
            firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        setIsSubmitting(true);

        try {
            const res = await fetch('/api/send-quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(data.error || 'Something went wrong. Please try again.');
            }

            setSubmitted(true);
        } catch (err) {
            setErrors((prev) => ({
                ...prev,
                _form: err.message || 'Failed to send. Please try again or email us directly.',
            }));
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <>
                <Header />
                <Logo />
                <main className={styles.page}>
                    <div className={styles.successState}>
                        <div className={styles.successIcon}>
                            <svg viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M7 12.5L10.5 16L17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h1 className={styles.successTitle}>Quote Request Sent!</h1>
                        <p className={styles.successText}>
                            Your email client has opened with your quote request. Our team at Patel Enterprise
                            will get back to you within 24 hours.
                        </p>
                        <div className={styles.successActions}>
                            <button onClick={() => setSubmitted(false)} className={styles.successBtnSecondary}>
                                Submit Another Request
                            </button>
                            <button onClick={() => router.push('/')} className={styles.successBtnPrimary}>
                                Back to Home
                            </button>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <Logo />
            <main className={styles.page}>

                {/* ── Page Header ── */}
                <div className={styles.pageHeader}>
                    <div className={styles.pageHeaderInner}>
                        <span className={styles.pageEyebrow}>Get in Touch</span>
                        <h1 className={styles.pageTitle}>
                            Unlock Your Project's{' '}
                            <span className={styles.pageTitleAccent}>Potential.</span>
                        </h1>
                        <p className={styles.pageSubtitle}>
                            Tell us about your project and we'll get back to you with the right solution.
                        </p>
                    </div>
                    <div className={styles.pageHeaderIcon} aria-hidden="true">
                        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M56 8H8C5.8 8 4 9.8 4 12V44C4 46.2 5.8 48 8 48H56C58.2 48 60 46.2 60 44V12C60 9.8 58.2 8 56 8ZM56 16L32 30L8 16V12L32 26L56 12V16Z" fill="currentColor" />
                        </svg>
                    </div>
                </div>

                {/* ── Form Card ── */}
                <div className={styles.formCard}>
                    <form onSubmit={handleSubmit} noValidate>

                        {/* Row 1: Name, Email, Phone */}
                        <div className={styles.row3}>
                            <div className={styles.fieldGroup}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name *"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                                    aria-required="true"
                                />
                                {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                            </div>

                            <div className={styles.fieldGroup}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email address *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                                    aria-required="true"
                                />
                                {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                            </div>

                            <div className={styles.fieldGroup}>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </div>
                        </div>

                        {/* Row 2: Company, Category */}
                        <div className={styles.row2}>
                            <div className={styles.fieldGroup}>
                                <input
                                    type="text"
                                    name="companyName"
                                    placeholder="Company Name *"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className={`${styles.input} ${errors.companyName ? styles.inputError : ''}`}
                                    aria-required="true"
                                />
                                {errors.companyName && <span className={styles.errorMsg}>{errors.companyName}</span>}
                            </div>

                            <div className={styles.fieldGroup}>
                                <div className={styles.selectWrapper}>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className={`${styles.select} ${!formData.category ? styles.selectPlaceholder : ''} ${errors.category ? styles.inputError : ''}`}
                                        aria-required="true"
                                    >
                                        <option value="">Select Category *</option>
                                        {CATEGORIES.map((cat) => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                    <svg className={styles.selectChevron} viewBox="0 0 24 24" fill="none">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                {errors.category && <span className={styles.errorMsg}>{errors.category}</span>}
                            </div>
                        </div>

                        {/* Row 3: State, City */}
                        <div className={styles.row2}>
                            <div className={styles.fieldGroup}>
                                <div className={styles.selectWrapper}>
                                    <select
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className={`${styles.select} ${!formData.state ? styles.selectPlaceholder : ''}`}
                                    >
                                        <option value="">Select State</option>
                                        {STATES.map((s) => (
                                            <option key={s} value={s}>{s}</option>
                                        ))}
                                    </select>
                                    <svg className={styles.selectChevron} viewBox="0 0 24 24" fill="none">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            <div className={styles.fieldGroup}>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="-- City --"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </div>
                        </div>

                        {/* Row 4: Project Location, Area */}
                        <div className={styles.row2}>
                            <div className={styles.fieldGroup}>
                                <input
                                    type="text"
                                    name="projectLocation"
                                    placeholder="Project Location *"
                                    value={formData.projectLocation}
                                    onChange={handleChange}
                                    className={`${styles.input} ${errors.projectLocation ? styles.inputError : ''}`}
                                    aria-required="true"
                                />
                                {errors.projectLocation && <span className={styles.errorMsg}>{errors.projectLocation}</span>}
                            </div>

                            <div className={styles.fieldGroup}>
                                <input
                                    type="text"
                                    name="areaOfBuilding"
                                    placeholder="Area of Building (sq. ft.) *"
                                    value={formData.areaOfBuilding}
                                    onChange={handleChange}
                                    className={`${styles.input} ${errors.areaOfBuilding ? styles.inputError : ''}`}
                                    aria-required="true"
                                />
                                {errors.areaOfBuilding && <span className={styles.errorMsg}>{errors.areaOfBuilding}</span>}
                            </div>
                        </div>

                        {/* ── Product Selector ── */}
                        <div className={styles.productSection}>
                            <div className={styles.productSectionLabel}>
                                Products <span className={styles.required}>*</span>
                                {formData.selectedProducts.length > 0 && (
                                    <span className={styles.selectedCount}>
                                        {formData.selectedProducts.length} selected
                                    </span>
                                )}
                            </div>

                            {/* Step 1: Choose Brand tab */}
                            <div className={styles.brandGrid}>
                                {COMPANIES.map((company) => {
                                    // Count how many products from this company are selected
                                    const companyProducts = PRODUCTS[company] || [];
                                    const selectedFromThisBrand = formData.selectedProducts.filter(
                                        (p) => companyProducts.includes(p)
                                    ).length;

                                    return (
                                        <button
                                            key={company}
                                            type="button"
                                            onClick={() => handleChange({ target: { name: 'selectedCompany', value: company } })}
                                            className={`${styles.brandChip} ${formData.selectedCompany === company ? styles.brandChipActive : ''}`}
                                        >
                                            {company}
                                            {/* Badge showing how many from this brand are selected */}
                                            {selectedFromThisBrand > 0 && (
                                                <span className={`${styles.brandBadge} ${formData.selectedCompany === company ? styles.brandBadgeActive : ''}`}>
                                                    {selectedFromThisBrand}
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Step 2: Choose Products from selected brand */}
                            {availableProducts.length > 0 && (
                                <div className={styles.productGrid}>
                                    {availableProducts.map((product) => (
                                        <button
                                            key={product}
                                            type="button"
                                            onClick={() => handleProductToggle(product)}
                                            className={`${styles.productChip} ${formData.selectedProducts.includes(product) ? styles.productChipActive : ''}`}
                                        >
                                            {formData.selectedProducts.includes(product) && (
                                                <svg className={styles.chipCheck} viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            )}
                                            {product}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Step 3: Summary of ALL selected products across all brands */}
                            {formData.selectedProducts.length > 0 && (
                                <div className={styles.selectionSummary}>
                                    <p className={styles.selectionSummaryLabel}>Selected products:</p>
                                    <div className={styles.selectionPills}>
                                        {formData.selectedProducts.map((product) => (
                                            <span key={product} className={styles.selectionPill}>
                                                {product}
                                                <button
                                                    type="button"
                                                    className={styles.pillRemove}
                                                    onClick={() => handleRemoveProduct(product)}
                                                    aria-label={`Remove ${product}`}
                                                >
                                                    ×
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {errors.selectedProducts && (
                                <span className={styles.errorMsg}>{errors.selectedProducts}</span>
                            )}
                        </div>

                        {/* Project Description */}
                        <div className={styles.fieldGroup}>
                            <textarea
                                name="projectDescription"
                                placeholder="Project Description — tell us about your project requirements, timeline, and any specific needs..."
                                value={formData.projectDescription}
                                onChange={handleChange}
                                className={styles.textarea}
                                rows={5}
                            />
                        </div>

                        {/* Business Card Upload */}
                        <div className={styles.uploadSection}>
                            <div className={styles.uploadLabel}>Upload your Business Card</div>
                            <label className={styles.uploadBox}>
                                <input
                                    type="file"
                                    accept="image/*,.pdf"
                                    onChange={handleFileChange}
                                    className={styles.fileInput}
                                />
                                <div className={styles.uploadBoxInner}>
                                    <svg className={styles.uploadIcon} viewBox="0 0 24 24" fill="none">
                                        <path d="M21 15V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 3V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span className={styles.uploadText}>
                                        {formData.businessCard
                                            ? formData.businessCard.name
                                            : 'Choose File — JPG, PNG or PDF'}
                                    </span>
                                </div>
                            </label>
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
                            <p className={styles.privacyNote}>
                                <svg viewBox="0 0 24 24" fill="none" className={styles.privacyIcon}>
                                    <path d="M12 2L3 7V12C3 16.97 7.02 21.65 12 23C16.98 21.65 21 16.97 21 12V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                We are committed to protecting your privacy. We will never collect information
                                about you without your explicit consent.
                            </p>

                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className={styles.submitBtnSpinner}>
                                        <svg viewBox="0 0 24 24" fill="none" className={styles.spinnerIcon}>
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
                                            <path d="M12 2C6.477 2 2 6.477 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    <>
                                        <svg viewBox="0 0 24 24" fill="none" className={styles.submitIcon}>
                                            <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Send Message
                                    </>
                                )}
                            </button>
                        </div>

                    </form>
                </div>

            </main>
            <Footer />
        </>
    );
}