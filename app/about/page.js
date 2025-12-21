import React from 'react';
import Header from '@/components/Header';
import AboutHero from './components/AboutHero';
import OurJourney from './components/OurJourney';
import Footer from '@/components/Footer';
import OurValues from './components/OurValue';
import LeadershipTeam from './components/LeadershipTeam';
import StatsSection from './components/StatsSection';

export const metadata = {
  title: 'About Us - Patel Enterprise',
  description: 'Discover our story, our values, and our dedication to delivering construction excellence.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <OurJourney />
        <OurValues />
        <LeadershipTeam />
        <StatsSection />
        {/* More sections will be added here */}
      </main>
      <Footer />
    </>
  );
}