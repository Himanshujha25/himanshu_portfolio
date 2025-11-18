import { generateAIResponse } from "../service/aiService.js";

export const chat = async (req, res) => {
  try {
    const { message } = req.body;
    const reply = await generateAIResponse(message);
    res.json({ reply });
  } catch (error) {
    console.error("AI ERROR:", error.response?.data || error.message);  // ADD THIS
    res.status(500).json({ error: "AI error occurred" });
  }
};
