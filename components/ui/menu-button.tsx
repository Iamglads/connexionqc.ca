"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function MenuButton({ isOpen, onClick, className }: MenuButtonProps) {
  const transition = { duration: 0.3, ease: [0.4, 0, 0.2, 1] };

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors",
        "group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fac2d8]",
        className
      )}
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-5">
        {/* Top line */}
        <motion.span
          initial={false}
          animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
          transition={transition}
          className="absolute top-0 left-0 w-full h-[2px] bg-[#fac2d8] rounded-full group-hover:bg-[#fac2d8]/80"
        />
        
        {/* Middle line */}
        <motion.span
          initial={false}
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={transition}
          className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[2px] bg-[#fac2d8] rounded-full group-hover:bg-[#fac2d8]/80"
        />
        
        {/* Bottom line */}
        <motion.span
          initial={false}
          animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
          transition={transition}
          className="absolute bottom-0 left-0 w-full h-[2px] bg-[#fac2d8] rounded-full group-hover:bg-[#fac2d8]/80"
        />
      </div>

      {/* Ripple effect on hover */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <span className="absolute inset-0 bg-[#fac2d8]/0 group-hover:bg-[#fac2d8]/5 transition-colors duration-300" />
        <span className="absolute inset-0 border-2 border-[#fac2d8]/0 group-hover:border-[#fac2d8]/20 rounded-xl transition-colors duration-300" />
      </div>
    </button>
  );
}