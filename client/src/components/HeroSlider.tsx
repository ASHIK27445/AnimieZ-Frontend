import { useEffect, useRef, useState } from "react";

interface Slide {
  image: string;
  lines: string[];
}

const slides: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2400&auto=format&fit=crop",
    lines: ["Take", "Away", "Meals"]
  },
  {
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2400&auto=format&fit=crop",
    lines: ["Our", "Great", "Food"]
  },
];

const AUTOPLAY_MS = 5000;
const rotations = ["-rotate-2", "rotate-1", "-rotate-1"];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function goTo(index: number) {
    setCurrent((index + slides.length) % slides.length);
    resetTimer();
  }

  function resetTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
  }

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Slide images, crossfading */}
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Headline, swapping per slide with a fade + rise */}
      <div className="mt-25 relative z-10 flex flex-col items-center justify-center gap-2 py-24 sm:py-32">
        {slides[current].lines.map((line, i) => (
          <span
            key={`${current}-${line}`}
            className={`font-['Permanent_Marker',cursive] text-white text-[48px] sm:text-[64px] leading-none ${rotations[i % rotations.length]} animate-[fadeUp_0.6s_ease-out_both]`}
            style={{ animationDelay: `${i * 120}ms` }}
          >
            {line}
          </span>
        ))}
      </div>

      {/* Prev / next arrows */}
      <button
        aria-label="Previous slide"
        onClick={() => goTo(current - 1)}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white transition-colors"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        aria-label="Next slide"
        onClick={() => goTo(current + 1)}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white transition-colors"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Fade-up keyframes for the headline */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}