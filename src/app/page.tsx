import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Benefits from '@/components/landing/Benefits';
import Registration from '@/components/landing/Registration';
import Footer from '@/components/landing/Footer';
import DownloadPdf from '@/components/landing/DownloadPdf';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <DownloadPdf />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}
