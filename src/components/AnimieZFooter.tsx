export default function AnimieZFooter() {
  return (
    <footer className="overflow-hidden rounded-t-[56px] bg-[#0b0b0b] text-white">
      <div className="mx-auto max-w-375 px-6 pb-7 pt-12 sm:px-10 lg:px-14">
        <div className="grid gap-10 border-b border-white/15 pb-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <p className="font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-3xl tracking-[-0.04em]">
              ANIMIEZ<span className="text-[#ef4444]">_</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Small-run anime streetwear for people building the next frame.
            </p>
          </div>
          <div>
            <h2 className="text-[10px] font-bold tracking-[0.2em] text-[#ef4444]">EXPLORE</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <a href="#drops" className="transition-colors hover:text-[#ef4444]">Latest Drops</a>
              <a href="#origin" className="transition-colors hover:text-[#ef4444]">Collection</a>
              <a href="#ethos" className="transition-colors hover:text-[#ef4444]">Our Story</a>
            </div>
          </div>
          <div>
            <h2 className="text-[10px] font-bold tracking-[0.2em] text-[#ef4444]">HELP</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <a href="#contact" className="transition-colors hover:text-[#ef4444]">Contact</a>
              <a href="#faq" className="transition-colors hover:text-[#ef4444]">FAQ</a>
              <a href="#support" className="transition-colors hover:text-[#ef4444]">Support</a>
            </div>
          </div>
          <div>
            <h2 className="text-[10px] font-bold tracking-[0.2em] text-[#ef4444]">POLICY & SOCIAL</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <a href="#privacy" className="transition-colors hover:text-[#ef4444]">Privacy Policy</a>
              <a href="#terms" className="transition-colors hover:text-[#ef4444]">Terms & Conditions</a>
              <a href="#instagram" className="transition-colors hover:text-[#ef4444]">Instagram / TikTok</a>
            </div>
          </div>
        </div>

        <div className="relative h-[clamp(180px,24vw,340px)] overflow-hidden">
          <p className="absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-1/2 font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[clamp(7rem,24vw,22rem)] leading-none tracking-[-0.08em] text-white">
            ANIMIEZ
          </p>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-white/15 pt-5 text-[9px] font-bold tracking-[0.16em] text-white/50 sm:flex-row">
          <span>© 2026 ANIMIEZ STUDIO. ALL RIGHTS RESERVED.</span>
          <span>MADE FOR THE NEXT FRAME.</span>
        </div>
      </div>
    </footer>
  );
}
