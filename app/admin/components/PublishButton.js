'use client';

import React, { useState } from 'react';
import styles from '../styles.module.css';

export default function PublishButton({ onPublish, hasChanges }) {
    const [isPublishing, setIsPublishing] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [result, setResult] = useState(null);

    const handlePublish = async () => {
        setShowConfirm(false);
        setIsPublishing(true);
        setResult(null);

        try {
            const res = await onPublish();
            setResult(res);
        } catch (err) {
            setResult({ success: false, error: err.message || 'Network error. Please try again.' });
        } finally {
            setIsPublishing(false);
        }
    };

    return (
        <>
            <button
                className={styles.publishBtn}
                onClick={() => setShowConfirm(true)}
                disabled={!hasChanges || isPublishing}
            >
                {isPublishing ? 'Publishing...' : 'Publish Changes'}
            </button>

            {result && (
                <div className={result.success ? styles.publishSuccess : styles.publishError}>
                    {result.success
                        ? result.message || 'Published! Site will update in ~1-2 minutes.'
                        : `Error: ${result.error}`}
                    <button className={styles.publishDismiss} onClick={() => setResult(null)}>&times;</button>
                </div>
            )}

            {showConfirm && (
                <div className={styles.modalOverlay} onClick={() => setShowConfirm(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <h3 className={styles.modalTitle}>Publish Changes?</h3>
                        <p className={styles.modalText}>
                            This will push your changes to the live website. All visitors will see the updated data after the site redeploys (~1-2 minutes).
                        </p>
                        <div className={styles.modalActions}>
                            <button className={styles.secondaryBtn} onClick={() => setShowConfirm(false)}>Cancel</button>
                            <button className={styles.publishBtn} onClick={handlePublish}>Yes, Publish</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
