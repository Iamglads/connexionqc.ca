"use client";

import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const clientLogos = [
  ['Fiera-Capital', 'Banff', 'Belron Canada', 'Le Groupe Maurice', 'Logo-Fiam', 'Mercedes-Benz', 'Montovi', 'Vasco-Design'],
  ['CMMTQ', 'Dentons', "Arc'teryx", 'Country Club', 'Pneu-Supérieur', 'Odace', 'La cinematheque', 'Valeant'],
  ['Logo-DSS', 'Peterbilt', 'Roxboro', 'Mova', 'Via-Rail', 'Ricova', 'Radio-Canada', 'Québec']
];

export default function Clients() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des entreprises de renom qui nous confient leurs projets audiovisuels
          </p>
        </motion.div>

        <div ref={ref} className="space-y-16">
          {/* Première ligne - Vitesse rapide vers la gauche */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="flex space-x-12 overflow-hidden">
              <motion.div
                className="flex space-x-12 whitespace-nowrap"
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{
                  repeat: Infinity,
                  duration: 20, // Plus rapide
                  ease: "linear"
                }}
              >
                {[...clientLogos[0], ...clientLogos[0]].map((client, index) => (
                  <div
                    key={`${client}-${index}`}
                    className="flex items-center justify-center min-w-[150px] h-20 bg-gray-50 rounded-lg px-6"
                  >
                    <span className="text-gray-600 font-medium">{client}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Deuxième ligne - Vers la droite */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="flex space-x-12 overflow-hidden">
              <motion.div
                className="flex space-x-12 whitespace-nowrap"
                initial={{ x: "-50%" }}
                animate={{ x: "0%" }}
                transition={{
                  repeat: Infinity,
                  duration: 30, // Vitesse moyenne
                  ease: "linear"
                }}
              >
                {[...clientLogos[1], ...clientLogos[1]].map((client, index) => (
                  <div
                    key={`${client}-${index}`}
                    className="flex items-center justify-center min-w-[150px] h-20 bg-gray-50 rounded-lg px-6"
                  >
                    <span className="text-gray-600 font-medium">{client}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Troisième ligne - Vitesse lente vers la gauche */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="flex space-x-12 overflow-hidden">
              <motion.div
                className="flex space-x-12 whitespace-nowrap"
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{
                  repeat: Infinity,
                  duration: 40, // Plus lent
                  ease: "linear"
                }}
              >
                {[...clientLogos[2], ...clientLogos[2]].map((client, index) => (
                  <div
                    key={`${client}-${index}`}
                    className="flex items-center justify-center min-w-[150px] h-20 bg-gray-50 rounded-lg px-6"
                  >
                    <span className="text-gray-600 font-medium">{client}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}