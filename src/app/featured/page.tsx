'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuickNav from '@/components/QuickNav';
import { StarIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const featuredPlaces = [
  {
    id: 1,
    name: 'Pecan Lodge',
    category: 'BBQ',
    neighborhood: 'Deep Ellum',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    description: 'Legendary Texas BBQ with lines around the block. Famous brisket and banana pudding.',
  },
  {
    id: 2,
    name: 'Reunion Tower',
    category: 'Attraction',
    neighborhood: 'Downtown',
    image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=800&auto=format&fit=crop',
    rating: 4.6,
    description: 'Iconic 561-foot observation tower with 360° views of the Dallas skyline.',
  },
  {
    id: 3,
    name: 'Bishop Arts District',
    category: 'Neighborhood',
    neighborhood: 'Oak Cliff',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    description: 'Eclectic shops, galleries, and restaurants in a walkable historic district.',
  },
  {
    id: 4,
    name: 'Uchi Dallas',
    category: 'Japanese',
    neighborhood: 'Uptown',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    description: 'Award-winning contemporary Japanese cuisine with innovative omakase.',
  },
  {
    id: 5,
    name: 'Dallas Arboretum',
    category: 'Garden',
    neighborhood: 'East Dallas',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    description: '66-acre botanical paradise on White Rock Lake with seasonal festivals.',
  },
  {
    id: 6,
    name: 'Fort Worth Stockyards',
    category: 'Historic',
    neighborhood: 'Fort Worth',
    image: 'https://images.unsplash.com/photo-1570793005386-4d6e7f3bb3f1?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    description: 'Where the West lives on. Daily cattle drives and authentic honky-tonks.',
  },
  {
    id: 7,
    name: 'Klyde Warren Park',
    category: 'Park',
    neighborhood: 'Downtown',
    image: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    description: 'Urban park built over a freeway with food trucks, yoga, and events.',
  },
  {
    id: 8,
    name: 'Deep Ellum',
    category: 'Neighborhood',
    neighborhood: 'Dallas',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    description: 'Dallas\'s creative heart with street art, live music, and great food.',
  },
];

export default function FeaturedPage() {
  return (
    <main className="min-h-screen bg-cream-50 flex flex-col">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-terracotta-100/50 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-ink-500 hover:text-ink-700 mb-6 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <span className="inline-block px-4 py-1.5 bg-terracotta-100 text-terracotta-700 rounded-full text-sm font-medium tracking-wide mb-4">
              Editor&apos;s Picks
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-4">
              Featured Places
            </h1>
            <p className="text-xl text-ink-600 max-w-2xl">
              Our favorite spots across DFW, handpicked by locals who know the metroplex best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredPlaces.map((place, index) => (
              <motion.article
                key={place.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/places/${place.id}`} className="block">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-ink-100">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 right-3 flex justify-between">
                      <span className="px-2.5 py-1 bg-black/50 text-white text-xs font-medium rounded-full">
                        {place.category}
                      </span>
                      <span className="flex items-center gap-1 px-2.5 py-1 bg-black/50 text-white text-sm rounded-full">
                        <StarIcon className="w-4 h-4 text-amber-400" />
                        {place.rating}
                      </span>
                    </div>
                    
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-terracotta-200 transition-colors">
                        {place.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-ink-500 mb-2">
                    <MapPinIcon className="w-4 h-4" />
                    {place.neighborhood}
                  </div>
                  
                  <p className="text-ink-600 text-sm line-clamp-2 mb-2">
                    {place.description}
                  </p>
                  
                  <span className="inline-flex items-center gap-1 text-terracotta-600 text-sm font-medium group-hover:gap-2 transition-all">
                    Learn more <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <QuickNav />
      <Footer />
    </main>
  );
}
