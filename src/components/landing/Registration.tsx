import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import RegistrationForm from "./RegistrationForm";

export default function Registration() {
  return (
    <section id="register" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold font-headline">Regístrate Ahora</CardTitle>
              <CardDescription>
                Los lugares son limitados. Completa el formulario para asegurar tu participación en este evento.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RegistrationForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
