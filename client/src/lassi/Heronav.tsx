import { type ReactNode, useEffect, useState } from "react";

export type HeroNavLink = {
  label: string;
  href?: string;
  muted?: boolean;
};

export type HeroNavProps = {
  brand?: ReactNode;
  brandIcon?: ReactNode;
  brandHref?: string;
  links?: HeroNavLink[];
  collapseOnScroll?: boolean;
  collapseThreshold?: number;
  className?: string;
  brandClassName?: string;
  linkClassName?: string;
};

const defaultBrandIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm10 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2ZM7 13c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm10 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm-5 1c2 0 4 1.6 4 4v.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V18c0-2.4 2-4 4-4Z" />
  </svg>
);

const defaultLinks: HeroNavLink[] = [
  { label: "Company" },
  { label: "Demo" },
  { label: "Login", muted: true },
];

export default function HeroNav({
  brand = "Nimbus",
  brandIcon = defaultBrandIcon,
  brandHref = "#",
  links = defaultLinks,
  collapseOnScroll = true,
  collapseThreshold = 40,
  className = "fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 p-1.5 rounded-xl text-[13px] font-semibold transition-colors duration-300",
  brandClassName = "flex items-center gap-1.5 rounded-xl pl-3 pr-4 py-2 transition-colors duration-200",
  linkClassName = "rounded-xl px-4 py-2 transition-colors duration-200",
}: HeroNavProps) {
  const [hovering, setHovering] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!collapseOnScroll) return;

    const handleScroll = () => setIsScrolled(window.scrollY > collapseThreshold);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [collapseOnScroll, collapseThreshold]);

  return (
    <nav
      onMouseLeave={() => {
        setHovering(false);
        setActive(null);
      }}
      className={`${className} ${
        hovering ? "bg-white/25 backdrop-blur-md" : "bg-white/25"
      }`}
    >
      <a
        href={brandHref}
        onMouseEnter={() => {
          setHovering(true);
          setActive(-1);
        }}
        className={`${brandClassName} transition-[gap] duration-500 ${
          !hovering || active === -1
            ? "bg-white text-[#1a1a1a] ring-2 ring-white/20 shadow-sm"
            : "bg-transparent text-white/80"
        }`}
        style={{ gap: isScrolled ? 0 : undefined }}
      >
        {brandIcon}
        <span
          className="inline-block max-w-45 overflow-hidden whitespace-nowrap transition-[max-width,opacity] duration-500 ease-out"
          style={{ maxWidth: isScrolled ? 0 : 180, opacity: isScrolled ? 0 : 1 }}
        >
          {brand}
        </span>
      </a>

      {links.map((link, i) => {
        const isMuted = link.muted ?? link.label === "Login";
        const isActive = active === i;
        return (
          <a
            key={`${link.label}-${i}`}
            href={link.href ?? "#"}
            onMouseEnter={() => {
              setHovering(true);
              setActive(i);
            }}
            className={`${linkClassName} ${
              !hovering
                ? isMuted
                  ? "bg-white/50 text-[#1a1a1a]/70 shadow-sm"
                  : "bg-white text-[#1a1a1a] shadow-sm"
                : isActive
                ? "bg-white text-[#1a1a1a] shadow-sm"
                : "bg-transparent text-white/70"
            }`}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}