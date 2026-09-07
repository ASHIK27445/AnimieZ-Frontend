import { useInView } from "./UseInView";

interface Feature {
  heading: string;
  caption: string;
  images: string[];
}

const features: Feature[] = [
  {
    heading: "First of All",
    caption: "A warm, refined space, designed to feel effortless from the moment you walk in.",
    images: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
    ],
  },
  {
    heading: "Travel",
    caption: "An atmosphere gathered from here and elsewhere — cosmopolitan, unforced, authentic.",
    images: [
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=600&auto=format&fit=crop",
    ],
  },
  {
    heading: "Taste It...",
    caption: "Colors, scents, textures — a world built to wake up the senses.",
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop",
    ],
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex gap-3 mb-8">
        {feature.images.map((src, i) => (
          <div key={src} className={`w-24 h-32 sm:w-28 sm:h-36 overflow-hidden rounded-sm ${i === 1 ? "mt-6" : ""}`}>
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <h3 className="font-['Playfair_Display',serif] italic text-2xl sm:text-[28px] mb-4">{feature.heading}</h3>
      <p className="text-[14px] leading-[1.8] text-[#2b2b2b]/65 max-w-[240px]">{feature.caption}</p>
    </div>
  );
}

export default function Concept() {
  return (
    <section id="the-concept" className="w-full bg-white font-['Poppins',sans-serif] text-[#2b2b2b]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 grid md:grid-cols-3 gap-16">
        {features.map((feature, i) => (
          <FeatureCard key={feature.heading} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}