import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const agendaItems = [
  {
    time: "18:30",
    title: "REGISTRO Y RECEPCIÓN DE INVITADOS",
  },
  {
    time: "19:00",
    title: "PALABRAS DE BIENVENIDA",
  },
  {
    time: "19:05",
    title: "PRESENTACIÓN DE ROOTS",
    description:
      "Presentación de la plataforma ROOTS, una solución tecnológica desarrollada para optimizar la gestión y certificación de reglas de origen en cadenas de suministro internacionales.",
  },
  {
    time: "19:45",
    title: "PALABRAS DE INVITADO ESPECIAL",
  },
  {
    time: "20:00",
    title: "PALABRAS DE CIERRE",
  },
];

export default function Agenda() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              Programa del Evento
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Una tarde de aprendizaje y networking.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl gap-8 mt-12">
          {agendaItems.map((item, index) => (
            <div key={index} className="grid grid-cols-[80px_1fr] gap-4 items-start">
              <div className="text-right">
                <p className="font-bold text-lg text-accent">{item.time}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                {item.description && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
