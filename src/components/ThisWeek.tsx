'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const events = [
  {
    id: 1,
    name: 'Deep Ellum Arts Festival',
    date: 'Feb 8-9',
    time: '11am - 10pm',
    venue: 'Deep Ellum',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=500&auto=format&fit=crop',
    category: 'Festival',
  },
  {
    id: 2,
    name: 'Dallas Symphony: Beethoven\'s 9th',
    date: 'Feb 10',
    time: '7:30pm',
    venue: 'Meyerson Center',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=500&auto=format&fit=crop',
    category: 'Music',
  },
  {
    id: 3,
    name: 'Mavericks vs Lakers',
    date: 'Feb 11',
    time: '7:30pm',
    venue: 'AAC',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=500&auto=format&fit=crop',
    category: 'Sports',
  },
  {
    id: 4,
    name: 'Fort Worth Stock Show',
    date: 'Through Feb 15',
    time: 'Various',
    venue: 'Will Rogers Center',
    image: 'https://images.unsplash.com/photo-1570793005386-4d6e7f3bb3f1?q=80&w=500&auto=format&fit=crop',
    category: 'Rodeo',
  },
  {
    id: 5,
    name: 'Valentine\'s Wine Walk',
    date: 'Feb 14',
    time: '6pm - 9pm',
    venue: 'Bishop Arts',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=500&auto=format&fit=crop',
    category: 'Food & Drink',
  },
];

export default function ThisWeek() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-terracotta-500" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-terracotta-600">
                This Week
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-ink-900 font-medium">
              Don&apos;t Miss Out
            </h2>
          </div>
          <Link 
            href="/events"
            className="hidden lg:inline-flex items-center gap-3 text-ink-600 font-medium hover:text-ink-900 transition-colors group"
          >
            <span className="text-sm uppercase tracking-widest">All events</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Horizontal scroll - editorial cards */}
      <div className="relative">
        <div className="flex gap-4 pl-4 md:pl-[max(1rem,calc((100vw-1280px)/2+1rem))] pr-8 overflow-x-auto pb-4 scrollbar-hide">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[300px]"
            >
              <Link href={`/events/${event.id}`} className="block group">
                <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-ink-100">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium uppercase tracking-widest text-white/80">
                      {event.category}
                    </span>
                  </div>
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="text-sm text-white/70 mb-2">
                      <span className="font-medium text-terracotta-400">{event.date}</span>
                      <span className="mx-2">·</span>
                      <span>{event.time}</span>
                    </div>
                    
                    <h3 className="font-serif text-xl text-white font-medium mb-2 group-hover:text-terracotta-300 transition-colors">
                      {event.name}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-sm text-white/60">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.venue}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile "View All" link */}
      <div className="lg:hidden px-4 mt-6">
        <Link 
          href="/events"
          className="inline-flex items-center gap-2 text-terracotta-600 font-medium"
        >
          <span className="text-sm uppercase tracking-widest">View all events</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
