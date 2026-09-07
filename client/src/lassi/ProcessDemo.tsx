import { useEffect, useRef, useState } from "react";
import { RowStatusIcon, type RowStatus } from "./RowStatusIcon";

interface Row {
  status: RowStatus;
  label: string;
  meta?: string;
  indented?: boolean;
}

interface Step {
  headerIcon?: boolean;
  headerTitle: string;
  headerMeta?: string;
  rows: Row[];
  footer?: { percent: number; remaining: string };
  // background clip for this step - swap src for your own footage
  bg: { src: string; poster: string };
}

const steps: Step[] = [
  {
    headerIcon: true,
    headerTitle: "Posting Meridian Health batch",
    rows: [
      { status: "active", label: "Matched patient ledgers — 31 claims found" },
      { status: "pending", label: "Retrieving ERA from Meridian Health", meta: "34 EOBs", indented: true },
      { status: "pending", label: "Awaiting practice confirmation" },
    ],
    footer: { percent: 40, remaining: "Estimated 15 seconds remaining..." },
    bg: {
      src: "/videos/process-1.mp4",
      poster: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop",
    },
  },
  {
    headerIcon: true,
    headerTitle: "Meridian Health sent a bulk payment",
    headerMeta: "34 claims · $14,280",
    rows: [
      { status: "done", label: "Starting automated posting" },
      { status: "pending", label: "Retrieving ERA from Meridian Health", meta: "34 EOBs", indented: true },
      { status: "active", label: "Fetching ERA from payer portal" },
    ],
    bg: {
      src: "/videos/process-2.mp4",
      poster: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
    },
  },
  {
    headerIcon: true,
    headerTitle: "Nimbus working...",
    rows: [
      { status: "done", label: "Post 3 Alliance claims", meta: "Claims posted" },
      { status: "pending", label: "Reconcile payment batch", meta: "Up next" },
      { status: "pending", label: "Check underpayment on claim", meta: "Pending" },
    ],
    bg: {
      src: "/videos/process-3.mp4",
      poster: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop",
    },
  },
  {
    headerIcon: true,
    headerTitle: "Nimbus working...",
    rows: [
      { status: "active", label: "Reconcile payment batch", meta: "Reviewing payments..." },
      { status: "pending", label: "Check underpayment on claim", meta: "Up next" },
    ],
    bg: {
      src: "/videos/process-4.mp4",
      poster: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop",
    },
  },
  {
    headerIcon: true,
    headerTitle: "Nimbus working...",
    rows: [
      { status: "done", label: "Reconcile payment batch", meta: "Balanced" },
      { status: "active", label: "Check underpayment on claim", meta: "Flagging discrepancy" },
      { status: "pending", label: "Draft appeal letter", meta: "Up next" },
    ],
    bg: {
      src: "/videos/process-5.mp4",
      poster: "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?q=80&w=1600&auto=format&fit=crop",
    },
  },
  {
    headerIcon: true,
    headerTitle: "Batch complete",
    headerMeta: "36 claims processed",
    rows: [
      { status: "done", label: "Reconcile payment batch", meta: "Balanced" },
      { status: "done", label: "Check underpayment on claim", meta: "Appeal drafted" },
      { status: "done", label: "Notify front desk", meta: "Sent" },
    ],
    bg: {
      src: "/videos/process-6.mp4",
      poster: "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?q=80&w=1600&auto=format&fit=crop",
    },
  },
];

const PIN_MULTIPLIER = 3.2;

function LogoMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#2b2b2b]">
      <path d="M12 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm10 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2ZM7 13c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm10 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm-5 1c2 0 4 1.6 4 4v.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V18c0-2.4 2-4 4-4Z" />
    </svg>
  );
}

export default function ProcessDemo() {
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

  const activeStep = Math.min(steps.length - 1, Math.floor(progress * steps.length));
  const step = steps[activeStep];

  // Right caption fades out over the first half of the scroll, left caption fades in over the second half.
  const rightOpacity = Math.max(0, 1 - progress / 0.5);
  const leftOpacity = Math.max(0, (progress - 0.4) / 0.5);

  return (
    <div ref={wrapperRef} style={{ height: `${PIN_MULTIPLIER * 100}vh` }} className="relative bg-[#F6F1E9]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6">
        <div className="relative w-full max-w-6xl flex items-center justify-between gap-10">
          {/* Left caption - fades in during the second half */}
          <div
            style={{ opacity: leftOpacity, transition: "opacity 0.2s linear" }}
            className="hidden lg:block w-64 shrink-0"
          >
            <h3 className="font-['Playfair_Display',serif] text-[26px] leading-tight text-[#2b2b2b] mb-3">
              Nimbus does
              <br />
              your paperwork
            </h3>
            <p className="text-[14px] leading-[1.7] text-[#2b2b2b]/65">
              Handling enrollments, converting payments to EFTs, and posting them automatically, without delay.
            </p>
          </div>

          {/* Center card */}
          <div className="relative flex-1 max-w-xl mx-auto">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-[4/3] flex items-center justify-center p-8">
              {/* Background clips crossfade per step, matching the color shift you pointed out */}
              {steps.map((s, i) => (
                <video
                  key={s.bg.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={s.bg.poster}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
                    i === activeStep ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <source src={s.bg.src} type="video/mp4" />
                </video>
              ))}
              <div className="absolute inset-0 bg-black/10" />

              <div className="relative z-10 w-full bg-white rounded-2xl shadow-lg p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {step.headerIcon && <LogoMark />}
                    <span className="text-[13px] font-semibold text-[#2b2b2b]">{step.headerTitle}</span>
                  </div>
                  {step.headerMeta && (
                    <span className="text-[11px] text-[#2b2b2b]/40">{step.headerMeta}</span>
                  )}
                </div>

                <div className="space-y-3">
                  {step.rows.map((row) => (
                    <div key={row.label}>
                      <div className={`flex items-center gap-2.5 ${row.indented ? "ml-6" : ""}`}>
                        <RowStatusIcon status={row.status} />
                        <span
                          className={`text-[12.5px] flex-1 ${
                            row.status === "pending" ? "text-[#2b2b2b]/40" : "text-[#2b2b2b]/80"
                          }`}
                        >
                          {row.label}
                        </span>
                        {row.meta && <span className="text-[11px] text-[#2b2b2b]/35">{row.meta}</span>}
                      </div>
                    </div>
                  ))}
                </div>

                {step.footer && (
                  <div className="mt-4">
                    <div className="h-1 w-full bg-[#2b2b2b]/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-sky-400 transition-all duration-500"
                        style={{ width: `${step.footer.percent}%` }}
                      ></div>
                    </div>
                    <p className="text-[11px] text-[#2b2b2b]/40 mt-2">{step.footer.remaining}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right caption - fades out over the first half */}
          <div
            style={{ opacity: rightOpacity, transition: "opacity 0.2s linear" }}
            className="hidden lg:block w-64 shrink-0"
          >
            <h3 className="font-['Playfair_Display',serif] text-[26px] leading-tight text-[#2b2b2b] mb-3">
              Keeps you in the loop
            </h3>
            <p className="text-[14px] leading-[1.7] text-[#2b2b2b]/65">
              Watch Nimbus complete your paperwork, asking for your input when needed on the most complex issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}