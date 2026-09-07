import { motion } from "framer-motion";

const ARROW_ICON =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")";

const selectStyle = {
  backgroundImage: ARROW_ICON,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right center",
} as const;

export default function BookATable() {
  return (
    <section
      className="relative min-h-screen w-full text-white flex items-center font-['Poppins',sans-serif] bg-cover bg-center overflow-hidden bg-[linear-gradient(rgba(10,8,6,0.65),rgba(10,8,6,0.65)),url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2400&auto=format&fit=crop')]"
    >
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

      {/* Wave edge at bottom - fill should match whatever section sits right below this one */}
      <svg
        className="absolute bottom-0 left-0 w-full h-15 sm:h-22.5 text-[#F5F0E6] z-10"
        viewBox="0 0 1440 74"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0,74 L1440,74 L1440,50 C1344,30 1248,20 1152,25 C1056,30 960,50 864,50 C768,50 672,30 576,22 C480,14 384,14 288,20 C192,26 96,38 48,44 L0,50 Z"
        />
      </svg>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-20 w-full">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <span className="h-px w-12 bg-[#E07B2B]"></span>
            <span className="text-[13px] font-semibold tracking-[0.25em] uppercase text-[#E07B2B]">
              Online Reservation
            </span>
            <span className="h-px w-12 bg-[#E07B2B]"></span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-['Cormorant_Garamond',serif] italic text-6xl sm:text-7xl md:text-8xl leading-none"
          >
            Book A Table
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-stretch lg:items-end gap-8 lg:gap-10"
        >
          <div className="flex-1">
            <select
              style={selectStyle}
              className="appearance-none w-full bg-transparent border-b border-white/40 focus:border-white outline-none text-white text-[15px] pb-2 pr-6"
            >
              <option className="text-black">1 Person</option>
              <option className="text-black">2 People</option>
              <option className="text-black">3 People</option>
              <option className="text-black">4 People</option>
            </select>
          </div>

          <div className="flex-1">
            <select
              style={selectStyle}
              className="appearance-none w-full bg-transparent border-b border-white/40 focus:border-white outline-none text-white text-[15px] pb-2 pr-6"
            >
              <option className="text-black">2026-08-25</option>
              <option className="text-black">2026-08-26</option>
              <option className="text-black">2026-08-27</option>
            </select>
          </div>

          <div className="flex-1">
            <select
              style={selectStyle}
              className="appearance-none w-full bg-transparent border-b border-white/40 focus:border-white outline-none text-white text-[15px] pb-2 pr-6"
            >
              <option className="text-black">9:00 am</option>
              <option className="text-black">12:00 pm</option>
              <option className="text-black">7:00 pm</option>
            </select>
          </div>

          <div className="lg:pb-px">
            <a
              href="#"
              className="block text-center bg-[#df8b53] hover:bg-[#f0a66f] transition-colors text-[#171914] text-[11px] font-bold tracking-[0.18em] uppercase px-10 py-4 whitespace-nowrap"
            >
              Book Now
            </a>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/60 text-[13px] mt-4"
        >
          *Powered by OpenTable
        </motion.p>
      </div>
    </section>
  );
}