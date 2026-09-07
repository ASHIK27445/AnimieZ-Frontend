
import Hero from "./page/Hero";

import ZenjiOriginDrop from "./page/ZenjiOriginDrop";
import ScrollCardStack from "./page/ScrollCardStack";
import LatestDrops from "./page/LatestDrops";
import EthosHero from "./page/EthosHero";
import AnimieZNavbar from "./components/AnimieZNavbar";
import AnimieZFooter from "./components/AnimieZFooter";

export default function App() {
  return (
    <div id="top" className="min-h-screen w-full text-white flex flex-col font-['DM_Sans',sans-serif] bg-[#171914]">
      <AnimieZNavbar />
      <Hero />
      <div id="origin"><ZenjiOriginDrop /></div>
      <div id="drops">
        <ScrollCardStack />
        <LatestDrops />
      </div>
      <div id="ethos"><EthosHero /></div>
      <AnimieZFooter />
    </div>
  );
}

