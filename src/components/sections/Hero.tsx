
import { Button } from "react-bootstrap";
import { ArrowDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
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
            ctx.globalAlpha = 0.5;
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
    <section 
      id="home" 
      className="container-fluid"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom right, rgba(255,255,255,0.95), rgba(255,255,255,0.9))'
      }}
    >
      <canvas 
        ref={canvasRef} 
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0
        }}
        aria-hidden="true"
      />
      
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <motion.div 
          className="text-center mx-auto"
          style={{ maxWidth: '48rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span style={{ 
              display: 'block',
              fontSize: '1.25rem',
              color: 'var(--muted-text)',
              marginBottom: '1rem'
            }}>
              Hello, I'm
            </span>
            <span className="text-gradient">
              Kirttinath Ojha
            </span>
          </motion.h1>
          
          <motion.p 
            className="mb-4"
            style={{
              fontSize: '1.25rem',
              color: 'var(--muted-text)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Frontend Developer and UI/UX Designer
          </motion.p>
          
          <motion.p 
            className="mb-5"
            style={{ fontSize: '1.125rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            I build accessible, user-friendly applications with modern technologies,
            focusing on clean code and engaging user experiences.
          </motion.p>
          
          <motion.div 
            className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a href="#contact" className="btn btn-gradient">
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-outline-primary">
              View My Work
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="position-absolute"
          style={{
            bottom: '3rem',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
          animate={{ 
            y: [0, 10, 0] 
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <a 
            href="#education" 
            aria-label="Scroll down"
            className="d-flex justify-content-center align-items-center"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)'
            }}
          >
            <ArrowDown style={{ width: '24px', height: '24px', color: 'var(--muted-text)' }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
