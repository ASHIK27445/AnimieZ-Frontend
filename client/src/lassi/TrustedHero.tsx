import { type ReactNode, useMemo, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import type { MotionStyle } from "framer-motion";

/* ---------------------------------------------------------------
   Small deterministic PRNG so the dot map is stable across renders
--------------------------------------------------------------- */
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---------------------------------------------------------------
   Four-petal clover mark (used as map "hubs")
--------------------------------------------------------------- */
interface CloverMarkProps {
  size?: number;
  color?: string;
  bg?: string;
}

function CloverMark({ size = 16, color = "#211d17", bg = "#ffffff" }: CloverMarkProps) {
  const r = size * 0.29;
  const c = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={c} cy={c - r * 0.62} r={r} fill={color} />
      <circle cx={c} cy={c + r * 0.62} r={r} fill={color} />
      <circle cx={c - r * 0.62} cy={c} r={r} fill={color} />
      <circle cx={c + r * 0.62} cy={c} r={r} fill={color} />
      <circle cx={c} cy={c} r={r * 0.42} fill={bg} />
    </svg>
  );
}

/* ---------------------------------------------------------------
   Dotted "world map" background — a grid of dots, dense where a
   handful of soft elliptical "landmasses" overlap, sparse (ocean)
   elsewhere, with a few clover "hub" marks scattered on the land.
--------------------------------------------------------------- */
const LANDMASSES = [
  { cx: 230, cy: 190, rx: 95, ry: 150, d: 0.85 },
  { cx: 260, cy: 340, rx: 80, ry: 120, d: 0.55 },
  { cx: 360, cy: 55, rx: 40, ry: 30, d: 0.6 },
  { cx: 545, cy: 95, rx: 55, ry: 55, d: 0.55 },
  { cx: 700, cy: 130, rx: 45, ry: 60, d: 0.45 },
  { cx: 715, cy: 330, rx: 55, ry: 60, d: 0.6 },
  { cx: 860, cy: 110, rx: 55, ry: 65, d: 0.5 },
  { cx: 905, cy: 245, rx: 60, ry: 55, d: 0.45 },
  { cx: 1075, cy: 110, rx: 100, ry: 90, d: 0.85 },
  { cx: 1055, cy: 260, rx: 55, ry: 55, d: 0.5 },
  { cx: 1030, cy: 415, rx: 50, ry: 45, d: 0.4 },
  { cx: 1140, cy: 430, rx: 45, ry: 40, d: 0.4 },
];

const HUBS = [
  { x: 210, y: 130 },
  { x: 545, y: 90 },
  { x: 300, y: 250 },
  { x: 1100, y: 80 },
  { x: 1080, y: 430 },
];

interface MapDotsProps {
  className?: string;
}

function MapDots({ className = "" }: MapDotsProps) {
  const W = 1339;
  const H = 591;
  const SPACING = 15;

  const dots = useMemo(() => {
    const rand = mulberry32(7);
    const pts = [];
    for (let y = SPACING / 2; y < H; y += SPACING) {
      for (let x = SPACING / 2; x < W; x += SPACING) {
        let inside = 0;
        for (const m of LANDMASSES) {
          const nx = (x - m.cx) / m.rx;
          const ny = (y - m.cy) / m.ry;
          const dist = Math.sqrt(nx * nx + ny * ny);
          if (dist < 1) {
            const strength = (1 - dist) * m.d;
            inside = Math.max(inside, strength);
          }
        }
        const jitter = rand();
        const isLand = inside > 0.08 && jitter < inside * 1.15;
        if (isLand) {
          const r = 1.6 + jitter * 4.2 * inside;
          pts.push({ x, y, r, land: true });
        } else if (jitter < 0.55) {
          pts.push({ x, y, r: 1.1 + jitter * 0.6, land: false });
        }
      }
    }
    return pts;
  }, []);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" className={className}>
      {dots.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={p.r} fill={p.land ? "#221e17" : "#ddd6c6"} opacity={p.land ? 0.92 : 0.7} />
      ))}
      {HUBS.map((h, i) => (
        <g key={i} transform={`translate(${h.x - 11} ${h.y - 11})`}>
          <CloverMark size={22} color="#1c1912" bg="#ffffff" />
        </g>
      ))}
    </svg>
  );
}

/* ---------------------------------------------------------------
   Testimonial card (no video button)
--------------------------------------------------------------- */
interface TestimonialCardProps {
  image: string;
  quote: string;
  name: string;
  company: string;
  style?: MotionStyle;
}

export type TrustedTestimonial = {
  image: string;
  quote: string;
  name: string;
  company: string;
};

const defaultTestimonials: [TrustedTestimonial, TrustedTestimonial, TrustedTestimonial] = [
  {
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=700&fit=crop&q=80",
    quote: "I can think like a public health specialist, without worrying about whether we got paid.",
    name: "Dr. Suffiyah Webb",
    company: "Brilliant Smiles",
  },
  {
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=700&fit=crop&q=80",
    quote: "We have more time, less stress, and a much higher level of joy in what we do.",
    name: "Dr. Michelle Haghpanah",
    company: "Little Bytes",
  },
  {
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&h=700&fit=crop&q=80",
    quote: "It saves over 100 hours per month. That frees us up to really focus on patient experience and growth.",
    name: "Dr. Eric Kwon",
    company: "Grace Dental",
  },
];

