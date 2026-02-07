'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Link from 'next/link';

const categories = [
  {
    name: 'Eat & Drink',
    description: 'From legendary Tex-Mex to craft cocktails and everything in between',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
    href: '/eat-drink',
    count: '500+',
    label: 'spots',
  },
  {
    name: 'Things to Do',
    description: 'Museums, outdoor adventures, and experiences you won\'t forget',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop',
    href: '/things-to-do',
    count: '200+',
    label: 'activities',
  },
  {
    name: 'Events',
    description: 'Concerts, festivals, and happenings across the metroplex',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
    href: '/events',
    count: 'This',
    label: 'week',
  },
  {
    name: 'Neighborhoods',
    description: 'Local guides to the areas that make DFW unique',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2020&auto=format&fit=crop',
    href: '/neighborhoods',
    count: '15',
    label: 'guides',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function Categories() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-terracotta-500" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-terracotta-600">
              Explore
            </span>
          </div>
          <div className="max-w-3xl">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink-900 font-medium tracking-tight mb-6 leading-[1.1]">
              What are you looking for?
            </h2>
            <p className="text-ink-600 text-lg md:text-xl font-light max-w-xl">
              Whether it&apos;s a perfect dinner spot or your next weekend adventure, we&apos;ve done the research.
            </p>
          </div>
        </motion.div>

        {/* Category Grid - Editorial Layout */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {categories.map((category, index) => (
            <motion.div key={category.name} variants={cardVariants}>
              <Link href={category.href} className="block group">
                <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-ink-100">
                  {/* Image */}
                  <div className="absolute inset-0">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    {/* Count badge - editorial style */}
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="font-serif text-3xl md:text-4xl font-medium text-white">
                        {category.count}
                      </span>
                      <span className="text-sm text-white/70 uppercase tracking-wide">
                        {category.label}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-serif text-2xl md:text-3xl text-white font-medium mb-2 
                                   group-hover:translate-x-1 transition-transform duration-300 ease-out">
                      {category.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/70 text-sm md:text-base max-w-md">
                      {category.description}
                    </p>

                    {/* Explore link - appears on hover */}
                    <div className="mt-4 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors duration-300">
                      <span className="text-xs uppercase tracking-widest font-medium">Explore</span>
                      <svg 
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
