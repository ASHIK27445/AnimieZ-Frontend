export default function Schilers() {
  return (
    <div className="bg-white font-['Poppins',sans-serif]">
      {/* Intro section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 grid md:grid-cols-2 gap-12 items-center">
          <h2 className="font-['Cormorant_Garamond',serif] italic text-[42px] sm:text-[48px] md:text-[56px] leading-[1.02] text-[#242820]">
            This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.
          </h2>
          <div className="space-y-6 text-[#697064] text-[14px] leading-[1.9] border-l border-[#df8b53] pl-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.
            </p>
          </div>
        </div>
      </section>

      {/* Hero section */}
      <section
        className="relative min-h-[560px] flex items-center bg-cover bg-center bg-[linear-gradient(0deg,rgba(0,0,0,0.35),rgba(0,0,0,0.35)),url('https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2000&auto=format&fit=crop')]"
      >
        <div className="max-w-4xl mx-auto px-6 text-center text-white py-24">
          <h1 className="font-['Cormorant_Garamond',serif] italic text-[54px] sm:text-[68px] md:text-[82px] leading-none mb-8">
            Our Great Food
          </h1>
          <p className="text-white/90 text-[15px] leading-[1.9] max-w-3xl mx-auto mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition
            ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip doeius mod
            tempor incidition
          </p>
          <a
            href="#"
            className="inline-block bg-[#f7f1e7] text-[#242820] text-[11px] font-bold tracking-[0.18em] uppercase px-8 py-4 hover:bg-[#df8b53] transition-colors"
          >
            View Our Menu
          </a>
        </div>
      </section>

      {/* Floating side buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col z-40 shadow-lg">
        <a
          href="#"
          className="w-14 h-14 flex items-center justify-center bg-[#e0405a] text-white hover:bg-[#c73449] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </a>
        <a
          href="#"
          className="w-14 h-14 flex items-center justify-center bg-white text-[#e0405a] hover:bg-[#f5f5f5] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </a>
      </div>

      {/* Scroll to top */}
      {/* <a
        href="#top"
        className="fixed right-6 bottom-6 w-11 h-11 flex items-center justify-center bg-[#2b2b2b] text-white hover:bg-black transition-colors z-40"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </a> */}
    </div>
  );
}