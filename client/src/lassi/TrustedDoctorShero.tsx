"use client";

import { useMemo, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  MotionValue,
} from "framer-motion";
import { Flower2 } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Config / content                                                   */
/* ------------------------------------------------------------------ */

const BG = "#FFFFFF";
const DOT_LIGHT = "#E1DACB";
const DOT_DARK = "#221F1C";
const INK = "#1F1B16";

type Testimonial = {
  quote: string;
  name: string;
  org: string;
  photo?: string; // swap in a real image URL
  initials: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I can think like a public health specialist, without worrying about whether we got paid.",
    name: "Dr. Suffiyah Webb",
    org: "Brilliant Smiles",
    photo:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=700&auto=format&fit=crop",
    initials: "SW",
  },
  {
    quote:
      "We have more time, less stress, and a much higher level of joy in what we do.",
    name: "Dr. Michelle Haghpanah",
    org: "Little Bytes",
    photo:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=700&auto=format&fit=crop",
    initials: "MH",
  },
  {
    quote:
      "It saves over 100 hours per month. That frees us up to really focus on patient experience and growth.",
    name: "Dr. Eric Kwon",
    org: "Grace Dental",
    photo:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=700&auto=format&fit=crop",
    initials: "EK",
  },
  {
    quote:
      "Our team spends less time chasing details and more time caring for every patient.",
    name: "Dr. Aisha Patel",
    org: "Northstar Health",
    photo:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=700&auto=format&fit=crop",
    initials: "AP",
  },
  {
    quote:
      "The clarity it gives us every morning has changed how confidently we run the practice.",
    name: "Dr. James Carter",
    org: "Carter Family Care",
    photo:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=700&auto=format&fit=crop",
    initials: "JC",
  },
  {
    quote:
      "We finally have the breathing room to build a better experience for our patients.",
    name: "Dr. Elena Rossi",
    org: "Harbor Dental",
    photo:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=700&auto=format&fit=crop",
    initials: "ER",
  },
  {
    quote:
      "It feels like having another thoughtful person on the team, every single day.",
    name: "Dr. Marcus Lee",
    org: "Bright Path Medical",
    photo:
      "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=700&auto=format&fit=crop",
    initials: "ML",
  },
  {
    quote:
      "The work is calmer now, and our patients notice the difference immediately.",
    name: "Dr. Nina Brooks",
    org: "Brooks Wellness",
    photo:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=700&auto=format&fit=crop",
    initials: "NB",
  },
  {
    quote:
      "We can make decisions faster because the important story is always right in front of us.",
    name: "Dr. Samuel Kim",
    org: "Summit Clinic",
    photo:
      "https://images.unsplash.com/photo-1580281658628-0c5a5f3c5f5c?q=80&w=700&auto=format&fit=crop",
    initials: "SK",
  },
  {
    quote:
      "What used to take hours now happens quietly in the background, exactly when we need it.",
    name: "Dr. Olivia Grant",
    org: "Kindred Care",
    photo:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=700&auto=format&fit=crop",
    initials: "OG",
  },
];

/* ------------------------------------------------------------------ */
/*  Seeded RNG so the dot map is stable across renders                 */
/* ------------------------------------------------------------------ */

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Dot = {
  x: number; // %
  y: number; // %
  size: number; // px
  opacity: number;
  dark: boolean;
  flower: boolean;
};

/** Loose "world map" made of scattered dots + denser organic clusters. */
function useDotField(seed: number): Dot[] {
  return useMemo(() => {
    const rand = mulberry32(seed);
    const dots: Dot[] = [];

    // faint base grid texture
    for (let i = 0; i < 260; i++) {
      dots.push({
        x: rand() * 100,
        y: rand() * 100,
        size: 2 + rand() * 1.5,
        opacity: 0.18 + rand() * 0.18,
        dark: false,
        flower: false,
      });
    }

    // organic "landmass" clusters, loosely arranged left / center / right
    const clusters = [
      { cx: 16, cy: 20, rx: 9, ry: 22, count: 60 },
      { cx: 14, cy: 55, rx: 8, ry: 16, count: 40 },
      { cx: 40, cy: 12, rx: 6, ry: 8, count: 22 },
      { cx: 58, cy: 22, rx: 7, ry: 12, count: 30 },
      { cx: 70, cy: 45, rx: 8, ry: 14, count: 34 },
      { cx: 90, cy: 15, rx: 7, ry: 16, count: 40 },
      { cx: 84, cy: 70, rx: 5, ry: 9, count: 18 },
    ];

    for (const c of clusters) {
      for (let i = 0; i < c.count; i++) {
        const ang = rand() * Math.PI * 2;
        const r = Math.pow(rand(), 0.6); // bias toward center
        const x = c.cx + Math.cos(ang) * c.rx * r;
        const y = c.cy + Math.sin(ang) * c.ry * r;
        const isFlower = rand() < 0.045;
        dots.push({
          x,
          y,
          size: isFlower ? 12 + rand() * 6 : 3 + rand() * 7,
          opacity: 0.85 + rand() * 0.15,
          dark: true,
          flower: isFlower,
        });
      }
    }

    return dots;
  }, [seed]);
}

