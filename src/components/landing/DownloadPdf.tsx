
export default function DownloadPdf() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              Conoce Más Detalles
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Aquí puedes ver el folleto completo del evento con información detallada sobre los ponentes, temas y oportunidades.
            </p>
          </div>
          <div className="w-full max-w-4xl h-[70vh] rounded-lg overflow-hidden shadow-lg border">
            <iframe
              src="/folleto-evento.pdf"
              className="w-full h-full"
              title="Folleto del Evento"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
