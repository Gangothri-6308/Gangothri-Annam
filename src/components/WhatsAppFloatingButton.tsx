import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/products';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Expandable chat popup bubble */}
      {isOpen && (
        <div className="mb-3 max-w-xs w-72 bg-[#FFFDF9] rounded-2xl shadow-xl border border-[#E9E1D4] overflow-hidden p-4 animate-scaleIn">
          <div className="flex items-center justify-between pb-2 border-b border-[#F2ECE2]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
              <span className="text-xs font-bold text-[#2C2420]">KN Crafts & Co Studio</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#8C7E75] hover:text-[#2C2420] text-xs p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="mt-2.5 text-xs text-[#5E5148] leading-relaxed">
            🌸 Hello! Looking for a custom everlasting flower bouquet, desk sunflower, or personalized initial keychain?
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi KN Crafts & Co! 🌸 I am browsing your shop website and would love to chat.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full py-2.5 px-3 bg-[#15803D] hover:bg-[#166534] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}

      {/* Floating Action Circle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer relative"
        aria-label="Contact via WhatsApp"
        title="Chat on WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-7 h-7 fill-current" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#EF4444] rounded-full border-2 border-white animate-pulse" />
          </>
        )}
      </button>

    </div>
  );
};