function TestimonialCard({ image, quote, name, company, style }: TestimonialCardProps) {
  return (
    <motion.div
      style={style}
      className="absolute inset-x-0 top-1/2 mx-auto -translate-y-1/2 w-[min(92vw,860px)] will-change-transform"
    >
      <div className="bg-white rounded-[28px] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)] flex overflow-hidden">
        <div className="w-[45%] min-w-[220px]">
          <img src={image} alt={name} className="w-full h-[300px] md:h-[380px] object-cover" />
        </div>
        <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
          <p className="font-serif text-[22px] md:text-[27px] leading-snug text-neutral-900">"{quote}"</p>
          <div className="flex items-center gap-3 mt-8">
            <span className="font-serif text-[17px] text-neutral-900">{name}</span>
            <span className="text-[11px] font-mono tracking-wide text-neutral-500 bg-neutral-50 border border-neutral-200 rounded px-2 py-1">
              {company}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------------------------------------------------------
   Main hero — a tall scroll-driver with a sticky viewport that
   plays through three testimonials before settling into the
   final "Trusted by 2,500+ doctors" resting state.

   TUNING NOTES (what changed to feel like dragging one card at a
   time from bottom to top, instead of a small fade/shift):

   1. Travel distance is now ~70vh instead of 40px. Each card truly
      enters from below the fold and exits above it — enough travel
      that the eye reads it as a physical slide, not a flicker.

   2. Opacity and position no longer share the exact same keyframe
      windows. Position keeps moving smoothly across the ENTIRE
      progress window for that card, while opacity only ramps at
      the very edges (a short 4–5% sliver). That means for most of
      a card's time on screen it's fully opaque and just travelling
      — the "conveyor belt" feel — rather than constantly
      fading in/out while barely moving.

   3. A subtle scale (0.94 → 1 → 1 → 0.94) adds a touch of depth:
      cards feel like they ease toward the camera as they arrive
      and ease back as they leave, instead of popping to full size
      instantly.

   4. The spring driving scrollYProgress is a little softer
      (lower stiffness, slightly more damping) so the whole thing
      settles instead of feeling twitchy on fast scroll/trackpad
      flicks.
--------------------------------------------------------------- */
export type TrustedHeroProps = {
  heading?: ReactNode;
  testimonials?: [TrustedTestimonial, TrustedTestimonial, TrustedTestimonial];
  driverHeight?: string;
  className?: string;
  mobileMessage?: ReactNode;
};

export default function TrustedHero({
  heading = (
    <>
      Trusted by 2,500+
      <br />
      doctors nationwide
    </>
  ),
  testimonials = defaultTestimonials,
  driverHeight = "h-[800vh]",
  className = "bg-white",
  mobileMessage = "Scroll to see 98% of posting handled autonomously",
}: TrustedHeroProps) {
  const driverRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: driverRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 28,
    damping: 32,
    mass: 1.4,
    restDelta: 0.001,
  });

  // Heading — appears big right away, holds briefly, then shrinks
  // and dissolves away as the person keeps scrolling.
  const headingOpacity = useTransform(smoothProgress, [0, 0.05, 0.14, 0.22], [0, 1, 1, 0]);
  const headingScale = useTransform(smoothProgress, [0, 0.05, 0.14, 0.22], [0.9, 1.08, 1.08, 0.55]);
  const headingY = useTransform(smoothProgress, [0.14, 0.22], ["0vh", "-30vh"]);

  /* Each card gets FOUR progress checkpoints:
     [enterStart, enterEnd, exitStart, exitEnd]
     - Position (y, scale) animates across the FULL span
       [enterStart, exitEnd] continuously.
     - Opacity only animates in the short slivers
       [enterStart, enterEnd] and [exitStart, exitEnd], and stays
       at 1 in between — so the card is solid while it travels. */
  function useCardStyle(
    progress: typeof smoothProgress,
    enterStart: number,
    enterEnd: number,
    exitStart: number,
    exitEnd: number
  ): MotionStyle {
    const y = useTransform(progress, [enterStart, exitEnd], ["28vh", "-28vh"]);
    const scale = useTransform(
      progress,
      [enterStart, enterEnd, exitStart, exitEnd],
      [0.94, 1, 1, 0.94]
    );
    const opacity = useTransform(
      progress,
      [enterStart, enterEnd, exitStart, exitEnd],
      [0, 1, 1, 0]
    );
    return { y, scale, opacity };
  }

  const card1Style = useCardStyle(smoothProgress, 0.22, 0.29, 0.37, 0.44);
  const card2Style = useCardStyle(smoothProgress, 0.37, 0.44, 0.56, 0.63);
  const card3Style = useCardStyle(smoothProgress, 0.56, 0.63, 0.86, 0.96);

  return (
    <div className={className}>
      {/* Scroll-driven hero h-[800vh], this cause the speed */}
      <div ref={driverRef} className={`relative ${driverHeight}`}>
        <div className="sticky top-0 h-screen overflow-hidden bg-white">
          <MapDots className="absolute inset-0 w-full h-full" />

          <motion.h2
            style={{ opacity: headingOpacity, scale: headingScale, y: headingY }}
            className="absolute inset-0 flex items-center justify-center text-center font-serif text-[40px] md:text-[56px] leading-[1.15] text-neutral-900 z-10 whitespace-nowrap"
          >
            {heading}
          </motion.h2>

          <TestimonialCard
            style={card1Style}
            {...testimonials[0]}
          />

          <TestimonialCard
            style={card2Style}
            {...testimonials[1]}
          />

          <TestimonialCard
            style={card3Style}
            {...testimonials[2]}
          />

          <div className="md:hidden absolute inset-x-0 bottom-10 flex justify-center px-6">
            <p className="text-xs text-neutral-400 text-center">{mobileMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}