import { useState, type FormEvent, type ReactNode } from "react";

/* Real Unsplash photo — "Red poppy wild flower, England" by Diana Parkhouse
   https://unsplash.com/photos/orange-flower-in-green-grass-during-daytime-ZB64iL65tOE
   License: Unsplash License (free to use) — https://unsplash.com/license
   Swap this constant for a different photo any time. */
const CTA_IMAGE_URL =
  "https://images.unsplash.com/photo-1624879536130-3a0277ee36c3?fm=jpg&q=80&w=2400&auto=format&fit=crop";

/* Clover mark — white, for use over a photo */
function CloverMarkWhite({ size = 90 }: { size?: number }) {
  const r = size * 0.29;
  const c = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={c} cy={c - r * 0.62} r={r} fill="#ffffff" />
      <circle cx={c} cy={c + r * 0.62} r={r} fill="#ffffff" />
      <circle cx={c - r * 0.62} cy={c} r={r} fill="#ffffff" />
      <circle cx={c + r * 0.62} cy={c} r={r} fill="#ffffff" />
      <circle cx={c} cy={c} r={r * 0.32} fill="#e07a1f" />
    </svg>
  );
}

/* ---------------------------------------------------------------
   CTA section — "A breath of fresh air for your office"
   Fully standalone: drop this anywhere (bottom of any page/layout),
   no dependency on the hero or feature-scene components.
--------------------------------------------------------------- */
interface LassieCTAProps {
  imageUrl?: string;
  onSubmit?: (email: string) => void;
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  emailPlaceholder?: string;
  submitLabel?: string;
  children?: ReactNode;
}

export default function LassieCTA({
  imageUrl = CTA_IMAGE_URL,
  onSubmit,
  eyebrow,
  title = (
    <>
      A calmer way to run
      <br />
      your restaurant
    </>
  ),
  description,
  emailPlaceholder = "Work email",
  submitLabel = "Book a demo",
  children,
}: LassieCTAProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  return (
    <section className="w-full bg-white px-4 py-4">
      <div
        className="relative flex min-h-130 w-full flex-col items-center justify-center overflow-hidden rounded-[36px] px-6 text-center"
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent" />

        <div className="relative z-10 flex flex-col items-center">
          <CloverMarkWhite size={90} />

          {eyebrow ? <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">{eyebrow}</p> : null}

          <h2 className="mt-6 font-serif text-[36px] leading-[1.15] text-white drop-shadow-sm md:text-[48px]">{title}</h2>

          {description ? <p className="mt-5 max-w-xl text-sm leading-6 text-white/80 md:text-base">{description}</p> : null}

          {children ?? (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex items-center gap-2 rounded-full bg-white/25 p-1.5 shadow-lg backdrop-blur-sm"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={emailPlaceholder}
                className="w-45 bg-transparent px-4 py-2.5 text-[15px] text-white placeholder-white/80 focus:outline-none"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-full bg-white px-6 py-2.5 text-[15px] font-medium text-neutral-900 transition-colors hover:bg-neutral-100"
              >
                {submitLabel}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}




{/* <LassieCTA
  eyebrow="Built for restaurant teams"
  title={
    <>
      Run a calmer,
      <br />
      more profitable restaurant
    </>
  }
  description="Manage orders, staff, inventory, and guest experiences from one workspace."
  imageUrl="your-image-url"
  emailPlaceholder="Restaurant work email"
  submitLabel="Request a demo"
  onSubmit={(email) => console.log(email)}
/> */}