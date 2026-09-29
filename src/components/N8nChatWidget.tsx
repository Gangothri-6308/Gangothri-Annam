import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, Sparkles, RefreshCw, User, ExternalLink, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/products';

interface Message {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: Date;
  isError?: boolean;
}

interface N8nChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const N8N_WEBHOOK_URL = 'https://danasakthi.app.n8n.cloud/webhook/8eb56cc0-fce6-45a4-adb6-73283a020836/chat';

export const N8nChatWidget: React.FC<N8nChatWidgetProps> = ({ isOpen, onClose, onOpen }) => {
  const [messages, setMessages] = useState<Message[]>(() => {
    return [
      {
        id: 'welcome-1',
        sender: 'agent',
        text: "Hello! Welcome to KN Crafts & Co. 🌸 I'm your AI shopping and craft assistant. Ask me anything about our everlasting pipe-cleaner floral bouquets, potted sunflowers, custom gifts, flower care, or pricing!",
        timestamp: new Date(),
      },
    ];
  });

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>(() => {
    const existing = localStorage.getItem('kn_n8n_session_id');
    if (existing) return existing;
    const newId = `kn_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem('kn_n8n_session_id', newId);
    return newId;
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const starterPrompts = [
    '🌷 What bouquets do you have?',
    '✨ How do I order custom colors & initials?',
    '🌻 How do I care for pipe-cleaner flowers?',
    '📦 What are your shipping and turnaround times?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = (textToSend || input).trim();
    if (!messageText || isLoading) return;

    const userMessage: Message = {
      id: `user_${Date.now()}`,
      sender: 'user',
      text: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'sendMessage',
          chatInput: messageText,
          sessionId: sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      let replyText = '';

      if (typeof data === 'string') {
        replyText = data;
      } else if (data && typeof data === 'object') {
        if (data.output) {
          replyText = data.output;
        } else if (data.text) {
          replyText = data.text;
        } else if (data.message && data.message !== 'Error in workflow') {
          replyText = data.message;
        } else if (data.response) {
          replyText = data.response;
        } else if (data.message === 'Error in workflow') {
          replyText =
            "I'm currently connecting to my craft database! If the workflow is in test mode, you can also chat with our artisan directly on WhatsApp for instant assistance. 🌸";
        } else {
          replyText = JSON.stringify(data);
        }
      }

      if (!replyText) {
        replyText = "Thank you for reaching out! Let me know if you'd like bouquet recommendations or custom order details. 🌸";
      }

      const agentMessage: Message = {
        id: `agent_${Date.now()}`,
        sender: 'agent',
        text: replyText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, agentMessage]);
    } catch (err: any) {
      console.error('n8n Chat Error:', err);
      const errorMessage: Message = {
        id: `err_${Date.now()}`,
        sender: 'agent',
        text: "I couldn't reach the server just now. You can try asking again, or chat directly with us on WhatsApp for fast personalized service! 🌸",
        timestamp: new Date(),
        isError: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetSession = () => {
    const newId = `kn_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem('kn_n8n_session_id', newId);
    setSessionId(newId);
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'agent',
        text: "Started a fresh conversation! 🌸 How can I help you with our pipe-cleaner florals or personalized keychains today?",
        timestamp: new Date(),
      },
    ]);
  };

  // Helper to format bot text with bold and linebreaks
  const renderFormattedText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, lineIdx) => {
      // Bold parser for **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <React.Fragment key={lineIdx}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={pIdx} className="font-bold text-[#2C2420]">{part.slice(2, -2)}</strong>;
            }
            return <span key={pIdx}>{part}</span>;
          })}
          {lineIdx < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <>
      {/* Launcher Button (if closed) */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
          {/* Subtle notification pill */}
          <button
            onClick={onOpen}
            className="hidden sm:flex items-center gap-2 bg-[#FFFDF9] text-[#2C2420] text-xs font-semibold px-3.5 py-2 rounded-full border border-[#E9E1D4] shadow-md hover:shadow-lg transition-all hover:border-[#D9777F]/60 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span>Chat with AI Agent</span>
          </button>

          {/* Icon trigger */}
          <button
            onClick={onOpen}
            className="w-14 h-14 rounded-full bg-[#2C2420] hover:bg-[#433832] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer relative"
            aria-label="Open AI Craft Assistant"
            title="Chat with KN Crafts AI Agent"
          >
            <Bot className="w-7 h-7 text-[#FCE7F3]" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#D9777F] rounded-full border-2 border-white animate-pulse" />
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[580px] max-h-[90vh] bg-[#FFFDF9] rounded-3xl shadow-2xl border border-[#E8E0D2] flex flex-col overflow-hidden animate-scaleIn">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#FAF5EE] via-[#FFF1F3] to-[#FAF5EE] border-b border-[#EFE8DC] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-[#D9777F] text-white flex items-center justify-center shadow-xs">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-display font-bold text-sm text-[#2C2420]">
                    KN Crafts & Co Assistant
                  </h3>
                  <span className="text-[10px] font-semibold text-[#16A34A] bg-[#DCFCE7] px-1.5 py-0.2 rounded-full">
                    n8n AI
                  </span>
                </div>
                <p className="text-[11px] text-[#786B63]">
                  Everlasting Florals & Custom Keepsakes
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetSession}
                className="p-1.5 rounded-lg text-[#8C7E75] hover:text-[#2C2420] hover:bg-black/5 transition-colors cursor-pointer"
                title="Restart conversation"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-[#8C7E75] hover:text-[#2C2420] hover:bg-black/5 transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FFFDF9]/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'agent' && (
                  <div className="w-7 h-7 rounded-xl bg-[#FDE2E4] text-[#A45258] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold shadow-2xs">
                    🌸
                  </div>
                )}

                <div
                  className={`max-w-[82%] p-3 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#2C2420] text-white rounded-tr-xs'
                      : msg.isError
                      ? 'bg-[#FEE2E2] text-[#991B1B] border border-[#FCA5A5] rounded-tl-xs'
                      : 'bg-[#FAF6F0] text-[#2C2420] border border-[#EFE8DC] rounded-tl-xs'
                  }`}
                >
                  <div>{renderFormattedText(msg.text)}</div>
                  <div
                    className={`mt-1 text-[9px] text-right ${
                      msg.sender === 'user' ? 'text-white/60' : 'text-[#A89C94]'
                    }`}
                  >
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-xl bg-[#2C2420] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {/* Loading / Typing indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-[#8C7E75]">
                <div className="w-7 h-7 rounded-xl bg-[#FDE2E4] text-[#A45258] flex items-center justify-center shrink-0 text-xs">
                  🌸
                </div>
                <div className="p-3 bg-[#FAF6F0] border border-[#EFE8DC] rounded-2xl rounded-tl-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9777F] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9777F] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9777F] animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="text-[11px] text-[#786B63] ml-1">Crafting response...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick starter chips */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 bg-[#FAF5EE]/70 border-t border-[#EFE8DC] flex flex-wrap gap-1.5">
              {starterPrompts.map((prompt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSendMessage(prompt)}
                  className="text-[11px] text-[#6B5C54] hover:text-[#2C2420] bg-white border border-[#E5DDD0] px-2.5 py-1 rounded-full hover:border-[#D9777F] transition-all cursor-pointer text-left"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Footer Input Bar */}
          <div className="p-3 bg-[#FAF5EE] border-t border-[#EFE8DC]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about bouquets, keychains, care..."
                disabled={isLoading}
                className="flex-1 px-3.5 py-2.5 text-xs bg-white border border-[#DDD3C6] rounded-xl text-[#2C2420] placeholder-[#A4978E] focus:outline-none focus:ring-2 focus:ring-[#D9777F]/30 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-9 h-9 rounded-xl bg-[#2C2420] hover:bg-[#433832] disabled:opacity-40 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Quick WhatsApp Escalation Link */}
            <div className="mt-2 flex items-center justify-between text-[10px] text-[#786B63] px-1">
              <span>Connected to n8n AI Agent</span>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi KN Crafts & Co! 🌸 I was chatting with your AI assistant and would like to finalize an order.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#16A34A] hover:underline font-semibold flex items-center gap-0.5"
              >
                <span>WhatsApp with artisan</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

        </div>
      )}
    </>
  );
};
