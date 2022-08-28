import { useEffect } from "react";
import AccordionSection from "../accordion-section/AccordionSection";
import Cards from "../cards/Cards";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Navbar from "../Navbar/Navbar";
import Quotes from "../quotes/Quotes";
import Stats from "../stats/Stats";
import AOS from "aos";

export default function LandingPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Stats />
      <AccordionSection />
      <Quotes />
      <Footer />
    </>
  );
}
