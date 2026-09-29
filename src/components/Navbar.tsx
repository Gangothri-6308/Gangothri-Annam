import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, Sparkles, Bot } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/products';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenCustomOrder: () => void;
  onOpenAiChat?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenCustomOrder,
  onOpenAiChat,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Custom Orders', href: '#custom-orders' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF9]/90 backdrop-blur-md border-b border-[#EFE9DF] transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-[#FAF3EA] text-[#786154] text-xs py-1.5 px-4 text-center font-medium border-b border-[#EFE9DF]/60">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#D9777F]" />
          Everlasting handmade florals & customized keychains · Hand-twisted with love
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-2xl sm:text-2xl font-display font-bold text-[#2C2420] tracking-tight hover:text-[#D9777F] transition-colors"
        >
          <span className="text-[#D9777F] transition-transform group-hover:rotate-12 duration-200">🌸</span>
          <span>KN Crafts & Co</span>
        </a>

        {/* Zone 2: Clean 4-6 text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-[#5E5148]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#D9777F] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D9777F] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          {/* AI Chat button */}
          {onOpenAiChat && (
            <button
              onClick={onOpenAiChat}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#8A3A40] bg-[#FDF2F4] hover:bg-[#FCE7F3] border border-[#F2C7CD] rounded-full transition-colors cursor-pointer"
              title="Chat with our n8n AI Assistant"
            >
              <Bot className="w-3.5 h-3.5 text-[#D9777F]" />
              <span>Ask AI</span>
            </button>
          )}

          {/* WhatsApp Direct Action Button */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi KN Crafts & Co! 🌸 I am browsing your lovely handmade creations and would like to ask a question.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#1B6F43] bg-[#E7F6ED] hover:bg-[#D8F0E2] rounded-full transition-colors whitespace-nowrap"
            title="Chat directly on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </a>

          {/* Cart Bag button with count */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 text-[#2C2420] hover:text-[#D9777F] bg-[#F7F3EC] hover:bg-[#EFE9DF] rounded-full transition-colors cursor-pointer"
            aria-label="View shopping bag"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D9777F] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2C2420] hover:text-[#D9777F] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EFE9DF] bg-[#FFFDF9] px-4 pt-3 pb-6 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#4A3E38] hover:text-[#D9777F] py-2 px-3 rounded-lg hover:bg-[#F9F5EF] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[#EFE9DF] flex flex-col gap-2">
              {onOpenAiChat && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAiChat();
                  }}
                  className="w-full text-center py-2.5 px-4 text-sm font-semibold text-[#8A3A40] bg-[#FDF2F4] border border-[#F2C7CD] rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Bot className="w-4 h-4 text-[#D9777F]" />
                  Chat with AI Assistant
                </button>
              )}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomOrder();
                }}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold text-white bg-[#D9777F] hover:bg-[#C9636B] rounded-xl transition-colors shadow-sm"
              >
                Design Custom Bouquet
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi KN Crafts & Co! 🌸 I would love to inquire about ordering.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-[#1B6F43] bg-[#E7F6ED] rounded-xl"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
