/**
 * Venus Export — Product Data
 * ====================================
 * All product information is defined here.
 * Fields marked [PLACEHOLDER] should be filled with real client data.
 * The data structure is typed and ready for CMS integration.
 */

export interface ProductVariant {
  name: string;
  description: string; // [PLACEHOLDER]
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string; // [PLACEHOLDER]
  metaDescription: string;
  origin: string;
  variants: ProductVariant[];
  packaging: string[]; // [PLACEHOLDER]
  image: string;
  heroImage: string;
  color: string; // Tailwind color for accent
  availability: string; // [PLACEHOLDER]
  gallery?: string[];
}

export const PRODUCTS: Product[] = [
  {
    slug: "rice",
    name: "Rice",
    category: "Grains",
    tagline: "Premium quality grains, naturally grown.",
    description:
      "Our premium rice selection represents the pinnacle of Indian agriculture. Sourced directly from highly vetted farms across the fertile plains of India, every grain is milled using state-of-the-art technology to preserve aroma, texture, and nutritional value. We guarantee strict adherence to international food safety standards, ensuring that every shipment delivers the authentic taste and uncompromising quality expected by international markets.",
    metaDescription: "Import premium, authentic Indian rice including Sona Masoori, Basmati, and Palakkadan Matta from Venus Export. We guarantee quality and safety.",
    origin: "India",
    variants: [
      {
        name: "Sona Masoori",
        description: "A lightweight and aromatic medium-grain rice, highly prized for its exceptional taste and minimal starch content. Perfect for daily consumption and versatile culinary applications.",
      },
      {
        name: "Basmati",
        description: "The crown jewel of Indian rice, known worldwide for its extraordinary length, delicate texture, and captivating aroma. Aged to perfection to ensure separate, fluffy grains upon cooking.",
      },
      {
        name: "Palakkadan Matta",
        description: "An indigenous red rice variety famous for its distinct earthy flavor and high nutritional profile. Rich in fiber and essential minerals, offering a wholesome dining experience.",
      },
    ],
    packaging: [
      "1kg, 5kg, 10kg premium retail-ready BOPP bags",
      "25kg, 50kg PP/Jute bags for wholesale and bulk distribution",
      "Custom vacuum packaging available upon request",
    ],
    image: "/images/product-rice.jpg",
    heroImage: "/images/product-rice.jpg",
    color: "amber",
    availability: "Year-round consistent supply",
  },
  {
    slug: "coconut",
    name: "Coconut",
    category: "Tree Produce",
    tagline: "Nature's finest, fresh from the source.",
    description:
      "Sourced from the finest coastal plantations, our coconuts are celebrated for their thick meat, sweet water, and high oil content. Through rigorous quality control from harvesting to packaging, we ensure that the natural freshness and nutritional integrity of the coconut are flawlessly maintained for our international clientele.",
    metaDescription: "Venus Export supplies premium fresh whole coconuts, desiccated coconut, and virgin coconut oil from India's finest coastal plantations.",
    origin: "India",
    variants: [
      {
        name: "Fresh Whole Coconut",
        description: "Hand-picked mature coconuts with rich, sweet water and thick, creamy kernel. Carefully graded for size and weight.",
      },
      {
        name: "Desiccated Coconut",
        description: "Finely grated, dried, and unsweetened coconut meat. Available in fine and macroscopic grades for bakery and confectionery use.",
      },
      {
        name: "Virgin Coconut Oil",
        description: "Cold-pressed, unrefined coconut oil extracted from fresh coconut milk, preserving natural antioxidants and aroma.",
      },
      {
        name: "Coconut Shell Products",
        description: "Eco-friendly activated carbon and charcoal briquettes processed from premium coconut shells.",
      },
    ],
    packaging: [
      "25-30 nuts per PP mesh bag for fresh whole coconuts",
      "10kg, 25kg multi-wall kraft paper bags for desiccated coconut",
      "Food-grade IBC totes and retail glass jars for coconut oil",
    ],
    image: "/images/product-coconut-v2.jpg",
    heroImage: "/images/product-coconut-v2.jpg",
    color: "orange",
    availability: "Year-round consistent supply",
  },
  {
    slug: "vegetables",
    name: "Vegetables",
    category: "Fresh Produce",
    tagline: "Farm-fresh, carefully harvested and packed.",
    description:
      "Our farm-fresh vegetables are meticulously cultivated using sustainable farming practices. We implement an unbroken, state-of-the-art cold chain logistics system immediately after harvest, ensuring that our produce retains its crispness, vibrant color, and nutritional value upon arriving at international destinations.",
    metaDescription: "Source export-grade Indian vegetables, from crisp greens to root vegetables, packed with our state-of-the-art cold chain logistics for maximum freshness.",
    origin: "India",
    variants: [
      {
        name: "Leafy Vegetables",
        description: "Vibrant, nutrient-dense greens including spinach, amaranth, and moringa leaves, harvested at peak freshness.",
      },
      {
        name: "Root Vegetables",
        description: "Premium quality onions, potatoes, carrots, and beetroots with excellent shelf life and robust flavor profiles.",
      },
      {
        name: "Gourds & Melons",
        description: "Fresh bitter gourd, bottle gourd, and ridge gourd carefully selected for optimal size and tenderness.",
      },
      {
        name: "Exotic Vegetables",
        description: "Export-quality okra, green chilies, and drumsticks sorted and graded for international supermarkets.",
      },
    ],
    packaging: [
      "Corrugated ventilated boxes (3kg, 5kg, 10kg)",
      "Mesh bags and customized punnet packaging for retail",
      "Temperature-controlled active cold chain containers",
    ],
    image: "/images/product-vegetables-v2.jpg",
    heroImage: "/images/product-vegetables-v2.jpg",
    color: "green",
    availability: "Seasonal varieties / Year-round staples",
  },
  {
    slug: "fruits",
    name: "Fruits",
    category: "Fresh Produce",
    tagline: "Tropical freshness, exported with care.",
    description:
      "Blessed with diverse agro-climatic zones, our selection of Indian fruits offers unparalleled sweetness, texture, and aroma. Each fruit is hand-picked at the optimal stage of maturity, meticulously graded, and carefully packed using advanced techniques to ensure a flawless presentation and taste experience worldwide.",
    metaDescription: "Import premium tropical Indian fruits including Alphonso Mangoes, Pomegranates, and Grapes, carefully exported worldwide by Venus Export.",
    origin: "India",
    variants: [
      {
        name: "Mangoes",
        description: "The world-renowned Alphonso, Kesar, and Banganapalli varieties, celebrated for their rich, sweet, and aromatic golden pulp.",
      },
      {
        name: "Pomegranates",
        description: "Premium Bhagwa variety featuring deep ruby-red arils, soft seeds, and exceptionally high antioxidant levels.",
      },
      {
        name: "Bananas",
        description: "Flawless Cavendish bananas, systematically cultivated and shipped under strictly controlled atmospheric conditions.",
      },
      {
        name: "Grapes",
        description: "Crisp, sweet, and seedless varieties including Thompson, Sharad, and Crimson, grown with export-grade care.",
      },
    ],
    packaging: [
      "Customized foam-netted corrugated boxes",
      "Retail-ready punnets and clam-shells",
      "Controlled Atmosphere (CA) shipping containers",
    ],
    image: "/images/product-fruits-v3.jpg",
    heroImage: "/images/product-fruits-v3.jpg",
    color: "yellow",
    availability: "Seasonal (Mangoes, Grapes) / Year-round (Bananas)",
  },
  {
    slug: "spices",
    name: "Spices",
    category: "Spices & Herbs",
    tagline: "The authentic flavours of India, exported worldwide.",
    description:
      "India is the historical epicenter of the spice trade, and our premium spice collection honors that legacy. We source the finest herbs and spices, utilizing advanced processing and sterilization techniques to lock in essential volatile oils. Our spices deliver robust, authentic flavors and vibrant colors to kitchens and food manufacturers around the world.",
    metaDescription: "Authentic, high-quality Indian spices including black pepper, turmeric, cardamom, and spice blends available for bulk export from Venus Export.",
    origin: "India",
    variants: [
      {
        name: "Whole Spices",
        description: "Premium unground spices including Black Pepper, Green Cardamom, Cumin, and Cloves, retaining maximum volatile oils.",
      },
      {
        name: "Ground Spices",
        description: "Finely milled Turmeric, Chili, and Coriander powders processed under low temperatures to preserve color and aroma.",
      },
      {
        name: "Spice Blends",
        description: "Authentic, traditional masalas and custom formulations blended perfectly for diverse culinary requirements.",
      },
      {
        name: "Oleoresins & Extracts",
        description: "High-concentration spice extracts and essential oils tailored for the food processing and flavoring industries.",
      },
    ],
    packaging: [
      "10kg, 25kg multi-wall paper bags with inner moisture liners",
      "Bulk PP bags and customized retail pouches",
      "Airtight drums for oleoresins and extracts",
    ],
    image: "/images/product-spices-v2.jpg",
    heroImage: "/images/product-spices-v2.jpg",
    color: "red",
    availability: "Year-round consistent supply",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}
