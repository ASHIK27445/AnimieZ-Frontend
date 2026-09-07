import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="w-full min-h-screen bg-[#F5F0E6] flex items-center">
      <div className="w-full max-w-350 mx-auto px-10 md:px-16 py-16">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="block text-[11px] font-bold tracking-[0.12em] text-[#1a1a1a] mb-6"
        >
          ABOUT
        </motion.span>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left - image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6"
          >
            <div className="relative w-full aspect-3/4 md:aspect-4/5 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1719329466711-743e0121235d?fm=jpg&q=80&w=1600&auto=format&fit=crop"
                alt="Chef at work in the kitchen"
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-black/10" />
              {/* label to echo the reference photo */}
              <span
                className="absolute top-[32%] left-[30%] text-[10px] tracking-[0.2em] text-white/80 italic"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                NOIR DINING
              </span>
            </div>
          </motion.div>

          {/* Right - headline + copy */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#1a1a1a] uppercase leading-[1.05] tracking-[-0.01em] font-medium text-[38px] sm:text-[46px] md:text-[52px]"
            >
              That feels
              <br />
              natural
            </motion.h1>

            <div className="mt-16 md:mt-0">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="max-w-[320px] text-[15px] leading-normal text-[#1a1a1a]"
              >
                Noir Dining, a restaurant group focused
                on thoughtful dining, where each place responds to its
                context and the way people come together.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-8 flex items-center gap-3 group"
              >
                <span className="text-[11px] font-bold tracking-[0.12em] text-[#1a1a1a]">
                  ABOUT NOIR DINING
                </span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1a1a1a] transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5F0E6]" strokeWidth={2.5} />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}