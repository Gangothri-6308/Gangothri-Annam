import React, { useState } from 'react';
import { Product } from '../types';
import { X, MessageCircle, ShoppingBag, Check, Star, ShieldCheck, Heart, Sparkles, ChevronDown, Sun, Wind, Droplets, RotateCcw } from 'lucide-react';
import { createWhatsAppProductOrderLink } from '../utils/whatsapp';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, selectedColor: string, quantity: number, note?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colorOptions[0]);
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState('');
  const [added, setAdded] = useState(false);
  const [isCareOpen, setIsCareOpen] = useState(false);

  const whatsAppUrl = createWhatsAppProductOrderLink(
    product.name,
    product.price,
    selectedColor,
    quantity,
    note
  );

  const handleAdd = () => {
    onAddToCart(product, selectedColor, quantity, note);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-[#FFFDF9] rounded-3xl overflow-hidden shadow-2xl border border-[#E8E0D2] my-8 animate-scaleIn max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#2C2420] shadow-sm flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 w-full overflow-y-auto">
          
          {/* Left: Product Image */}
          <div className="md:col-span-6 relative aspect-4/3 md:aspect-auto bg-[#FAF5EE] min-h-[260px]">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {product.tag && (
              <span className="absolute top-4 left-4 bg-white/95 text-[#A45258] text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
                {product.tag}
              </span>
            )}
          </div>

          {/* Right: Product Details & Purchase Controls */}
          <div className="md:col-span-6 p-6 sm:p-7 flex flex-col justify-between space-y-5">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs text-[#8C7E75] mb-1">
                <span className="capitalize">{product.category}</span>
                <div className="flex items-center gap-1 text-[#C48624]">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-semibold text-stone-700">{product.rating.toFixed(1)}</span>
                  <span className="text-stone-400">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title & Price */}
              <h2 className="font-display font-bold text-2xl text-[#2C2420]">
                {product.name}
              </h2>
              
              <div className="flex items-baseline gap-2.5 mt-2">
                <span className="text-2xl font-bold font-sans text-[#2C2420] tabular-nums">
                  ${(product.price * quantity).toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#A89C94] line-through tabular-nums">
                    ${(product.originalPrice * quantity).toFixed(2)}
                  </span>
                )}
                <span className="text-xs text-[#D9777F] font-medium ml-auto">
                  {product.craftTime}
                </span>
              </div>

              {/* Detailed Description */}
              <p className="mt-3 text-xs sm:text-sm text-[#5E5148] leading-relaxed">
                {product.longDescription}
              </p>

              {/* Collapsible Flower Care Guide Tab */}
              <div className="mt-4 rounded-2xl border border-[#EAE2D5] bg-[#FAF6F0] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setIsCareOpen(!isCareOpen)}
                  className="w-full px-3.5 py-2.5 text-left flex items-center justify-between text-xs font-bold text-[#8A3A40] hover:bg-[#F5EFE6] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D9777F]" />
                    Flower Care & Maintenance Guide
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#8A3A40] transition-transform duration-200 ${
                      isCareOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isCareOpen && (
                  <div className="px-3.5 pb-3.5 pt-1 space-y-2.5 text-[11px] text-[#5E5148] border-t border-[#EAE2D5]/70 bg-[#FFFDF9]">
                    <div className="flex items-start gap-2 pt-1.5">
                      <Wind className="w-3.5 h-3.5 text-[#6366F1] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#2C2420]">Gentle Dusting:</strong> Use a soft makeup brush, gentle microfibre duster, or a hair dryer on the <em>cool, low setting</em> to remove settled dust.
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Sun className="w-3.5 h-3.5 text-[#EAB308] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#2C2420]">Avoid Harsh Direct Sunlight:</strong> Keep away from prolonged intense direct UV sunbeams to keep the plush pastel dye vibrant forever.
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Droplets className="w-3.5 h-3.5 text-[#0EA5E9] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#2C2420]">Keep Completely Dry:</strong> Do not water or expose to high-steam areas (like showers) to protect the internal wire armature from moisture.
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <RotateCcw className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#2C2420]">Fluff & Reshape:</strong> Stems and petals are flexible. If pressed during transit, gently reshape each petal with clean dry fingers.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Color Options */}
              <div className="mt-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8A3A40] mb-2">
                  Select Colorway: <span className="font-semibold text-[#2C2420] normal-case">{selectedColor}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colorOptions.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1.5 text-xs rounded-xl border transition-all cursor-pointer ${
                        selectedColor === color
                          ? 'bg-[#FDF2F4] border-[#D9777F] text-[#8A3A40] font-semibold ring-1 ring-[#D9777F]'
                          : 'bg-[#FAF5EE] border-[#E8E0D2] text-[#5E5148] hover:border-[#D9777F]/40'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Stepper */}
              <div className="mt-4 flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8A3A40]">
                  Quantity:
                </span>
                <div className="inline-flex items-center border border-[#DDD3C6] rounded-xl bg-[#FAF5EE]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-sm font-bold text-[#6B5C54] hover:text-[#2C2420] cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-xs font-bold text-[#2C2420] tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-sm font-bold text-[#6B5C54] hover:text-[#2C2420] cursor-pointer"
                  >
                    +
                  </button>
                </div>
                {product.dimensions && (
                  <span className="text-[11px] text-[#8C7E75]">
                    Size: {product.dimensions}
                  </span>
                )}
              </div>

              {/* Optional Gift Note */}
              <div className="mt-4">
                <label className="block text-xs font-semibold text-[#5E5148] mb-1">
                  Gift Note / Personalization (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 'Happy 21st Maya!' or ribbon color request"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full p-2 text-xs bg-[#FAF5EE] border border-[#DDD3C6] rounded-xl text-[#2C2420] placeholder-[#A4978E] focus:outline-none focus:ring-1 focus:ring-[#D9777F]"
                />
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-[#F2ECE2] space-y-2.5">
              {/* WhatsApp instant order */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-[#14532D] bg-[#DCFCE7] hover:bg-[#BBF7D0] rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#16A34A]" />
                <span>Instant Order via WhatsApp</span>
              </a>

              {/* Add to Bag */}
              <button
                onClick={handleAdd}
                className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-white bg-[#D9777F] hover:bg-[#C9636B] rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Added to Gift Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Shopping Bag</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
