'use server';

import { Resend } from 'resend';
import { z } from 'zod';

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

const resend = new Resend('re_bu7CND5Y_CEUNmoQt5ZYNV18C5ZbN7wFa');
const FROM_EMAIL = 'registro@rulesoforigin.roots.trade';

export async function sendRegistrationEmail(data: RegistrationData) {
  const validatedData = registrationDataSchema.parse(data);

  const { firstName, lastName, secondLastName, email, phone, company, state } = validatedData;
  const adminEmailList = ['comunicacion@roots.trade', 'fernandotrejo159@gmail.com'];
  
  try {
    // Send notification email to admins
    await resend.emails.send({
      from: FROM_EMAIL,
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

    // Send confirmation email to the user
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: '¡Gracias por registrarte al evento de ROOTS!',
      html: `
        <h1>¡Confirmación de Registro!</h1>
        <p>Hola ${firstName},</p>
        <p>Gracias por registrarte a nuestro evento "RULES OF ORIGIN TRADE SOLUTIONS".</p>
        <p>Hemos recibido tu información y tu lugar está asegurado. Recibirás recordatorios a medida que se acerque la fecha del evento.</p>
        <p><strong>Fecha:</strong> 25 de Diciembre, 2024</p>
        <p><strong>Hora:</strong> 10:00 AM (Hora de CDMX)</p>
        <p><strong>Lugar:</strong> Online</p>
        <p>¡Esperamos verte pronto!</p>
        <br>
        <p>Saludos,</p>
        <p>El equipo de RULES OF ORIGIN TRADE SOLUTIONS</p>
      `,
    });

  } catch (exception) {
    console.error('Exception sending email:', exception);
    // Even if emails fail, for now we will let the user proceed.
    // In a real-world scenario, you might want to handle this more gracefully.
    // For this implementation, we throw an error to make it visible during development.
    throw new Error('An unexpected error occurred while sending the email.');
  }

  return Promise.resolve();
}
