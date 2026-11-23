import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { HOW_TO_STEPS } from '../data/catalog';
import {
  BotanicalCornerFlourish,
  GeometricRibbonStrip,
  SectionHorizonBand,
} from './BotanicalEditorialMotifs';
import { SectionKicker } from './SectionKicker';

function StepDiagramBanner({ stepIndex }: { stepIndex: number }) {
  switch (stepIndex) {
    case 0:
      return (
        <svg viewBox="0 0 120 72" fill="none" className="w-24 h-14 shrink-0" aria-hidden="true">
          <rect x="14" y="14" width="92" height="16" rx="4" fill="#FACC15" stroke="#141414" strokeWidth="2" />
          <path d="M22 30V48M34 30V48M46 30V48M58 30V48M70 30V48M82 30V48M94 30V48" stroke="#DCFCE7" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M18 58H102" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 6" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 120 72" fill="none" className="w-24 h-14 shrink-0" aria-hidden="true">
          <circle cx="60" cy="36" r="26" fill="#14532D" stroke="#FACC15" strokeWidth="2.5" />
          <path d="M44 36C44 27.163 51.163 20 60 20C68.837 20 76 27.163 76 36C76 44.837 68.837 52 60 52" stroke="#FEF08A" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="60" cy="36" r="6" fill="#FACC15" />
          <circle cx="24" cy="24" r="4" fill="#4ADE80" />
          <circle cx="96" cy="48" r="4" fill="#FACC15" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 120 72" fill="none" className="w-24 h-14 shrink-0" aria-hidden="true">
          <path d="M22 48C34 38 52 28 84 26C96 34 98 46 88 54C66 58 38 58 22 48Z" fill="#FACC15" stroke="#141414" strokeWidth="2" strokeLinejoin="round" />
          <path d="M42 18L46 10M60 15L62 7M78 18L84 10" stroke="#4ADE80" strokeWidth="3" strokeLinecap="round" />
          <path d="M62 34L80 34" stroke="#14532D" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 120 72" fill="none" className="w-24 h-14 shrink-0" aria-hidden="true">
          <circle cx="60" cy="36" r="26" fill="#FACC15" stroke="#141414" strokeWidth="2.5" />
          <path d="M46 37L55 46L75 26" stroke="#14532D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="22" cy="48" r="4" fill="#4ADE80" />
          <circle cx="98" cy="24" r="4" fill="#FEF08A" />
        </svg>
      );
  }
}

