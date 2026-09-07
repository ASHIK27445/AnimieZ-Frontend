import { useEffect, useState } from "react";

export default function Hero() {
  const [isHeroScrolled, setIsHeroScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsHeroScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex-1 flex items-center justify-center px-6 min-h-screen overflow-hidden">
      {/* Background video - swap the src for your own restaurant footage */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover animate-[hero-video-in_1200ms_ease-out_both]"
      >
        <source src="https://www.pexels.com/download/video/34891329/" type="video/mp4" />
      </video>

      {/* Same darkening gradient the original hero-bg used, so text stays readable */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.68)_0%,rgba(10,10,10,0.18)_42%,rgba(10,10,10,0.82)_100%)] animate-[hero-overlay-in_900ms_ease-out_both]"></div>

      {/* Wave edge at the bottom - fill color should match whatever section comes right after this Hero.
          z-0 so it sits behind the content, purely decorative on the video/overlay. */}
      <svg
        className="absolute bottom-0 left-0 w-full h-15 sm:h-22.5 text-[#F5F0E6] z-0 pointer-events-none"
        viewBox="0 0 1440 74"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0,74 L1440,74 L1440,50 C1344,30 1248,20 1152,25 C1056,30 960,50 864,50 C768,50 672,30 576,22 C480,14 384,14 288,20 C192,26 96,38 48,44 L0,50 Z"
        />
      </svg>

      <div
        className={`relative z-20 max-w-4xl mx-auto text-center pt-20 pb-28 sm:pb-32 text-white translate-y-10 sm:translate-y-16 animate-[hero-content-in_900ms_ease-out_150ms_both] transition-transform duration-700 ease-out ${
          isHeroScrolled ? "scale-[0.82]" : "scale-100"
        }`}
      >
        <div
          className={`flex items-center justify-center gap-4 mb-6 overflow-hidden transition-[opacity,max-height,margin] duration-500 ease-out ${
            isHeroScrolled ? "max-h-0 opacity-0 mb-0" : "max-h-8 opacity-100"
          }`}
        >
          <span className="h-px w-12 bg-white/50"></span>
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#f3d6b8]">
            Welcome to PatioTime
          </span>
          <span className="h-px w-12 bg-white/50"></span>
        </div>

        <h1
          className="italic text-[48px] sm:text-7xl md:text-[88px] leading-[0.94] mb-7 text-[#f7f1e7]"
          style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
        >
          Delicious Food &amp; Wonderful
          <br className="hidden sm:block" /> Eating Experience
        </h1>

        <p className="text-white/75 text-sm sm:text-base tracking-wide mb-10">We Serve Food, Harmony, &amp; Laughter Since 1998</p>

        <a
          href="#"
          className="inline-block bg-[#df8b53] hover:bg-[#f0a66f] transition-colors text-[#171914] text-[11px] font-bold tracking-[0.18em] uppercase px-9 py-4"
        >
          View Full Menus
        </a>
      </div>
    </section>
  );
}