import "../index.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ParticleRing from "../Components/Particle";
import Portfolio from "../Components/Portfolio";
import Services from "./Services";
import About from "../Components/About";
import Contact from "../Components/Contact";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="my-10 text-primary">
        <ParticleRing />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
