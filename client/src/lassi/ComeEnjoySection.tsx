import React from "react";
import { motion } from "framer-motion";

const words = ["SEASONAL", "SHARED", "SLOW", "TOGETHER"];

export default function ComeEnjoySection() {
  return (
    <div className="w-full min-h-screen bg-[#F5F0E6] flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-350 mx-auto px-10 md:px-16 py-24 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#1a1a1a] italic tracking-[-0.01em] text-[44px] sm:text-[64px] md:text-[84px] leading-[1.02]"
          style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
        >
          Come, enjoy
          <br />
          the food.
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="h-px w-16 bg-[#1a1a1a]/40 mt-10 mb-10 origin-center"
        />

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {words.map((word, i) => (
            <React.Fragment key={word}>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                className="text-[11px] font-bold tracking-[0.25em] text-[#1a1a1a]/70"
              >
                {word}
              </motion.span>
              {i < words.length - 1 && (
                <span className="text-[#1a1a1a]/30 text-[11px]">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}