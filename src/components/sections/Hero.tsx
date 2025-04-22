import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const nodes: {x: number, y: number, vx: number, vy: number}[] = [];
    const nodeCount = Math.min(window.innerWidth / 30, 50);
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
      });
    }
    
    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const maxDistance = canvas.width * 0.2;
          if (distance < maxDistance) {
            const gradient = ctx.createLinearGradient(
              nodes[i].x, 
              nodes[i].y, 
              nodes[j].x, 
              nodes[j].y
            );
            
            if (theme === 'light') {
              gradient.addColorStop(0, 'rgba(155, 135, 245, 0.5)');
              gradient.addColorStop(1, 'rgba(211, 228, 253, 0.5)');
            } else {
              gradient.addColorStop(0, 'rgba(214, 188, 250, 0.5)');
              gradient.addColorStop(1, 'rgba(229, 222, 255, 0.5)');
            }
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = Math.max(1.5 - distance / maxDistance, 0.5);
            ctx.globalAlpha = 0.5; // Set line opacity to 0.5
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
  }, [theme]);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90">
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
              Kirttinath Ojha
            </span>
          </h1>
          
          <p 
            className={`text-xl md:text-2xl text-muted-foreground opacity-0 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : ''}`}
          >
            Frontend Developer and UI/UX Designer
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
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 via-[#9b87f5] to-[#7E69AB] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10">Get In Touch</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-l-none rounded-r-full border-gradient-primary group transition-all duration-300">
              <a href="#projects" className="relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-[#D6BCFA]/10 to-[#D3E4FD]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10">View My Work</span>
              </a>
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
