'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { 
    value: 500, 
    suffix: '+', 
    label: 'Restaurants & Bars',
    accent: 'From neighborhood joints to fine dining'
  },
  { 
    value: 200, 
    suffix: '+', 
    label: 'Things to Do',
    accent: 'Museums, trails, and hidden gems'
  },
  { 
    value: 15, 
    suffix: '', 
    label: 'Neighborhoods',
    accent: 'Each with its own story'
  },
  { 
    value: 50, 
    suffix: 'K', 
    label: 'Monthly Readers',
    accent: 'And growing every day'
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(interval);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
}

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">
      {/* Subtle editorial line accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-ink-200 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-terracotta-600 mb-4">
            By the Numbers
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink-900 font-medium tracking-tight max-w-2xl mx-auto leading-tight">
            We&apos;ve spent years curating the best of Dallas-Fort Worth
          </h2>
        </motion.div>

        {/* Stats - Editorial grid with dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative py-8 lg:py-0 ${
                index < 2 ? 'border-b border-ink-200 lg:border-b-0' : ''
              } ${
                index % 2 === 0 ? 'pr-6 lg:pr-8' : 'pl-6 lg:pl-8'
              } ${
                index > 0 ? 'lg:border-l lg:border-ink-200' : ''
              }`}
            >
              <div className="lg:px-6">
                {/* The big number */}
                <div className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-ink-900 tracking-tight mb-3">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Label */}
                <div className="text-sm font-medium text-ink-800 uppercase tracking-wide mb-2">
                  {stat.label}
                </div>
                
                {/* Editorial accent text */}
                <div className="text-sm text-ink-500 italic font-serif">
                  {stat.accent}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom editorial quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 pt-12 border-t border-ink-200 text-center"
        >
          <p className="font-serif text-lg md:text-xl text-ink-600 italic max-w-2xl mx-auto">
            &ldquo;Spend less time searching, more time exploring.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
