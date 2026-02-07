'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const stats = [
  { value: 500, suffix: '+', label: 'Restaurants & Bars', icon: '🍽️' },
  { value: 200, suffix: '+', label: 'Things to Do', icon: '🎯' },
  { value: 15, suffix: '', label: 'Neighborhoods', icon: '🏘️' },
  { value: 50, suffix: 'K+', label: 'Monthly Explorers', icon: '👥' },
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
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-100 border-y border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="font-serif text-4xl md:text-5xl font-bold text-ink-900 mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-ink-500 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
