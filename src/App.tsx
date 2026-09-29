import React, { useState, useEffect } from 'react';
import { Product, CartItem } from './types';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { GallerySection } from './components/GallerySection';
import { CustomOrderSection } from './components/CustomOrderSection';
import { ContactSection } from './components/ContactSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { N8nChatWidget } from './components/N8nChatWidget';
import { Footer } from './components/Footer';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('kn_crafts_cart') || localStorage.getItem('petal_twist_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('kn_crafts_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (
    product: Product,
    selectedColor?: string,
    quantity: number = 1,
    customNote?: string
  ) => {
    const color = selectedColor || product.colorOptions[0];

    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === color
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        if (customNote) updated[existingIdx].customNote = customNote;
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            quantity,
            selectedColor: color,
            customNote,
          },
        ];
      }
    });

    showToast(`Added ${quantity}x "${product.name}" (${color}) to your bag! 🌸`);
  };

  const handleInstantOrder = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = quantity;
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FFFDF9] flex flex-col font-body antialiased text-[#2C2420]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-5 z-50 bg-[#2C2420] text-white text-xs sm:text-sm px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 animate-fadeIn border border-white/10">
          <CheckCircle2 className="w-4 h-4 text-[#86EFAC] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCustomOrder={() => scrollToSection('custom-orders')}
        onOpenAiChat={() => setIsAiChatOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Home Section */}
        <Hero
          onExploreClick={() => scrollToSection('products')}
          onCustomClick={() => scrollToSection('custom-orders')}
          onAiChatClick={() => setIsAiChatOpen(true)}
        />

        {/* 2. About Us Section */}
        <AboutSection />

        {/* 3. Products Section */}
        <ProductsSection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToCart={(product, color) => handleAddToCart(product, color)}
          onInstantOrder={handleInstantOrder}
        />

        {/* 4. Gallery Section */}
        <GallerySection />

        {/* 5. Custom Orders Section */}
        <CustomOrderSection />

        {/* 6. Contact/Order Section */}
        <ContactSection onOpenAiChat={() => setIsAiChatOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Product Detail / Instant Order Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Action Button (WhatsApp + AI Assistant) */}
      <WhatsAppFloatingButton onOpenAiChat={() => setIsAiChatOpen(true)} />

      {/* n8n AI Chat Assistant Modal Widget */}
      <N8nChatWidget
        isOpen={isAiChatOpen}
        onClose={() => setIsAiChatOpen(false)}
        onOpen={() => setIsAiChatOpen(true)}
      />
    </div>
  );
}
