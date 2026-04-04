'use client';

import React from 'react';
import styles from '../styles.module.css';

export default function ArrayFieldEditor({ value = [], onChange, placeholder = 'Enter value' }) {
    const items = Array.isArray(value) ? value : [];

    const updateItem = (index, newValue) => {
        const updated = [...items];
        updated[index] = newValue;
        onChange(updated);
    };

    const removeItem = (index) => {
        onChange(items.filter((_, i) => i !== index));
    };

    const addItem = () => {
        onChange([...items, '']);
    };

    return (
        <div className={styles.arrayField}>
            {items.map((item, index) => (
                <div key={index} className={styles.arrayItem}>
                    <input
                        type="text"
                        className={styles.formInput}
                        value={item}
                        onChange={(e) => updateItem(index, e.target.value)}
                        placeholder={placeholder}
                    />
                    <button type="button" className={styles.removeItemBtn} onClick={() => removeItem(index)} title="Remove">
                        &times;
                    </button>
                </div>
            ))}
            <button type="button" className={styles.addItemBtn} onClick={addItem}>+ Add Item</button>
        </div>
    );
}
