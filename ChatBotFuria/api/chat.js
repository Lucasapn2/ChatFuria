import { GoogleGenAI } from "@google/genai";
import contextPrompt from "../contexto.js";

export default async function handler(req, res) {
  // Verifica se o método é POST
  if (req.method !== "POST") {
    return res.status(405).json({ response: "Método não permitido." });
  }

  // Extraindo a mensagem do corpo da requisição
  const { message } = req.body;
  if (!message || typeof message !== "string") {
    return res.status(400).json({ response: "Mensagem inválida." });
  }

  // Verifica se a chave da API está configurada
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ response: "Chave da API não configurada." });
  }

  try {
    // Instancia o cliente Google GenAI com a chave da API
    const ai = new GoogleGenAI({ apiKey });

    // Envia a solicitação para o modelo para gerar a resposta
    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: `${contextPrompt}\n\nUsuário: ${message}` }],
        },
      ],
    });

    // Verifica a resposta do modelo e captura o texto gerado
    const responseText =
      result?.candidates?.[0]?.content?.parts?.[0]?.text || "Sem resposta gerada.";

    // Retorna a resposta gerada como JSON
    return res.status(200).json({ response: responseText });
  } catch (error) {
    // Em caso de erro na comunicação com a API
    console.error("Erro ao processar a solicitação:", error);
    return res.status(500).json({ response: "Erro ao processar a mensagem." });
  }
}
