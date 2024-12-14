import "../index.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ParticleRing from "../Components/Particle";
import Portfolio from "../Components/Portfolio";
import Services from "../Components/Services";
import About from "../Components/About";
import Contact from "../Components/Contact";
import { useRef } from "react";

const Layout = () => {
  const serviceRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background_color font-inter text-primary">
      <Header
        portfolioRef={portfolioRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        serviceRef={serviceRef}
        scrollToSection={scrollToSection}
      />
      <div className="my-10 text-primary">
        <ParticleRing />
        <Services serviceRef={serviceRef} />
        <Portfolio portfolioRef={portfolioRef} />
        <About aboutRef={aboutRef} />
        <Contact contactRef={contactRef} />
      </div>

      <Footer
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        serviceRef={serviceRef}
        portfolioRef={portfolioRef}
      />
    </div>
  );
};

export default Layout;
