import { Button } from "@/components/ui/button";
import { DownloadCloud } from "lucide-react";

export default function DownloadPdf() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              Conoce Más Detalles
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descarga el folleto completo del evento para obtener información detallada sobre los ponentes, temas y oportunidades.
            </p>
          </div>
          <div className="mt-6">
            <Button asChild size="lg">
              <a href="/folleto-evento.pdf" download>
                <DownloadCloud className="mr-2 h-5 w-5" />
                Descargar Folleto (PDF)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
