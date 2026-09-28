import React, { useState } from 'react';
import { Sparkles, MessageCircle, Check, Send, Heart, Palette, Layers, HelpCircle } from 'lucide-react';
import { createWhatsAppCustomOrderLink } from '../utils/whatsapp';

export const CustomOrderSection: React.FC = () => {
  const [itemType, setItemType] = useState('Handheld Floral Bouquet');
  const [selectedFlowers, setSelectedFlowers] = useState<string[]>(['Blush Tulips', 'Chamomile Daisies']);
  const [colorPalette, setColorPalette] = useState('Pastel Dream (Pink, Cream, Peach)');
  const [ribbonColor, setRibbonColor] = useState('Ivory Satin Grosgrain');
  const [initials, setInitials] = useState('');
  const [giftNote, setGiftNote] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const itemTypes = [
    { id: 'Handheld Floral Bouquet', label: 'Floral Bouquet', basePrice: 32, note: '3-9 stems with luxury wrap' },
    { id: 'Ceramic Desk Potted Bloom', label: 'Potted Bloom', basePrice: 24, note: 'In weighted mini ceramic cup' },
    { id: 'Custom Floral Keychain', label: 'Charm Keychain', basePrice: 15, note: 'With gold clasp & initial charm' },
    { id: 'Single Sculpted Stems', label: 'Single Stems Set', basePrice: 18, note: 'Trio of stems for vases' },
  ];

  const flowerChoices = [
    { name: 'Blush Tulips', emoji: '🌷', extra: 0 },
    { name: 'English Roses', emoji: '🌹', extra: 4 },
    { name: 'Chamomile Daisies', emoji: '🌼', extra: 0 },
    { name: 'Bright Sunflowers', emoji: '🌻', extra: 3 },
    { name: 'Lavender Spires', emoji: '🪻', extra: 2 },
    { name: 'Lily of the Valley', emoji: '🤍', extra: 4 },
  ];

  const palettes = [
    { id: 'Pastel Dream (Pink, Cream, Peach)', label: 'Pastel Dream', colors: ['#FAD2E1', '#FFF1E6', '#FDE2E4'] },
    { id: 'Warm Sunset (Golden, Terracotta, Yellow)', label: 'Warm Sunset', colors: ['#FDE68A', '#FDBA74', '#FCA5A5'] },
    { id: 'Lilac Field (Lavender, Violet, White)', label: 'Lilac Field', colors: ['#DDD6FE', '#C4B5FD', '#FFFFFF'] },
    { id: 'Sage & Meadow (Earthy Greens, Butter, White)', label: 'Sage Meadow', colors: ['#D1FAE5', '#FEF08A', '#F3F4F6'] },
  ];

  const ribbons = [
    'Ivory Satin Grosgrain',
    'Blush Pink Chiffon',
    'Sage Green Velvet',
    'Natural Rustic Jute Twine',
    'Golden Butter Silk',
  ];

  const toggleFlower = (flowerName: string) => {
    if (selectedFlowers.includes(flowerName)) {
      if (selectedFlowers.length > 1) {
        setSelectedFlowers(selectedFlowers.filter((f) => f !== flowerName));
      }
    } else {
      setSelectedFlowers([...selectedFlowers, flowerName]);
    }
  };

  // Base calculated price
  const currentBase = itemTypes.find((t) => t.id === itemType)?.basePrice || 30;
  const flowersExtra = selectedFlowers.reduce((sum, name) => {
    const found = flowerChoices.find((f) => f.name === name);
    return sum + (found ? found.extra : 0);
  }, 0);
  const estimatedPrice = currentBase + flowersExtra;

  const whatsAppCustomUrl = createWhatsAppCustomOrderLink({
    itemType,
    flowers: selectedFlowers,
    colorPalette,
    ribbonColor,
    initials,
    giftCardMessage: giftNote,
    budget: `$${estimatedPrice.toFixed(2)} estimated`,
    name: customerName,
  });

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="custom-orders" className="py-16 md:py-24 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#A45258]">
            The Bespoke Studio
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2C2420]">
            Design Your Custom Keepsake
          </h2>
          <p className="text-base text-[#675A52]">
            Mix and match flower stems, select your signature colorway, and personalize with engraved initials or a gift note.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Form Controls */}
          <div className="lg:col-span-7 bg-[#FFFDF9] p-6 sm:p-8 rounded-3xl border border-[#E8E0D2] shadow-sm space-y-8">
            
            {/* Step 1: Base Item Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8A3A40] mb-3">
                1. Select Creation Format
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {itemTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setItemType(type.id)}
                    className={`p-3 text-left rounded-2xl border transition-all cursor-pointer ${
                      itemType === type.id
                        ? 'bg-[#FDF2F4] border-[#D9777F] ring-1 ring-[#D9777F] shadow-xs'
                        : 'bg-[#FAF5EE] border-[#E8E0D2] hover:border-[#D9777F]/50'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#2C2420]">{type.label}</div>
                    <div className="text-[11px] text-[#A45258] font-semibold mt-1">
                      From ${type.basePrice}
                    </div>
                    <div className="text-[10px] text-[#8C7E75] mt-0.5 leading-tight">
                      {type.note}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Flowers */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#8A3A40]">
                  2. Choose Your Flower Stems
                </label>
                <span className="text-[11px] text-[#8C7E75]">Select 1 or more</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {flowerChoices.map((flower) => {
                  const isSelected = selectedFlowers.includes(flower.name);
                  return (
                    <button
                      key={flower.name}
                      type="button"
                      onClick={() => toggleFlower(flower.name)}
                      className={`p-3 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-[#FDF2F4] border-[#D9777F] ring-1 ring-[#D9777F]'
                          : 'bg-[#FAF5EE] border-[#E8E0D2] hover:bg-[#F5EFE6]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{flower.emoji}</span>
                        <div>
                          <div className="text-xs font-semibold text-[#2C2420]">
                            {flower.name}
                          </div>
                          {flower.extra > 0 && (
                            <div className="text-[10px] text-[#A45258]">
                              +${flower.extra}.00
                            </div>
                          )}
                        </div>
                      </div>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-[#D9777F] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Color Palette Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8A3A40] mb-3">
                3. Choose Color Palette
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {palettes.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setColorPalette(p.id)}
                    className={`p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      colorPalette === p.id
                        ? 'bg-[#FDF2F4] border-[#D9777F] ring-1 ring-[#D9777F]'
                        : 'bg-[#FAF5EE] border-[#E8E0D2] hover:bg-[#F5EFE6]'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-[#2C2420]">{p.label}</div>
                      <div className="flex gap-1.5 mt-2">
                        {p.colors.map((c, i) => (
                          <span
                            key={i}
                            className="w-4 h-4 rounded-full border border-black/10 inline-block shadow-2xs"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                    </div>
                    {colorPalette === p.id && (
                      <Check className="w-4 h-4 text-[#D9777F]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Ribbon & Personalization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8A3A40] mb-2">
                  4. Ribbon / Accent Wrap
                </label>
                <select
                  value={ribbonColor}
                  onChange={(e) => setRibbonColor(e.target.value)}
                  className="w-full p-2.5 bg-[#FAF5EE] border border-[#E8E0D2] rounded-xl text-xs text-[#2C2420] focus:ring-2 focus:ring-[#D9777F]/30 focus:outline-none"
                >
                  {ribbons.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8A3A40] mb-2">
                  Initial Charm (Optional)
                </label>
                <input
                  type="text"
                  maxLength={4}
                  placeholder="e.g. 'A' or 'M&S'"
                  value={initials}
                  onChange={(e) => setInitials(e.target.value.toUpperCase())}
                  className="w-full p-2.5 bg-[#FAF5EE] border border-[#E8E0D2] rounded-xl text-xs text-[#2C2420] placeholder-[#A4978E] focus:ring-2 focus:ring-[#D9777F]/30 focus:outline-none"
                />
              </div>
            </div>

            {/* Step 5: Gift message note */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8A3A40] mb-2">
                Handwritten Gift Card Note (Complimentary)
              </label>
              <textarea
                rows={2}
                placeholder="Write a message to be hand-lettered on a card..."
                value={giftNote}
                onChange={(e) => setGiftNote(e.target.value)}
                className="w-full p-2.5 bg-[#FAF5EE] border border-[#E8E0D2] rounded-xl text-xs text-[#2C2420] placeholder-[#A4978E] focus:ring-2 focus:ring-[#D9777F]/30 focus:outline-none"
              />
            </div>

          </div>

          {/* Right Column: Live Estimate & Instant Send */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            
            <div className="bg-[#FFFDF9] p-6 rounded-3xl border border-[#E8E0D2] shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#F2ECE2]">
                <div>
                  <span className="text-xs font-bold text-[#A45258] uppercase">
                    Bespoke Summary
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#2C2420]">
                    Your Design Preview
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#8C7E75]">Est. Total</div>
                  <div className="text-2xl font-bold font-sans text-[#2C2420] tabular-nums">
                    ${estimatedPrice.toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Spec list */}
              <div className="py-4 space-y-2.5 text-xs">
                <div className="flex justify-between py-1 border-b border-[#FAF5EE]">
                  <span className="text-[#6B5C54]">Format:</span>
                  <span className="font-semibold text-[#2C2420]">{itemType}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#FAF5EE]">
                  <span className="text-[#6B5C54]">Stems:</span>
                  <span className="font-semibold text-[#2C2420] text-right">
                    {selectedFlowers.join(', ')}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#FAF5EE]">
                  <span className="text-[#6B5C54]">Palette:</span>
                  <span className="font-semibold text-[#2C2420]">{colorPalette.split('(')[0]}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#FAF5EE]">
                  <span className="text-[#6B5C54]">Ribbon:</span>
                  <span className="font-semibold text-[#2C2420]">{ribbonColor}</span>
                </div>
                {initials && (
                  <div className="flex justify-between py-1 border-b border-[#FAF5EE]">
                    <span className="text-[#6B5C54]">Initial Charm:</span>
                    <span className="font-bold text-[#D9777F]">"{initials}"</span>
                  </div>
                )}
                {giftNote && (
                  <div className="py-1">
                    <span className="text-[#6B5C54] block">Included Note:</span>
                    <span className="italic text-[#2C2420] bg-[#FAF5EE] p-2 rounded-lg block mt-1">
                      "{giftNote}"
                    </span>
                  </div>
                )}
              </div>

              {/* Instant WhatsApp Action Button */}
              <div className="pt-2 space-y-3">
                <a
                  href={whatsAppCustomUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 text-xs sm:text-sm font-semibold text-[#14532D] bg-[#DCFCE7] hover:bg-[#BBF7D0] rounded-2xl transition-all shadow-xs flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-[#16A34A]" />
                  <span>Send Custom Order via WhatsApp</span>
                </a>

                <p className="text-[11px] text-center text-[#8C7E75]">
                  Opens WhatsApp with all your selections pre-filled for instant confirmation!
                </p>
              </div>

              {/* Or Submit Inquiry form right here */}
              <div className="mt-6 pt-5 border-t border-[#F2ECE2]">
                <div className="text-xs font-bold text-[#2C2420] mb-2">
                  Or submit inquiry via website form:
                </div>

                {submitted ? (
                  <div className="p-3 bg-[#DCFCE7] text-[#14532D] rounded-xl text-xs font-medium text-center">
                    🎉 Thank you! Your custom request has been saved. We will contact you within 24 hours.
                  </div>
                ) : (
                  <form onSubmit={handleSubmitInquiry} className="space-y-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full p-2 bg-[#FAF5EE] border border-[#E8E0D2] rounded-xl text-xs text-[#2C2420] focus:ring-1 focus:ring-[#D9777F]"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 text-xs font-semibold text-white bg-[#2C2420] hover:bg-[#433832] rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Website Inquiry</span>
                    </button>
                  </form>
                )}
              </div>

            </div>

            {/* Trust box */}
            <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E8E0D2] text-xs text-[#6B5C54] space-y-1.5">
              <div className="font-bold text-[#2C2420] flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#D9777F]" />
                Handmade Timeline
              </div>
              <p className="text-[11px] leading-relaxed">
                Custom orders take 2 to 4 business days to hand-twist. We send photos of your finished piece before safe bubble wrapping and shipping.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
