import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, MessageCircle, ShoppingBag, ArrowRight, Sparkles, Check } from 'lucide-react';
import { createWhatsAppCartCheckoutLink } from '../utils/whatsapp';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'Standard Shipping' | 'Local Studio Pickup'>('Standard Shipping');
  const [address, setAddress] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const shippingCost = deliveryMethod === 'Standard Shipping' ? (subtotal > 60 ? 0 : 5) : 0;
  const grandTotal = subtotal + shippingCost;

  const whatsAppCheckoutUrl = createWhatsAppCartCheckoutLink(
    items,
    grandTotal,
    customerName,
    deliveryMethod,
    address
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div
        className="w-full max-w-md bg-[#FFFDF9] h-full shadow-2xl flex flex-col justify-between border-l border-[#EAE2D5] animate-slideLeft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#EFE8DC] flex items-center justify-between bg-[#FAF5EE]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#D9777F]" />
            <h2 className="font-display font-bold text-lg text-[#2C2420]">
              Your Gift Bag ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#EAE1D5] text-[#6B5C54] transition-colors cursor-pointer"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#FAF5EE] text-[#D9777F] flex items-center justify-center mx-auto">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <p className="font-display text-base font-bold text-[#2C2420]">
                Your bag is empty
              </p>
              <p className="text-xs text-[#786B63] max-w-xs mx-auto">
                Browse our handmade bouquets, potted sunflowers, and personalized keychains to fill your bag!
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2 text-xs font-semibold text-white bg-[#2C2420] rounded-full hover:bg-[#433832] transition-colors"
              >
                Start Browsing
              </button>
            </div>
          ) : (
            <>
              {items.map((item, idx) => (
                <div
                  key={`${item.product.id}-${idx}`}
                  className="p-3.5 rounded-2xl bg-[#FAF6F0] border border-[#EBE3D7] flex gap-3 relative"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-18 h-18 object-cover rounded-xl bg-stone-200 shrink-0"
                  />
                  <div className="flex-1 min-w-0 pr-6">
                    <h3 className="font-display font-bold text-sm text-[#2C2420] truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-[11px] text-[#A45258] font-medium mt-0.5">
                      Color: {item.selectedColor}
                    </p>
                    {item.customNote && (
                      <p className="text-[10px] text-[#786B63] italic truncate mt-0.5">
                        Note: "{item.customNote}"
                      </p>
                    )}

                    <div className="flex items-center justify-between mt-2">
                      <div className="inline-flex items-center border border-[#DDD3C6] rounded-lg bg-white">
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs font-bold text-[#6B5C54] hover:text-[#2C2420] cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 text-xs font-semibold text-[#2C2420] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs font-bold text-[#6B5C54] hover:text-[#2C2420] cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-bold font-sans text-[#2C2420] tabular-nums">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(idx)}
                    className="absolute top-3 right-3 text-[#A89C94] hover:text-[#D9777F] transition-colors p-1"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}

              {/* Delivery Preferences Form */}
              <div className="pt-4 border-t border-[#EFE8DC] space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#8A3A40]">
                  Checkout Info for WhatsApp
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Your Name (for gift card / booking)"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full p-2.5 text-xs bg-[#FAF5EE] border border-[#DDD3C6] rounded-xl text-[#2C2420] placeholder-[#A4978E] focus:outline-none focus:ring-1 focus:ring-[#D9777F]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('Standard Shipping')}
                    className={`p-2 rounded-xl border text-center cursor-pointer ${
                      deliveryMethod === 'Standard Shipping'
                        ? 'bg-[#FDF2F4] border-[#D9777F] text-[#8A3A40] font-bold'
                        : 'bg-[#FAF5EE] border-[#DDD3C6] text-[#6B5C54]'
                    }`}
                  >
                    Postal Delivery
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('Local Studio Pickup')}
                    className={`p-2 rounded-xl border text-center cursor-pointer ${
                      deliveryMethod === 'Local Studio Pickup'
                        ? 'bg-[#FDF2F4] border-[#D9777F] text-[#8A3A40] font-bold'
                        : 'bg-[#FAF5EE] border-[#DDD3C6] text-[#6B5C54]'
                    }`}
                  >
                    Studio Pickup (Free)
                  </button>
                </div>

                {deliveryMethod === 'Standard Shipping' && (
                  <input
                    type="text"
                    placeholder="Delivery City / Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full p-2.5 text-xs bg-[#FAF5EE] border border-[#DDD3C6] rounded-xl text-[#2C2420] placeholder-[#A4978E] focus:outline-none focus:ring-1 focus:ring-[#D9777F]"
                  />
                )}
              </div>
            </>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#EFE8DC] bg-[#FAF5EE] space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#6B5C54]">
                <span>Items Subtotal:</span>
                <span className="font-semibold text-[#2C2420] tabular-nums">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#6B5C54]">
                <span>Delivery:</span>
                <span className="font-semibold text-[#2C2420] tabular-nums">
                  {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#2C2420] pt-1.5 border-t border-[#E8DFC9]">
                <span>Total:</span>
                <span className="tabular-nums text-base">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Direct WhatsApp Checkout Button */}
            <a
              href={whatsAppCheckoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2 text-center"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Checkout via WhatsApp</span>
            </a>

            <p className="text-[10px] text-center text-[#8C7E75]">
              🌸 Transfers your itemized gift list to WhatsApp for personal maker confirmation!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
