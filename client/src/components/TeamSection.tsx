export default function TeamSection() {
  return (
    <div className="w-full min-h-screen bg-[#F5F0E6] flex items-center">
      <div className="w-full max-w-350 mx-auto px-10 md:px-16 py-24">
        {/* Headline */}
        <h1 className="text-[#1a1a1a] uppercase leading-[1.1] tracking-[-0.01em] font-medium text-[30px] sm:text-[36px] md:text-[40px] mb-16">
          A team that
          <br />
          moves as one
        </h1>

        {/* Two-column body copy, offset to the right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="hidden md:block md:col-span-3" />

          <div className="md:col-span-4">
            <p className="text-[14px] leading-[1.6] text-[#1a1a1a]">
              Driven by a passion for food and service, Noir Dinnig was
              founded in Paris City in 1993. Since then, the group has
              continued to grow, creating restaurants designed to accompany
              meaningful moments.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-[14px] leading-[1.6] text-[#1a1a1a]">
              Each brand within Noir Dinnig is guided by its own identity and
              sense of place, developed with long-term vision and a deep
              understanding of how people gather. Ballena joins the group as
              its 16th brand, continuing this evolution through a distinct
              expression rooted in its surroundings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}