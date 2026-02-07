'use client';

import { motion } from 'framer-motion';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

export default function QuickNav() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-ink-900 border-b border-ink-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <p className="text-ink-400 text-sm hidden sm:block">
            Discover more of Dallas-Fort Worth
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-ink-400 hover:text-white transition-colors text-sm ml-auto"
          >
            <ArrowUpIcon className="w-4 h-4" />
            Back to top
          </motion.button>
        </div>
      </div>
    </div>
  );
}
