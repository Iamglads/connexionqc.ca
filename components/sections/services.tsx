"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Speaker, Projector, Lightbulb, Video, Monitor, Headphones, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Service {
  title: string;
  description: string;
  icon: string;
  image: string;
}

interface ServicesProps {
  services: Service[];
}

const iconMap = {
  Speaker: Speaker,
  Projector: Projector,
  Lightbulb: Lightbulb,
  Video: Video,
  Monitor: Monitor,
  HeadSet: Headphones,
};

export default function Services({ services }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#fac2d8_0%,_transparent_35%)] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#fac2d8_0%,_transparent_35%)] opacity-10" />
      
      <div className="minimal-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-[#fac2d8]/10 text-[#fac2d8] px-4 py-2 rounded-full text-sm font-medium mb-6">
            Nos Solutions Audiovisuelles
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Services Professionnels
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Des solutions innovantes et sur mesure pour transformer vos événements en expériences mémorables
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const isSelected = selectedService === index;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative ${isSelected ? 'lg:col-span-2 lg:row-span-2' : ''}`}
                onClick={() => setSelectedService(isSelected ? null : index)}
              >
                <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 p-6 transition-all duration-500 hover:border-[#fac2d8]/30">
                  {/* Service Image Background */}
                  <div className="absolute inset-0 opacity-20">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#fac2d8]/10 flex items-center justify-center group-hover:bg-[#fac2d8]/20 transition-colors">
                        {IconComponent && (
                          <IconComponent className="h-6 w-6 text-[#fac2d8]" />
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>

                    <AnimatePresence>
                      {isSelected ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <p className="text-gray-300">{service.description}</p>
                          <ul className="space-y-3">
                            {[
                              "Installation professionnelle",
                              "Support technique 24/7",
                              "Équipement haut de gamme",
                              "Configuration sur mesure"
                            ].map((feature, idx) => (
                              <li key={idx} className="flex items-center text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#fac2d8] mr-3" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Button
                            variant="outline"
                            className="mt-6 border-[#fac2d8] text-[#fac2d8] hover:bg-[#fac2d8]/10"
                          >
                            En savoir plus
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </motion.div>
                      ) : (
                        <motion.p
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-gray-400"
                        >
                          {service.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 border-2 border-[#fac2d8]/0 rounded-2xl transition-all duration-500 group-hover:border-[#fac2d8]/20" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-[#fac2d8] hover:bg-[#fac2d8]/90 text-black font-medium rounded-full px-8"
          >
            Découvrir tous nos services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
