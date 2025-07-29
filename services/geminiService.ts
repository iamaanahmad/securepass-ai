
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateMemorablePassword = async (theme: string): Promise<string> => {
    if (!process.env.API_KEY) {
         throw new Error("API key is not configured. Cannot contact AI service.");
    }

    if (!theme.trim()) {
        throw new Error("Theme cannot be empty.");
    }

    const prompt = `Create a strong, memorable, and unique password phrase based on the theme: "${theme}".
    The password must be between 4 and 6 words long.
    Separate words with hyphens.
    Use a mix of TitleCase and lowercase words.
    Include at least one number.
    The final output must ONLY be the password phrase itself, with no extra explanation, quotation marks, or text.
    
    Example for theme 'Ocean Life': Deep-Blue-Whale-7-Sings
    Example for theme 'Mountain Climbing': Icy-Peak-Summit-2-Ropes
    Example for theme 'Classic Cars': Vintage-Mustang-GT-1965
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                thinkingConfig: { thinkingBudget: 0 },
                temperature: 0.9,
                topK: 10,
                topP: 0.95,
                maxOutputTokens: 50,
            }
        });

        const text = response.text.trim().replace(/["']/g, '');
        
        if (!text || text.includes(' ') || text.length < 15 || text.split('-').length < 4) {
            console.error("Gemini response was not in the expected format:", text);
            throw new Error("AI failed to generate a valid passphrase. Please try a different theme.");
        }
        
        return text;

    } catch (error) {
        console.error("Error generating memorable password:", error);
        throw new Error("Could not connect to the AI service. Please check your connection or API key.");
    }
};
