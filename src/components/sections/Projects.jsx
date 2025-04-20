
import { useEffect, useState, useRef } from "react";
import { Github } from "lucide-react";

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, payment processing, and user authentication.",
    image: "https://images.unsplash.com/photo-1561069934-eee225952461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1540349086034-097b6463a86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Socket.io"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current conditions and forecasts for multiple locations using modern visualization techniques.",
    image: "https://images.unsplash.com/photo-1532978379173-523e16f371f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Vue.js", "D3.js", "OpenWeather API", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Social Media Analytics",
    description: "A comprehensive analytics dashboard for social media managers to track performance across multiple platforms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Firebase", "Chart.js", "Material UI", "Social Media APIs"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const cardStyle = {
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    height: '100%',
    overflow: 'hidden'
  };

  const imageContainerStyle = {
    height: '200px',
    overflow: 'hidden'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  };

  const hoverImageStyle = {
    transform: 'scale(1.05)'
  };

  const badgeStyle = {
    backgroundColor: '#e9ecef',
    color: '#495057',
    borderRadius: '2rem',
    padding: '0.35rem 0.75rem',
    fontSize: '0.75rem',
    margin: '0.25rem',
    display: 'inline-block'
  };

  return (
    <section id="projects" ref={sectionRef}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 mb-3">Projects</h2>
            <p className="lead text-secondary mb-0 mx-auto" style={{maxWidth: '600px'}}>
              A selection of my recent work and personal projects.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {projectsData.map((project, index) => {
            const [isHovered, setIsHovered] = useState(false);
            
            return (
              <div 
                key={index}
                className="col-md-6"
                style={{
                  transition: 'all 0.7s ease',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  transitionDelay: `${index * 0.2}s`
                }}
              >
                <div 
                  className="card h-100 d-flex flex-column" 
                  style={cardStyle}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div style={imageContainerStyle}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      style={{
                        ...imageStyle,
                        ...(isHovered ? hoverImageStyle : {})
                      }}
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="h5 card-title">{project.title}</h3>
                    <p className="card-text text-secondary">{project.description}</p>
                    <div className="my-3">
                      {project.technologies.map((tech) => (
                        <span key={tech} style={badgeStyle}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="card-footer bg-white border-top-0 d-flex justify-content-between gap-2 p-3">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline-dark d-flex align-items-center gap-2"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-dark d-flex align-items-center gap-2"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" x2="21" y1="14" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
