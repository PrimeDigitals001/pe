'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useAdminData } from '../../hooks/useAdminData';
import { getSchemaBySlug } from '../../utils/schemaRegistry';
import styles from '../../styles.module.css';

export default function CompanyProductsPage() {
    const { companySlug } = useParams();
    const { getCompanyProducts, deleteProduct } = useAdminData();
    const schema = getSchemaBySlug(companySlug);

    const [confirmDelete, setConfirmDelete] = useState(null);
    const [toast, setToast] = useState('');

    if (!schema) {
        return (
            <div className={styles.emptyState}>
                <h3>Company not found</h3>
                <p>No schema found for &quot;{companySlug}&quot;</p>
            </div>
        );
    }

    const products = getCompanyProducts(schema.companyKey);

    const handleDelete = (productId) => {
        deleteProduct(schema.companyKey, productId);
        setConfirmDelete(null);
        setToast('Product deleted');
        setTimeout(() => setToast(''), 2500);
    };

    const getImageUrl = (product) => {
        return product.image || product.cardImage || product.detailImage || null;
    };

    return (
        <>
            <div className={styles.breadcrumbAdmin}>
                <Link href="/admin">Dashboard</Link>
                <span>›</span>
                <Link href="/admin/companies">Companies</Link>
                <span>›</span>
                <span>{schema.label}</span>
            </div>

            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>{schema.label}</h1>
                <p className={styles.pageSubtitle}>{products.length} products</p>
            </div>

            <div className={styles.tableWrapper}>
                <div className={styles.tableHeader}>
                    <h3 className={styles.tableTitle}>Products</h3>
                    <Link href={`/admin/companies/${companySlug}/new`} className={styles.addButton}>
                        + Add Product
                    </Link>
                </div>

                {products.length === 0 ? (
                    <div className={styles.emptyState}>
                        <h3>No products yet</h3>
                        <p>Add your first product to get started</p>
                    </div>
                ) : (
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        {getImageUrl(product) ? (
                                            <img src={getImageUrl(product)} alt={product.name} className={styles.tableImage} />
                                        ) : (
                                            <div className={styles.tableImage} style={{ background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: 10 }}>
                                                No img
                                            </div>
                                        )}
                                    </td>
                                    <td><strong>{product.name}</strong></td>
                                    <td>{product.category || product.type || '—'}</td>
                                    <td style={{ color: '#94a3b8', fontSize: 12 }}>{product.id}</td>
                                    <td>
                                        <div className={styles.tableActions}>
                                            <Link href={`/admin/companies/${companySlug}/${product.id}`} className={styles.editBtn}>
                                                Edit
                                            </Link>
                                            <button className={styles.deleteBtn} onClick={() => setConfirmDelete(product)}>
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Delete Confirmation */}
            {confirmDelete && (
                <div className={styles.confirmOverlay} onClick={() => setConfirmDelete(null)}>
                    <div className={styles.confirmDialog} onClick={(e) => e.stopPropagation()}>
                        <h3 className={styles.confirmTitle}>Delete Product</h3>
                        <p className={styles.confirmText}>
                            Are you sure you want to delete &quot;{confirmDelete.name}&quot;? This action cannot be undone.
                        </p>
                        <div className={styles.confirmActions}>
                            <button className={styles.cancelButton} onClick={() => setConfirmDelete(null)}>Cancel</button>
                            <button className={styles.deleteBtn} onClick={() => handleDelete(confirmDelete.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast */}
            {toast && <div className={styles.toast}>{toast}</div>}
        </>
    );
}
