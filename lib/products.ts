/**
 * Venus Global Exports — Product Data
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
  origin: string;
  variants: ProductVariant[];
  packaging: string[]; // [PLACEHOLDER]
  specifications: Record<string, string>; // [PLACEHOLDER]
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
      "[PLACEHOLDER — Please provide product description including varieties, quality details, and key differentiators for this product category.]",
    origin: "India",
    variants: [
      {
        name: "Basmati Rice",
        description: "[PLACEHOLDER — Variety description]",
      },
      {
        name: "Non-Basmati Rice",
        description: "[PLACEHOLDER — Variety description]",
      },
      {
        name: "Parboiled Rice",
        description: "[PLACEHOLDER — Variety description]",
      },
      {
        name: "Brown Rice",
        description: "[PLACEHOLDER — Variety description]",
      },
    ],
    packaging: [
      "[PLACEHOLDER — Packaging option 1, e.g. 1kg, 5kg, 10kg bags]",
      "[PLACEHOLDER — Packaging option 2, e.g. 25kg, 50kg bulk sacks]",
      "[PLACEHOLDER — Custom packaging available on request]",
    ],
    specifications: {
      Moisture: "[PLACEHOLDER — e.g. Max 14%]",
      Purity: "[PLACEHOLDER — e.g. Min 98%]",
      "Broken Grains": "[PLACEHOLDER — e.g. Max 2%]",
      "Foreign Matter": "[PLACEHOLDER — e.g. Nil]",
    },
    image: "/images/product-rice.jpg",
    heroImage: "/images/product-rice.jpg",
    color: "amber",
    availability: "[PLACEHOLDER — Season / Year-round availability]",
  },
  {
    slug: "coconut",
    name: "Coconut",
    category: "Tree Produce",
    tagline: "Nature's finest, fresh from the source.",
    description:
      "[PLACEHOLDER — Please provide product description including varieties, quality details, and key differentiators for this product category.]",
    origin: "India",
    variants: [
      {
        name: "Fresh Whole Coconut",
        description: "[PLACEHOLDER — Variety description]",
      },
      {
        name: "Desiccated Coconut",
        description: "[PLACEHOLDER — Variety description]",
      },
      {
        name: "Coconut Oil",
        description: "[PLACEHOLDER — Variety description]",
      },
      {
        name: "Coconut Shell Products",
        description: "[PLACEHOLDER — Variety description]",
      },
    ],
    packaging: [
      "[PLACEHOLDER — Packaging option 1]",
      "[PLACEHOLDER — Packaging option 2]",
      "[PLACEHOLDER — Custom packaging available on request]",
    ],
    specifications: {
      Moisture: "[PLACEHOLDER]",
      "Oil Content": "[PLACEHOLDER]",
      Size: "[PLACEHOLDER]",
      Grade: "[PLACEHOLDER]",
    },
    image: "/images/product-coconut.jpg",
    heroImage: "/images/product-coconut.jpg",
    color: "orange",
    availability: "[PLACEHOLDER — Season / Year-round availability]",
  },
  {
    slug: "vegetables",
    name: "Vegetables",
    category: "Fresh Produce",
    tagline: "Farm-fresh, carefully harvested and packed.",
    description:
      "[PLACEHOLDER — Please provide product description including varieties, quality details, and key differentiators for this product category.]",
    origin: "India",
    variants: [
      {
        name: "Leafy Vegetables",
        description: "[PLACEHOLDER — Variety description]",
      },
      {
        name: "Root Vegetables",
        description: "[PLACEHOLDER — Variety description]",
      },
      {
        name: "Exotic Vegetables",
        description: "[PLACEHOLDER — Variety description]",
      },
      {
        name: "Seasonal Vegetables",
        description: "[PLACEHOLDER — Variety description]",
      },
    ],
    packaging: [
      "[PLACEHOLDER — Packaging option 1]",
      "[PLACEHOLDER — Packaging option 2]",
      "[PLACEHOLDER — Cold chain / refrigerated options]",
    ],
    specifications: {
      Grade: "[PLACEHOLDER]",
      "Shelf Life": "[PLACEHOLDER]",
      "Storage Temp": "[PLACEHOLDER]",
      Certification: "[PLACEHOLDER]",
    },
    image: "/images/product-vegetables.jpg",
    heroImage: "/images/product-vegetables.jpg",
    color: "green",
    availability: "[PLACEHOLDER — Season / Year-round availability]",
  },
  {
    slug: "fruits",
    name: "Fruits",
    category: "Fresh Produce",
    tagline: "Tropical freshness, exported with care.",
    description:
      "[PLACEHOLDER — Please provide product description including varieties, quality details, and key differentiators for this product category.]",
    origin: "India",
    variants: [
      {
        name: "Tropical Fruits",
        description: "[PLACEHOLDER — Variety description]",
      },
      {
        name: "Citrus Fruits",
        description: "[PLACEHOLDER — Variety description]",
      },
      {
        name: "Stone Fruits",
        description: "[PLACEHOLDER — Variety description]",
      },
      {
        name: "Seasonal Fruits",
        description: "[PLACEHOLDER — Variety description]",
      },
    ],
    packaging: [
      "[PLACEHOLDER — Packaging option 1]",
      "[PLACEHOLDER — Packaging option 2]",
      "[PLACEHOLDER — Export-grade cold chain options]",
    ],
    specifications: {
      Grade: "[PLACEHOLDER]",
      "Brix Level": "[PLACEHOLDER]",
      "Shelf Life": "[PLACEHOLDER]",
      "Storage Temp": "[PLACEHOLDER]",
    },
    image: "/images/product-fruits.jpg",
    heroImage: "/images/product-fruits.jpg",
    color: "yellow",
    availability: "[PLACEHOLDER — Season / Year-round availability]",
  },
  {
    slug: "spices",
    name: "Spices",
    category: "Spices & Herbs",
    tagline: "The authentic flavours of India, globally exported.",
    description:
      "[PLACEHOLDER — Please provide product description including varieties, quality details, and key differentiators for this product category.]",
    origin: "India",
    variants: [
      {
        name: "Whole Spices",
        description: "[PLACEHOLDER — Variety description]",
      },
      {
        name: "Ground Spices",
        description: "[PLACEHOLDER — Variety description]",
      },
      {
        name: "Spice Blends",
        description: "[PLACEHOLDER — Variety description]",
      },
      {
        name: "Organic Spices",
        description: "[PLACEHOLDER — Variety description]",
      },
    ],
    packaging: [
      "[PLACEHOLDER — Packaging option 1]",
      "[PLACEHOLDER — Packaging option 2]",
      "[PLACEHOLDER — Bulk packaging options]",
    ],
    specifications: {
      Moisture: "[PLACEHOLDER]",
      Purity: "[PLACEHOLDER]",
      "Volatile Oil": "[PLACEHOLDER]",
      "Shelf Life": "[PLACEHOLDER]",
    },
    image: "/images/product-spices.jpg",
    heroImage: "/images/product-spices.jpg",
    color: "red",
    availability: "[PLACEHOLDER — Season / Year-round availability]",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}
