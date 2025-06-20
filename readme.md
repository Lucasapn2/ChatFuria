# FuriaBot - Chat para Torcedores da FURIA

---

## Sobre o Projeto

O **FuriaBot** é um chatbot interativo criado especialmente para os fãs da **FURIA Esports**!  
Com uma linguagem jovem, enérgica e cheia de emoção, o bot conversa com os usuários como um verdadeiro torcedor da Pantera.

Esse projeto foi desenvolvido para o **Challenge #1 - Experiência Conversacional** da FURIA, utilizando a IA Generativa **Google Gemini 2.0 Flash** para entregar respostas empolgantes, criativas e envolventes.

---

## Funcionalidades

- Chat em tempo real com animação de digitação.
- Respostas expressivas no estilo da torcida da FURIA.
- Suporte a português, com mudança dinâmica de idioma (se solicitado).
- Interface personalizada com tema escuro.
- Integração com a API **Google Gemini 2.0 Flash**.

---

## Tecnologias Utilizadas

- **Frontend**:

  - ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  - ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  - ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  - [![Vercel](https://img.shields.io/badge/Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercelcom/)
  - ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

- **Backend**:

  - ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
  - [![NPM Package @google/genai](https://img.shields.io/badge/@google/genai-FC5D5D?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/@google/genai)
  - [![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
---

## Como Rodar o Projeto

1. **Clone o repositório:**

```bash
git clone git clone https://github.com/Lucasapn2/ChatFuria.git
```

2. **Acesse a pasta do projeto:**

```bash
cd ChatFuria
```

3. **Instale as dependências:**

```bash
npm install
```

4. **Configure a variável de ambiente:**

Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API KEY do Google:

```
GOOGLE_API_KEY=SUA_CHAVE_DE_API
```
#  Como obter sua Google API Key

- Acesse a [documentação da Gemini API](https://ai.google.dev/gemini-api/docs?hl=pt-br).
- Crie um novo projeto (ou selecione um projeto existente) no Google Cloud Console.
- Ative a API necessária, como **Generative Language API** (ou a API que seu projeto utilizar).
- Navegue até o menu **APIs e Serviços** > **Credenciais**.
- Clique em **Criar credencial** > **Chave da API**.
- Copie a chave gerada.
- Cole a chave no seu arquivo `.env` 

---

5. **Inicie o servidor:**

```bash
npm run dev
```

6. **Abra no navegador:**

```
http://localhost:3000
```

---

## Demonstração

### Versão Web
<img src="/ChatBotFuria/public/assets/docs-images/docs-1.png" width="600"/>

### Versão Mobile
<img src="/ChatBotFuria/public/assets/docs-images/docs-2.png" width="300"/>



---

## Contexto de Personalidade da IA

O FuriaBot foi configurado para seguir o seguinte estilo de resposta:

- Sempre falar em **português** (exceto quando solicitado outro idioma).
- Comunicação com **emoção**, **gírias leves** e **emojis**.
- Linguagem de **torcedor** apaixonado.
- Proibido usar formatação como Markdown ou asteriscos.

Exemplo de resposta típica:

> "E aí, lenda! Bora trocar ideia? Aqui é só energia de Pantera! "

---

## Autor

Desenvolvido por **Lucas Ferreira**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lucas-ferreira-me/) [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Lucasapn2)
