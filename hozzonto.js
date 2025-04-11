const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);

userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

async function sendMessage() {
    const message = userInput.value;
    if (!message) return;

    appendMessage('user', message);
    userInput.value = '';

    // Aquí iría la llamada a tu script de Google Colab
    const response = await getBotResponse(message);
    appendMessage('bot', response);
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll
}

async function getBotResponse(message) {
    // Aquí simularíamos una respuesta del bot (reemplaza con tu lógica real)
    return `Respuesta del bot: ${message}`;
}