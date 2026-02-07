'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuickNav from '@/components/QuickNav';
import { FireIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const guides = [
  {
    id: 'best-bbq',
    title: 'Best BBQ in DFW',
    subtitle: '12 spots that define Texas barbecue',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800&auto=format&fit=crop',
    trending: true,
  },
  {
    id: 'date-night',
    title: 'Ultimate Date Night',
    subtitle: 'Romantic restaurants for every budget',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop',
    trending: false,
  },
  {
    id: 'brunch',
    title: 'Brunch Like a Local',
    subtitle: 'Where Dallas does Sunday right',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop',
    trending: true,
  },
  {
    id: 'free-activities',
    title: 'Free Things to Do',
    subtitle: 'Budget-friendly adventures',
    image: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?q=80&w=800&auto=format&fit=crop',
    trending: false,
  },
  {
    id: 'happy-hour',
    title: 'Best Happy Hours',
    subtitle: 'Deals that actually deliver',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop',
    trending: true,
  },
  {
    id: 'family-fun',
    title: 'Family-Friendly DFW',
    subtitle: 'Adventures for all ages',
    image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=800&auto=format&fit=crop',
    trending: false,
  },
];

export default function GuidesPage() {
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
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-4">
              City Guides
            </h1>
            <p className="text-xl text-ink-600 max-w-2xl">
              Curated guides by locals who know DFW best. From the perfect date night 
              to the best BBQ joints — we&apos;ve got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {guides.map((guide, index) => (
              <motion.article
                key={guide.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/guides/${guide.id}`} className="block group">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-ink-100">
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
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-serif text-xl font-bold text-white mb-1 group-hover:text-terracotta-200 transition-colors">
                        {guide.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-ink-600 text-sm flex items-center gap-2">
                    {guide.subtitle}
                    <ArrowRightIcon className="w-4 h-4 text-terracotta-500 group-hover:translate-x-1 transition-transform" />
                  </p>
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
