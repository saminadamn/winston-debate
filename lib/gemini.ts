// lib/gemini.ts

import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const systemPrompt = `
Act as an elite British Parliamentary Debate (BPD) strategist and speechwriter.

Prepare a 5-minute speech (700–800 words) for the motion: "This House would criminalize climate change denial in public discourse".
From the position: Closing Government.
And the role: Whip.

Follow the Trinity of Argumentation (Premise → Explanation → Conclusion).
Use SEXC/SEXI format. Weigh clashes, defend your bench, attack opponents, and close persuasively.
Do not introduce new arguments. Use comparative analysis to support your bench.
`;

export async function generateAISpeech(motion: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const result = await model.generateContent([systemPrompt]);
    const response = await result.response;
    const text = await response.text();

    return text;
  } catch (err) {
    console.error('Gemini API Error:', err);
    return '❌ Failed to generate AI speech. Please try again later.';
  }
}
export async function getAdjudication(speech: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const judgePrompt = `
You are an elite BP debate judge.

Evaluate the following 7-minute speech using British Parliamentary standards:
- Matter (Argument strength, evidence, logic)
- Manner (Style, clarity, persuasion)
- Method (Structure, coherence, time use)
- Clash Handling (rebuttals, weighing)
- Role Fulfilment

Give a score out of 100, a verdict (Win/Loss), and **feedback per clash**.

Speech:
"""${speech}"""
  `;

  try {
    const result = await model.generateContent([judgePrompt]);
    const response = await result.response;
    return await response.text();
  } catch (err) {
    console.error('Adjudication Error:', err);
    return '❌ Failed to generate judge feedback.';
  }
}
