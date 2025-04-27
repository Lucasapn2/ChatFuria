import { GoogleGenAI } from '@google/genai';
import contexto from './contexto.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const message = req.body.message;

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: [
          { role: 'user', parts: [{ text: contexto }] },
          { role: 'user', parts: [{ text: message }] }
        ]
      });

      const responseText = result?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sem resposta gerada.';
      res.status(200).json({ response: responseText });
    } catch (error) {
      console.error('Erro ao chamar o Google GenAI:', error);
      res.status(500).json({ response: 'Erro ao processar a requisição.' });
    }
  } else {
    res.status(405).json({ response: 'Método não permitido' });
  }
}
