'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const categories = [
  {
    name: 'Eat & Drink',
    description: 'From Tex-Mex to fine dining',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
    href: '/eat-drink',
    count: '500+ spots',
    color: 'terracotta',
  },
  {
    name: 'Things to Do',
    description: 'Adventures await',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop',
    href: '/things-to-do',
    count: '200+ activities',
    color: 'sage',
  },
  {
    name: 'Events',
    description: 'What\'s happening now',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
    href: '/events',
    count: 'This week',
    color: 'navy',
  },
  {
    name: 'Neighborhoods',
    description: 'Explore local areas',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2020&auto=format&fit=crop',
    href: '/neighborhoods',
    count: '15 guides',
    color: 'terracotta',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function Categories() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-sage-100 text-sage-700 rounded-full text-sm font-medium tracking-wide mb-4">
            Explore by Category
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink-900 font-bold tracking-tight mb-4">
            Find Your Next
            <br />
            <span className="text-terracotta-600">Adventure</span>
          </h2>
          <p className="max-w-xl mx-auto text-ink-600 text-lg">
            Whether you&apos;re craving great food, seeking new experiences, 
            or exploring the city, we&apos;ve got you covered.
          </p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {categories.map((category, index) => (
            <motion.div key={category.name} variants={cardVariants}>
              <Link href={category.href} className="block group">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden card-hover bg-ink-100">
                  {/* Image */}
                  <div className="absolute inset-0 img-zoom">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/30 to-transparent 
                                  opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Colored Accent Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    className={`absolute bottom-0 left-0 h-1 ${
                      category.color === 'terracotta' ? 'bg-terracotta-500' :
                      category.color === 'sage' ? 'bg-sage-500' : 'bg-navy-500'
                    }`}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className={`inline-block self-start px-3 py-1 rounded-full text-xs font-medium tracking-wide mb-3 ${
                        category.color === 'terracotta' ? 'bg-terracotta-500/20 text-terracotta-200' :
                        category.color === 'sage' ? 'bg-sage-500/20 text-sage-200' : 'bg-navy-400/20 text-navy-200'
                      }`}
                    >
                      {category.count}
                    </motion.span>
                    
                    <h3 className="font-serif text-3xl md:text-4xl text-white font-bold mb-2 
                                   group-hover:translate-x-2 transition-transform duration-500 ease-out-expo">
                      {category.name}
                    </h3>
                    
                    <p className="text-white/70 text-sm md:text-base 
                                  group-hover:text-white/90 transition-colors duration-300">
                      {category.description}
                    </p>

                    {/* Arrow */}
                    <motion.div
                      className="absolute bottom-6 md:bottom-8 right-6 md:right-8 w-12 h-12 rounded-full 
                                 bg-white/10 backdrop-blur-sm flex items-center justify-center
                                 group-hover:bg-white/20 transition-all duration-300
                                 group-hover:scale-110"
                    >
                      <svg 
                        className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
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
