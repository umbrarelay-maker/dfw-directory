'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuickNav from '@/components/QuickNav';
import { ArrowLeftIcon, StarIcon, MapPinIcon } from '@heroicons/react/24/solid';

const guideData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  places: { name: string; neighborhood: string; rating: number; description: string; image: string }[];
}> = {
  'best-bbq': {
    title: 'Best BBQ in DFW',
    subtitle: '12 spots that define Texas barbecue',
    description: 'From legendary pitmasters to hidden gems, these are the BBQ joints that make Dallas-Fort Worth a barbecue destination.',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2070&auto=format&fit=crop',
    places: [
      { name: 'Pecan Lodge', neighborhood: 'Deep Ellum', rating: 4.8, description: 'The brisket that put Deep Ellum on the BBQ map.', image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=500&auto=format&fit=crop' },
      { name: 'Terry Black\'s', neighborhood: 'Deep Ellum', rating: 4.7, description: 'Austin BBQ royalty\'s Dallas outpost.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500&auto=format&fit=crop' },
      { name: 'Cattleack Barbeque', neighborhood: 'Farmers Branch', rating: 4.9, description: 'Worth the wait. Every. Single. Time.', image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=500&auto=format&fit=crop' },
    ],
  },
  'date-night': {
    title: 'Ultimate Date Night',
    subtitle: 'Romantic restaurants for every budget',
    description: 'Whether it\'s a first date or your anniversary, these restaurants set the mood perfectly.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
    places: [
      { name: 'Uchi Dallas', neighborhood: 'Uptown', rating: 4.9, description: 'Innovative Japanese in an intimate setting.', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=500&auto=format&fit=crop' },
      { name: 'The French Room', neighborhood: 'Downtown', rating: 4.7, description: 'Old-world elegance at The Adolphus.', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=500&auto=format&fit=crop' },
      { name: 'Georgie', neighborhood: 'Highland Park', rating: 4.6, description: 'California cool meets Southern charm.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=500&auto=format&fit=crop' },
    ],
  },
  'brunch': {
    title: 'Brunch Like a Local',
    subtitle: 'Where Dallas does Sunday right',
    description: 'Bottomless mimosas, fluffy pancakes, and the best people-watching in town.',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop',
    places: [
      { name: 'Bread Winners', neighborhood: 'Multiple', rating: 4.5, description: 'The Dallas brunch institution.', image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=500&auto=format&fit=crop' },
      { name: 'Oddfellows', neighborhood: 'Bishop Arts', rating: 4.6, description: 'Farm-to-table in a stunning space.', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=500&auto=format&fit=crop' },
      { name: 'The Henry', neighborhood: 'Uptown', rating: 4.4, description: 'Instagram-worthy and delicious.', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=500&auto=format&fit=crop' },
    ],
  },
};

// Default guide for pages not yet created
const defaultGuide = {
  title: 'Guide Coming Soon',
  subtitle: 'We\'re working on this guide',
  description: 'Check back soon for our curated recommendations.',
  image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=2070&auto=format&fit=crop',
  places: [],
};

export default function GuideDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const guide = guideData[slug] || defaultGuide;

  return (
    <main className="min-h-screen bg-cream-50 flex flex-col">
      <Header />
      
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px]">
        <div className="absolute inset-0">
          <img
            src={guide.image}
            alt={guide.title}
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
              href="/guides"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              All Guides
            </Link>
            
            <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-2">
              {guide.title}
            </h1>
            <p className="text-xl text-white/80">{guide.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg text-ink-600 mb-12"
          >
            {guide.description}
          </motion.p>

          {guide.places.length > 0 ? (
            <div className="space-y-8">
              {guide.places.map((place, index) => (
                <motion.article
                  key={place.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 p-4 bg-white rounded-xl border border-cream-200"
                >
                  <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden bg-ink-100">
                    <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-ink-500">{index + 1}.</span>
                      <h3 className="font-serif text-xl font-bold text-ink-900">{place.name}</h3>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-ink-500 mb-2">
                      <span className="flex items-center gap-1">
                        <MapPinIcon className="w-4 h-4" />
                        {place.neighborhood}
                      </span>
                      <span className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4 text-amber-400" />
                        {place.rating}
                      </span>
                    </div>
                    <p className="text-ink-600">{place.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-ink-500">This guide is coming soon. Check back later!</p>
              <Link href="/guides" className="mt-4 inline-flex items-center gap-2 text-terracotta-600 hover:text-terracotta-700">
                <ArrowLeftIcon className="w-4 h-4" />
                Back to all guides
              </Link>
            </div>
          )}
        </div>
      </section>

      <QuickNav />
      <Footer />
    </main>
  );
}
