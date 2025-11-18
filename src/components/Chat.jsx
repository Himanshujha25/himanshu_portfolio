import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hello! I am Himanshu’s personal AI assistant. I’m trained to provide information about Himanshu — his skills, projects, experience, and portfolio details. How can I help you today?",
    },
  ]);
  const [typing, setTyping] = useState(false);

  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typing]);

  // ----------------------------------
  // BACKEND CALL FUNCTION
  // ----------------------------------
  const sendToBackend = async (userMessage) => {
    try {
      const res = await fetch("https://himanshu-portfolio-6bd7.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      return data.reply;
    } catch (error) {
      return "Backend is not responding right now. Please try again later!";
    }
  };

  // ----------------------------------
  // SEND MESSAGE HANDLER
  // ----------------------------------
  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = input;
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");

    // Show typing animation
    setTyping(true);

    // Backend reply
    const backendReply = await sendToBackend(userMessage);

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: backendReply }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className="w-80 h-[520px] bg-[#1D1836] border border-gray-600 rounded-2xl shadow-2xl flex flex-col animate-fadeIn">
          
          {/* HEADER */}
          <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black p-4 flex justify-between items-center rounded-t-2xl shadow-md">
            <span className="font-semibold text-lg">AI Chat Assistant</span>
            <FaTimes className="cursor-pointer hover:scale-110 transition" onClick={() => setIsOpen(false)} />
          </div>

          {/* CHAT MESSAGES */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-white scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl max-w-[85%] break-words whitespace-pre-wrap leading-relaxed shadow ${
                  msg.from === "user"
                    ? "bg-[#FFD700] text-black self-end ml-auto"
                    : "bg-gray-700 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* Typing animation */}
            {typing && (
              <div className="bg-gray-700 p-3 rounded-xl inline-block text-white text-sm">
                <span className="animate-pulse">Typing...</span>
              </div>
            )}

            <div ref={chatEndRef}></div>
          </div>

          {/* INPUT FIELD */}
          <div className="p-3 flex items-center border-t border-gray-600 bg-[#16122a] rounded-b-2xl">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 rounded-lg bg-gray-800 text-white outline-none border border-gray-700 focus:border-[#FFD700] transition"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <FaPaperPlane
              className="ml-3 text-yellow-400 cursor-pointer hover:scale-110 transition"
              size={22}
              onClick={handleSend}
            />
          </div>

        </div>
      ) : (
        <button
          className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black p-4 rounded-full shadow-xl hover:scale-110 transition-transform"
          onClick={() => setIsOpen(true)}
        >
          <FaRobot size={26} />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
