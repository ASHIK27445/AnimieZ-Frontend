/* Clover / logo mark */
function CloverMark({
  size = 90,
  color = "#211d17",
  bg = "#f6f2e8",
}: {
  size?: number;
  color?: string;
  bg?: string;
}) {
  const r = size * 0.29;
  const c = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={c} cy={c - r * 0.62} r={r} fill={color} />
      <circle cx={c} cy={c + r * 0.62} r={r} fill={color} />
      <circle cx={c - r * 0.62} cy={c} r={r} fill={color} />
      <circle cx={c + r * 0.62} cy={c} r={r} fill={color} />
      <circle cx={c} cy={c} r={r * 0.42} fill={bg} />
    </svg>
  );
}

/* ---------------------------------------------------------------
   Hero — centered clover mark + two-line serif heading.
   Fully standalone, no navbar, no dependency on any other file.
--------------------------------------------------------------- */
export default function LassieHero() {
  return (
    <section className="min-h-screen w-full bg-[#f6f2e8] flex flex-col items-center justify-center px-6">
      <CloverMark size={90} />
      <h1 className="mt-8 font-serif text-[40px] md:text-[52px] leading-[1.15] text-[#211d17] text-center">
        AI that runs the
        <br />
        doctor&rsquo;s office
      </h1>
    </section>
  );
}