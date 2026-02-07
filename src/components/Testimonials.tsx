'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    quote: "Finally, a guide that actually knows DFW. Found my new favorite brunch spot through their recommendations!",
    author: "Sarah M.",
    location: "Uptown",
    rating: 5,
  },
  {
    quote: "We use Explore DFW every weekend to find new places. The neighborhood guides are incredibly detailed.",
    author: "Marcus & Lisa",
    location: "Fort Worth",
    rating: 5,
  },
  {
    quote: "As a new transplant to Dallas, this site has been invaluable. Better than any other local guide I've tried.",
    author: "James K.",
    location: "Deep Ellum",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-cream-50 border-y border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-2xl md:text-3xl text-ink-900 font-bold">
            What Locals Are Saying
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl border border-cream-200"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-amber-400" />
                ))}
              </div>
              
              <p className="text-ink-700 mb-4 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-terracotta-400 to-terracotta-600 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-ink-900 text-sm">{testimonial.author}</p>
                  <p className="text-ink-500 text-xs">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
