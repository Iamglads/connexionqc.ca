import { Suspense } from 'react';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import About from '@/components/sections/about';
import Portfolio from '@/components/sections/portfolio';
import Clients from '@/components/sections/clients';
import Features from '@/components/sections/features';
import Contact from '@/components/sections/contact';
import { siteConfig } from '@/lib/config';

export default function Home() {
  return (
    <>
      <Hero />
      <Services services={siteConfig.services} />
      <About />
      <Portfolio />
      <Clients />
      <Features />
      <Contact />
    </>
  );
}