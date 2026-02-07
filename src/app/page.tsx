import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Stats from '@/components/Stats';
import Featured from '@/components/Featured';
import Neighborhoods from '@/components/Neighborhoods';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <Stats />
      <Featured />
      <Neighborhoods />
      <Newsletter />
      <Footer />
    </main>
  );
}
