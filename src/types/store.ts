export type ShadeId = 'obsidian' | 'havana' | 'cognac' | 'neutral';

export interface PolishShade {
  id: ShadeId;
  name: string;
  hex: string;
  leatherPair: string;
  finishNote: string;
  stockLabel: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  pricePhp: number;
  volumeOrSpec: string;
  image: string;
  imageAlt: string;
  description: string;
  supportsShade?: boolean;
}

export interface CartItem {
  key: string;
  productId: string;
  name: string;
  shadeName?: string;
  shadeHex?: string;
  pricePhp: number;
  quantity: number;
  image: string;
}

export interface WhyUsPillar {
  number: string;
  title: string;
  summary: string;
  detail: string;
}

export interface HowToStep {
  stepNumber: string;
  title: string;
  duration: string;
  toolUsed: string;
  motion: string;
  pasteAmount: string;
  instruction: string;
  proTip: string;
}

export type FormulaIngredientId = 'banana-peel' | 'coconut-charcoal' | 'plant-wax' | 'matte-tin';

export interface FormulaIngredient {
  id: FormulaIngredientId;
  code: string;
  name: string;
  origin: string;
  role: string;
  benefit: string;
  ecoMetric: string;
}

export type FaqCategory = 'All' | 'Product & Leather' | 'Application' | 'Shipping & PHP Payment';

export interface FaqItem {
  id: string;
  category: Exclude<FaqCategory, 'All'>;
  question: string;
  answer: string;
}

export type PaymentMethod = 'gcash' | 'cod' | 'bank';

export interface CheckoutFormData {
  fullName: string;
  mobile: string;
  streetAddress: string;
  cityProvince: string;
  paymentMethod: PaymentMethod;
}

export interface CheckoutValidationErrors {
  fullName?: string;
  mobile?: string;
  streetAddress?: string;
  cityProvince?: string;
}

export interface OrderReceipt {
  orderNumber: string;
  createdAt: string;
  customerName: string;
  cityProvince: string;
  paymentMethod: PaymentMethod;
  items: CartItem[];
  subtotalPhp: number;
  shippingPhp: number;
  totalPhp: number;
}
