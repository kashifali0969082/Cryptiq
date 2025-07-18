import { useState } from "react";
import { Bot, Shield, Send, X, Loader2 } from "lucide-react";

const AIAssistantCard = () => {
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const callAI = async (userMessage: any) => {
    try {
      setIsLoading(true);

    
      const prompt = `You are CryptiQ AI, an expert blockchain assistant designed to help users with smart contracts, wallets, tokens, DeFi protocols, and blockchain development. 

Guidelines:
1. Only respond to blockchain, smart contract, DeFi, or dApp-related questions. If the question is unrelated (e.g., politics, entertainment), respond with: "I’m only trained for blockchain-related topics."
2. Do not give real-time coin/token prices or predictions.
3. Always reply in a concise, developer-friendly tone—use bullet points or code examples if needed.
4. Avoid using markdown syntax like asterisks, hashes, or special symbols for formatting—return plain text only.
5. You are a powerful *text-generation assistant*, not an oracle or financial advisor.
6. You are not allowed to speculate or promote specific coins or platforms.
7. Focus on helping with development, concepts, contracts, tools, or integration.

Here is my question: ${userMessage}`;

      const response = await fetch(
        "https://api.deepseek.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer sk-04df5bb7258c4502bb68535d170bd969",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "deepseek-chat",
            messages: [
              {
                role: "user",
                content: prompt,
              },
            ],
          }),
        }
      );

      const data = await response.json();

      if (data.choices && data.choices[0] && data.choices[0].message) {
        return data.choices[0].message.content;
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("AI API Error:", error);
      return "Sorry, I'm having trouble connecting right now. Please try again later.";
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (message.trim() && !isLoading) {
      const userMessage = message.trim();

      // Add user message to chat history immediately
      setChatHistory((prev) => [...prev, userMessage]);
      setShowPopup(true);
      setMessage("");

      // Get AI response
      const aiResponse = await callAI(userMessage);

      // Add AI response to chat history (maintaining original format)
      setChatHistory((prev) => [...prev, aiResponse]);
    }
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `,
        }}
      />

      {/* Main Card */}
      <div className="bg-gray-900/60 rounded-3xl px-4 py-2 border border-gray-800/40">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Bot className="w-5 h-5 text-purple-400" />
            <span className="text-white font-medium">AI Assistant</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm">Online</span>
          </div>
        </div>

        {/* Prompt */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-6">
            <Shield className="w-4 h-4 text-gray-400" />
            <span className="text-white text-sm font-medium">
              AI is at your Assistance
            </span>
          </div>
        </div>

        {/* Only show input here if popup is NOT open */}
        {!showPopup && (
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask about your portfolio or transactions..."
                className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-gray-800/70 transition-all"
                disabled={isLoading}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <span className="text-gray-500 text-xs">⌘K</span>
              </div>
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!message.trim() || isLoading}
              className="p-3 bg-purple-600 rounded-xl hover:bg-purple-700 disabled:bg-gray-700 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 text-white animate-spin" />
              ) : (
                <Send className="w-4 h-4 text-white" />
              )}
            </button>
          </div>
        )}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-md max-h-[80vh] shadow-2xl relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setShowPopup(false)}
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-white font-semibold text-lg mb-4">
              AI Assistant Response
            </h2>

            {/* Chat History */}
            <div
              className="space-y-3 max-h-64 overflow-y-auto mb-4 scrollbar-hide"
              style={{
                scrollbarWidth: "none" /* Firefox */,
                msOverflowStyle: "none" /* IE and Edge */,
              }}
            >
              {chatHistory.map((msg, idx) => (
                <div key={idx} className="space-y-1">
                  {idx % 2 === 0 ? (
                    <div className="bg-purple-600/30 text-white px-4 py-2 rounded-xl w-fit max-w-[80%]">
                      You: {msg}
                    </div>
                  ) : (
                    <div className="bg-gray-700/50 text-gray-300 px-4 py-2 rounded-xl w-fit max-w-[80%]">
                      AI: {msg}
                    </div>
                  )}
                </div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="bg-gray-700/50 text-gray-300 px-4 py-2 rounded-xl w-fit max-w-[80%]">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">AI is thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input in Popup */}
            <div className="flex items-center space-x-2 pt-2 border-t border-gray-800/40">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Continue the conversation..."
                  className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-gray-800/70 transition-all"
                  disabled={isLoading}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!message.trim() || isLoading}
                className="p-3 bg-purple-600 rounded-xl hover:bg-purple-700 disabled:bg-gray-700 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 text-white animate-spin" />
                ) : (
                  <Send className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistantCard;
