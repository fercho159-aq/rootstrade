import Confirmation from '@/components/thank-you/Confirmation';
import AddToCalendar from '@/components/thank-you/AddToCalendar';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary/30">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container text-center py-12 md:py-24">
            <Confirmation />
            <AddToCalendar />
            <Button variant="outline" asChild className="mt-8">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver a la página principal
                </Link>
            </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
