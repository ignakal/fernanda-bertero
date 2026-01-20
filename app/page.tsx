'use client';

import React from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Philosophy } from '../components/Philosophy';
import { Services } from '../components/Services';
// import { StyleAdvisor } from '../components/StyleAdvisor';
import { Contact } from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E8E4DF] selection:bg-[#D42D6F] selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        {/* <StyleAdvisor /> */}
        <Contact />
      </main>
    </div>
  );
}
