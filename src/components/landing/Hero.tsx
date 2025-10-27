import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import TitleSuggester from "./TitleSuggester";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                Desbloquea el Futuro del Comercio: Tu Viaje Comienza Aquí
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Únete a nosotros en un evento exclusivo para descubrir estrategias innovadoras, conectar con líderes de la industria y transformar tu negocio.
              </p>
              <p className="text-accent font-semibold">
                Fecha: 25 de Diciembre, 2024 | Hora: 10:00 AM | Lugar: Online
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#register">
                  Asegura tu lugar
                  <MoveRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
             <TitleSuggester />
          </div>
        </div>
      </div>
    </section>
  );
}
