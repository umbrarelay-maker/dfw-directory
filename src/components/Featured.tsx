'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { StarIcon, MapPinIcon } from '@heroicons/react/24/solid';

const featuredListings = [
  {
    id: 1,
    name: 'Pecan Lodge',
    category: 'BBQ',
    neighborhood: 'Deep Ellum',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2070&auto=format&fit=crop',
    rating: 4.8,
    description: 'Legendary Texas BBQ with lines around the block',
    featured: true,
    gridClass: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    name: 'Reunion Tower',
    category: 'Attraction',
    neighborhood: 'Downtown',
    image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=2028&auto=format&fit=crop',
    rating: 4.6,
    description: 'Iconic observation deck with 360° views',
    gridClass: 'md:col-start-3 md:row-start-1',
  },
  {
    id: 3,
    name: 'Bishop Arts District',
    category: 'Neighborhood',
    neighborhood: 'Oak Cliff',
    image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2026&auto=format&fit=crop',
    rating: 4.7,
    description: 'Eclectic shops, galleries, and restaurants',
    gridClass: 'md:col-start-3 md:row-start-2',
  },
  {
    id: 4,
    name: 'Uchi Dallas',
    category: 'Japanese',
    neighborhood: 'Uptown',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop',
    rating: 4.9,
    description: 'Award-winning contemporary Japanese cuisine',
    gridClass: 'md:col-start-1 md:row-start-3',
  },
  {
    id: 5,
    name: 'Dallas Arboretum',
    category: 'Garden',
    neighborhood: 'East Dallas',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2032&auto=format&fit=crop',
    rating: 4.8,
    description: '66-acre botanical paradise on White Rock Lake',
    gridClass: 'md:col-start-2 md:row-start-3',
  },
  {
    id: 6,
    name: 'Fort Worth Stockyards',
    category: 'Attraction',
    neighborhood: 'Fort Worth',
    image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?q=80&w=1974&auto=format&fit=crop',
    rating: 4.7,
    description: 'Historic district with daily cattle drives',
    gridClass: 'md:col-start-3 md:row-start-3',
  },
];

function FeaturedCard({ listing, index }: { listing: typeof featuredListings[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      className={`group relative ${listing.gridClass || ''}`}
    >
      <div className={`relative overflow-hidden rounded-2xl bg-ink-100 card-hover ${
        listing.featured ? 'aspect-[16/12] md:aspect-[16/9]' : 'aspect-[4/5]'
      }`}>
        {/* Image with zoom effect */}
        <div className="absolute inset-0 img-zoom">
          <img
            src={listing.image}
            alt={listing.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient overlay - stronger for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/50 to-ink-950/10 
                        group-hover:from-ink-950/100 transition-all duration-500" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 backdrop-blur-md 
                           text-white text-xs font-medium tracking-wide">
            {listing.category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-sm">
            <StarIcon className="w-4 h-4 text-amber-400" />
            {listing.rating}
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <div className="flex items-center gap-1.5 text-white/70 text-sm mb-2">
            <MapPinIcon className="w-4 h-4" />
            <span>{listing.neighborhood}</span>
          </div>
          
          <h3 className={`font-serif text-white font-bold mb-2 
                          group-hover:translate-x-1 transition-transform duration-500 ease-out-expo ${
            listing.featured ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
          }`}>
            {listing.name}
          </h3>
          
          <p className={`text-white/70 group-hover:text-white/90 transition-colors duration-300 ${
            listing.featured ? 'text-base' : 'text-sm line-clamp-2'
          }`}>
            {listing.description}
          </p>
        </div>

        {/* Hover reveal button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-5 right-5 md:bottom-6 md:right-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-ink-900 
                           text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300
                           transform translate-y-2 group-hover:translate-y-0">
            Explore
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Featured() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-terracotta-100/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-sage-100/50 to-transparent rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1 bg-terracotta-100 text-terracotta-700 rounded-full text-sm font-medium tracking-wide mb-4">
              Editor&apos;s Picks
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-ink-900 font-bold tracking-tight">
              Featured This Week
            </h2>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-terracotta-600 font-medium 
                       hover:text-terracotta-700 transition-colors"
          >
            View all picks
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-5 md:gap-6">
          {featuredListings.map((listing, index) => (
            <FeaturedCard key={listing.id} listing={listing} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
