'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Finally, a guide that actually knows DFW. Found my new favorite brunch spot through their recommendations.",
    author: "Sarah M.",
    location: "Uptown, Dallas",
  },
  {
    quote: "We use Explore DFW every weekend to find new places. The neighborhood guides are incredibly detailed.",
    author: "Marcus & Lisa",
    location: "Near Southside, Fort Worth",
  },
  {
    quote: "As a new transplant to Dallas, this site has been invaluable. Better than any other local guide I've tried.",
    author: "James K.",
    location: "Deep Ellum, Dallas",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-cream-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-terracotta-600 mb-4">
            From the Community
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-ink-900 font-medium">
            What Locals Are Saying
          </h2>
        </motion.div>

        {/* Testimonials grid - editorial quote style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-200">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-cream-50 p-8 md:p-10"
            >
              {/* Opening quote mark */}
              <div className="mb-6">
                <span className="font-serif text-6xl text-terracotta-300 leading-none">&ldquo;</span>
              </div>
              
              {/* Quote */}
              <p className="font-serif text-xl md:text-2xl text-ink-800 leading-relaxed mb-8">
                {testimonial.quote}
              </p>
              
              {/* Author */}
              <div className="pt-6 border-t border-ink-200">
                <p className="font-medium text-ink-900 text-sm">{testimonial.author}</p>
                <p className="text-ink-500 text-sm">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
