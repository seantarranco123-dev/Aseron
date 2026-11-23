import { useState } from 'react';
import { Check, Minus, Plus } from 'lucide-react';
import { FREE_SHIPPING_THRESHOLD_PHP, IMAGES, POLISH_SHADES, PRODUCTS } from '../data/catalog';
import type { PolishShade, Product, ShadeId } from '../types/store';
import { computeBulkTip, formatPHP } from '../utils/cart';
import {
  BananaBotanicalArtwork,
  CornerBracketFrame,
  GeometricRibbonStrip,
  SectionHorizonBand,
} from './BotanicalEditorialMotifs';
import { SafeImage } from './SafeImage';
import { SectionKicker } from './SectionKicker';

interface PolishConfiguratorProps {
  selectedShadeId: ShadeId;
  onSelectShade: (shadeId: ShadeId) => void;
  onAddToBag: (product: Product, quantity: number, shade?: PolishShade) => void;
}

function getShortShadeLabel(id: ShadeId): string {
  switch (id) {
    case 'obsidian':
      return 'Charcoal';
    case 'havana':
      return 'Bark';
    case 'cognac':
      return 'Tan';
    case 'neutral':
      return 'Clear';
  }
}

export function PolishConfigurator({
  selectedShadeId,
  onSelectShade,
  onAddToBag,
}: PolishConfiguratorProps) {
  const [configQty, setConfigQty] = useState(1);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const flagshipWax = PRODUCTS[0];
  const activeShade =
    POLISH_SHADES.find((s) => s.id === selectedShadeId) ?? POLISH_SHADES[0];
  const bulkTip = computeBulkTip(configQty, flagshipWax.pricePhp);

  function handleConfiguredAdd() {
    onAddToBag(flagshipWax, configQty, activeShade);
    setRecentlyAddedId('configurator');
    window.setTimeout(() => setRecentlyAddedId(null), 1400);
  }

  return (
    <section
      id="collection"
      className="scroll-mt-16 bg-[#DCFCE7] bg-pattern-grid-gold border-b-2 border-[#141414]"
    >
      <div className="max-w-6xl mx-auto px-6 py-14 lg:py-20">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <SectionKicker label="The Product · Single Eco Flagship" tone="on-leaf" />
            <h2 className="font-['Fraunces'] text-3xl sm:text-4xl font-semibold text-[#141414] tracking-tight text-balance">
              Eco-friendly care at an honest Philippine Peso price
            </h2>
          </div>
          <p className="text-sm text-[#292524] max-w-md bg-[#FFFDF7] p-4 rounded-xl border-2 border-[#141414] shadow-[3px_3px_0px_#FACC15]">
            Upcycled banana peel and coconut charcoal paste built to keep daily shoe care
            affordable for every Filipino student and commuter.
          </p>
        </div>

        {/* Interactive Dual-Color Solid Block Configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl border-2 border-[#141414] overflow-hidden shadow-[8px_8px_0px_#141414] bg-[#FFFDF9] items-stretch">
          {/* Left Solid Banana-Yellow Product Stage */}
          <div className="lg:col-span-6 bg-[#FACC15] p-6 sm:p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-[#141414] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#14532D]">
                  75g Reusable Matte Tin
                </span>
                <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#141414]">
                  {activeShade.stockLabel}
                </span>
              </div>

              <div className="relative p-2.5">
                <CornerBracketFrame leafClass="border-[#14532D]" goldClass="border-[#141414]" />
                <div className="p-2 rounded-xl bg-white border-2 border-[#141414]">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-stone-200 bg-stone-100">
                    <SafeImage
                      src={IMAGES.banalingPricePhoto}
                      alt={`Banaling Natural Shoe Polish tin in ${activeShade.name} on wooden table with horsehair brush`}
                      fallbackLabel={`Banaling · ${activeShade.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Charcoal + Botanical Summary Strip inside Yellow Panel */}
            <div className="mt-6 rounded-xl bg-[#1C1917] text-white border-2 border-[#141414] p-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#FDE047]">
                  Active Tin Shade
                </p>
                <p className="font-['Fraunces'] text-lg font-medium mt-0.5">
                  {activeShade.name}
                </p>
                <p className="text-xs text-stone-300 mt-0.5">
                  Zero Silicone · Biodegradable Paste
                </p>
              </div>
              <BananaBotanicalArtwork className="w-24 h-16 shrink-0" />
            </div>
          </div>

          {/* Right Configurator Panel */}
          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 bg-[#FFFDF9] flex flex-col justify-between">
            <div>
              {/* Deep Leaf Green Header + Vibrant Banana Price Tag */}
              <div className="rounded-xl bg-[#14532D] text-white border-2 border-[#141414] p-5 flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#FEF08A] mb-1">
                    Banana Peel & Charcoal Paste
                  </p>
                  <h3 className="font-['Fraunces'] text-2xl sm:text-3xl font-semibold">
                    {flagshipWax.name}
                  </h3>
                </div>
                <div className="bg-[#FACC15] text-[#141414] border-2 border-[#141414] rounded-lg px-3.5 py-2 text-right shrink-0 shadow-[2px_2px_0px_#141414]">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#14532D]">
                    PHP Price
                  </span>
                  <p className="font-['JetBrains_Mono'] text-xl sm:text-2xl font-bold tabular-nums">
                    {formatPHP(flagshipWax.pricePhp)}
                  </p>
                </div>
              </div>

              <SectionHorizonBand className="mb-6" />

              {/* Shade Swatch Selector */}
              <div>
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="font-semibold text-[#141414]">Select Natural Shade</span>
                  <span className="text-[#14532D] font-semibold" data-testid="active-shade-name">
                    {activeShade.name}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" role="radiogroup" aria-label="Wax shade options">
                  {POLISH_SHADES.map((shade) => {
                    const isSelected = shade.id === activeShade.id;
                    return (
                      <button
                        key={shade.id}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => onSelectShade(shade.id)}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg border-2 text-left transition-colors duration-100 cursor-pointer ${
                          isSelected
                            ? 'border-[#141414] bg-[#14532D] text-white ring-2 ring-[#FACC15]'
                            : 'border-[#141414]/30 bg-[#F0FDF4] text-[#141414] hover:border-[#141414] hover:bg-[#FEF08A]'
                        }`}
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-white/70 shrink-0"
                          style={{ backgroundColor: shade.hex }}
                          aria-hidden="true"
                        />
                        <span className="text-xs font-semibold truncate">
                          {getShortShadeLabel(shade.id)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Leather Pairing & Finish Detail Box */}
              <div className="mt-6 p-4 rounded-xl bg-[#ECFCCB] border border-[#14532D]/35 space-y-2">
                <p className="text-xs text-[#14532D]">
                  <span className="font-bold uppercase tracking-wider">Recommended Pairing:</span>{' '}
                  <span className="text-[#141414] font-semibold">{activeShade.leatherPair}</span>
                </p>
                <p className="text-sm text-[#292524] leading-relaxed">
                  {activeShade.finishNote}
                </p>
              </div>

              {/* Dynamic Shipping & Bulk Pack Tip */}
              <div className="mt-4 p-4 rounded-xl bg-[#FEF9C3] border border-[#141414]/25 flex items-center justify-between gap-3">
                <div className="text-xs text-[#141414]">
                  {bulkTip.unlocksFreeShipping ? (
                    <span className="font-semibold text-[#14532D]">
                      Free nationwide shipping unlocked at {configQty} tins ({formatPHP(FREE_SHIPPING_THRESHOLD_PHP)}+ threshold met).
                    </span>
                  ) : (
                    <span>
                      Add{' '}
                      <strong className="font-semibold text-[#14532D]">
                        {bulkTip.tinsNeededForFreeShipping} more{' '}
                        {bulkTip.tinsNeededForFreeShipping === 1 ? 'tin' : 'tins'}
                      </strong>{' '}
                      to unlock free nationwide shipping ({formatPHP(bulkTip.remainingPhp)} away).
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setConfigQty(5)}
                  className="px-3 py-1.5 text-xs font-bold bg-[#1C1917] text-[#FDE047] hover:bg-[#14532D] hover:text-white rounded border border-[#141414] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Select 5 Tins
                </button>
              </div>
            </div>

            {/* Quantity & Add to Bag Row */}
            <div className="mt-7 pt-6 border-t-2 border-[#DCFCE7] flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center border-2 border-[#141414] rounded-lg bg-[#FEF08A]">
                <button
                  type="button"
                  onClick={() => setConfigQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease polish quantity"
                  className="w-10 h-11 flex items-center justify-center text-[#141414] hover:bg-[#FACC15] transition-colors cursor-pointer rounded-l-md"
                >
                  <Minus className="w-4 h-4" aria-hidden="true" />
                </button>
                <span
                  aria-label="Selected quantity"
                  className="w-10 text-center text-sm font-bold tabular-nums text-[#141414] bg-white h-11 flex items-center justify-center border-x-2 border-[#141414]"
                >
                  {configQty}
                </span>
                <button
                  type="button"
                  onClick={() => setConfigQty((q) => Math.min(10, q + 1))}
                  aria-label="Increase polish quantity"
                  className="w-10 h-11 flex items-center justify-center text-[#141414] hover:bg-[#FACC15] transition-colors cursor-pointer rounded-r-md"
                >
                  <Plus className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleConfiguredAdd}
                className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#14532D] hover:bg-[#166534] border-2 border-[#141414] shadow-[4px_4px_0px_#FACC15] rounded-lg transition-transform duration-150 active:translate-y-px cursor-pointer whitespace-nowrap"
              >
                {recentlyAddedId === 'configurator' ? (
                  <>
                    <Check className="w-4 h-4 text-[#FDE047]" aria-hidden="true" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <span>
                    Add to Bag ·{' '}
                    <span className="tabular-nums text-[#FEF08A]">
                      {formatPHP(flagshipWax.pricePhp * configQty)}
                    </span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <GeometricRibbonStrip />
    </section>
  );
}
