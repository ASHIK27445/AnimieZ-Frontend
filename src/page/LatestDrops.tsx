import { useRef, useState } from "react";

type Product = {
  name: string;
  price: string;
  oldPrice?: string;
  image: string;
  sale?: boolean;
};

const products: Product[] = [
  {
    name: "Blue Flame Tee",
    price: "$33.99",
    oldPrice: "$39.99",
    sale: true,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Bushido Tee",
    price: "$39.99",
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Demon Blood Tee",
    price: "$33.99",
    oldPrice: "$39.99",
    sale: true,
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Domain Expansion Tee",
    price: "$39.99",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Free Soul Tee",
    price: "$39.99",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Night Runner Tee",
    price: "$36.99",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Ronin Oversized Tee",
    price: "$42.99",
    image:
      "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?auto=format&fit=crop&w=900&q=85",
  },
];

export default function LatestDrops() {
  const productsRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 5);

  const showNextProduct = () => {
    productsRef.current?.scrollBy({
      left: productsRef.current.clientWidth * 0.78,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-hidden border-t-2 border-[#151515] bg-[#f8f5f3] font-['DM_Sans',sans-serif] text-[#131313]">
      <header className="flex items-start justify-between px-4.5 pb-20 pt-5.5 max-[700px]:px-3.5 max-[700px]:pb-12 max-[700px]:pt-4.5">
        <div>
          <p className="mb-1.25 text-[10px] font-bold tracking-[0.18em] text-[#a29a97] max-[700px]:text-[8px]">
            ANIMIEZ / 2026 COLLECTION
          </p>
          <h1 className="m-0 font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[clamp(48px,5vw,70px)] font-black leading-[0.86] tracking-[-0.04em]">
            LATEST_DROPS
          </h1>
        </div>
        <button
          className="min-w-22 border border-[#161616] bg-transparent px-3.75 py-3 text-[9px] font-bold tracking-[0.16em] text-[#161616] transition-colors hover:bg-[#161616] hover:text-[#f8f5f3]"
          type="button"
          onClick={() => setShowAll((current) => !current)}
        >
          {showAll ? "SHOW_LESS" : "VIEW_ALL"}
        </button>
      </header>

      <section
        ref={productsRef}
        className="scrollbar-none flex gap-4.5 overflow-x-auto max-[700px]:gap-3 max-[700px]:pl-3.5 [&::-webkit-scrollbar]:hidden"
        aria-label="Latest drops"
      >
        {visibleProducts.map((product) => (
          <article
            className="relative min-w-62.5 flex-[0_0_min(22.2vw,300px)] border border-[#1b1b1b] bg-white max-[700px]:min-w-0 max-[700px]:basis-[78vw]"
            key={product.name}
          >
            <div className="group relative aspect-[0.87] overflow-hidden bg-[#d7d1ce]">
              {product.sale && (
                <span className="absolute -left-9 top-2.75 z-10 w-32.5 -rotate-45 bg-[#d71920] py-1.5 text-center text-[8px] font-extrabold tracking-[0.08em] text-white">
                  SALE 15% OFF
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="block h-full w-full object-cover saturate-[0.78] contrast-[0.95] transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.04]"
              />
              <button
                className="absolute bottom-3 right-3 flex h-8.5 w-8.5 items-center justify-center rounded-full border-0 bg-[#111] text-[22px] leading-none text-white opacity-0 transition-all group-hover:-translate-y-0.75 group-hover:opacity-100 focus-visible:opacity-100 max-[700px]:opacity-100"
                type="button"
                aria-label={`Add ${product.name} to cart`}
              >
                +
              </button>
            </div>
            <div className="min-h-19.5 px-3 pb-2.5 pt-3.25">
              <h2 className="mb-1.5 font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[13px] font-black uppercase leading-none tracking-[0.02em]">
                {product.name}
              </h2>
              <div className="flex items-baseline gap-1.25 font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]">
                {product.oldPrice && (
                  <span className="text-[10px] text-[#aaa4a2] line-through">
                    {product.oldPrice}
                  </span>
                )}
                <strong className={`text-[19px] leading-none ${product.sale ? "text-[#d71920]" : ""}`}>
                  {product.price}
                </strong>
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer className="flex justify-end px-4.5 py-7 text-[9px] font-bold tracking-[0.18em] text-[#8e8886] max-[700px]:px-3.5 max-[700px]:py-5.5 max-[700px]:text-[8px]">
        <button
          className="flex h-11 w-11 items-center justify-center border border-[#161616] bg-transparent text-xl text-[#161616] transition-colors hover:bg-[#161616] hover:text-[#f8f5f3]"
          type="button"
          aria-label="Show next products"
          onClick={showNextProduct}
        >
          →
        </button>
      </footer>
    </main>
  );
}
