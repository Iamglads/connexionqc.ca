"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-24">
      <div className="minimal-container relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="text-sm font-medium bg-white/10 px-4 py-2 rounded-full inline-block backdrop-blur-sm">
                Expert en solutions audiovisuelles depuis 20 ans
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Solutions{" "}
              <span className="relative">
                audiovisuelles
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl">
              Transformez vos événements en expériences immersives avec nos solutions sur mesure. 
              Une expertise technique au service de votre créativité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#fac2d8] hover:bg-[#fac2d8]/90 text-black rounded-full px-8"
              >
                <Link href="/contact">
                  <span>Démarrer un projet</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 rounded-full px-8"
              >
                <Link href="/services">
                  <Play className="mr-2 h-5 w-5" />
                  <span>Découvrir nos services</span>
                </Link>
              </Button>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-8 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-sm text-gray-300">Années d'expérience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm text-gray-300">Projets réalisés</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm text-gray-300">Clients satisfaits</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent rounded-full animate-pulse" />
            <div className="relative w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80"
                alt="Audiovisuel"
                fill
                className="object-cover rounded-full hover:scale-102 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white text-black p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-sm">Support technique</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Défilement indicateur */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
