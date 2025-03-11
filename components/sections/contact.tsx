"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, ArrowRight, Clock, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Démarrez votre projet
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transformez votre événement en une expérience inoubliable avec nos solutions audiovisuelles sur mesure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Effet de lueur */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#fac0d5]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#fac0d5]/20 rounded-full blur-3xl" />
            
            {/* Contenu */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-[#fac0d5]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Horaires d'ouverture</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>Lundi - Vendredi: 9h00 - 17h00</li>
                      <li>Samedi - Dimanche: Sur rendez-vous</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-[#fac0d5]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Notre adresse</h3>
                    <p className="text-gray-400">
                      441 rue Ste-Hélène, suite #2<br />
                      Longueuil, Québec<br />
                      J4K 3R3
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-[#fac0d5]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Courriel</h3>
                    <a
                      href="mailto:info@danielcaron.com"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      info@danielcaron.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-[#fac0d5]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Téléphone</h3>
                    <div className="space-y-2">
                      <a
                        href="tel:4506772593"
                        className="block text-gray-400 hover:text-white transition-colors"
                      >
                        Bureau: (450) 677-2593
                      </a>
                      <a
                        href="tel:5147172593"
                        className="block text-gray-400 hover:text-white transition-colors"
                      >
                        Urgence: (514) 717-2593
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.8247532053766!2d-73.51498672346976!3d45.52247406361339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91b3e121a2575%3A0x5ed5e93024ddac91!2s441%20Rue%20Sainte-H%C3%A9l%C3%A8ne%20%232%2C%20Longueuil%2C%20QC%20J4K%203R3!5e0!3m2!1sfr!2sca!4v1711316127071!5m2!1sfr!2sca"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Demandez une soumission
              </h3>
              <p className="text-gray-400 mb-8">
                Remplissez notre formulaire détaillé pour recevoir une soumission personnalisée pour votre événement.
              </p>
              
              <Button
                asChild
                size="lg"
                className="w-full bg-[#fac0d5] hover:bg-[#fac0d5]/90 text-black font-medium rounded-full"
              >
                <Link href="/soumission">
                  <span>Obtenir une soumission</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Service d'urgence 24/7
                </h4>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#fac0d5]/10 flex items-center justify-center">
                    <PhoneCall className="h-6 w-6 text-[#fac0d5]" />
                  </div>
                  <div>
                    <p className="text-gray-400">Pour urgence technique</p>
                    <a
                      href="tel:5147172593"
                      className="text-xl font-semibold text-white hover:text-[#fac0d5] transition-colors"
                    >
                      (514) 717-2593
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}