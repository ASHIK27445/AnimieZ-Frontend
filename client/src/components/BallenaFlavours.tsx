export default function BallenaFlavors() {
  return (
    <section className="grid md:grid-cols-2 min-h-screen font-['Archivo',sans-serif]">
      {/* Left: image */}
      <div
        className="min-h-105 md:min-h-screen w-full bg-cover bg-center bg-[linear-gradient(90deg,rgba(0,0,0,0.15),rgba(0,0,0,0.15)),url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1600&auto=format&fit=crop')]"
      ></div>

      {/* Right: terracotta panel */}
      <div className="bg-[#bd725d] text-white flex flex-col justify-between px-8 sm:px-14 py-16 min-h-screen">
        <div>
          <p className="text-[12px] font-bold tracking-[0.2em] uppercase mb-6">Menu</p>
          <h2 className="font-['Cormorant_Garamond',serif] italic font-semibold leading-[0.95] text-[54px] sm:text-[64px] md:text-[76px] text-[#f8eee1]">
            Flavors That
            <br />
            Hold The Moment
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-[14px] sm:text-[15px] leading-[1.7] mb-6 text-white/95">
            The desert is not empty, it is pure life. It is the silence screaming, it is resistance made beautiful.
            It is an ecosystem where every leaf, every root, is an act of pure determination.
          </p>
          <a href="#" className="inline-flex items-center gap-3 text-[12px] font-bold tracking-[0.15em] uppercase group">
            View Full Menu
            <span className="w-7 h-7 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#bd725d] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}