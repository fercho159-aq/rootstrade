import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Registration from '@/components/landing/Registration';
import Footer from '@/components/landing/Footer';
import Banners from '@/components/landing/Banners';
import MoreInfo from '@/components/landing/MoreInfo';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Banners />
        <MoreInfo />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}
