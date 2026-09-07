export default function RestaurentLocation() {
  return (
    // bg-[#F5F0E6] shows through the wave gap - match this to whatever sits above/behind this section.
    <div className="bg-[#F5F0E6]">
      <div
        className="relative min-h-screen w-full text-white font-['Archivo',sans-serif] bg-cover bg-center overflow-hidden bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.05)_30%,rgba(0,0,0,0.35)_100%),url('https://images.pexels.com/photos/4256560/pexels-photo-4256560.jpeg')]"
      >
        {/* Wave edge - filled with the page background color so the top reads as a wave cut into the photo, like a shoreline */}
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

        {/* Headline */}
        <div className="absolute top-27.5 left-8 right-8 sm:left-12">
          <h1 className="font-['Cormorant_Garamond',serif] italic font-semibold leading-[0.88] text-[#f3eadc] text-[52px] sm:text-[70px] md:text-[88px] lg:text-[104px]">
            Noir Dining, where
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
        </div>
      </div>
    </div>
  );
}