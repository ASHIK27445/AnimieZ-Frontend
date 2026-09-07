import { useEffect, useRef, useState } from "react";
import AboutPage from "./AboutPage";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "Menus", href: "#menus" },
  { label: "About", href: "./AboutPage" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY.current;

      setIsScrolled(currentScrollY > 12);

      // Keep the navbar pinned open while the mobile menu is open
      if (!isMenuOpen) {
        setIsVisible(false);

        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          setIsVisible(scrollingUp || currentScrollY <= 12);
        }, 180);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [isMenuOpen]);

  // Close the mobile menu automatically if the panel gets scrolled away from
  useEffect(() => {
    if (isMenuOpen) setIsVisible(true);
  }, [isMenuOpen]);

  const mutedText = isScrolled || isMenuOpen ? "text-[#171914]/75" : "text-white/90";
  const linkText = isScrolled || isMenuOpen ? "text-[#171914]/75 hover:text-[#171914]" : "text-white/85 hover:text-white";
  const showSolidBg = isScrolled || isMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${showSolidBg ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className={`w-full border-b ${showSolidBg ? "border-black/10" : "border-white/10"}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] tracking-wide">
          <div className={`flex items-center gap-2 ${mutedText}`}>
            <span>Silk St, Barbican, London EC2Y 8DS, UK</span>
          </div>
          <div className={`flex items-center gap-4 sm:gap-6 ${mutedText}`}>
            <span>+39-055-123456</span>
            <span>booking@noir-dining.com</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-5 flex items-center justify-between">
        <a
          href="#"
          className={`font-['Cormorant_Garamond',serif] italic text-5xl leading-none tracking-tight ${showSolidBg ? "text-[#b85c28]" : "text-[#f3d6b8]"}`}
        >
          Nd.
        </a>

        <nav className="hidden lg:flex items-center gap-9 text-[11px] tracking-[0.16em] font-semibold uppercase">
          {menuItems.map((item, index) => (
            <a
              key={item.label}
              href="./AboutPage"
              className={`relative pb-2 flex items-center gap-1 ${index === 0 ? "text-[#E07B2B]" : linkText}`}
            >
              {item.label}
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>
          ))}
        </nav>

        <a
          href="#"
          className={`hidden md:inline-block border border-[#df8b53]/70 px-6 py-3 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors ${showSolidBg ? "text-[#b85c28]" : "text-[#f3d6b8]"} hover:bg-[#df8b53] hover:border-[#df8b53] hover:text-[#171914]`}
        >
          Find a Table
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className={`lg:hidden relative w-8 h-8 flex items-center justify-center ${showSolidBg ? "text-[#171914]" : "text-white"}`}
        >
          <span
            className={`absolute block h-[1.5px] w-6 bg-current transition-all duration-300 ${
              isMenuOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute block h-[1.5px] w-6 bg-current transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute block h-[1.5px] w-6 bg-current transition-all duration-300 ${
              isMenuOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out bg-white/98 backdrop-blur-md border-t border-black/10 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-6 py-4 flex flex-col text-[12px] tracking-[0.16em] font-semibold uppercase">
          {menuItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`py-3 border-b border-black/5 last:border-b-0 ${
                index === 0 ? "text-[#E07B2B]" : "text-[#171914]/75"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 mb-2 inline-block text-center border border-[#df8b53]/70 px-6 py-3 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#b85c28] hover:bg-[#df8b53] hover:border-[#df8b53] hover:text-[#171914] transition-colors"
          >
            Find a Table
          </a>
        </nav>
      </div>
    </header>
  );
}