import { useState } from "react";
import "./styles/global.css";
import "./styles/variables.css";
 
// Layout
import Nav from "./components/Nav";
import Footer from "./components/Footer";
 
// Sections
import HeroSection    from "./sections/HeroSection";
import SPFCalculator  from "./sections/SPFCalculator";
import HowItWorks     from "./sections/HowItWorks";
import PricingSection from "./sections/PricingSection";
import Testimonials   from "./sections/Testimonials";
import FAQ            from "./sections/FAQ";
import CTASection     from "./sections/CTASection";
 
// Modals
import DemoModal from "./modals/DemoModal";
 
/**
 * App
 * Root component — owns the global demo-modal open/close state
 * and renders all page sections in order.
 */
export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);
 
  return (
    <>
      <Nav onDemoClick={() => setDemoOpen(true)} />
 
      <main>
        <HeroSection    onDemoClick={() => setDemoOpen(true)} />
        <SPFCalculator/>
        <HowItWorks/>
        <PricingSection/>
        <Testimonials/>
        <FAQ/>
        <CTASection onDemoClick={()=> setDemoOpen(true)}/>
      </main>
 
      <Footer />
 
      {demoOpen && <DemoModal onClose={() => setDemoOpen(false)} />}
    </>
  );
}