import {
  FREE_SHIPPING_THRESHOLD_PHP,
  STANDARD_SHIPPING_PHP,
} from '../data/catalog';
import type {
  CartItem,
  CheckoutFormData,
  CheckoutValidationErrors,
  PolishShade,
  Product,
} from '../types/store';

export function formatPHP(amount: number): string {
  const safeAmount = Number.isFinite(amount) ? amount : 0;
  return `₱${safeAmount.toLocaleString('en-PH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function buildCartKey(productId: string, shadeId?: string): string {
  return shadeId ? `${productId}__${shadeId}` : productId;
}

export function addItemToCart(
  cart: CartItem[],
  product: Product,
  quantity: number,
  shade?: PolishShade
): CartItem[] {
  const safeQty = Math.max(1, Math.floor(quantity));
  const key = buildCartKey(product.id, shade?.id);
  const existingIndex = cart.findIndex((item) => item.key === key);

  if (existingIndex >= 0) {
    return cart.map((item, idx) =>
      idx === existingIndex
        ? { ...item, quantity: item.quantity + safeQty }
        : item
    );
  }

  const newItem: CartItem = {
    key,
    productId: product.id,
    name: product.name,
    shadeName: shade?.name,
    shadeHex: shade?.hex,
    pricePhp: product.pricePhp,
    quantity: safeQty,
    image: product.image,
  };

  return [...cart, newItem];
}

export function updateCartItemQuantity(
  cart: CartItem[],
  key: string,
  delta: number
): CartItem[] {
  return cart
    .map((item) =>
      item.key === key ? { ...item, quantity: item.quantity + delta } : item
    )
    .filter((item) => item.quantity > 0);
}

export function removeCartItem(cart: CartItem[], key: string): CartItem[] {
  return cart.filter((item) => item.key !== key);
}

export function calculateCartSummary(cart: CartItem[]): {
  itemCount: number;
  subtotalPhp: number;
  shippingPhp: number;
  totalPhp: number;
  remainingForFreeShippingPhp: number;
} {
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotalPhp = cart.reduce(
    (sum, item) => sum + item.pricePhp * item.quantity,
    0
  );

  if (itemCount === 0) {
    return {
      itemCount: 0,
      subtotalPhp: 0,
      shippingPhp: 0,
      totalPhp: 0,
      remainingForFreeShippingPhp: FREE_SHIPPING_THRESHOLD_PHP,
    };
  }

  const shippingPhp =
    subtotalPhp >= FREE_SHIPPING_THRESHOLD_PHP ? 0 : STANDARD_SHIPPING_PHP;
  const remainingForFreeShippingPhp = Math.max(
    0,
    FREE_SHIPPING_THRESHOLD_PHP - subtotalPhp
  );

  return {
    itemCount,
    subtotalPhp,
    shippingPhp,
    totalPhp: subtotalPhp + shippingPhp,
    remainingForFreeShippingPhp,
  };
}

export function getFreeShippingProgressPercent(subtotalPhp: number): number {
  if (!Number.isFinite(subtotalPhp) || subtotalPhp <= 0) return 0;
  return Math.min(100, Math.round((subtotalPhp / FREE_SHIPPING_THRESHOLD_PHP) * 100));
}

export function computeBulkTip(quantity: number, unitPricePhp: number): {
  subtotalPhp: number;
  remainingPhp: number;
  unlocksFreeShipping: boolean;
  tinsNeededForFreeShipping: number;
} {
  const safeQty = Math.max(1, Math.floor(quantity));
  const safeUnit = Math.max(0, unitPricePhp);
  const subtotalPhp = safeQty * safeUnit;
  const remainingPhp = Math.max(0, FREE_SHIPPING_THRESHOLD_PHP - subtotalPhp);
  const unlocksFreeShipping = remainingPhp === 0;
  const tinsNeededForFreeShipping =
    safeUnit > 0 ? Math.max(0, Math.ceil(remainingPhp / safeUnit)) : 0;

  return {
    subtotalPhp,
    remainingPhp,
    unlocksFreeShipping,
    tinsNeededForFreeShipping,
  };
}

export function validateCheckoutForm(
  form: CheckoutFormData
): CheckoutValidationErrors {
  const errors: CheckoutValidationErrors = {};

  if (!form.fullName.trim() || form.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full recipient name.';
  }

  const digits = form.mobile.replace(/[\s\-()]/g, '');
  const validPhPhone = /^(\+?63|0)?9\d{9}$/.test(digits);
  if (!validPhPhone) {
    errors.mobile = 'Enter a valid Philippine mobile number (e.g. 0917 123 4567).';
  }

  if (!form.streetAddress.trim() || form.streetAddress.trim().length < 5) {
    errors.streetAddress = 'Please enter your complete street address or unit.';
  }

  if (!form.cityProvince.trim() || form.cityProvince.trim().length < 3) {
    errors.cityProvince = 'Please enter your city and province.';
  }

  return errors;
}
