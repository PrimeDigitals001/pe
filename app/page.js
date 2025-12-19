import Header from '@/components/Header'
import Logo from '@/components/Logo'
import FloatingQuoteButton from '@/components/FloatingQuoteButton'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            {/* Fixed Elements */}
            <Logo />
            <Header />
            <FloatingQuoteButton />
            
            {/* Page Content */}
            <Hero />
            <Stats />
            <Services />
            <WhyChooseUs />
            <Footer />
        </>
    )
} 
