import { useState } from "react";
import Message from "./Message";
import { sendMessage } from "../services/api";

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input) return;

    const userMsg = { sender: "user", text: input };
    setMessages([...messages, userMsg]);

    const reply = await sendMessage(input);
    setMessages((prev) => [...prev, userMsg, { sender: "bot", text: reply }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full w-full p-4 border rounded">
      <div className="flex-1 overflow-auto mb-4">
        {messages.map((msg, idx) => (
          <Message key={idx} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <div className="flex">
        <input
          className="flex-1 border rounded p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a financial question..."
        />
        <button className="ml-2 px-4 bg-blue-500 text-white rounded" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}
