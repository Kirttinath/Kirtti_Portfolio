
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Scroll restoration
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Kirttinath Ojha | Frontend Developer and UI/UX Designer</title>
        <meta name="description" content="Portfolio of Kirttinath Ojha, a Frontend Developer and UI/UX Designer specializing in creating modern web applications." />
        <meta name="keywords" content="frontend developer, ui designer, ux designer, web development, portfolio" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Kirttinath Ojha | Frontend Developer and UI/UX Designer" />
        <meta property="og:description" content="Portfolio of Kirttinath Ojha, a Frontend Developer and UI/UX Designer specializing in creating modern web applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kirttinathojha.dev" />
        <meta property="og:image" content="https://example.com/portfolio-preview.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kirttinath Ojha | Frontend Developer and UI/UX Designer" />
        <meta name="twitter:description" content="Portfolio of Kirttinath Ojha, a Frontend Developer and UI/UX Designer specializing in creating modern web applications." />
        <meta name="twitter:image" content="https://example.com/portfolio-preview.jpg" />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
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
