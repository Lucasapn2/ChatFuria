import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import contextPrompt from './contexto.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Middleware para tratar arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para chat com validação
app.post('/chat', async (req, res) => {
  const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

  // Validação da mensagem
  if (!req.body.message || typeof req.body.message !== 'string') {
    return res.status(400).json({ response: 'Mensagem inválida.' });
  }

  // Valida se a chave da API está configurada
  if (!process.env.GOOGLE_API_KEY) {
    return res.status(500).json({ response: 'Chave da API não configurada.' });
  }

  try {
    // Gerando resposta da IA
    const result = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `${contextPrompt}\n\nUsuário: ${req.body.message}`
            }
          ]
        }
      ]
    });

    // Verificando a resposta
    const responseText = result?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sem resposta gerada.';
    res.json({ response: responseText });

  } catch (error) {
    console.error('Erro ao processar a mensagem:', error);
    res.status(500).json({ response: 'Ocorreu um erro ao processar sua mensagem.' });
  }
});

// Inicializando o servidor
app.listen(port, () => {
  console.log(`🔥 Servidor FURIA rodando em http://localhost:${port}`);
});
