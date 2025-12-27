import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a creative brand concept using Gemini 3 Flash.
 */
export const generateCreativeConcept = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a short, poetic, and premium creative brand concept for the following topic: "${topic}". 
      
      Tone: Calm, sophisticated, timeless, minimal. 
      Format: 
      - A Title
      - A Tagline
      - A short paragraph describing the aesthetic (visuals, textures, mood).
      - Suggested Color Palette (3 colors).
      
      Keep it under 150 words. Do not use markdown bolding too aggressively.`,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "Could not generate concept.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The creative muse is silent at the moment. Please try again later.";
  }
};

/**
 * Generates a technical CLI-style inspection report using gemini-2.5-flash-lite-latest.
 * Used for low-latency terminal views.
 */
export const generateTerminalOutput = async (projectName: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-flash-lite-latest',
      contents: `Perform a technical system inspection on the project: "${projectName}".
      Return the response as a raw CLI output. 
      Include sections like: [DOCKER_IMAGE_SCAN], [VULNERABILITY_REPORT], [DEPENDENCY_GRAPH], and [DEPLOYMENT_VECTORS].
      Use technical jargon like "SHA256 checksum", "K8s pod", "Zero-day mitigation", "TLS 1.3".
      Format: Plain text, terminal-style (e.g. usage of [OK], [WARN], [CRITICAL]).
      Keep it compact and fast-paced. No markdown formatting, just plain text suitable for a monospaced terminal.`,
      config: {
        temperature: 0.9,
      }
    });

    return response.text || "> UNKNOWN_ERROR: FAILED_TO_FETCH_RESOURCES";
  } catch (error) {
    console.error("Terminal API Error:", error);
    return "> FATAL_ERROR: CONNECTION_REFUSED_BY_HOST";
  }
};