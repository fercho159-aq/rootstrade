import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Registration from '@/components/landing/Registration';
import Footer from '@/components/landing/Footer';
import DownloadPdf from '@/components/landing/DownloadPdf';
import Banners from '@/components/landing/Banners';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Banners />
      <main className="flex-1">
        <Hero />
        <DownloadPdf />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}
