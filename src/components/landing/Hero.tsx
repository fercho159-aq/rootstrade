import AddToCalendar from "@/components/shared/AddToCalendar";

export default function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center bg-background py-20 md:py-28 border-y-8 border-primary">
      <div className="relative container px-4 md:px-6 text-center">
        <div className="flex flex-col justify-center space-y-6 items-center">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                RULES OF ORIGIN TRADE SOLUTIONS
              </h1>
              <p className="max-w-[700px] text-lg md:text-xl text-foreground">
                Únete a nosotros en un evento exclusivo para descubrir estrategias innovadoras, conectar con líderes de la industria y transformar tu negocio.
              </p>
              <div className="space-y-3">
                <p className="font-semibold text-accent">
                  Fecha: 20 de Noviembre, 2025 | Hora: 18:30 | Lugar: Edificio CANAME
                </p>
                <AddToCalendar variant="link" />
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
