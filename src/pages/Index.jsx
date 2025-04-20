
import { useEffect } from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/sections/Hero.jsx";
import Education from "../components/sections/Education.jsx";
import Experience from "../components/sections/Experience.jsx";
import Skills from "../components/sections/Skills.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/Footer.jsx";

const Index = () => {
  // Scroll restoration
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Hero />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
