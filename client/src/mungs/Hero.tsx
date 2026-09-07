const sections = [
  "Welcome",
  "The Concept",
  "The Place",
  "The Menu",
  "Gallery",
  "The Team",
  "Events",
  "Contact",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#F6F1E9] text-[#2b2b2b] font-['Poppins',sans-serif] overflow-hidden">
      {/* Top bar: social + language */}
      <div className="absolute top-6 right-6 sm:right-10 flex items-center gap-5 text-[12px] font-semibold tracking-wide z-10">
        <a href="#" aria-label="Facebook" className="hover:opacity-60 transition-opacity">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
          </svg>
        </a>
        <a href="#" className="uppercase hover:opacity-60 transition-opacity">English</a>
      </div>

      {/* Vertical side nav */}
      <nav className="hidden lg:flex flex-col gap-6 absolute left-8 top-1/2 -translate-y-1/2 z-10">
        {sections.map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
            className="group flex items-center gap-3 text-[11px] font-semibold tracking-[0.15em] uppercase text-[#2b2b2b]/50 hover:text-[#2b2b2b] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2b2b2b]/30 group-hover:bg-[#2b2b2b] transition-colors"></span>
            {label}
          </a>
        ))}
      </nav>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="w-16 h-16 rounded-full border border-[#2b2b2b]/20 flex items-center justify-center mb-8">
          <svg width="28" height="18" viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 30c6-14 10-20 14-20s4 10 8 10 6-16 10-16 4 14 8 14 6-10 10-10" />
          </svg>
        </div>

        <p className="font-['Playfair_Display',serif] italic text-2xl sm:text-3xl md:text-4xl max-w-2xl leading-snug mb-4">
          "A little indulgence never hurt anyone."
        </p>

        <h1 className="font-['Playfair_Display',serif] font-bold uppercase tracking-[0.2em] text-[15px] sm:text-base mb-10">
          Home &amp; Made Kitchen
        </h1>

        <p className="max-w-md text-[14px] sm:text-[15px] leading-[1.8] text-[#2b2b2b]/70">
          A cozy little canteen at the heart of town, where everything is made from scratch — perfect for a
          lazy brunch or an after-work catch-up. Come as you are.
        </p>
      </div>

      {/* Scroll down cue */}
      <a
        href="#the-concept"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#2b2b2b]/60 hover:text-[#2b2b2b] transition-colors"
      >
        Scroll Down
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}