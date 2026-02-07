'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const neighborhoods = [
  {
    name: 'Deep Ellum',
    tagline: 'Art, music & nightlife',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop',
    href: '/neighborhoods/deep-ellum',
    vibe: ['Live Music', 'Street Art', 'Breweries'],
  },
  {
    name: 'Bishop Arts',
    tagline: 'Boutiques & brunch',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    href: '/neighborhoods/bishop-arts',
    vibe: ['Local Shops', 'Cafés', 'Galleries'],
  },
  {
    name: 'Uptown',
    tagline: 'Dining & urban energy',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop',
    href: '/neighborhoods/uptown',
    vibe: ['Fine Dining', 'Nightlife', 'Shopping'],
  },
  {
    name: 'Fort Worth Stockyards',
    tagline: 'Western heritage',
    image: 'https://images.unsplash.com/photo-1570793005386-4d6e7f3bb3f1?q=80&w=1974&auto=format&fit=crop',
    href: '/neighborhoods/stockyards',
    vibe: ['Rodeo', 'BBQ', 'History'],
  },
];

export default function Neighborhoods() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-ink-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1 bg-terracotta-500/20 text-terracotta-400 rounded-full text-sm font-medium tracking-wide mb-4">
              Explore Areas
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-bold tracking-tight">
              Iconic Neighborhoods
            </h2>
          </div>
          <motion.div
            whileHover={{ x: 5 }}
            className="mt-4 md:mt-0"
          >
            <Link 
              href="/neighborhoods"
              className="inline-flex items-center gap-2 text-terracotta-400 font-medium hover:text-terracotta-300 transition-colors"
            >
              View all areas
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Horizontal Scroll Cards */}
      <motion.div style={{ x }} className="relative">
        <div className="flex gap-6 pl-4 md:pl-[calc((100vw-1280px)/2+1rem)] pr-8 overflow-x-visible">
          {neighborhoods.map((hood, index) => (
            <motion.div
              key={hood.name}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="flex-shrink-0 w-[300px] md:w-[400px]"
            >
              <Link href={hood.href} className="block group">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  {/* Image */}
                  <div className="absolute inset-0 img-zoom">
                    <img
                      src={hood.image}
                      alt={hood.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Gradient - stronger for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/20 
                                  group-hover:via-ink-950/70 transition-all duration-500" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {/* Vibe tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hood.vibe.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/15 rounded-full text-white/90 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mb-1
                                   group-hover:translate-x-2 transition-transform duration-500 ease-out">
                      {hood.name}
                    </h3>
                    <p className="text-white/60 group-hover:text-white/80 transition-colors">
                      {hood.tagline}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20
                                  flex items-center justify-center opacity-0 group-hover:opacity-100
                                  transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
