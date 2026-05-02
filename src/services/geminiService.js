/**
 * geminiService.js — Modular Gemini API integration.
 * Provides a single function to get simplified explanations from Google Gemini.
 *
 * Usage:
 *   import { explainStep } from '../services/geminiService';
 *   const explanation = await explainStep(stepTitle, stepExplanation);
 */

const GEMINI_API_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

/**
 * Calls the Gemini API to get a simplified explanation of a voting step.
 *
 * @param {string} title - The step title (e.g. "Register to Vote")
 * @param {string} explanation - The existing step explanation text
 * @param {string} apiKey - The user's Gemini API key
 * @returns {Promise<string>} A simplified explanation from Gemini
 */
export async function explainStep(title, explanation, apiKey) {
  if (!apiKey) {
    throw new Error('Please enter your Gemini API key to use AI explanations.');
  }

  const prompt = `You are a friendly voting assistant. Explain the following election-related step in very simple, easy-to-understand language. Use short sentences. Avoid jargon. If helpful, use a brief analogy. Keep it under 100 words.

Step: "${title}"
Details: "${explanation}"

Give a simple, clear explanation that even a first-time voter would understand:`;

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 200,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData?.error?.message || `Gemini API error (${response.status})`
      );
    }

    const data = await response.json();
    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Sorry, I couldn\'t generate an explanation right now.';

    return text.trim();
  } catch (error) {
    if (error.message.includes('API key')) throw error;
    throw new Error(`Failed to get explanation: ${error.message}`);
  }
}
