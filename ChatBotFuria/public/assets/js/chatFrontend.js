const chatBox = document.getElementById("chatBox");
let typingIndicator;

function appendMessage(content, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}-message`;
  messageDiv.innerHTML =
    sender === "bot" ? `<b>FuriaBot:</b> ${content}` : `${content}`;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function animateBotMessage(text) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";
  messageDiv.innerHTML = `<b>FuriaIA:</b> `;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;

  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      messageDiv.innerHTML += text.charAt(i);
      chatBox.scrollTop = chatBox.scrollHeight;
      i++;
    } else {
      clearInterval(interval);
    }
  }, 15);
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();

  if (!message) return;

  appendMessage(message, "user");

  typingIndicator = document.createElement("div");
  typingIndicator.className = "message bot-message typing";
  typingIndicator.innerHTML = `<b>FuriaBot:</b> Digitando...`;
  chatBox.appendChild(typingIndicator);
  chatBox.scrollTop = chatBox.scrollHeight;

  fetch(window.location.origin + "/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na resposta da API");
      }
      return response.json();
    })
    .then((data) => {
      chatBox.removeChild(typingIndicator);
      if (data.response) {
        animateBotMessage(data.response);
      } else {
        throw new Error("Resposta vazia da API.");
      }
    })
    .catch((error) => {
      console.error("Erro no fetch:", error);
      chatBox.removeChild(typingIndicator);
      appendMessage("Desculpe, algo deu errado. Tente novamente.", "bot");
    });

  input.value = "";
}

// Função para exibir sugestões de temas para a conversa
function displaySuggestions() {
  const suggestions = [
    "Informações sobre CS:GO",
    "Dúvidas sobre FURIA",
    "Falar sobre jogos em geral",
    "Falar sobre eSports",
  ];

  let suggestionText = "Que tal falar sobre um desses temas?<ul>";

  suggestions.forEach(suggestion => {
    suggestionText += `<li><button class="suggestion-button" onclick="sendSuggestion('${suggestion}')">${suggestion}</button></li>`;
  });

  suggestionText += "</ul>";
  
  appendMessage(suggestionText, "bot");
}

// Função para enviar a sugestão escolhida
function sendSuggestion(suggestion) {
  appendMessage(suggestion, "user");

  typingIndicator = document.createElement("div");
  typingIndicator.className = "message bot-message typing";
  typingIndicator.innerHTML = `<b>FuriaBot:</b> Digitando...`;
  chatBox.appendChild(typingIndicator);
  chatBox.scrollTop = chatBox.scrollHeight;

  fetch(window.location.origin + "/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: suggestion }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na resposta da API");
      }
      return response.json();
    })
    .then((data) => {
      chatBox.removeChild(typingIndicator);
      if (data.response) {
        animateBotMessage(data.response);
      } else {
        appendMessage("Desculpe, não entendi a sua sugestão.", "bot");
      }
    })
    .catch((error) => {
      console.error("Erro no fetch:", error);
      chatBox.removeChild(typingIndicator);
      appendMessage("Desculpe, algo deu errado. Tente novamente.", "bot");
    });
}


// Mostrar sugestões ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    animateBotMessage(
      "E aí, lenda! Eu sou a Pantera da FURIA. Preparado pra trocar ideia ou tirar dúvidas? Manda ver!"
    );
    displaySuggestions(); // Mostrar sugestões de temas
  }, 400);
});