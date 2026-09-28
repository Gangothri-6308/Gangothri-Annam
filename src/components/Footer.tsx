import React from 'react';
import { Heart, MessageCircle, Instagram, Mail } from 'lucide-react';
import { WHATSAPP_NUMBER, SHOP_EMAIL, INSTAGRAM_HANDLE } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF5EE] border-t border-[#EFE8DC] text-[#6B5C54]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <a href="#home" className="inline-flex items-center gap-2 font-display text-xl font-bold text-[#2C2420]">
              <span className="text-[#D9777F]">🌸</span>
              <span>KN Crafts & Co</span>
            </a>
            <p className="text-xs text-[#786B63] max-w-sm leading-relaxed">
              Handcrafted pipe-cleaner flower bouquets, miniature potted blooms, and customized initial keychains. Made patiently by hand to keep your sweetest moments blooming forever.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#15803D] hover:underline font-semibold"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Order Line</span>
              </a>
              <span className="text-[#D9D1C7]">·</span>
              <span className="text-[#786B63]">{INSTAGRAM_HANDLE}</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C2420] mb-3">
              Shop & Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#D9777F] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D9777F] transition-colors">Our Story & Craft</a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#D9777F] transition-colors">Bouquets & Florals</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D9777F] transition-colors">Customer Gallery</a>
              </li>
              <li>
                <a href="#custom-orders" className="hover:text-[#D9777F] transition-colors">Bespoke Custom Studio</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D9777F] transition-colors">Contact & FAQs</a>
              </li>
            </ul>
          </div>

          {/* Artisan promise */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C2420] mb-3">
              Handmade Promise
            </h4>
            <p className="text-xs text-[#786B63] leading-relaxed">
              Every single petal is individually coiled, shaped, and wrapped with love. Allergen-free, zero wilting, and designed to brighten any space.
            </p>
            <div className="mt-4 p-3 rounded-xl bg-[#FFFDF9] border border-[#E8E0D2] text-[11px] text-[#A45258] font-medium">
              🌿 Plastic-minimal craft packaging with recyclable gift boxes.
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-[#EAE2D5] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7E75] gap-4">
          <p>© {new Date().getFullYear()} KN Crafts & Co. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Twisted with <Heart className="w-3.5 h-3.5 text-[#D9777F] fill-current" /> for flower lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};
