'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Newsletter() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-cream-100 border-y border-cream-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Editorial header */}
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-terracotta-600 mb-6">
            The Weekly
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl text-ink-900 font-medium tracking-tight mb-6 leading-tight">
            Get the inside scoop on DFW
          </h2>
          
          <p className="text-lg text-ink-600 mb-10 max-w-xl mx-auto leading-relaxed">
            New openings, seasonal picks, and local secrets — delivered to your inbox every Friday morning.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-4 bg-white border border-ink-200 
                         text-ink-900 placeholder-ink-400 focus:outline-none focus:border-terracotta-500
                         focus:ring-1 focus:ring-terracotta-500 transition-all text-center sm:text-left"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-8 py-4 bg-ink-900 hover:bg-ink-800 text-white text-sm font-medium uppercase tracking-widest
                         transition-colors"
            >
              Subscribe
            </motion.button>
          </div>
          
          <p className="mt-4 text-ink-500 text-sm">
            No spam. Unsubscribe anytime.
          </p>
        </motion.form>

        {/* Social proof - subtle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-12 border-t border-cream-300"
        >
          <p className="text-ink-500 text-sm">
            Trusted by <span className="text-ink-800 font-medium">50,000+</span> DFW locals
          </p>
        </motion.div>
      </div>
    </section>
  );
}
