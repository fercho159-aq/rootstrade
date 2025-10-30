'use server';

import { Resend } from 'resend';
import { z } from 'zod';

// You can't use the formSchema directly from actions.ts because of the 'use server' directive.
// It's better to redefine the schema for the data you expect here.
const registrationDataSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  secondLastName: z.string().optional(),
  email: z.string().email(),
  phone: z.string(),
  company: z.string(),
  state: z.string(),
});

type RegistrationData = z.infer<typeof registrationDataSchema>;

/*
* IMPORTANT: To complete this implementation, you need to:
* 1. Sign up for Resend (https://resend.com) and get your API key.
* 2. Add your API key as an environment variable named RESEND_API_KEY.
*    In Vercel, you'll add this in your project's Environment Variables settings.
* 3. Verify your domain with Resend to be able to send emails from your own domain.
*    You will need to add some DNS records provided by Resend.
* 4. Replace 'from: 'onboarding@resend.dev'' with your verified domain email, e.g., 'from: 'notificaciones@yourdomain.com''
*/
const resend = new Resend('re_bu7CND5Y_CEUNmoQt5ZYNV18C5ZbN7wFa');

export async function sendRegistrationEmail(data: RegistrationData) {
  const validatedData = registrationDataSchema.parse(data);

  const { firstName, lastName, secondLastName, email, phone, company, state } = validatedData;
  const adminEmailList = ['comunicacion@roots.trade', 'fernandotrejo159@gmail.com'];
  
  console.log('--- SIMULATING EMAIL ---');
  console.log('To:', adminEmailList.join(', '));
  console.log('Subject: Nuevo Registro para el Evento');
  console.log('Body:', `
    Se ha registrado un nuevo participante:
    Nombre: ${firstName} ${lastName} ${secondLastName || ''}
    Email: ${email}
    Teléfono: ${phone}
    Empresa: ${company}
    Estado: ${state}
  `);
  console.log('------------------------');


  // When you have your API key, uncomment the following block to send real emails.
  /*
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified domain email
      to: adminEmailList,
      subject: 'Nuevo Registro para el Evento ROOTS',
      html: `
        <h1>Nuevo Registro para el Evento</h1>
        <p>Se ha registrado un nuevo participante:</p>
        <ul>
          <li><strong>Nombre:</strong> ${firstName} ${lastName} ${secondLastName || ''}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Teléfono:</strong> ${phone}</li>
          <li><strong>Empresa:</strong> ${company}</li>
          <li><strong>Estado:</strong> ${state}</li>
        </ul>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      throw new Error('Failed to send notification email.');
    }

    console.log('Email sent successfully:', data);
    return data;
  } catch (exception) {
    console.error('Exception sending email:', exception);
    throw new Error('An unexpected error occurred while sending the email.');
  }
  */

  // This Promise simulates the network request for now.
  return Promise.resolve();
}
