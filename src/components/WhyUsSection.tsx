import { useState } from 'react';
import { IMAGES, PRODUCTS, WHY_US_PILLARS } from '../data/catalog';
import { formatPHP } from '../utils/cart';
import { CornerBracketFrame, GeometricRibbonStrip } from './BotanicalEditorialMotifs';
import { SafeImage } from './SafeImage';
import { SectionKicker } from './SectionKicker';

const PILLAR_CARD_STYLES = [
  {
    container: 'bg-[#DCFCE7] text-[#141414] border-[#141414]',
    numeralBg: 'bg-[#14532D] text-[#FEF08A]',
    summaryText: 'text-[#14532D]',
    bodyText: 'text-[#292524]',
  },
  {
    container: 'bg-[#1C1917] text-white border-[#141414]',
    numeralBg: 'bg-[#FACC15] text-[#141414]',
    summaryText: 'text-[#FDE047]',
    bodyText: 'text-stone-300',
  },
  {
    container: 'bg-[#FACC15] text-[#141414] border-[#141414]',
    numeralBg: 'bg-[#1C1917] text-white',
    summaryText: 'text-[#14532D]',
    bodyText: 'text-[#292524]',
  },
  {
    container: 'bg-[#14532D] text-white border-[#141414]',
    numeralBg: 'bg-white text-[#14532D]',
    summaryText: 'text-[#FEF08A]',
    bodyText: 'text-emerald-100',
  },
];

