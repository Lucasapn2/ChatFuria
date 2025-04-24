// chat.js - Função serverless na Vercel
import { GoogleGenAI } from '@google/genai';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ response: 'Mensagem inválida.' });
    }

    // Instanciando a API do Google GenAI
    const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

    try {
      const result = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: [
          {
            role: 'user',
            parts: [{ text: `Usuário: ${message}` }]
          }
        ]
      });

      const responseText = result?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sem resposta gerada.';
      return res.status(200).json({ response: responseText });
    } catch (error) {
      console.error('Erro ao processar a mensagem:', error);
      return res.status(500).json({ response: 'Ocorreu um erro ao processar sua mensagem.' });
    }
  } else {
    return res.status(405).json({ response: 'Método não permitido.' });
  }
}