/* ------------------------------------------------------------------ */
/*  Dot-map background                                                 */
/* ------------------------------------------------------------------ */

function DotMap({ seed = 1 }: { seed?: number }) {
  const dots = useDotField(seed);
  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor: BG }}
    >
      {dots.map((d, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.flower ? undefined : d.size,
            height: d.flower ? undefined : d.size,
            backgroundColor: d.flower
              ? "transparent"
              : d.dark
              ? DOT_DARK
              : DOT_LIGHT,
            opacity: d.opacity,
            transform: "translate(-50%, -50%)",
          }}
        >
          {d.flower && (
            <Flower2
              size={d.size}
              color={DOT_DARK}
              strokeWidth={1.5}
              style={{ opacity: d.opacity }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Nav pill                                                           */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  Testimonial card                                                   */
/* ------------------------------------------------------------------ */

function TestimonialCard({
  t,
  scrollYProgress,
  start,
  end,
  reduceMotion,
}: {
  t: Testimonial;
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
  reduceMotion: boolean;
}) {
  const enterEnd = start + (end - start) * 0.42;
  const exitStart = end - (end - start) * 0.42;

  // Each card owns its hooks (called unconditionally on every render of
  // this component) rather than being called from inside a parent .map().
  const opacity = useTransform(
    scrollYProgress,
    [start, enterEnd, exitStart, end],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [start, enterEnd, exitStart, end],
    [reduceMotion ? "0%" : "100%", "0%", "0%", reduceMotion ? "0%" : "-100%"]
  );
  const scale = useTransform(
    scrollYProgress,
    [start, enterEnd, exitStart, end],
    [reduceMotion ? 1 : 0.96, 1, 1, reduceMotion ? 1 : 0.96]
  );

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div
        className="flex w-[min(88vw,640px)] overflow-hidden rounded-2xl shadow-xl"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div
          className="hidden sm:flex h-[220px] w-[220px] shrink-0 items-center justify-center"
          style={{ backgroundColor: "#EEE9DD" }}
        >
          {t.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={t.photo}
              alt={t.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <span
              className="text-4xl font-serif"
              style={{ color: "#B7AB8D" }}
            >
              {t.initials}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col justify-between p-8">
          <p
            className="font-serif text-xl sm:text-2xl leading-snug"
            style={{ color: INK }}
          >
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="text-sm font-medium" style={{ color: INK }}>
              {t.name}
            </span>
            <span
              className="rounded-full px-2.5 py-1 text-xs tracking-wide"
              style={{
                backgroundColor: "#F3EFE4",
                color: "#6B6355",
                fontFamily: "monospace",
              }}
            >
              {t.org}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Video badge ("Watch Dr. Kwon's story")                             */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  Pinned hero: crossfading testimonials -> heading reveal            */
/* ------------------------------------------------------------------ */

const HEADING_END = 0.3;
const CARD_START = 0.34;
const CARD_END = 0.9;

function PinnedHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const headingOpacity = useTransform(
    scrollYProgress,
    [0, HEADING_END * 0.75, HEADING_END],
    [1, 1, 0]
  );
  const headingY = useTransform(
    scrollYProgress,
    [0, HEADING_END],
    [0, -180]
  );
  const headingScale = useTransform(
    scrollYProgress,
    [0, HEADING_END],
    [1.35, 0.48]
  );
  const mapOpacity = useTransform(
    scrollYProgress,
    [0.12, HEADING_END + 0.08],
    [0, 1]
  );

  return (
    <div ref={sectionRef} style={{ height: "320vh" }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ opacity: mapOpacity }} className="absolute inset-0">
          <DotMap seed={7} />
        </motion.div>

        {/* The large opening statement contracts into the top of the map. */}
        <motion.div
          style={{
            opacity: headingOpacity,
            y: headingY,
            scale: headingScale,
          }}
          className="absolute inset-x-0 top-[25%] z-10 flex justify-center px-6 text-center origin-top"
        >
          <h1
            className="font-serif text-5xl sm:text-7xl md:text-8xl leading-[0.95]"
            style={{ color: INK }}
          >
            Trusted by 2,500+
            <br />
            doctors nationwide
          </h1>
        </motion.div>

        {/* crossfading testimonial cards */}
        {TESTIMONIALS.map((t, i) => {
          const segment = (CARD_END - CARD_START) / TESTIMONIALS.length;
          const start = CARD_START + i * segment;
          const end = start + segment;
          return (
            <TestimonialCard
              key={t.name}
              t={t}
              scrollYProgress={scrollYProgress}
              start={start}
              end={end}
              reduceMotion={!!prefersReducedMotion}
            />
          );
        })}

      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Settled section (what you land on once the pin releases)           */
/* ------------------------------------------------------------------ */

function SettledSection() {
  return (
    <div className="relative h-[30vh] min-h-[240px] overflow-hidden">
      <DotMap seed={13} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function TrustedDoctorsHero() {
  return (
    <div className="relative w-full bg-white" style={{ backgroundColor: "#FFFFFF" }}>
      <PinnedHero />
      <SettledSection />
    </div>
  );
}