import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const video = videoRef.current;
    video?.pause();

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set("#hero-scroll-copy", { opacity: 1, x: 0 });
        gsap.set("#hero-final-word", { opacity: 1, scale: 1 });
      } else {
        gsap.set(["#hero-scroll-copy", "#hero-final-word", "#hero-scroll-cue"], {
          opacity: 0,
        });
        gsap.set("#hero-final-word", { scale: 0.08 });
      }

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });

      scrollTl
        .to("#hero-scroll-copy", { opacity: 1, x: 0, duration: 0.2 }, 0.08)
        .to("#hero-scroll-cue", { opacity: 0.65, duration: 0.08 }, 0)
        .to("#hero-scroll-copy", { opacity: 0, x: -80, duration: 0.14 }, 0.62)
        .to("#hero-final-word", { opacity: 1, scale: 1, duration: 0.12 }, 0.68)
        .to("#hero-final-word", { scale: 18, opacity: 0, duration: 0.28 }, 0.78);

      if (video) {
        const scrubVideo = { time: 0 };
        const SEEK_EPSILON = 0.05;

        const bindScrub = () => {
          gsap.to(scrubVideo, {
            time: video.duration || 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
            onUpdate: () => {
              if (Math.abs(video.currentTime - scrubVideo.time) < SEEK_EPSILON)
                return;
              const anyVideo = video as HTMLVideoElement & {
                fastSeek?: (time: number) => void;
              };
              if (typeof anyVideo.fastSeek === "function") {
                anyVideo.fastSeek(scrubVideo.time);
              } else {
                video.currentTime = scrubVideo.time;
              }
            },
          });
        };

        if (video.readyState >= 1) {
          bindScrub();
        } else {
          video.addEventListener("loadedmetadata", bindScrub, {
            once: true,
          });
        }
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: "280vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
          src="test.mp4"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(17,17,20,0.55) 0%, rgba(17,17,20,0.75) 55%, rgba(17,17,20,0.95) 100%)",
          }}
        />
        <div
          className="absolute inset-0 "
        />
        <div
          id="hero-scan"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(212,255,61,0.08), transparent 30%)",
            backgroundSize: "200% 100%",
          }}
        />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 sm:px-8">
          <div
            id="hero-scroll-copy"
            className="max-w-xs -translate-x-20"
          >
            <h1 className="font-display text-6xl font-900 uppercase leading-[0.84] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              <span className="block">THE</span>
              <span className="block text-(--volt)">ANIMIEZ</span>
              <span className="block">ETHOS</span>
            </h1>

            <p
              id="hero-sub"
              className="mt-7 max-w-xs font-sans text-[11px] leading-[1.7] text-(--paper)/70"
            >
              Technical precision and cultural expression, built from Japanese
              craftsmanship, anime culture and modern streetwear.
            </p>

          </div>
        </div>

        <div
          id="hero-final-word"
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center overflow-hidden"
        >
          <span className="select-none whitespace-nowrap font-display text-[clamp(4rem,14vw,13rem)] font-900 uppercase leading-none tracking-[-0.08em] text-white">
            AnimieZ
          </span>
        </div>

      </div>
    </section>
  );
}