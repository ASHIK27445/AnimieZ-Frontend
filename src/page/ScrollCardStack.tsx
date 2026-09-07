import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  MotionValue,
} from "framer-motion";

export interface StackCard {
  id: string;
  src: string;
  alt?: string;
  eyebrow?: string;
  title?: string;
  ctaLabel?: string;
  saleLabel?: string;
}

interface ScrollCardStackProps {
  cards?: StackCard[];
  peek?: number;
  vhPerTransition?: number;
  cardHeight?: string;
}

const DEFAULT_CARDS: StackCard[] = [
  {
    id: "01",
    src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=90",
    eyebrow: "ANIMIEZ / DROP 01",
    title: "Blue Flame Tee",
    ctaLabel: "Shop Product 01",
    saleLabel: "SALE 15% OFF",
  },
  {
    id: "02",
    src: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1400&q=90",
    eyebrow: "ANIMIEZ / DROP 02",
    title: "Bushido Tee",
    ctaLabel: "Shop Product 02",
    saleLabel: "SALE 15% OFF",
  },
  {
    id: "03",
    src: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1400&q=90",
    eyebrow: "ANIMIEZ / DROP 03",
    title: "Demon Blood Tee",
    ctaLabel: "Shop Product 03",
    saleLabel: "SALE 15% OFF",
  },
  {
    id: "04",
    src: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1400&q=90",
    eyebrow: "ANIMIEZ / DROP 04",
    title: "Domain Expansion Tee",
    ctaLabel: "Shop Product 04",
    saleLabel: "SALE 15% OFF",
  },
];

function StackedCard({
  card,
  restTop,
  zIndex,
  isFirst,
  segStart,
  segEnd,
  scrollYProgress,
  cardHeight,
  reduceMotion,
}: {
  card: StackCard;
  restTop: number;
  zIndex: number;
  isFirst: boolean;
  segStart: number;
  segEnd: number;
  scrollYProgress: MotionValue<number>;
  cardHeight: string;
  reduceMotion: boolean;
}) {
  const rawY = useTransform(
    scrollYProgress,
    isFirst ? [0, 1] : [segStart, segEnd],
    isFirst ? [0, 0] : [600, 0],
    { clamp: true }
  );

  const smoothY = useSpring(rawY, { stiffness: 260, damping: 34, mass: 0.6 });
  const y = reduceMotion ? rawY : smoothY;

  return (
    <motion.div
      className="absolute left-1/2 w-[92vw] max-w-3xl -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
      style={{
        top: restTop,
        height: cardHeight,
        zIndex,
        y: isFirst ? 0 : y,
      }}
    >
      <img
        src={card.src}
        alt={card.alt ?? card.title ?? `card-${card.id}`}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        draggable={false}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
      {(card.eyebrow || card.title || card.ctaLabel) && (
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          {card.eyebrow && (
            <p className="text-xs font-semibold tracking-[0.16em] text-red-500">{card.eyebrow}</p>
          )}
          {card.title && (
            <h3 className="mt-2 text-3xl font-black tracking-tight text-white md:text-5xl">
              {card.title}
            </h3>
          )}
          {card.ctaLabel && (
            <p className="mt-3 text-xs font-semibold tracking-widest text-white/80">
              {card.ctaLabel} &nbsp;→
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function ScrollCardStack({
  cards = DEFAULT_CARDS,
  peek = 56,
  vhPerTransition = 100,
  cardHeight = "70vh",
}: ScrollCardStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = Boolean(useReducedMotion());

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const numTransitions = Math.max(cards.length - 1, 1);
  const segLen = 1 / numTransitions;

  const extraVh = numTransitions * vhPerTransition;

  return (
    <section
      ref={containerRef}
      style={{ height: `calc(100vh + ${extraVh}vh)` }}
      className="relative"
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-black">
        <div className="absolute left-6 right-6 top-7 z-30 flex items-center justify-between md:left-10 md:right-10 md:top-10">
          <h2 className="font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-5xl font-black uppercase leading-none tracking-[-0.03em] text-white md:text-7xl">
            SALE
          </h2>
          <button
            type="button"
            className="border border-white/70 px-5 py-3 text-[10px] font-bold tracking-[0.2em] text-white transition-colors hover:border-red-500 hover:bg-red-500 hover:text-white"
          >
            VIEW ALL
          </button>
        </div>
        <div
          className="relative w-full"
          style={{ height: `calc(${cardHeight} + ${peek * (cards.length - 1)}px)` }}
        >
          {cards.map((card, i) => {
            const isFirst = i === 0;
            const segStart = isFirst ? 0 : (i - 1) * segLen;
            const segEnd = isFirst ? 0 : i * segLen;
            return (
              <StackedCard
                key={card.id}
                card={card}
                restTop={i * peek}
                zIndex={i + 1}
                isFirst={isFirst}
                segStart={segStart}
                segEnd={segEnd}
                scrollYProgress={scrollYProgress}
                cardHeight={cardHeight}
                reduceMotion={reduceMotion}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}