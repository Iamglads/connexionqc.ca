"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/config';

const navigation = {
  main: [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Politique de confidentialité', href: '/privacy-policy' },
    { name: 'Conditions d\'utilisation', href: '/terms' },
  ],
};

const paymentMethods = [
  { name: 'Visa', icon: '/visa-icon.svg' },
  { name: 'Mastercard', icon: '/master-card-icon.svg' },
  { name: 'American Express', icon: '/american-express-icon.svg' },
  { name: 'PayPal', icon: '/paypal-color-icon.svg' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white relative">
      {/* Rounded top edges and animated border */}
      <div className="absolute inset-x-0 top-0 h-16 bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-x-0 -top-16 h-16 bg-black" style={{ borderRadius: '50% 50% 0 0' }} />
        </div>
        <motion.div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#fac2d8] to-transparent"
          animate={{
            opacity: [0.3, 1, 0.3],
            scaleX: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="minimal-container py-16 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand & Social */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold">Danie Carron</span>
            </Link>
            <p className="text-gray-400">
              Solutions audiovisuelles professionnelles pour vos événements
            </p>
            <div className="flex items-center space-x-4">
              <a
                href={siteConfig.links.facebook}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fac2d8]/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5 text-[#fac2d8]" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fac2d8]/20 transition-colors"
              >
                <Mail className="h-5 w-5 text-[#fac2d8]" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#fac2d8] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-[#fac2d8]" />
                </div>
                <div className="text-gray-400">
                  <p>Lun - Ven: 9h - 17h</p>
                  <p>Sam - Dim: Sur RDV</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-[#fac2d8]" />
                </div>
                <div>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#fac2d8]" />
                </div>
                <span className="text-gray-400">
                  {siteConfig.contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Danie Carron. Tous droits réservés.
            </p>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                {paymentMethods.map((method) => (
                  <img
                    key={method.name}
                    src={method.icon}
                    alt={method.name}
                    className="h-6 w-auto opacity-50 hover:opacity-75 transition-opacity"
                  />
                ))}
              </div>
              <div className="h-4 w-px bg-gray-700 mx-4" />
              <div className="flex space-x-6">
                {navigation.legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#fac2d8] transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}