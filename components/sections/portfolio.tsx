"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { projects } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: containerRef
  });

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-32 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#fac2d8_0%,_transparent_35%)] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#fac2d8_0%,_transparent_35%)] opacity-20" />

      <div className="container mx-auto px-4 mb-12">
        {/* Unique title styling */}
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-7xl font-bold text-white text-center mb-4"
          >
            Nos Réalisations
            <span className="absolute -inset-1 bg-[#fac2d8] blur-2xl opacity-20" />
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-24 bg-[#fac2d8] mx-auto"
          />
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="container mx-auto px-4 flex justify-end space-x-4 mb-8">
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll('left')}
          className="rounded-full border-white/20 text-white hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll('right')}
          className="rounded-full border-white/20 text-white hover:bg-white/10"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Horizontal scrolling projects */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide pb-8 px-4 md:px-8 space-x-6"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex-none w-[300px] md:w-[400px] scroll-snap-align-start"
          >
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium bg-[#fac2d8]/20 text-[#fac2d8] px-3 py-1 rounded-full inline-block backdrop-blur-sm w-fit mb-4">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-200">{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll progress indicator */}
      <div className="container mx-auto px-4 mt-8">
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#fac2d8]"
            style={{ scaleX: scrollXProgress }}
          />
        </div>
      </div>
    </section>
  );
}
