import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItemData {
  question: string;
  answer: string;
}

const FAQS: FAQItemData[] = [
  {
    question: "What can Nair help my restaurant manage?",
    answer:
      "Nair brings orders, table bookings, menu updates, inventory, supplier purchases, staff schedules, and daily performance reports into one workspace.",
  },
  {
    question: "Will it work with our existing POS system?",
    answer:
      "Yes. Nair is designed to work alongside the tools your team already uses. We map your current order and service workflow before turning on each integration.",
  },
  {
    question: "Can multiple branches use the same account?",
    answer:
      "Yes. Owners can manage multiple locations from one account while giving each branch its own menu, team, inventory, and performance view.",
  },
  {
    question: "What does my team still control?",
    answer:
      "Your team stays in control of guest service, approvals, menu decisions, and exceptions. Nair handles repetitive coordination and flags anything that needs attention.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Most restaurants can start with their core workflows in one to two weeks. Larger groups may take longer depending on branches, menus, and integrations.",
  },
  {
    question: "How is Nair priced?",
    answer:
      "Pricing depends on the number of locations, team size, and workflows you need. Book a demo and we will recommend a plan that fits your operation.",
  },
];

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItemData;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-[28px] border border-neutral-200 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.06)]">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 px-6 py-5 text-left"
      >
        <span className="text-[15px] text-neutral-900">{item.question}</span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? "bg-neutral-100" : ""
          }`}
        >
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex"
          >
            <ChevronDown className="w-4 h-4 text-neutral-500" strokeWidth={2} />
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-130 px-6 pb-5 text-[13px] leading-relaxed text-slate-400">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-180">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">Nair for restaurant teams</p>
        <h2 className="mb-10 text-center font-serif text-[44px] text-neutral-900">Questions, answered</h2>

        <div className="flex flex-col gap-1.5">
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}