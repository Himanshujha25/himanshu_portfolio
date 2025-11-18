import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane, FaSun, FaMoon } from "react-icons/fa";

// ---------------------------
// RENDER MESSAGE (CODE + LINKS)
// ---------------------------
const renderMessage = (text) => {
  // CODE BLOCK
  if (text.includes("```")) {
    const code = text.replace(/```/g, "");
    return (
      <pre className="bg-black text-green-400 p-3 rounded-lg text-sm overflow-auto">
        {code}
      </pre>
    );
  }

  // LINK DETECTION
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const parts = text.split(urlRegex);

  return (
    <span>
      {parts.map((part, i) =>
        urlRegex.test(part) ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline break-all"
          >
            {part}
          </a>
        ) : (
          part
        )
      )}
    </span>
  );
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("dark");

  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hello! I am Himanshu’s personal AI assistant. I can tell you about Himanshu's skills, projects, experience, and portfolio details. How can I help you today?",
    },
  ]);

  const [typing, setTyping] = useState(false);
  const [blink, setBlink] = useState(true);
  const [tooltip, setTooltip] = useState(true);
  const [notify, setNotify] = useState(true);

  const chatEndRef = useRef(null);

  // Scroll to bottom
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages, typing]);

  // ---------------------------
  // ONLY WELCOME VOICE
  // ---------------------------
  const speakWelcome = () => {
    const msg = new SpeechSynthesisUtterance(
      "Welcome to my portfolio. You can explore everything I have built. If you want me to stop and continue manually, click the AI icon."
    );
    msg.pitch = 1;
    msg.rate = 1;
    msg.volume = 1;
    speechSynthesis.speak(msg);
  };

  useEffect(() => {
    setTimeout(() => speakWelcome(), 600);

    setTimeout(() => setBlink(false), 10000);
    setTimeout(() => setTooltip(false), 6000);
    setTimeout(() => setNotify(false), 9000);
  }, []);

  // ---------------------------
  // BACKEND CALL
  // ---------------------------
  const sendToBackend = async (userMessage) => {
    try {
      const res = await fetch(
        "https://himanshu-portfolio-6bd7.onrender.com/api/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMessage }),
        }
      );

      const data = await res.json();
      return data.reply;
    } catch (error) {
      return "Backend is not responding right now. Please try again later!";
    }
  };

  // ---------------------------
  // SEND MESSAGE
  // ---------------------------
  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = input;
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");

    setTyping(true);

    const backendReply = await sendToBackend(userMessage);

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: backendReply }]);
      // ❌ Voice disabled for replies
    }, 600);
  };

  // ---------------------------
  // QUICK QUESTIONS
  // ---------------------------
  const quickQuestions = [
    "Show me Himanshu's projects",
    "What skills does Himanshu have?",
    "How to contact Himanshu?",
  ];

  // THEME COLORS
  const themes = {
    dark: "bg-[#1D1836] text-white border-gray-600",
    light: "bg-white text-black border-gray-300",
    gold: "bg-[#2b2410] text-yellow-300 border-yellow-600",
  };

  return (
    <div className="fixed bottom-5 right-5 z-[999]">

      {/* Tooltip */}
      {tooltip && !isOpen && (
        <div className="absolute bottom-20 right-2 bg-black text-white text-xs px-3 py-1 rounded-md animate-pulse shadow-lg">
          Need help? Click here
        </div>
      )}

      {/* Notification */}
      {notify && !isOpen && (
        <div className="absolute bottom-28 right-[-5px] bg-yellow-400 text-black text-xs px-3 py-1 rounded-md shadow-lg animate-bounce">
          Ask me anything!
        </div>
      )}

      {isOpen ? (
        <div
          className={`w-80 h-[520px] rounded-2xl shadow-2xl flex flex-col animate-fadeIn border ${themes[theme]}`}
        >
          {/* HEADER */}
          <div className="p-4 flex justify-between items-center rounded-t-2xl bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black">
            <span className="font-semibold text-lg">AI Chat Assistant</span>

            <div className="flex items-center gap-3">
              <button
                className="text-black"
                onClick={() =>
                  setTheme(
                    theme === "dark"
                      ? "light"
                      : theme === "light"
                      ? "gold"
                      : "dark"
                  )
                }
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </button>

              <FaTimes
                className="cursor-pointer hover:scale-110 transition"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>

          {/* CHAT MESSAGES */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-xl max-w-[85%] break-words whitespace-pre-wrap leading-relaxed shadow ${
                  msg.from === "user"
                    ? "bg-[#FFD700] text-black ml-auto"
                    : "bg-gray-700 text-white"
                }`}
              >
                {renderMessage(msg.text)}
              </div>
            ))}

            {typing && (
              <div className="bg-gray-700 text-white px-4 py-2 rounded-xl inline-block">
                <div className="flex space-x-1">
                  <span className="animate-pulse">●</span>
                  <span className="animate-pulse delay-150">●</span>
                  <span className="animate-pulse delay-300">●</span>
                </div>
              </div>
            )}

            <div ref={chatEndRef}></div>
          </div>

          {/* QUICK QUESTIONS */}
          <div className="p-2 flex gap-2 overflow-x-auto">
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                className="px-3 py-1 rounded-lg text-xs bg-gray-800 text-white hover:bg-gray-600"
                onClick={() => {
                  setInput(q);
                  handleSend();
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* INPUT */}
          <div className="p-3 flex items-center border-t border-gray-600 bg-[#16122a] rounded-b-2xl">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 rounded-lg bg-gray-800 text-white outline-none border border-gray-700 focus:border-[#FFD700]"
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
          className={`bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black p-4 rounded-full shadow-xl hover:scale-110 transition-transform 
          ${blink ? "animate-pulse animate-bounce" : ""}`}
          onClick={() => {
            setIsOpen(true);
            setBlink(false);
            setTooltip(false);
            speechSynthesis.cancel();
          }}
        >
          <FaRobot size={26} />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
