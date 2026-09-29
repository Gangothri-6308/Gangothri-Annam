import React, { useState } from 'react';
import { MessageCircle, X, Bot, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/products';

interface WhatsAppFloatingButtonProps {
  onOpenAiChat?: () => void;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ onOpenAiChat }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      
      {/* Expandable options bubble */}
      {isOpen && (
        <div className="mb-2 max-w-xs w-76 bg-[#FFFDF9] rounded-3xl shadow-2xl border border-[#E9E1D4] overflow-hidden p-4 animate-scaleIn">
          <div className="flex items-center justify-between pb-2.5 border-b border-[#F2ECE2]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
              <span className="text-xs font-bold text-[#2C2420]">KN Crafts & Co Support</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#8C7E75] hover:text-[#2C2420] text-xs p-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="mt-2.5 text-xs text-[#5E5148] leading-relaxed">
            🌸 How would you like to connect with us today?
          </p>

          <div className="mt-3 space-y-2">
            {/* AI Assistant Option */}
            {onOpenAiChat && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenAiChat();
                }}
                className="w-full p-2.5 bg-[#FAF6F0] hover:bg-[#F5EFE6] border border-[#E8E0D2] text-[#2C2420] text-xs font-semibold rounded-2xl flex items-center justify-between transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-[#2C2420] text-white flex items-center justify-center">
                    <Bot className="w-4 h-4 text-[#FCE7F3]" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-[12px]">Chat with AI Assistant</div>
                    <div className="text-[10px] text-[#786B63]">Instant answers via n8n 24/7</div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[#D9777F] bg-[#FDE2E4] px-1.5 py-0.5 rounded-md">
                  Instant
                </span>
              </button>
            )}

            {/* WhatsApp Option */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi KN Crafts & Co! 🌸 I am browsing your shop website and would love to chat.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-2.5 bg-[#DCFCE7] hover:bg-[#BBF7D0] border border-[#86EFAC] text-[#14532D] text-xs font-semibold rounded-2xl flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-[#16A34A] text-white flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-[12px]">Artisan WhatsApp</div>
                  <div className="text-[10px] text-[#15803D]">Orders & custom designs</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-[#14532D]">Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating launcher buttons stack */}
      <div className="flex items-center gap-2.5">
        {/* Direct quick AI launcher button */}
        {onOpenAiChat && (
          <button
            onClick={onOpenAiChat}
            className="h-12 px-4 rounded-full bg-[#2C2420] hover:bg-[#433832] text-white shadow-xl hover:shadow-2xl flex items-center gap-2 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer text-xs font-semibold"
            title="Chat with AI Agent"
          >
            <Bot className="w-4 h-4 text-[#FCE7F3]" />
            <span className="hidden sm:inline">Ask AI Agent</span>
          </button>
        )}

        {/* WhatsApp Circle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-13 h-13 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer relative"
          aria-label="Contact options"
          title="Contact & Chat Options"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageCircle className="w-6 h-6 fill-current" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#EF4444] rounded-full border-2 border-white animate-pulse" />
            </>
          )}
        </button>
      </div>

    </div>
  );
};
