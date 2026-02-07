'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { StarIcon, MapPinIcon } from '@heroicons/react/24/solid';

const categories = [
  { name: 'All', count: 500 },
  { name: 'BBQ', count: 45 },
  { name: 'Tex-Mex', count: 120 },
  { name: 'Fine Dining', count: 35 },
  { name: 'Asian', count: 85 },
  { name: 'Bars', count: 90 },
  { name: 'Cafés', count: 65 },
  { name: 'Brunch', count: 55 },
];

const restaurants = [
  {
    id: 1,
    name: 'Pecan Lodge',
    category: 'BBQ',
    neighborhood: 'Deep Ellum',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=500&auto=format&fit=crop',
    rating: 4.8,
    priceRange: '$$',
    description: 'Legendary Texas BBQ with lines around the block. Famous brisket and banana pudding.',
  },
  {
    id: 2,
    name: 'Uchi Dallas',
    category: 'Japanese',
    neighborhood: 'Uptown',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=500&auto=format&fit=crop',
    rating: 4.9,
    priceRange: '$$$$',
    description: 'Award-winning contemporary Japanese cuisine with innovative omakase.',
  },
  {
    id: 3,
    name: 'Mia\'s Tex-Mex',
    category: 'Tex-Mex',
    neighborhood: 'Lemmon Avenue',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=500&auto=format&fit=crop',
    rating: 4.5,
    priceRange: '$$',
    description: 'Dallas institution serving brisket tacos since 1981.',
  },
  {
    id: 4,
    name: 'The French Room',
    category: 'Fine Dining',
    neighborhood: 'Downtown',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=500&auto=format&fit=crop',
    rating: 4.7,
    priceRange: '$$$$',
    description: 'Opulent French cuisine in the historic Adolphus Hotel.',
  },
  {
    id: 5,
    name: 'Maple & Motor',
    category: 'Burgers',
    neighborhood: 'Maple Avenue',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop',
    rating: 4.6,
    priceRange: '$',
    description: 'Dive bar vibes with some of the best burgers in Dallas.',
  },
  {
    id: 6,
    name: 'Loro',
    category: 'Asian BBQ',
    neighborhood: 'Deep Ellum',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500&auto=format&fit=crop',
    rating: 4.7,
    priceRange: '$$',
    description: 'Asian smokehouse from the team behind Uchi and Franklin BBQ.',
  },
];

export default function EatDrinkPage() {
  return (
    <main className="min-h-screen bg-cream-50">
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
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-4">
              Eat & Drink
            </h1>
            <p className="text-xl text-ink-600 max-w-2xl">
              From legendary BBQ joints to innovative fine dining, discover the best 
              restaurants, bars, and cafés across DFW.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-cream-300 bg-cream-100/50 sticky top-[72px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((cat, index) => (
              <motion.button
                key={cat.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-ink-900 text-white'
                    : 'bg-cream-200 text-ink-700 hover:bg-cream-300'
                }`}
              >
                {cat.name} <span className="text-ink-400 ml-1">({cat.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {restaurants.map((restaurant, index) => (
              <motion.article
                key={restaurant.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/eat-drink/${restaurant.id}`} className="block">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 img-zoom bg-ink-100">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-ink-700">
                        {restaurant.priceRange}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
                        <StarIcon className="w-3 h-3 text-amber-500" />
                        {restaurant.rating}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-ink-500">
                      <span className="px-2 py-0.5 bg-terracotta-100 text-terracotta-700 rounded text-xs font-medium">
                        {restaurant.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPinIcon className="w-3 h-3" />
                        {restaurant.neighborhood}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-xl font-bold text-ink-900 group-hover:text-terracotta-600 transition-colors">
                      {restaurant.name}
                    </h3>
                    
                    <p className="text-ink-600 text-sm line-clamp-2">
                      {restaurant.description}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button className="px-8 py-3 bg-ink-900 hover:bg-ink-800 text-white font-medium rounded-full transition-colors">
              Load More
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
