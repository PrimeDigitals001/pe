'use client';

import React from 'react';
import styles from '../styles.module.css';

export default function ImageUrlInput({ value = '', onChange }) {
    return (
        <div>
            <input
                type="text"
                className={styles.formInput}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="/images/products/..."
            />
            {value && (
                <div className={styles.imagePreview}>
                    <img src={value} alt="Preview" onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
            )}
        </div>
    );
}
