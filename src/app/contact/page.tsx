'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuickNav from '@/components/QuickNav';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream-50 flex flex-col">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-terracotta-100/50 to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-ink-600 max-w-2xl mx-auto">
              Have a question, suggestion, or want to partner with us? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-6">Contact Info</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-terracotta-100 flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-terracotta-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-ink-900 mb-1">Email Us</h3>
                    <p className="text-ink-600">hello@exploredfw.com</p>
                    <p className="text-sm text-ink-500 mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-sage-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-ink-900 mb-1">Based In</h3>
                    <p className="text-ink-600">Dallas, Texas</p>
                    <p className="text-sm text-ink-500 mt-1">Proudly local since day one</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-cream-100 rounded-xl">
                <h3 className="font-medium text-ink-900 mb-2">For Businesses</h3>
                <p className="text-ink-600 text-sm mb-4">
                  Interested in being featured or partnering with Explore DFW? 
                  We&apos;d love to learn about your business.
                </p>
                <a href="mailto:partners@exploredfw.com" className="text-terracotta-600 hover:text-terracotta-700 text-sm font-medium">
                  partners@exploredfw.com →
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-6">Send a Message</h2>
              
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white border border-cream-300 rounded-lg focus:outline-none focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-400/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white border border-cream-300 rounded-lg focus:outline-none focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-400/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-ink-700 mb-2">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 bg-white border border-cream-300 rounded-lg focus:outline-none focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-400/20 transition-all"
                  >
                    <option>General Inquiry</option>
                    <option>Suggest a Place</option>
                    <option>Report an Issue</option>
                    <option>Business Partnership</option>
                    <option>Press Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-cream-300 rounded-lg focus:outline-none focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-400/20 transition-all resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <QuickNav />
      <Footer />
    </main>
  );
}
