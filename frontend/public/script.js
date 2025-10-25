<script>
document.getElementById('chat-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const userInput = document.getElementById('user-input').value.trim();
  if (!userInput) return;

  appendMessage('user', userInput);
  document.getElementById('user-input').value = '';

  const botResponse = await getAIResponse(userInput);
  appendMessage('bot', botResponse);
});

async function getAIResponse(prompt) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY_HERE"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // or "gpt-4o" for a full GPT-4 model
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await response.json();
    const message = data.choices?.[0]?.message?.content || "Sorry, I didn’t get that.";
    return message;
  } catch (error) {
    console.error("Error calling OpenAI:", error);
    return "Oops! Something went wrong connecting to the AI.";
  }
}

function appendMessage(sender, message) {
  const chatBox = document.getElementById('chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', `${sender}-message`);
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
</script>
