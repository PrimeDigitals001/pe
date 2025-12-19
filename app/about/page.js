import Header from '@/components/Header'
import Logo from '@/components/Logo'
import FloatingQuoteButton from '@/components/FloatingQuoteButton'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'About Us - MK Roofing',
    description: 'Learn more about MK Roofing - Complete Industrial Roofing & Shed Solutions',
}

export default function About() {
    return (
        <>
            <Logo />
            <Header />
            <FloatingQuoteButton />
            
            <main style={{ paddingTop: '150px', minHeight: '80vh' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '24px' }}>About Us</h1>
                    <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '20px' }}>
                        MK Roofing specializes in complete industrial roofing and shed solutions.
                    </p>
                    <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                        We provide durable, safe, and innovative roofing systems for factories, 
                        warehouses, and commercial structures powered by Tata BlueScope, Kee Safety, 
                        Tegola, and Saint-Gobain.
                    </p>
                </div>
            </main>
            
            <Footer />
        </>
    )
}