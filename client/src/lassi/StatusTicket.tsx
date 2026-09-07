import { type ReactNode, useEffect, useState } from "react";

export type StatusIconName = "invoice" | "phone" | "calendar";

export type StatusItem = {
  icon?: StatusIconName | ReactNode;
  text: string;
};

const defaultStatuses: StatusItem[] = [
  { icon: "invoice", text: "Processed $8,240 in invoices" },
  { icon: "phone", text: "Called Acme Corp for order status" },
  { icon: "calendar", text: "Confirmed 27 meetings" },
];

export type StatusTickerProps = {
  statuses?: StatusItem[];
  intervalMs?: number;
  fadeMs?: number;
  className?: string;
};

function StatusIcon({ icon }: { icon?: StatusItem["icon"] }) {
  if (typeof icon !== "string") return icon ?? null;

  if (icon === "invoice") {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v16l-3-2-3 2-3-2-3 2-3-2-1 2Z" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    );
  }
  if (icon === "phone") {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export default function StatusTicker({
  statuses = defaultStatuses,
  intervalMs = 2600,
  fadeMs = 300,
  className = "flex items-center justify-center gap-2 text-white/80 text-[13px]",
}: StatusTickerProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (statuses.length < 2) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % statuses.length);
        setVisible(true);
      }, fadeMs);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [fadeMs, intervalMs, statuses.length]);

  if (!statuses.length) return null;

  const current = statuses[index % statuses.length];

  return (
    <div
      className={`${className} transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <StatusIcon icon={current.icon} />
      {current.text}
    </div>
  );
}