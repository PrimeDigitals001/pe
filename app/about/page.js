import React from 'react';
import Header from '@/components/Header';
import AboutHero from './components/AboutHero';
import OurJourney from './components/OurJourney';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us - MK Roofing',
  description: 'Discover our story, our values, and our dedication to delivering construction excellence.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <OurJourney />
        {/* More sections will be added here */}
      </main>
      <Footer />
    </>
  );
}