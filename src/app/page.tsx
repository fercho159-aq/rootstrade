import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Benefits from '@/components/landing/Benefits';
import Registration from '@/components/landing/Registration';
import Sponsors from '@/components/landing/Sponsors';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Sponsors />
        <Benefits />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}
