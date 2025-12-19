import Header from '@/components/Header'
import Logo from '@/components/Logo'
import FloatingQuoteButton from '@/components/FloatingQuoteButton'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Products - MK Roofing',
    description: 'Explore our range of industrial roofing products and solutions',
}

export default function Products() {
    return (
        <>
            <Logo />
            <Header />
            <FloatingQuoteButton />
            
            <main style={{ paddingTop: '150px', minHeight: '80vh' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '24px' }}>Our Products</h1>
                    <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                        Discover our comprehensive range of industrial roofing and shed solutions.
                    </p>
                </div>
            </main>
            
            <Footer />
        </>
    )
}