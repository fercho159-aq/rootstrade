import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import AddToCalendar from "@/components/shared/AddToCalendar";

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-white">
      <Image
        src="/images/sitio/headway-F2KRf_QfCqw-unsplash.jpg"
        alt="Person writing on a whiteboard"
        fill
        data-ai-hint="collaboration meeting"
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container px-4 md:px-6 text-center">
        <div className="flex flex-col justify-center space-y-6 items-center">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                RULES OF ORIGIN TRADE SOLUTIONS
              </h1>
              <p className="max-w-[700px] text-lg md:text-xl text-gray-200">
                Únete a nosotros en un evento exclusivo para descubrir estrategias innovadoras, conectar con líderes de la industria y transformar tu negocio.
              </p>
              <div className="space-y-3">
                <p className="font-semibold text-amber-300">
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
      </div>
    </section>
  );
}