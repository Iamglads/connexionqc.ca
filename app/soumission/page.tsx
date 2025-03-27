import type { Metadata } from 'next';
import { SubmissionForm } from '@/components/forms/submission-form';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Demande de soumission | DC Connexion',
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
      {/* Form Section */}
      <section id="form-section" className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Demande de soumission
            </h1>
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
