import React from 'react';
import { ArrowDown, MessageCircle, Heart, Sparkles, ShieldCheck, Bot } from 'lucide-react';
import { heroBouquetImg, WHATSAPP_NUMBER } from '../data/products';

interface HeroProps {
  onExploreClick: () => void;
  onCustomClick: () => void;
  onAiChatClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onCustomClick, onAiChatClick }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EE] to-[#FFFDF9]">
      {/* Subtle organic floral background glow circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40">
        <div className="absolute top-0 right-10 w-72 h-72 rounded-full bg-[#FCE7F3] blur-3xl" />
        <div className="absolute bottom-0 left-12 w-80 h-80 rounded-full bg-[#FEF3C7] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Brand Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Quiet handmade kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A45258] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#D9777F]" />
              Handcrafted in Small Batches
              <span aria-hidden="true" className="text-[#D4C5BD]">·</span>
              100% Everlasting
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#2C2420] tracking-tight leading-[1.15] text-balance">
              Flowers that stay in bloom, <span className="italic font-normal text-[#D9777F]">forever.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#5E5148] max-w-xl font-normal leading-relaxed">
              We hand-twist plush chenille pipe cleaners into vibrant everlasting bouquets, miniature potted blooms, and customized charms. Soft to the touch, allergen-free, and designed to preserve your sweetest milestones forever.
            </p>

            {/* Micro value props */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#6B5C54]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D9777F]" />
                <span>Zero watering or fading</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#D9777F]" />
                <span>Custom colors & initial charms</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#D9777F]" />
                <span>Handmade with loving patience</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#2C2420] hover:bg-[#433832] rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2"
              >
                <span>Shop Catalog</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onCustomClick}
                className="px-6 py-3.5 text-sm font-semibold text-[#83383F] bg-[#FCECEE] hover:bg-[#F9DEE2] border border-[#F2C7CD] rounded-full transition-colors cursor-pointer"
              >
                Custom Studio
              </button>

              {onAiChatClick && (
                <button
                  onClick={onAiChatClick}
                  className="px-5 py-3.5 text-sm font-semibold text-[#8A3A40] bg-[#FAF5EE] hover:bg-[#F5EFE6] border border-[#E8E0D2] rounded-full transition-colors cursor-pointer inline-flex items-center gap-2"
                  title="Ask our n8n AI Assistant"
                >
                  <Bot className="w-4 h-4 text-[#D9777F]" />
                  <span>Ask AI Agent</span>
                </button>
              )}

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi KN Crafts & Co! 🌸 I would like to order some handmade pipe-cleaner flowers.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-sm font-semibold text-[#14532D] bg-[#DCFCE7] hover:bg-[#BBF7D0] rounded-full transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Testimonial micro badge */}
            <div className="pt-6 border-t border-[#EFE9DF] flex items-center gap-3">
              <div className="flex -space-x-1.5 overflow-hidden">
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#FCE7F3] text-center text-xs leading-8 font-bold text-[#A45258]">C</span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#FEF3C7] text-center text-xs leading-8 font-bold text-[#B45309]">J</span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#E0E7FF] text-center text-xs leading-8 font-bold text-[#4338CA]">A</span>
              </div>
              <div className="text-xs text-[#5E5148]">
                <span className="font-semibold text-[#2C2420]">4.9 / 5.0 rating</span> from over 180+ happy handmade gift recipients
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Studio Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Back card decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FAD2E1] to-[#FDE2E4] rounded-3xl transform rotate-2 scale-98 opacity-70 filter blur-xs" />
              
              {/* Main Product Card */}
              <div className="relative bg-[#FFFDF9] p-3 sm:p-4 rounded-3xl border border-[#EBE4D8] shadow-xl overflow-hidden group">
                <div className="relative aspect-4/3 sm:aspect-16/11 rounded-2xl overflow-hidden bg-[#F7F3EC]">
                  <img
                    src={heroBouquetImg}
                    alt="Handmade Everlasting Pipe Cleaner Floral Bouquet"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                  
                  {/* Gentle Floating Feature Callout */}
                  <div className="absolute bottom-3 left-3 bg-[#FFFDF9]/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/60 shadow-sm text-xs font-medium text-[#2C2420]">
                    <span className="font-semibold text-[#D9777F]">Everlasting Meadow</span> · 12 Hand-crafted stems
                  </div>
                </div>

                {/* Tactile detail caption */}
                <div className="pt-3.5 pb-1 px-2 flex items-center justify-between text-xs text-[#786B63]">
                  <span>Velveteen chenille texture</span>
                  <span className="font-medium text-[#D9777F]">Tied with ivory grosgrain</span>
                </div>
              </div>

              {/* Floating micro card */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl border border-[#EBE4D8] shadow-lg flex items-center gap-3 max-w-[210px]">
                <div className="w-9 h-9 rounded-xl bg-[#FEE2E2] flex items-center justify-center text-lg shrink-0">
                  🌷
                </div>
                <div className="text-xs">
                  <div className="font-bold text-[#2C2420]">Bespoke Made</div>
                  <div className="text-[#786B63] text-[11px]">Pick your favorite colorway</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
