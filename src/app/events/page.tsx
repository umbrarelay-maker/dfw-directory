'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuickNav from '@/components/QuickNav';
import { CalendarIcon, MapPinIcon, TicketIcon } from '@heroicons/react/24/outline';

const timeFilters = [
  { name: 'This Week', active: true },
  { name: 'This Weekend', active: false },
  { name: 'Next Week', active: false },
  { name: 'This Month', active: false },
];

const events = [
  {
    id: 1,
    name: 'Deep Ellum Arts Festival',
    category: 'Festival',
    venue: 'Deep Ellum',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=500&auto=format&fit=crop',
    date: 'Feb 8-9, 2026',
    time: '11am - 10pm',
    price: 'Free',
    description: 'Two days of art, music, and food celebrating Dallas\'s creative scene.',
  },
  {
    id: 2,
    name: 'Dallas Symphony: Beethoven\'s 9th',
    category: 'Music',
    venue: 'Meyerson Symphony Center',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=500&auto=format&fit=crop',
    date: 'Feb 10, 2026',
    time: '7:30pm',
    price: '$35-150',
    description: 'The DSO performs Beethoven\'s masterpiece with full chorus.',
  },
  {
    id: 3,
    name: 'Mavericks vs Lakers',
    category: 'Sports',
    venue: 'American Airlines Center',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=500&auto=format&fit=crop',
    date: 'Feb 11, 2026',
    time: '7:30pm',
    price: '$45-500',
    description: 'Western Conference showdown at the AAC.',
  },
  {
    id: 4,
    name: 'Fort Worth Stock Show & Rodeo',
    category: 'Rodeo',
    venue: 'Will Rogers Memorial Center',
    image: 'https://images.unsplash.com/photo-1570793005386-4d6e7f3bb3f1?q=80&w=500&auto=format&fit=crop',
    date: 'Through Feb 15',
    time: 'Various',
    price: '$10-50',
    description: '126 years of Western heritage, livestock shows, and rodeo action.',
  },
  {
    id: 5,
    name: 'Dallas Food + Wine Festival',
    category: 'Food',
    venue: 'Various Locations',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=500&auto=format&fit=crop',
    date: 'Feb 14-16, 2026',
    time: 'Various',
    price: '$75-200',
    description: 'Three days of tastings, dinners, and culinary events.',
  },
  {
    id: 6,
    name: 'Stand-Up Comedy Night',
    category: 'Comedy',
    venue: 'Addison Improv',
    image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=500&auto=format&fit=crop',
    date: 'Feb 12, 2026',
    time: '8pm',
    price: '$25',
    description: 'National touring comedians take the stage in Addison.',
  },
];

export default function EventsPage() {
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
              Events
            </h1>
            <p className="text-xl text-ink-600 max-w-2xl">
              Concerts, festivals, sports, and more — find out what&apos;s happening 
              across the DFW metroplex.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Time Filters */}
      <section className="border-b border-cream-300 bg-cream-100 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
            {timeFilters.map((filter, index) => (
              <motion.button
                key={filter.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter.active
                    ? 'bg-ink-900 text-white'
                    : 'bg-cream-200 text-ink-700 hover:bg-cream-300'
                }`}
              >
                {filter.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {events.map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/events/${event.id}`} className="block">
                  <div className="flex gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-2xl border border-cream-200 hover:border-sage-300 hover:shadow-lg transition-all">
                    {/* Image */}
                    <div className="flex-shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden img-zoom bg-ink-100">
                      <img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-sage-100 text-sage-700 rounded text-xs font-medium">
                          {event.category}
                        </span>
                      </div>
                      
                      <h3 className="font-serif text-lg md:text-xl font-bold text-ink-900 group-hover:text-sage-700 transition-colors mb-2 line-clamp-1">
                        {event.name}
                      </h3>
                      
                      <p className="text-ink-600 text-sm line-clamp-2 mb-3">
                        {event.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-500">
                        <span className="inline-flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          {event.date} · {event.time}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPinIcon className="w-4 h-4" />
                          {event.venue}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <TicketIcon className="w-4 h-4" />
                          {event.price}
                        </span>
                      </div>
                    </div>
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
              Load More Events
            </button>
          </motion.div>
        </div>
      </section>

      <QuickNav />
      <Footer />
    </main>
  );
}
