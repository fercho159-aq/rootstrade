'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { generateLandingPageTitles, GenerateLandingPageTitlesOutput } from '@/ai/flows/generate-landing-page-titles';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  firstName: z.string().min(1, 'El nombre es obligatorio.'),
  lastName: z.string().min(1, 'El primer apellido es obligatorio.'),
  secondLastName: z.string().optional(),
  email: z.string().email('El correo electrónico no es válido.'),
  phone: z.string().regex(phoneRegex, 'El número de teléfono no es válido.'),
  company: z.string().min(1, 'La empresa es obligatoria.'),
  state: z.string().min(1, 'El estado es obligatorio.'),
});

export type FormState = {
  message: string;
  errors?: {
    [key: string]: string[] | undefined;
  };
};

export async function registerForEvent(prevState: FormState, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    secondLastName: formData.get('secondLastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    company: formData.get('company'),
    state: formData.get('state'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Por favor, corrige los errores en el formulario.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Mock sending an email notification to the admin.
  console.log('--- NEW REGISTRATION ---');
  console.log('Sending notification to comunicacion@roots.trade');
  console.log('Registration details:', validatedFields.data);
  console.log('------------------------');

  // Mock setting up email reminders.
  console.log(`Email reminders scheduled for ${validatedFields.data.email}: 7 days and 24 hours before the event.`);

  redirect('/thank-you');
}

export type AITitleState = {
  titles: string[];
  error?: string;
  message: string;
}

export async function suggestTitles(prevState: AITitleState, formData: FormData): Promise<AITitleState> {
  const eventDescription = formData.get('eventDescription') as string;

  if (!eventDescription || eventDescription.trim().length < 10) {
    return {
      ...prevState,
      titles: [],
      error: 'La descripción del evento debe tener al menos 10 caracteres.',
      message: 'Error de validación',
    };
  }

  try {
    const result: GenerateLandingPageTitlesOutput = await generateLandingPageTitles({ eventDescription });
    return {
      titles: result.titles,
      message: 'Sugerencias generadas con éxito.',
    };
  } catch (e) {
    console.error(e);
    return {
      ...prevState,
      titles: [],
      error: 'No se pudieron generar los títulos. Por favor, inténtalo de nuevo.',
      message: 'Error del servidor',
    };
  }
}
