import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------------------------------------------------------
   Clover / logo mark
--------------------------------------------------------------- */
interface CloverMarkProps {
  size?: number;
  color?: string;
  bg?: string;
}

function CloverMark({ size = 16, color = "#211d17", bg = "#ffffff" }: CloverMarkProps) {
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
   Motion-blur photographic panel. Pass a real photo via
   `imageUrl` to match the reference (long-exposure wheat/grass
   field photography) — the gradient is only a fallback so this
   still renders something if no image is supplied.
--------------------------------------------------------------- */
type PanelVariant = "gold" | "green";

interface MotionBlurPanelProps {
  variant?: PanelVariant;
  imageUrl?: string;
  className?: string;
  children?: ReactNode;
  reverse?: boolean;
}

function MotionBlurPanel({
  variant = "gold",
  imageUrl,
  className = "",
  children,
  reverse = false,
}: MotionBlurPanelProps) {
  const gold =
    "linear-gradient(102deg,#8f7a3c 0%,#c9b565 18%,#7d8256 34%,#a9925a 48%,#5c6b8a 62%,#c7bd8f 78%,#3f4a63 100%)";
  const green =
    "linear-gradient(100deg,#5a6e46 0%,#8ea36c 20%,#4f5f3d 38%,#9fae7c 55%,#6d8354 72%,#b9c79a 88%,#4a5a3a 100%)";

  const background = imageUrl
    ? `url(${imageUrl})`
    : variant === "gold"
    ? gold
    : green;

  return (
    <motion.div
      className={`relative overflow-hidden rounded-[36px] ${className}`}
      initial={{ opacity: 0, scale: 0.94, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{
        backgroundImage: background,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* streak texture overlay — keep even with a real photo for extra motion feel */}
      <motion.div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        animate={{
          backgroundPosition: reverse
            ? ["100% 0%", "0% 0%", "100% 0%"]
            : ["0% 0%", "100% 0%", "0% 0%"],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(102deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 2px, transparent 6px, transparent 22px)",
          backgroundSize: "180% 100%",
        }}
      />
      {!imageUrl && variant === "green" && (
        <>
          <motion.div animate={{ x: [0, 18, 0], y: [0, -12, 0], opacity: [0.45, 0.8, 0.45] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute w-40 h-40 bg-white/70 rounded-full blur-3xl top-10 left-1/3" />
          <motion.div animate={{ x: [0, -14, 0], y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute w-28 h-28 bg-white/60 rounded-full blur-2xl top-24 left-1/2" />
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute w-24 h-24 bg-white/50 rounded-full blur-2xl bottom-16 right-1/3" />
        </>
      )}
      {!imageUrl && variant === "gold" && (
        <>
          <motion.div animate={{ x: [0, -16, 0], y: [0, 12, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute w-32 h-32 bg-indigo-200/30 rounded-full blur-3xl top-6 right-16" />
          <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.7, 0.35] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute w-40 h-24 bg-yellow-100/30 rounded-full blur-3xl bottom-10 left-10" />
        </>
      )}
      <motion.div
        initial={{ opacity: 0, y: 18, x: reverse ? 24 : -24 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        animate={{ y: [0, -7, 0], rotate: reverse ? [0, 0.6, 0] : [0, -0.6, 0] }}
        transition={{
          opacity: { duration: 0.6 },
          x: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ---------------------------------------------------------------
   Task row primitive for the console cards
--------------------------------------------------------------- */
type RowStatus = "done" | "active" | "pending";

interface TaskRowData {
  status: RowStatus;
  label: string;
  note?: string;
}

function TaskRow({ status, label, note }: TaskRowData) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-2.5">
        {status === "done" && (
          <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 6 9 17l-5-5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
        {status === "active" && (
          <span className="w-4 h-4 rounded-full border-2 border-neutral-200 border-t-neutral-700 animate-spin shrink-0" />
        )}
        {status === "pending" && (
          <span className="w-4 h-4 rounded-full border-2 border-neutral-200 shrink-0" />
        )}
        <span
          className={`text-[13px] ${
            status === "pending" ? "text-neutral-400" : "text-neutral-800"
          }`}
        >
          {label}
        </span>
      </div>
      <span className="text-[11px] text-neutral-400">{note}</span>
    </div>
  );
}

interface SubRowData {
  label: string;
  note?: string;
}

function SubRow({ label, note }: SubRowData) {
  return (
    <div className="flex items-center justify-between bg-neutral-50 rounded-lg px-3 py-2 my-1 ml-6">
      <div className="flex items-center gap-2 text-neutral-500">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3v12m0 0 5-5m-5 5-5-5M4 19h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[12px]">{label}</span>
      </div>
      <span className="text-[11px] text-neutral-400">{note}</span>
    </div>
  );
}

/* ---------------------------------------------------------------
   Card A — "Lassie working…" cycling task queue
--------------------------------------------------------------- */
interface FrameA {
  rows: TaskRowData[];
}

const FRAMES_A: FrameA[] = [
  {
    rows: [
      { status: "active", label: "Reconcile payment batch", note: "Reviewing payments…" },
      { status: "pending", label: "Check underpayment on claim", note: "Up next" },
    ],
  },
  {
    rows: [
      { status: "active", label: "Check underpayment on claim", note: "Reviewing claim…" },
      { status: "pending", label: "Correct procedure code mismatch", note: "Up next" },
    ],
  },
  {
    rows: [
      { status: "done", label: "Post 3 MetLife claims", note: "Claims posted" },
      { status: "pending", label: "Reconcile payment batch", note: "Up next" },
      { status: "pending", label: "Check underpayment on claim", note: "Pending" },
    ],
  },
];

function CardA() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % FRAMES_A.length), 2600);
    return () => clearInterval(t);
  }, []);
  const frame = FRAMES_A[i];

  return (
    <div className="bg-white rounded-2xl shadow-[0_25px_60px_-20px_rgba(0,0,0,0.35)] w-91.25 px-5 py-4">
      <div className="flex items-center gap-2 mb-2 text-neutral-800">
        <CloverMark size={15} />
        <span className="text-[14px]">Lassie working…</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35 }}
        >
          {frame.rows.map((r, idx) => (
            <TaskRow key={idx} {...r} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ---------------------------------------------------------------
   Card B — payment posting / reconciliation cycling states
--------------------------------------------------------------- */
interface FrameBList {
  kind: "list" | "progress";
  header: string;
  subheader?: string;
  rows: TaskRowData[];
  sub?: SubRowData;
  tail: TaskRowData[];
  progress?: number;
  caption?: string;
}

interface FrameBResult {
  kind: "result";
  label: string;
  amount: string;
}

type FrameB = FrameBList | FrameBResult;

const FRAMES_B: FrameB[] = [
  {
    kind: "list",
    header: "United Healthcare sent a bulk payment",
    subheader: "34 claims  $14,280",
    rows: [{ status: "active", label: "Starting automated posting", note: "" }],
    sub: { label: "Retrieving ERA from United Healthcare", note: "34 EOBs" },
    tail: [{ status: "pending", label: "Fetching ERA from payer portal", note: "" }],
  },
  {
    kind: "list",
    header: "United Healthcare sent a bulk payment",
    subheader: "34 claims  $14,280",
    rows: [{ status: "done", label: "Starting automated posting", note: "" }],
    sub: { label: "Retrieving ERA from United Healthcare", note: "34 EOBs" },
    tail: [{ status: "active", label: "Fetching ERA from payer portal", note: "" }],
  },
  {
    kind: "progress",
    header: "Posting United Healthcare batch",
    rows: [{ status: "done", label: "Matched patient ledgers — 31 claims found", note: "" }],
    sub: { label: "Retrieving ERA from United Healthcare", note: "34 EOBs" },
    tail: [{ status: "active", label: "Awaiting Dentrix confirmation", note: "" }],
    progress: 62,
    caption: "Estimated 15 seconds remaining…",
  },
  {
    kind: "result",
    label: "Reconciled",
    amount: "$12,139.92",
  },
];

function CardB() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % FRAMES_B.length), 2800);
    return () => clearInterval(t);
  }, []);
  const f = FRAMES_B[i];

  return (
    <div className="bg-white rounded-2xl shadow-[0_25px_60px_-20px_rgba(0,0,0,0.35)] w-95 px-5 py-4 min-h-37.5">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35 }}
        >
          {f.kind === "result" ? (
            <div>
              <div className="flex items-center gap-2 text-neutral-500 text-[13px] mb-2">
                <CloverMark size={14} />
                <span>{f.label}</span>
              </div>
              <div className="font-serif text-[34px] text-neutral-900">{f.amount}</div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 text-neutral-800 mb-0.5">
                <CloverMark size={14} />
                <span className="text-[13px]">{f.header}</span>
              </div>
              {f.subheader && (
                <div className="text-[11px] text-neutral-400 ml-5.5 mb-2">
                  {f.subheader}
                </div>
              )}
              {f.rows.map((r, idx) => (
                <TaskRow key={idx} {...r} />
              ))}
              {f.sub && <SubRow {...f.sub} />}
              {f.tail.map((r, idx) => (
                <TaskRow key={idx} {...r} />
              ))}
              {f.kind === "progress" && (
                <div className="mt-2">
                  <div className="h-1 bg-neutral-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-sky-400"
                      initial={{ width: "10%" }}
                      animate={{ width: `${f.progress ?? 0}%` }}
                      transition={{ duration: 1.2 }}
                    />
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1.5">{f.caption}</div>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ---------------------------------------------------------------
   Chat card — "And answers your questions"
--------------------------------------------------------------- */
function ChatCard() {
  return (
    <div className="bg-white rounded-2xl shadow-[0_25px_60px_-20px_rgba(0,0,0,0.35)] w-105 h-67.5 flex flex-col px-5 py-4">
      <div className="flex-1">
        <div className="flex justify-end mb-4">
          <div className="bg-sky-50 text-sky-800 text-[12px] rounded-2xl rounded-tr-sm px-3.5 py-2 max-w-[85%]">
            What’s the latest with the United Healthcare payments?
          </div>
        </div>
        <div className="flex items-center gap-1">
          <CloverMark size={14} />
          <span className="flex gap-0.5 ml-1">
            {[0, 1, 2].map((d) => (
              <motion.span
                key={d}
                className="w-1 h-1 rounded-full bg-neutral-300"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: d * 0.2 }}
              />
            ))}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 border-t border-neutral-100 pt-3">
        <span className="w-6 h-6 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 text-sm">
          +
        </span>
        <span className="flex-1 text-[12px] text-neutral-300">Message Lassie…</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-neutral-300">
          <path d="M9 18a3 3 0 0 0 6 0v-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <rect x="9" y="3" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        <span className="w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 19V5M12 5l-6 6M12 5l6 6"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------
   Feature scene layout (text + panel), alternating sides.

   STACKING TECHNIQUE (explicit z-index — no DOM-order tricks):
   Each scene is `position: sticky; top: 0` inside a wrapper taller
   than the viewport (100vh + holdVh), so it holds still on screen
   while the scroll continues. To make LATER scenes visually cover
   EARLIER ones, each scene gets an explicit `zIndex: index + 1`
   based on its position in the array. Higher index = higher
   z-index = paints on top, regardless of DOM/paint order or how
   deeply nested the scroll container is. This is simpler and more
   robust than relying on `flex-direction: column-reverse` +
   reversed array order — scenes stay in normal, readable order.
--------------------------------------------------------------- */
interface FeatureSceneProps {
  reverse?: boolean;
  title: [string, string];
  body: string;
  panelVariant: PanelVariant;
  imageUrl?: string;
  card: ReactNode;
  /** Extra scroll room (on top of 100vh) the scene holds still for. */
  holdVh?: number;
  /** Stacking order — later scenes should get a higher index. */
  index: number;
}

function FeatureScene({
  reverse = false,
  title,
  body,
  panelVariant,
  imageUrl,
  card,
  holdVh = 60,
  index,
}: FeatureSceneProps) {
  return (
    <motion.section
      className="relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.8, delay: index * 0.08 }}
      style={{ height: `${100 + holdVh}vh`, zIndex: index + 1 }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#f6f2e8] flex items-center px-8 md:px-16">
        <div
          className={`max-w-7xl mx-auto w-full grid md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-center ${
            reverse ? "md:[direction:rtl]" : ""
          }`}
        >
          <div style={{ direction: "ltr" }}>
            <h3 className="font-serif text-[26px] leading-tight text-neutral-900">
              {title[0]}
              <br />
              {title[1]}
            </h3>
            <p className="text-[15px] text-neutral-500 mt-3 leading-relaxed max-w-70">
              {body}
            </p>
          </div>

          <div style={{ direction: "ltr" }} className="relative">
            <MotionBlurPanel
              variant={panelVariant}
              imageUrl={imageUrl}
              reverse={reverse}
              className="w-full h-95 md:h-110 flex items-center justify-center"
            >
              {card}
            </MotionBlurPanel>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ---------------------------------------------------------------
   Page — scenes declared in normal reading/scroll order. Stacking
   order comes purely from each scene's `index` → z-index, so no
   DOM reversal or flex tricks are needed.
--------------------------------------------------------------- */
const SCENES = [
  {
    key: "paperwork",
    title: ["Lassie does", "your paperwork"] as [string, string],
    body: "Handling enrollments, converting payments to EFTs, and posting them automatically, without delay.",
    panelVariant: "gold" as PanelVariant,
    // imageUrl: "/images/wheat-field-motion-blur.jpg",
    card: <CardA />,
  },
  {
    key: "loop",
    reverse: true,
    title: ["Keeps you", "in the loop"] as [string, string],
    body: "Watch Lassie complete your paperwork, asking for your input when needed on the most complex issues.",
    panelVariant: "green" as PanelVariant,
    // imageUrl: "/images/grass-field-motion-blur.jpg",
    card: <CardB />,
  },
  {
    key: "answers",
    title: ["And answers", "your questions"] as [string, string],
    body: "Got a question about a claim? Want to see how your week is tracking? Lassie is always ready to help.",
    panelVariant: "green" as PanelVariant,
    // imageUrl: "/images/grass-field-motion-blur-2.jpg",
    card: <ChatCard />,
    holdVh: 0,
  },
];

export default function LassiFeatures() {
  return (
    <div className="bg-[#f6f2e8]">

      <div className="relative">
        {SCENES.map((scene, i) => {
          const { key, ...sceneProps } = scene;
          return <FeatureScene key={key} {...sceneProps} index={i} />;
        })}
      </div>
    </div>
  );
}