import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  FAQ_ITEMS,
  FREE_SHIPPING_THRESHOLD_PHP,
  PRODUCTS,
  STANDARD_SHIPPING_PHP,
} from '../data/catalog';
import type { FaqCategory } from '../types/store';
import { formatPHP } from '../utils/cart';
import { BananaBotanicalArtwork } from './BotanicalEditorialMotifs';
import { SectionKicker } from './SectionKicker';

const CATEGORIES: FaqCategory[] = [
  'All',
  'Product & Leather',
  'Application',
  'Shipping & PHP Payment',
];

export function FaqSection() {
  const [selectedCategory, setSelectedCategory] = useState<FaqCategory>('All');
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const visibleFaqs =
    selectedCategory === 'All'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="faqs"
      className="scroll-mt-16 py-14 lg:py-20 bg-[#ECFCCB] bg-pattern-dots-leaf"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Color-Blocked Summary & Payment Facts Card */}
          <div className="lg:col-span-4 space-y-5">
            <div className="p-6 sm:p-7 rounded-2xl border-2 border-[#141414] bg-[#FACC15] shadow-[5px_5px_0px_#14532D]">
              <SectionKicker label="FAQs" tone="on-yellow" />
              <h2 className="font-['Fraunces'] text-3xl font-semibold text-[#141414] tracking-tight text-balance">
                Frequently asked questions
              </h2>
              <p className="mt-3 text-sm text-[#292524] leading-relaxed">
                Clear answers on banana peel & charcoal ingredients, daily shoe care, and affordable PHP ordering.
              </p>
            </div>

            <div className="p-6 rounded-2xl border-2 border-[#141414] bg-[#1C1917] text-white shadow-[5px_5px_0px_#22C55E] space-y-4">
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/15">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FDE047]">
                  Quick Order Guide
                </span>
                <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#86EFAC]">
                  PHP (₱) Only
                </span>
              </div>

              <dl className="space-y-3 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-stone-300">Single 75g Tin</dt>
                  <dd className="font-['JetBrains_Mono'] font-semibold text-[#FEF08A] tabular-nums">
                    {formatPHP(PRODUCTS[0].pricePhp)}
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-stone-300">Nationwide Shipping</dt>
                  <dd className="font-['JetBrains_Mono'] font-semibold text-white tabular-nums">
                    {formatPHP(STANDARD_SHIPPING_PHP)}
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-stone-300">Free Shipping Threshold</dt>
                  <dd className="font-['JetBrains_Mono'] font-semibold text-[#86EFAC] tabular-nums">
                    {formatPHP(FREE_SHIPPING_THRESHOLD_PHP)}+
                  </dd>
                </div>
              </dl>

              <div className="pt-3 border-t border-white/15 flex items-center justify-between gap-3">
                <p className="text-xs text-stone-300">
                  GCash · Maya · COD · Bank Transfer
                </p>
                <BananaBotanicalArtwork className="w-20 h-14 shrink-0" />
              </div>
            </div>
          </div>

          {/* Right Filter Tabs + Bold Accordion Cards */}
          <div className="lg:col-span-8">
            {/* Category Filter Tabs */}
            <div
              className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-[#14532D] border-2 border-[#141414] rounded-xl mb-6 shadow-[4px_4px_0px_#FACC15]"
              role="group"
              aria-label="Filter FAQs by category"
            >
              {CATEGORIES.map((category) => {
                const isActive = category === selectedCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => {
                      setSelectedCategory(category);
                      const firstMatch =
                        category === 'All'
                          ? FAQ_ITEMS[0]
                          : FAQ_ITEMS.find((item) => item.category === category);
                      if (firstMatch) setOpenId(firstMatch.id);
                    }}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#FACC15] text-[#141414] border border-[#141414]'
                        : 'text-white hover:bg-white/15'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Accordion List */}
            <div className="space-y-3.5">
              {visibleFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-xl border-2 border-[#141414] transition-colors ${
                      isOpen
                        ? 'bg-[#FEF9C3] shadow-[4px_4px_0px_#14532D]'
                        : 'bg-white hover:bg-[#DCFCE7]/60 shadow-[3px_3px_0px_#141414]'
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`${faq.id}-panel`}
                      onClick={() => setOpenId(isOpen ? '' : faq.id)}
                      className="w-full flex items-start justify-between gap-4 p-5 text-left cursor-pointer group"
                    >
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#14532D] block mb-1">
                          {faq.category}
                        </span>
                        <span className="block text-base sm:text-lg font-semibold text-[#141414]">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 mt-1 transition-transform duration-150 ${
                          isOpen ? 'rotate-180 text-[#14532D]' : 'text-[#141414]'
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {isOpen && (
                      <div
                        id={`${faq.id}-panel`}
                        className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#292524] leading-relaxed border-t border-[#141414]/15"
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
