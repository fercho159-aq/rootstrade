import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Confirmation() {
  return (
    <Card className="max-w-2xl mx-auto bg-background">
      <CardHeader>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <h1 className="text-3xl font-bold font-headline text-primary">¡Gracias por registrarte!</h1>
        <p className="text-muted-foreground">
          Hemos recibido tu información. Recibirás un correo electrónico de confirmación en breve con todos los detalles del evento.
        </p>
      </CardContent>
    </Card>
  );
}
