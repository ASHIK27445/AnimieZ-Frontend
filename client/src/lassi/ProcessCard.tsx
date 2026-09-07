import { useEffect, useRef, useState } from "react";
import { RowStatusIcon, type RowStatus } from "./RowStatusIcon";

export interface Row {
  status: RowStatus;
  label: string;
  meta?: string;
  indented?: boolean;
}

export interface CardState {
  headerTitle: string;
  headerMeta?: string;
  rows: Row[];
  footer?: { percent: number; remaining: string };
}

interface ProcessCardProps {
  bg: { src: string; poster: string };
  states: CardState[]; // usually 2 - the card cycles through these as it's scrolled through
  pinMultiplier?: number; // taller wrapper = more scroll distance before the card releases
}

function LogoMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#2b2b2b]">
      <path d="M12 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm10 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2ZM7 13c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm10 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm-5 1c2 0 4 1.6 4 4v.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V18c0-2.4 2-4 4-4Z" />
    </svg>
  );
}

export default function ProcessCard({ bg, states, pinMultiplier = 2 }: ProcessCardProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const rect = wrapper.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const p = total > 0 ? Math.min(Math.max(scrolled / total, 0), 1) : 0;
      setProgress(p);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = Math.min(states.length - 1, Math.floor(progress * states.length));
  const state = states[activeIndex];

  return (
    <div ref={wrapperRef} style={{ height: `${pinMultiplier * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6">
        <div className="relative w-full max-w-xl">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-[4/3] flex items-center justify-center p-8">
            <video autoPlay muted loop playsInline poster={bg.poster} className="absolute inset-0 w-full h-full object-cover">
              <source src={bg.src} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/10" />

            {/* Panel content crossfades between states within this same card */}
            <div key={activeIndex} className="relative z-10 w-full bg-white rounded-2xl shadow-lg p-5 animate-[panelFade_0.5s_ease-out_both]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <LogoMark />
                  <span className="text-[13px] font-semibold text-[#2b2b2b]">{state.headerTitle}</span>
                </div>
                {state.headerMeta && <span className="text-[11px] text-[#2b2b2b]/40">{state.headerMeta}</span>}
              </div>

              <div className="space-y-3">
                {state.rows.map((row) => (
                  <div key={row.label} className={`flex items-center gap-2.5 ${row.indented ? "ml-6" : ""}`}>
                    <RowStatusIcon status={row.status} />
                    <span className={`text-[12.5px] flex-1 ${row.status === "pending" ? "text-[#2b2b2b]/40" : "text-[#2b2b2b]/80"}`}>
                      {row.label}
                    </span>
                    {row.meta && <span className="text-[11px] text-[#2b2b2b]/35">{row.meta}</span>}
                  </div>
                ))}
              </div>

              {state.footer && (
                <div className="mt-4">
                  <div className="h-1 w-full bg-[#2b2b2b]/10 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-400 transition-all duration-500" style={{ width: `${state.footer.percent}%` }}></div>
                  </div>
                  <p className="text-[11px] text-[#2b2b2b]/40 mt-2">{state.footer.remaining}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes panelFade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}