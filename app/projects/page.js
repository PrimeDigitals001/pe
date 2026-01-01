import React from 'react';
import Header from '@/components/Header';
import ProjectsHero from './components/ProjectsHero';
import ProjectsGallery from './components/ProjectsGallery';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Projects - Patel Enterprise',
  description: 'Explore our portfolio of successful construction projects and achievements.',
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectsHero />
        <ProjectsGallery />
      </main>
      <Footer />
    </>
  );
}