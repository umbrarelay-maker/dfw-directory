'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Newsletter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=2071&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-ink-950/90" />
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-terracotta-400 text-sm font-medium tracking-wide uppercase mb-6">
            Stay in the Loop
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight mb-6">
            Never Miss the
            <br />
            <span className="text-terracotta-400">Best of DFW</span>
          </h2>
          
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Get weekly picks, new openings, and insider tips delivered straight to your inbox. 
            Join thousands of DFW explorers.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full
                       text-white placeholder-white/50 focus:outline-none focus:border-terracotta-400
                       focus:ring-2 focus:ring-terracotta-400/20 transition-all"
          />
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="px-8 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium rounded-full 
                       transition-colors shadow-lg shadow-terracotta-500/30"
          >
            Subscribe
          </motion.button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-white/50 text-sm"
        >
          No spam, unsubscribe anytime. We respect your inbox.
        </motion.p>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-col items-center"
        >
          <div className="flex -space-x-2 mb-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-terracotta-400 to-terracotta-600 border-2 border-ink-950 flex items-center justify-center text-white text-xs font-bold"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <p className="text-white/60 text-sm">
            Join <span className="text-white font-medium">50,000+</span> DFW locals who get our weekly picks
          </p>
        </motion.div>
      </div>
    </section>
  );
}