export function HowToUseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const activeStep = HOW_TO_STEPS[activeIndex];

  function toggleCompleted(index: number) {
    setCompletedSteps((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  }

  return (
    <section
      id="how-to-use"
      className="scroll-mt-16 bg-[#14532D] text-white bg-pattern-grid-dark border-b-2 border-[#141414]"
    >
      <div className="max-w-6xl mx-auto px-6 py-14 lg:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <SectionKicker label="How to Use · Photo-Free Interactive Guide" tone="on-dark" />
            <h2 className="font-['Fraunces'] text-3xl sm:text-4xl font-semibold text-white tracking-tight text-balance">
              Simple four-step eco polish ritual
            </h2>
          </div>
          <p className="text-sm text-[#141414] font-medium max-w-md bg-[#FEF08A] p-4 rounded-xl border-2 border-[#141414] shadow-[4px_4px_0px_#1C1917]">
            Step through the interactive ritual below—8 minutes total from dry dust prep to a
            deep banana peel and charcoal luster.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Step Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3" role="tablist" aria-label="Shoe polishing steps">
            {HOW_TO_STEPS.map((step, index) => {
              const isSelected = index === activeIndex;
              const isDone = completedSteps.includes(index);
              return (
                <button
                  key={step.stepNumber}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-5 rounded-xl border-2 transition-transform duration-150 cursor-pointer flex-1 flex items-center ${
                    isSelected
                      ? 'border-[#141414] bg-[#FACC15] text-[#141414] shadow-[5px_5px_0px_#141414] -translate-y-0.5'
                      : 'border-[#141414] bg-[#FFFDF7] text-[#141414] hover:bg-[#DCFCE7]'
                  }`}
                >
                  <div className="w-full flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`font-['JetBrains_Mono'] text-xs font-bold px-2.5 py-1.5 rounded border border-[#141414] tabular-nums ${
                          isSelected
                            ? 'bg-[#14532D] text-[#FEF08A]'
                            : 'bg-[#1C1917] text-[#FACC15]'
                        }`}
                      >
                        {step.stepNumber}
                      </span>
                      <span className="font-['Fraunces'] text-lg font-semibold leading-snug">
                        {step.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {isDone && (
                        <Check
                          className="w-4 h-4 text-[#14532D]"
                          aria-label="Step completed"
                        />
                      )}
                      <span className="text-xs font-semibold text-[#14532D] tabular-nums">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Step Elements Panel (Zero Photos) */}
          <div className="lg:col-span-7 relative">
            <BotanicalCornerFlourish className="pointer-events-none hidden lg:block absolute -top-9 -right-8 w-24 h-24 z-20" />

            <div
              role="tabpanel"
              aria-label={`Step ${activeStep.stepNumber}: ${activeStep.title}`}
              className="relative h-full rounded-2xl border-2 border-[#141414] bg-[#FFFDF7] text-[#141414] p-6 sm:p-8 flex flex-col justify-between shadow-[8px_8px_0px_#FACC15]"
            >
              <div>
                {/* Step Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold uppercase tracking-wider text-[#14532D]">
                      Step {activeStep.stepNumber} of 04
                    </span>
                    <span className="font-semibold tabular-nums text-[#92400E]">
                      {completedSteps.length} / {HOW_TO_STEPS.length} steps checked
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2" aria-hidden="true">
                    {HOW_TO_STEPS.map((s, idx) => (
                      <div
                        key={s.stepNumber}
                        className={`h-2.5 rounded-full border border-[#141414] transition-colors duration-150 ${
                          idx <= activeIndex
                            ? 'bg-gradient-to-r from-[#FACC15] via-[#22C55E] to-[#14532D]'
                            : 'bg-[#DCFCE7]'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Solid Charcoal Vector Diagram Banner */}
                <div className="rounded-xl bg-[#1C1917] text-white border-2 border-[#141414] p-5 flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
                  <div className="rounded-lg bg-[#292524] border border-[#FACC15]/50 p-3 flex items-center justify-center shrink-0">
                    <StepDiagramBanner stepIndex={activeIndex} />
                  </div>
                  <div>
                    <h3 className="font-['Fraunces'] text-2xl font-semibold text-[#FEF08A]">
                      {activeStep.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-stone-200 leading-relaxed">
                      {activeStep.instruction}
                    </p>
                  </div>
                </div>

                {/* 4 Solid Color-Blocked Ritual Parameter Tiles */}
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
                  <div className="p-4 rounded-xl bg-[#DCFCE7] border-2 border-[#141414]">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-[#14532D] mb-1">
                      Estimated Time
                    </dt>
                    <dd className="text-sm font-semibold text-[#141414] tabular-nums">
                      {activeStep.duration}
                    </dd>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FEF08A] border-2 border-[#141414]">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-[#14532D] mb-1">
                      Required Tool
                    </dt>
                    <dd className="text-sm font-semibold text-[#141414]">
                      {activeStep.toolUsed}
                    </dd>
                  </div>

                  <div className="p-4 rounded-xl bg-[#14532D] text-white border-2 border-[#141414]">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-[#FEF08A] mb-1">
                      Application Motion
                    </dt>
                    <dd className="text-sm font-semibold">
                      {activeStep.motion}
                    </dd>
                  </div>

                  <div className="p-4 rounded-xl bg-[#1C1917] text-white border-2 border-[#141414]">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-[#86EFAC] mb-1">
                      Paste Amount
                    </dt>
                    <dd className="text-sm font-semibold text-[#FEF08A]">
                      {activeStep.pasteAmount}
                    </dd>
                  </div>
                </dl>

                {/* Eco Tip Banner */}
                <div className="p-4 rounded-xl border-2 border-[#141414] bg-[#FACC15] text-[#141414]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#14532D] mb-1">
                    Eco Tip
                  </p>
                  <SectionHorizonBand className="mb-2" />
                  <p className="text-sm font-medium">{activeStep.proTip}</p>
                </div>
              </div>

              {/* Interactive Controls: Mark Done + Prev / Next Step */}
              <div className="mt-6 pt-5 border-t-2 border-[#DCFCE7] flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => toggleCompleted(activeIndex)}
                  aria-pressed={completedSteps.includes(activeIndex)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg border-2 border-[#141414] cursor-pointer ${
                    completedSteps.includes(activeIndex)
                      ? 'bg-[#14532D] text-white'
                      : 'bg-[#DCFCE7] text-[#141414] hover:bg-[#FEF08A]'
                  }`}
                >
                  <Check
                    className={`w-3.5 h-3.5 ${
                      completedSteps.includes(activeIndex) ? 'text-[#FDE047]' : 'text-[#14532D]'
                    }`}
                    aria-hidden="true"
                  />
                  <span>
                    {completedSteps.includes(activeIndex) ? 'Completed' : 'Mark Step Done'}
                  </span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                    disabled={activeIndex === 0}
                    aria-label="Previous step"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold border-2 border-[#141414] bg-white text-[#141414] rounded-lg hover:bg-[#FEF08A] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((i) => Math.min(HOW_TO_STEPS.length - 1, i + 1))
                    }
                    disabled={activeIndex === HOW_TO_STEPS.length - 1}
                    aria-label="Next step"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold bg-[#14532D] text-white rounded-lg border-2 border-[#141414] hover:bg-[#166534] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FDE047]" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GeometricRibbonStrip />
    </section>
  );
}
