'use server';

/**
 * @fileOverview Generates multiple title options for an event landing page.
 *
 * - generateLandingPageTitles - A function that generates title options.
 * - GenerateLandingPageTitlesInput - The input type for the generateLandingPageTitles function.
 * - GenerateLandingPageTitlesOutput - The return type for the generateLandingPageTitles function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLandingPageTitlesInputSchema = z.object({
  eventDescription: z
    .string()
    .describe('A description of the event for which titles are needed.'),
});
export type GenerateLandingPageTitlesInput = z.infer<typeof GenerateLandingPageTitlesInputSchema>;

const GenerateLandingPageTitlesOutputSchema = z.object({
  titles: z
    .array(z.string())
    .describe('An array of impactful, benefit-oriented title options for the landing page.'),
});
export type GenerateLandingPageTitlesOutput = z.infer<typeof GenerateLandingPageTitlesOutputSchema>;

export async function generateLandingPageTitles(
  input: GenerateLandingPageTitlesInput
): Promise<GenerateLandingPageTitlesOutput> {
  return generateLandingPageTitlesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLandingPageTitlesPrompt',
  input: {schema: GenerateLandingPageTitlesInputSchema},
  output: {schema: GenerateLandingPageTitlesOutputSchema},
  prompt: `You are a marketing expert specializing in crafting high-conversion landing page titles.

  Generate 3 impactful, benefit-oriented title options for an event landing page, based on the event description provided. Each title should be concise and attention-grabbing.

  Event Description: {{{eventDescription}}}

  Format the output as a JSON array of strings.`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
    ],
  },
});

const generateLandingPageTitlesFlow = ai.defineFlow(
  {
    name: 'generateLandingPageTitlesFlow',
    inputSchema: GenerateLandingPageTitlesInputSchema,
    outputSchema: GenerateLandingPageTitlesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
