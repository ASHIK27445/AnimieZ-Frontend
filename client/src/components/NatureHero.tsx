import { ArrowRight } from "lucide-react";

export default function NatureRetreatHero() {
  return (
    <div className="w-full min-h-screen bg-[#F5F0E6] flex items-center">
      <div className="w-full max-w-350 mx-auto px-10 md:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left column - eyebrow label */}
          <div className="md:col-span-3">
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#1a1a1a]">
              NOIR DINING
            </span>
          </div>

          {/* Right column - headline, body, CTA */}
          <div className="md:col-span-9">
            <h1 className="text-[#1a1a1a] font-medium uppercase leading-[1.05] tracking-[-0.01em] text-[34px] sm:text-[42px] md:text-[52px] lg:text-[58px]">
              Where the kitchen moves with the landscape. Discover our
              restaurant in nature
            </h1>

            <p className="mt-8 max-w-70 text-[15px] leading-normal text-[#1a1a1a]">
              Around the table, Noir Dining comes to life. Good company, shared
              plates, and moments that linger.
            </p>

            <button className="mt-10 flex items-center gap-3 group">
              <span className="text-[11px] font-bold tracking-[0.12em] text-[#1a1a1a]">
                EXPLORE GALLERY
              </span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1a1a1a] transition-transform duration-200 group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5 text-[#F5F0E6]" strokeWidth={2.5} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}