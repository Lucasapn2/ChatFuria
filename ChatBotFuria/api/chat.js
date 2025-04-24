import { GoogleGenAI } from '@google/genai';
import contextPrompt from './context.js';  // Importando o contexto

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const message = req.body.message;

    // Processamento do GenAI com o contexto
    const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });
    const result = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [
        {
          role: 'system',  // Definindo o papel do sistema para passar o contexto
          parts: [
            {
              text: contextPrompt  // Passando o contexto para o modelo
            }
          ]
        },
        {
          role: 'user',  // Agora, o usuário pode interagir normalmente
          parts: [
            {
              text: message  // Mensagem do usuário
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
