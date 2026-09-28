import React, { useState } from 'react';
import { Product, ProductCategory } from '../types';
import { PRODUCTS, WHATSAPP_NUMBER } from '../data/products';
import { ShoppingBag, MessageCircle, Eye, Star, Search, Sparkles } from 'lucide-react';
import { createWhatsAppProductOrderLink } from '../utils/whatsapp';

interface ProductsSectionProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, selectedColor?: string) => void;
  onInstantOrder: (product: Product) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onAddToCart,
  onInstantOrder,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const categories: { label: string; value: ProductCategory }[] = [
    { label: 'All Creations', value: 'all' },
    { label: 'Bouquets', value: 'bouquets' },
    { label: 'Potted Blooms', value: 'potted' },
    { label: 'Custom Keychains', value: 'keychains' },
    { label: 'Single Stems', value: 'stems' },
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <section id="products" className="py-16 md:py-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#A45258]">
            Handcrafted Collection
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2C2420]">
            Our Everlasting Florals & Charms
          </h2>
          <p className="text-base text-[#675A52]">
            Each piece is hand-twisted with soft plush chenille, available in custom colors and ready for gifting.
          </p>
        </div>

        {/* Filter Bar & Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EFE8DC] rounded-2xl w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3.5 py-2 text-xs font-medium rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-[#FFFDF9] text-[#2C2420] shadow-xs font-semibold'
                    : 'text-[#6B5C54] hover:text-[#2C2420]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-2.5 w-full md:w-auto">
            <div className="relative flex-1 md:w-56">
              <Search className="w-4 h-4 text-[#8C7E75] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search florals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-[#FFFDF9] border border-[#E5DDD0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D9777F]/30 text-[#2C2420] placeholder-[#A4978E]"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="py-2 px-3 text-xs bg-[#FFFDF9] border border-[#E5DDD0] rounded-xl text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#D9777F]/30 cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#FFFDF9] rounded-3xl border border-[#E9E1D4]">
            <p className="text-sm text-[#796E65]">No handmade items found matching your filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-[#D9777F] font-semibold underline underline-offset-4 cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const whatsAppUrl = createWhatsAppProductOrderLink(
                product.name,
                product.price,
                product.colorOptions[0]
              );

              return (
                <div
                  key={product.id}
                  className="group bg-[#FFFDF9] rounded-3xl border border-[#EBE4D8] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Product Card Top: Image Area */}
                  <div className="relative aspect-4/3 overflow-hidden bg-[#F4EFE7]">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Subtle text tag top-left */}
                    {product.tag && (
                      <div className="absolute top-3 left-3 bg-[#FFFDF9]/95 backdrop-blur-xs text-[#8A3A40] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs border border-[#F2C7CD]/40">
                        {product.tag}
                      </div>
                    )}

                    {/* Quick view button overlay */}
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1.5 text-white text-xs font-semibold cursor-pointer"
                      aria-label={`View details of ${product.name}`}
                    >
                      <span className="bg-white/90 backdrop-blur-xs text-[#2C2420] px-3.5 py-2 rounded-full shadow-md flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        Quick View
                      </span>
                    </button>
                  </div>

                  {/* Product Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Quiet metadata */}
                      <div className="flex items-center justify-between text-xs text-[#8C7E75] mb-1.5">
                        <span className="capitalize">{product.category}</span>
                        <div className="flex items-center gap-1 text-[#C48624]">
                          <Star className="w-3 h-3 fill-current" />
                          <span className="font-semibold text-stone-700 text-[11px]">
                            {product.rating.toFixed(1)}
                          </span>
                          <span className="text-[10px] text-stone-400">({product.reviewsCount})</span>
                        </div>
                      </div>

                      {/* Product Name */}
                      <h3
                        onClick={() => onSelectProduct(product)}
                        className="font-display font-bold text-base text-[#2C2420] hover:text-[#D9777F] transition-colors cursor-pointer line-clamp-1"
                        title={product.name}
                      >
                        {product.name}
                      </h3>

                      {/* Short Description */}
                      <p className="mt-1 text-xs text-[#6B5C54] line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Price and Action Buttons */}
                    <div className="mt-4 pt-3 border-t border-[#F2ECE2]">
                      <div className="flex items-baseline justify-between mb-3">
                        <div className="flex items-baseline gap-2">
                          <span className="text-base font-bold text-[#2C2420] font-sans tabular-nums">
                            ${product.price.toFixed(2)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-[#A89C94] line-through tabular-nums">
                              ${product.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-[#A45258] font-medium">
                          {product.craftTime}
                        </span>
                      </div>

                      {/* Action buttons row */}
                      <div className="grid grid-cols-2 gap-2">
                        {/* Order Now instant modal trigger */}
                        <button
                          onClick={() => onInstantOrder(product)}
                          className="w-full py-2.5 px-3 text-xs font-semibold text-white bg-[#D9777F] hover:bg-[#C9636B] rounded-xl transition-colors cursor-pointer text-center whitespace-nowrap shadow-xs"
                        >
                          Order Now
                        </button>

                        {/* WhatsApp Direct Buy Link */}
                        <a
                          href={whatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-3 text-xs font-semibold text-[#14532D] bg-[#DCFCE7] hover:bg-[#BBF7D0] rounded-xl transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                          title="Instant order via WhatsApp"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-current" />
                          <span>WhatsApp</span>
                        </a>
                      </div>

                      {/* Secondary quick add to bag */}
                      <button
                        onClick={() => onAddToCart(product)}
                        className="mt-2 w-full py-1.5 text-[11px] font-medium text-[#6B5C54] hover:text-[#2C2420] bg-transparent hover:bg-[#F2ECE2] rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Add to Gift Bag</span>
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Custom Order Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FDE8ED] via-[#FFF3E8] to-[#F1F6F2] border border-[#F2D7DD] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A45258] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Special Occasion or Graduation?
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#2C2420]">
              Need a custom color combination or bouquet size?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B5C54]">
              We handcraft bespoke arrangements matched to wedding themes, school colors, or specific initials.
            </p>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi KN Crafts & Co! 🌸 I would like to request a bespoke custom flower arrangement.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-[#14532D] bg-white border border-[#86EFAC] rounded-full hover:bg-[#F0FDF4] transition-colors shadow-xs flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current text-[#16A34A]" />
            <span>Chat Custom Request</span>
          </a>
        </div>

      </div>
    </section>
  );
};
