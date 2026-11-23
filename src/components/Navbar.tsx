import { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  bagCount: number;
  onOpenBag: () => void;
}

const NAV_LINKS = [
  { href: '#collection', label: 'Collection' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#how-to-use', label: 'How to Use' },
  { href: '#faqs', label: 'FAQs' },
];

export function Navbar({ bagCount, onOpenBag }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FEF08A] border-b-2 border-[#141414]">
      <div
        className="h-1.5 w-full bg-gradient-to-r from-[#14532D] via-[#FACC15] to-[#1C1917]"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Logo & Single-Line Wordmark */}
        <a
          href="#top"
          className="inline-flex items-center gap-2.5 text-[#141414] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#14532D]"
        >
          <BrandLogo className="w-7 h-7 text-[#14532D]" />
          <span className="font-['Fraunces'] text-xl font-semibold tracking-tight">
            Banaling
          </span>
        </a>

        {/* Zone 2: 4 Concise Single-Line Nav Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#141414]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#14532D] transition-colors duration-150 border-b-2 border-transparent hover:border-[#14532D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#14532D]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenBag}
            aria-label={`Open shopping bag, ${bagCount} ${bagCount === 1 ? 'item' : 'items'}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#14532D] hover:bg-[#166534] rounded-md border-2 border-[#141414] shadow-[2px_2px_0px_#141414] transition-transform duration-150 active:translate-y-px whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414]"
          >
            <ShoppingBag className="w-4 h-4 text-[#FDE047]" aria-hidden="true" />
            <span className="tabular-nums">Bag ({bagCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-[#141414] bg-white border-2 border-[#141414] rounded-md hover:bg-[#DCFCE7] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Sheet */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t-2 border-[#141414] bg-[#DCFCE7] px-6 py-4 flex flex-col gap-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 text-base font-semibold text-[#141414] hover:text-[#14532D] border-b border-[#14532D]/25 last:border-b-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
