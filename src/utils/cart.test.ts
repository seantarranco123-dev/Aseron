import test from 'node:test';
import assert from 'node:assert/strict';
import { POLISH_SHADES, PRODUCTS } from '../data/catalog';
import {
  addItemToCart,
  buildCartKey,
  calculateCartSummary,
  computeBulkTip,
  formatPHP,
  getFreeShippingProgressPercent,
  removeCartItem,
  updateCartItemQuantity,
  validateCheckoutForm,
} from './cart';

test('formatPHP formats numbers strictly in Philippine Pesos', () => {
  assert.equal(formatPHP(55), '₱55.00');
  assert.equal(formatPHP(275), '₱275.00');
  assert.equal(formatPHP(0), '₱0.00');
});

test('addItemToCart adds and merges shaded shoe polish tins correctly', () => {
  const polish = PRODUCTS[0];
  assert.equal(polish.pricePhp, 55);
  const bark = POLISH_SHADES[1];
  const charcoal = POLISH_SHADES[0];

  let cart = addItemToCart([], polish, 1, bark);
  assert.equal(cart.length, 1);
  assert.equal(cart[0].quantity, 1);
  assert.equal(cart[0].shadeName, 'Roasted Bark Brown');

  cart = addItemToCart(cart, polish, 2, bark);
  assert.equal(cart.length, 1);
  assert.equal(cart[0].quantity, 3);

  cart = addItemToCart(cart, polish, 1, charcoal);
  assert.equal(cart.length, 2);
});

test('updateCartItemQuantity and removeCartItem maintain accurate state', () => {
  const polish = PRODUCTS[0];
  const charcoal = POLISH_SHADES[0];
  const key = buildCartKey(polish.id, charcoal.id);
  let cart = addItemToCart([], polish, 2, charcoal);

  cart = updateCartItemQuantity(cart, key, -1);
  assert.equal(cart[0].quantity, 1);

  cart = updateCartItemQuantity(cart, key, -1);
  assert.equal(cart.length, 0);

  cart = addItemToCart([], polish, 1, charcoal);
  cart = removeCartItem(cart, key);
  assert.equal(cart.length, 0);
});

test('calculateCartSummary applies ₱45 shipping below ₱275 and free shipping at or above ₱275', () => {
  const polish = PRODUCTS[0]; // ₱55
  const charcoal = POLISH_SHADES[0];

  const emptySummary = calculateCartSummary([]);
  assert.equal(emptySummary.totalPhp, 0);
  assert.equal(emptySummary.shippingPhp, 0);

  const twoTins = addItemToCart([], polish, 2, charcoal); // ₱110
  const subThreshold = calculateCartSummary(twoTins);
  assert.equal(subThreshold.subtotalPhp, 110);
  assert.equal(subThreshold.shippingPhp, 45);
  assert.equal(subThreshold.totalPhp, 155);
  assert.equal(subThreshold.remainingForFreeShippingPhp, 165);

  const fiveTins = addItemToCart(twoTins, polish, 3, charcoal); // ₱275
  const overThreshold = calculateCartSummary(fiveTins);
  assert.equal(overThreshold.subtotalPhp, 275);
  assert.equal(overThreshold.shippingPhp, 0);
  assert.equal(overThreshold.totalPhp, 275);
  assert.equal(overThreshold.remainingForFreeShippingPhp, 0);
});

test('getFreeShippingProgressPercent clamps accurately between 0 and 100', () => {
  assert.equal(getFreeShippingProgressPercent(0), 0);
  assert.equal(getFreeShippingProgressPercent(110), 40);
  assert.equal(getFreeShippingProgressPercent(275), 100);
  assert.equal(getFreeShippingProgressPercent(400), 100);
});

test('computeBulkTip calculates remaining balance and tins needed for free ₱275 shipping', () => {
  const oneTin = computeBulkTip(1, 55);
  assert.equal(oneTin.subtotalPhp, 55);
  assert.equal(oneTin.remainingPhp, 220);
  assert.equal(oneTin.unlocksFreeShipping, false);
  assert.equal(oneTin.tinsNeededForFreeShipping, 4);

  const fiveTins = computeBulkTip(5, 55);
  assert.equal(fiveTins.subtotalPhp, 275);
  assert.equal(fiveTins.remainingPhp, 0);
  assert.equal(fiveTins.unlocksFreeShipping, true);
  assert.equal(fiveTins.tinsNeededForFreeShipping, 0);
});

test('validateCheckoutForm rejects incomplete fields and accepts valid Philippine inputs', () => {
  const invalidErrors = validateCheckoutForm({
    fullName: '',
    mobile: '1234',
    streetAddress: 'St',
    cityProvince: '',
    paymentMethod: 'gcash',
  });
  assert.ok(invalidErrors.fullName);
  assert.ok(invalidErrors.mobile);
  assert.ok(invalidErrors.streetAddress);
  assert.ok(invalidErrors.cityProvince);

  const validErrors = validateCheckoutForm({
    fullName: 'Marco Reyes',
    mobile: '+63 917 555 0192',
    streetAddress: '42 Yakal Street, San Antonio',
    cityProvince: 'Makati City, Metro Manila',
    paymentMethod: 'cod',
  });
  assert.deepEqual(validErrors, {});
});
