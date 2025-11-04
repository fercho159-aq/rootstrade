import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MoreInfo() {
  return (
    <section className="bg-secondary/20 py-12 md:py-16">
      <div className="container text-center space-y-4">
        <h2 className="text-3xl font-bold font-headline mb-4 text-primary">Conoce Más Detalles</h2>
        <Button asChild size="lg">
          <Link href="https://roots.trade/" target="_blank" rel="noopener noreferrer">
            Visita Nuestro Sitio Web
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <p className="text-muted-foreground pt-4">
            Escríbenos a <a href="mailto:comunicacion@roots.trade" className="text-primary underline hover:text-primary/80">comunicacion@roots.trade</a>
        </p>
      </div>
    </section>
  );
}
