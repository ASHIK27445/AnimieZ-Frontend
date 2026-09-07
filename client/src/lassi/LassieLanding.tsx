import { type ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Clover, CheckCircle2, Table2, FlagTriangleRight, Shuffle } from "lucide-react";

/**
 * LassieLanding
 * -------------
 * Ekta scroll-driven hero section — screenshot e jei rokom dekhso, scroll korle
 * floating card + image gulo boro obostha theke choto hoye নিজেদের "home" corner e
 * shift hoy, r headline ("The more Lassie learns...") crossfade kore "98%" stat
 * text er sathe. Shob motion Framer Motion er useScroll + useTransform diye
 * scrollYProgress (0 -> 1) er upor map kora, tai pure CSS scroll-jacking na kore
 * ekta natural scrubbing feel ashe.
 *
 * Dependencies (project e already install thaka lagbe):
 *   npm i framer-motion lucide-react
 *
 * Tailwind: sob class inline (utility-first), kono external css file lagbe na.
 */

// ---- Helper: percentage -> string interpolation between two scroll stops ----
function usePercent(
  scrollYProgress: MotionValue<number>,
  range: [number, number],
  values: [number, number]
) {
  return useTransform(scrollYProgress, range, [`${values[0]}%`, `${values[1]}%`]);
}

export type LassieLandingProps = {
  headline?: ReactNode;
  statValue?: ReactNode;
  statDescription?: ReactNode;
  receiptCard?: {
    brand: ReactNode;
    amount: ReactNode;
    receivedLabel?: ReactNode;
    receivedDate?: ReactNode;
    postedLabel?: ReactNode;
    postedDate?: ReactNode;
  };
  images?: {
    personWalking?: string;
    flowers?: string;
    personTyping?: string;
  };
  mobileMessage?: ReactNode;
  sectionHeight?: string;
  className?: string;
};

