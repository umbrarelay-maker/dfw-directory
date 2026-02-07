'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { 
    value: 500, 
    suffix: '+', 
    label: 'Restaurants & Bars',
    description: 'From hidden gems to iconic spots'
  },
  { 
    value: 200, 
    suffix: '+', 
    label: 'Things to Do',
    description: 'Adventures for every interest'
  },
  { 
    value: 15, 
    suffix: '', 
    label: 'Neighborhoods',
    description: 'Each with its own character'
  },
  { 
    value: 50, 
    suffix: 'K+', 
    label: 'Monthly Explorers',
    description: 'Join our community'
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
    <section ref={containerRef} className="py-20 md:py-28 bg-ink-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-terracotta-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sage-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4">
            Your Guide to the Metroplex
          </h2>
          <p className="text-ink-400 max-w-xl mx-auto">
            We&apos;ve curated the best of Dallas-Fort Worth so you can spend less time searching and more time exploring.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-terracotta-500/20 to-terracotta-500/5 mb-6"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="font-serif text-2xl font-bold text-terracotta-400">
                  {index === 0 && '🍽️'}
                  {index === 1 && '🎯'}
                  {index === 2 && '🏘️'}
                  {index === 3 && '👥'}
                </div>
              </motion.div>
              
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              
              <div className="text-white font-medium mb-1">
                {stat.label}
              </div>
              
              <div className="text-ink-500 text-sm">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
