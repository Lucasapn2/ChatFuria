import { GoogleGenAI } from "@google/genai";
import contextPrompt from "../contexto.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ response: "Método não permitido." });
  }

  const { message } = req.body;
  if (!message || typeof message !== "string") {
    return res.status(400).json({ response: "Mensagem inválida." });
  }

  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ response: "Chave da API não configurada." });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: `${contextPrompt}\n\nUsuário: ${message}` }],
        },
      ],
    });

    const responseText =
      result?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sem resposta gerada.";
    res.status(200).json({ response: responseText });
  } catch (error) {
    console.error("Erro na API:", error);
    res.status(500).json({ response: "Erro ao processar a mensagem." });
  }
}
