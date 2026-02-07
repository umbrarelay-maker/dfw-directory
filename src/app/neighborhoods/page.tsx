'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuickNav from '@/components/QuickNav';

const neighborhoods = [
  {
    id: 'deep-ellum',
    name: 'Deep Ellum',
    tagline: 'Art, music & nightlife',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop',
    description: 'Dallas\'s creative heart. Murals on every corner, live music spilling from venues, and some of the best dive bars in Texas.',
    highlights: ['42 Murals', '25+ Live Venues', '60 Restaurants'],
    vibe: ['Live Music', 'Street Art', 'Breweries', 'Nightlife'],
  },
  {
    id: 'bishop-arts',
    name: 'Bishop Arts District',
    tagline: 'Boutiques & brunch',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop',
    description: 'Charming walkable streets lined with independent boutiques, art galleries, and some of the best brunch spots in the city.',
    highlights: ['50+ Local Shops', '30 Restaurants', 'Weekly Markets'],
    vibe: ['Local Shops', 'Cafés', 'Galleries', 'Brunch'],
  },
  {
    id: 'uptown',
    name: 'Uptown',
    tagline: 'Dining & urban energy',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    description: 'The pulse of Dallas nightlife and fine dining. High-rises, happy hours, and some of the city\'s most celebrated restaurants.',
    highlights: ['100+ Restaurants', 'Katy Trail', 'West Village'],
    vibe: ['Fine Dining', 'Nightlife', 'Shopping', 'Happy Hour'],
  },
  {
    id: 'stockyards',
    name: 'Fort Worth Stockyards',
    tagline: 'Western heritage',
    image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?q=80&w=1974&auto=format&fit=crop',
    description: 'Where the West lives on. Historic district with daily cattle drives, honky-tonks, and authentic Texas BBQ.',
    highlights: ['Daily Cattle Drives', 'Rodeo Events', 'Historic Saloons'],
    vibe: ['Rodeo', 'BBQ', 'History', 'Live Country'],
  },
  {
    id: 'downtown',
    name: 'Downtown Dallas',
    tagline: 'Culture & skyline views',
    image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=2028&auto=format&fit=crop',
    description: 'The iconic Dallas skyline, world-class museums, and the Arts District. Where business meets culture.',
    highlights: ['Arts District', 'Reunion Tower', 'Klyde Warren Park'],
    vibe: ['Museums', 'Architecture', 'Fine Dining', 'Events'],
  },
  {
    id: 'lower-greenville',
    name: 'Lower Greenville',
    tagline: 'Neighborhood charm',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop',
    description: 'A beloved neighborhood strip with local restaurants, vintage shops, and the perfect Sunday afternoon vibe.',
    highlights: ['Granada Theater', 'Truck Yard', '40+ Restaurants'],
    vibe: ['Local Eats', 'Vintage Shops', 'Patio Drinks', 'Dog-Friendly'],
  },
];

export default function NeighborhoodsPage() {
  return (
    <main className="min-h-screen bg-cream-50 flex flex-col">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-sage-100/50 to-transparent" />
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
              Neighborhoods
            </h1>
            <p className="text-xl text-ink-600 max-w-2xl">
              Every DFW neighborhood has its own character. Explore our guides to find 
              your next favorite spot.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {neighborhoods.map((hood, index) => (
              <motion.article
                key={hood.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/neighborhoods/${hood.id}`} className="block">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 img-zoom bg-ink-100">
                    <img
                      src={hood.image}
                      alt={hood.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/40 to-transparent" />
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hood.vibe.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full text-white/90 text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="font-serif text-3xl font-bold text-white mb-1 group-hover:translate-x-2 transition-transform duration-500">
                        {hood.name}
                      </h2>
                      <p className="text-white/70">{hood.tagline}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-ink-600">
                      {hood.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      {hood.highlights.map((highlight) => (
                        <span key={highlight} className="text-ink-500">
                          ✦ {highlight}
                        </span>
                      ))}
                    </div>
                    
                    <div className="inline-flex items-center gap-2 text-terracotta-600 font-medium group-hover:gap-3 transition-all">
                      Explore {hood.name}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
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
