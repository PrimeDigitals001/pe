export default function Footer() {
    return (
        <footer style={{
            background: '#1F2937',
            color: 'white',
            padding: '40px 24px',
            marginTop: '80px'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <h3 style={{ marginBottom: '16px' }}>MK Roofing</h3>
                <p style={{ marginBottom: '10px', opacity: 0.9 }}>
                    Alpha Arcade, A 201, GIDC Rd, Bholav, Bharuch, Gujarat 392015
                </p>
                <p style={{ marginBottom: '10px', opacity: 0.9 }}>
                    Phone: +91 73599 51901 | Email: info@mkroofing.com
                </p>
                <p style={{ 
                    marginTop: '20px', 
                    paddingTop: '20px', 
                    borderTop: '1px solid rgba(255,255,255,0.2)',
                    opacity: 0.7,
                    fontSize: '14px'
                }}>
                    © 2024 MK Roofing. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}