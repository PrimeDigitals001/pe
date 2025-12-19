import Image from 'next/image'

export default function Stats() {
    const stats = [
        { 
            icon: '/images/gears0.png',
            number: '10+', 
            label: 'YEARS OF EXPERIENCE' 
        },
        { 
            icon: '/images/factory0.png',
            number: '200+', 
            label: 'PROJECTS COMPLETED' 
        },
        { 
            icon: '/images/handshake0.png',
            number: '180+', 
            label: 'HAPPY CLIENTS' 
        },
        { 
            icon: '/images/manager0.png',
            number: '25+', 
            label: 'EXPERT ENGINEERS' 
        }
    ]

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.title}>Innovation in Motion</h2>
                <p style={styles.subtitle}>
                    Dedicated to redefining industrial construction with high-quality materials,
                    expert engineering, and eco-efficient roofing solutions designed to last.
                </p>

                <div style={styles.grid}>
                    {stats.map((stat, index) => (
                        <div key={index} style={styles.card}>
                            <div style={styles.iconWrapper}>
                                <Image 
                                    src={stat.icon}
                                    alt={stat.label}
                                    width={60}
                                    height={60}
                                />
                            </div>
                            <div style={styles.number}>{stat.number}</div>
                            <div style={styles.label}>{stat.label}</div>
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
        gap: '40px',
    },
    card: {
        textAlign: 'center',
        padding: '40px 20px',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    },
    iconWrapper: {
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
    },
    number: {
        fontSize: '3rem',
        fontWeight: 700,
        color: '#1E40AF',
        marginBottom: '10px',
    },
    label: {
        fontSize: '0.875rem',
        fontWeight: 600,
        color: '#6B7280',
    }
}