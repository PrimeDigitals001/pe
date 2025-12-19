import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
    return (
        <section style={styles.hero}>
            <div style={styles.backgroundWrapper}>
                <Image 
                    src="/images/relax-casual-male-asian-caucasian-engineer-staff-worker-uniform-happy-conversation-after-work-warehouse-distribution-background-10.png"
                    alt="Industrial Warehouse"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <div style={styles.overlay}></div>
            </div>

            <div style={styles.content}>
                <h1 style={styles.title}>
                    Complete Industrial<br />
                    Roofing & Shed Solutions
                </h1>
                <p style={styles.subtitle}>
                    We provide durable, safe, and innovative roofing systems for factories,
                    warehouses, and commercial structures powered by Tata BlueScope, Kee Safety, Tegola, and Saint-Gobain.
                </p>
                <div style={styles.buttons}>
                    <Link href="/projects" style={styles.btnPrimary}>
                        VIEW PROJECTS
                    </Link>
                    <Link href="/contact" style={styles.btnOutline}>
                        GET QUOTE
                    </Link>
                </div>
            </div>
        </section>
    )
}

const styles = {
    hero: {
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        paddingTop: '80px',
    },
    backgroundWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
    },
   
    content: {
        position: 'relative',
        zIndex: 1,
        padding: '0 24px',
        maxWidth: '900px',
    },
    title: {
        fontSize: '3.5rem',
        fontWeight: 700,
        marginBottom: '24px',
        lineHeight: 1.2,
        fontFamily: 'Inter, sans-serif',
    },
    subtitle: {
        fontSize: '1.125rem',
        marginBottom: '40px',
        lineHeight: 1.8,
        opacity: 0.95,
        fontFamily: 'Inter, sans-serif',
    },
    buttons: {
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    btnPrimary: {
        padding: '16px 32px',
        background: 'white',
        color: '#1E40AF',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 600,
        fontFamily: 'Inter, sans-serif',
        transition: 'transform 0.2s ease',
    },
    btnOutline: {
        padding: '16px 32px',
        background: 'transparent',
        color: 'white',
        border: '2px solid white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 600,
        fontFamily: 'Inter, sans-serif',
        transition: 'background 0.2s ease',
    }
}