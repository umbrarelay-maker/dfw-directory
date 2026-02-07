'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuickNav from '@/components/QuickNav';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream-50 flex flex-col">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-sage-100/50 to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6">
              About Explore DFW
            </h1>
            <p className="text-xl text-ink-600 max-w-2xl mx-auto">
              We&apos;re on a mission to help you discover the best of Dallas-Fort Worth — 
              one recommendation at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg prose-ink"
          >
            <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">Our Story</h2>
            <p className="text-ink-600 mb-6">
              Explore DFW was born out of a simple frustration: finding great places in the 
              Dallas-Fort Worth metroplex shouldn&apos;t be so hard. With over 7 million people 
              spread across 9,000+ square miles, DFW is one of the largest and most diverse 
              metro areas in the country.
            </p>
            <p className="text-ink-600 mb-6">
              We started as locals who were tired of generic recommendations and tourist traps. 
              We wanted a guide that felt like getting advice from a friend who actually lives 
              here — someone who knows the best taco spot in Oak Cliff, the perfect rooftop bar 
              in Uptown, and which Deep Ellum venues have the best live music on Tuesday nights.
            </p>
            
            <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4 mt-12">What We Do</h2>
            <p className="text-ink-600 mb-6">
              Every restaurant, attraction, and event on Explore DFW is personally vetted by 
              our team. We don&apos;t accept pay-for-placement, and we&apos;re not afraid to leave 
              places off our lists if they don&apos;t meet our standards.
            </p>
            <p className="text-ink-600 mb-6">
              Our neighborhood guides are written by people who actually spend time in those 
              neighborhoods. Our event picks come from people who attend them. We believe the 
              best recommendations come from genuine experience, not sponsored posts.
            </p>

            <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4 mt-12">Join Us</h2>
            <p className="text-ink-600 mb-6">
              Whether you&apos;re a lifelong DFW resident or just moved here last week, we hope 
              Explore DFW helps you fall in love with this incredible metroplex. There&apos;s 
              always something new to discover.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-8 bg-ink-900 rounded-2xl text-center"
          >
            <h3 className="font-serif text-2xl font-bold text-white mb-4">
              Get Weekly Recommendations
            </h3>
            <p className="text-ink-300 mb-6">
              Join 50,000+ DFW locals who get our best picks delivered every week.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium rounded-full transition-colors"
            >
              Subscribe to Newsletter
            </Link>
          </motion.div>
        </div>
      </section>

      <QuickNav />
      <Footer />
    </main>
  );
}
