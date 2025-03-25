import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import ContactSection from '@/components/sections/contact';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez-nous pour tous vos besoins en équipement audiovisuel. Location et services professionnels à Montréal et ses environs.',
  openGraph: {
    title: 'Contact | Danie Carron',
    description: 'Contactez-nous pour tous vos besoins en équipement audiovisuel.',
    url: `${siteConfig.url}/contact`,
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20 pb-20>
      <ContactSection />
    </>
  );
}
