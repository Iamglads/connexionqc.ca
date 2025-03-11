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
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-setting-up-the-concert-stage-4801-large.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#fac0d5]/10 text-[#fac0d5] px-4 py-2 rounded-full text-sm font-medium mb-6">
              Location d'équipement audiovisuel
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets audiovisuels.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}