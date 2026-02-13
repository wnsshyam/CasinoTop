"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

interface CasinoHelpBoxProps {
  onAsk?: (question: string) => void;
}

export default function CasinoHelpBox({ onAsk }: CasinoHelpBoxProps) {
  const [input, setInput] = useState("");

  const quickQuestions = [
    "Which Swedish casinos pay out fastest?",
    "What’s the safest licensed casino in Sweden?",
    "Can I use Swish to deposit?",
  ];

  const handleAsk = (question?: string) => {
    const finalQuestion = question || input;
    if (!finalQuestion.trim()) return;

    onAsk?.(finalQuestion);
    setInput("");
  };

  return (
    <div className="w-full max-w-3xl  border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 bg-gray-50 border-b border-gray-200">
        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
          <img src="/icons/gpt.png" className="w-10 h-10 text-gray-700" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-sm">
            Get personalized casino help
          </h3>
          <p className="text-xs text-gray-500">Powered by GPT</p>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-6 space-y-4 bg-gray-50">
        {quickQuestions.map((q, index) => (
          <button
            key={index}
            onClick={() => handleAsk(q)}
            className="block text-left px-4 py-2 rounded-lg border border-red-400 text-red-600 text-sm hover:bg-red-50 transition"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Footer Input */}
      <div className="flex items-center gap-3 px-5 py-4 border-t border-gray-200 bg-white">
        <input
          type="text"
          placeholder="Ask anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button
          onClick={() => handleAsk()}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition"
        >
          Ask
        </button>
      </div>
    </div>
  );
}
