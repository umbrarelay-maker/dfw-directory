import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import ThisWeek from '@/components/ThisWeek';
import Stats from '@/components/Stats';
import Featured from '@/components/Featured';
import Neighborhoods from '@/components/Neighborhoods';
import Newsletter from '@/components/Newsletter';
import QuickNav from '@/components/QuickNav';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Categories />
      <ThisWeek />
      <Stats />
      <Featured />
      <Neighborhoods />
      <Newsletter />
      <QuickNav />
      <Footer />
    </main>
  );
}
