import { useInView } from "./UseInView";

const dishes = [
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=700&auto=format&fit=crop",
    from: "-translate-x-28 -translate-y-10",
  },
  {
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=700&auto=format&fit=crop",
    from: "translate-x-24 -translate-y-16",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=700&auto=format&fit=crop",
    from: "-translate-y-28",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=700&auto=format&fit=crop",
    from: "translate-x-20 translate-y-14",
  },
  {
    src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=700&auto=format&fit=crop",
    from: "-translate-x-20 translate-y-16",
  },
];

export default function MenuShowcase() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section id="the-menu" className="relative w-full bg-[#F6F1E9] font-['Poppins',sans-serif] text-[#2b2b2b] overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10 py-28 text-center">
        {/* Step 1: a line draws across as the section scrolls into view */}
        <div
          className={`h-px bg-[#2b2b2b]/20 mx-auto mb-8 origin-center transition-transform duration-700 ease-out ${
            inView ? "scale-x-100" : "scale-x-0"
          }`}
          style={{ width: "120px" }}
        ></div>

        {/* Step 2: the eyebrow + heading rise up, just after the line */}
        <p
          style={{ transitionDelay: "150ms" }}
          className={`text-[12px] font-bold tracking-[0.25em] uppercase text-[#C97B4A] mb-4 transition-all duration-600 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Straight To The Table
        </p>
        <h2
          style={{ transitionDelay: "300ms" }}
          className={`font-['Playfair_Display',serif] italic text-4xl sm:text-5xl md:text-6xl mb-6 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Everything, Homemade
        </h2>
        <p
          style={{ transitionDelay: "450ms" }}
          className={`max-w-lg mx-auto text-[14px] sm:text-[15px] leading-[1.8] text-[#2b2b2b]/65 mb-16 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Fresh produce, simple combinations, and dishes that change with the seasons — nothing frozen, nothing
          out of a box.
        </p>

        {/* Step 3: dish photos fly in and morph from a square frame into a circle */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {dishes.map((dish, i) => (
            <div
              key={dish.src}
              style={{
                transitionDelay: `${600 + i * 120}ms`,
                borderRadius: inView ? "9999px" : "18px",
              }}
              className={`w-28 h-28 sm:w-36 sm:h-36 overflow-hidden shadow-lg transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${dish.from}`
              } ${i % 2 !== 0 ? "sm:translate-y-6" : ""}`}
            >
              <img src={dish.src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <a
          href="#"
          className="inline-block mt-16 bg-[#2b2b2b] hover:bg-black transition-colors text-white text-[12px] font-bold tracking-[0.15em] uppercase px-9 py-4"
        >
          View Full Menu
        </a>
      </div>
    </section>
  );
}