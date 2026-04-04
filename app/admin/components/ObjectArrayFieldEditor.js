'use client';

import React from 'react';
import styles from '../styles.module.css';

export default function ObjectArrayFieldEditor({ value = [], onChange, objectShape = [] }) {
    const items = Array.isArray(value) ? value : [];

    const updateItem = (index, key, newValue) => {
        const updated = [...items];
        updated[index] = { ...updated[index], [key]: newValue };
        onChange(updated);
    };

    const removeItem = (index) => {
        onChange(items.filter((_, i) => i !== index));
    };

    const addItem = () => {
        const empty = {};
        objectShape.forEach((field) => { empty[field.key] = ''; });
        onChange([...items, empty]);
    };

    return (
        <div className={styles.arrayField}>
            {items.map((item, index) => (
                <div key={index} className={styles.objectArrayItem}>
                    <div className={styles.objectArrayHeader}>
                        <span className={styles.objectArrayIndex}>#{index + 1}</span>
                        <button type="button" className={styles.removeItemBtn} onClick={() => removeItem(index)} title="Remove">
                            &times;
                        </button>
                    </div>
                    {objectShape.map((field) => (
                        <div key={field.key} className={styles.formGroup}>
                            <label className={styles.formLabel}>{field.label}</label>
                            {field.type === 'textarea' ? (
                                <textarea
                                    className={styles.formTextarea}
                                    value={item[field.key] || ''}
                                    onChange={(e) => updateItem(index, field.key, e.target.value)}
                                    rows={2}
                                />
                            ) : (
                                <input
                                    type="text"
                                    className={styles.formInput}
                                    value={item[field.key] || ''}
                                    onChange={(e) => updateItem(index, field.key, e.target.value)}
                                />
                            )}
                        </div>
                    ))}
                </div>
            ))}
            <button type="button" className={styles.addItemBtn} onClick={addItem}>+ Add Item</button>
        </div>
    );
}
