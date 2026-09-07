function RestaurantMark() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
      <path d="M7 34h28M10 34V17l11-8 11 8v17M15 34V22h12v12M13 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 17h8M21 9v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MenuMark() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
      <rect x="10" y="7" width="22" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M15 14h12M15 20h12M15 26h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="28" cy="29" r="2" fill="currentColor" />
    </svg>
  );
}

function FoodMark() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
      <circle cx="21" cy="23" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M14 23h14M16 28h10M17 18c1.8 1.8 6.2 1.8 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 8v12M10 8v12M7 13h3M8.5 20v14M35 8v26M35 8c-3 2-3 6 0 8M35 16h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FlowerMark() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
      <circle cx="21" cy="12" r="7" fill="currentColor" />
      <circle cx="21" cy="30" r="7" fill="currentColor" />
      <circle cx="12" cy="21" r="7" fill="currentColor" />
      <circle cx="30" cy="21" r="7" fill="currentColor" />
      <circle cx="21" cy="21" r="3.5" fill="white" />
    </svg>
  );
}

const footerGroups = [
  {
    title: "Company",
    links: [
      { label: "Call us", href: "tel:+919876543210" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Socials",
    links: [
      { label: "Instagram", href: "#instagram" },
      { label: "X", href: "#x" },
      { label: "LinkedIn", href: "#linkedin" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#bcecf7] px-0 pt-0 text-[#11100f]">
      <div className="min-h-125 rounded-b-[58px] bg-white px-7 pb-7 pt-16 sm:px-10 md:px-16 lg:px-7">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <h2 className="max-w-117.5 font-['Playfair_Display',serif] text-[45px] leading-[1.04] sm:text-[54px] md:text-[58px]">
              AI that runs the
              <br />
              <span className="italic">restaurant&apos;s day</span>
            </h2>

            <a
              href="#demo"
              className="mt-9 inline-flex rounded-xl bg-[#171310] px-4 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Get started
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-[15px] text-neutral-500">{group.title}</h3>
                <ul className="space-y-3 text-[15px]">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="transition-colors hover:text-neutral-500">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex min-h-51.25 flex-col items-center justify-end pb-0 text-center">
          <div className="flex items-center gap-3">
            <RestaurantMark />
            <MenuMark />
            <FoodMark />
            <FlowerMark />
          </div>
          <p className="mt-2 font-mono text-[12px] leading-[1.35] text-neutral-700">
            © 2026 Nair Restaurant. All rights reserved.
            <br />
            Made for teams who care about every table.
          </p>
        </div>
      </div>
    </footer>
  );
}