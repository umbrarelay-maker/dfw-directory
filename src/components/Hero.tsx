'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const words = ['Restaurants', 'Adventures', 'Events', 'Hidden Gems'];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[800px] overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        {/* Dallas Skyline at Dusk */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1545194445-dddb8f4487c6?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
      </motion.div>

      {/* Full dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-terracotta-900/20 via-transparent to-navy-900/20" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 text-white/80 text-sm font-medium tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-terracotta-400 animate-pulse" />
            Your Guide to Dallas-Fort Worth
          </span>
        </motion.div>

        {/* Main Headline with Split Animation */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight"
          >
            Discover the Best
          </motion.h1>
        </div>
        
        {/* Animated Word Carousel */}
        <div className="overflow-hidden h-[1.2em] mb-8">
          <motion.div
            animate={{ y: ['0%', '-25%', '-50%', '-75%', '0%'] }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: 'easeInOut',
              times: [0, 0.2, 0.45, 0.7, 1],
            }}
            className="flex flex-col"
          >
            {[...words, words[0]].map((word, i) => (
              <span 
                key={i} 
                className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-terracotta-400 h-[1.2em] flex items-center justify-center"
              >
                {word}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-lg md:text-xl text-white font-light mb-10 leading-relaxed"
        >
          From legendary BBQ joints to rooftop cocktails, world-class museums to hidden speakeasies — 
          explore curated recommendations across the metroplex.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/eat-drink">
            <motion.button
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-terracotta-500 hover:bg-terracotta-400 text-white font-semibold rounded-full 
                         transition-all shadow-xl shadow-terracotta-500/25 hover:shadow-terracotta-500/40"
            >
              <span className="flex items-center gap-2">
                Start Exploring
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.button>
          </Link>
          <Link href="/events">
            <motion.button
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 text-white font-semibold rounded-full border-2 border-white/60 
                         hover:border-white hover:bg-white/10 transition-all"
            >
              This Weekend&apos;s Events
            </motion.button>
          </Link>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-24 left-0 right-0"
        >
          <div className="flex justify-center gap-6 md:gap-12">
            <div className="text-center px-4 md:px-6">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Restaurants</div>
            </div>
            <div className="h-12 w-px bg-white/20 hidden md:block" />
            <div className="text-center px-4 md:px-6">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">200+</div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Things to Do</div>
            </div>
            <div className="h-12 w-px bg-white/20 hidden md:block" />
            <div className="text-center px-4 md:px-6">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">15</div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Neighborhoods</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center text-white/40"
        >
          <svg className="w-6 h-10" viewBox="0 0 24 40" fill="none">
            <rect x="1" y="1" width="22" height="38" rx="11" stroke="currentColor" strokeWidth="2" />
            <motion.circle
              animate={{ y: [8, 20, 8] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              cx="12"
              cy="12"
              r="4"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
