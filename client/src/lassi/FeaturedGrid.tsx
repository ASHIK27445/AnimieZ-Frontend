import type { ReactNode } from "react";

/* ---------------------------------------------------------------
   Small shared bits
--------------------------------------------------------------- */
function ArrowLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="group inline-flex items-center gap-1.5 whitespace-nowrap text-[15px] font-medium text-white/90 hover:text-white transition-colors"
    >
      {label}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        className="transition-transform group-hover:translate-x-0.5"
      >
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

interface CardProps {
  label: string;
  className?: string;
  children?: ReactNode;
  padded?: boolean;
  compact?: boolean;
}

function Card({ label, className = "", children, padded = true, compact = false }: CardProps) {
  return (
    <div
      className={`relative h-full bg-black flex flex-col justify-between ${
        compact ? "min-h-0" : "min-h-70"
      } ${
        padded ? "p-7" : ""
      } ${className}`}
    >
      <div className={padded ? "p-7 flex-1" : "p-7 flex-1"}>{children}</div>
      <div className={padded ? "mt-auto p-7 pt-0" : "mt-auto p-7 pt-0"}>
        <ArrowLink label={label} />
      </div>
    </div>
  );
}

const border = "border-white/10";

/* ---------------------------------------------------------------
   Grid 1 — Analytics (2/3) + A/B Testing (1/3)
--------------------------------------------------------------- */
function AnalyticsCard() {
  return (
    <Card label="Analytics" className={`border-r ${border}`}>
      <h3 className="text-[19px] font-semibold text-white mb-6">Analytics</h3>

      <div className={`grid grid-cols-4 gap-4 pb-6 border-b ${border}`}>
        <div>
          <div className="flex items-center gap-1.5 text-[13px] text-white/60">
            Live Orders
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          </div>
          <div className="text-[20px] font-semibold text-white mt-1">413</div>
        </div>
        <div>
          <div className="text-[13px] text-white/60">Active Tables</div>
          <div className="text-[20px] font-semibold text-white mt-1">48</div>
        </div>
        <div>
          <div className="text-[13px] text-white/60">Today&apos;s Revenue</div>
          <div className="text-[20px] font-semibold text-white mt-1">₹2.2L</div>
        </div>
        <div className="opacity-40">
          <div className="text-[13px] text-white/60">Cancelled Orders</div>
          <div className="text-[20px] font-semibold text-white mt-1">2.4%</div>
        </div>
      </div>

      <div className="relative mt-6 h-32.5">
        <span className="absolute -left-1 top-0 text-[11px] text-white/30">330k</span>
        <svg viewBox="0 0 700 140" className="w-full h-full overflow-visible" preserveAspectRatio="none">
          <polyline
            points="0,60 60,90 120,50 180,75 240,45 300,70 360,40 420,65 480,55 540,80 600,60 660,95 700,80"
            fill="none"
            stroke="#a855f7"
            strokeWidth="2"
          />
          <polyline
            points="0,100 60,115 120,95 180,105 240,90 300,110 360,85 420,100 480,95 540,108 600,100 660,115 700,110"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2"
          />
        </svg>

        <div className="absolute left-[42%] top-0 bg-white border border-black/10 rounded-xl px-4 py-3 shadow-2xl w-52.5">
          <div className="text-[12px] text-white/50 mb-2">Aug 27, 2026</div>
          <div className="flex items-center justify-between text-[13px] mb-1">
            <span className="flex items-center gap-1.5 text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Pageviews
            </span>
            <span className="text-white font-medium">135,535</span>
          </div>
          <div className="flex items-center justify-between text-[13px]">
            <span className="flex items-center gap-1.5 text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" /> Visitors
            </span>
            <span className="text-white font-medium">54,817</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

function ABTestCard() {
  return (
    <Card label="A/B Testing">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-[13px] text-white/50">View Menu</div>
          <div className="text-[20px] font-semibold text-white">413</div>
        </div>
      </div>

      <div className="h-17.5 rounded-xl mt-4 mb-6 bg-linear-to-r from-sky-500 via-sky-500/60 to-transparent" />

      <div className={`grid grid-cols-3 text-[12px] text-white/40 pb-2 border-b ${border}`}>
        <span>Variant</span>
        <span className="text-right">Views</span>
        <span className="text-right opacity-40">Events</span>
      </div>

      <div className={`grid grid-cols-3 items-center py-2.5 border-b ${border} text-[13px]`}>
        <span className="flex items-center gap-1.5 text-white font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Dinner Menu 2026
          <span className="ml-1 text-[10px] font-semibold text-purple-400 bg-purple-400/10 rounded px-1.5 py-0.5">
            WINNER
          </span>
        </span>
        <span className="text-right text-white">4,916</span>
        <span className="text-right opacity-40 text-white">837</span>
      </div>

      <div className="grid grid-cols-3 items-center py-2.5 text-[13px] opacity-50">
        <span className="flex items-center gap-1.5 text-white">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" /> Lunch Menu
        </span>
        <span className="text-right text-white">4,799</span>
        <span className="text-right text-white">719</span>
      </div>
    </Card>
  );
}

/* ---------------------------------------------------------------
   Grid 2 — SEO (1/3) + [Collaboration/Localization] (1/3) +
   [Hosting/Security] (1/3), the last two columns each split 50/50
--------------------------------------------------------------- */
function SeoCard() {
  return (
    <Card label="SEO" className={`border-r ${border}`}>
      <h3 className="text-[19px] font-semibold text-white mb-6">Site Settings</h3>

      <div className="grid grid-cols-[1fr_auto] gap-3 mb-4">
        <div>
          <div className="text-[12px] text-white/40 mb-1.5">Title</div>
          <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[12px] text-white truncate">
            Nair Restaurant Operations…
          </div>
        </div>
        <div>
          <div className="text-[12px] text-white/40 mb-1.5">URL</div>
          <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[12px] text-white/50">
            /comet/
          </div>
        </div>
      </div>

      <div className="text-[12px] text-white/40 mb-1.5">Page Description</div>
      <p className="text-[12px] text-white/70 leading-relaxed mb-6">
        Centralize orders, inventory, suppliers, and daily restaurant operations
        in one calm workspace for your whole team.
      </p>

      <div className="text-[11px] text-white/30 mb-2">Social Preview</div>
      <div className="text-[10px] text-white/20 -mt-1">1200 × 630 pixels</div>
      <div className="h-10 rounded-md bg-white/5 border border-white/10 mt-2" />
    </Card>
  );
}

function BranchesCard() {
  return (
    <Card label="Collaboration" className={`border-b ${border}`} padded compact>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[16px] font-semibold text-white">Branches</h3>
        <span className="text-white/40 text-lg leading-none">+</span>
      </div>
      <div className="space-y-0.5 text-[13px]">
        <div className="flex items-center justify-between py-1.5">
          <span className="flex items-center gap-2 text-white/70">
            <span className="w-4 h-4 rounded bg-white/10" /> Main
          </span>
          <span className="text-white/30 text-[11px]">1m</span>
        </div>
        <div className="flex items-center justify-between py-1.5 bg-white/5 rounded-md px-2 -mx-2">
          <span className="flex items-center gap-2 text-white font-medium">
            <span className="w-4 h-4 rounded bg-amber-500/80" /> use-cases
          </span>
          <span className="text-white/30 text-[11px]">1m</span>
        </div>
        <div className="flex items-center justify-between py-1.5 pl-6">
          <span className="flex items-center gap-2 text-white/70">
            <span className="w-4 h-4 rounded bg-sky-500/60" /> publishing
          </span>
          <span className="text-white/30 text-[11px]">8m</span>
        </div>
        <div className="flex items-center justify-between py-1.5 pl-6 opacity-40">
          <span className="flex items-center gap-2 text-white">
            <span className="w-4 h-4 rounded bg-purple-500/60" /> content
          </span>
          <span className="text-[11px]">10m</span>
        </div>
      </div>
    </Card>
  );
}

function LocalesCard() {
  return (
    <Card label="Localization" padded compact>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[16px] font-semibold text-white">Locales</h3>
        <span className="text-white/40 text-lg leading-none">+</span>
      </div>
      <div className="space-y-2 text-[13px]">
        <div className="flex items-center justify-between bg-white/10 rounded-lg px-3 py-2">
          <span className="flex items-center gap-2 text-white font-medium">
            <span className="w-5 h-5 rounded bg-orange-500/80 text-[9px] flex items-center justify-center">
              NL
            </span>
            Dutch
          </span>
          <span className="text-white/50 text-[12px]">35%</span>
        </div>
        <div className="flex items-center justify-between px-3 py-2">
          <span className="flex items-center gap-2 text-white/70">
            <span className="w-5 h-5 rounded bg-emerald-600/70 text-[9px] flex items-center justify-center">
              IT
            </span>
            Italian
          </span>
          <span className="text-white/40 text-[12px]">100%</span>
        </div>
        <div className="flex items-center justify-between px-3 py-2 opacity-40">
          <span className="flex items-center gap-2 text-white">
            <span className="w-5 h-5 rounded bg-red-600/70 text-[9px] flex items-center justify-center">
              CN
            </span>
            Chinese
          </span>
          <span className="text-[12px]">60%</span>
        </div>
      </div>
    </Card>
  );
}

function HostingCard() {
  return (
    <Card label="Hosting" className={`border-b ${border}`} compact>
      <div className="text-right">
        <div className="text-[38px] font-bold text-white leading-none">99.99%</div>
        <div className="text-[38px] font-bold text-white/15 leading-none">uptime</div>
      </div>
    </Card>
  );
}

function SecurityCard() {
  return (
    <Card label="Security" compact>
      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-2 text-white/40">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 12a8 8 0 1 1 8 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="flex items-center gap-1.5 bg-sky-500/90 text-white text-[12px] rounded-full px-2.5 py-1 ml-1">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
            <rect x="5" y="10" width="14" height="10" rx="2" stroke="white" strokeWidth="1.8" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="white" strokeWidth="1.8" />
          </svg>
          https://www.framer.co
        </span>
      </div>
    </Card>
  );
}

/* ---------------------------------------------------------------
   Grid 3 — Performance (1/3) + CMS (2/3)
--------------------------------------------------------------- */
function PerformanceCard() {
  const metrics = [
    { key: "LCP", value: "1.1s", pct: 30 },
    { key: "INP", value: "95ms", pct: 22 },
    { key: "CLS", value: "0.01", pct: 12 },
  ];
  return (
    <Card label="Performance" className={`border-r ${border}`}>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-[16px] font-semibold text-white">Core Web Vitals</h3>
        <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-400/10 rounded px-2 py-1">
          GOOD
        </span>
      </div>
      <div className="space-y-6">
        {metrics.map((m) => (
          <div key={m.key}>
            <div className="flex items-center justify-between text-[13px] mb-2">
              <span className="flex items-center gap-1.5 text-white/60">
                {m.key}
                <span className="w-3.5 h-3.5 rounded-full border border-white/20 text-[9px] flex items-center justify-center">
                  i
                </span>
              </span>
              <span className="text-sky-400 font-medium">{m.value}</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full bg-sky-400 rounded-full" style={{ width: `${m.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function CmsCard() {
  const folders = ["Blog", "Careers"];
  const files = [
    { title: "Generative design rooted i…", tags: ["Design"], color: "bg-emerald-800" },
    { title: "Designing AI tools that fee…", tags: ["AI", "Blog"], color: "bg-sky-800" },
    { title: "Living systems: data…", tags: ["Data", "Blog"], color: "bg-rose-900" },
    { title: "Sustainable interfaces for …", tags: ["Engineering"], color: "bg-teal-800", dim: true },
    { title: "Learning from nature to …", tags: ["AI", "Blog"], color: "bg-blue-900", dim: true },
  ];

  return (
    <Card label="CMS" padded={false}>
      <div className="p-7 pb-0">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[13px] font-medium text-white bg-white/10 rounded-md px-3 py-1.5">
            Collections
          </span>
          <span className="text-[13px] text-white/40 px-3 py-1.5">Fields</span>
          <div className="flex-1" />
          <span className="text-white/40 text-lg leading-none">+</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-white/40">
            <path d="M4 6h16M4 12h10M4 18h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-white/40">
            <path d="M3 5h18M6 12h12M10 19h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-white/40">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
            <path d="M21 21l-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>

        <div className="grid grid-cols-[190px_1fr] gap-6">
          <div className="text-[13px] space-y-1 text-white/50">
            {folders.map((f) => (
              <div key={f} className="flex items-center gap-1.5 py-1">
                <span>›</span> {f}
              </div>
            ))}
            <div>
              <div className="flex items-center gap-1.5 py-1">
                <span>⌄</span> Events
              </div>
              <div className="pl-5 space-y-1">
                <div className="flex items-center justify-between py-1">
                  <span>Categories</span>
                  <span className="text-white/30">13</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span>Speakers</span>
                  <span className="text-white/30">18</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-md px-2 -mx-2 py-1 text-white font-medium">
                  <span>Talks</span>
                  <span className="text-white/40">89</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 py-1">
              <span>›</span> Startups
            </div>
            <div className="flex items-center gap-1.5 py-1 opacity-50">
              <span>›</span> Help
            </div>
            <div className="pt-1 opacity-40">+ Add…</div>
          </div>

          <div>
            <div className={`grid grid-cols-[24px_1fr_60px_100px] text-[11px] text-white/30 pb-2 border-b ${border}`}>
              <span />
              <span>Title</span>
              <span>Image</span>
              <span>Category</span>
            </div>
            {files.map((f, i) => (
              <div
                key={i}
                className={`grid grid-cols-[24px_1fr_60px_100px] items-center py-2.5 border-b ${border} text-[12px] ${
                  f.dim ? "opacity-35" : ""
                }`}
              >
                <span className="text-white/20">⋮⋮</span>
                <span className="text-white/85 truncate pr-2">{f.title}</span>
                <span className={`w-9 h-6 rounded ${f.color}`} />
                <span className="flex gap-1 flex-wrap">
                  {f.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-white/10 text-white/60 text-[10px] rounded px-1.5 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ---------------------------------------------------------------
   Page
--------------------------------------------------------------- */
export default function FeatureGrid() {
  return (
    <section className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8 [&_.bg-black]:bg-white! **:[[class*='text-white']]:text-neutral-900! **:[[class*='border-white']]:border-black/10!">
      <div className={`mx-auto max-w-300 overflow-hidden rounded-[26px] border ${border}`}>
        {/* Grid 1 — 2/3 + 1/3 */}
        <div className={`grid grid-cols-1 md:grid-cols-3 border-b ${border}`}>
          <div className="md:col-span-2">
            <AnalyticsCard />
          </div>
          <div className="border-t md:col-span-1 md:border-t-0">
            <ABTestCard />
          </div>
        </div>

        {/* Grid 2 — 1/3, 1/3 (split 50/50), 1/3 (split 50/50) */}
        <div className={`grid grid-cols-1 md:grid-cols-3 border-b ${border}`}>
          <div className="md:col-span-1">
            <SeoCard />
          </div>
          <div className={`grid min-h-0 grid-rows-2 border-t md:col-span-1 md:border-r md:border-t-0 ${border}`}>
            <div className="min-h-0">
              <BranchesCard />
            </div>
            <div className="min-h-0">
              <LocalesCard />
            </div>
          </div>
          <div className="grid min-h-0 grid-rows-2 border-t md:col-span-1 md:border-t-0">
            <div className="min-h-0">
              <HostingCard />
            </div>
            <div className="min-h-0">
              <SecurityCard />
            </div>
          </div>
        </div>

        {/* Grid 3 — 1/3 + 2/3 */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-1">
            <PerformanceCard />
          </div>
          <div className="border-t md:col-span-2 md:border-t-0">
            <CmsCard />
          </div>
        </div>
      </div>
    </section>
  );
}