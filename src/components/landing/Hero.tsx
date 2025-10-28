import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import AddToCalendar from "@/components/shared/AddToCalendar";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                RULES OF ORIGIN TRADE SOLUTIONS
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Únete a nosotros en un evento exclusivo para descubrir estrategias innovadoras, conectar con líderes de la industria y transformar tu negocio.
              </p>
              <div className="space-y-3">
                <p className="text-primary-foreground font-semibold">
                  Fecha: 25 de Diciembre, 2024 | Hora: 10:00 AM | Lugar: Online
                </p>
                <AddToCalendar variant="link" />
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <a href="#register">
                  Asegura tu lugar
                  <MoveRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
             {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={650}
                  height={366}
                  data-ai-hint={heroImage.imageHint}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
