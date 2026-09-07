import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";
import StatusTicker, { type StatusItem } from "./StatusTicket";

export type HeroShrinkMedia = {
  src: string;
  type?: "image" | "video";
  poster?: string;
  alt?: string;
  videoType?: string;
};

export type HeroShrinkProps = {
  media?: HeroShrinkMedia[];
  content?: ReactNode;
  statusItems?: StatusItem[];
  statusLabel?: ReactNode;
  overlay?: ReactNode;
  heightMultiplier?: number;
  scale?: { from?: number; to?: number };
  borderRadius?: { from?: number; to?: number };
  transform?: string | ((progress: number) => string);
  className?: string;
  heroClassName?: string;
  mediaClassName?: string;
  style?: CSSProperties;
};

const defaultMedia: HeroShrinkMedia[] = [
  {
    src: "/videos/scene-1.mp4",
    type: "video",
    poster: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop",
  },
  {
    src: "/videos/scene-2.mp4",
    type: "video",
    poster: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?q=80&w=2000&auto=format&fit=crop",
  },
  {
    src: "/videos/scene-3.mp4",
    type: "video",
    poster: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop",
  },
  {
    src: "/videos/scene-4.mp4",
    type: "video",
    poster: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop",
  },
  {
    src: "/videos/scene-5.mp4",
    type: "video",
    poster: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function HeroShrink({
  media = defaultMedia,
  content,
  statusItems,
  statusLabel = "Let Nimbus run your admin",
  overlay,
  heightMultiplier = 2.4,
  scale = { from: 1, to: 0.86 },
  borderRadius = { from: 0, to: 32 },
  transform,
  className = "relative bg-[#F6F1E9]",
  heroClassName = "relative w-full h-full overflow-hidden text-white shadow-2xl",
  mediaClassName = "absolute inset-0 w-full h-full object-cover",
  style,
}: HeroShrinkProps) {
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

  const currentScale = (scale.from ?? 1) + ((scale.to ?? scale.from ?? 1) - (scale.from ?? 1)) * progress;
  const radius = (borderRadius.from ?? 0) + ((borderRadius.to ?? borderRadius.from ?? 0) - (borderRadius.from ?? 0)) * progress;
  const activeScene = media.length ? Math.min(media.length - 1, Math.floor(progress * media.length)) : -1;
  const currentTransform = typeof transform === "function" ? transform(progress) : transform;

  return (
    <div ref={wrapperRef} style={{ ...style, height: `${heightMultiplier * 100}vh` }} className={className}>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div
          className={heroClassName}
          style={{
            transform: currentTransform ?? `scale(${currentScale})`,
            borderRadius: `${radius}px`,
            transition: "transform 0.05s linear, border-radius 0.05s linear",
          }}
        >
          {media.map((item, index) => {
            const mediaClass = `${mediaClassName} transition-opacity duration-700 ease-out ${index === activeScene ? "opacity-100" : "opacity-0"}`;
            return item.type === "image" ? (
              <img key={item.src} src={item.src} alt={item.alt ?? ""} className={mediaClass} />
            ) : (
              <video key={item.src} autoPlay muted loop playsInline poster={item.poster} className={mediaClass}>
                <source src={item.src} type={item.videoType ?? "video/mp4"} />
              </video>
            );
          })}
          {overlay ?? <div className="absolute inset-0 bg-black/35" />}

          {content ?? <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
            <h1 className="font-['Playfair_Display',serif] text-[40px] sm:text-[52px] md:text-[64px] leading-[1.15] mb-6">
              You handle the craft.
              <br />
              <span className="italic">We'll handle the paperwork.</span>
            </h1>

            <div className="mb-8">
              <p className="text-[14px] font-medium mb-2">{statusLabel}</p>
              <StatusTicker statuses={statusItems} />
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center bg-white/20 backdrop-blur-md rounded-full p-1.5 gap-1"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="bg-transparent outline-none text-white placeholder-white/70 text-[14px] px-4 py-2 w-40 sm:w-56"
              />
              <button
                type="submit"
                className="bg-white text-[#1a1a1a] text-[14px] font-semibold rounded-full px-5 py-2 hover:bg-white/90 transition-colors"
              >
                Get started
              </button>
            </form>
          </div>}
        </div>
      </div>
    </div>
  );
}


// import HeroShrink from "./lassi/HeroShrink";

// export default function App() {
//   return (
//     <main className="min-h-screen bg-[#171914]">
//       <HeroShrink
//         media={[
//           {
//             type: "image",
//             src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop",
//             alt: "Restaurant dining area",
//           },
//           {
//             type: "video",
//             src: "https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4",
//             poster:
//               "https://images.unsplash.com/photo-1515003195392-c4f9e6f2ef3f?q=80&w=2000&auto=format&fit=crop",
//           },
//           {
//             type: "image",
//             src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop",
//             alt: "Indian food served on a table",
//           },
//           {
//             type: "video",
//             src: "https://videos.pexels.com/video-files/4253267/4253267-hd_1920_1080_25fps.mp4",
//             poster:
//               "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop",
//           },
//         ]}
//         statusLabel="Nair Restaurant live updates"
//         statusItems={[
//           {
//             icon: "invoice",
//             text: "Fresh ingredients prepared today",
//           },
//           {
//             icon: "phone",
//             text: "Your table is ready",
//           },
//           {
//             icon: "calendar",
//             text: "Dinner reservations are open",
//           },
//         ]}
//         heightMultiplier={2.4}
//         scale={{
//           from: 1,
//           to: 0.86,
//         }}
//         borderRadius={{
//           from: 0,
//           to: 32,
//         }}
//         overlay={<div className="absolute inset-0 bg-black/40" />}
//       />
//     </main>
//   );
// }