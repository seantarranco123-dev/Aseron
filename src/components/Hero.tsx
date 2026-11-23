import { ArrowRight } from 'lucide-react';
import { IMAGES, PRODUCTS } from '../data/catalog';
import { formatPHP } from '../utils/cart';
import {
  BotanicalCornerFlourish,
  CornerBracketFrame,
  HeroOrbitalLines,
  SectionHorizonBand,
} from './BotanicalEditorialMotifs';
import { SafeImage } from './SafeImage';
import { SectionKicker } from './SectionKicker';

interface HeroProps {
  onQuickAddMirrorWax: () => void;
}

const STUDIO_SPECS = [
  {
    label: 'Core Ingredients',
    value: 'Banana Peel & Charcoal',
    cardClass: 'bg-[#DCFCE7] text-[#141414] border-[#141414]',
    labelClass: 'text-[#14532D]',
  },
  {
    label: 'Everyday Price',
    value: `${formatPHP(PRODUCTS[0].pricePhp)} / 75g Tin`,
    cardClass: 'bg-[#1C1917] text-white border-[#141414]',
    labelClass: 'text-[#FDE047]',
  },
  {
    label: 'Eco Standard',
    value: '100% Biodegradable Paste',
    cardClass: 'bg-[#FACC15] text-[#141414] border-[#141414]',
    labelClass: 'text-[#14532D]',
  },
  {
    label: 'Packaging',
    value: 'Reusable Matte Tin',
    cardClass: 'bg-[#14532D] text-white border-[#141414]',
    labelClass: 'text-[#FEF08A]',
  },
];

export function Hero({ onQuickAddMirrorWax }: HeroProps) {
  return (
    <section
      id="top"
      className="scroll-mt-16 relative overflow-hidden bg-[#ECFCCB] bg-pattern-dots-leaf border-b-2 border-[#141414]"
    >
      <div className="max-w-6xl mx-auto px-6 py-10 lg:py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Color-Blocked Banana Yellow Editorial Poster Card */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 lg:p-10 rounded-2xl border-2 border-[#141414] bg-[#FEF08A] shadow-[6px_6px_0px_#14532D] relative">
            <div>
              <SectionKicker label="Eco-Friendly Shoe Care · Philippine Pesos (₱)" tone="on-yellow" />

              <h1 className="font-['Fraunces'] text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.06] font-semibold text-[#141414] tracking-tight text-balance">
                Eco-friendly shine from{' '}
                <span className="italic text-[#14532D] underline decoration-white decoration-[4px] underline-offset-4">
                  banana peel
                </span>{' '}
                and charcoal.
              </h1>

              <SectionHorizonBand className="mt-5 max-w-xs" />

              <p className="mt-5 text-base leading-relaxed text-[#292524] max-w-xl">
                Banaling turns upcycled Philippine banana peels and activated coconut charcoal into
                an affordable, zero-silicone shoe polish that nourishes leather and covers scuffs
                for just <span className="font-bold text-[#14532D]">{formatPHP(PRODUCTS[0].pricePhp)}</span>.
              </p>

              {/* Color-Blocked Formula Callout Trio */}
              <div className="mt-6 grid grid-cols-3 gap-2.5">
                <div className="p-3 rounded-lg bg-[#DCFCE7] border border-[#141414]">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#14532D]">
                    Base
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-[#141414] mt-0.5">
                    Banana Peel
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-[#1C1917] border border-[#141414] text-white">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#FDE047]">
                    Pigment
                  </p>
                  <p className="text-xs sm:text-sm font-semibold mt-0.5">
                    Coco Charcoal
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-[#14532D] border border-[#141414] text-white">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#FEF08A]">
                    Price (PHP)
                  </p>
                  <p className="font-['JetBrains_Mono'] text-xs sm:text-sm font-semibold tabular-nums mt-0.5">
                    {formatPHP(PRODUCTS[0].pricePhp)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#collection"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#14532D] hover:bg-[#166534] border-2 border-[#141414] shadow-[3px_3px_0px_#141414] rounded-md transition-transform duration-150 active:translate-y-px whitespace-nowrap shrink-0"
              >
                <span>Shop Natural Polish — {formatPHP(PRODUCTS[0].pricePhp)}</span>
                <ArrowRight className="w-4 h-4 text-[#FDE047]" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={onQuickAddMirrorWax}
                className="inline-flex items-center px-5 py-3.5 text-sm font-semibold text-[#141414] bg-white border-2 border-[#141414] hover:bg-[#DCFCE7] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                Quick Add Charcoal Tin
              </button>
            </div>
          </div>

          {/* Right Color-Blocked Forest Green Poster Frame */}
          <div className="lg:col-span-6 relative p-6 sm:p-8 rounded-2xl border-2 border-[#141414] bg-[#14532D] shadow-[6px_6px_0px_#FACC15] flex flex-col justify-between overflow-hidden">
            <HeroOrbitalLines className="pointer-events-none hidden sm:block absolute -top-10 -right-10 w-56 h-56" />
            <BotanicalCornerFlourish className="pointer-events-none hidden sm:block absolute -bottom-5 -left-5 w-24 h-24 rotate-180" />

            <div className="flex items-center justify-between gap-4 mb-4 relative z-10 text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FEF08A]">
                Banaling Studio Edition
              </span>
              <span className="font-['JetBrains_Mono'] text-xs font-semibold text-[#FEF08A] tabular-nums">
                75g Tin · {formatPHP(PRODUCTS[0].pricePhp)} PHP
              </span>
            </div>

            <div className="relative p-2.5 flex-1">
              <CornerBracketFrame leafClass="border-[#DCFCE7]" goldClass="border-[#FACC15]" />

              {/* Offset Sunny Yellow Backing Mat */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute inset-3 translate-x-2 translate-y-2 rounded-xl bg-[#FACC15] border-2 border-[#141414]"
              />

              <div className="relative h-full p-2 rounded-xl border-2 border-[#141414] bg-[#DCFCE7]">
                <div className="w-full h-full min-h-[280px] lg:min-h-[360px] aspect-[4/3] overflow-hidden rounded-lg border border-[#141414] bg-stone-100">
                  <SafeImage
                    src={IMAGES.banalingProduct}
                    alt="Banaling Natural Shoe Polish matte black tins made from banana peel and charcoal beside a wooden horsehair brush"
                    fallbackLabel="Banaling Natural Shoe Polish"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-white/25 flex items-center justify-between text-xs text-emerald-100 relative z-10">
              <span>Zero Silicone · Zero Petroleum Solvents</span>
              <span className="font-semibold text-[#FEF08A]">Philippine Made</span>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Solid Color-Blocked Specification Strip */}
        <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STUDIO_SPECS.map((spec) => (
            <div
              key={spec.label}
              className={`p-4 rounded-xl border-2 shadow-[3px_3px_0px_#141414] ${spec.cardClass}`}
            >
              <dt className={`text-xs font-bold uppercase tracking-wider mb-1 ${spec.labelClass}`}>
                {spec.label}
              </dt>
              <dd className="text-sm sm:text-base font-semibold tabular-nums">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
