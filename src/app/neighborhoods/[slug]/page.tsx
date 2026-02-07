'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuickNav from '@/components/QuickNav';
import { MapPinIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const neighborhoodData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  vibe: string[];
}> = {
  'deep-ellum': {
    name: 'Deep Ellum',
    tagline: 'Art, music & nightlife',
    description: 'Dallas\'s creative heart. Murals on every corner, live music spilling from venues, and some of the best dive bars in Texas. Deep Ellum has been the cultural pulse of Dallas since the 1920s jazz era.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop',
    highlights: ['42 Murals', '25+ Live Venues', '60 Restaurants', 'Historic Jazz District'],
    vibe: ['Live Music', 'Street Art', 'Breweries', 'Nightlife', 'Food Halls'],
  },
  'bishop-arts': {
    name: 'Bishop Arts District',
    tagline: 'Boutiques & brunch',
    description: 'Charming walkable streets lined with independent boutiques, art galleries, and some of the best brunch spots in the city. A beloved neighborhood that maintains its small-town feel.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    highlights: ['50+ Local Shops', '30 Restaurants', 'Weekly Markets', 'Art Galleries'],
    vibe: ['Local Shops', 'Cafés', 'Galleries', 'Brunch', 'Vintage'],
  },
  'uptown': {
    name: 'Uptown',
    tagline: 'Dining & urban energy',
    description: 'The pulse of Dallas nightlife and fine dining. High-rises, happy hours, and some of the city\'s most celebrated restaurants. Walk the Katy Trail or explore West Village.',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop',
    highlights: ['100+ Restaurants', 'Katy Trail', 'West Village', 'McKinney Ave'],
    vibe: ['Fine Dining', 'Nightlife', 'Shopping', 'Happy Hour', 'Fitness'],
  },
  'stockyards': {
    name: 'Fort Worth Stockyards',
    tagline: 'Western heritage',
    description: 'Where the West lives on. Historic district with daily cattle drives, honky-tonks, and authentic Texas BBQ. Experience genuine cowboy culture just 30 minutes from Dallas.',
    image: 'https://images.unsplash.com/photo-1570793005386-4d6e7f3bb3f1?q=80&w=1974&auto=format&fit=crop',
    highlights: ['Daily Cattle Drives', 'Rodeo Events', 'Historic Saloons', 'Western Shops'],
    vibe: ['Rodeo', 'BBQ', 'History', 'Live Country', 'Western Wear'],
  },
  'fort-worth': {
    name: 'Fort Worth',
    tagline: 'Where the West begins',
    description: 'Fort Worth offers a perfect blend of Western heritage and modern culture. From the Cultural District\'s world-class museums to the Stockyards\' daily cattle drives.',
    image: 'https://images.unsplash.com/photo-1570793005386-4d6e7f3bb3f1?q=80&w=1974&auto=format&fit=crop',
    highlights: ['Cultural District', 'Sundance Square', 'Stockyards', 'Botanic Garden'],
    vibe: ['Museums', 'Western Culture', 'BBQ', 'Live Music', 'Art'],
  },
  'downtown': {
    name: 'Downtown Dallas',
    tagline: 'Culture & skyline views',
    description: 'The iconic Dallas skyline, world-class museums, and the Arts District. Where business meets culture. Home to Reunion Tower, Klyde Warren Park, and the Perot Museum.',
    image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=2028&auto=format&fit=crop',
    highlights: ['Arts District', 'Reunion Tower', 'Klyde Warren Park', 'Perot Museum'],
    vibe: ['Museums', 'Architecture', 'Fine Dining', 'Events', 'Food Trucks'],
  },
};

export default function NeighborhoodDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const neighborhood = neighborhoodData[slug];

  if (!neighborhood) {
    return (
      <main className="min-h-screen bg-cream-50 flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold text-ink-900 mb-4">Neighborhood Not Found</h1>
            <Link href="/neighborhoods" className="text-terracotta-600 hover:text-terracotta-700">
              ← Back to Neighborhoods
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream-50 flex flex-col">
      <Header />
      
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src={neighborhood.image}
            alt={neighborhood.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/50 to-ink-950/30" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/neighborhoods"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              All Neighborhoods
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {neighborhood.vibe.slice(0, 4).map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mb-2">
              {neighborhood.name}
            </h1>
            <p className="text-xl text-white/80">{neighborhood.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">About {neighborhood.name}</h2>
                <p className="text-ink-600 text-lg leading-relaxed mb-8">
                  {neighborhood.description}
                </p>
                
                <h3 className="font-serif text-xl font-bold text-ink-900 mb-4">Highlights</h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {neighborhood.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3 p-4 bg-cream-100 rounded-lg">
                      <MapPinIcon className="w-5 h-5 text-terracotta-500" />
                      <span className="text-ink-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-xl border border-cream-200 sticky top-24"
              >
                <h3 className="font-serif text-lg font-bold text-ink-900 mb-4">Explore {neighborhood.name}</h3>
                <div className="space-y-3">
                  <Link href="/eat-drink" className="block p-3 bg-cream-50 rounded-lg hover:bg-cream-100 transition-colors">
                    <span className="font-medium text-ink-900">🍽️ Restaurants & Bars</span>
                  </Link>
                  <Link href="/things-to-do" className="block p-3 bg-cream-50 rounded-lg hover:bg-cream-100 transition-colors">
                    <span className="font-medium text-ink-900">🎯 Things to Do</span>
                  </Link>
                  <Link href="/events" className="block p-3 bg-cream-50 rounded-lg hover:bg-cream-100 transition-colors">
                    <span className="font-medium text-ink-900">🎪 Events</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <QuickNav />
      <Footer />
    </main>
  );
}
