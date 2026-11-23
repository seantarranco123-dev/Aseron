import { useState } from 'react';
import { FORMULA_INGREDIENTS, PRODUCTS } from '../data/catalog';
import type { FormulaIngredientId } from '../types/store';
import { BananaBotanicalArtwork, GeometricRibbonStrip } from './BotanicalEditorialMotifs';
import { SectionKicker } from './SectionKicker';

function IngredientArtwork({ id }: { id: FormulaIngredientId }) {
  switch (id) {
    case 'banana-peel':
      return <BananaBotanicalArtwork className="w-40 h-28" />;
    case 'coconut-charcoal':
      return (
        <svg viewBox="0 0 180 120" fill="none" className="w-40 h-28" aria-hidden="true">
          <circle cx="90" cy="60" r="46" fill="#14532D" stroke="#FACC15" strokeWidth="2" />
          <polygon points="74,42 104,34 118,58 98,84 68,78 58,56" fill="#1C1917" stroke="#FDE047" strokeWidth="2" />
          <polygon points="88,48 106,52 102,72 78,68" fill="#3F3F46" />
          <circle cx="44" cy="36" r="5" fill="#FACC15" />
          <circle cx="138" cy="84" r="4" fill="#4ADE80" />
        </svg>
      );
    case 'plant-wax':
      return (
        <svg viewBox="0 0 180 120" fill="none" className="w-40 h-28" aria-hidden="true">
          <rect x="44" y="22" width="92" height="76" rx="16" fill="#DCFCE7" stroke="#141414" strokeWidth="2" />
          <path d="M90 36C74 54 70 72 90 86C110 72 106 54 90 36Z" fill="#FACC15" stroke="#141414" strokeWidth="2" />
          <path d="M90 50V76" stroke="#14532D" strokeWidth="2" strokeLinecap="round" />
          <circle cx="62" cy="40" r="4" fill="#15803D" />
          <circle cx="118" cy="80" r="4" fill="#F59E0B" />
        </svg>
      );
    case 'matte-tin':
      return (
        <svg viewBox="0 0 180 120" fill="none" className="w-40 h-28" aria-hidden="true">
          <ellipse cx="90" cy="76" rx="52" ry="18" fill="#1C1917" stroke="#FACC15" strokeWidth="2" />
          <ellipse cx="90" cy="52" rx="52" ry="18" fill="#FACC15" stroke="#141414" strokeWidth="2" />
          <ellipse cx="90" cy="52" rx="34" ry="10" fill="#14532D" />
          <path d="M38 52V76M142 52V76" stroke="#FACC15" strokeWidth="2" />
        </svg>
      );
  }
}

export function IngredientShowcaseBand() {
  const [selectedId, setSelectedId] = useState<FormulaIngredientId>('banana-peel');
  const active =
    FORMULA_INGREDIENTS.find((item) => item.id === selectedId) ?? FORMULA_INGREDIENTS[0];

  return (
    <section aria-label="Inside every tin formula breakdown" className="bg-[#1C1917] text-white bg-pattern-diagonal-charcoal">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <SectionKicker label={`Inside Every ₱${PRODUCTS[0].pricePhp} Tin`} tone="on-dark" />
            <h2 className="font-['Fraunces'] text-2xl sm:text-3xl font-medium text-white tracking-tight text-balance">
              Four local elements powering every tin
            </h2>
          </div>
          <p className="text-sm text-stone-300 max-w-md">
            Tap any ingredient block below to inspect how agricultural upcycling keeps your leather nourished at an honest Philippine price.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Interactive Solid-Color Ingredient Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4" role="tablist" aria-label="Polish ingredients">
            {FORMULA_INGREDIENTS.map((item, idx) => {
              const isSelected = item.id === active.id;
              const tileBase =
                idx === 0
                  ? 'bg-[#FACC15] text-[#141414]'
                  : idx === 1
                  ? 'bg-[#DCFCE7] text-[#141414]'
                  : idx === 2
                  ? 'bg-[#14532D] text-white'
                  : 'bg-[#FFFDF7] text-[#141414]';

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedId(item.id)}
                  className={`text-left p-5 rounded-xl border-2 transition-transform duration-150 cursor-pointer flex flex-col justify-between ${tileBase} ${
                    isSelected
                      ? 'border-white ring-4 ring-[#FACC15]/80 -translate-y-0.5 shadow-[4px_4px_0px_#4ADE80]'
                      : 'border-[#141414] opacity-90 hover:opacity-100 hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`font-['JetBrains_Mono'] text-xs font-bold px-2 py-0.5 rounded border ${
                        idx === 2
                          ? 'bg-[#FACC15] text-[#141414] border-[#141414]'
                          : 'bg-[#1C1917] text-[#FDE047] border-[#141414]'
                      }`}
                    >
                      {item.code}
                    </span>
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-wider ${
                        idx === 2 ? 'text-[#FEF08A]' : 'text-[#14532D]'
                      }`}
                    >
                      {item.ecoMetric}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-['Fraunces'] text-lg font-semibold leading-snug">
                      {item.name}
                    </h3>
                    <p
                      className={`text-xs mt-1 ${
                        idx === 2 ? 'text-emerald-100' : 'text-stone-700'
                      }`}
                    >
                      {item.role}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Ingredient Inspection Card */}
          <div
            role="tabpanel"
            aria-label={active.name}
            className="lg:col-span-5 rounded-xl border-2 border-[#FACC15] bg-[#292524] p-6 sm:p-7 flex flex-col justify-between shadow-[5px_5px_0px_#15803D]"
          >
            <div>
              <div className="rounded-lg bg-[#141414] border border-[#FACC15]/40 p-4 flex items-center justify-center mb-5">
                <IngredientArtwork id={active.id} />
              </div>

              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#86EFAC]">
                  {active.role}
                </span>
                <span className="font-['JetBrains_Mono'] text-xs text-[#FDE047] tabular-nums">
                  Element {active.code} / 04
                </span>
              </div>

              <h3 className="font-['Fraunces'] text-2xl font-semibold text-white">
                {active.name}
              </h3>
              <p className="mt-3 text-sm text-stone-200 leading-relaxed">
                {active.benefit}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between gap-2 text-xs">
              <span className="text-stone-400">Local Origin</span>
              <span className="font-semibold text-[#FEF08A]">{active.origin}</span>
            </div>
          </div>
        </div>
      </div>
      <GeometricRibbonStrip />
    </section>
  );
}
