import { ArrowRight } from "lucide-react";

export default function GalleryHero() {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-cover bg-center font-['Archivo',sans-serif] bg-[linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.45)),url('https://images.unsplash.com/photo-1516749396351-ab12ad535d7c?fm=jpg&q=80&w=2400&auto=format&fit=crop')]"
    >
      <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white mb-6">
        Gallery
      </span>

      <h1 className="uppercase font-semibold leading-[1.05] tracking-[-0.01em] text-white text-[32px] sm:text-[42px] md:text-[52px] max-w-4xl">
        Around the table, with flavors that
        <br className="hidden sm:block" /> invite you to stay a little longer
      </h1>

      <a
        href="#"
        className="mt-10 inline-flex items-center gap-3 border border-white/80 text-white text-[11px] font-bold tracking-[0.18em] uppercase pl-7 pr-2 py-2 hover:border-white transition-colors group"
      >
        Explore More
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black transition-transform duration-200 group-hover:translate-x-1">
          <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
        </span>
      </a>
    </section>
  );
}