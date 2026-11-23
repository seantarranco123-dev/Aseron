import { useEffect, useState } from 'react';
import { BagDrawer } from './components/BagDrawer';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { HowToUseSection } from './components/HowToUseSection';
import { IngredientShowcaseBand } from './components/IngredientShowcaseBand';
import { Navbar } from './components/Navbar';
import { PolishConfigurator } from './components/PolishConfigurator';
import { WhyUsSection } from './components/WhyUsSection';
import { POLISH_SHADES, PRODUCTS } from './data/catalog';
import type { CartItem, PolishShade, Product, ShadeId } from './types/store';
import {
  addItemToCart,
  calculateCartSummary,
  removeCartItem,
  updateCartItemQuantity,
} from './utils/cart';

const STORAGE_KEY = 'banaling_bag_v1';

export default function App() {
  const [selectedShadeId, setSelectedShadeId] = useState<ShadeId>('obsidian');
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed)) return [];
      return parsed.map((item) => {
        const currentProduct = PRODUCTS.find((p) => p.id === item?.productId);
        return currentProduct ? { ...item, pricePhp: currentProduct.pricePhp } : item;
      });
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Ignore storage quota errors in restricted sandboxes
    }
  }, [cart]);

  const summary = calculateCartSummary(cart);

  function handleAddToBag(product: Product, quantity: number, shade?: PolishShade) {
    setCart((prev) => addItemToCart(prev, product, quantity, shade));
    setIsBagOpen(true);
  }

  function handleQuickAddMirrorWax() {
    const flagship = PRODUCTS[0];
    const obsidian = POLISH_SHADES[0];
    handleAddToBag(flagship, 1, obsidian);
  }

  function handleUpdateQuantity(key: string, delta: number) {
    setCart((prev) => updateCartItemQuantity(prev, key, delta));
  }

  function handleRemoveItem(key: string) {
    setCart((prev) => removeCartItem(prev, key));
  }

  function handleClearBag() {
    setCart([]);
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#ECFCCB] text-[#141414]">
      <Navbar bagCount={summary.itemCount} onOpenBag={() => setIsBagOpen(true)} />

      <main className="flex-1">
        <Hero onQuickAddMirrorWax={handleQuickAddMirrorWax} />

        <IngredientShowcaseBand />

        <PolishConfigurator
          selectedShadeId={selectedShadeId}
          onSelectShade={setSelectedShadeId}
          onAddToBag={handleAddToBag}
        />

        <WhyUsSection />

        <HowToUseSection />

        <FaqSection />
      </main>

      <Footer />

      <BagDrawer
        isOpen={isBagOpen}
        items={cart}
        onClose={() => setIsBagOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearBag={handleClearBag}
      />
    </div>
  );
}
