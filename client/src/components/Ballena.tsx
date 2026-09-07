export default function Ballena() {
  return (
    <div
      className="relative min-h-screen w-full text-white font-['Archivo',sans-serif] bg-cover bg-center bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.05)_30%,rgba(0,0,0,0.35)_100%),url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2400&auto=format&fit=crop')]"
    >
      {/* Top left label */}
      <div className="absolute top-8 left-8 text-[12px] font-bold tracking-[0.15em] uppercase">
        Sea and Desert
      </div>

      {/* Top nav pill */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-4xl">
        <div className="bg-[#171914]/35 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-between pl-2 pr-6 py-2">
          <a
            href="#"
            className="bg-[#df8b53] hover:bg-[#f0a66f] transition-colors text-[#171914] text-[11px] font-bold tracking-[0.15em] uppercase rounded-full px-6 py-3"
          >
            Book Now
          </a>
          <span className="font-['Cormorant_Garamond',serif] italic text-2xl font-semibold tracking-[0.15em] uppercase">Ballena</span>
          <button className="flex flex-col gap-[5px] w-6">
            <span className="h-[2px] w-full bg-white"></span>
            <span className="h-[2px] w-full bg-white"></span>
            <span className="h-[2px] w-full bg-white"></span>
          </button>
        </div>
      </div>

      {/* Headline */}
      <div className="absolute top-[110px] left-8 right-8 sm:left-12">
        <h1 className="font-['Cormorant_Garamond',serif] italic font-semibold leading-[0.88] text-[#f3eadc] text-[52px] sm:text-[70px] md:text-[88px] lg:text-[104px]">
          Ballena, where
          <br />
          Gathering
          <br />
          Comes Naturally
        </h1>
      </div>

      {/* Bottom right text block */}
      <div className="absolute bottom-14 right-8 sm:right-12 max-w-xs text-right">
        <p className="text-[14px] sm:text-[15px] leading-[1.6] mb-4">
          Guided by time, light, and movement. An international kitchen rooted in territory, led by warmth, and
          made to be shared.
        </p>
        <a href="#" className="inline-flex items-center gap-3 text-[12px] font-bold tracking-[0.15em] uppercase group">
          Explore More
          <span className="w-7 h-7 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
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
  );
}