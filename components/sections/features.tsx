"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Clock, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Équipement Professionnel",
    description: "Matériel audiovisuel haut de gamme régulièrement entretenu et mis à jour"
  },
  {
    icon: Clock,
    title: "Support 24/7",
    description: "Une équipe technique disponible à tout moment pour assurer le succès de votre événement"
  },
  {
    icon: Users,
    title: "Expertise Reconnue",
    description: "Plus de 20 ans d'expérience dans l'industrie audiovisuelle"
  },
  {
    icon: Zap,
    title: "Installation Rapide",
    description: "Une équipe efficace pour une mise en place optimale de votre équipement"
  }
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Des solutions audiovisuelles complètes adaptées à vos besoins
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/10 text-primary-400 mb-6">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}