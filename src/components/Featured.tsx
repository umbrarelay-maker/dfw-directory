'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const featuredListings = [
  {
    id: 1,
    name: 'Pecan Lodge',
    category: 'BBQ',
    neighborhood: 'Deep Ellum',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2070&auto=format&fit=crop',
    rating: 4.8,
    description: 'Legendary Texas BBQ with lines around the block. Famous brisket and banana pudding.',
  },
  {
    id: 2,
    name: 'Reunion Tower',
    category: 'Landmark',
    neighborhood: 'Downtown',
    image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=2028&auto=format&fit=crop',
    rating: 4.6,
    description: 'Iconic 561-foot observation tower with 360° views of the Dallas skyline.',
  },
  {
    id: 3,
    name: 'Bishop Arts',
    category: 'District',
    neighborhood: 'Oak Cliff',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    rating: 4.7,
    description: 'Eclectic shops, galleries, and restaurants in a walkable historic district.',
  },
  {
    id: 4,
    name: 'Uchi Dallas',
    category: 'Japanese',
    neighborhood: 'Uptown',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop',
    rating: 4.9,
    description: 'Award-winning contemporary Japanese cuisine with innovative omakase.',
  },
  {
    id: 5,
    name: 'Dallas Arboretum',
    category: 'Garden',
    neighborhood: 'East Dallas',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2032&auto=format&fit=crop',
    rating: 4.8,
    description: '66-acre botanical paradise on White Rock Lake with seasonal festivals.',
  },
  {
    id: 6,
    name: 'Stockyards',
    category: 'Historic',
    neighborhood: 'Fort Worth',
    image: 'https://images.unsplash.com/photo-1570793005386-4d6e7f3bb3f1?q=80&w=1974&auto=format&fit=crop',
    rating: 4.7,
    description: 'Where the West lives on. Daily cattle drives and authentic honky-tonks.',
  },
];

function FeaturedCard({ listing, index, large = false }: { listing: typeof featuredListings[0]; index: number; large?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      className="group h-full"
    >
      <Link href={`/places/${listing.id}`} className="block h-full">
        <div className={`relative overflow-hidden bg-ink-900 h-full ${large ? 'min-h-[500px]' : 'min-h-[360px]'}`}>
          {/* Image */}
          <div className="absolute inset-0">
            <img
              src={listing.image}
              alt={listing.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/30 to-transparent" />

          {/* Category badge - editorial style */}
          <div className="absolute top-5 left-5">
            <span className="text-xs font-medium uppercase tracking-widest text-white/80">
              {listing.category}
            </span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            {/* Location */}
            <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{listing.neighborhood}</span>
              <span className="text-white/40">·</span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-terracotta-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {listing.rating}
              </span>
            </div>
            
            <h3 className={`font-serif text-white font-medium mb-3 group-hover:text-terracotta-300 transition-colors ${large ? 'text-3xl lg:text-4xl' : 'text-2xl'}`}>
              {listing.name}
            </h3>
            
            <p className={`text-white/60 leading-relaxed ${large ? 'text-base' : 'text-sm line-clamp-2'}`}>
              {listing.description}
            </p>

            {/* Explore link */}
            <div className="mt-5 flex items-center gap-2 text-white/50 group-hover:text-terracotta-400 transition-colors">
              <span className="text-xs uppercase tracking-widest font-medium">Explore</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Featured() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-terracotta-500" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-terracotta-600">
              Editor&apos;s Picks
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-ink-900 font-medium tracking-tight">
                Featured This Week
              </h2>
            </div>
            <Link 
              href="/featured"
              className="inline-flex items-center gap-3 text-ink-600 font-medium hover:text-ink-900 transition-colors group"
            >
              <span className="text-sm uppercase tracking-widest">All picks</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Grid Layout - Editorial magazine style */}
        <div className="space-y-4">
          {/* Top row: 1 large + 2 stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <FeaturedCard listing={featuredListings[0]} index={0} large />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <FeaturedCard listing={featuredListings[1]} index={1} />
              <FeaturedCard listing={featuredListings[2]} index={2} />
            </div>
          </div>
          
          {/* Bottom row: 3 equal */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FeaturedCard listing={featuredListings[3]} index={3} />
            <FeaturedCard listing={featuredListings[4]} index={4} />
            <FeaturedCard listing={featuredListings[5]} index={5} />
          </div>
        </div>
      </div>
    </section>
  );
}
