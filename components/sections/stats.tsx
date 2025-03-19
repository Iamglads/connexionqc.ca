"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Calendar, Award, Star } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Clients satisfaits",
    description: "Des entreprises qui nous font confiance"
  },
  {
    icon: Calendar,
    value: "20+",
    label: "Années d'expérience",
    description: "Une expertise reconnue dans l'industrie"
  },
  {
    icon: Award,
    value: "1000+",
    label: "Événements réalisés",
    description: "Des projets couronnés de succès"
  },
  {
    icon: Star,
    value: "100%",
    label: "Taux de satisfaction",
    description: "La qualité au service de vos événements"
  }
];

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#fac2d8_0%,_transparent_35%)] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#fac2d8_0%,_transparent_35%)] opacity-10" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={ref}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#fac2d8]/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#fac2d8]/10 flex items-center justify-center group-hover:bg-[#fac2d8]/20 transition-colors">
                      <Icon className="h-6 w-6 text-[#fac2d8]" />
                    </div>
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={inView ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      className="text-3xl font-bold text-white"
                    >
                      {stat.value}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                  <p className="text-gray-400">{stat.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}