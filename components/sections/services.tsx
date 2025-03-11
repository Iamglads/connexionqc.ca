"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Speaker, Projector, Lightbulb, Video, Monitor, Headphones } from 'lucide-react';

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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="minimal-section" ref={ref}>
      <div className="minimal-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="minimal-title mb-4">Nos Services</h2>
          <p className="minimal-subtitle mx-auto">
            Des solutions audiovisuelles innovantes pour tous vos événements
          </p>
        </motion.div>

        <div className="minimal-grid">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover-image"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {IconComponent && (
                      <IconComponent className="w-12 h-12 text-white" />
                    )}
                  </div>
                </div>
                <h3 className="minimal-heading mb-2">{service.title}</h3>
                <p className="minimal-text">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}