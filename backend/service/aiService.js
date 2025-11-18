import { groqClient } from "../config/groq.js";
import { getPortfolioData } from "./portfolioService.js";

export const generateAIResponse = async (message) => {
  const portfolio = getPortfolioData();

  const systemPrompt = `
You are Himanshu's personal portfolio chatbot.
Use ONLY the following portfolio data to answer:
${JSON.stringify(portfolio)}

If the user asks outside this data, say:
"Sorry, i dont know that."
`;

  const response = await groqClient.chat.completions.create({
    model: "llama-3.1-8b-instant",   // ✔ CURRENT WORKING MODEL
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: message }
    ]
  });

  return response.choices[0].message.content;
};
