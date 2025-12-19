import Image from 'next/image'

export default function Services() {
    const services = [
        {
            title: 'Fall Protection Systems',
            description: 'Complete range of horizontal lifelines, overhead lifelines & anchor points ensuring safe work at height.',
            image: '/images/rectangle-200.png'
        },
        {
            title: 'Rooftop Walkways',
            description: 'Anti-slip walkways that offer safe, stable access across uneven or fragile roofs.',
            image: '/images/rectangle-210.png'
        },
        {
            title: 'Roof Edge Protection',
            description: 'Non-penetrative guardrail systems for permanent or temporary protection on all roof types.',
            image: '/images/rectangle-220.png'
        },
        {
            title: 'Step-Over & Access Platforms',
            description: 'Modular platforms designed to cross obstacles, ducts, pipelines & level changes safely.',
            image: '/images/rectangle-230.png'
        },
        {
            title: 'Structural Decking (SMARTDEK 51)',
            description: 'High-strength steel decking providing fast construction, reduced steel usage, and superior load performance.',
            image: '/images/rectangle-240.png'
        },
        {
            title: 'Premium Roofing & Cladding',
            description: 'Long-lasting COLORBOND® XRW, ZINCALUME® roofing & cladding for industrial structures.',
            image: '/images/rectangle-250.png'
        }
    ]

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.title}>Our Services</h2>
                <p style={styles.subtitle}>
                    Providing world-class safety, access, and engineering solutions designed to protect people and infrastructure.
                </p>

                <div style={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} style={styles.card}>
                            <div style={styles.imageWrapper}>
                                <Image 
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div style={styles.content}>
                                <div style={styles.badge}></div>
                                <h3 style={styles.cardTitle}>{service.title}</h3>
                                <p style={styles.cardDesc}>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const styles = {
    section: {
        padding: '80px 0',
    },
    container: {
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: 700,
        textAlign: 'center',
        marginBottom: '16px',
    },
    subtitle: {
        fontSize: '1.125rem',
        textAlign: 'center',
        color: '#6B7280',
        marginBottom: '60px',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '32px',
    },
    card: {
        background: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    },
    imageWrapper: {
        position: 'relative',
        height: '200px',
        background: '#F3F4F6',
    },
    content: {
        padding: '24px',
    },
    badge: {
        width: '12px',
        height: '12px',
        background: '#1E40AF',
        borderRadius: '50%',
        marginBottom: '16px',
    },
    cardTitle: {
        fontSize: '1.25rem',
        fontWeight: 700,
        marginBottom: '12px',
    },
    cardDesc: {
        fontSize: '0.9375rem',
        color: '#6B7280',
        lineHeight: 1.6,
    }
}