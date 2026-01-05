import { GoogleGenAI } from "@google/genai";

/**
 * Edits an image using Gemini 2.5 Flash Image based on a text prompt.
 * @param imageBase64 The base64 string of the original image (raw data).
 * @param mimeType The mime type of the original image.
 * @param prompt The text instruction for editing.
 * @returns The base64 string of the generated image or null if failed.
 */
export const editImageWithGemini = async (
  imageBase64: string,
  mimeType: string,
  prompt: string
): Promise<string | null> => {
  try {
    // Initialize inside the function to prevent app-wide crash if key is missing on load
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
      console.error("API Key is missing. Please check your configuration.");
      return null;
    }

    const ai = new GoogleGenAI({ apiKey: apiKey });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: imageBase64,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
    });

    // Iterate through candidates to find the inline image data
    if (response.candidates && response.candidates.length > 0) {
      const candidate = response.candidates[0];
      if (candidate.content && candidate.content.parts) {
        for (const part of candidate.content.parts) {
          if (part.inlineData && part.inlineData.data) {
            return part.inlineData.data;
          }
        }
      }
    }

    console.warn("No image data found in Gemini response");
    return null;
  } catch (error) {
    console.error("Error editing image with Gemini:", error);
    throw error;
  }
};