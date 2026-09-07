import type { CSSProperties, ReactNode } from "react";

export type BentoGridItem = {
  id: string;
  label?: ReactNode;
  href?: string;
  content: ReactNode;
  columnSpan?: 1 | 2 | 3;
  rowSpan?: number;
  className?: string;
  contentClassName?: string;
};

export type BentoGridTheme = {
  section?: string;
  grid?: string;
  card?: string;
  border?: string;
  text?: string;
  mutedText?: string;
  link?: string;
};

export type ReusableBentoGridProps = {
  items: BentoGridItem[];
  columns?: 1 | 2 | 3 | 4;
  minCardHeight?: string;
  gap?: string;
  className?: string;
  sectionClassName?: string;
  gridClassName?: string;
  theme?: BentoGridTheme;
  renderFooter?: (item: BentoGridItem) => ReactNode;
};

const whiteTheme: Required<BentoGridTheme> = {
  section: "bg-white text-neutral-950",
  grid: "",
  card: "bg-white",
  border: "border-neutral-200",
  text: "text-neutral-950",
  mutedText: "text-neutral-500",
  link: "text-neutral-950 hover:text-neutral-500",
};

const columnClasses: Record<1 | 2 | 3 | 4, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

const spanClasses: Record<1 | 2 | 3, string> = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
};

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ReusableBentoGrid({
  items,
  columns = 3,
  minCardHeight = "min-h-70",
  gap = "gap-0",
  className = "",
  sectionClassName = "py-16",
  gridClassName = "",
  theme: themeOverrides = {},
  renderFooter,
}: ReusableBentoGridProps) {
  const theme = { ...whiteTheme, ...themeOverrides };

  return (
    <section className={`${theme.section} ${sectionClassName} ${className}`}>
      <div
        className={`mx-auto grid w-full max-w-300 grid-cols-1 overflow-hidden rounded-[26px] border-r border-b ${columnClasses[columns]} ${gap} ${theme.border} ${gridClassName}`}
      >
        {items.map((item) => {
          const footer = renderFooter ? renderFooter(item) : item.label;
          const columnSpan = Math.min(item.columnSpan ?? 1, columns) as 1 | 2 | 3;
          const itemStyle = item.rowSpan
            ? ({ gridRow: `span ${item.rowSpan}` } satisfies CSSProperties)
            : undefined;

          return (
            <article
              key={item.id}
              className={`group relative flex flex-col justify-between border-l border-t ${theme.border} ${theme.card} ${minCardHeight} ${spanClasses[columnSpan]} ${item.className ?? ""}`}
              style={itemStyle}
            >
              <div className={`flex-1 p-7 ${theme.text} ${item.contentClassName ?? ""}`}>
                {item.content}
              </div>

              {footer ? (
                <div className={`mt-auto p-7 pt-0 ${theme.text}`}>
                  <a
                    href={item.href ?? "#"}
                    className={`inline-flex items-center gap-1.5 whitespace-nowrap text-[15px] font-medium transition-colors ${theme.link}`}
                  >
                    {footer}
                    <ArrowIcon />
                  </a>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export const reusableBentoWhiteTheme = whiteTheme;



    //   <ReusableBentoGrid
    //     columns={3}
    //     className="border-t border-neutral-200"
    //     items={[
    //       {
    //         id: "analytics",
    //         label: "Analytics",
    //         href: "#analytics",
    //         columnSpan: 2,
    //         content: (
    //           <div className="h-full">
    //             <div className="flex items-start justify-between">
    //               <div>
    //                 <p className="text-sm font-medium text-neutral-500">Today&apos;s overview</p>
    //                 <h3 className="mt-1 text-2xl font-semibold">Restaurant analytics</h3>
    //               </div>
    //               <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">Live</span>
    //             </div>
    //             <div className="mt-8 grid grid-cols-3 gap-4">
    //               <div><p className="text-xs text-neutral-500">Orders</p><p className="mt-1 text-xl font-semibold">413</p></div>
    //               <div><p className="text-xs text-neutral-500">Active tables</p><p className="mt-1 text-xl font-semibold">48</p></div>
    //               <div><p className="text-xs text-neutral-500">Revenue</p><p className="mt-1 text-xl font-semibold">₹2.2L</p></div>
    //             </div>
    //             <div className="mt-8 flex h-20 items-end gap-2 border-b border-neutral-200 pb-2">
    //               {[35, 52, 42, 68, 48, 76, 62, 88, 70, 94, 82, 100].map((height, index) => (
    //                 <span key={index} className="flex-1 rounded-t bg-sky-400" style={{ height: `${height}%` }} />
    //               ))}
    //             </div>
    //           </div>
    //         ),
    //       },
    //       {
    //         id: "orders",
    //         label: "Live Orders",
    //         href: "#orders",
    //         content: (
    //           <div>
    //             <p className="text-sm text-neutral-500">Live queue</p>
    //             <p className="mt-2 text-4xl font-semibold">18</p>
    //             <p className="mt-2 text-sm text-emerald-600">12 ready for pickup</p>
    //             <div className="mt-8 space-y-3 text-sm">
    //               <div className="flex justify-between"><span>Table 08</span><span className="text-amber-600">Cooking</span></div>
    //               <div className="flex justify-between"><span>Takeaway #214</span><span className="text-emerald-600">Ready</span></div>
    //               <div className="flex justify-between"><span>Delivery #215</span><span className="text-neutral-500">Queued</span></div>
    //             </div>
    //           </div>
    //         ),
    //       },
    //       {
    //         id: "inventory",
    //         label: "Inventory",
    //         href: "#inventory",
    //         content: (
    //           <div>
    //             <p className="text-sm text-neutral-500">Stock health</p>
    //             <h3 className="mt-2 text-2xl font-semibold">92%</h3>
    //             <div className="mt-5 h-2 rounded-full bg-neutral-100"><div className="h-full w-[92%] rounded-full bg-emerald-500" /></div>
    //             <p className="mt-6 text-sm text-neutral-500">8 ingredients need attention</p>
    //           </div>
    //         ),
    //       },
    //       {
    //         id: "tables",
    //         label: "Tables",
    //         href: "#tables",
    //         content: (
    //           <div>
    //             <p className="text-sm text-neutral-500">Floor plan</p>
    //             <h3 className="mt-2 text-xl font-semibold">48 active tables</h3>
    //             <div className="mt-6 grid grid-cols-6 gap-2">
    //               {Array.from({ length: 18 }, (_, index) => <span key={index} className={`aspect-square rounded-md ${index % 4 === 0 ? "bg-amber-200" : "bg-emerald-100"}`} />)}
    //             </div>
    //           </div>
    //         ),
    //       },
    //       {
    //         id: "staff",
    //         label: "Staff scheduling",
    //         href: "#staff",
    //         content: (
    //           <div>
    //             <p className="text-sm text-neutral-500">Today&apos;s coverage</p>
    //             <h3 className="mt-2 text-xl font-semibold">24 team members</h3>
    //             <div className="mt-6 space-y-3 text-sm">
    //               <div className="flex justify-between"><span>Front of house</span><span>8 / 8</span></div>
    //               <div className="flex justify-between"><span>Kitchen</span><span>10 / 12</span></div>
    //               <div className="flex justify-between"><span>Delivery</span><span>4 / 4</span></div>
    //             </div>
    //           </div>
    //         ),
    //       },
    //       {
    //         id: "operations-health",
    //         label: "Operations Health",
    //         href: "#operations-health",
    //         className: "min-h-115",
    //         contentClassName: "h-full flex flex-col justify-center",
    //         content: (
    //           <div>
    //             <div className="flex items-center justify-between">
    //               <div>
    //                 <p className="text-sm text-neutral-500">Today&apos;s service health</p>
    //                 <h3 className="mt-2 text-xl font-semibold">Operations health</h3>
    //               </div>
    //               <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">GOOD</span>
    //             </div>
    //             <div className="mt-8 space-y-5">
    //               {[['Orders on time', '96%', '96%'], ['Tables served', '84%', '84%'], ['Inventory ready', '92%', '92%']].map(([label, value, width]) => (
    //                 <div key={label}>
    //                   <div className="flex justify-between text-sm"><span className="text-neutral-500">{label}</span><span className="font-medium text-sky-600">{value}</span></div>
    //                   <div className="mt-2 h-1.5 rounded-full bg-neutral-100"><div className="h-full rounded-full bg-sky-400" style={{ width }} /></div>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         ),
    //       },
    //       {
    //         id: "menu-publishing",
    //         label: "Menu Publishing",
    //         href: "#menu-publishing",
    //         columnSpan: 2,
    //         className: "min-h-115",
    //         contentClassName: "h-full",
    //         content: (
    //           <div className="h-full">
    //             <div className="flex items-center justify-between">
    //               <div><p className="text-sm text-neutral-500">Menu content</p><h3 className="mt-2 text-2xl font-semibold">One menu, every channel</h3></div>
    //               <span className="rounded-lg bg-neutral-100 px-3 py-2 text-xs font-medium text-neutral-600">Published</span>
    //             </div>
    //             <div className="mt-8 grid grid-cols-[150px_1fr] gap-6">
    //               <div className="space-y-2 text-sm text-neutral-500">
    //                 {['Menu items', 'Categories', 'Offers', 'Locations'].map((item, index) => <div key={item} className={`rounded-lg px-3 py-2 ${index === 0 ? 'bg-neutral-100 font-medium text-neutral-900' : ''}`}>{item}</div>)}
    //               </div>
    //               <div className="overflow-hidden rounded-xl border border-neutral-200">
    //                 <div className="grid grid-cols-3 border-b border-neutral-200 bg-neutral-50 px-4 py-3 text-xs text-neutral-500"><span>Item</span><span>Category</span><span>Status</span></div>
    //                 {[['Malabar biryani', 'Signature', 'Live'], ['Appam & stew', 'Breakfast', 'Live'], ['Mango lassi', 'Drinks', 'Scheduled']].map(([item, category, status]) => <div key={item} className="grid grid-cols-3 border-b border-neutral-100 px-4 py-3 text-sm last:border-0"><span className="truncate font-medium">{item}</span><span className="text-neutral-500">{category}</span><span className={status === 'Live' ? 'text-emerald-600' : 'text-amber-600'}>{status}</span></div>)}
    //               </div>
    //             </div>
    //           </div>
    //         ),
    //       },
    //     ]}
    //   />