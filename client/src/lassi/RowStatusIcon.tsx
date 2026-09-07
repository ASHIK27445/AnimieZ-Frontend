export type RowStatus = "done" | "active" | "pending";

export function RowStatusIcon({ status }: { status: RowStatus }) {
  if (status === "done") {
    return (
      <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
    );
  }
  if (status === "active") {
    return (
      <svg
        className="w-4 h-4 shrink-0 animate-spin text-[#2b2b2b]/40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path d="M12 3a9 9 0 1 0 9 9" />
      </svg>
    );
  }
  return <span className="w-4 h-4 rounded-full border-2 border-[#2b2b2b]/15 shrink-0"></span>;
}