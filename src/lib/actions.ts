'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { sendRegistrationEmail } from './email';

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
  
  try {
    // This function now attempts to send the email.
    await sendRegistrationEmail(validatedFields.data);
  } catch (error) {
    console.error('Email sending error:', error);
    // You could return a specific error message to the user if the email fails.
    return {
        message: 'Hubo un problema al enviar la notificación por correo. Por favor, inténtalo más tarde.',
        errors: {},
    };
  }


  // Mock setting up email reminders.
  console.log(`Recordatorios por correo electrónico programados para ${validatedFields.data.email}: 7 días y 24 horas antes del evento.`);

  redirect('/thank-you');
}
