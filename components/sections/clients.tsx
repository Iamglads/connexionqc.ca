"use client";

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { clients, groupClientsIntoRows } from '@/lib/clients-data';

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

  const clientRows = groupClientsIntoRows(clients);

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
                  duration: 20,
                  ease: "linear"
                }}
              >
                {[...clientRows[0], ...clientRows[0]].map((client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="flex items-center justify-center min-w-[150px] h-20 px-6"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain"
                      />
                    </div>
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
                  duration: 30,
                  ease: "linear"
                }}
              >
                {[...clientRows[1], ...clientRows[1]].map((client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="flex items-center justify-center min-w-[150px] h-20 bg-gray-50 rounded-lg px-6"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain"
                      />
                    </div>
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
                  duration: 40,
                  ease: "linear"
                }}
              >
                {[...clientRows[2], ...clientRows[2]].map((client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="flex items-center justify-center min-w-[150px] h-20 bg-gray-50 rounded-lg px-6"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain"
                      />
                    </div>
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
