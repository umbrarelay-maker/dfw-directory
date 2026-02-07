'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { StarIcon, MapPinIcon } from '@heroicons/react/24/solid';

const categories = [
  { name: 'All', count: 200 },
  { name: 'Outdoors', count: 45 },
  { name: 'Museums', count: 25 },
  { name: 'Entertainment', count: 35 },
  { name: 'Sports', count: 30 },
  { name: 'Family', count: 40 },
  { name: 'Tours', count: 25 },
];

const activities = [
  {
    id: 1,
    name: 'Dallas Arboretum',
    category: 'Garden',
    neighborhood: 'East Dallas',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=500&auto=format&fit=crop',
    rating: 4.8,
    priceRange: '$$',
    description: '66-acre botanical paradise on White Rock Lake with seasonal festivals and stunning gardens.',
  },
  {
    id: 2,
    name: 'Reunion Tower',
    category: 'Attraction',
    neighborhood: 'Downtown',
    image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=500&auto=format&fit=crop',
    rating: 4.6,
    priceRange: '$$',
    description: 'Iconic 561-foot observation tower with 360° views of the Dallas skyline.',
  },
  {
    id: 3,
    name: 'Perot Museum',
    category: 'Museum',
    neighborhood: 'Victory Park',
    image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=500&auto=format&fit=crop',
    rating: 4.7,
    priceRange: '$$',
    description: 'World-class science museum with interactive exhibits for all ages.',
  },
  {
    id: 4,
    name: 'Klyde Warren Park',
    category: 'Park',
    neighborhood: 'Uptown',
    image: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?q=80&w=500&auto=format&fit=crop',
    rating: 4.8,
    priceRange: 'Free',
    description: 'Urban park built over a freeway with food trucks, yoga, and events.',
  },
  {
    id: 5,
    name: 'Dallas World Aquarium',
    category: 'Attraction',
    neighborhood: 'West End',
    image: 'https://images.unsplash.com/photo-1559656914-a30970c1affd?q=80&w=500&auto=format&fit=crop',
    rating: 4.5,
    priceRange: '$$$',
    description: 'Multi-level aquarium and zoo with rainforest exhibits and exotic animals.',
  },
  {
    id: 6,
    name: 'AT&T Stadium Tours',
    category: 'Sports',
    neighborhood: 'Arlington',
    image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=500&auto=format&fit=crop',
    rating: 4.6,
    priceRange: '$$',
    description: 'Behind-the-scenes tours of the Cowboys\' $1.3 billion stadium.',
  },
];

export default function ThingsToDoPage() {
  return (
    <main className="min-h-screen bg-cream-50">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-100/50 to-transparent" />
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
              Things to Do
            </h1>
            <p className="text-xl text-ink-600 max-w-2xl">
              From world-class museums to outdoor adventures, discover unforgettable 
              experiences across the DFW metroplex.
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
            {activities.map((activity, index) => (
              <motion.article
                key={activity.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/things-to-do/${activity.id}`} className="block">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 img-zoom bg-ink-100">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-ink-700">
                        {activity.priceRange}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
                        <StarIcon className="w-3 h-3 text-amber-500" />
                        {activity.rating}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-ink-500">
                      <span className="px-2 py-0.5 bg-navy-100 text-navy-700 rounded text-xs font-medium">
                        {activity.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPinIcon className="w-3 h-3" />
                        {activity.neighborhood}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-xl font-bold text-ink-900 group-hover:text-navy-600 transition-colors">
                      {activity.name}
                    </h3>
                    
                    <p className="text-ink-600 text-sm line-clamp-2">
                      {activity.description}
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
