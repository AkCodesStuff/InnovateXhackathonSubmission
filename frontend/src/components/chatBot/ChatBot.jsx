import React from 'react'

const ChatBot = () => {
    const chatBox = document.querySelector('.chat-box');
const inputField = chatBox.querySelector('input[type="text"]');
const button = chatBox.querySelector('button');
const chatBoxBody = chatBox.querySelector('.chat-box-body');

button.addEventListener('click', sendMessage);
inputField.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = inputField.value;
    if (message.trim() === "") return;
    inputField.value = '';
    chatBoxBody.innerHTML += <div class="chat-box-message">${message}</div>;
    scrollToBottom();

    fetch('http://localhost:3000/message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    }).then(response => response.json())
    .then(data => {
        chatBoxBody.innerHTML += <div class="chat-box-response">${data.message}</div>;
        scrollToBottom();
    })
    .catch(error => {
        console.error("Error:", error);
        chatBoxBody.innerHTML += <div class="chat-box-response">Sorry, something went wrong.</div>;
        scrollToBottom();
    });
}

function scrollToBottom() {
    chatBoxBody.scrollTop = chatBoxBody.scrollHeight;
}
  return (
    <div class="chat-box">
    <div class="chat-box-header">Chatbot</div>
    <div class="chat-box-body">
    </div>
    <div class="chat-box-footer">
      <input type="text" placeholder="Type a message..." />
      <button>Send</button>
    </div>
  </div>

  )
}

export default ChatBot