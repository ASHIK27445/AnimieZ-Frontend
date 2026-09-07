interface MenuItem {
  name: string;
  price: string;
  description: string;
}

interface MenuColumn {
  eyebrow: string;
  title: string;
  items: MenuItem[];
}

const columns: MenuColumn[] = [
  {
    eyebrow: "Fresh Taste Buds",
    title: "Starters",
    items: [
      { name: "Purple Corn Tostada", price: "$36", description: "Ricotta, goat cheese, beetroot and datterini." },
      { name: "Bruno's Scribble", price: "$30", description: "Culatello, Spalla Cotta, Mortadella, Culacciona." },
      { name: "Fresh Oysters Dozen", price: "$59", description: "Our selection of fresh oysters, limes." },
      { name: "Wild Mushroom Arancini", price: "$18", description: "Porcini purée, parmesan, basil." },
    ],
  },
  {
    eyebrow: "Top Rated Dishes",
    title: "Main Dishes",
    items: [
      { name: "Crispy Skin Chicken", price: "$33", description: "Ricotta, radicchio, prosciutto salad, cabernet." },
      { name: "Flank Steak", price: "$35", description: "Served medium rare, salad, mushroom sauce." },
      { name: "Ebony Fillet Steak", price: "$58", description: "Truffle mash, pepper sauce." },
      { name: "Fish & Chips", price: "$33", description: "Atlantic cod fillet, chips, salad, tartare, lemon." },
    ],
  },
  {
    eyebrow: "Drink & Wines",
    title: "Beverage",
    items: [
      { name: "Prickly Pear Tonic", price: "$12", description: "Prickly Pear, Chancaca, Key Lime, and Tonic" },
      { name: "Tommy's Margarita", price: "$13", description: "Tequila, fresh lime juice, and orange liqueur" },
      { name: "Chicha Morada", price: "$12", description: "Purple Corn, Pineapple, Apple, Cinnamon" },
      { name: "Better Boy", price: "$10", description: "Tomato, Salt, Black Pepper, Lemon" },
    ],
  },
];

export default function MenuSection() {
  return (
    <section className="relative bg-white font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-3 gap-14 md:gap-10">
        {columns.map((column) => (
          <div key={column.title} className="text-center">
            <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#E07B2B] mb-3">
              {column.eyebrow}
            </p>
            <h2 className="font-['Playfair_Display',serif] text-[32px] sm:text-[36px] uppercase text-[#1a1a1a] mb-10">
              {column.title}
            </h2>

            <div className="space-y-7 text-left">
              {column.items.map((item) => (
                <div key={item.name}>
                  <div className="flex items-baseline gap-3">
                    <span className="font-['Playfair_Display',serif] text-[19px] font-semibold text-[#1a1a1a] whitespace-nowrap">
                      {item.name}
                    </span>
                    <span className="flex-1 border-b border-dotted border-black/25 translate-y-[-5px]"></span>
                    <span className="text-[19px] text-[#1a1a1a] whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-[14px] text-black/45 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll to top */}
      <a
        href="#top"
        className="fixed right-6 bottom-6 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-[#1a1a1a] hover:bg-[#f5f5f5] transition-colors z-40"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </a>
    </section>
  );
}