export function WhyUsSection() {
  const [glossLevel, setGlossLevel] = useState(72);

  const finishStage =
    glossLevel < 30
      ? 'Scuffed Dry Leather (Unpolished)'
      : glossLevel < 70
      ? 'Banana Peel Nourished Satin'
      : 'Banaling Charcoal Deep Luster';

  const moistureValue = Math.min(100, Math.round(28 + glossLevel * 0.68));
  const scuffMasking = Math.min(100, Math.round(15 + glossLevel * 0.82));

  return (
    <section
      id="why-us"
      className="scroll-mt-16 bg-[#FEF9C3] bg-pattern-dots-leaf border-b-2 border-[#141414]"
    >
      <div className="max-w-6xl mx-auto px-6 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Editorial Claim + Rich Interactive Finish Preview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl border-2 border-[#141414] bg-white shadow-[5px_5px_0px_#14532D]">
              <SectionKicker label="Why Choose Banaling" tone="default" />
              <h2 className="font-['Fraunces'] text-3xl font-semibold text-[#141414] tracking-tight text-balance">
                Eco-friendly care from upcycled banana peel and charcoal.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#292524] leading-relaxed">
                Conventional shoe polishes rely on imported petroleum waxes and harsh fumes while
                costing hundreds of pesos. Banaling repurposes local banana peels and coconut
                charcoal into a gentle, low-cost paste at just{' '}
                <span className="font-bold text-[#14532D]">{formatPHP(PRODUCTS[0].pricePhp)}</span>.
              </p>
            </div>

            {/* Interactive Luster Comparison Control */}
            <div className="rounded-2xl border-2 border-[#141414] bg-[#FFFDF9] overflow-hidden shadow-[6px_6px_0px_#141414]">
              <div className="px-5 py-3.5 bg-[#14532D] text-white border-b-2 border-[#141414] flex items-center justify-between gap-2">
                <label
                  htmlFor="luster-slider"
                  className="text-xs font-bold uppercase tracking-wider text-[#FEF08A]"
                >
                  Interactive Finish Preview
                </label>
                <span
                  data-testid="finish-stage-label"
                  className="font-['JetBrains_Mono'] text-xs font-bold bg-[#FACC15] text-[#141414] px-2.5 py-0.5 rounded border border-[#141414] tabular-nums"
                >
                  {glossLevel}% Luster
                </span>
              </div>

              <div className="p-5">
                {/* Leather Swatch Surface Visualizer */}
                <div className="relative h-32 rounded-xl overflow-hidden border-2 border-[#141414] mb-4 bg-[#181512]">
                  <div
                    className="absolute inset-0 transition-opacity duration-150"
                    style={{
                      background:
                        'radial-gradient(circle at 28% 35%, rgba(250,204,21,0.55) 0%, rgba(217,119,6,0.38) 38%, rgba(44,24,16,0.92) 82%)',
                      opacity: glossLevel / 100,
                    }}
                  />
                  <div className="relative z-10 h-full flex flex-col justify-between p-4 text-white">
                    <span className="text-[11px] font-semibold tracking-wide text-[#FEF08A]">
                      Full-Grain Marikina Calfskin Toe Cap
                    </span>
                    <span className="font-['Fraunces'] text-base font-medium">{finishStage}</span>
                  </div>
                </div>

                {/* Live Surface Condition Readouts */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-[#DCFCE7] border border-[#141414]">
                    <div className="flex justify-between text-[11px] font-semibold text-[#14532D] mb-1">
                      <span>Moisture Coat</span>
                      <span className="tabular-nums">{moistureValue}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white overflow-hidden">
                      <div
                        className="h-full bg-[#14532D]"
                        style={{ width: `${moistureValue}%` }}
                      />
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#FEF08A] border border-[#141414]">
                    <div className="flex justify-between text-[11px] font-semibold text-[#141414] mb-1">
                      <span>Scuff Cover</span>
                      <span className="tabular-nums">{scuffMasking}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white overflow-hidden">
                      <div
                        className="h-full bg-[#1C1917]"
                        style={{ width: `${scuffMasking}%` }}
                      />
                    </div>
                  </div>
                </div>

                <input
                  id="luster-slider"
                  type="range"
                  min={0}
                  max={100}
                  value={glossLevel}
                  aria-valuetext={`${glossLevel}% luster — ${finishStage}`}
                  onChange={(e) => setGlossLevel(Number(e.target.value))}
                  className="w-full accent-[#14532D] cursor-pointer"
                />

                <div className="mt-3 grid grid-cols-3 gap-1.5 p-1.5 rounded-lg bg-[#DCFCE7] border border-[#141414] text-[11px]">
                  <button
                    type="button"
                    onClick={() => setGlossLevel(10)}
                    className={`py-1.5 px-2 rounded transition-colors cursor-pointer whitespace-nowrap ${
                      glossLevel < 30
                        ? 'bg-[#14532D] text-white font-semibold border border-[#141414]'
                        : 'text-[#141414] hover:bg-white'
                    }`}
                  >
                    Dry Scuffed
                  </button>
                  <button
                    type="button"
                    onClick={() => setGlossLevel(50)}
                    className={`py-1.5 px-2 rounded transition-colors cursor-pointer whitespace-nowrap ${
                      glossLevel >= 30 && glossLevel < 70
                        ? 'bg-[#14532D] text-white font-semibold border border-[#141414]'
                        : 'text-[#141414] hover:bg-white'
                    }`}
                  >
                    Satin Coat
                  </button>
                  <button
                    type="button"
                    onClick={() => setGlossLevel(95)}
                    className={`py-1.5 px-2 rounded transition-colors cursor-pointer whitespace-nowrap ${
                      glossLevel >= 70
                        ? 'bg-[#14532D] text-white font-semibold border border-[#141414]'
                        : 'text-[#141414] hover:bg-white'
                    }`}
                  >
                    Mirror Glaze
                  </button>
                </div>
              </div>
            </div>

            {/* Eco Cost & Formula Comparison Block (Balances Column Height) */}
            <div className="rounded-2xl border-2 border-[#141414] bg-[#1C1917] text-white p-5 sm:p-6 shadow-[6px_6px_0px_#15803D]">
              <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/15">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FACC15]">
                  Honest Philippine Value
                </span>
                <span className="font-['JetBrains_Mono'] text-xs font-semibold text-[#86EFAC]">
                  Side-by-Side
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#14532D] border border-[#FACC15]">
                  <p className="font-bold text-[#FEF08A] uppercase tracking-wider mb-1">
                    Banaling Tin
                  </p>
                  <p className="font-['JetBrains_Mono'] text-lg font-bold text-white tabular-nums">
                    {formatPHP(PRODUCTS[0].pricePhp)}
                  </p>
                  <p className="mt-1.5 text-emerald-100 leading-relaxed">
                    Upcycled banana peel, coconut charcoal, zero toxic fumes.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#292524] border border-white/15">
                  <p className="font-bold text-stone-300 uppercase tracking-wider mb-1">
                    Imported Wax
                  </p>
                  <p className="font-['JetBrains_Mono'] text-lg font-bold text-stone-300 tabular-nums">
                    ₱240.00+
                  </p>
                  <p className="mt-1.5 text-stone-400 leading-relaxed">
                    Petroleum distillates, synthetic dyes, plastic sponge tips.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bold Color-Framed Craft Photo + 4 Solid Color-Blocked Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-4 sm:p-5 rounded-2xl border-2 border-[#141414] bg-[#15803D] shadow-[6px_6px_0px_#141414]">
              <div className="relative p-3">
                <CornerBracketFrame leafClass="border-white" goldClass="border-[#141414]" />
                <div className="p-2 rounded-xl border-2 border-[#141414] bg-[#FEF08A]">
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-[#141414] bg-stone-100">
                    <SafeImage
                      src={IMAGES.craftBuffing}
                      alt="Artisan hands buffing a cognac leather derby shoe toe cap with a cotton cloth"
                      fallbackLabel="Artisan Buffing Craft"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_US_PILLARS.map((pillar, idx) => {
                const style = PILLAR_CARD_STYLES[idx % PILLAR_CARD_STYLES.length];
                return (
                  <div
                    key={pillar.number}
                    className={`p-5 rounded-xl border-2 shadow-[4px_4px_0px_#141414] flex flex-col justify-between ${style.container}`}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`font-['JetBrains_Mono'] text-xs font-bold px-2.5 py-1 rounded border border-[#141414] tabular-nums ${style.numeralBg}`}
                        >
                          {pillar.number}
                        </span>
                        <h3 className="font-['Fraunces'] text-lg font-semibold leading-snug">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className={`text-xs font-semibold mb-2 ${style.summaryText}`}>
                        {pillar.summary}
                      </p>
                      <p className={`text-sm leading-relaxed ${style.bodyText}`}>
                        {pillar.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <GeometricRibbonStrip />
    </section>
  );
}
