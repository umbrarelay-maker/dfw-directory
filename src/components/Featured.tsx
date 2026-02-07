'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { StarIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

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
    category: 'Attraction',
    neighborhood: 'Downtown',
    image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=2028&auto=format&fit=crop',
    rating: 4.6,
    description: 'Iconic 561-foot observation tower with 360° views of the Dallas skyline.',
  },
  {
    id: 3,
    name: 'Bishop Arts District',
    category: 'Neighborhood',
    neighborhood: 'Oak Cliff',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop',
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
    name: 'Fort Worth Stockyards',
    category: 'Historic',
    neighborhood: 'Fort Worth',
    image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?q=80&w=1974&auto=format&fit=crop',
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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      className="group h-full"
    >
      <Link href={`/places/${listing.id}`} className="block h-full">
        <div className={`relative overflow-hidden rounded-2xl bg-ink-900 h-full ${large ? 'min-h-[500px]' : 'min-h-[320px]'}`}>
          {/* Image */}
          <div className="absolute inset-0">
            <img
              src={listing.image}
              alt={listing.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

          {/* Category & Rating */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <span className="px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-full text-white text-xs font-medium tracking-wide">
              {listing.category}
            </span>
            <span className="flex items-center gap-1 px-2.5 py-1.5 bg-black/40 backdrop-blur-sm rounded-full text-white text-sm">
              <StarIcon className="w-4 h-4 text-amber-400" />
              {listing.rating}
            </span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-1.5 text-white/70 text-sm mb-3">
              <MapPinIcon className="w-4 h-4" />
              <span>{listing.neighborhood}</span>
            </div>
            
            <h3 className={`font-serif text-white font-bold mb-2 group-hover:text-terracotta-300 transition-colors ${large ? 'text-3xl lg:text-4xl' : 'text-2xl'}`}>
              {listing.name}
            </h3>
            
            <p className={`text-white/70 mb-4 ${large ? 'text-base' : 'text-sm line-clamp-2'}`}>
              {listing.description}
            </p>

            <span className="inline-flex items-center gap-2 text-terracotta-400 text-sm font-medium group-hover:gap-3 transition-all">
              Explore
              <ArrowRightIcon className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Featured() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 bg-terracotta-100 text-terracotta-700 rounded-full text-sm font-medium tracking-wide mb-4">
              Editor&apos;s Picks
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-ink-900 font-bold tracking-tight">
              Featured This Week
            </h2>
          </div>
          <Link 
            href="/featured"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-terracotta-600 font-medium hover:text-terracotta-700 hover:gap-3 transition-all"
          >
            View all picks
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Grid Layout - 2 rows */}
        <div className="space-y-6">
          {/* Top row: 1 large + 2 small */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FeaturedCard listing={featuredListings[0]} index={0} large />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FeaturedCard listing={featuredListings[1]} index={1} />
              <FeaturedCard listing={featuredListings[2]} index={2} />
            </div>
          </div>
          
          {/* Bottom row: 3 equal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeaturedCard listing={featuredListings[3]} index={3} />
            <FeaturedCard listing={featuredListings[4]} index={4} />
            <FeaturedCard listing={featuredListings[5]} index={5} />
          </div>
        </div>
      </div>
    </section>
  );
}
