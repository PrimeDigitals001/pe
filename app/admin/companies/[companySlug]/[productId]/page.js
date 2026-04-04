'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAdminData } from '../../../hooks/useAdminData';
import { getSchemaBySlug } from '../../../utils/schemaRegistry';
import DynamicProductForm from '../../../components/DynamicProductForm';
import styles from '../../../styles.module.css';

export default function ProductEditPage() {
    const { companySlug, productId } = useParams();
    const router = useRouter();
    const { getProduct, getCompanyData, saveProduct } = useAdminData();
    const schema = getSchemaBySlug(companySlug);

    if (!schema) {
        return (
            <div className={styles.emptyState}>
                <h3>Company not found</h3>
            </div>
        );
    }

    const isNew = productId === 'new';
    const product = isNew ? null : getProduct(schema.companyKey, productId);
    const companyData = getCompanyData(schema.companyKey);

    if (!isNew && !product) {
        return (
            <div className={styles.emptyState}>
                <h3>Product not found</h3>
                <p>Product with ID &quot;{productId}&quot; was not found.</p>
                <Link href={`/admin/companies/${companySlug}`} className={styles.editBtn} style={{ marginTop: 16 }}>
                    Back to {schema.label}
                </Link>
            </div>
        );
    }

    const handleSave = (formData) => {
        saveProduct(schema.companyKey, formData);
        router.push(`/admin/companies/${companySlug}`);
    };

    const handleCancel = () => {
        router.push(`/admin/companies/${companySlug}`);
    };

    return (
        <>
            <div className={styles.breadcrumbAdmin}>
                <Link href="/admin">Dashboard</Link>
                <span>›</span>
                <Link href="/admin/companies">Companies</Link>
                <span>›</span>
                <Link href={`/admin/companies/${companySlug}`}>{schema.label}</Link>
                <span>›</span>
                <span>{isNew ? 'New Product' : product.name}</span>
            </div>

            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>
                    {isNew ? 'Add New Product' : `Edit: ${product.name}`}
                </h1>
                <p className={styles.pageSubtitle}>{schema.label}</p>
            </div>

            <DynamicProductForm
                schema={schema}
                product={product}
                companyData={companyData}
                onSave={handleSave}
                onCancel={handleCancel}
            />
        </>
    );
}
