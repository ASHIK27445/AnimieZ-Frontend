export default function Contact() {
  return (
    <section className="relative min-h-155 w-full flex items-end justify-center overflow-hidden font-['Archivo',sans-serif]">
      {/* Background video - swap the src for your own restaurant/location footage */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=2400&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://www.pexels.com/download/video/12188718/" type="video/mp4" />
      </video>

      {/* Subtle darkening overlay so the white text stays readable */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Wave edge at top - fill should match whatever section sits right above this one */}
      <svg
        className="absolute top-0 left-0 w-full h-15 sm:h-22.5 text-[#F5F0E6] z-10"
        viewBox="0 0 1440 74"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0,0 L1440,0 L1440,24 C1344,44 1248,54 1152,49 C1056,44 960,24 864,24 C768,24 672,44 576,52 C480,60 384,60 288,54 C192,48 96,36 48,30 L0,24 Z"
        />
      </svg>

      <div className="relative w-full max-w-md sm:max-w-lg bg-[#536c5c]/95 px-8 sm:px-10 pt-9 pb-4 -mb-px border-t-2">
        <p className="text-[12px] font-bold tracking-[0.2em] border-b-2 border-dotted text-white mb-4 sm:mb-10">
          Contact and Location
        </p>
        <div className="flex sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="font-['Cormorant_Garamond',serif] italic font-semibold leading-[0.98] text-[38px] sm:text-[44px] text-[#f8eee1] max-w-55 border-r-2">
            A Meeting Point, Naturally
          </h2>
          <div className="text-[10px] sm:text-[13px] leading-[1.7] text-white">
            <p className="text-white/70  tracking-wide mb-2">Hours 5:00 Pm – 11:00 Pm</p>
            <p className=" tracking-wide">Weekends 12:00 Pm – 4:00 Pm</p>
            <p className=" tracking-wide mb-4">Phone +52 624 105 6635</p>
            <p className="font-medium tracking-wide">
              Silk St, Barbican, 
              <br />
              London EC2Y 8DS, UK
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}