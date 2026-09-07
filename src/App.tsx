
import Hero from "./page/Hero";

import ZenjiOriginDrop from "./page/ZenjiOriginDrop";
import ScrollCardStack from "./page/ScrollCardStack";
import LatestDrops from "./page/LatestDrops";
import EthosHero from "./page/EthosHero";

export default function App() {
  return (
    <div className="min-h-screen w-full text-white flex flex-col font-['DM_Sans',sans-serif] bg-[#171914]">
      <Hero />
      <ZenjiOriginDrop />
      <ScrollCardStack />
      <LatestDrops />
      <EthosHero />
    </div>
  );
}

