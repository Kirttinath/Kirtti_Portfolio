
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const heroStyle = {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '5rem',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #fff, #f8f9fa)'
  };
  
  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    opacity: 0.5,
    pointerEvents: 'none'
  };
  
  const headingStyle = {
    transition: 'all 1s ease',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transitionDelay: '300ms'
  };
  
  const subHeadingStyle = {
    transition: 'all 1s ease',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transitionDelay: '500ms'
  };
  
  const textStyle = {
    transition: 'all 1s ease',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transitionDelay: '700ms'
  };
  
  const buttonContainerStyle = {
    transition: 'all 1s ease',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transitionDelay: '900ms'
  };
  
  const gradientButtonStyle = {
    background: 'linear-gradient(to right, #212529, #9b87f5)',
    border: 'none',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1
  };
  
  const ghostButtonStyle = {
    background: 'transparent',
    border: '1px solid #dee2e6',
    position: 'relative',
    overflow: 'hidden',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  };
  
  const scrollDownStyle = {
    position: 'absolute',
    bottom: '3rem',
    left: '50%',
    transform: 'translateX(-50%)',
    animation: 'bounce 2s infinite'
  };
  
  return (
    <section id="home" style={heroStyle}>
      <div style={overlayStyle}></div>
      
      <div className="container position-relative" style={{zIndex: 1}}>
        <div className="text-center mx-auto" style={{maxWidth: '768px'}}>
          <h1 style={headingStyle}>
            <span className="d-block text-secondary mb-3 fs-5">
              Hello, I'm
            </span>
            <span className="display-3 fw-bold gradient-text">
              Kirttinath Ojha
            </span>
          </h1>
          
          <p 
            className="fs-4 text-secondary mb-4"
            style={subHeadingStyle}
          >
            Frontend Developer and UI/UX Designer
          </p>
          
          <p 
            className="mb-5"
            style={textStyle}
          >
            I build accessible, user-friendly applications with modern technologies,
            focusing on clean code and engaging user experiences.
          </p>
          
          <div 
            className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 mt-4"
            style={buttonContainerStyle}
          >
            <a 
              href="#contact" 
              className="btn btn-lg text-white py-3 px-4 rounded-pill"
              style={gradientButtonStyle}
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="btn btn-lg text-dark py-3 px-4 rounded-pill"
              style={ghostButtonStyle}
            >
              View My Work
            </a>
          </div>
        </div>
        
        <div style={scrollDownStyle}>
          <a href="#education" aria-label="Scroll down" className="text-secondary">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
