import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import About from "./About";
import Section from "./Section";
import Recruiters from "./Recuiters";
import WhyDtu from "./WhyDtu";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Hero />
      <div data-aos="fade-up">
        <About />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <Section />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <Recruiters />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <WhyDtu />
      </div>
    </>
  );
};

export default HomePage;