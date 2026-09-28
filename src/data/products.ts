import { Product, GalleryItem, Review } from '../types';

import heroBouquetImg from '../assets/images/hero_pipe_cleaner_bouquet_1790577905263.jpg';
import tulipBouquetImg from '../assets/images/product_tulip_bouquet_1790577922044.jpg';
import sunflowerPotImg from '../assets/images/product_sunflower_pot_1790577938589.jpg';
import keychainImg from '../assets/images/product_custom_keychain_1790577952450.jpg';
import studioImg from '../assets/images/craft_artisan_studio_1790577966105.jpg';

export { heroBouquetImg, tulipBouquetImg, sunflowerPotImg, keychainImg, studioImg };

export const PRODUCTS: Product[] = [
  {
    id: 'tulip-whisper-bouquet',
    name: 'Pastel Dream Tulip Bouquet',
    category: 'bouquets',
    price: 32.0,
    originalPrice: 38.0,
    description: 'Hand-sculpted chenille tulips in soft cream and blush pink, wrapped in Korean translucent craft paper with satin ribbon.',
    longDescription: 'Each tulip is crafted with high-density plush chenille wire, carefully coiled into lush, velvety petals that hold their shape indefinitely. Wrapped in frosted pastel tissue paper and finished with an ivory grosgrain ribbon. Never fades, never wilts, and allergen-free.',
    image: tulipBouquetImg,
    tag: 'Bestseller',
    inStock: true,
    rating: 4.9,
    reviewsCount: 48,
    dimensions: '30cm H x 20cm W',
    craftTime: '3 hours handmade',
    colorOptions: ['Blush Pink & Cream', 'Butter Yellow & White', 'Lilac Lavender & Soft Peach', 'Sky Blue & Pearl'],
    features: ['5 full stem tulips + greenery', 'Customizable ribbon color', 'Everlasting velvet texture', 'Complimentary gift message tag']
  },
  {
    id: 'cheerful-sunflower-pot',
    name: 'Joyful Desk Sunflower in Pot',
    category: 'potted',
    price: 24.0,
    originalPrice: 28.0,
    description: 'Vibrant yellow chenille petals with a fluffy dark-cocoa center nestled in a textured mini ceramic pot.',
    longDescription: 'Bring permanent sunshine to any desk or study nook! This bright sunflower features over 20 hand-twisted petals surrounding a plush chenille core, anchored firmly into a weighted natural ceramic pot lined with faux moss.',
    image: sunflowerPotImg,
    tag: 'Customer Favorite',
    inStock: true,
    rating: 5.0,
    reviewsCount: 62,
    dimensions: '18cm H x 12cm W',
    craftTime: '2 hours handmade',
    colorOptions: ['Classic Golden Yellow', 'Sunset Orange Glow', 'Soft Lemon Pastel'],
    features: ['Sturdy ceramic pot included', 'Bendable leaves and stem', 'Zero watering required', 'Ideal for graduation & office gifts']
  },
  {
    id: 'grand-meadow-bouquet',
    name: 'Everlasting Meadow Grand Bouquet',
    category: 'bouquets',
    price: 52.0,
    originalPrice: 60.0,
    description: 'Luxe floral arrangement of garden roses, chamomile daisies, soft lavender sprigs, and delicate baby’s breath.',
    longDescription: 'A statement centerpiece featuring 12 individually handcrafted stems. We blend warm blush roses, perky white daisies with golden centers, and lavender buds to simulate a wild English cottage garden that lasts for years.',
    image: heroBouquetImg,
    tag: 'Signature Creation',
    inStock: true,
    rating: 4.9,
    reviewsCount: 37,
    dimensions: '38cm H x 28cm W',
    craftTime: '5 hours handmade',
    colorOptions: ['Romantic Pastel Mix', 'Golden Sunset Garden', 'Vintage Lavender & Sage'],
    features: ['12 assorted handcrafted stems', 'Luxury multi-layer wrapping', 'Complimentary display vase hook', 'Handwritten keepsake card']
  },
  {
    id: 'blossom-pearl-keychain',
    name: 'Blossom & Pearl Custom Keychain',
    category: 'keychains',
    price: 15.0,
    description: 'Delicate fuzzy 5-petal flower charm accented with faux baroque pearl beads and gold-tone swivel clasp.',
    longDescription: 'Carry handmade charm wherever you go. Made with ultra-soft miniature chenille, secured with wire reinforcement so it withstands daily bag and key friction. Optional hand-stamped gold metal initial charm included.',
    image: keychainImg,
    tag: 'Personalized',
    inStock: true,
    rating: 4.8,
    reviewsCount: 84,
    dimensions: '9cm total length',
    craftTime: '45 mins handmade',
    colorOptions: ['Lavender Violet', 'Sakura Blossom Pink', 'Matcha Mint Green', 'Buttercup Yellow'],
    features: ['Reinforced core for durability', 'High-shine gold swivel lobster clasp', 'Free custom letter initial charm', 'Cute organza pouch packaging']
  },
  {
    id: 'chamomile-daisy-stem-trio',
    name: 'Chamomile Daisy Stem Trio',
    category: 'stems',
    price: 18.0,
    description: 'Three playful white and buttery-yellow daisies on slender wire stems, perfect for minimalist bud vases.',
    longDescription: 'Designed for single-stem ceramic vases and windowsill styling. Bend and shape each flower stem to your desired natural curve.',
    image: heroBouquetImg,
    tag: 'Minimalist Pick',
    inStock: true,
    rating: 4.9,
    reviewsCount: 29,
    dimensions: '25cm length each',
    craftTime: '1.5 hours handmade',
    colorOptions: ['Pure White & Butter Core', 'Baby Blue & Cream', 'Pastel Pink & Soft Lemon'],
    features: ['3 individual bendable stems', 'Fluffy 3D daisy heads', 'Fits standard narrow vases', 'Gift-ready craft sleeve']
  },
  {
    id: 'cottage-bunny-keychain',
    name: 'Bunny & Flower Charm Keychain',
    category: 'keychains',
    price: 17.0,
    description: 'Adorable fuzzy miniature bunny holding a tiny pipe-cleaner flower bud, paired with a pastel bead loop.',
    longDescription: 'Pure serotonin on your tote bag or car keys. Our artisan hand-shapes the bunny ears, cheeks, and tiny paws with micro chenille fibers.',
    image: keychainImg,
    tag: 'New Design',
    inStock: true,
    rating: 5.0,
    reviewsCount: 19,
    dimensions: '10cm total length',
    craftTime: '1 hour handmade',
    colorOptions: ['Cream Bunny & Pink Rose', 'Grey Bunny & Bluebell', 'Caramel Bunny & Daisy'],
    features: ['Artisan sculpted animal motif', 'Sturdy gold hardware', 'Anti-snag fiber finish', 'Popular as bestie matching gifts']
  },
  {
    id: 'lavender-field-potted',
    name: 'Provence Lavender Pot',
    category: 'potted',
    price: 22.0,
    description: 'cluster of soft purple chenille lavender spires planted in a rustic white ceramic cup.',
    longDescription: 'All the calm beauty of a French lavender field without the falling dried petals. Soft to the touch and adds a gentle touch of purple to bookshelves and dressers.',
    image: sunflowerPotImg,
    tag: 'Calming Decor',
    inStock: true,
    rating: 4.9,
    reviewsCount: 31,
    dimensions: '20cm H x 11cm W',
    craftTime: '2 hours handmade',
    colorOptions: ['Deep French Violet', 'Soft Lilac Mist', 'Two-Tone Ombre Purple'],
    features: ['7 lavender spires in pot', 'Ceramic pot included', 'Zero maintenance', 'Cozy cottagecore aesthetic']
  },
  {
    id: 'rose-whisper-single-stem',
    name: 'Velvet English Garden Rose',
    category: 'stems',
    price: 14.0,
    description: 'Layered spiral petals made from multi-tone velvety rose chenille on a realistic thornless foliage stem.',
    longDescription: 'An everlasting symbol of affection. Crafted with over 3 meters of tightly gathered chenille wire that creates rich petal depth and soft light gradients.',
    image: tulipBouquetImg,
    tag: 'Classic Romance',
    inStock: true,
    rating: 4.9,
    reviewsCount: 42,
    dimensions: '32cm length',
    craftTime: '1.5 hours handmade',
    colorOptions: ['Dusty Blush Pink', 'Deep Crimson Merlot', 'Ivory Champagne Cream', 'Sky Powder Blue'],
    features: ['Realistic spiraled petal layers', 'Bendable foliage stem', 'Tied with chiffon ribbon', 'Everlasting anniversary gift']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'University Graduation Surprise',
    category: 'Bouquets',
    image: heroBouquetImg,
    description: 'A customized 9-stem pastel daisy and tulip bouquet created for a medicine graduate in Edinburgh.',
    occasion: 'Graduation Celebration'
  },
  {
    id: 'gal-2',
    title: 'Sunny Morning Desk Companion',
    category: 'Potted Blooms',
    image: sunflowerPotImg,
    description: 'Our cheerful sunflower potted in warm beige ceramic, bringing bright vibes to a designer work desk.',
    occasion: 'Home Office Decor'
  },
  {
    id: 'gal-3',
    title: 'Matching Sister Keychains',
    category: 'Keychains',
    image: keychainImg,
    description: 'Two pastel blossom keychains with engraved initial charms gifted between two best friends.',
    occasion: 'Friendship Keepsake'
  },
  {
    id: 'gal-4',
    title: 'Anniversary Keepsake Bouquet',
    category: 'Bouquets',
    image: tulipBouquetImg,
    description: 'Blush pink and ivory tulips that never wither, celebrating 3 years of love.',
    occasion: 'Anniversary Surprise'
  },
  {
    id: 'gal-5',
    title: 'Artisan Workshop Snapshot',
    category: 'Behind The Scenes',
    image: studioImg,
    description: 'Twisting fine chenille wire by hand with botanical precision at our quiet sunlit workspace.',
    occasion: 'Artisan Craftsmanship'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Camilla Thorne',
    city: 'Seattle, WA',
    rating: 5,
    text: 'I ordered the Pastel Dream Bouquet for my best friend’s graduation. Fresh flowers always die by the weekend, but she still has this on her bedside table looking gorgeous! The texture is so soft and fuzzy.',
    productName: 'Pastel Dream Tulip Bouquet',
    date: '2 weeks ago'
  },
  {
    id: 'rev-2',
    name: 'Julianne Miller',
    city: 'Toronto, ON',
    rating: 5,
    text: 'The desk sunflower is the cutest thing I own. Ordering via WhatsApp was seamless—the seller helped me customize the ribbon and sent a photo before dispatching.',
    productName: 'Joyful Desk Sunflower',
    date: '1 month ago'
  },
  {
    id: 'rev-3',
    name: 'Aria & Chloe',
    city: 'Melbourne, AU',
    rating: 5,
    text: 'We bought matching initial keychains for our college backpacks. It is so well made, the wires don’t bend out of shape and the pearl charm is high quality!',
    productName: 'Blossom & Pearl Keychain',
    date: '3 weeks ago'
  }
];

export const WHATSAPP_NUMBER = '1234567890'; // formatted international number placeholder
export const WHATSAPP_DISPLAY = '+1 (234) 567-890';
export const SHOP_EMAIL = 'hello@kncraftsandco.com';
export const INSTAGRAM_HANDLE = '@kncraftsandco';
