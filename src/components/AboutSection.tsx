import React from 'react';
import { Sparkles, HeartHandshake, Smile, RefreshCw } from 'lucide-react';
import { studioImg } from '../data/products';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#F2ECE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#A45258]">
            Our Story & Craft
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2C2420] text-balance">
            Slow, thoughtful craft for life’s sweetest moments
          </h2>
          <p className="text-base text-[#675A52] leading-relaxed">
            KN Crafts & Co began with a single spool of soft chenille wire and a simple wish: to give flowers that never lose their bloom, their cheer, or their memory.
          </p>
        </div>

        {/* Content split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Workshop image with warm border and decorative frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#E9E1D4] shadow-md bg-[#FAF5EE]">
              <img
                src={studioImg}
                alt="Artisan desk with colorful pipe cleaners, floral tape, and scissors"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 object-cover hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420]/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="font-display text-lg font-semibold">The Artisan Studio Table</p>
                <p className="text-xs text-stone-200 mt-0.5">
                  Over 3,000 meters of premium fuzzy chenille wire twisted by hand each month.
                </p>
              </div>
            </div>
          </div>

          {/* Right column: The 3 Core Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-display font-bold text-[#2C2420]">
                Why Pipe-Cleaner Flowers?
              </h3>
              <p className="text-sm text-[#5E5148] leading-relaxed">
                Fresh bouquets bring immediate joy, but they wilt and dry within days. Artificial plastic flowers can feel cold and rigid. Pipe-cleaner florals offer the perfect middle ground: velvety soft, playfully tactile, and everlasting.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-2xl bg-[#FAF5EE] border border-[#EFE8DC]">
                <div className="w-8 h-8 rounded-xl bg-[#FDE2E4] text-[#A45258] flex items-center justify-center mb-3">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#2C2420] mb-1">Never Wilts or Sheds</h4>
                <p className="text-xs text-[#6B5C54] leading-relaxed">
                  No watering, no allergy triggers, no dry crunchy petals on your carpet. Keeps its vivid pastel hues for years.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF5EE] border border-[#EFE8DC]">
                <div className="w-8 h-8 rounded-xl bg-[#FEF3C7] text-[#B45309] flex items-center justify-center mb-3">
                  <Smile className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#2C2420] mb-1">Tactile & Cozy Feel</h4>
                <p className="text-xs text-[#6B5C54] leading-relaxed">
                  Crafted using dense plush chenille wire with a velvety cloud-like feel that brings instant warmth to any room.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF5EE] border border-[#EFE8DC]">
                <div className="w-8 h-8 rounded-xl bg-[#E0E7FF] text-[#4338CA] flex items-center justify-center mb-3">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#2C2420] mb-1">Personalized with Love</h4>
                <p className="text-xs text-[#6B5C54] leading-relaxed">
                  Choose specific flower types, graduation school colors, stamped initial charms, or hand-written message cards.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF5EE] border border-[#EFE8DC]">
                <div className="w-8 h-8 rounded-xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#2C2420] mb-1">Lightweight & Durable</h4>
                <p className="text-xs text-[#6B5C54] leading-relaxed">
                  Bendable wire cores make them easy to reshape and durable enough for keychains, desk pots, and travel gifts.
                </p>
              </div>

            </div>

            {/* Maker Note */}
            <div className="p-4 rounded-2xl bg-[#FFF9F2] border-l-4 border-[#D9777F] text-xs text-[#5B4F47] leading-relaxed italic">
              “Every single petal is individually coiled, sculpted, and bonded by hand. When you hold one of our bouquets or bag charms, you are holding hours of quiet, patient love.”
              <span className="block mt-1 font-semibold not-italic text-[#2C2420]">— Elena, Founder & Artisan Maker</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
