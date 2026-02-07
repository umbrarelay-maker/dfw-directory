'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const quickLinks = [
  { name: 'Eat & Drink', href: '/eat-drink', emoji: '🍽️' },
  { name: 'Things to Do', href: '/things-to-do', emoji: '🎯' },
  { name: 'Events', href: '/events', emoji: '🎪' },
  { name: 'Neighborhoods', href: '/neighborhoods', emoji: '🏘️' },
];

export default function QuickNav() {
  return (
    <section className="bg-cream-100 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Quick Links */}
          <div className="flex flex-wrap gap-3 md:gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-cream-300 
                             hover:border-terracotta-300 hover:shadow-sm text-ink-700 hover:text-terracotta-600 
                             transition-all text-sm font-medium"
                >
                  <span>{link.emoji}</span>
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-ink-500 hover:text-ink-700 transition-colors text-sm font-medium"
          >
            Back to top
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
