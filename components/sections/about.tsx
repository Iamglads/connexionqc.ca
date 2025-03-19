"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="minimal-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Plus de 20 ans d'expertise en solutions audiovisuelles
            </h2>
            <p className="text-gray-400 mb-6">
              Depuis notre création, nous nous sommes engagés à fournir des solutions audiovisuelles 
              innovantes et sur mesure pour tous types d'événements. Notre expertise technique et 
              notre créativité nous permettent de transformer vos idées en expériences immersives 
              inoubliables.
            </p>
            <ul className="space-y-4">
              {[
                "Équipement de pointe régulièrement mis à jour",
                "Équipe technique hautement qualifiée",
                "Support 24/7 pendant vos événements",
                "Solutions personnalisées selon vos besoins"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center text-gray-300"
                >
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80"
                alt="Notre expertise"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-6 rounded-lg">
              <div className="text-4xl font-bold">20+</div>
              <div className="text-sm">années d'expérience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}