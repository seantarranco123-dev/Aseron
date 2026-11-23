import { BrandLogo } from './BrandLogo';
import { GeometricRibbonStrip, LeafDiamondDivider } from './BotanicalEditorialMotifs';

export function Footer() {
  return (
    <footer className="bg-[#141414] text-white">
      <GeometricRibbonStrip />
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10">
          <div className="md:col-span-5">
            <a
              href="#top"
              className="inline-flex items-center gap-2.5 text-white"
            >
              <BrandLogo className="w-7 h-7 text-[#86EFAC]" />
              <span className="font-['Fraunces'] text-xl font-semibold tracking-tight text-[#FEF08A]">
                Banaling
              </span>
            </a>
            <p className="mt-4 text-sm text-stone-300 leading-relaxed max-w-sm">
              Eco-friendly, low-cost natural shoe polish crafted from upcycled Philippine banana
              peels and activated charcoal. All pricing exclusively in Philippine Pesos (₱).
            </p>
          </div>

          <div className="md:col-span-3 space-y-2.5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#FACC15]">
              Navigate
            </p>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <a href="#collection" className="hover:text-[#FEF08A] transition-colors">
                  Collection & Pricing
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#FEF08A] transition-colors">
                  Why Banaling
                </a>
              </li>
              <li>
                <a href="#how-to-use" className="hover:text-[#FEF08A] transition-colors">
                  How to Use
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#FEF08A] transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2.5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#86EFAC]">
              Manila Studio & Orders
            </p>
            <div className="space-y-1.5 text-sm text-stone-300">
              <p>San Antonio, Makati City, Metro Manila 1203</p>
              <p className="tabular-nums">Direct Line / Fax: +63 (02) 8555 0148</p>
              <p>concierge@banaling.ph</p>
            </div>
          </div>
        </div>

        <LeafDiamondDivider />

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Banaling Eco Shoe Care. All rights reserved.</p>
          <p className="font-semibold text-[#FACC15]">Currency: Philippine Peso (₱ PHP) Only</p>
        </div>
      </div>
    </footer>
  );
}
