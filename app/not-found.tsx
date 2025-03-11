"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black noise">
      {/* Grille animée */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Orbes lumineux */}
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute left-10 top-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-12"
        >
          <h1 className="text-[12rem] font-bold text-white leading-none tracking-tighter gradient-text text-glow">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Oops! Page introuvable
          </h2>
          <p className="text-xl text-gray-400 max-w-lg mx-auto">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4"
          >
            <Button
              asChild
              size="lg"
              className="button-shine button-hover text-lg px-8 py-6"
            >
              <Link href="/" className="inline-flex items-center">
                <span>Retour à l&apos;accueil</span>
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Points animés */}
        <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 flex space-x-3">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-white rounded-full"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}