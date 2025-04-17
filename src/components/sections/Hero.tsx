
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Line nodes
    const nodes: {x: number, y: number, vx: number, vy: number}[] = [];
    const nodeCount = Math.min(window.innerWidth / 30, 50); // Increased node count and density
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.7, // Slightly faster movement
        vy: (Math.random() - 0.5) * 0.7,
      });
    }
    
    // Animation
    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });
      
      // Draw connections
      const primaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--primary')
        .trim();
      
      ctx.strokeStyle = primaryColor || '#000000'; // Fallback color if CSS var not available
      ctx.globalAlpha = 0.12; // Increased visibility
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only connect if close enough
          const maxDistance = canvas.width * 0.2; // Increased connection distance
          if (distance < maxDistance) {
            ctx.lineWidth = 1.5 - distance / maxDistance; // Thicker lines
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 dual-tone-bg gradient-flow overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        aria-hidden="true"
      />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 
            className={`opacity-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : ''}`}
          >
            <span className="text-xl md:text-2xl block text-muted-foreground mb-4">
              Hello, I'm
            </span>
            <span className="gradient-text">
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
            <Button asChild size="lg" className="rounded-full relative overflow-hidden group">
              <a href="#contact">
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10">Get In Touch</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-gradient card-hover">
              <a href="#projects">View My Work</a>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#education" aria-label="Scroll down" className="card-hover rounded-full p-2 block">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}
