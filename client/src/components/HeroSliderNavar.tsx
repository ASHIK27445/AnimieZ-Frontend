export default function HeroSliderNavbar() {
  return (
    <div className="relative z-20 pt-6">
      {/* Logo mark */}
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 rounded-full bg-black/40 flex items-center justify-center">
          <svg width="30" height="20" viewBox="0 0 60 40" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 30c6-14 10-20 14-20s4 10 8 10 6-16 10-16 4 14 8 14 6-10 10-10" />
          </svg>
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex items-center justify-center gap-9 text-white text-[13px] font-bold tracking-wide uppercase">
        <a href="#" className="hover:text-white/70 transition-colors">Home</a>
        <a href="#" className="hover:text-white/70 transition-colors">Pages</a>
        <a href="#" className="hover:text-white/70 transition-colors">Elements</a>
        <a href="#" className="hover:text-white/70 transition-colors">Portfolio</a>
        <a href="#" className="hover:text-white/70 transition-colors">Blog</a>
        <a href="#" className="hover:text-white/70 transition-colors">Shop</a>

        <button aria-label="Search" className="hover:text-white/70 transition-colors">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>

        <button aria-label="Cart" className="relative hover:text-white/70 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#E42A63] text-white text-[9px] font-bold flex items-center justify-center">
            0
          </span>
        </button>
      </nav>
    </div>
  );
}