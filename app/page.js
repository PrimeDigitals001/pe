import Header from '@/components/Header'
import Logo from '@/components/Logo'
import FloatingQuoteButton from '@/components/FloatingQuoteButton'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Footer from '@/components/Footer'
import MissionSection from '@/components/MissionSection';
import InnovationSection from '@/components/InnovationSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection'
import ScrollingBanner from '@/components/ScrollingBanner';
import RecentProjectSection from '@/components/RecentProjectSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ClientsSection from '@/components/ClientsSection';
// import Footer from '@/components/Footer';


export default function Home() {
    return (
        <>
            {/* Fixed Elements */}
            <Logo />
            <Header />
            <FloatingQuoteButton />
            
            {/* Page Content */}
            <Hero />
            <MissionSection />
            <InnovationSection />
            {/* <Stats /> */}
            <ServicesSection />
            <StatsSection />
            <ScrollingBanner /> 
            <RecentProjectSection /> 
            <WhyChooseUsSection />
            <ClientsSection />
            <Footer />
            {/* <WhyChooseUs />
            <Footer /> */}
        </>
    )
} 
