import Image from 'next/image'

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: '/images/_10.png',
            title: 'Certified Safety & Compliance',
            description: 'All our systems meet EN, OSHA & ANSI international safety standards.'
        },
        {
            icon: '/images/_20.png',
            title: 'Premium Quality Materials',
            description: 'Built with galvanized steel, aluminium, reinforced components for long lasting performance.'
        },
        {
            icon: '/images/_30.png',
            title: 'End-to-End Safety Solutions',
            description: 'Complete range of lifelines, guardrails, walkways & access platforms for total roof safety.'
        },
        {
            icon: '/images/_40.png',
            title: 'Experienced Technical Team',
            description: 'Expert team for site survey, design, installation & project execution.'
        },
        {
            icon: '/images/_50.png',
            title: 'Custom-Engineered Systems',
            description: 'Solutions tailored to any roof type, height, or structural complexity.'
        },
        {
            icon: '/images/_60.png',
            title: 'Non-Penetrative Technology',
            description: 'Engineered to protect roof integrity no drilling, no leakage, no damage.'
        },
        {
            icon: '/images/_70.png',
            title: 'Fast & Efficient Installation',
            description: 'Modular systems ensure quick assembly, minimal downtime & smooth workflow.'
        },
        {
            icon: '/images/_80.png',
            title: 'Trusted Across Industries',
            description: 'Used by aviation, industrial, commercial & infrastructure leaders worldwide.'
        }
    ]

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.title}>Why Choose Us</h2>
                <p style={styles.subtitle}>
                    Discover excellence in construction with our cutting-edge solutions and proven capabilities.
                </p>

                <div style={styles.grid}>
                    {reasons.map((reason, index) => (
                        <div key={index} style={styles.card}>
                            <div style={styles.iconWrapper}>
                                <Image 
                                    src={reason.icon}
                                    alt={reason.title}
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <h3 style={styles.cardTitle}>{reason.title}</h3>
                            <p style={styles.cardDesc}>{reason.description}</p>
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
        background: '#F9FAFB',
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
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px',
    },
    card: {
        background: 'white',
        padding: '32px 24px',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    },
    iconWrapper: {
        width: '80px',
        height: '80px',
        margin: '0 auto 20px',
        background: 'linear-gradient(135deg, #EEF2FF, #DBEAFE)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTitle: {
        fontSize: '1.125rem',
        fontWeight: 600,
        marginBottom: '12px',
        lineHeight: 1.4,
    },
    cardDesc: {
        fontSize: '0.875rem',
        color: '#6B7280',
        lineHeight: 1.6,
    }
}