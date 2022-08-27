import AccordionSection from "../accordion-section/AccordionSection";
import Cards from "../cards/Cards";
import Hero from "../hero/Hero";
import Navbar from "../Navbar/Navbar";
import Quotes from "../quotes/Quotes";
import Stats from "../stats/Stats";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Stats />
      <AccordionSection />
      <Quotes />
    </>
  );
}
