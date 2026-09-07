import { useEffect, useState } from "react";
import { Heart, ShoppingCart, UserRound, ChevronDown } from "lucide-react";

export default function AnimieZNavbar() {
  const [isTop, setIsTop] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      setIsTop(window.scrollY < 24);
      setIsScrolling(true);
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => setIsScrolling(false), 180);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.clearTimeout(hideTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-110 h-8 overflow-hidden bg-[#0b0b0b] text-white" aria-label="Summer offer">
        <div className="animiez-marquee flex h-full w-max items-center gap-12 whitespace-nowrap px-4 text-[9px] font-black tracking-[0.22em]">
          <span>25% OFF ON THIS SUMMER DROP</span>
          <span>FREE SHIPPING ON ORDERS OVER $100</span>
          <span>25% OFF ON THIS SUMMER DROP</span>
          <span>FREE SHIPPING ON ORDERS OVER $100</span>
        </div>
      </div>
      <nav
        className={`fixed inset-x-0 top-8 z-100 transition-all duration-300 ${
          isScrolling ? "-translate-y-full" : "translate-y-0"
        } ${isTop ? "bg-transparent" : "bg-[#0b0b0b]/95 shadow-lg backdrop-blur-md"}`}
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-19 max-w-375 items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-2xl tracking-[-0.03em] text-white">
          ANIMIEZ<span className="text-[#d9ff3f]">_</span>
        </a>

        <div className="hidden items-center gap-8 font-[Arial_Narrow,Arial,sans-serif] md:flex">
          <a href="#drops" className="text-[10px] font-bold tracking-[0.2em] text-white/75 transition-colors hover:text-[#d9ff3f]">DROP</a>
          <a href="#origin" className="text-[10px] font-bold tracking-[0.2em] text-white/75 transition-colors hover:text-[#d9ff3f]">COLLECTION</a>
          <a href="#ethos" className="text-[10px] font-bold tracking-[0.2em] text-white/75 transition-colors hover:text-[#d9ff3f]">OUR STORY</a>
          <div className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen((open) => !open)}
              className="flex items-center gap-1 text-[10px] font-bold tracking-[0.2em] text-white/75 transition-colors hover:text-[#d9ff3f]"
              aria-expanded={moreOpen}
              aria-haspopup="true"
            >
              MORE <ChevronDown className={`h-3 w-3 transition-transform ${moreOpen ? "rotate-180" : ""}`} />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-8 w-36 border border-white/15 bg-[#0b0b0b] p-2 shadow-xl">
                <a href="#review" className="block px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white/75 hover:bg-white/10 hover:text-[#d9ff3f]">REVIEW</a>
                <a href="#faq" className="block px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white/75 hover:bg-white/10 hover:text-[#d9ff3f]">FAQ</a>
                <a href="#contact" className="block px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white/75 hover:bg-white/10 hover:text-[#d9ff3f]">CONTACT</a>
              </div>
            )}
          </div>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <button type="button" aria-label="Open shopping bag" className="text-white/75 transition-colors hover:text-[#d9ff3f]"><ShoppingCart className="h-4.5 w-4.5" /></button>
          <button type="button" aria-label="Open favourite items" className="text-white/75 transition-colors hover:text-[#d9ff3f]"><Heart className="h-4.5 w-4.5" /></button>
          <button type="button" aria-label="Open account" className="text-white/75 transition-colors hover:text-[#d9ff3f]"><UserRound className="h-4.5 w-4.5" /></button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-white/40 md:hidden"
        >
          <span className="h-px w-4 bg-white" />
          <span className="h-px w-4 bg-white" />
        </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0b0b0b] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              <a href="#drops" onClick={() => setMenuOpen(false)} className="text-xs font-bold tracking-[0.2em] text-white">DROP</a>
              <a href="#origin" onClick={() => setMenuOpen(false)} className="text-xs font-bold tracking-[0.2em] text-white">COLLECTION</a>
              <a href="#ethos" onClick={() => setMenuOpen(false)} className="text-xs font-bold tracking-[0.2em] text-white">OUR STORY</a>
              <a href="#review" onClick={() => setMenuOpen(false)} className="text-xs font-bold tracking-[0.2em] text-white">REVIEW</a>
              <a href="#faq" onClick={() => setMenuOpen(false)} className="text-xs font-bold tracking-[0.2em] text-white">FAQ</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="text-xs font-bold tracking-[0.2em] text-white">CONTACT</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
