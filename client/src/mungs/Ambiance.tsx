import { useEffect, useRef, useState } from "react";

export default function Ambiance() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);

  // Simple scroll-linked parallax: the background image drifts slower than the page scroll
  useEffect(() => {
    function handleScroll() {
      const node = sectionRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      setOffset((progress - 0.5) * 80);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="the-place"
      className="relative w-full min-h-[640px] bg-[#2b2b2b] font-['Poppins',sans-serif] overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2400&auto=format&fit=crop"
        alt=""
        style={{ transform: `translateY(${offset}px) scale(1.15)` }}
        className="absolute inset-0 w-full h-full object-cover opacity-70 will-change-transform"
      />
      <div className="absolute inset-0 bg-black/25"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-28 flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-white/95 flex flex-col items-center justify-center text-center px-6 shadow-xl">
          <p className="font-['Playfair_Display',serif] italic text-lg text-[#2b2b2b]">Easy on</p>
          <p className="font-['Playfair_Display',serif] italic text-lg text-[#2b2b2b]">the eyes</p>
        </div>

        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#C97B4A] flex flex-col items-center justify-center text-center px-4 shadow-xl md:-mt-24">
          <p className="font-['Playfair_Display',serif] italic text-base text-white">Cozy</p>
        </div>

        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-white/95 flex flex-col items-center justify-center text-center px-6 shadow-xl md:mt-16">
          <p className="font-['Playfair_Display',serif] italic text-lg text-[#2b2b2b]">Quiet &amp;</p>
          <p className="font-['Playfair_Display',serif] italic text-lg text-[#2b2b2b]">unhurried</p>
        </div>
      </div>
    </section>
  );
}