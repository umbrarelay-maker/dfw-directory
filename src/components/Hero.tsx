'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
        {/* Dallas Skyline - Reunion Tower & Downtown */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=2128&auto=format&fit=crop')`,
          }}
        />
        {/* Strong overlay for text readability on bright images */}
        <div className="absolute inset-0 bg-ink-950/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/50 to-ink-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/30 via-transparent to-ink-950/30" />
      </motion.div>

      {/* Animated Glow Effects */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-[5%] w-64 h-64 bg-terracotta-500/30 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-cyan-500/20 rounded-full blur-[120px]"
      />

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
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium tracking-wide border border-white/10">
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
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
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
                className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-terracotta-400 h-[1.2em] flex items-center justify-center drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
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
          className="max-w-2xl text-lg md:text-xl text-white/90 font-light mb-10 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
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
          <motion.button
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold 
                       rounded-full border border-white/20 hover:border-white/40 transition-all"
          >
            This Weekend&apos;s Events
          </motion.button>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-24 left-0 right-0"
        >
          <div className="flex justify-center gap-8 md:gap-16 text-white/60">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
              <div className="text-xs md:text-sm">Restaurants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">200+</div>
              <div className="text-xs md:text-sm">Things to Do</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">15</div>
              <div className="text-xs md:text-sm">Neighborhoods</div>
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
