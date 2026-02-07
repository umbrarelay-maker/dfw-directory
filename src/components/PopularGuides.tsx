'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const guides = [
  {
    id: 1,
    number: '01',
    title: 'The BBQ Trail',
    subtitle: '12 spots that define Texas barbecue',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800&auto=format&fit=crop',
    href: '/guides/best-bbq',
    readTime: '8 min read',
  },
  {
    id: 2,
    number: '02',
    title: 'Date Night',
    subtitle: 'Romantic restaurants for every budget',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop',
    href: '/guides/date-night',
    readTime: '6 min read',
  },
  {
    id: 3,
    number: '03',
    title: 'Sunday Brunch',
    subtitle: 'Where Dallas does mornings right',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop',
    href: '/guides/brunch',
    readTime: '5 min read',
  },
  {
    id: 4,
    number: '04',
    title: 'Free Adventures',
    subtitle: 'The best things that cost nothing',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop',
    href: '/guides/free-activities',
    readTime: '7 min read',
  },
];

export default function PopularGuides() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-ink-950 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-terracotta-500" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-terracotta-400">
              Guides
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-white font-medium tracking-tight mb-4">
                Curated by Locals
              </h2>
              <p className="text-ink-400 max-w-xl text-lg">
                In-depth guides written by people who actually live here.
              </p>
            </div>
            <Link 
              href="/guides"
              className="inline-flex items-center gap-3 text-white/80 font-medium hover:text-white transition-colors group"
            >
              <span className="text-sm uppercase tracking-widest">All guides</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Guides grid - editorial magazine layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-800">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-ink-950"
            >
              <Link href={guide.href} className="block group">
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="relative sm:w-2/5 aspect-[4/3] sm:aspect-square overflow-hidden">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Number overlay */}
                    <div className="absolute top-4 left-4">
                      <span className="font-serif text-5xl font-medium text-white/20 group-hover:text-white/30 transition-colors">
                        {guide.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-center">
                    <span className="text-xs text-ink-500 uppercase tracking-widest mb-3">
                      {guide.readTime}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-white font-medium mb-2 group-hover:text-terracotta-400 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-ink-400 text-sm md:text-base">
                      {guide.subtitle}
                    </p>
                    
                    {/* Read link */}
                    <div className="mt-6 flex items-center gap-2 text-terracotta-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs uppercase tracking-widest font-medium">Read guide</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
