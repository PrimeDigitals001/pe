import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.grid}>
                    {/* Column 1 */}
                    <div>
                        <div style={styles.logoWrapper}>
                            <Image 
                                src="/images/asset-23-4-x-11.png"
                                alt="MK Roofing"
                                width={120}
                                height={40}
                            />
                        </div>
                        <p style={styles.tagline}>Designing the Future, One Space at a Time</p>
                        <p style={styles.address}>
                            Alpha Arcade, A 201, GIDC Rd, Bholav, Bharuch, Gujarat 392015
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 style={styles.heading}>Quick Links</h4>
                        <ul style={styles.list}>
                            <li><Link href="/about" style={styles.link}>About</Link></li>
                            <li><Link href="/services" style={styles.link}>Services</Link></li>
                            <li><Link href="/projects" style={styles.link}>Projects</Link></li>
                            <li><Link href="/testimonials" style={styles.link}>Testimonials</Link></li>
                            <li><Link href="/contact" style={styles.link}>Contact us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 style={styles.heading}>Contact Info</h4>
                        <p style={styles.text}>Call us: +91 73599 51901</p>
                        <p style={styles.text}>Mail us: info@mkroofing.com</p>
                        <h4 style={{...styles.heading, marginTop: '20px'}}>Follow us</h4>
                        <p style={styles.text}>Instagram | Facebook</p>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 style={styles.heading}>Let's Talk!</h4>
                        <p style={styles.text}>Sign up to receive the latest news and events from us.</p>
                        <input 
                            type="email" 
                            placeholder="Your Email*" 
                            style={styles.input}
                        />
                        <button style={styles.button}>SEND</button>
                        <p style={styles.smallText}>No worries, we don't spam your inbox.</p>
                    </div>
                </div>
            </div>

            <div style={styles.bottom}>
                <p>© 2025 MK. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

const styles = {
    footer: {
        background: '#1F2937',
        color: 'white',
        paddingTop: '80px',
    },
    container: {
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '40px',
        marginBottom: '60px',
    },
    logoWrapper: {
        marginBottom: '20px',
    },
    heading: {
        fontSize: '1.125rem',
        marginBottom: '20px',
        fontWeight: 600,
    },
    tagline: {
        fontSize: '0.9375rem',
        marginBottom: '20px',
        opacity: 0.9,
    },
    address: {
        fontSize: '0.875rem',
        lineHeight: 1.6,
        opacity: 0.8,
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '0.9375rem',
        opacity: 0.8,
        display: 'block',
        marginBottom: '12px',
    },
    text: {
        marginBottom: '10px',
        fontSize: '0.9375rem',
        opacity: 0.8,
    },
    smallText: {
        marginTop: '10px',
        fontSize: '0.75rem',
        opacity: 0.6,
    },
    input: {
        width: '100%',
        padding: '12px 16px',
        borderRadius: '8px',
        border: '1px solid rgba(255,255,255,0.2)',
        background: 'rgba(255,255,255,0.1)',
        color: 'white',
        fontSize: '0.9375rem',
        marginBottom: '12px',
        outline: 'none',
    },
    button: {
        width: '100%',
        padding: '12px 16px',
        background: '#1E40AF',
        color: 'white',
        borderRadius: '8px',
        border: 'none',
        fontWeight: 600,
        cursor: 'pointer',
    },
    bottom: {
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '24px 0',
        textAlign: 'center',
        fontSize: '0.875rem',
        opacity: 0.7,
    }
}