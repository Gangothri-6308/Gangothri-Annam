import React, { useState } from 'react';
import { GALLERY_ITEMS, REVIEWS } from '../data/products';
import { GalleryItem } from '../types';
import { Eye, X, Star, Heart, Camera } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const filterOptions = ['All', 'Bouquets', 'Potted Blooms', 'Keychains'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === 'All') return true;
    return item.category.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#F0EAE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#A45258]">
            Customer Moments & Looks
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2C2420]">
            Handmade in the Wild
          </h2>
          <p className="text-base text-[#675A52]">
            Peek into how our fuzzy everlasting florals brighten graduations, workstations, gifts, and daily commutes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap ${
                filter === opt
                  ? 'bg-[#2C2420] text-white shadow-xs'
                  : 'bg-[#F5EFE6] text-[#6B5C54] hover:bg-[#EAE1D5] hover:text-[#2C2420]'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group relative rounded-3xl overflow-hidden bg-[#FAF5EE] border border-[#E9E1D4] cursor-pointer shadow-xs hover:shadow-md transition-all duration-300 ${
                idx === 0 ? 'sm:col-span-2 lg:col-span-2 aspect-16/9 sm:aspect-16/8' : 'aspect-4/3'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Caption content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex items-end justify-between">
                <div>
                  <span className="text-[11px] font-medium tracking-wide uppercase text-[#FCD5D9]">
                    {item.occasion}
                  </span>
                  <h3 className="text-base sm:text-lg font-display font-bold text-white mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-1 mt-1 max-w-md hidden sm:block">
                    {item.description}
                  </p>
                </div>

                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 group-hover:bg-[#D9777F] transition-colors">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Tag indicator */}
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full border border-white/20">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Customer Proof Testimonials Section */}
        <div className="mt-16 pt-12 border-t border-[#F2ECE2]">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A45258]">
              Words of Warmth
            </span>
            <h3 className="text-2xl font-display font-bold text-[#2C2420] mt-1">
              Loved by gift givers worldwide
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-3xl bg-[#FAF6F0] border border-[#EDE5DA] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#C48624] mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A3E38] leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E8DFC9] flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-[#2C2420]">{review.name}</p>
                    <p className="text-[#8C7E75] text-[11px]">{review.city}</p>
                  </div>
                  <span className="text-[#A45258] text-[11px] font-medium">
                    {review.productName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#FFFDF9] rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-4/3 sm:aspect-16/10 bg-stone-900">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#A45258] mb-1">
                <span>{selectedItem.occasion}</span>
                <span>·</span>
                <span>{selectedItem.category}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-[#2C2420]">
                {selectedItem.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#5E5148] leading-relaxed">
                {selectedItem.description}
              </p>
              
              <div className="mt-5 pt-4 border-t border-[#F2ECE2] flex items-center justify-between">
                <span className="text-xs text-[#8C7E75]">
                  Want something like this?
                </span>
                <a
                  href={`#custom-orders`}
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#D9777F] hover:bg-[#C9636B] rounded-full transition-colors"
                >
                  Start Custom Order
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
