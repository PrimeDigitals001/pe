'use client';

import React, { useState, useEffect } from 'react';
import { slugify } from '../utils/slugify';
import ArrayFieldEditor from './ArrayFieldEditor';
import ObjectArrayFieldEditor from './ObjectArrayFieldEditor';
import ImageUrlInput from './ImageUrlInput';
import styles from '../styles.module.css';

export default function DynamicProductForm({ schema, product, companyData, onSave, onCancel }) {
    const [formData, setFormData] = useState({});
    const [toast, setToast] = useState('');
    const isNew = !product;

    useEffect(() => {
        if (product) {
            setFormData({ ...product });
        } else {
            // Initialize empty form with defaults
            const empty = {};
            schema.fields.forEach((field) => {
                if (field.type === 'boolean') empty[field.key] = false;
                else if (field.type === 'array-string' || field.type === 'array-object') empty[field.key] = [];
                else empty[field.key] = '';
            });
            // Auto-generate ID
            const idField = schema.fields.find((f) => f.autoGenerate);
            if (idField) {
                empty[idField.key] = `${schema.companyKey}-${Date.now()}`;
            }
            setFormData(empty);
        }
    }, [product, schema]);

    const updateField = (key, value) => {
        const updated = { ...formData, [key]: value };

        // Auto-slug from name
        const slugField = schema.fields.find((f) => f.type === 'slug');
        if (slugField && key === slugField.autoFrom) {
            updated[slugField.key] = slugify(value);
        }

        setFormData(updated);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate required fields
        for (const field of schema.fields) {
            if (field.required && !formData[field.key]) {
                alert(`"${field.label}" is required.`);
                return;
            }
        }

        onSave(formData);
        setToast(isNew ? 'Product created!' : 'Product saved!');
        setTimeout(() => setToast(''), 2500);
    };

    const getCategoryOptions = (field) => {
        if (field.options) return field.options;
        if (field.optionsFrom && companyData) {
            const source = companyData[field.optionsFrom];
            if (Array.isArray(source)) {
                return source.filter((s) => s !== 'All Products');
            }
        }
        return [];
    };

    const renderField = (field) => {
        const value = formData[field.key];

        switch (field.type) {
            case 'text':
                return (
                    <input
                        type="text"
                        className={styles.formInput}
                        value={value || ''}
                        onChange={(e) => updateField(field.key, e.target.value)}
                        readOnly={field.autoGenerate && !isNew}
                    />
                );

            case 'slug':
                return (
                    <input
                        type="text"
                        className={styles.formInput}
                        value={value || ''}
                        onChange={(e) => updateField(field.key, e.target.value)}
                        placeholder="auto-generated-from-name"
                    />
                );

            case 'textarea':
                return (
                    <textarea
                        className={styles.formTextarea}
                        value={value || ''}
                        onChange={(e) => updateField(field.key, e.target.value)}
                    />
                );

            case 'select':
                return (
                    <select
                        className={styles.formSelect}
                        value={value || ''}
                        onChange={(e) => updateField(field.key, e.target.value)}
                    >
                        <option value="">Select...</option>
                        {getCategoryOptions(field).map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                );

            case 'boolean':
                return (
                    <div className={styles.formCheckbox}>
                        <input
                            type="checkbox"
                            className={styles.formCheckboxInput}
                            checked={!!value}
                            onChange={(e) => updateField(field.key, e.target.checked)}
                        />
                        <span>{field.label}</span>
                    </div>
                );

            case 'image-url':
                return <ImageUrlInput value={value || ''} onChange={(v) => updateField(field.key, v)} />;

            case 'array-string':
                return (
                    <ArrayFieldEditor
                        value={value || []}
                        onChange={(v) => updateField(field.key, v)}
                        placeholder={`Add ${field.label.toLowerCase()}`}
                    />
                );

            case 'array-object':
                return (
                    <ObjectArrayFieldEditor
                        value={value || []}
                        onChange={(v) => updateField(field.key, v)}
                        objectShape={field.objectShape || []}
                    />
                );

            default:
                return (
                    <input
                        type="text"
                        className={styles.formInput}
                        value={value || ''}
                        onChange={(e) => updateField(field.key, e.target.value)}
                    />
                );
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formWrapper}>
            <div className={styles.formGrid}>
                {schema.fields.map((field) => (
                    <div key={field.key} className={styles.formGroup}>
                        {field.type !== 'boolean' && (
                            <label className={styles.formLabel}>
                                {field.label}
                                {field.required && <span className={styles.formRequired}> *</span>}
                            </label>
                        )}
                        {renderField(field)}
                    </div>
                ))}

                <div className={styles.formActions}>
                    <button type="submit" className={styles.saveButton}>
                        {isNew ? 'Create Product' : 'Save Changes'}
                    </button>
                    <button type="button" className={styles.cancelButton} onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </div>

            {toast && <div className={styles.toast}>{toast}</div>}
        </form>
    );
}
