'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const words = ['Restaurants', 'Adventures', 'Events', 'Hidden Gems'];

// Floating particles for visual interest
const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 20 + 15,
  delay: Math.random() * 5,
}));

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[800px] overflow-hidden bg-ink-950">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        {/* Dallas Reunion Tower & Skyline - iconic Dallas shot */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=2128&auto=format&fit=crop')`,
          }}
        />
      </motion.div>

      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)',
            'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.6) 100%)',
            'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Animated light beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-1/2 h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12"
          animate={{ x: ['0%', '200%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
        />
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-1/3 h-[200%] bg-gradient-to-r from-transparent via-terracotta-500/10 to-transparent -rotate-12"
          animate={{ x: ['0%', '-200%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear', repeatDelay: 6 }}
        />
      </div>

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
            <motion.span 
              className="w-2 h-2 rounded-full bg-terracotta-400"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Your Guide to Dallas-Fort Worth
          </span>
        </motion.div>

        {/* Main Headline */}
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
          className="max-w-2xl text-lg md:text-xl text-white/90 font-light mb-10 leading-relaxed"
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
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-terracotta-500 hover:bg-terracotta-400 text-white font-semibold rounded-full 
                         transition-all shadow-2xl shadow-terracotta-500/30 hover:shadow-terracotta-500/50"
            >
              <span className="flex items-center gap-2">
                Start Exploring
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </span>
            </motion.button>
          </Link>
          <Link href="/events">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 text-white font-semibold rounded-full border-2 border-white/40 
                         hover:border-white hover:bg-white/10 transition-all"
            >
              This Weekend&apos;s Events
            </motion.button>
          </Link>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-20 left-0 right-0"
        >
          <div className="flex justify-center gap-6 md:gap-12">
            {[
              { num: '500+', label: 'Restaurants' },
              { num: '200+', label: 'Things to Do' },
              { num: '15', label: 'Neighborhoods' },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                className="text-center px-4 md:px-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.num}</div>
                <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center text-white/40"
        >
          <span className="text-xs mb-2 uppercase tracking-wider">Scroll</span>
          <svg className="w-5 h-8" viewBox="0 0 20 32" fill="none">
            <rect x="1" y="1" width="18" height="30" rx="9" stroke="currentColor" strokeWidth="2" />
            <motion.circle
              animate={{ y: [4, 16, 4] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              cx="10"
              cy="8"
              r="3"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
