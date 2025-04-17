'use server';

/**
 * @fileOverview An AI agent that analyzes inventory data and predicts when to reorder items.
 *
 * - analyzeInventoryData - A function that triggers the inventory analysis flow.
 * - AnalyzeInventoryDataInput - The input type for the analyzeInventoryData function.
 * - AnalyzeInventoryDataOutput - The return type for the analyzeInventoryData function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const AnalyzeInventoryDataInputSchema = z.object({
  inventoryData: z.string().describe('Historical inventory data in JSON format.'),
});
export type AnalyzeInventoryDataInput = z.infer<typeof AnalyzeInventoryDataInputSchema>;

const AnalyzeInventoryDataOutputSchema = z.object({
  reorderPredictions: z.string().describe('Predictions for when each item needs to be reordered, in JSON format.'),
});
export type AnalyzeInventoryDataOutput = z.infer<typeof AnalyzeInventoryDataOutputSchema>;

export async function analyzeInventoryData(input: AnalyzeInventoryDataInput): Promise<AnalyzeInventoryDataOutput> {
  return analyzeInventoryDataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeInventoryDataPrompt',
  input: {
    schema: z.object({
      inventoryData: z.string().describe('Historical inventory data in JSON format.'),
    }),
  },
  output: {
    schema: z.object({
      reorderPredictions: z.string().describe('Predictions for when each item needs to be reordered, in JSON format.'),
    }),
  },
  prompt: `You are an expert inventory analyst. Analyze the following historical inventory data and predict when each item needs to be reordered to minimize stockouts and excess inventory.  Provide the reorder predictions in JSON format.

Inventory Data: {{{inventoryData}}}
`,
});

const analyzeInventoryDataFlow = ai.defineFlow<
  typeof AnalyzeInventoryDataInputSchema,
  typeof AnalyzeInventoryDataOutputSchema
>(
  {
    name: 'analyzeInventoryDataFlow',
    inputSchema: AnalyzeInventoryDataInputSchema,
    outputSchema: AnalyzeInventoryDataOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
