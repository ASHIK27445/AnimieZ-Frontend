import { useEffect, useRef, useState, type CSSProperties } from "react";

const POSTERS = [
  {
    id: "01",
    kanji: "無限",
    label: "BLUE FLAME TEE",
    accent: "#8b5cf6",
    src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: "02",
    kanji: "静寂",
    label: "BUSHIDO TEE",
    accent: "#eab308",
    src: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: "03",
    kanji: "嵐",
    label: "DEMON BLOOD TEE",
    accent: "#f97316",
    src: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: "04",
    kanji: "影",
    label: "DOMAIN EXPANSION TEE",
    accent: "#14b8a6",
    src: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=90",
  },
];

type InkPosterProps = {
  kanji: string;
  label: string;
  accent: string;
  src: string;
  style: CSSProperties;
  className?: string;
};

function InkPoster({ kanji, label, src, style, className = "" }: InkPosterProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden rounded-sm border border-white/10 bg-neutral-950 ${className}`}
      style={style}
    >
      <img
        src={src}
        alt={label}
        className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.72] saturate-[0.85]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-black/20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-6xl font-bold tracking-widest text-white/90" style={{ writingMode: "vertical-rl" }}>
          {kanji}
        </span>
      </div>
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
        <span className="text-lg font-black tracking-tight text-white">ANIMIEZ</span>
        <span className="max-w-[60%] text-right text-[9px] font-bold tracking-[0.15em] text-white/80">
          {label}
        </span>
      </div>
    </div>
  );
}

const ease = (t: number) => 1 - Math.pow(1 - t, 3);
const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1);

export default function ZenjiOriginDrop() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = clamp01(total > 0 ? -rect.top / total : 0);
      setProgress(scrolled);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pMerge = clamp01(progress / 0.1);
  const pSplit = clamp01((progress - 0.1) / 0.18);
  const pCards = clamp01((progress - 0.28) / 0.72);

  const cardStep = 1 / POSTERS.length;

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <div className="px-6 pb-4 pt-8 font-mono text-xs tracking-widest md:px-10">
        <span className="text-red-500">COLLECTION</span>
        <span className="text-white/40"> // </span>
        <span className="text-white/50">THE_ORIGIN_DROP</span>
      </div>

      <section ref={sectionRef} style={{ height: "420vh" }} className="relative">
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="select-none whitespace-nowrap font-black leading-none tracking-tight text-white"
              style={{
                fontSize: "clamp(2rem, 10vw, 7.5rem)",
                opacity: ease(pMerge),
                transform: `translateX(${-ease(pSplit) * 100}vw)`,
              }}
            >
              THE
            </h1>
            <h1
              className="select-none whitespace-nowrap bg-linear-to-b from-white to-white/70 bg-clip-text font-black leading-none tracking-tight text-transparent"
              style={{
                fontSize: "clamp(2rem, 10vw, 7.5rem)",
                opacity: ease(pMerge),
                transform: `translateX(${ease(pSplit) * 100}vw)`,
              }}
            >
              ORIGIN
            </h1>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-95 w-65 md:h-120 md:w-85">
              {POSTERS.map((p, i) => {
                const start = i * cardStep;
                const local = clamp01((pCards - start) / cardStep);
                const t = ease(local);
                const restRotate = (i - 1.5) * 8;
                const restX = (i - 1.5) * 46;
                const riseY = (1 - t) * 480;
                return (
                  <InkPoster
                    key={p.id}
                    kanji={p.kanji}
                    label={p.label}
                    accent={p.accent}
                    src={p.src}
                    style={{
                      transform: `translate(${restX * t}px, ${riseY}px) rotate(${restRotate * t}deg)`,
                      opacity: local > 0 ? 1 : 0,
                      zIndex: i,
                      boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-32 pt-16 text-center md:px-10">
        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">Where the story starts.</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/60">
          Four graphics, one lineage. The Origin Drop pairs ink-wash artwork with heavyweight
          cotton — built for the street, drawn from the page.
        </p>
        <button className="mt-8 border border-white px-8 py-3 text-xs font-semibold tracking-widest hover:bg-white hover:text-black">
          SHOP THE DROP
        </button>
      </section>
    </div>
  );
}