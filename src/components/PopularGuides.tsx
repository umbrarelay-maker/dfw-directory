'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, FireIcon } from '@heroicons/react/24/solid';

const guides = [
  {
    id: 1,
    title: 'Best BBQ in DFW',
    subtitle: '12 spots that define Texas barbecue',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800&auto=format&fit=crop',
    href: '/guides/best-bbq',
    trending: true,
  },
  {
    id: 2,
    title: 'Ultimate Date Night',
    subtitle: 'Romantic restaurants for every budget',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop',
    href: '/guides/date-night',
    trending: false,
  },
  {
    id: 3,
    title: 'Brunch Like a Local',
    subtitle: 'Where Dallas does Sunday right',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop',
    href: '/guides/brunch',
    trending: true,
  },
  {
    id: 4,
    title: 'Free Things to Do',
    subtitle: 'Budget-friendly adventures',
    image: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?q=80&w=800&auto=format&fit=crop',
    href: '/guides/free-activities',
    trending: false,
  },
];

export default function PopularGuides() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-terracotta-600 text-sm font-medium tracking-wide uppercase mb-3">
              <FireIcon className="w-4 h-4" />
              Popular Guides
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-ink-900 font-bold">
              Curated by Locals
            </h2>
          </div>
          <Link 
            href="/guides"
            className="hidden sm:inline-flex items-center gap-2 text-terracotta-600 font-medium hover:text-terracotta-700 hover:gap-3 transition-all"
          >
            All guides
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={guide.href} className="block group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-ink-100">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {guide.trending && (
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-terracotta-500 text-white text-xs font-medium rounded-full">
                        <FireIcon className="w-3 h-3" />
                        Trending
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-serif text-lg font-bold text-white mb-1 group-hover:text-terracotta-200 transition-colors">
                      {guide.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-ink-600 text-sm">
                  {guide.subtitle}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile "View All" link */}
        <div className="sm:hidden mt-6">
          <Link 
            href="/guides"
            className="inline-flex items-center gap-2 text-terracotta-600 font-medium"
          >
            View all guides
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
