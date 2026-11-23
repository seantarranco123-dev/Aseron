export function BotanicalCornerFlourish({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M128 12C88 18 52 44 30 88C58 80 96 56 128 12Z"
        fill="#FACC15"
        fillOpacity="0.28"
        stroke="#F59E0B"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M128 12C98 38 66 66 30 88"
        stroke="#14532D"
        strokeWidth="1.2"
        strokeDasharray="3 4"
        strokeLinecap="round"
      />
      <path
        d="M108 48C84 60 68 82 60 112C82 102 100 80 108 48Z"
        fill="#4ADE80"
        fillOpacity="0.24"
        stroke="#15803D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M134 52C122 86 94 114 56 128"
        stroke="#22C55E"
        strokeWidth="1.15"
        strokeDasharray="2 5"
        strokeLinecap="round"
      />
      <circle cx="20" cy="98" r="3.5" fill="#F59E0B" />
      <circle cx="52" cy="128" r="2.5" fill="#15803D" />
    </svg>
  );
}

export function HeroOrbitalLines({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="140"
        cy="140"
        r="128"
        stroke="#FACC15"
        strokeWidth="1.6"
        strokeDasharray="8 6"
        opacity="0.72"
      />
      <circle
        cx="140"
        cy="140"
        r="104"
        stroke="#86EFAC"
        strokeWidth="1.4"
        opacity="0.6"
      />
      <circle
        cx="140"
        cy="140"
        r="78"
        stroke="#FACC15"
        strokeWidth="1"
        strokeDasharray="2 6"
        opacity="0.55"
      />
      <path
        d="M14 140H56M224 140H266M140 14V56M140 224V266"
        stroke="#FDE047"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

export function CornerBracketFrame({
  leafClass = 'border-[#15803D]',
  goldClass = 'border-[#F59E0B]',
}: {
  leafClass?: string;
  goldClass?: string;
}) {
  return (
    <>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 ${leafClass}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 ${goldClass}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 ${goldClass}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 ${leafClass}`}
      />
    </>
  );
}

export function LeafDiamondDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#FACC15] to-[#4ADE80]" />
      <span className="w-2 h-2 rounded-full bg-[#FACC15]" />
      <span className="w-5 h-[2px] bg-[#F59E0B]" />
      <span className="w-3 h-3 rotate-45 border-2 border-[#4ADE80] bg-[#FACC15]" />
      <span className="w-5 h-[2px] bg-[#22C55E]" />
      <span className="w-2 h-2 rounded-full bg-[#4ADE80]" />
      <span className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-[#22C55E] to-[#FACC15]" />
    </div>
  );
}

export function SectionHorizonBand({ className = '' }: { className?: string }) {
  return (
    <div
      className={`w-full flex items-center gap-2 ${className}`}
      aria-hidden="true"
    >
      <span className="h-[3px] w-12 bg-[#F59E0B]" />
      <span className="w-2 h-2 rotate-45 bg-[#15803D]" />
      <span className="h-[2px] flex-1 bg-gradient-to-r from-[#F59E0B]/70 via-[#15803D]/55 to-transparent" />
    </div>
  );
}

export function GeometricRibbonStrip({ className = '' }: { className?: string }) {
  return (
    <div
      className={`w-full h-3 grid grid-cols-12 border-y border-[#141414] overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <span className="bg-[#FACC15]" />
      <span className="bg-[#14532D]" />
      <span className="bg-[#DCFCE7]" />
      <span className="bg-[#1C1917]" />
      <span className="bg-[#FACC15]" />
      <span className="bg-[#15803D]" />
      <span className="bg-[#FEF08A]" />
      <span className="bg-[#1C1917]" />
      <span className="bg-[#4ADE80]" />
      <span className="bg-[#FACC15]" />
      <span className="bg-[#14532D]" />
      <span className="bg-[#FEF08A]" />
    </div>
  );
}

export function BananaBotanicalArtwork({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Sunburst Arc */}
      <path
        d="M20 96A70 70 0 0 1 160 96"
        stroke="#FACC15"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <path
        d="M40 96A50 50 0 0 1 140 96"
        fill="#DCFCE7"
        fillOpacity="0.28"
        stroke="#15803D"
        strokeWidth="1.5"
      />
      {/* Stylized Banana Peel Fan */}
      <path
        d="M90 22C74 44 68 68 74 96C84 74 88 48 90 22Z"
        fill="#FACC15"
        stroke="#141414"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M90 22C106 44 112 68 106 96C96 74 92 48 90 22Z"
        fill="#FEF08A"
        stroke="#141414"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M90 22C62 40 46 66 42 94C60 80 78 54 90 22Z"
        fill="#4ADE80"
        stroke="#141414"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M90 22C118 40 134 66 138 94C120 80 102 54 90 22Z"
        fill="#14532D"
        stroke="#141414"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <rect x="85" y="14" width="10" height="8" rx="2" fill="#1C1917" />
      <circle cx="30" cy="42" r="4" fill="#FACC15" stroke="#141414" strokeWidth="1.2" />
      <circle cx="150" cy="42" r="4" fill="#4ADE80" stroke="#141414" strokeWidth="1.2" />
      <path d="M16 96H164" stroke="#141414" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
