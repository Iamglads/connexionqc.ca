"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MenuButton } from '@/components/ui/menu-button';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/config';

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-black/95 backdrop-blur-sm'
          : 'bg-transparent'
      )}
    >
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      
      {/* Rounded shape in the middle */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-24 bg-black/95 rounded-full -mb-12 hidden lg:block" />
      
      <nav className="mx-auto max-w-7xl px-6 py-6" aria-label="Global">
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <div className="flex items-center">
                <div className="relative h-8 w-8 mr-3">
                  <Image
                    src={siteConfig.logo}
                    alt={siteConfig.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="text-white text-xl">
                  <span className="font-normal">Daniel </span>
                  <span className="font-bold text-[#fac2d8]">Caron</span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <MenuButton
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-4"
            />
          </div>

          <div className="hidden lg:flex lg:gap-x-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors relative group',
                  pathname === item.href
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                )}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <div className="ml-6">
              <Button
                asChild
                size="lg"
                className="bg-[#fac2d8] hover:bg-[#fac2d8]/90 text-white rounded-full px-8"
              >
                <Link href="/soumission">
                  <span>Demander une soumission</span>
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ 
            opacity: mobileMenuOpen ? 1 : 0,
            x: mobileMenuOpen ? 0 : '100%'
          }}
          transition={{ duration: 0.3 }}
          className={cn(
            'fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10',
            !mobileMenuOpen && 'pointer-events-none'
          )}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <div className="flex items-center">
                <div className="relative h-8 w-8 mr-3">
                  <Image
                    src={siteConfig.logo}
                    alt={siteConfig.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="text-white text-xl">
                  <span className="font-normal">Daniel </span>
                  <span className="font-bold text-[#fac2d8]">Caron</span>
                </div>
              </div>
            </Link>
            <MenuButton
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(false)}
              className="ml-4"
            />
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-800">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors',
                      pathname === item.href
                        ? 'text-white bg-gray-900'
                        : 'text-gray-300 hover:bg-gray-900 hover:text-white'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#fac2d8] hover:bg-[#fac2d8]/90 rounded-full"
                >
                  <Link href="/soumission" onClick={() => setMobileMenuOpen(false)}>
                    <span>Demander une soumission</span>
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </nav>
    </header>
  );
}