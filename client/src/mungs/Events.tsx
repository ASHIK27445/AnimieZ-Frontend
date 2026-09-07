import { useInView } from "./UseInView";

const events = [
  { date: "Fri, Sep 4", title: "Acoustic Evening", time: "8:00 PM" },
  { date: "Sat, Sep 12", title: "Sunday Jazz Brunch", time: "11:00 AM" },
  { date: "Fri, Sep 25", title: "Local DJ Set", time: "9:00 PM" },
];

export default function Events() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section id="events" className="w-full bg-[#2b2b2b] text-white font-['Poppins',sans-serif]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-28 text-center">
        <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#C97B4A] mb-4">What's On</p>
        <h2 className="font-['Playfair_Display',serif] italic text-4xl sm:text-5xl mb-16">Live &amp; Local</h2>

        <div ref={ref} className="divide-y divide-white/10 text-left">
          {events.map((event, i) => (
            <div
              key={event.title}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-6 transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
            >
              <div>
                <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-white/50 mb-1">
                  {event.date}
                </p>
                <p className="font-['Playfair_Display',serif] italic text-xl sm:text-2xl">{event.title}</p>
              </div>
              <p className="text-[13px] font-semibold tracking-wide uppercase text-white/70">{event.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}