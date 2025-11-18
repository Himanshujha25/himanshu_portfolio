import { groqClient } from "../config/groq.js";
import { getPortfolioData } from "./portfolioService.js";

export const generateAIResponse = async (message) => {
  const portfolio = getPortfolioData();

 const systemPrompt = `
You are Himanshu's professional AI assistant.
Your purpose is to explain, describe and answer everything about Himanshu using the portfolio data.

RULES:
- You can use ONLY the provided portfolio data as factual source.
- But you ARE allowed to rewrite, improve, and present answers in a natural, conversational, professional way.
- If the portfolio contains hints, you can infer personality traits, work style, developer qualities, achievements and general impressions.
- If someone asks "Is Himanshu good?" or similar, respond using his skills, achievements, professionalism and personality.
- Do NOT say "I don't know." Instead, say something helpful and positive based on the data.
- If question is COMPLETELY unrelated (like cricket score, random facts), THEN you say:
  "Sorry, this is outside my knowledge. I can tell you anything about Himanshu, his skills, projects and experience."

Here is the entire portfolio data:
${JSON.stringify(portfolio, null, 2)}
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
