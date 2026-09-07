import { useEffect, useRef, useState } from "react";
import ProcessCard, { type CardState } from "./ProcessCard";

// Card 1 - green scene, cycles through 2 states
const card1States: CardState[] = [
  {
    headerTitle: "Posting Meridian Health batch",
    rows: [
      { status: "active", label: "Matched patient ledgers — 31 claims found" },
      { status: "pending", label: "Retrieving ERA from Meridian Health", meta: "34 EOBs", indented: true },
      { status: "pending", label: "Awaiting practice confirmation" },
    ],
    footer: { percent: 40, remaining: "Estimated 15 seconds remaining..." },
  },
  {
    headerTitle: "Meridian Health sent a bulk payment",
    headerMeta: "34 claims · $14,280",
    rows: [
      { status: "done", label: "Starting automated posting" },
      { status: "pending", label: "Retrieving ERA from Meridian Health", meta: "34 EOBs", indented: true },
      { status: "active", label: "Fetching ERA from payer portal" },
    ],
  },
];

// Card 2 - gold scene, cycles through 2 states
const card2States: CardState[] = [
  {
    headerTitle: "Nimbus working...",
    rows: [
      { status: "done", label: "Post 3 Alliance claims", meta: "Claims posted" },
      { status: "pending", label: "Reconcile payment batch", meta: "Up next" },
      { status: "pending", label: "Check underpayment on claim", meta: "Pending" },
    ],
  },
  {
    headerTitle: "Nimbus working...",
    rows: [
      { status: "active", label: "Reconcile payment batch", meta: "Reviewing payments..." },
      { status: "pending", label: "Check underpayment on claim", meta: "Up next" },
    ],
  },
];

const card1Bg = {
  src: "/videos/process-green.mp4",
  poster: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop",
};

const card2Bg = {
  src: "/videos/process-gold.mp4",
  poster: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop",
};

export default function ProcessStack() {
  // Tracks scroll progress across the ENTIRE stack (both cards combined),
  // just to drive the side captions - each card tracks its own progress separately for its content.
  const stackRef = useRef<HTMLDivElement | null>(null);
  const [stackProgress, setStackProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const stack = stackRef.current;
      if (!stack) return;
      const rect = stack.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const p = total > 0 ? Math.min(Math.max(scrolled / total, 0), 1) : 0;
      setStackProgress(p);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Right caption ("Keeps you in the loop") is visible through card 1 and fades out early in card 2.
  // Left caption ("Nimbus does your paperwork") fades in as card 2 takes over.
  const rightOpacity = Math.max(0, Math.min(1, 1 - (stackProgress - 0.4) / 0.25));
  const leftOpacity = Math.max(0, Math.min(1, (stackProgress - 0.45) / 0.25));

  return (
    <div ref={stackRef} className="relative bg-[#F6F1E9]">
      {/* Captions float beside whichever card is currently pinned */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <div className="h-full max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div style={{ opacity: leftOpacity, transition: "opacity 0.2s linear" }} className="hidden lg:block w-64">
            <h3 className="font-['Playfair_Display',serif] text-[26px] leading-tight text-[#2b2b2b] mb-3">
              Nimbus does
              <br />
              your paperwork
            </h3>
            <p className="text-[14px] leading-[1.7] text-[#2b2b2b]/65">
              Handling enrollments, converting payments to EFTs, and posting them automatically, without delay.
            </p>
          </div>

          <div style={{ opacity: rightOpacity, transition: "opacity 0.2s linear" }} className="hidden lg:block w-64 ml-auto">
            <h3 className="font-['Playfair_Display',serif] text-[26px] leading-tight text-[#2b2b2b] mb-3">
              Keeps you in the loop
            </h3>
            <p className="text-[14px] leading-[1.7] text-[#2b2b2b]/65">
              Watch Nimbus complete your paperwork, asking for your input when needed on the most complex issues.
            </p>
          </div>
        </div>
      </div>

      <ProcessCard bg={card1Bg} states={card1States} pinMultiplier={2} />
      <ProcessCard bg={card2Bg} states={card2States} pinMultiplier={2} />
    </div>
  );
}