export default function LassieLanding({
  headline = (
    <>
      The more Lassie learns,
      <br />
      the less input it needs
    </>
  ),
  statValue = "98%",
  statDescription = (
    <>
      of posting is handled
      <br />
      autonomously
    </>
  ),
  receiptCard = {
    brand: "Metlife",
    amount: "$1,943.88",
    receivedLabel: "Received",
    receivedDate: "Jan 14, 23:22",
    postedLabel: "Posted",
    postedDate: "Jan 16, 10:01",
  },
  images = {},
  mobileMessage = "Scroll to see 98% of posting handled autonomously",
  sectionHeight = "h-[320vh]",
  className = "bg-[#F3F0E8] text-[#1c1a16]",
}: LassieLandingProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // ---- Headline crossfade: sentence -> stat ----
  const headlineOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.42, 0.52, 0.7, 0.82, 1],
    [1, 1, 0, 0, 0, 0, 0, 0]
  );
  const headlineY = useTransform(scrollYProgress, [0, 0.4], [0, -24]);
  const statOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.42, 0.52, 0.7, 0.82, 1],
    [0, 0, 0, 0, 1, 1, 1, 1]
  );
  const statY = useTransform(scrollYProgress, [0.42, 0.52], [24, 0]);
  const statScale = useTransform(scrollYProgress, [0.42, 0.52], [0.94, 1]);

  // =========================================================================
  // Floating element positions — [left%, top%, width%, height%]
  // "start" = page-load state (big, clustered near center)
  // "end"   = fully-scrolled resting state (small, tucked into corners)
  // Values derived from the reference screenshots (desktop, ~1360px canvas).
  // =========================================================================
  const layers = {
    personWalking: { start: [76.1, 0.8, 19.7, 44.8], end: [22.5, 6, 10, 26], range: [0, 0.95] as [number, number] },
    processingCard: { start: [73.1, 48.1, 23.9, 26.5], end: [90.5, 38, 18.6, 15], range: [0.05, 1] as [number, number] },
    metlifeCard: { start: [18.6, 12.5, 24.9, 26.2], end: [5.2, 47, 16.8, 14.5], range: [0, 0.92] as [number, number] },
    flowerImage: { start: [10, 0.8, 17.3, 44.8], end: [2.2, 60, 9, 23], range: [0.05, 1] as [number, number] },
    analyzingCard: { start: [9.4, 64.7, 21.6, 25.7], end: [46.8, 96, 13.5, 15], range: [0, 0.9] as [number, number] },
    typingImage: { start: [69.7, 65, 16.6, 32.1], end: [84.6, 54, 9, 22.5], range: [0.05, 1] as [number, number] },
  };

  const l = layers.personWalking;
  const personLeft = usePercent(scrollYProgress, l.range, [l.end[0], l.start[0]]);
  const personTop = usePercent(scrollYProgress, l.range, [l.end[1], l.start[1]]);
  const personW = usePercent(scrollYProgress, l.range, [l.end[2], l.start[2]]);
  const personH = usePercent(scrollYProgress, l.range, [l.end[3], l.start[3]]);

  const p = layers.processingCard;
  const procLeft = usePercent(scrollYProgress, p.range, [p.end[0], p.start[0]]);
  const procTop = usePercent(scrollYProgress, p.range, [p.end[1], p.start[1]]);
  const procW = usePercent(scrollYProgress, p.range, [p.end[2], p.start[2]]);
  const procOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 1]);

  const m = layers.metlifeCard;
  const metLeft = usePercent(scrollYProgress, m.range, [m.end[0], m.start[0]]);
  const metTop = usePercent(scrollYProgress, m.range, [m.end[1], m.start[1]]);
  const metW = usePercent(scrollYProgress, m.range, [m.end[2], m.start[2]]);

  const f = layers.flowerImage;
  const flowerLeft = usePercent(scrollYProgress, f.range, [f.end[0], f.start[0]]);
  const flowerTop = usePercent(scrollYProgress, f.range, [f.end[1], f.start[1]]);
  const flowerW = usePercent(scrollYProgress, f.range, [f.end[2], f.start[2]]);
  const flowerH = usePercent(scrollYProgress, f.range, [f.end[3], f.start[3]]);

  const a = layers.analyzingCard;
  const anaLeft = usePercent(scrollYProgress, a.range, [a.end[0], a.start[0]]);
  const anaTop = usePercent(scrollYProgress, a.range, [a.end[1], a.start[1]]);
  const anaW = usePercent(scrollYProgress, a.range, [a.end[2], a.start[2]]);

  const t = layers.typingImage;
  const typeLeft = usePercent(scrollYProgress, t.range, [t.end[0], t.start[0]]);
  const typeTop = usePercent(scrollYProgress, t.range, [t.end[1], t.start[1]]);
  const typeW = usePercent(scrollYProgress, t.range, [t.end[2], t.start[2]]);
  const typeH = usePercent(scrollYProgress, t.range, [t.end[3], t.start[3]]);

  // Font-size scales down along with the cards so text doesn't overflow once tiny
  const cardTextScale = useTransform(scrollYProgress, [0, 1], [0.72, 1]);

  return (
    <div className={className}>

      {/* ===================== SCROLL-DRIVEN HERO ===================== */}
      {/* Tall wrapper gives us scroll distance to scrub through; inner
          content stays pinned with `sticky` while scrollYProgress animates. */}
      <section ref={sectionRef} className={`relative ${sectionHeight}`}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* ---- Center text: sentence crossfades into stat ---- */}
          <div className="absolute inset-0 grid place-items-center px-6 pointer-events-none">
            <motion.h1
              style={{ opacity: headlineOpacity, y: headlineY }}
              className="absolute max-w-4xl text-center font-serif text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight"
            >
              {headline}
            </motion.h1>

            <motion.div
              style={{ opacity: statOpacity, y: statY, scale: statScale }}
              className="absolute max-w-4xl text-center mt-10"
            >
              <div className="font-serif text-5xl sm:text-6xl md:text-7xl ">
                {statValue}
              </div>
              <div className="font-serif text-2xl sm:text-3xl md:text-4xl mt-2">
                {statDescription}
              </div>
            </motion.div>
          </div>

          {/* ---- Floating photo: person walking (top area) ---- */}
          <motion.div
            style={{ left: personLeft, top: personTop, width: personW, height: personH }}
            className="absolute rounded-2xl overflow-hidden shadow-xl z-10 hidden md:block"
          >
            <img
              src={images.personWalking ?? "https://picsum.photos/seed/lassie-walk/500/600"}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* ---- Floating photo: flowers (left area) ---- */}
          <motion.div
            style={{ left: flowerLeft, top: flowerTop, width: flowerW, height: flowerH }}
            className="absolute rounded-2xl overflow-hidden shadow-xl z-10 hidden md:block"
          >
            <img
              src={images.flowers ?? "https://picsum.photos/seed/lassie-flowers/500/600"}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* ---- Floating photo: person typing (bottom-right area) ---- */}
          <motion.div
            style={{ left: typeLeft, top: typeTop, width: typeW, height: typeH }}
            className="absolute rounded-2xl overflow-hidden shadow-xl z-10 hidden md:block"
          >
            <img
              src={images.personTyping ?? "https://picsum.photos/seed/lassie-type/500/450"}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* ---- Card: Metlife payment receipt ---- */}
          <motion.div
            style={{ left: metLeft, top: metTop, width: metW, scale: cardTextScale }}
            className="absolute z-20 origin-top-left rounded-2xl bg-[#EFEBE0]/95 backdrop-blur shadow-lg p-5 hidden md:block"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="grid place-items-center w-8 h-8 rounded-lg bg-linear-to-br from-emerald-500 to-sky-600 text-white text-xs font-bold">
                  M
                </span>
                <span className="text-sm font-medium">{receiptCard.brand}</span>
              </div>
              <span className="text-sm font-medium text-emerald-700">{receiptCard.amount}</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="font-medium">{receiptCard.receivedLabel}</span>
                <span className="text-neutral-400 ml-auto">{receiptCard.receivedDate}</span>
              </div>
              <div className="w-px h-3 bg-neutral-300 ml-2" />
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="font-medium">{receiptCard.postedLabel}</span>
                <span className="text-neutral-400 ml-auto">{receiptCard.postedDate}</span>
              </div>
            </div>
          </motion.div>

          {/* ---- Card: Processing claim ---- */}
          <motion.div
            style={{ left: procLeft, top: procTop, width: procW, opacity: procOpacity, scale: cardTextScale }}
            className="absolute z-20 origin-top-left rounded-2xl bg-[#EFEBE0]/95 backdrop-blur shadow-lg p-5 hidden md:block"
          >
            <div className="flex items-center gap-2 mb-3">
              <Clover className="w-4 h-4" strokeWidth={1.75} />
              <span className="text-sm font-medium">Processing claim...</span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-emerald-700 bg-emerald-100 rounded-full px-2 py-0.5">
                Received
              </span>
              <span className="text-xs text-neutral-400">Jan 4, 2026</span>
            </div>
            <div className="flex items-center justify-between border-t border-black/5 pt-3">
              <div>
                <div className="text-sm font-medium">Aetna</div>
                <div className="text-xs text-neutral-400">EFT 826077000559069</div>
              </div>
              <span className="text-sm font-medium">$8,471.30</span>
            </div>
          </motion.div>

          {/* ---- Card: Analyzing weekly activity ---- */}
          <motion.div
            style={{ left: anaLeft, top: anaTop, width: anaW, scale: cardTextScale }}
            className="absolute z-20 origin-top-left rounded-2xl bg-[#EFEBE0]/95 backdrop-blur shadow-lg p-5 hidden md:block"
          >
            <div className="flex items-center gap-2 mb-3">
              <Clover className="w-4 h-4" strokeWidth={1.75} />
              <span className="text-sm font-medium">Analyzing weekly activity...</span>
            </div>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2">
                <Table2 className="w-4 h-4 text-neutral-500" />
                <span className="text-neutral-600">Partially posted payments</span>
                <span className="ml-auto font-medium text-emerald-700">$67,119.50</span>
              </div>
              <div className="flex items-center gap-2">
                <FlagTriangleRight className="w-4 h-4 text-neutral-500" />
                <span className="text-neutral-600">Unposted payments</span>
                <span className="ml-auto font-medium text-emerald-700">$3,535.50</span>
              </div>
              <div className="flex items-center gap-2">
                <Shuffle className="w-4 h-4 text-neutral-500" />
                <span className="text-neutral-600">Claims flagged for review</span>
                <span className="ml-auto font-medium">27</span>
              </div>
            </div>
          </motion.div>

          {/* ---- Mobile-only simplified fallback (no scattered photos/cards) ---- */}
          <div className="md:hidden absolute inset-x-0 bottom-10 flex justify-center px-6">
            <p className="text-xs text-neutral-400 text-center">
              {mobileMessage}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}







{/* <LassieLanding
  headline={
    <>
      Your team serves guests.
      <br />
      Nair handles the busywork.
    </>
  }
  statValue="98%"
  statDescription={
    <>
      of restaurant operations
      <br />
      stay on track automatically
    </>
  }
  receiptCard={{
    brand: "Nair Pay",
    amount: "₹1,943.88",
    receivedLabel: "Order received",
    receivedDate: "Today, 19:22",
    postedLabel: "Kitchen posted",
    postedDate: "Today, 19:24",
  }}
  images={{
    personWalking: "restaurant-image-url",
    flowers: "food-image-url",
    personTyping: "restaurant-team-image-url",
  }}
  mobileMessage="Scroll to see Nair automate your restaurant operations"
  sectionHeight="h-[280vh]"
/> */}