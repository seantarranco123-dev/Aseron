import { useState, type FormEvent } from 'react';
import { CheckCircle2, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { FREE_SHIPPING_THRESHOLD_PHP, PRODUCTS } from '../data/catalog';
import type {
  CartItem,
  CheckoutFormData,
  CheckoutValidationErrors,
  OrderReceipt,
  PaymentMethod,
} from '../types/store';
import {
  calculateCartSummary,
  formatPHP,
  getFreeShippingProgressPercent,
  validateCheckoutForm,
} from '../utils/cart';
import { SafeImage } from './SafeImage';

interface BagDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (key: string, delta: number) => void;
  onRemoveItem: (key: string) => void;
  onClearBag: () => void;
}

const INITIAL_FORM: CheckoutFormData = {
  fullName: '',
  mobile: '',
  streetAddress: '',
  cityProvince: '',
  paymentMethod: 'gcash',
};

const PAYMENT_OPTIONS: { id: PaymentMethod; label: string; note: string }[] = [
  { id: 'gcash', label: 'GCash / Maya', note: 'Instant QR PH payment' },
  { id: 'cod', label: 'Cash on Delivery (COD)', note: 'Pay rider in ₱ upon arrival' },
  { id: 'bank', label: 'Bank Transfer', note: 'BPI / BDO / UnionBank' },
];

