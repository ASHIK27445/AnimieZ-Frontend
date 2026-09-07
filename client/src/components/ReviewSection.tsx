import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    quote:
      "Every course arrived exactly when it should have. The room is dim, the service is quiet, and nothing ever feels rushed.",
    name: "Amelia Ford",
    role: "Barbican, London",
    rating: 5,
  },
  {
    quote:
      "Best table we've booked all year. The lamb was perfectly cooked and the staff remembered our anniversary without being asked.",
    name: "Daniel Cruz",
    role: "Repeat guest",
    rating: 5,
  },
  {
    quote:
      "Reserved a week ahead and it was worth the wait. Shared plates, low light, and a wine list that actually fits the food.",
    name: "Priya Nair",
    role: "First visit",
    rating: 4,
  },
];

export default function Reviews() {
  return (
    <section className="relative w-full bg-[#171914] text-white py-24 px-6 overflow-hidden font-['Archivo',sans-serif]">
      {/* Wave edge at top - fill should match whatever section sits right above this one */}
      <svg
        className="absolute top-0 left-0 w-full h-[60px] sm:h-[90px] text-[#F5F0E6] z-0 pointer-events-none"
        viewBox="0 0 1440 74"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0,0 L1440,0 L1440,24 C1344,44 1248,54 1152,49 C1056,44 960,24 864,24 C768,24 672,44 576,52 C480,60 384,60 288,54 C192,48 96,36 48,30 L0,24 Z"
        />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <span className="h-px w-12 bg-[#E07B2B]"></span>
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#E07B2B]">
              Guest Reviews
            </span>
            <span className="h-px w-12 bg-[#E07B2B]"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-['Cormorant_Garamond',serif] italic text-5xl sm:text-6xl md:text-7xl leading-none text-[#f3d6b8]"
          >
            Words From Our Guests
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className="relative bg-white/[0.04] border border-white/10 rounded-sm p-8 flex flex-col"
            >
              <Quote className="w-6 h-6 text-[#df8b53]/60 mb-5" strokeWidth={1.5} />

              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className={`w-3.5 h-3.5 ${
                      starIndex < review.rating
                        ? "fill-[#df8b53] text-[#df8b53]"
                        : "text-white/20"
                    }`}
                  />
                ))}
              </div>

              <p className="text-[14px] leading-[1.7] text-white/80 flex-1 italic">
                "{review.quote}"
              </p>

              <div className="mt-7 pt-5 border-t border-white/10">
                <p className="text-[13px] font-semibold tracking-wide text-white">
                  {review.name}
                </p>
                <p className="text-[11px] tracking-wide text-white/50 mt-1">
                  {review.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}