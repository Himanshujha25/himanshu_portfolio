import React, { useState } from "react";
import nlp from "compromise"; // Import NLP library
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today? Ask anything!" },
  ]);

  // Predefined Intents
  const intents = [
    {
      keywords: ["resume", "cv", "download"],
      response: "You can download my resume from navbar section. Just click on resume button.",
    },
    {
      keywords: ["about", "who are you", "your name"],
      response:
        "I am a smart AI Chatbot built for answering your questions! Want to know more? Read my FAQs section!",
    },
    {
      keywords: ["faq", "questions", "help"],
      response: "Check out the FAQ section for common questions: [FAQs](#faq)",
    },
    {keywords: ["himanshu", "who is himanshu", "creator of this chatbot"],
    response: "Himanshu jha is a web devloper and creator of this chatbot. You can connect with him on [LinkedIn] which is given in contact section.because linkdin is the best platform to connect with professionals.or you can also connect with him on [GitHub] which is also given in contact section. "}
  ];

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = input.toLowerCase();
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");

    // NLP Processing using Compromise
    const doc = nlp(userMessage);
    const words = doc.terms().out("array"); // Extract words

    // Match Intent
    let matchedIntent = intents.find((intent) =>
      intent.keywords.some((word) => words.includes(word))
    );

    setTimeout(() => {
      if (matchedIntent) {
        setMessages((prev) => [...prev, { from: "bot", text: matchedIntent.response }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: "Sorry, I didn’t understand that. Try rephrasing!" },
        ]);
      }
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className="w-80 h-[500px] bg-[#1D1836] border border-gray-600 rounded-xl shadow-lg flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black p-3 flex justify-between items-center rounded-t-xl">
            <span className="font-semibold">ChatBot</span>
            <FaTimes className="cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-white">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[70%] ${
                  msg.from === "user" ? "bg-[#FFD700] text-black self-end" : "bg-gray-700"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 flex items-center border-t border-gray-600">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 rounded-lg bg-gray-800 text-white outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <FaPaperPlane className="ml-3 text-yellow-400 cursor-pointer" size={20} onClick={handleSend} />
          </div>
        </div>
      ) : (
        <button className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black p-3 rounded-full shadow-lg hover:scale-105 transition-transform" onClick={() => setIsOpen(true)}>
          <FaRobot size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
