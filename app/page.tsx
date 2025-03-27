import { Suspense } from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import About from '@/components/sections/about';
import Portfolio from '@/components/sections/portfolio';
import Clients from '@/components/sections/clients';
import Features from '@/components/sections/features';
import Contact from '@/components/sections/contact';
import { siteConfig } from '@/lib/config';


export const metadata: Metadata = {
  title: 'DC Connexion | Location solutions audiovisuelles',
  description: 'Contactez-nous pour tous vos besoins en équipement audiovisuel. Location et services professionnels à Montréal et ses environs.',
  openGraph: {
    title: 'Contact | Danie Carron',
    description: 'Contactez-nous pour tous vos besoins en équipement audiovisuel.',
    url: `${siteConfig.url}/contact`,
    type: 'website',
  },
};

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
