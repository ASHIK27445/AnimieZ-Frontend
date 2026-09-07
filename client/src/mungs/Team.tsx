import { useInView } from "./UseInView";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

const team: TeamMember[] = [
  {
    name: "Camille R.",
    role: "Head Chef",
    photo: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Antoine D.",
    role: "Pastry",
    photo: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Léa M.",
    role: "Front of House",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  },
];

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`flex flex-col items-center transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-5 shadow-md">
        <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <p className="font-['Playfair_Display',serif] italic text-lg">{member.name}</p>
      <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-[#2b2b2b]/50 mt-1">{member.role}</p>
    </div>
  );
}

export default function Team() {
  return (
    <section id="the-team" className="w-full bg-white font-['Poppins',sans-serif] text-[#2b2b2b]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 text-center">
        <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#C97B4A] mb-4">Behind The Counter</p>
        <h2 className="font-['Playfair_Display',serif] italic text-4xl sm:text-5xl mb-16">The Team</h2>

        <div className="grid sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}