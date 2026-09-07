import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BallenaFlavors from "./components/BallenaFlavours";
import BookATable from "./components/BookATable";
import RestaurentLocation from "./components/RestaurentLocation";
import NatureRetreatHero from "./components/NatureHero";
import AboutSection from "./components/AboutHomeSection";
import TeamSection from "./components/TeamSection";
import ComeEnjoySection from "./lassi/ComeEnjoySection";

export default function App() {
  return (
    <div className="min-h-screen w-full text-white flex flex-col font-['DM_Sans',sans-serif] bg-[#171914]">
      <Navbar />
      <Hero />
      <NatureRetreatHero />
      <RestaurentLocation />
      <AboutSection />
      <BallenaFlavors />
      <ComeEnjoySection />
      <BookATable />
      <TeamSection />
      <Contact />
      <Footer />
    </div>
  );
}

