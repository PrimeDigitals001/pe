import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import ServicesHero from './components/ServicesHero';
import ServicesGrid from './components/ServicesGrid';

export const metadata = {
    title: 'Our Services - Patel Enterprise',
    description: 'Explore our six core industrial services — roofing, civil construction, structural steel, scaffolding, painting, and maintenance. Built on safety, quality, and trust.',
};

export default function ServicesPage() {
    return (
        <>
            <Header />
            <Logo />
            <FloatingQuoteButton />
            <main>
                <ServicesHero />
                <ServicesGrid />
            </main>
            <Footer />
        </>
    );
}