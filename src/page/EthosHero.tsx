export default function EthosHero() {
  return (
    <section className="relative isolate min-h-[min(760px,100vh)] overflow-hidden bg-[#111] text-white">
      <img
        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=2200&q=90"
        alt="AnimieZ fashion collection in an industrial space"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center grayscale-[0.2] contrast-[1.08] brightness-[0.62]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.48)_37%,rgba(0,0,0,0.12)_78%,rgba(0,0,0,0.38)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(0,0,0,0.45),transparent_45%)]" />

      <div className="mx-auto flex min-h-[min(760px,100vh)] max-w-360 items-center px-[5.5vw] py-16 max-[700px]:px-7">
        <div className="max-w-90 pt-8 max-[700px]:max-w-75">
          <h1 className="m-0 font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[clamp(64px,8vw,112px)] font-black uppercase leading-[0.82] tracking-[-0.03em]">
            <span className="block">THE</span>
            <span className="block text-[#ed1c24]">ANIMIEZ</span>
            <span className="block">ETHOS</span>
          </h1>
          <p className="mt-8 max-w-77.5 font-sans text-[11px] leading-[1.75] text-[#d5d5d5] max-[700px]:text-[10px]">
            We exist at the intersection of technical precision and cultural
            expression. Our garments are engineered for those navigating an
            increasingly fragmented world, built from Japanese craftsmanship,
            anime culture and modern Australian streetwear.
          </p>
        </div>
      </div>

      <div className="absolute bottom-7 left-[5.5vw] right-[5.5vw] flex items-center justify-between border-t border-white/25 pt-4 text-[8px] font-bold tracking-[0.2em] text-white/65 max-[700px]:left-7 max-[700px]:right-7">
        <span>ANIMIEZ / EST. 2026</span>
        <span className="text-[#ed1c24]">SCROLL TO DISCOVER ↓</span>
      </div>
    </section>
  );
}
