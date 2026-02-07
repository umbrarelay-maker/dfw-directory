'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { CalendarIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const events = [
  {
    id: 1,
    name: 'Deep Ellum Arts Festival',
    date: 'Feb 8-9',
    time: '11am - 10pm',
    venue: 'Deep Ellum',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=500&auto=format&fit=crop',
    category: 'Festival',
    price: 'Free',
  },
  {
    id: 2,
    name: 'Dallas Symphony: Beethoven\'s 9th',
    date: 'Feb 10',
    time: '7:30pm',
    venue: 'Meyerson Symphony Center',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=500&auto=format&fit=crop',
    category: 'Music',
    price: 'From $35',
  },
  {
    id: 3,
    name: 'Mavericks vs Lakers',
    date: 'Feb 11',
    time: '7:30pm',
    venue: 'American Airlines Center',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=500&auto=format&fit=crop',
    category: 'Sports',
    price: 'From $45',
  },
  {
    id: 4,
    name: 'Fort Worth Stock Show & Rodeo',
    date: 'Through Feb 15',
    time: 'Various',
    venue: 'Will Rogers Memorial Center',
    image: 'https://images.unsplash.com/photo-1570793005386-4d6e7f3bb3f1?q=80&w=500&auto=format&fit=crop',
    category: 'Rodeo',
    price: 'From $10',
  },
  {
    id: 5,
    name: 'Valentine\'s Wine Walk',
    date: 'Feb 14',
    time: '6pm - 9pm',
    venue: 'Bishop Arts District',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=500&auto=format&fit=crop',
    category: 'Food & Drink',
    price: '$45',
  },
];

export default function ThisWeek() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-terracotta-600 text-sm font-medium tracking-wide uppercase mb-3">
              <CalendarIcon className="w-4 h-4" />
              This Week
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-ink-900 font-bold">
              Don&apos;t Miss Out
            </h2>
          </div>
          <Link 
            href="/events"
            className="hidden sm:inline-flex items-center gap-2 text-terracotta-600 font-medium hover:text-terracotta-700 hover:gap-3 transition-all"
          >
            All events
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Horizontal scroll */}
      <div className="relative">
        <div className="flex gap-5 pl-4 md:pl-[max(1rem,calc((100vw-1280px)/2+1rem))] pr-8 overflow-x-auto pb-4 scrollbar-hide">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[280px] md:w-[320px]"
            >
              <Link href={`/events/${event.id}`} className="block group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-ink-100">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-ink-900 text-white text-xs font-medium rounded-full">
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-white text-ink-900 text-xs font-medium rounded-full shadow-sm">
                      {event.price}
                    </span>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 text-sm text-ink-500 mb-2">
                    <span className="font-medium text-terracotta-600">{event.date}</span>
                    <span>·</span>
                    <span>{event.time}</span>
                  </div>
                  
                  <h3 className="font-serif text-lg font-bold text-ink-900 mb-1 group-hover:text-terracotta-600 transition-colors line-clamp-1">
                    {event.name}
                  </h3>
                  
                  <div className="flex items-center gap-1 text-sm text-ink-500">
                    <MapPinIcon className="w-3.5 h-3.5" />
                    {event.venue}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile "View All" link */}
      <div className="sm:hidden px-4 mt-4">
        <Link 
          href="/events"
          className="inline-flex items-center gap-2 text-terracotta-600 font-medium"
        >
          View all events
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
