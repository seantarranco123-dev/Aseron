interface SectionKickerProps {
  label: string;
  tone?: 'default' | 'on-yellow' | 'on-dark' | 'on-leaf';
}

export function SectionKicker({ label, tone = 'default' }: SectionKickerProps) {
  const textColor =
    tone === 'on-dark'
      ? 'text-[#FEF08A]'
      : tone === 'on-yellow'
      ? 'text-[#14532D]'
      : tone === 'on-leaf'
      ? 'text-[#14532D]'
      : 'text-[#14532D]';

  const diamondColor =
    tone === 'on-dark'
      ? 'bg-[#FACC15] ring-[#4ADE80]/40'
      : tone === 'on-yellow'
      ? 'bg-[#14532D] ring-white'
      : 'bg-[#F59E0B] ring-[#DCFCE7]';

  const ruleGradient =
    tone === 'on-dark'
      ? 'from-[#FACC15] to-[#4ADE80]'
      : tone === 'on-yellow'
      ? 'from-[#14532D] to-[#141414]'
      : 'from-[#F59E0B] to-[#15803D]';

  return (
    <div className="inline-flex items-center gap-2.5 mb-3">
      <span className={`w-2.5 h-2.5 rotate-45 ring-2 ${diamondColor}`} aria-hidden="true" />
      <span className={`w-8 h-[2.5px] bg-gradient-to-r ${ruleGradient}`} aria-hidden="true" />
      <p className={`text-xs font-bold tracking-widest uppercase ${textColor}`}>
        {label}
      </p>
    </div>
  );
}
