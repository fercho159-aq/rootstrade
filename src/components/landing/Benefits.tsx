import { Briefcase, Lightbulb, Users } from "lucide-react";
import AddToCalendar from "@/components/shared/AddToCalendar";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Lightbulb className="h-10 w-10 text-accent" />,
      title: "Estrategias de Vanguardia",
      description: "Aprende de los expertos sobre las últimas tendencias y tecnologías que están moldeando el futuro del comercio.",
    },
    {
      icon: <Users className="h-10 w-10 text-accent" />,
      title: "Networking de Alto Nivel",
      description: "Conecta con una comunidad de profesionales, innovadores y líderes de opinión en tu sector.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-accent" />,
      title: "Oportunidades de Crecimiento",
      description: "Descubre herramientas y tácticas prácticas para impulsar el crecimiento y la eficiencia de tu negocio.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              ¿Por Qué Asistir?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Este no es solo otro evento. Es una inversión en tu futuro profesional y el de tu empresa.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="grid gap-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                {benefit.icon}
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-primary">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mt-12">
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#register">
                  Asegura tu lugar
                  <MoveRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
               <AddToCalendar variant="secondary" />
            </div>
        </div>
      </div>
    </section>
  );
}
