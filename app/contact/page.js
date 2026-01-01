import Header from '@/components/Header'
import Logo from '@/components/Logo'
import FloatingQuoteButton from '@/components/FloatingQuoteButton'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Contact Us - Patel Enterprise',
    description: 'Get in touch with Patel Enterprise for your industrial roofing needs',
}

export default function Contact() {
    return (
        <>
            <Logo />
            <Header />
            <FloatingQuoteButton />
            
            <main style={{ paddingTop: '150px', minHeight: '80vh' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '24px' }}>Contact Us</h1>
                    <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '20px' }}>
                        Ready to start your industrial roofing project? Get in touch with us today!
                    </p>
                    
                    <div style={{ marginTop: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Contact Information</h2>
                        <p style={{ marginBottom: '10px' }}>
                            <strong>Address:</strong> Alpha Arcade, A 201, GIDC Rd, Bholav, Bharuch, Gujarat 392015
                        </p>
                        <p style={{ marginBottom: '10px' }}>
                            <strong>Phone:</strong> +91 73599 51901
                        </p>
                        <p>
                            <strong>Email:</strong> meetpatel@paterenterprise.com                     </p>
                    </div>
                </div>
            </main>
            
            <Footer />
        </>
    )
}   