export function BagDrawer({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onClearBag,
}: BagDrawerProps) {
  const [view, setView] = useState<'bag' | 'checkout' | 'confirmed'>('bag');
  const [formData, setFormData] = useState<CheckoutFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<CheckoutValidationErrors>({});
  const [receipt, setReceipt] = useState<OrderReceipt | null>(null);

  if (!isOpen) return null;

  const summary = calculateCartSummary(items);
  const shippingProgress = getFreeShippingProgressPercent(summary.subtotalPhp);

  function handleClose() {
    if (view === 'confirmed') {
      setView('bag');
      setReceipt(null);
    }
    onClose();
  }

  function handleSubmitOrder(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validateCheckoutForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const orderNumber = `BNL-${Math.floor(1000 + Math.random() * 9000)}`;
    const newReceipt: OrderReceipt = {
      orderNumber,
      createdAt: new Date().toLocaleDateString('en-PH', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      customerName: formData.fullName.trim(),
      cityProvince: formData.cityProvince.trim(),
      paymentMethod: formData.paymentMethod,
      items: [...items],
      subtotalPhp: summary.subtotalPhp,
      shippingPhp: summary.shippingPhp,
      totalPhp: summary.totalPhp,
    };

    setReceipt(newReceipt);
    setView('confirmed');
    setFormData(INITIAL_FORM);
    onClearBag();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Bag and Philippine Peso Checkout"
    >
      <div className="w-full max-w-md bg-[#FFFDF9] h-full flex flex-col border-l-2 border-[#141414] shadow-2xl">
        {/* Solid Forest-Green Header with Bright Yellow Accent */}
        <div className="px-6 h-16 border-b-2 border-[#141414] bg-[#14532D] text-white flex items-center justify-between shrink-0">
          <h2 className="font-['Fraunces'] text-lg font-semibold text-[#FEF08A]">
            {view === 'bag' && `Your Bag (${summary.itemCount})`}
            {view === 'checkout' && 'Philippine Checkout (₱)'}
            {view === 'confirmed' && 'Order Confirmed'}
          </h2>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close shopping bag"
            className="w-9 h-9 inline-flex items-center justify-center rounded-md bg-[#FACC15] text-[#141414] border border-[#141414] hover:bg-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 bg-[#ECFCCB]/60">
          {view === 'confirmed' && receipt ? (
            <div className="space-y-6">
              <div className="p-5 rounded-xl border-2 border-[#141414] bg-[#FEF08A]">
                <div className="flex items-center gap-2.5 text-[#14532D] mb-2">
                  <CheckCircle2 className="w-5 h-5 text-[#14532D]" aria-hidden="true" />
                  <span className="text-sm font-bold">
                    Order #{receipt.orderNumber} Confirmed
                  </span>
                </div>
                <p className="text-sm text-[#141414]">
                  Thank you, {receipt.customerName}. Your Banaling order is queued for dispatch to{' '}
                  {receipt.cityProvince}.
                </p>
              </div>

              <div className="p-5 rounded-xl border-2 border-[#141414] bg-white space-y-3 text-sm">
                <p className="text-xs font-bold uppercase tracking-wide text-[#14532D]">
                  Receipt Summary ({receipt.createdAt})
                </p>
                {receipt.items.map((item) => (
                  <div key={item.key} className="flex justify-between gap-4">
                    <span className="text-[#141414]">
                      {item.quantity}× {item.name}
                      {item.shadeName ? ` (${item.shadeName})` : ''}
                    </span>
                    <span className="font-['JetBrains_Mono'] font-semibold text-[#141414] tabular-nums shrink-0">
                      {formatPHP(item.pricePhp * item.quantity)}
                    </span>
                  </div>
                ))}
                <div className="pt-3 border-t border-[#141414]/15 flex justify-between text-stone-700">
                  <span>Shipping</span>
                  <span className="font-['JetBrains_Mono'] tabular-nums">
                    {receipt.shippingPhp === 0 ? 'Free' : formatPHP(receipt.shippingPhp)}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-[#141414] text-base">
                  <span>Total (PHP)</span>
                  <span className="font-['JetBrains_Mono'] text-[#14532D] tabular-nums">
                    {formatPHP(receipt.totalPhp)}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="w-full py-3 px-4 text-sm font-semibold text-white bg-[#14532D] hover:bg-[#166534] border-2 border-[#141414] shadow-[3px_3px_0px_#FACC15] rounded-md transition-colors cursor-pointer"
              >
                Continue Browsing
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#FACC15] border-2 border-[#141414] flex items-center justify-center mb-4">
                <ShoppingBag className="w-7 h-7 text-[#14532D]" aria-hidden="true" />
              </div>
              <p className="font-['Fraunces'] text-lg font-semibold text-[#141414]">
                Your bag is empty
              </p>
              <p className="mt-1 text-sm text-stone-700 max-w-xs">
                Add a tin of Banaling Natural Shoe Polish ({formatPHP(PRODUCTS[0].pricePhp)}) to get started.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-6 px-5 py-2.5 text-sm font-semibold text-white bg-[#14532D] hover:bg-[#166534] border-2 border-[#141414] shadow-[3px_3px_0px_#FACC15] rounded-md transition-colors cursor-pointer"
              >
                Browse Collection
              </button>
            </div>
          ) : view === 'bag' ? (
            <div className="space-y-5">
              {/* Free Shipping Progress Notice */}
              <div className="p-4 rounded-xl border-2 border-[#141414] bg-[#FEF08A] text-xs text-[#141414] space-y-2.5">
                {summary.remainingForFreeShippingPhp > 0 ? (
                  <span>
                    Add{' '}
                    <strong className="font-bold text-[#14532D] tabular-nums">
                      {formatPHP(summary.remainingForFreeShippingPhp)}
                    </strong>{' '}
                    more for free nationwide shipping (orders {formatPHP(FREE_SHIPPING_THRESHOLD_PHP)}+).
                  </span>
                ) : (
                  <span className="font-bold text-[#14532D]">
                    Unlocked: Free nationwide Philippine shipping applied.
                  </span>
                )}
                <div className="h-2.5 w-full rounded-full bg-white border border-[#141414] overflow-hidden" aria-hidden="true">
                  <div
                    className="h-full bg-gradient-to-r from-[#F59E0B] via-[#22C55E] to-[#14532D] transition-all duration-200"
                    style={{ width: `${shippingProgress}%` }}
                  />
                </div>
              </div>

              {/* Cart Items */}
              <ul className="space-y-3">
                {items.map((item) => (
                  <li
                    key={item.key}
                    className="p-3.5 rounded-xl border-2 border-[#141414] bg-white flex gap-4 shadow-[3px_3px_0px_#FACC15]"
                  >
                    <div className="w-20 h-16 rounded-md overflow-hidden border border-[#141414] bg-[#DCFCE7] shrink-0">
                      <SafeImage
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-semibold text-[#141414] truncate">
                          {item.name}
                        </h3>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.key)}
                          aria-label={`Remove ${item.name}`}
                          className="text-stone-500 hover:text-[#14532D] transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </div>

                      {item.shadeName && (
                        <div className="mt-1 flex items-center gap-1.5 text-xs text-stone-600">
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-stone-400"
                            style={{ backgroundColor: item.shadeHex }}
                            aria-hidden="true"
                          />
                          <span>{item.shadeName}</span>
                        </div>
                      )}

                      <div className="mt-3 flex items-center justify-between">
                        <div className="inline-flex items-center border border-[#141414] rounded bg-[#DCFCE7]">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.key, -1)}
                            aria-label={`Decrease quantity of ${item.name}`}
                            className="w-7 h-7 flex items-center justify-center text-[#141414] hover:bg-[#FACC15] cursor-pointer"
                          >
                            <Minus className="w-3 h-3" aria-hidden="true" />
                          </button>
                          <span className="w-7 text-center text-xs font-bold tabular-nums bg-white h-7 flex items-center justify-center border-x border-[#141414]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.key, 1)}
                            aria-label={`Increase quantity of ${item.name}`}
                            className="w-7 h-7 flex items-center justify-center text-[#141414] hover:bg-[#FACC15] cursor-pointer"
                          >
                            <Plus className="w-3 h-3" aria-hidden="true" />
                          </button>
                        </div>

                        <span className="font-['JetBrains_Mono'] text-sm font-bold text-[#14532D] tabular-nums">
                          {formatPHP(item.pricePhp * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <form id="checkout-form" onSubmit={handleSubmitOrder} className="space-y-4" noValidate>
              <div>
                <label htmlFor="checkout-name" className="block text-xs font-semibold text-[#141414] mb-1">
                  Full Recipient Name
                </label>
                <input
                  id="checkout-name"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Juan Dela Cruz"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border-2 border-[#141414] rounded-md focus:outline-none focus:border-[#14532D]"
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs font-medium text-red-700">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="checkout-mobile" className="block text-xs font-semibold text-[#141414] mb-1">
                  Philippine Mobile Number
                </label>
                <input
                  id="checkout-mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  placeholder="0917 123 4567"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border-2 border-[#141414] rounded-md focus:outline-none focus:border-[#14532D]"
                />
                {errors.mobile && (
                  <p className="mt-1 text-xs font-medium text-red-700">{errors.mobile}</p>
                )}
              </div>

              <div>
                <label htmlFor="checkout-street" className="block text-xs font-semibold text-[#141414] mb-1">
                  Street Address / Unit / Barangay
                </label>
                <input
                  id="checkout-street"
                  type="text"
                  value={formData.streetAddress}
                  onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                  placeholder="Unit 4B, 118 Legazpi St., Legazpi Village"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border-2 border-[#141414] rounded-md focus:outline-none focus:border-[#14532D]"
                />
                {errors.streetAddress && (
                  <p className="mt-1 text-xs font-medium text-red-700">{errors.streetAddress}</p>
                )}
              </div>

              <div>
                <label htmlFor="checkout-city" className="block text-xs font-semibold text-[#141414] mb-1">
                  City & Province
                </label>
                <input
                  id="checkout-city"
                  type="text"
                  value={formData.cityProvince}
                  onChange={(e) => setFormData({ ...formData, cityProvince: e.target.value })}
                  placeholder="Makati City, Metro Manila"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border-2 border-[#141414] rounded-md focus:outline-none focus:border-[#14532D]"
                />
                {errors.cityProvince && (
                  <p className="mt-1 text-xs font-medium text-red-700">{errors.cityProvince}</p>
                )}
              </div>

              <fieldset className="pt-2">
                <legend className="text-xs font-semibold text-[#141414] mb-2">
                  Payment Method (Philippine Pesos Only)
                </legend>
                <div className="space-y-2">
                  {PAYMENT_OPTIONS.map((option) => (
                    <label
                      key={option.id}
                      className={`flex items-center justify-between p-3 rounded-md border-2 cursor-pointer transition-colors ${
                        formData.paymentMethod === option.id
                          ? 'border-[#141414] bg-[#FEF08A]'
                          : 'border-[#141414]/30 bg-white hover:border-[#141414]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={option.id}
                          checked={formData.paymentMethod === option.id}
                          onChange={() =>
                            setFormData({ ...formData, paymentMethod: option.id })
                          }
                          className="accent-[#14532D]"
                        />
                        <span className="text-sm font-semibold text-[#141414]">
                          {option.label}
                        </span>
                      </div>
                      <span className="text-xs text-stone-700">{option.note}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </form>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && view !== 'confirmed' && (
          <div className="p-6 border-t-2 border-[#141414] bg-white space-y-4">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-stone-700">
                <span>Subtotal</span>
                <span className="font-['JetBrains_Mono'] tabular-nums">
                  {formatPHP(summary.subtotalPhp)}
                </span>
              </div>
              <div className="flex justify-between text-stone-700">
                <span>Shipping</span>
                <span className="font-['JetBrains_Mono'] tabular-nums">
                  {summary.shippingPhp === 0 ? 'Free' : formatPHP(summary.shippingPhp)}
                </span>
              </div>
              <div className="pt-2 border-t border-[#141414]/15 flex justify-between font-bold text-[#141414] text-base">
                <span>Total (PHP)</span>
                <span className="font-['JetBrains_Mono'] text-[#14532D] tabular-nums" data-testid="bag-total-php">
                  {formatPHP(summary.totalPhp)}
                </span>
              </div>
            </div>

            {view === 'bag' ? (
              <button
                type="button"
                onClick={() => setView('checkout')}
                className="w-full py-3 px-4 text-sm font-semibold text-white bg-[#14532D] hover:bg-[#166534] border-2 border-[#141414] shadow-[3px_3px_0px_#FACC15] rounded-md transition-colors cursor-pointer"
              >
                Proceed to Checkout
              </button>
            ) : (
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setView('bag')}
                  className="px-4 py-3 text-sm font-semibold text-[#141414] bg-[#FEF08A] border-2 border-[#141414] hover:bg-[#FACC15] rounded-md transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  form="checkout-form"
                  className="flex-1 py-3 px-4 text-sm font-semibold text-white bg-[#14532D] hover:bg-[#166534] border-2 border-[#141414] shadow-[3px_3px_0px_#FACC15] rounded-md transition-colors cursor-pointer"
                >
                  Place Order · {formatPHP(summary.totalPhp)}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
