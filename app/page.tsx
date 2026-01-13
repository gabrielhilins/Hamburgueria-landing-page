'use client';

import { Navbar } from '@/app/components/layout/Navbar';
import { HeroSection } from '@/app/components/sections/Hero';
import { StatsSection } from '@/app/components/sections/Stats';
import { AboutSection } from '@/app/components/sections/About';
import { AwardsSection } from '@/app/components/sections/Awards';
import { ProcessSection } from '@/app/components/sections/Process';
import { BestsellersSection } from '@/app/components/sections/Bestsellers';
import { LocationSection } from '@/app/components/sections/Location';
import { Footer } from '@/app/components/layout/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <AwardsSection />
      <ProcessSection />
      <BestsellersSection />
      <LocationSection />
      <Footer />
    </main>
  );
}