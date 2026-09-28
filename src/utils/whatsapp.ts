import { CartItem } from '../types';
import { WHATSAPP_NUMBER } from '../data/products';

export function createWhatsAppProductOrderLink(
  productName: string,
  price: number,
  selectedColor: string,
  quantity: number = 1,
  note?: string
): string {
  let message = `Hi KN Crafts & Co! 🌸\n\nI would like to order:\n` +
    `• Product: *${productName}*\n` +
    `• Colorway: ${selectedColor}\n` +
    `• Quantity: ${quantity}\n` +
    `• Price: $${(price * quantity).toFixed(2)}\n`;

  if (note && note.trim().length > 0) {
    message += `• Gift Note/Customization: "${note.trim()}"\n`;
  }

  message += `\nPlease let me know your current craft turnaround time and payment details. Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function createWhatsAppCartCheckoutLink(
  items: CartItem[],
  total: number,
  customerName: string,
  deliveryMethod: string,
  deliveryAddress?: string
): string {
  let message = `Hello KN Crafts & Co! 🌸\n\nI'd like to place an order from your shop website:\n\n`;
  message += `*Customer:* ${customerName || 'Shopper'}\n`;
  message += `*Delivery Preference:* ${deliveryMethod}\n`;
  if (deliveryAddress && deliveryAddress.trim()) {
    message += `*Address:* ${deliveryAddress.trim()}\n`;
  }
  message += `\n*Order Summary:*\n`;

  items.forEach((item, index) => {
    message += `${index + 1}. *${item.product.name}* (x${item.quantity}) - $${(item.product.price * item.quantity).toFixed(2)}\n`;
    message += `   Color: ${item.selectedColor}\n`;
    if (item.initialCharm) {
      message += `   Initial Charm: "${item.initialCharm}"\n`;
    }
    if (item.customNote) {
      message += `   Note: "${item.customNote}"\n`;
    }
  });

  message += `\n*Estimated Total: $${total.toFixed(2)}*\n\n`;
  message += `Could you please confirm order availability and provide payment details? Thank you! ✨`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function createWhatsAppCustomOrderLink(details: {
  itemType: string;
  flowers: string[];
  colorPalette: string;
  ribbonColor: string;
  initials?: string;
  giftCardMessage?: string;
  budget?: string;
  name: string;
}): string {
  let message = `Hi KN Crafts & Co! 🌸\n\nI would love to request a *Custom Bespoke Order*:\n\n`;
  message += `• *Type:* ${details.itemType}\n`;
  message += `• *Selected Flowers:* ${details.flowers.join(', ')}\n`;
  message += `• *Color Palette:* ${details.colorPalette}\n`;
  message += `• *Ribbon / Wrap:* ${details.ribbonColor}\n`;
  if (details.initials && details.initials.trim()) {
    message += `• *Initial/Personalization:* ${details.initials.trim()}\n`;
  }
  if (details.giftCardMessage && details.giftCardMessage.trim()) {
    message += `• *Gift Note:* "${details.giftCardMessage.trim()}"\n`;
  }
  if (details.budget) {
    message += `• *Target Budget:* ${details.budget}\n`;
  }
  message += `• *Name:* ${details.name || 'Friend'}\n\n`;
  message += `Could you let me know if this design is possible and what the price & timeline would be? Thank you! ✨`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
