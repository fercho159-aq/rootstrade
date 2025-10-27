'use client';

import { useActionState, useState } from 'react';
import { suggestTitles, AITitleState } from '@/lib/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, Lightbulb, LoaderCircle } from 'lucide-react';

const initialState: AITitleState = {
  titles: [],
  message: '',
};

export default function TitleSuggester() {
  const [state, formAction, isPending] = useActionState(suggestTitles, initialState);
  const [description, setDescription] = useState('Un evento exclusivo para descubrir estrategias innovadoras, conectar con líderes de la industria y transformar el futuro del comercio.');

  return (
    <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm border-dashed">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="text-accent" />
          <span>Generador de Títulos (IA)</span>
        </CardTitle>
        <CardDescription>
          Usa IA para generar títulos de alto impacto para la landing page.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent>
          <Textarea
            name="eventDescription"
            placeholder="Describe tu evento aquí..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            required
            aria-label="Event Description for AI Title Generation"
          />
          {state.error && (
            <p className="text-sm font-medium text-destructive mt-2">{state.error}</p>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? (
              <>
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                Generando...
              </>
            ) : (
              'Sugerir Títulos'
            )}
          </Button>
        </CardFooter>
      </form>

      {state.titles.length > 0 && (
        <div className="p-6 pt-0">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Sugerencias:</AlertTitle>
            <AlertDescription>
              <ul className="mt-2 list-disc list-inside space-y-1">
                {state.titles.map((title, index) => (
                  <li key={index}>{title}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </Card>
  );
}
