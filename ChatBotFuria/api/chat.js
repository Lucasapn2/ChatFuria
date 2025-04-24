import { GoogleGenAI } from '@google/genai';
import contextPrompt from './contexto'; // Importando o contexto

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const message = req.body.message;

    // Processamento do GenAI
    const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });
    const result = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [
        {
          role: 'system', // Enviando o contexto como "system"
          parts: [
            {
              text: contextPrompt // O contexto é agora usado diretamente
            }
          ]
        },
        {
          role: 'user', // A mensagem do usuário
          parts: [
            {
              text: message
            }
          ]
        }
      ]
    });

    const responseText = result?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sem resposta gerada.';
    res.status(200).json({ response: responseText });
  } else {
    res.status(405).json({ response: 'Método não permitido' });
  }
}
