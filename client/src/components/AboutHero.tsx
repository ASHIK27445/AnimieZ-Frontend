export default function ShapedBySeaHero() {
  return (
    <section className="relative min-h-screen w-full text-white overflow-hidden font-['Archivo',sans-serif]">
      {/* Background video - swap the src for your own stone-architecture/night footage */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1759244566307-21286bf7ce2b?q=80&w=2400&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://www.pexels.com/download/video/34891329/" type="video/mp4" />
      </video>

      {/* Darkening overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Headline */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 sm:px-12 h-[calc(100vh-96px)] flex items-center">
        <h1 className="uppercase leading-[1.05] tracking-[-0.01em] text-[#f3eadc] text-[42px] sm:text-[56px] md:text-[68px] font-medium">
          Shaped by sea.
          <br />
          Grounded
          <br />
          in land
        </h1>
      </div>
    </section>
  );
}