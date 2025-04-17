
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 
            className={`opacity-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : ''}`}
          >
            <span className="text-xl md:text-2xl block text-muted-foreground mb-4">
              Hello, I'm
            </span>
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              John Doe
            </span>
          </h1>
          
          <p 
            className={`text-xl md:text-2xl text-muted-foreground opacity-0 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : ''}`}
          >
            Full Stack Developer & UX Designer
          </p>
          
          <p 
            className={`opacity-0 transition-all duration-1000 delay-700 text-lg ${isVisible ? 'opacity-100' : ''}`}
          >
            I build accessible, user-friendly applications with modern technologies,
            focusing on clean code and engaging user experiences.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 opacity-0 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100' : ''}`}
          >
            <Button asChild size="lg" className="rounded-full">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="#projects">View My Work</a>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#education" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}
