import type { Metadata } from 'next';
import { SubmissionForm } from '@/components/forms/submission-form';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Demande de soumission',
  description: 'Obtenez une soumission personnalisée pour votre événement. Location d\'équipement audiovisuel professionnel à Montréal et ses environs.',
  openGraph: {
    title: 'Demande de soumission | Danie Carron',
    description: 'Obtenez une soumission personnalisée pour votre événement. Location d\'équipement audiovisuel professionnel.',
    type: 'website',
  },
};

export default function SubmissionPage() {
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
              Demande de soumission
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Transformez votre événement en une expérience inoubliable avec nos solutions audiovisuelles professionnelles sur mesure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#fac0d5] hover:bg-[#fac0d5]/90 text-black rounded-full"
              >
                <a href="#form-section">
                  Remplir le formulaire
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 rounded-full"
              >
                <Link href="/contact">
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-section" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Parlez-nous de votre projet
            </h2>
            <p className="text-lg text-gray-400">
              Remplissez le formulaire ci-dessous et nous vous contacterons rapidement avec une proposition adaptée à vos besoins.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <SubmissionForm />
          </div>
        </div>
      </section>
    </>
  );
}