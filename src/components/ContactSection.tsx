import React, { useState } from 'react';
import { MessageCircle, Mail, MapPin, Clock, ChevronDown, Send, CheckCircle2, Phone, Wind, Sun, Droplets, RotateCcw, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, SHOP_EMAIL, INSTAGRAM_HANDLE } from '../data/products';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqCategory, setFaqCategory] = useState<'care' | 'orders'>('care');

  const careFaqs = [
    {
      q: 'How do I dust and clean my pipe-cleaner flowers?',
      a: 'Dusting is quick and gentle! We recommend using a clean, soft blush makeup brush or a hair dryer set strictly on the cool, lowest speed setting held 25–30cm away. A light pass will whisk away dust without tugging the velvety chenille fibers.',
    },
    {
      q: 'Can my pipe-cleaner flowers sit in direct sunlight?',
      a: 'We recommend placing your florals in bright, indirect room light or desk areas. Prolonged exposure to intense, scorching direct UV rays through a sunny windowsill can cause delicate pastel dyes to gradually fade over time.',
    },
    {
      q: 'How do I care for my handmade bag charm or keychain?',
      a: 'Our keychains feature reinforced cores designed for daily bag use. To keep them looking fresh, avoid soaking them in water or crushing them under heavy items. If petals flatten, gently pinch and fluff them with dry fingers to restore their rounded 3D shape.',
    },
    {
      q: 'What should I do if stems or petals get squished during travel?',
      a: 'Don’t panic! Every stem, petal, and leaf contains a pliable galvanized wire skeleton. You can easily bend and reposition each petal, curve the green leaves, and fluff the flower head back into shape with your fingertips.',
    },
    {
      q: 'Can I spray my bouquet with room perfume or essential oils?',
      a: 'Yes, a very light room mist sprayed from 40cm away adds a lovely fragrance. Avoid dripping concentrated essential oils directly onto the chenille fibers, as thick oil droplets could discolor light pastel materials.',
    },
  ];

  const orderFaqs = [
    {
      q: 'How long do pipe-cleaner flowers last?',
      a: 'They last indefinitely! Because they are made from high-density plush chenille fibers wrapped around galvanized wire cores, they never dry out, fade from lack of water, or drop petals.',
    },
    {
      q: 'How do I place an order?',
      a: 'You can click "Order Now" on any product, add items to your gift bag for WhatsApp checkout, or click any WhatsApp button to chat with our artisan directly. We finalize payment via bank transfer, PayPal, or Cash on Pickup/Delivery.',
    },
    {
      q: 'Can I request specific flowers or colorways for graduation?',
      a: 'Yes! Our Bespoke Custom Studio allows you to select specific school colours, graduation cap accents, custom initial charms, and wrap ribbons. We love creating graduation bouquets!',
    },
    {
      q: 'What is your turnaround time?',
      a: 'Ready-to-ship items are dispatched within 1-2 business days. Custom crafted bouquets and bulk keychains typically take 3-5 business days to meticulously craft by hand.',
    },
    {
      q: 'How are the bouquets packaged for shipping?',
      a: 'Each bouquet is securely anchored inside a reinforced rigid gift box with acid-free tissue paper and bubble cushioning to guarantee that every petal arrives in picture-perfect shape.',
    },
  ];

  const currentFaqs = faqCategory === 'care' ? careFaqs : orderFaqs;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#F0EAE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#A45258]">
            Get In Touch & Care Guide
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2C2420]">
            Order Inquiries & Flower Care
          </h2>
          <p className="text-base text-[#675A52]">
            Learn how to keep your everlasting creations beautiful for years, or reach out to place your bespoke order.
          </p>
        </div>

        {/* Dedicated Flower Care Visual Cards Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#FAF5EE] border border-[#E9E1D4]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#A45258] uppercase tracking-wider flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D9777F]" />
              Everlasting Maintenance
            </span>
            <h3 className="font-display font-bold text-2xl text-[#2C2420] mt-1">
              How to Care for Your Pipe-Cleaner Creations
            </h3>
            <p className="text-xs sm:text-sm text-[#6B5C54] mt-1">
              Your handmade florals require zero watering, but following these four gentle steps will keep them looking newly bloomed forever.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1: Dusting */}
            <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#EBE3D7] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center mb-3">
                  <Wind className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#2C2420] mb-1">
                  Gentle Dusting
                </h4>
                <p className="text-xs text-[#6B5C54] leading-relaxed">
                  Use a soft, dry makeup brush or a hair dryer on the <em>cool, low setting</em> held 30cm away once every few months to whisk away dust.
                </p>
              </div>
              <span className="mt-3 text-[11px] font-semibold text-[#4F46E5]">No sticky rollers</span>
            </div>

            {/* Card 2: Sunlight */}
            <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#EBE3D7] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center mb-3">
                  <Sun className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#2C2420] mb-1">
                  Avoid Harsh UV Sun
                </h4>
                <p className="text-xs text-[#6B5C54] leading-relaxed">
                  Display in cozy ambient indoor light. Avoid hot, direct sunbeam windowsills to protect delicate pastel chenille dyes from sun-bleaching.
                </p>
              </div>
              <span className="mt-3 text-[11px] font-semibold text-[#D97706]">Bright indirect light</span>
            </div>

            {/* Card 3: Moisture */}
            <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#EBE3D7] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-3">
                  <Droplets className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#2C2420] mb-1">
                  Keep Completely Dry
                </h4>
                <p className="text-xs text-[#6B5C54] leading-relaxed">
                  Never put in water vases or humid bathrooms. The inner core is crafted with florist wire, so keeping it dry prevents oxidation.
                </p>
              </div>
              <span className="mt-3 text-[11px] font-semibold text-[#0284C7]">100% water-free</span>
            </div>

            {/* Card 4: Reshaping */}
            <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#EBE3D7] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mb-3">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#2C2420] mb-1">
                  Easy Reshaping
                </h4>
                <p className="text-xs text-[#6B5C54] leading-relaxed">
                  Every petal and stem has an adjustable wire backbone. If squished in transit or bags, gently fluff and sculpt each petal with your fingers.
                </p>
              </div>
              <span className="mt-3 text-[11px] font-semibold text-[#16A34A]">Pliable & resilient</span>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct WhatsApp & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Highlight Box */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#E8F8EE] to-[#DCFCE7] border border-[#B9E9CA] shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#16A34A] text-white flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#14532D]">
                    Fastest Response: WhatsApp
                  </h3>
                  <p className="text-xs text-[#166534]">
                    Typically replies in less than 30 minutes
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#14532D] leading-relaxed mb-5">
                Send us inspiration photos, ask about stock, or request quick custom arrangements directly on our official WhatsApp line.
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi KN Crafts & Co! 🌸 I would like to order or ask a question about your handmade flowers.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Open WhatsApp Chat ({WHATSAPP_DISPLAY})</span>
              </a>
            </div>

            {/* Studio Contact Cards */}
            <div className="space-y-3.5">
              <div className="p-4 rounded-2xl bg-[#FAF5EE] border border-[#EBE4D8] flex items-start gap-3.5">
                <Mail className="w-4 h-4 text-[#D9777F] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-[#2C2420]">Email Inquiries</div>
                  <a href={`mailto:${SHOP_EMAIL}`} className="text-[#6B5C54] hover:text-[#D9777F] transition-colors">
                    {SHOP_EMAIL}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF5EE] border border-[#EBE4D8] flex items-start gap-3.5">
                <Clock className="w-4 h-4 text-[#D9777F] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-[#2C2420]">Studio Craft Hours</div>
                  <div className="text-[#6B5C54]">Monday – Saturday: 9:00 AM – 7:00 PM</div>
                  <div className="text-[11px] text-[#8C7E75]">Handcrafting & packaging orders daily</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF5EE] border border-[#EBE4D8] flex items-start gap-3.5">
                <MapPin className="w-4 h-4 text-[#D9777F] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-[#2C2420]">Pickup & Delivery</div>
                  <div className="text-[#6B5C54]">Local studio pickup available · Tracked worldwide postal shipping</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form & FAQ */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Send a message form */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF6F0] border border-[#E8E0D2]">
              <h3 className="text-xl font-display font-bold text-[#2C2420] mb-1">
                Send Us a Note
              </h3>
              <p className="text-xs text-[#6B5C54] mb-5">
                Prefer email or have a wholesale/event inquiry? Fill out the quick form below.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#DCFCE7] border border-[#86EFAC] text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#16A34A] mx-auto" />
                  <h4 className="font-bold text-sm text-[#14532D]">Message Received!</h4>
                  <p className="text-xs text-[#166534]">
                    Thank you, {name || 'friend'}! We have received your note and will reply within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="mt-3 text-xs text-[#15803D] underline font-semibold cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2C2420] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maya Lin"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 text-xs bg-[#FFFDF9] border border-[#DDD3C6] rounded-xl text-[#2C2420] placeholder-[#A4978E] focus:outline-none focus:ring-2 focus:ring-[#D9777F]/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2C2420] mb-1.5">
                        Your Email or Phone
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. maya@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 text-xs bg-[#FFFDF9] border border-[#DDD3C6] rounded-xl text-[#2C2420] placeholder-[#A4978E] focus:outline-none focus:ring-2 focus:ring-[#D9777F]/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2C2420] mb-1.5">
                      How Can We Help? (Inquiry or Order Details)
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us what flower arrangement or keychains you're looking for, occasion date, or custom requests..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-3 text-xs bg-[#FFFDF9] border border-[#DDD3C6] rounded-xl text-[#2C2420] placeholder-[#A4978E] focus:outline-none focus:ring-2 focus:ring-[#D9777F]/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-[#2C2420] hover:bg-[#433832] rounded-xl transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* FAQ Accordion with Flower Care vs Ordering Switcher */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-display font-bold text-[#2C2420]">
                  Frequently Asked Questions
                </h3>
                
                {/* Category toggle */}
                <div className="flex items-center gap-1 p-1 bg-[#EFE8DC] rounded-xl text-xs font-semibold">
                  <button
                    onClick={() => {
                      setFaqCategory('care');
                      setOpenFaq(0);
                    }}
                    className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                      faqCategory === 'care'
                        ? 'bg-white text-[#8A3A40] shadow-xs'
                        : 'text-[#6B5C54] hover:text-[#2C2420]'
                    }`}
                  >
                    🌸 Flower Care
                  </button>
                  <button
                    onClick={() => {
                      setFaqCategory('orders');
                      setOpenFaq(0);
                    }}
                    className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                      faqCategory === 'orders'
                        ? 'bg-white text-[#8A3A40] shadow-xs'
                        : 'text-[#6B5C54] hover:text-[#2C2420]'
                    }`}
                  >
                    📦 Ordering & Delivery
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                {currentFaqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-[#EAE2D5] bg-[#FFFDF9] overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-[#2C2420] hover:text-[#D9777F] transition-colors cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#8C7E75] transition-transform duration-200 shrink-0 ml-2 ${
                            isOpen ? 'transform rotate-180 text-[#D9777F]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs text-[#5E5148] leading-relaxed border-t border-[#F5EFE6]">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
