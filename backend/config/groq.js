import Groq from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();

export const groqClient = new Groq({
  apiKey: process.env.GROQ_KEY
});
