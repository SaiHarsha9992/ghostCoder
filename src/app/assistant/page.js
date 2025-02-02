"use client";

import { useState } from "react";
import axios from "axios";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function CodingAssistant() {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");

    const instruction =
      "Provide a code example and explanation for the following question:";

    const prompt = `${instruction} ${input}`;

    try {
      const response = await axios.post("/api/gemini", {
        messages: newMessages,
        prompt: prompt,
      });
      setMessages([
        ...newMessages,
        { role: "ghostCoder AI", content: response.data.content },
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const customStyle = {
    lineHeight: "1.5",
    fontSize: "1rem",
    borderRadius: "5px",
    borderColor: "rgba(255, 255, 255, 0.1)",
    color: "#ffffff",
    backgroundColor: "#1a2629",
    padding: "20px",
  };

  const renderMessageContent = (content) => {
    const boldPattern = /\*\*(.*?)\*\*/g;
    const parts = content.split(/(```[\s\S]*?```)/g);

    return parts.map((part, index) => {
      if (part.startsWith("```") && part.endsWith("```")) {
        const codeContent = part.slice(3, part.length - 3).trim();
        return (
          <div
            key={index}
            className="bg-[#2a3d41] p-4 rounded-md overflow-x-auto"
          >
            <SyntaxHighlighter
              language="javascript"
              style={docco}
              customStyle={customStyle}
            >
              {codeContent}
            </SyntaxHighlighter>
          </div>
        );
      }

      const formattedContent = part.replace(boldPattern, (match, p1) => {
        return `<span class="font-bold text-white">${p1}</span>`;
      });

      return (
        <p key={index} className="bg-[#1a2629] p-3 rounded-md">
          <span dangerouslySetInnerHTML={{ __html: formattedContent }} />
        </p>
      );
    });
  };

  return (
    <div className="bg-[#2a3d41] text-white min-h-screen">
      <Header />
      <div className="w-full max-w-5xl mx-auto p-4 py-8">
        <div className="w-full bg-[#1a2629] p-6 rounded-xl shadow-lg max-w-full">
          <h1 className="text-xl font-bold text-center mb-4">
            ghostCoder AI Assistant
          </h1>
          <div className="h-96 overflow-y-auto p-2 border border-gray-700 rounded-md mb-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start mb-4 space-x-4 ${
                  msg.role === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {/* User Avatar */}
                <div
                  className={`w-10 h-10 rounded-full overflow-hidden ${
                    msg.role === "user" ? "ml-2" : "mr-2"
                  }`}
                >
                  <Image
                    src={
                      msg.role === "user"
                        ? session?.user?.image || "/ghost (6) (1).png"
                        : "/ghost (6) (1).png"
                    }
                    alt={
                      msg.role === "user" ? "User Avatar" : "ghostCoder Avatar"
                    }
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div
                  className={`p-4 rounded-xl max-w-[70%] ${
                    msg.role === "user"
                      ? "bg-[#2a3d41] text-white text-right"
                      : "bg-gray-700 text-gray-200 text-left"
                  }`}
                >
                  <strong>{msg.role === "user" ? "You" : "ghostCoder"}:</strong>{" "}
                  {renderMessageContent(msg.content)}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 flex-col sm:flex-row">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-grow p-2 border border-gray-600 bg-[#1a2629] text-white focus:ring-2 focus:ring-white rounded mb-2 sm:mb-0"
              placeholder="Ask a coding question..."
              disabled={loading}
              rows={3}
            />
            <button
              onClick={handleSend}
              className="p-2 bg-white text-black rounded hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff] disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Thinking..." : "Send"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
