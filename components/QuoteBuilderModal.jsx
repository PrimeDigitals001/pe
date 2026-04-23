'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import styles from './EnquireModal.module.css';
import qbStyles from './QuoteBuilderModal.module.css';
import { getAllChemicals } from '@/app/products/data/dataService';

const UNITS = ['kg', 'MT', 'L', 'Drum', 'Tanker', 'Bag'];

function extractGrades(product) {
  if (!product) return [];
  const grades = new Set();
  if (product.grade) grades.add(product.grade);
  (product.customFields || []).forEach((f) => {
    if (/grade/i.test(f.title || '') && f.value) {
      String(f.value)
        .split(/[,/|]/)
        .map((g) => g.trim())
        .filter(Boolean)
        .forEach((g) => grades.add(g));
    }
  });
  return [...grades];
}

function extractPackagings(product) {
  if (!product) return [];
  const list = Array.isArray(product.packing) ? product.packing : [];
  return list.map((p) => (typeof p === 'string' ? p : p?.type || p?.name)).filter(Boolean);
}

export default function QuoteBuilderModal({ isOpen, onClose, product }) {
  const allChemicals = useMemo(() => {
    try { return getAllChemicals(); } catch { return []; }
  }, []);

  const [formData, setFormData] = useState(initialForm(product));
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState(null);

  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  function initialForm(p) {
    return {
      customerName: '',
      customerCompany: '',
      customerEmail: '',
      customerPhone: '',
      customerGstin: '',
      deliveryCity: '',
      deliveryState: '',
      deliveryPincode: '',
      requiredBy: '',
      notes: '',
      items: [
        {
          productSlug: p?.slug || '',
          productName: p?.name || '',
          grade: extractGrades(p)[0] || '',
          packaging: extractPackagings(p)[0] || '',
          quantity: '',
          unit: 'MT',
        },
      ],
    };
  }

  useEffect(() => {
    if (isOpen) setFormData(initialForm(product));
  }, [isOpen, product]);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => firstInputRef.current?.focus(), 100);
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setFormData(initialForm(product));
        setErrors({});
        setSubmittedRef(null);
        setIsSubmitting(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen, product]);

  const handleField = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const handleItemField = (idx, key, value) => {
    setFormData((p) => {
      const items = [...p.items];
      items[idx] = { ...items[idx], [key]: value };

      if (key === 'productSlug') {
        const chem = allChemicals.find((c) => c.slug === value);
        items[idx].productName = chem?.name || '';
        items[idx].grade = extractGrades(chem)[0] || '';
        items[idx].packaging = extractPackagings(chem)[0] || '';
      }
      return { ...p, items };
    });
  };

  const addItem = () => {
    setFormData((p) => ({
      ...p,
      items: [...p.items, { productSlug: '', productName: '', grade: '', packaging: '', quantity: '', unit: 'MT' }],
    }));
  };

  const removeItem = (idx) => {
    setFormData((p) => ({ ...p, items: p.items.filter((_, i) => i !== idx) }));
  };

  const validate = () => {
    const e = {};
    if (!formData.customerName.trim()) e.customerName = 'Required';
    if (!formData.customerCompany.trim()) e.customerCompany = 'Required';
    if (!formData.customerEmail.trim()) e.customerEmail = 'Required';
    else if (!/\S+@\S+\.\S+/.test(formData.customerEmail)) e.customerEmail = 'Invalid email';
    if (!formData.customerPhone.trim()) e.customerPhone = 'Required';
    if (!formData.deliveryCity.trim()) e.deliveryCity = 'Required';
    if (!formData.deliveryState.trim()) e.deliveryState = 'Required';
    if (!formData.deliveryPincode.trim()) e.deliveryPincode = 'Required';
    formData.items.forEach((it, i) => {
      if (!it.productSlug) e[`item_${i}_slug`] = 'Pick a product';
      if (!it.quantity || Number(it.quantity) <= 0) e[`item_${i}_qty`] = 'Enter qty';
    });
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/quotes/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || 'Submit failed');
      setSubmittedRef(data.displayId || data.quoteId);
    } catch (err) {
      setErrors((p) => ({ ...p, _form: err.message }));
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
      aria-label="Request a quote"
    >
      <div className={`${styles.modal} ${isOpen ? styles.modalOpen : ''} ${qbStyles.wide}`} ref={modalRef}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {submittedRef ? (
          <div className={styles.successState}>
            <div className={styles.successIcon}>
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className={styles.successTitle}>Quote Request Received</h3>
            <p className={styles.successText}>
              Reference: <strong>{submittedRef}</strong><br />
              Our team will send you a priced quotation within 24 hours.
            </p>
            <button onClick={onClose} className={styles.successCloseBtn}>Close</button>
          </div>
        ) : (
          <>
            <div className={styles.modalHeader}>
              <span className={styles.modalEyebrow}>Patel Enterprise</span>
              <h2 className={styles.modalTitle}>Request a Quotation</h2>
              <p className={styles.modalSubtitle}>
                Fill in the details below — we'll send you a formal priced quote within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className={styles.form}>
              <div className={qbStyles.sectionLabel}>Your Details</div>

              <div className={styles.row2}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Name <span className={styles.required}>*</span></label>
                  <input ref={firstInputRef} name="customerName" value={formData.customerName} onChange={handleField}
                    className={`${styles.input} ${errors.customerName ? styles.inputError : ''}`} placeholder="Full name" />
                  {errors.customerName && <span className={styles.errorMsg}>{errors.customerName}</span>}
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Company <span className={styles.required}>*</span></label>
                  <input name="customerCompany" value={formData.customerCompany} onChange={handleField}
                    className={`${styles.input} ${errors.customerCompany ? styles.inputError : ''}`} placeholder="Your company" />
                  {errors.customerCompany && <span className={styles.errorMsg}>{errors.customerCompany}</span>}
                </div>
              </div>

              <div className={styles.row2}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Email <span className={styles.required}>*</span></label>
                  <input type="email" name="customerEmail" value={formData.customerEmail} onChange={handleField}
                    className={`${styles.input} ${errors.customerEmail ? styles.inputError : ''}`} placeholder="you@company.com" />
                  {errors.customerEmail && <span className={styles.errorMsg}>{errors.customerEmail}</span>}
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Phone <span className={styles.required}>*</span></label>
                  <input type="tel" name="customerPhone" value={formData.customerPhone} onChange={handleField}
                    className={`${styles.input} ${errors.customerPhone ? styles.inputError : ''}`} placeholder="+91 98765 43210" />
                  {errors.customerPhone && <span className={styles.errorMsg}>{errors.customerPhone}</span>}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>GSTIN (optional)</label>
                <input name="customerGstin" value={formData.customerGstin} onChange={handleField}
                  className={styles.input} placeholder="22AAAAA0000A1Z5" />
              </div>

              <div className={qbStyles.sectionLabel}>Delivery</div>

              <div className={qbStyles.row3}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>City <span className={styles.required}>*</span></label>
                  <input name="deliveryCity" value={formData.deliveryCity} onChange={handleField}
                    className={`${styles.input} ${errors.deliveryCity ? styles.inputError : ''}`} />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>State <span className={styles.required}>*</span></label>
                  <input name="deliveryState" value={formData.deliveryState} onChange={handleField}
                    className={`${styles.input} ${errors.deliveryState ? styles.inputError : ''}`} />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Pincode <span className={styles.required}>*</span></label>
                  <input name="deliveryPincode" value={formData.deliveryPincode} onChange={handleField}
                    className={`${styles.input} ${errors.deliveryPincode ? styles.inputError : ''}`} />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Required by (optional)</label>
                <input type="date" name="requiredBy" value={formData.requiredBy} onChange={handleField} className={styles.input} />
              </div>

              <div className={qbStyles.sectionLabel}>Products</div>

              {formData.items.map((item, idx) => {
                const chem = allChemicals.find((c) => c.slug === item.productSlug);
                const grades = extractGrades(chem);
                const packagings = extractPackagings(chem);
                return (
                  <div key={idx} className={qbStyles.itemCard}>
                    <div className={qbStyles.itemCardHeader}>
                      <span className={qbStyles.itemCardNum}>Item {idx + 1}</span>
                      {formData.items.length > 1 && (
                        <button type="button" onClick={() => removeItem(idx)} className={qbStyles.removeBtn}>Remove</button>
                      )}
                    </div>

                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>Product <span className={styles.required}>*</span></label>
                      <select value={item.productSlug}
                        onChange={(e) => handleItemField(idx, 'productSlug', e.target.value)}
                        className={`${styles.input} ${errors[`item_${idx}_slug`] ? styles.inputError : ''}`}>
                        <option value="">— Select chemical —</option>
                        {allChemicals.map((c) => (
                          <option key={c.slug} value={c.slug}>{c.name}</option>
                        ))}
                      </select>
                      {errors[`item_${idx}_slug`] && <span className={styles.errorMsg}>{errors[`item_${idx}_slug`]}</span>}
                    </div>

                    <div className={qbStyles.row3}>
                      <div className={styles.fieldGroup}>
                        <label className={styles.label}>Grade</label>
                        {grades.length > 0 ? (
                          <select value={item.grade} onChange={(e) => handleItemField(idx, 'grade', e.target.value)} className={styles.input}>
                            <option value="">—</option>
                            {grades.map((g) => <option key={g} value={g}>{g}</option>)}
                          </select>
                        ) : (
                          <input value={item.grade} onChange={(e) => handleItemField(idx, 'grade', e.target.value)}
                            className={styles.input} placeholder="Grade" />
                        )}
                      </div>
                      <div className={styles.fieldGroup}>
                        <label className={styles.label}>Packaging</label>
                        {packagings.length > 0 ? (
                          <select value={item.packaging} onChange={(e) => handleItemField(idx, 'packaging', e.target.value)} className={styles.input}>
                            <option value="">—</option>
                            {packagings.map((p) => <option key={p} value={p}>{p}</option>)}
                          </select>
                        ) : (
                          <input value={item.packaging} onChange={(e) => handleItemField(idx, 'packaging', e.target.value)}
                            className={styles.input} placeholder="Packaging" />
                        )}
                      </div>
                      <div className={styles.fieldGroup}>
                        <label className={styles.label}>Quantity <span className={styles.required}>*</span></label>
                        <div className={qbStyles.qtyRow}>
                          <input type="number" min="0" step="0.001" value={item.quantity}
                            onChange={(e) => handleItemField(idx, 'quantity', e.target.value)}
                            className={`${styles.input} ${errors[`item_${idx}_qty`] ? styles.inputError : ''}`} placeholder="0" />
                          <select value={item.unit} onChange={(e) => handleItemField(idx, 'unit', e.target.value)}
                            className={`${styles.input} ${qbStyles.unitSelect}`}>
                            {UNITS.map((u) => <option key={u} value={u}>{u}</option>)}
                          </select>
                        </div>
                        {errors[`item_${idx}_qty`] && <span className={styles.errorMsg}>{errors[`item_${idx}_qty`]}</span>}
                      </div>
                    </div>
                  </div>
                );
              })}

              <button type="button" onClick={addItem} className={qbStyles.addItemBtn}>+ Add another product</button>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Notes (optional)</label>
                <textarea name="notes" value={formData.notes} onChange={handleField}
                  rows={3} className={styles.textarea} placeholder="Anything else we should know..." />
              </div>

              {errors._form && (
                <div className={styles.formError} role="alert">
                  <svg viewBox="0 0 24 24" fill="none" className={styles.formErrorIcon}>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {errors._form}
                </div>
              )}

              <div className={styles.formFooter}>
                <button type="button" onClick={onClose} className={styles.cancelBtn}>Cancel</button>
                <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                  {isSubmitting ? (
                    <span className={styles.submittingState}>
                      <svg viewBox="0 0 24 24" fill="none" className={styles.spinnerIcon}>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
                        <path d="M12 2C6.477 2 2 6.477 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Submitting...
                    </span>
                  ) : 'Submit Quote Request'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
